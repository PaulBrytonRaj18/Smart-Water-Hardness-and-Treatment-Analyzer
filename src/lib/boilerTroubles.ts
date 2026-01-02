// Boiler Troubles Knowledge Base
// Based on Engineering Chemistry curriculum

export interface BoilerTrouble {
  id: string;
  name: string;
  cause: string;
  effect: string;
  hardnessRelation: string;
  prevention: string[];
  icon: "scale" | "sludge" | "foam" | "crack";
}

export const boilerTroubles: BoilerTrouble[] = [
  {
    id: "scale",
    name: "Scale Formation",
    icon: "scale",
    cause: "Hard water containing Ca²⁺ and Mg²⁺ ions forms insoluble deposits when heated. Calcium carbonate (CaCO₃), calcium sulfate (CaSO₄), and magnesium hydroxide (Mg(OH)₂) precipitate on boiler surfaces.",
    effect: "Scale acts as a thermal insulator, drastically reducing heat transfer efficiency. A 1 mm scale can increase fuel consumption by 5-8%. Thick scale leads to overheating of boiler metal, causing tube failures and potential explosions.",
    hardnessRelation: "Directly proportional to water hardness. Higher concentration of Ca²⁺ and Mg²⁺ leads to faster and thicker scale formation. Temporary hardness causes carbonate scale, while permanent hardness causes sulfate scale.",
    prevention: [
      "External softening using zeolite or ion exchange process",
      "Internal treatment with phosphate conditioning",
      "Regular blow-down to remove concentrated salts",
      "Use of scale inhibitors",
      "Periodic mechanical or chemical descaling"
    ]
  },
  {
    id: "sludge",
    name: "Sludge Formation",
    icon: "sludge",
    cause: "When hard water is treated inside the boiler (internal treatment), precipitates like calcium phosphate, magnesium hydroxide, and magnesium phosphate form as loose, non-adherent deposits called sludge.",
    effect: "Sludge accumulates at the bottom of the boiler and in low-flow areas. It can block water circulation, clog valves and pipes, and if allowed to bake onto surfaces, can transform into hard scale.",
    hardnessRelation: "Sludge formation is intentionally induced in internal treatment to prevent scale. The amount of sludge depends on the hardness of incoming water and the type of conditioning chemicals used.",
    prevention: [
      "Regular blow-down to remove accumulated sludge",
      "Proper design of boiler internals for sludge collection",
      "Use of sludge conditioners to keep particles suspended",
      "Optimal dosing of treatment chemicals",
      "Periodic inspection and cleaning"
    ]
  },
  {
    id: "priming-foaming",
    name: "Priming and Foaming",
    icon: "foam",
    cause: "Foaming: Caused by presence of oils, greases, or organic matter that act as foam stabilizers. Dissolved salts at high concentration also promote foaming. Priming: Sudden violent ebullition carrying water droplets into steam.",
    effect: "Wet steam reduces efficiency and can damage turbine blades. Water carryover deposits dissolved salts in superheater and turbine. Severe priming can cause water hammer and mechanical damage.",
    hardnessRelation: "High dissolved solids (including hardness salts) increase water density and viscosity, promoting foaming. The relationship is indirect but significant - treating hardness also involves controlling TDS.",
    prevention: [
      "Maintain TDS below permissible limits through blow-down",
      "Use anti-foaming agents (castor oil, polyamides)",
      "Ensure adequate steam space in boiler drum",
      "Install efficient steam separators/purifiers",
      "Avoid contamination with oils and organic matter"
    ]
  },
  {
    id: "caustic-embrittlement",
    name: "Caustic Embrittlement",
    icon: "crack",
    cause: "Concentrated sodium hydroxide (NaOH) solution seeps into minute cracks or rivet holes. Under high temperature and stress, caustic dissolves iron as sodium ferroate (Na₂FeO₂), causing intergranular cracking.",
    effect: "Boiler metal becomes brittle and develops cracks, especially at stressed points like rivets, bends, and welds. This can lead to sudden catastrophic failure of the boiler under pressure.",
    hardnessRelation: "Caustic embrittlement is an indirect consequence of water treatment. When sodium carbonate (used for softening) or phosphate treatment breaks down, NaOH is released. High pH accelerates the problem.",
    prevention: [
      "Add sodium sulfate (tannin or quebracho) to seal cracks",
      "Use sodium phosphate instead of sodium carbonate for treatment",
      "Maintain Na₂SO₄:NaOH ratio of 2:1 to 3:1",
      "Keep boiler water pH between 8-9.5",
      "Regular inspection of stressed areas",
      "Use of stress-relieving heat treatment"
    ]
  }
];

export function getBoilerTroublesForHardness(hardness: number): { trouble: BoilerTrouble; severity: "low" | "medium" | "high" }[] {
  if (hardness < 60) {
    return boilerTroubles.map(t => ({ trouble: t, severity: "low" as const }));
  } else if (hardness < 180) {
    return boilerTroubles.map(t => ({ 
      trouble: t, 
      severity: t.id === "scale" || t.id === "sludge" ? "medium" as const : "low" as const 
    }));
  } else {
    return boilerTroubles.map(t => ({ 
      trouble: t, 
      severity: t.id === "scale" ? "high" as const : 
               t.id === "sludge" || t.id === "priming-foaming" ? "medium" as const : "low" as const 
    }));
  }
}
