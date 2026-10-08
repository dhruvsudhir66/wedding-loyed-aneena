import { SaveTheDate } from "@/components/save-date/SaveTheDate";
import { WeddingMainContent } from "@/components/WeddingMainContent";
import WeddingAudio from "@/components/WeddingAudio";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#F8F4EA]">
      <SaveTheDate />
      <WeddingMainContent />
      <WeddingAudio />
    </main>
  );
}
