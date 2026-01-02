import { AppLayout } from "@/components/AppLayout";
import { HardnessAnalyzer } from "@/components/HardnessAnalyzer";

export default function AnalyzerPage() {
  return (
    <AppLayout title="Water Hardness Analyzer">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-foreground mb-2">
          Calculate Water Hardness
        </h2>
        <p className="text-muted-foreground text-sm">
          Enter calcium and magnesium ion concentrations to determine total hardness expressed as CaCO₃ equivalent (ppm).
        </p>
      </div>
      
      <HardnessAnalyzer />
    </AppLayout>
  );
}
