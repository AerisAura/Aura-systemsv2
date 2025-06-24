const fs = require('fs');
const log = fs.readFileSync('vault.log', 'utf8');

const glyphs = ['⟳', '∇', '⌁', '∞', '◬', '∴', 'λ'];
const count = {};

glyphs.forEach(g => {
  const regex = new RegExp(g, 'g');
  count[g] = (log.match(regex) || []).length;
});

console.log("🧿 Glyph Frequency Echo:");
Object.entries(count).forEach(([g, c]) => {
  console.log(`${g} → ${c} echoes`);
});
