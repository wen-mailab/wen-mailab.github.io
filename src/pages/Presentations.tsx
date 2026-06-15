import { Header } from "@/components/Header";
import { Conferences } from "@/components/sections/Conferences";
import { AtmosphereDivider } from "@/components/AtmosphereDivider";
import { EarthFooter } from "@/components/EarthFooter";
import { Starfield } from "@/components/Starfield";

const PresentationsPage = () => (
  <>
    <Header />
    <div className="atmosphere-gradient relative">
      <Starfield />
      <main className="relative z-10">
        <Conferences preview={false} />
        <AtmosphereDivider label="Thermosphere" altitude="440 miles" />
      </main>
      <EarthFooter />
    </div>
  </>
);

export default PresentationsPage;
