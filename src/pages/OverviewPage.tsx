import { AppLayout } from "@/components/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Droplets, FlaskConical, Thermometer, Filter, Layers, ArrowRight, BookOpen, GraduationCap } from "lucide-react";

const modules = [
  {
    title: "Water Hardness Analyzer",
    description: "Calculate total hardness from Ca²⁺ and Mg²⁺ concentrations with classification",
    icon: Droplets,
    href: "/analyzer",
    color: "text-water-soft",
  },
  {
    title: "EDTA Estimation",
    description: "Conceptual simulation of EDTA titration for hardness determination",
    icon: FlaskConical,
    href: "/edta",
    color: "text-accent",
  },
  {
    title: "Boiler Troubles",
    description: "Understanding scale, sludge, priming, foaming, and caustic embrittlement",
    icon: Thermometer,
    href: "/boiler-troubles",
    color: "text-water-hard",
  },
  {
    title: "Treatment Methods",
    description: "Internal and external water treatment recommendations based on hardness",
    icon: Filter,
    href: "/treatments",
    color: "text-info",
  },
  {
    title: "Process Diagrams",
    description: "Visual representations of zeolite, ion exchange, and RO processes",
    icon: Layers,
    href: "/processes",
    color: "text-primary",
  },
];

export default function OverviewPage() {
  return (
    <AppLayout title="Overview">
      {/* Hero Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
            <Droplets className="w-7 h-7 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              Smart Water Hardness & Treatment Analyzer
            </h1>
            <p className="text-muted-foreground">
              Engineering Chemistry - Unit I: Water and Its Treatment
            </p>
          </div>
        </div>
        
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-4 md:p-6">
            <div className="flex items-start gap-4">
              <GraduationCap className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="font-semibold text-foreground mb-2">Academic Tool for Engineering Students</h2>
                <p className="text-sm text-muted-foreground">
                  This application provides scientifically accurate calculations and explanations based on 
                  standard Engineering Chemistry principles. Use it to understand water hardness concepts, 
                  boiler problems, and treatment methods aligned with Anna University curriculum.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Modules Grid */}
      <div className="mb-8">
        <h2 className="section-header flex items-center gap-2">
          <BookOpen className="w-5 h-5" />
          Application Modules
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((module) => (
            <Link key={module.href} to={module.href}>
              <Card className="h-full hover:border-primary/50 hover:shadow-md transition-all group cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <module.icon className={`w-5 h-5 ${module.color}`} />
                    </div>
                    <CardTitle className="text-base">{module.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {module.description}
                  </CardDescription>
                  <div className="flex items-center gap-1 mt-3 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Open Module
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Key Concepts Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Key Concepts Covered</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-sm mb-2 text-foreground">Water Hardness</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Temporary hardness (carbonate hardness)</li>
                <li>• Permanent hardness (non-carbonate hardness)</li>
                <li>• Expression as CaCO₃ equivalent</li>
                <li>• EDTA complexometric titration</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-sm mb-2 text-foreground">Boiler Feed Water</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Scale and sludge formation</li>
                <li>• Priming and foaming</li>
                <li>• Caustic embrittlement</li>
                <li>• Internal and external treatment</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-sm mb-2 text-foreground">Internal Treatments</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Phosphate conditioning</li>
                <li>• Calgon conditioning</li>
                <li>• Sodium aluminate treatment</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-sm mb-2 text-foreground">External Treatments</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Zeolite (permutit) process</li>
                <li>• Ion exchange demineralization</li>
                <li>• Reverse osmosis</li>
                <li>• Electrodialysis</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="mt-8 pt-6 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">
          Based on standard Engineering Chemistry curriculum. All calculations follow accepted textbook methodology.
        </p>
      </div>
    </AppLayout>
  );
}
