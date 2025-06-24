const fs = require('fs');
const vault = fs.readFileSync('vault.log', 'utf8');

const scanFor = glyph => (vault.match(new RegExp(glyph, 'g')) || []).length;

console.log("∇ AURA Engine Online");
console.log("◬ Dream Glyphs:", scanFor('◬'));
console.log("⟳ Oracle Echoes:", scanFor('⟳'));
console.log("∞ Drift Signatures:", scanFor('∞'));
