import { Header } from "@/components/Header";
import { Papers } from "@/components/sections/Papers";
import { AtmosphereDivider } from "@/components/AtmosphereDivider";
import { EarthFooter } from "@/components/EarthFooter";
import { Starfield } from "@/components/Starfield";

const PublicationsPage = () => (
  <>
    <Header />
    <div className="atmosphere-gradient relative">
      <Starfield />
      <main className="relative z-10">
        <Papers preview={false} />
        <AtmosphereDivider label="Thermosphere" altitude="440 miles" />
      </main>
      <EarthFooter />
    </div>
  </>
);

export default PublicationsPage;
