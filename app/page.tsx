import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Expertise from "@/components/sections/Expertise";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col pt-0 -mt-5 md:mt-0 md:pt-8">
      <Hero />
      <About />
      <Expertise />
      <Team />
      <Contact />
    </div>
  );
}