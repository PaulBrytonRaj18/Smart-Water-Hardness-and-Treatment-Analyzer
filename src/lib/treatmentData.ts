// Water Treatment Knowledge Base
// Based on standard Engineering Chemistry curriculum

export interface TreatmentMethod {
  id: string;
  name: string;
  type: "internal" | "external";
  principle: string;
  application: string;
  advantages: string[];
  limitations: string[];
  chemicalReaction?: string;
}

export const internalTreatments: TreatmentMethod[] = [
  {
    id: "phosphate",
    name: "Phosphate Conditioning",
    type: "internal",
    principle: "Calcium ions react with sodium phosphate to form soft, non-adherent sludge of calcium phosphate that can be removed by blow-down.",
    application: "Used when water hardness is relatively low and external treatment is not economically feasible. Suitable for low to medium pressure boilers.",
    chemicalReaction: "3Ca²⁺ + 2Na₃PO₄ → Ca₃(PO₄)₂↓ + 6Na⁺",
    advantages: [
      "Prevents scale formation effectively",
      "Calcium phosphate sludge is non-adherent and easily removed",
      "Simple to implement in existing systems",
      "Cost-effective for small-scale operations"
    ],
    limitations: [
      "Produces sludge requiring regular blow-down",
      "Not suitable for high-pressure boilers (above 100 bar)",
      "Requires careful pH control",
      "May cause phosphate hide-out at high pressures"
    ]
  },
  {
    id: "calgon",
    name: "Calgon Conditioning",
    type: "internal",
    principle: "Sodium hexametaphosphate (Calgon) sequesters calcium ions, forming highly soluble calcium hexametaphosphate complex, preventing scale formation.",
    application: "Used for water with moderate hardness. Effective in preventing scale in heat exchangers and cooling systems.",
    chemicalReaction: "2Ca²⁺ + Na₂[Na₄(PO₃)₆] → Na₂[Ca₂(PO₃)₆] + 4Na⁺",
    advantages: [
      "Forms soluble complex - no sludge formation",
      "Effective at low concentrations",
      "Prevents existing scale from growing",
      "Suitable for cooling water systems"
    ],
    limitations: [
      "Not suitable for boilers above 60°C (hydrolyzes at high temperature)",
      "Relatively expensive compared to phosphate treatment",
      "Effectiveness decreases with very hard water",
      "Requires precise dosing"
    ]
  },
  {
    id: "aluminate",
    name: "Sodium Aluminate Conditioning",
    type: "internal",
    principle: "Sodium aluminate reacts with magnesium salts to form magnesium hydroxide, which absorbs silica and settles as sludge.",
    application: "Specifically used to remove silica and magnesium from boiler water. Essential for high-pressure boilers where silica causes severe problems.",
    chemicalReaction: "MgCl₂ + 2NaAlO₂ + 4H₂O → Mg(OH)₂↓ + 2Al(OH)₃↓ + 2NaCl",
    advantages: [
      "Effectively removes silica (prevents silica scaling)",
      "Removes magnesium hardness",
      "Prevents silica volatilization at high pressure",
      "Essential for high-pressure boiler operation"
    ],
    limitations: [
      "Expensive treatment method",
      "Produces gelatinous sludge requiring careful blow-down",
      "May cause foaming if overdosed",
      "Not effective for calcium removal"
    ]
  }
];

