import { Header } from "@/components/Header";
import { News } from "@/components/sections/News";
import { AtmosphereDivider } from "@/components/AtmosphereDivider";
import { EarthFooter } from "@/components/EarthFooter";
import { Starfield } from "@/components/Starfield";

const NewsPage = () => (
  <>
    <Header />
    <div className="atmosphere-gradient relative">
      <Starfield />
      <main className="relative z-10">
        <News preview={false} />
        <AtmosphereDivider label="Mesosphere" altitude="50 miles" />
      </main>
      <EarthFooter />
    </div>
  </>
);

export default NewsPage;
