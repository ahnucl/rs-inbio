import { Header } from "@/components/landing-page/header";
import { Hero } from "../components/landing-page/hero";
import { VideoExplanation } from "@/components/landing-page/video-explanation";
import { Pricing } from "@/components/landing-page/pricing";

export default function Home() {
  return (
    <div className="max-w-7xl 2xl:max-w-[110rem] mx-auto">
      <Hero />
      <Header />
      <VideoExplanation />
      <Pricing />
    {/* <FAQ /> */}
    </div>
  );
}
