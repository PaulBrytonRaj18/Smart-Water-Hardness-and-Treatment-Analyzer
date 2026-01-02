import { AppLayout } from "@/components/AppLayout";
import { EDTASimulator } from "@/components/EDTASimulator";

export default function EDTAPage() {
  return (
    <AppLayout title="EDTA Titration Estimation">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-foreground mb-2">
          Complexometric Titration Simulation
        </h2>
        <p className="text-muted-foreground text-sm">
          Understand the EDTA titration process through a conceptual step-by-step simulation. 
          This educational module explains the principle, not experimental procedure.
        </p>
      </div>
      
      <EDTASimulator />
    </AppLayout>
  );
}