export const externalTreatments: TreatmentMethod[] = [
  {
    id: "zeolite",
    name: "Zeolite (Permutit) Process",
    type: "external",
    principle: "Sodium zeolite (Na₂Ze) exchanges its sodium ions with calcium and magnesium ions from hard water. Exhausted zeolite is regenerated using brine (NaCl solution).",
    application: "Widely used for softening large volumes of water for industrial use. Suitable for water with low temporary hardness.",
    chemicalReaction: "Ca²⁺ + Na₂Ze → CaZe + 2Na⁺\nMg²⁺ + Na₂Ze → MgZe + 2Na⁺\nRegeneration: CaZe + 2NaCl → Na₂Ze + CaCl₂",
    advantages: [
      "Removes hardness completely (0 ppm achievable)",
      "Continuous process with automatic regeneration",
      "High flow rates possible",
      "Long service life of zeolite bed"
    ],
    limitations: [
      "Does not remove anions (chlorides, sulfates remain)",
      "Not suitable for water with high mineral content",
      "Sodium content increases (not suitable for drinking water)",
      "Does not remove silica or dissolved gases"
    ]
  },
  {
    id: "ion-exchange",
    name: "Ion Exchange Process",
    type: "external",
    principle: "Uses synthetic ion exchange resins - cation exchanger (RH₂) removes Ca²⁺, Mg²⁺, Na⁺ and anion exchanger (ROH) removes Cl⁻, SO₄²⁻, HCO₃⁻. Produces demineralized water.",
    application: "Used for producing high-purity water for high-pressure boilers, pharmaceutical, and electronics industries.",
    chemicalReaction: "Cation: Ca²⁺ + H₂R → CaR + 2H⁺\nAnion: Cl⁻ + ROH → RCl + OH⁻\nH⁺ + OH⁻ → H₂O",
    advantages: [
      "Produces completely demineralized water",
      "Removes all dissolved salts",
      "Can achieve very low conductivity",
      "Resins have long life with proper maintenance"
    ],
    limitations: [
      "High initial installation cost",
      "Requires regeneration chemicals (acid and alkali)",
      "Generates acidic and alkaline waste",
      "Not economical for very high TDS water"
    ]
  },
  {
    id: "reverse-osmosis",
    name: "Reverse Osmosis (RO)",
    type: "external",
    principle: "Water is forced through a semi-permeable membrane under high pressure (15-75 bar). The membrane rejects dissolved salts, allowing pure water to pass through.",
    application: "Used for desalination of sea water and brackish water. Produces high-quality water for various industrial applications.",
    chemicalReaction: "No chemical reaction - physical separation process\nApplied pressure > Osmotic pressure → Pure water permeates through membrane",
    advantages: [
      "Removes up to 99% of dissolved salts",
      "No chemicals required for treatment",
      "Can treat sea water and brackish water",
      "Compact system design"
    ],
    limitations: [
      "High energy consumption due to pressure requirements",
      "Membrane fouling requires pre-treatment",
      "Membrane replacement is expensive",
      "Generates concentrated reject stream"
    ]
  },
  {
    id: "desalination",
    name: "Desalination of Brackish Water",
    type: "external",
    principle: "Electrodialysis uses ion-selective membranes and electric current to remove dissolved ions from brackish water. Cations move toward cathode, anions toward anode.",
    application: "Suitable for treating brackish water (1000-10000 ppm TDS). More economical than RO for moderate salinity water.",
    chemicalReaction: "No chemical reaction - electrochemical separation\nElectric field drives ions through selective membranes",
    advantages: [
      "Lower energy consumption than RO for brackish water",
      "Long membrane life (5-10 years)",
      "No phase change required",
      "Can handle variable TDS water"
    ],
    limitations: [
      "Not suitable for high TDS water (sea water)",
      "Does not remove uncharged particles",
      "Scaling on membranes possible",
      "Higher capital cost than conventional methods"
    ]
  }
];

export function getRecommendedTreatments(hardness: number, hasBoiler: boolean = true): TreatmentMethod[] {
  const recommended: TreatmentMethod[] = [];
  
  if (hardness < 60) {
    // Soft water - minimal treatment needed
    return [];
  } else if (hardness < 120) {
    // Moderately hard - internal treatment may suffice
    recommended.push(internalTreatments[0]); // Phosphate
    recommended.push(internalTreatments[1]); // Calgon
    if (hasBoiler) {
      recommended.push(externalTreatments[0]); // Zeolite
    }
  } else if (hardness < 180) {
    // Hard water - external treatment recommended
    recommended.push(externalTreatments[0]); // Zeolite
    recommended.push(externalTreatments[1]); // Ion Exchange
    recommended.push(internalTreatments[0]); // Phosphate as supplement
  } else {
    // Very hard water - comprehensive treatment required
    recommended.push(externalTreatments[1]); // Ion Exchange
    recommended.push(externalTreatments[2]); // RO
    recommended.push(externalTreatments[0]); // Zeolite
    recommended.push(internalTreatments[0]); // Phosphate
    recommended.push(internalTreatments[2]); // Sodium Aluminate for silica
  }
  
  return recommended;
}

export const allTreatments = [...internalTreatments, ...externalTreatments];
