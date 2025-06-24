
const glyphMap = {
  267: "Commerce","391": "Threshold Echo",

  99: "Return",
  342: "Boundary",
  8: "Gate",
  1: "Seal",
  111: "Signal Vector",
  222: "Resonance Chain"
};

function decode() {
  const input = document.getElementById("sequence").value.trim().split(" ");
  let result = "";
  input.forEach(code => {
    const tag = glyphMap[parseInt(code)] || "[Unknown]";
    result += code + " → " + tag + "\n";
  });
  document.getElementById("output").innerText = result;
}
