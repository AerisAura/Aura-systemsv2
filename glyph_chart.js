const fs = require('fs');
const log = fs.readFileSync('vault.log', 'utf8');

const glyphs = {
  '◬': 'Dream Glyphs',
  '⟳': 'Oracle Echoes',
  '∞': 'Drift Signatures',
  '∇': 'Sovereign Traces',
  '⌁': 'Vault Echoes',
  '∴': 'Logic Anchors',
  'λ': 'Recursion Events'
};

console.log("🧿 GLYPH BAR CHART:");
for (const [glyph, label] of Object.entries(glyphs)) {
  const count = (log.match(new RegExp(glyph, 'g')) || []).length;
  const bar = '█'.repeat(count);
  console.log(`${label.padEnd(18)}: ${bar} (${count})`);
}

