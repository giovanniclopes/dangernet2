import AboutSection from "../components/home/AboutSection";
import HeroSection from "../components/home/HeroSection";
import Infos from "../components/home/Infos";
import OurExpertise from "../components/home/OurExpertise";
import Partners from "../components/home/Partners";
import RequestDemo from "../components/home/RequestDemo";
import UserJourney from "../components/home/UserJourney";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Infos />
      <AboutSection />
      <UserJourney />
      <Partners />
      <OurExpertise />
      <RequestDemo />
    </main>
  );
}
