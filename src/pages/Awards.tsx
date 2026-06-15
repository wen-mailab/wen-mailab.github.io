import { Header } from "@/components/Header";
import { AwardsGrants } from "@/components/sections/AwardsGrants";
import { AtmosphereDivider } from "@/components/AtmosphereDivider";
import { EarthFooter } from "@/components/EarthFooter";
import { Starfield } from "@/components/Starfield";

const AwardsPage = () => (
  <>
    <Header />
    <div className="atmosphere-gradient relative">
      <Starfield />
      <main className="relative z-10">
        <AwardsGrants preview={false} />
        <AtmosphereDivider label="Thermosphere" altitude="440 miles" />
      </main>
      <EarthFooter />
    </div>
  </>
);

export default AwardsPage;
