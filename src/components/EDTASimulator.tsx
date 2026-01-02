import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { simulateEDTATitration, EDTASimulationResult } from "@/lib/waterCalculations";
import { FlaskConical, Play, ChevronRight, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export function EDTASimulator() {
  const [sampleVolume, setSampleVolume] = useState<number>(50);
  const [hardness, setHardness] = useState<number>(100);
  const [simulation, setSimulation] = useState<EDTASimulationResult | null>(null);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const handleSimulate = () => {
    const result = simulateEDTATitration(sampleVolume, hardness);
    setSimulation(result);
    setCurrentStep(0);
  };

  const nextStep = () => {
    if (simulation && currentStep < simulation.steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <div className="space-y-6">
      {/* Theory Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="w-5 h-5 text-accent" />
            EDTA Titration Principle
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            EDTA (Ethylenediaminetetraacetic acid) forms stable 1:1 complexes with Ca²⁺ and Mg²⁺ ions. 
            This property is used to determine total hardness of water through complexometric titration.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-medium text-sm mb-2">Buffer (pH 10)</h4>
              <p className="text-xs text-muted-foreground">
                NH₄Cl + NH₄OH buffer maintains pH 10, ensuring EDTA-metal complexes are stable and complete.
              </p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-medium text-sm mb-2">Indicator (EBT)</h4>
              <p className="text-xs text-muted-foreground">
                Eriochrome Black-T forms wine-red complex with Ca²⁺/Mg²⁺. Free indicator is steel blue.
              </p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-medium text-sm mb-2">End Point</h4>
              <p className="text-xs text-muted-foreground">
                Color change from wine-red to steel blue indicates all metal ions have reacted with EDTA.
              </p>
            </div>
          </div>

          <div className="p-3 bg-secondary rounded-lg">
            <p className="text-sm font-mono text-center">
              M²⁺ + H₂Y²⁻ → MY²⁻ + 2H⁺
            </p>
            <p className="text-xs text-muted-foreground text-center mt-1">
              (where M = Ca or Mg, Y = EDTA)
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Simulation Input */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FlaskConical className="w-5 h-5 text-accent" />
            Simulation Parameters
          </CardTitle>
          <CardDescription>
            Set the sample parameters to simulate the EDTA titration process
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label>Sample Volume: {sampleVolume} mL</Label>
              <Slider
                value={[sampleVolume]}
                onValueChange={(v) => setSampleVolume(v[0])}
                min={25}
                max={100}
                step={5}
              />
              <p className="text-xs text-muted-foreground">Standard: 50 mL</p>
            </div>
            
            <div className="space-y-3">
              <Label>Assumed Hardness: {hardness} ppm</Label>
              <Slider
                value={[hardness]}
                onValueChange={(v) => setHardness(v[0])}
                min={10}
                max={300}
                step={10}
              />
              <p className="text-xs text-muted-foreground">For educational demonstration</p>
            </div>
          </div>

          <Button onClick={handleSimulate} className="w-full md:w-auto">
            <Play className="w-4 h-4 mr-2" />
            Start Simulation
          </Button>
        </CardContent>
      </Card>

      {/* Simulation Steps */}
      {simulation && (
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle>Titration Process</CardTitle>
            <CardDescription>
              Step {currentStep + 1} of {simulation.steps.length}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Visual Indicator */}
            <div className="flex items-center justify-center gap-8 py-6">
              <div className="text-center">
                <div 
                  className={cn(
                    "w-20 h-24 rounded-b-full mx-auto mb-2 transition-colors duration-500",
                    currentStep < 6 ? "bg-[#8B2942]" : "bg-[#4682B4]"
                  )}
                  style={{
                    clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)"
                  }}
                />
                <p className="text-xs text-muted-foreground">
                  {currentStep < 6 ? "Wine-Red" : "Steel Blue"}
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-4 h-32 bg-gradient-to-b from-transparent via-info to-info rounded-b-lg mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">
                  EDTA Added: {((currentStep / 8) * simulation.edtaVolume).toFixed(1)} mL
                </p>
              </div>
            </div>

            {/* Step Description */}
            <div className="step-card ml-4">
              <div className="step-number">{currentStep + 1}</div>
              <p className="text-foreground pl-2">{simulation.steps[currentStep]}</p>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-4">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 0}
              >
                Previous
              </Button>
              
              <div className="flex gap-1">
                {simulation.steps.map((_, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      "w-2 h-2 rounded-full transition-colors",
                      idx === currentStep ? "bg-primary" : "bg-muted"
                    )}
                  />
                ))}
              </div>
              
              <Button
                onClick={nextStep}
                disabled={currentStep === simulation.steps.length - 1}
              >
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            {/* Result */}
            {currentStep === simulation.steps.length - 1 && (
              <div className="explanation-box animate-fade-in">
                <h4 className="font-medium text-foreground mb-2">Calculation Result</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  EDTA volume at end-point: <span className="font-mono font-medium">{simulation.edtaVolume} mL</span>
                </p>
                <div className="p-3 bg-card rounded border border-border">
                  <p className="text-sm font-mono text-center">
                    Hardness = (EDTA volume × 1000) / Sample volume
                  </p>
                  <p className="text-sm font-mono text-center mt-1">
                    = ({simulation.edtaVolume} × 1000) / {sampleVolume} = <strong>{simulation.hardness} ppm</strong>
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
