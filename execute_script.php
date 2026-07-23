<?php
// Emplacement du fichier de logs
$logFile = "logs.txt";
$blockedIpsFile = "blocked_ips.txt";

// Assurez-vous que le script Python existe
$scriptPath = __DIR__ . "/script.py";
if (!file_exists($scriptPath)) {
    die("Erreur : script Python introuvable.");
}

// Exécuter le script Python
$output = shell_exec("python3 " . escapeshellarg($scriptPath) . " 2>&1");

// Afficher la sortie du script
echo "<pre>$output</pre>";

// Lire les IP bloquées
if (file_exists($blockedIpsFile)) {
    echo "<h3>IP Bloquées :</h3><pre>" . htmlspecialchars(file_get_contents($blockedIpsFile)) . "</pre>";
} else {
    echo "<p>Aucune IP bloquée pour l'instant.</p>";
}
?>

<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
$output = shell_exec("/usr/bin/python3 script.py 2>&1");
echo "<pre>$output</pre>";
?>
