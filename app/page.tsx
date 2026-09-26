import { SaveTheDate } from "@/components/save-date/SaveTheDate";
import { WeddingMainContent } from "@/components/WeddingMainContent";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SaveTheDate />

      <WeddingMainContent />
    </main>
  );
}
