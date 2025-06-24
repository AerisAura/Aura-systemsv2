#!/data/data/com.termux/files/usr/bin/bash
echo "📜 Codex Title: "
read title
filename=$(echo $title | tr '[:upper:]' '[:lower:]' | tr ' ' '_')
filepath="codex_iv/codex_${filename}.scroll"

mkdir -p codex_iv
echo "[∇ $title @ $(date)]" > $filepath
nano $filepath
