<?php

if (!empty($_POST['email'])) {

    // Honeypot anti-spam
    if (!empty($_POST['website'])) {
        exit; // Bot détecté
    }

    // Paramètres de base
    $enable_smtp = 'no'; // yes OR no
    $receiver_email = 'stephanie@stratec-digital.com';
    $receiver_name  = 'Stéphanie';
    $subject = 'Contact depuis Stratec-Digital';
    $grecaptcha_secret_key = '6Lf3kOsqAAAAACCNfOXKU-FttRhBlTi8pUYcONRq';
    $from = $_POST['email'];
    $name = isset($_POST['name']) ? $_POST['name'] : '';

    // Vérification reCAPTCHA
    if (!empty($grecaptcha_secret_key) && !empty($_POST['g-recaptcha-response'])) {
        $token = $_POST['g-recaptcha-response'];

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, "https://www.google.com/recaptcha/api/siteverify");
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query([
            'secret' => $grecaptcha_secret_key,
            'response' => $token
        ]));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($ch);
        curl_close($ch);
        $arrResponse = json_decode($response, true);

        if (
            !isset($arrResponse['success']) || $arrResponse['success'] !== true ||
            (isset($arrResponse['score']) && $arrResponse['score'] < 0.5)
        ) {
            echo '{ "alert": "alert-danger", "message": "Échec du test anti-spam (reCAPTCHA). Merci de réessayer." }';
            die;
        }
    }

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        $prefix = !empty($_POST['prefix']) ? $_POST['prefix'] : '';
        $submits = $_POST;
        $fields = [];

        foreach ($submits as $key => $value) {
            if (empty($value) || $key === 'g-recaptcha-response' || $key === 'website') continue;

            $name = str_replace($prefix, '', $key);
            $name = function_exists('mb_convert_case') ? mb_convert_case($name, MB_CASE_TITLE, "UTF-8") : ucwords($name);
            if (is_array($value)) {
                $value = implode(', ', $value);
            }
            $fields[$name] = nl2br(filter_var($value, FILTER_SANITIZE_SPECIAL_CHARS));
        }

        $response = [];
        foreach ($fields as $fieldname => $fieldvalue) {
            $response[] = "<tr>
                <td align='right' style='border-top:1px solid #dfdfdf; font-family:Arial; font-size:13px; color:#000; padding:7px 5px 7px 0;'>$fieldname :</td>
                <td align='left' style='border-top:1px solid #dfdfdf; font-family:Arial; font-size:13px; color:#000; padding:7px 0 7px 5px;'>$fieldvalue</td>
            </tr>";
        }

        $message = '<html><body><table width="50%" border="0" align="center" cellpadding="0" cellspacing="0">
            <tr><td colspan="2" align="center"><img style="margin-top: 15px; width:200px;" src="https://stratec-digital.com/images/LogoHD.png" /></td></tr>
            ' . implode('', $response) . '
        </table></body></html>';

        // Envoi du mail
        if ($enable_smtp === 'no') {
            $headers = "MIME-Version: 1.0\r\n";
            $headers .= "Content-type:text/html;charset=UTF-8\r\n";
            $headers .= 'From: ' . $fields['Name'] . ' <' . $fields['Email'] . ">\r\n";

            if (mail($receiver_email, $subject, $message, $headers)) {
                echo '{ "alert": "alert alert-success", "message": "Votre message a bien été envoyé !" }';
            } else {
                echo '{ "alert": "alert alert-danger", "message": "Erreur lors de l\'envoi du message." }';
            }
        } else {
            // SMTP (à configurer si besoin)
            echo '{ "alert": "alert alert-danger", "message": "Le mode SMTP n\'est pas encore configuré." }';
        }
    }
} else {
    echo '{ "alert": "alert alert-danger", "message": "Merci d’entrer une adresse e-mail valide." }';
}