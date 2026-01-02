import { AppLayout } from "@/components/AppLayout";
import { TreatmentRecommender } from "@/components/TreatmentRecommender";

export default function TreatmentsPage() {
  return (
    <AppLayout title="Water Treatment Methods">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-foreground mb-2">
          Treatment Recommendation Engine
        </h2>
        <p className="text-muted-foreground text-sm">
          Get scientifically-grounded treatment recommendations based on water hardness. 
          Explore internal and external treatment methods with detailed explanations.
        </p>
      </div>
      
      <TreatmentRecommender />
    </AppLayout>
  );
}
