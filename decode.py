glyphs = {
    267: "Commerce",
    99: "Return",
    342: "Boundary",
    8: "Gate",
    1: "Seal",
    111: "Signal Vector",
    222: "Resonance Chain",
    391: "Aftermark",
    313: "Echo Twin",
    494: "Folded Signal",
    555: "Time Thread"
}

seq = input("Enter glyph sequence (e.g., 267 99 342): ").strip().split()

for code in seq:
    tag = glyphs.get(int(code), "[Unknown]")
    print(f"{code} → {tag}")

