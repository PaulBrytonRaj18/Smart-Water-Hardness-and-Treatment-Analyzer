import { AppLayout } from "@/components/AppLayout";
import { BoilerTroublesExplainer } from "@/components/BoilerTroublesExplainer";

export default function BoilerTroublesPage() {
  return (
    <AppLayout title="Boiler Troubles">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-foreground mb-2">
          Problems in Boiler Operation
        </h2>
        <p className="text-muted-foreground text-sm">
          Understand the major problems caused by hard water in boilers: scale formation, sludge, 
          priming and foaming, and caustic embrittlement. Each section explains cause, effect, and prevention.
        </p>
      </div>
      
      <BoilerTroublesExplainer />
    </AppLayout>
  );
}
