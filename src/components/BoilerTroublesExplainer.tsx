import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { boilerTroubles, getBoilerTroublesForHardness, BoilerTrouble } from "@/lib/boilerTroubles";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Layers, Droplet, Waves, AlertTriangle, Shield, Thermometer } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = {
  scale: Layers,
  sludge: Droplet,
  foam: Waves,
  crack: AlertTriangle,
};

export function BoilerTroublesExplainer() {
  const [hardness, setHardness] = useState<string>("");
  const troublesWithSeverity = hardness 
    ? getBoilerTroublesForHardness(parseFloat(hardness) || 0)
    : boilerTroubles.map(t => ({ trouble: t, severity: "low" as const }));

  const getSeverityColor = (severity: "low" | "medium" | "high") => {
    switch (severity) {
      case "low": return "bg-success text-success-foreground";
      case "medium": return "bg-warning text-warning-foreground";
      case "high": return "bg-destructive text-destructive-foreground";
    }
  };

  return (
    <div className="space-y-6">
      {/* Hardness Input for Context */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Thermometer className="w-5 h-5 text-accent" />
            Contextual Analysis
          </CardTitle>
          <CardDescription>
            Enter water hardness to see severity assessment for each problem
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="max-w-xs">
            <Label htmlFor="hardness-input">Water Hardness (ppm as CaCO₃)</Label>
            <Input
              id="hardness-input"
              type="number"
              placeholder="e.g., 150"
              value={hardness}
              onChange={(e) => setHardness(e.target.value)}
              className="mt-2"
            />
          </div>
        </CardContent>
      </Card>

      {/* Troubles Grid */}
      <div className="grid gap-4">
        {troublesWithSeverity.map(({ trouble, severity }) => {
          const Icon = iconMap[trouble.icon];
          
          return (
            <Card key={trouble.id} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{trouble.name}</CardTitle>
                      {hardness && (
                        <Badge className={cn("mt-1", getSeverityColor(severity))}>
                          {severity.charAt(0).toUpperCase() + severity.slice(1)} Risk
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="cause" className="border-none">
                    <AccordionTrigger className="text-sm font-medium py-2 hover:no-underline">
                      Cause
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      {trouble.cause}
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="effect" className="border-none">
                    <AccordionTrigger className="text-sm font-medium py-2 hover:no-underline">
                      Effect on Boiler
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      {trouble.effect}
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="hardness" className="border-none">
                    <AccordionTrigger className="text-sm font-medium py-2 hover:no-underline">
                      Relation to Water Hardness
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      {trouble.hardnessRelation}
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="prevention" className="border-none">
                    <AccordionTrigger className="text-sm font-medium py-2 hover:no-underline">
                      <span className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-success" />
                        Prevention Methods
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        {trouble.prevention.map((method, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-5 h-5 rounded-full bg-success/10 text-success flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            {method}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
