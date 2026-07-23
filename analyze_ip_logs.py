from collections import Counter
import re
import requests
import os

# Chemin du fichier de logs
txt_log_file = "logs.txt"
# Clé API AbuseIPDB (à remplacer par la tienne)
API_KEY = "e79cb3821f69a6077e139f8f17ced325bdef575c723efdbcfa71ab225463891423e8108dce9db478"
# Fichier de blocage des IPs
blocked_ips_file = "blocked_ips.txt"

# Lire les logs et extraire les adresses IP
def extract_ips(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        logs = f.readlines()

    # Regex pour extraire les IPs
    ip_pattern = re.compile(r'\b(?:[0-9]{1,3}\.){3}[0-9]{1,3}\b')

    ip_list = [ip_pattern.search(line).group() for line in logs if ip_pattern.search(line)]
    return ip_list

# Analyser les IPs suspectes
def analyze_ips(ip_list, threshold=10):
    ip_count = Counter(ip_list)
    suspicious_ips = {ip: count for ip, count in ip_count.items() if count >= threshold}
    return ip_count, suspicious_ips

# Vérifier une IP sur AbuseIPDB
def check_ip_abuse(ip):
    url = "https://api.abuseipdb.com/api/v2/check"
    headers = {"Key": API_KEY, "Accept": "application/json"}
    params = {"ipAddress": ip, "maxAgeInDays": 90}
    response = requests.get(url, headers=headers, params=params)

    if response.status_code == 200:
        data = response.json()
        return data["data"]["abuseConfidenceScore"]
    return None

# Bloquer une IP en l'ajoutant à un fichier
def block_ip(ip):
    with open(blocked_ips_file, "a") as f:
        f.write(ip + "\n")
    print(f"IP {ip} bloquée et ajoutée à {blocked_ips_file}")

# Exécution du script
if __name__ == "__main__":
    ips = extract_ips(txt_log_file)
    all_ips, suspicious_ips = analyze_ips(ips)

    print("Top IPs suspectes :")
    with open("suspicious_ips.txt", "w") as f:
        for ip, count in sorted(suspicious_ips.items(), key=lambda x: x[1], reverse=True):
            abuse_score = check_ip_abuse(ip)
            print(f"{ip} - {count} tentatives - Score d'abus: {abuse_score}")
            f.write(f"{ip} - {count} tentatives - Score d'abus: {abuse_score}\n")

            # Bloquer l'IP si le score d'abus est élevé (> 50 par exemple)
            if abuse_score is not None and abuse_score > 50:
                block_ip(ip)
