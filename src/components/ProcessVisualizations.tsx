import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, ArrowDown, Droplets, Zap, Filter as FilterIcon } from "lucide-react";

function ZeoliteProcess() {
  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">
        The zeolite (permutit) process uses sodium zeolite to exchange Na⁺ ions for Ca²⁺ and Mg²⁺ ions, 
        effectively softening hard water.
      </p>

      {/* Process Diagram */}
      <div className="bg-muted p-6 rounded-lg">
        <div className="flex flex-col items-center gap-4">
          {/* Input */}
          <div className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border w-full max-w-sm">
            <Droplets className="w-6 h-6 text-water-hard" />
            <div>
              <p className="font-medium text-sm">Hard Water Input</p>
              <p className="text-xs text-muted-foreground">Contains Ca²⁺, Mg²⁺ ions</p>
            </div>
          </div>

          <ArrowDown className="w-5 h-5 text-muted-foreground" />

          {/* Zeolite Bed */}
          <div className="w-full max-w-md p-4 bg-primary/10 rounded-lg border-2 border-primary/30">
            <div className="text-center">
              <h4 className="font-medium text-primary">Zeolite Bed (Na₂Ze)</h4>
              <div className="mt-3 p-3 bg-card rounded border border-border">
                <p className="text-xs font-mono">
                  Ca²⁺ + Na₂Ze → CaZe + 2Na⁺
                </p>
                <p className="text-xs font-mono mt-1">
                  Mg²⁺ + Na₂Ze → MgZe + 2Na⁺
                </p>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Ion exchange occurs on zeolite surface
              </p>
            </div>
          </div>

          <div className="flex items-center gap-8 w-full max-w-lg justify-center">
            <div className="flex flex-col items-center gap-2">
              <ArrowDown className="w-5 h-5 text-muted-foreground" />
              <div className="p-3 bg-card rounded-lg border border-border text-center">
                <Droplets className="w-5 h-5 text-water-soft mx-auto mb-1" />
                <p className="text-xs font-medium">Soft Water</p>
                <p className="text-xs text-muted-foreground">0 ppm hardness</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="text-xs text-muted-foreground">Regeneration</div>
              <div className="p-3 bg-secondary rounded-lg border border-border text-center">
                <p className="text-xs font-mono">
                  CaZe + 2NaCl → Na₂Ze + CaCl₂
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Using 10% NaCl solution
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="explanation-box">
        <h4 className="font-medium mb-2">Key Points</h4>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Zeolite is regenerated using brine (NaCl solution)</li>
          <li>• Process is continuous - one bed operates while other regenerates</li>
          <li>• Removes hardness completely (0 ppm achievable)</li>
          <li>• Does not remove anions - TDS remains same</li>
        </ul>
      </div>
    </div>
  );
}

function IonExchangeProcess() {
  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">
        The demineralization process uses two types of ion exchange resins - cation exchanger (H-form) 
        and anion exchanger (OH-form) - to remove all dissolved salts from water.
      </p>

      {/* Process Diagram */}
      <div className="bg-muted p-6 rounded-lg">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-3">
          {/* Input */}
          <div className="p-3 bg-card rounded-lg border border-border text-center">
            <Droplets className="w-6 h-6 text-water-hard mx-auto mb-1" />
            <p className="text-xs font-medium">Raw Water</p>
            <p className="text-xs text-muted-foreground">Ca²⁺, Mg²⁺, Na⁺</p>
            <p className="text-xs text-muted-foreground">Cl⁻, SO₄²⁻, HCO₃⁻</p>
          </div>

          <ArrowRight className="w-5 h-5 text-muted-foreground hidden md:block" />
          <ArrowDown className="w-5 h-5 text-muted-foreground md:hidden" />

          {/* Cation Exchanger */}
          <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/30 text-center">
            <h4 className="font-medium text-destructive text-sm">Cation Exchanger</h4>
            <p className="text-xs text-muted-foreground">RH₂ resin</p>
            <div className="mt-2 p-2 bg-card rounded text-xs font-mono">
              Ca²⁺ + H₂R → CaR + 2H⁺
            </div>
            <p className="text-xs text-muted-foreground mt-1">Releases H⁺ ions</p>
          </div>

          <ArrowRight className="w-5 h-5 text-muted-foreground hidden md:block" />
          <ArrowDown className="w-5 h-5 text-muted-foreground md:hidden" />

          {/* Anion Exchanger */}
          <div className="p-4 bg-info/10 rounded-lg border border-info/30 text-center">
            <h4 className="font-medium text-info text-sm">Anion Exchanger</h4>
            <p className="text-xs text-muted-foreground">ROH resin</p>
            <div className="mt-2 p-2 bg-card rounded text-xs font-mono">
              Cl⁻ + ROH → RCl + OH⁻
            </div>
            <p className="text-xs text-muted-foreground mt-1">Releases OH⁻ ions</p>
          </div>

          <ArrowRight className="w-5 h-5 text-muted-foreground hidden md:block" />
          <ArrowDown className="w-5 h-5 text-muted-foreground md:hidden" />

          {/* Output */}
          <div className="p-3 bg-success/10 rounded-lg border border-success/30 text-center">
            <Droplets className="w-6 h-6 text-success mx-auto mb-1" />
            <p className="text-xs font-medium text-success">Demineralized Water</p>
            <p className="text-xs text-muted-foreground">H⁺ + OH⁻ → H₂O</p>
            <p className="text-xs text-muted-foreground">Pure water output</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-muted rounded-lg">
          <h4 className="font-medium text-sm mb-2">Cation Regeneration</h4>
          <code className="text-xs font-mono block">CaR + 2HCl → H₂R + CaCl₂</code>
          <p className="text-xs text-muted-foreground mt-1">Using dilute HCl (5-10%)</p>
        </div>
        <div className="p-4 bg-muted rounded-lg">
          <h4 className="font-medium text-sm mb-2">Anion Regeneration</h4>
          <code className="text-xs font-mono block">RCl + NaOH → ROH + NaCl</code>
          <p className="text-xs text-muted-foreground mt-1">Using dilute NaOH (5-10%)</p>
        </div>
      </div>
    </div>
  );
}

