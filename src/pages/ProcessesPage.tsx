import { AppLayout } from "@/components/AppLayout";
import { ProcessVisualizations } from "@/components/ProcessVisualizations";

export default function ProcessesPage() {
  return (
    <AppLayout title="Process Diagrams">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-foreground mb-2">
          Water Treatment Process Visualizations
        </h2>
        <p className="text-muted-foreground text-sm">
          Visual schematic representations of key water treatment processes to aid understanding. 
          These diagrams focus on explaining the working principle of each process.
        </p>
      </div>
      
      <ProcessVisualizations />
    </AppLayout>
  );
}
