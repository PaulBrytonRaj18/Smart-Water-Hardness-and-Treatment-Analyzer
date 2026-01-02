import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { analyzeWaterHardness, HardnessResult, HARDNESS_THRESHOLDS } from "@/lib/waterCalculations";
import { cn } from "@/lib/utils";
import { Calculator, Info, Droplets } from "lucide-react";

export function HardnessAnalyzer() {
  const [caConcentration, setCaConcentration] = useState<string>("");
  const [mgConcentration, setMgConcentration] = useState<string>("");
  const [result, setResult] = useState<HardnessResult | null>(null);

  const handleAnalyze = () => {
    const ca = parseFloat(caConcentration) || 0;
    const mg = parseFloat(mgConcentration) || 0;
    
    if (ca >= 0 && mg >= 0) {
      setResult(analyzeWaterHardness(ca, mg));
    }
  };

  const getColorClass = (color: string) => {
    switch (color) {
      case "soft": return "bg-water-soft";
      case "moderate": return "bg-water-moderate";
      case "hard": return "bg-water-hard";
      case "veryHard": return "bg-water-veryHard";
      default: return "bg-muted";
    }
  };

  const getBorderClass = (color: string) => {
    switch (color) {
      case "soft": return "border-water-soft";
      case "moderate": return "border-water-moderate";
      case "hard": return "border-water-hard";
      case "veryHard": return "border-water-veryHard";
      default: return "border-border";
    }
  };

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-accent" />
            Input Parameters
          </CardTitle>
          <CardDescription>
            Enter the concentration of calcium and magnesium ions in mg/L
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="input-group">
              <Label htmlFor="calcium">Calcium (Ca²⁺) Concentration</Label>
              <div className="relative">
                <Input
                  id="calcium"
                  type="number"
                  min="0"
                  step="0.1"
                  placeholder="e.g., 50"
                  value={caConcentration}
                  onChange={(e) => setCaConcentration(e.target.value)}
                  className="pr-16"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                  mg/L
                </span>
              </div>
            </div>
            
            <div className="input-group">
              <Label htmlFor="magnesium">Magnesium (Mg²⁺) Concentration</Label>
              <div className="relative">
                <Input
                  id="magnesium"
                  type="number"
                  min="0"
                  step="0.1"
                  placeholder="e.g., 30"
                  value={mgConcentration}
                  onChange={(e) => setMgConcentration(e.target.value)}
                  className="pr-16"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                  mg/L
                </span>
              </div>
            </div>
          </div>

          <Button onClick={handleAnalyze} className="w-full md:w-auto">
            <Droplets className="w-4 h-4 mr-2" />
            Analyze Water Hardness
          </Button>
        </CardContent>
      </Card>

      {/* Formula Reference */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Info className="w-4 h-4 text-accent" />
            Calculation Formula
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Calcium Hardness</p>
              <code className="formula">Ca Hardness = (Ca²⁺ × 100) / 40</code>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Magnesium Hardness</p>
              <code className="formula">Mg Hardness = (Mg²⁺ × 100) / 24.3</code>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            * All hardness values are expressed as equivalent CaCO₃ (ppm)
          </p>
        </CardContent>
      </Card>

      {/* Results Section */}
      {result && (
        <Card className={cn("border-2 animate-fade-in", getBorderClass(result.classification.color))}>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Analysis Results</span>
              <span className={cn(
                "px-3 py-1 rounded-full text-sm font-medium text-primary-foreground",
                getColorClass(result.classification.color)
              )}>
                {result.classification.label}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Hardness Values */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="result-card text-center">
                <p className="text-sm text-muted-foreground mb-1">Calcium Hardness</p>
                <p className="text-2xl font-semibold text-foreground">{result.caHardness}</p>
                <p className="text-xs text-muted-foreground">ppm as CaCO₃</p>
              </div>
              <div className="result-card text-center">
                <p className="text-sm text-muted-foreground mb-1">Magnesium Hardness</p>
                <p className="text-2xl font-semibold text-foreground">{result.mgHardness}</p>
                <p className="text-xs text-muted-foreground">ppm as CaCO₃</p>
              </div>
              <div className="result-card text-center border-2 border-primary">
                <p className="text-sm text-muted-foreground mb-1">Total Hardness</p>
                <p className="text-2xl font-bold text-primary">{result.totalHardness}</p>
                <p className="text-xs text-muted-foreground">ppm as CaCO₃</p>
              </div>
            </div>

            {/* Classification Scale */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Classification Scale</p>
              <div className="flex gap-1 h-3 rounded-full overflow-hidden">
                <div className="flex-1 bg-water-soft" title="Soft: 0-60 ppm" />
                <div className="flex-1 bg-water-moderate" title="Moderate: 60-120 ppm" />
                <div className="flex-1 bg-water-hard" title="Hard: 120-180 ppm" />
                <div className="flex-1 bg-water-veryHard" title="Very Hard: >180 ppm" />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>0</span>
                <span>60</span>
                <span>120</span>
                <span>180</span>
                <span>ppm</span>
              </div>
            </div>

            {/* Explanation */}
            <div className="explanation-box">
              <h4 className="font-medium text-foreground mb-2">What This Means</h4>
              <p className="text-sm text-muted-foreground">{result.explanation}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
