import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { Research } from "@/components/sections/Research";
import { Team } from "@/components/sections/Team";
import { Papers } from "@/components/sections/Papers";
import { Conferences } from "@/components/sections/Conferences";
import { Teaching } from "@/components/sections/Teaching";
import { AtmosphereDivider } from "@/components/AtmosphereDivider";
import { EarthFooter } from "@/components/EarthFooter";
import { Starfield } from "@/components/Starfield";

const Index = () => (
  <>
    <Header />
    <div className="atmosphere-gradient relative">
      <img
        src="/mai-lab/assets/earth.svg"
        alt="Earth"
        className="absolute inset-x-0 top-0 w-full h-96 object-cover object-center z-5 pointer-events-none"
        style={{ opacity: 0.35, transform: "scaleY(-1)" }}
      />
      <Starfield />
      <main className="relative z-10">
        <Hero />
        <AtmosphereDivider label="Troposphere" altitude="7 miles" />
        <Research />
        <AtmosphereDivider label="Stratosphere" altitude="31 miles" />
        <Team />
        <AtmosphereDivider label="Mesosphere" altitude="50 miles" />
        <Papers />
        <AtmosphereDivider label="Thermosphere" altitude="440 miles" />
        <Conferences />
      </main>
    <EarthFooter />
    </div>
  </>
);

export default Index;
