// Water Hardness Calculations based on Engineering Chemistry principles
// All calculations follow standard CaCO3 equivalent methodology

// Molecular weights
const MOLECULAR_WEIGHTS = {
  Ca: 40,
  Mg: 24.3,
  CaCO3: 100,
};

// Hardness classification thresholds (in ppm as CaCO3)
export const HARDNESS_THRESHOLDS = {
  SOFT: { max: 60, label: "Soft", color: "soft" },
  MODERATELY_HARD: { min: 60, max: 120, label: "Moderately Hard", color: "moderate" },
  HARD: { min: 120, max: 180, label: "Hard", color: "hard" },
  VERY_HARD: { min: 180, label: "Very Hard", color: "veryHard" },
} as const;

export interface HardnessResult {
  caHardness: number;
  mgHardness: number;
  totalHardness: number;
  classification: typeof HARDNESS_THRESHOLDS[keyof typeof HARDNESS_THRESHOLDS];
  explanation: string;
}

/**
 * Convert Ca²⁺ concentration to hardness as CaCO3
 * Formula: Ca Hardness = (Ca²⁺ concentration × 100) / 40
 */
export function calculateCalciumHardness(caConcentration: number): number {
  return (caConcentration * MOLECULAR_WEIGHTS.CaCO3) / MOLECULAR_WEIGHTS.Ca;
}

/**
 * Convert Mg²⁺ concentration to hardness as CaCO3
 * Formula: Mg Hardness = (Mg²⁺ concentration × 100) / 24.3
 */
export function calculateMagnesiumHardness(mgConcentration: number): number {
  return (mgConcentration * MOLECULAR_WEIGHTS.CaCO3) / MOLECULAR_WEIGHTS.Mg;
}

/**
 * Classify water hardness based on total hardness value
 */
export function classifyHardness(totalHardness: number): typeof HARDNESS_THRESHOLDS[keyof typeof HARDNESS_THRESHOLDS] {
  if (totalHardness < HARDNESS_THRESHOLDS.SOFT.max) {
    return HARDNESS_THRESHOLDS.SOFT;
  } else if (totalHardness < HARDNESS_THRESHOLDS.MODERATELY_HARD.max) {
    return HARDNESS_THRESHOLDS.MODERATELY_HARD;
  } else if (totalHardness < HARDNESS_THRESHOLDS.HARD.max) {
    return HARDNESS_THRESHOLDS.HARD;
  }
  return HARDNESS_THRESHOLDS.VERY_HARD;
}

/**
 * Generate explanation based on classification
 */
function getExplanation(classification: typeof HARDNESS_THRESHOLDS[keyof typeof HARDNESS_THRESHOLDS]): string {
  switch (classification.label) {
    case "Soft":
      return "This water is suitable for most domestic and industrial uses without treatment. It produces good lather with soap and causes minimal scale formation in boilers.";
    case "Moderately Hard":
      return "This water may require softening for sensitive industrial applications. Some scale formation may occur in boilers and hot water systems over time.";
    case "Hard":
      return "This water requires treatment before use in boilers. Significant scale formation will occur, reducing heat transfer efficiency and potentially causing equipment damage.";
    case "Very Hard":
      return "This water requires extensive treatment. Without treatment, severe scale formation will occur rapidly, leading to boiler inefficiency, increased fuel costs, and potential equipment failure.";
  }
}

/**
 * Main function to analyze water hardness
 */
export function analyzeWaterHardness(caConcentration: number, mgConcentration: number): HardnessResult {
  const caHardness = calculateCalciumHardness(caConcentration);
  const mgHardness = calculateMagnesiumHardness(mgConcentration);
  const totalHardness = caHardness + mgHardness;
  const classification = classifyHardness(totalHardness);
  
  return {
    caHardness: Math.round(caHardness * 100) / 100,
    mgHardness: Math.round(mgHardness * 100) / 100,
    totalHardness: Math.round(totalHardness * 100) / 100,
    classification,
    explanation: getExplanation(classification),
  };
}

// EDTA Titration Simulation
export interface EDTASimulationResult {
  edtaVolume: number;
  hardness: number;
  steps: string[];
}

/**
 * Simulate EDTA titration
 * Standard: 1 mL of 0.01M EDTA ≡ 1 mg of CaCO3
 */
export function simulateEDTATitration(sampleVolume: number = 50, hardness: number): EDTASimulationResult {
  // For educational purposes: Calculate EDTA volume needed
  // Using standard 0.01M EDTA solution
  const edtaVolume = (hardness * sampleVolume) / 1000;
  
  const steps = [
    `Take ${sampleVolume} mL of water sample in a conical flask`,
    "Add 1-2 mL of ammonia buffer solution (pH 10) to maintain alkaline conditions",
    "Add 2-3 drops of Eriochrome Black-T (EBT) indicator",
    "The solution turns wine-red due to formation of Ca-EBT and Mg-EBT complexes",
    `Titrate with standard 0.01M EDTA solution from the burette`,
    "EDTA first reacts with free Ca²⁺ and Mg²⁺ ions",
    "Then EDTA displaces indicator from metal-indicator complex",
    `At end-point (${edtaVolume.toFixed(2)} mL), color changes from wine-red to steel blue`,
    "Blue color indicates all hardness-causing ions have complexed with EDTA"
  ];
  
  return {
    edtaVolume: Math.round(edtaVolume * 100) / 100,
    hardness,
    steps,
  };
}
