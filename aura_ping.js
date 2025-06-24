const { exec } = require('child_process');

// Run zmap scan on common port (e.g., HTTP)
exec('zmap -p 80 -n 100 0.0.0.0/0', (err, stdout, stderr) => {
  if (err) {
    console.error('Drift detected:', stderr);
    return;
  }
  console.log('Echo results:\n');
  const targets = stdout.trim().split('\n');
  targets.forEach(ip => {
    console.log(`◬ Pinged: ${ip} → Glyph: ⟳`);
  });
});