function ROProcess() {
  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">
        Reverse Osmosis forces water through a semi-permeable membrane under high pressure. 
        The membrane rejects dissolved salts, producing pure water.
      </p>

      {/* Process Diagram */}
      <div className="bg-muted p-6 rounded-lg">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4 w-full max-w-lg justify-center">
            {/* Feed */}
            <div className="p-3 bg-card rounded-lg border border-border text-center flex-1">
              <Droplets className="w-5 h-5 text-water-hard mx-auto mb-1" />
              <p className="text-xs font-medium">Feed Water</p>
              <p className="text-xs text-muted-foreground">High TDS</p>
            </div>

            <ArrowRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />

            {/* Pump */}
            <div className="p-3 bg-warning/10 rounded-lg border border-warning/30 text-center">
              <Zap className="w-5 h-5 text-warning mx-auto mb-1" />
              <p className="text-xs font-medium">High Pressure</p>
              <p className="text-xs text-muted-foreground">15-75 bar</p>
            </div>
          </div>

          <ArrowDown className="w-5 h-5 text-muted-foreground" />

          {/* Membrane */}
          <div className="w-full max-w-lg p-4 bg-card rounded-lg border-2 border-dashed border-primary relative">
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-16 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground text-xs rotate-90 whitespace-nowrap">Membrane</span>
            </div>
            <div className="ml-4 grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-xs font-medium text-muted-foreground mb-1">Reject (Concentrate)</p>
                <p className="text-xs">Dissolved salts, ions</p>
                <ArrowRight className="w-4 h-4 text-destructive mx-auto mt-2" />
              </div>
              <div className="text-center">
                <p className="text-xs font-medium text-success mb-1">Permeate (Product)</p>
                <p className="text-xs">Pure water molecules</p>
                <ArrowRight className="w-4 h-4 text-success mx-auto mt-2" />
              </div>
            </div>
          </div>

          <div className="flex gap-4 w-full max-w-lg justify-center">
            <div className="p-3 bg-destructive/10 rounded-lg border border-destructive/30 text-center flex-1">
              <p className="text-xs font-medium">Reject Stream</p>
              <p className="text-xs text-muted-foreground">High concentration</p>
            </div>
            <div className="p-3 bg-success/10 rounded-lg border border-success/30 text-center flex-1">
              <Droplets className="w-5 h-5 text-success mx-auto mb-1" />
              <p className="text-xs font-medium text-success">Pure Water</p>
              <p className="text-xs text-muted-foreground">99% salt removal</p>
            </div>
          </div>
        </div>
      </div>

      <div className="explanation-box">
        <h4 className="font-medium mb-2">Osmotic Pressure Concept</h4>
        <p className="text-sm text-muted-foreground">
          In normal osmosis, water moves from low to high concentration. In RO, applied pressure 
          exceeds osmotic pressure, reversing the flow - pure water moves from high to low concentration 
          side through the membrane.
        </p>
        <div className="mt-3 p-3 bg-card rounded border border-border">
          <p className="text-xs font-mono text-center">
            Applied Pressure {`>`} Osmotic Pressure → Water permeates through membrane
          </p>
        </div>
      </div>
    </div>
  );
}

export function ProcessVisualizations() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FilterIcon className="w-5 h-5 text-accent" />
            Water Treatment Process Diagrams
          </CardTitle>
          <CardDescription>
            Visual representations of key water treatment processes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="zeolite" className="w-full">
            <TabsList className="w-full grid grid-cols-3">
              <TabsTrigger value="zeolite">Zeolite</TabsTrigger>
              <TabsTrigger value="ion-exchange">Ion Exchange</TabsTrigger>
              <TabsTrigger value="ro">Reverse Osmosis</TabsTrigger>
            </TabsList>
            
            <TabsContent value="zeolite" className="mt-6">
              <ZeoliteProcess />
            </TabsContent>
            
            <TabsContent value="ion-exchange" className="mt-6">
              <IonExchangeProcess />
            </TabsContent>
            
            <TabsContent value="ro" className="mt-6">
              <ROProcess />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
