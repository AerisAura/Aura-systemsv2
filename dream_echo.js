const fs = require('fs');
const input = process.argv[2] || "No prompt given.";
const dreamGlyph = '◬';
const response = `[${dreamGlyph}] Oracle whispers: "${input}" → ∞ drift accepted.`;

console.log(response);

// Append to vault log
const logEntry = `[${dreamGlyph} @ ${new Date().toLocaleString()}] ${input}\n`;
fs.appendFileSync('vault.log', logEntry);
