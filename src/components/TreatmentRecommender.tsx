import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  internalTreatments, 
  externalTreatments, 
  getRecommendedTreatments, 
  TreatmentMethod,
  allTreatments 
} from "@/lib/treatmentData";
import { Filter, Zap, Check, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

function TreatmentCard({ treatment, isRecommended }: { treatment: TreatmentMethod; isRecommended?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className={cn(
      "transition-all",
      isRecommended && "ring-2 ring-accent"
    )}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <CardTitle className="text-base flex items-center gap-2">
              {treatment.name}
              {isRecommended && (
                <Badge variant="secondary" className="bg-accent/10 text-accent">
                  Recommended
                </Badge>
              )}
            </CardTitle>
            <Badge variant="outline" className="mt-2">
              {treatment.type === "internal" ? "Internal Treatment" : "External Treatment"}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <h4 className="text-sm font-medium mb-2">Principle</h4>
          <p className="text-sm text-muted-foreground">{treatment.principle}</p>
        </div>

        {treatment.chemicalReaction && (
          <div className="p-3 bg-muted rounded-lg">
            <p className="text-xs text-muted-foreground mb-1">Chemical Reaction</p>
            <pre className="text-sm font-mono whitespace-pre-wrap">{treatment.chemicalReaction}</pre>
          </div>
        )}

        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-full justify-between">
              View Details
              <ChevronDown className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")} />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-4 pt-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Application</h4>
              <p className="text-sm text-muted-foreground">{treatment.application}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium mb-2 flex items-center gap-1 text-success">
                  <Check className="w-4 h-4" />
                  Advantages
                </h4>
                <ul className="space-y-1">
                  {treatment.advantages.map((adv, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-success mt-1">•</span>
                      {adv}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2 flex items-center gap-1 text-destructive">
                  <X className="w-4 h-4" />
                  Limitations
                </h4>
                <ul className="space-y-1">
                  {treatment.limitations.map((lim, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      {lim}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
}

export function TreatmentRecommender() {
  const [hardness, setHardness] = useState<string>("");
  const [recommendations, setRecommendations] = useState<TreatmentMethod[]>([]);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const handleRecommend = () => {
    const h = parseFloat(hardness) || 0;
    setRecommendations(getRecommendedTreatments(h, true));
    setShowRecommendations(true);
  };

  return (
    <div className="space-y-6">
      {/* Recommendation Engine */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-accent" />
            Treatment Recommendation Engine
          </CardTitle>
          <CardDescription>
            Enter water hardness to get appropriate treatment recommendations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 max-w-md">
            <div className="flex-1">
              <Label htmlFor="rec-hardness" className="sr-only">Water Hardness</Label>
              <Input
                id="rec-hardness"
                type="number"
                placeholder="Enter hardness (ppm)"
                value={hardness}
                onChange={(e) => setHardness(e.target.value)}
              />
            </div>
            <Button onClick={handleRecommend}>
              <Filter className="w-4 h-4 mr-2" />
              Get Recommendations
            </Button>
          </div>

          {showRecommendations && (
            <div className="pt-4 animate-fade-in">
              {recommendations.length === 0 ? (
                <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                  <p className="text-sm text-success font-medium">
                    This water is soft and requires no treatment for most applications.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Recommended treatments for {hardness} ppm hardness:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {recommendations.map(t => (
                      <Badge key={t.id} variant="secondary">
                        {t.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* All Treatments */}
      <Tabs defaultValue="internal" className="w-full">
        <TabsList className="w-full max-w-md">
          <TabsTrigger value="internal" className="flex-1">Internal Treatments</TabsTrigger>
          <TabsTrigger value="external" className="flex-1">External Treatments</TabsTrigger>
        </TabsList>
        
        <TabsContent value="internal" className="mt-6 space-y-4">
          <p className="text-sm text-muted-foreground mb-4">
            Internal treatments are added directly to boiler water to prevent scale and sludge problems. 
            They are suitable when external treatment is not economically feasible.
          </p>
          {internalTreatments.map(t => (
            <TreatmentCard 
              key={t.id} 
              treatment={t} 
              isRecommended={recommendations.some(r => r.id === t.id)}
            />
          ))}
        </TabsContent>
        
        <TabsContent value="external" className="mt-6 space-y-4">
          <p className="text-sm text-muted-foreground mb-4">
            External treatments process water before it enters the boiler. They are essential for 
            high-pressure boilers and when water has high hardness or TDS.
          </p>
          {externalTreatments.map(t => (
            <TreatmentCard 
              key={t.id} 
              treatment={t}
              isRecommended={recommendations.some(r => r.id === t.id)}
            />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
