import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Expertise from "@/components/sections/Expertise";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact"; // Nouvel import

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Expertise />
      <Team />
      <Contact /> {/* Section Contact */}
      
      {/* Placeholder Footer */}
      <div className="h-20 bg-primary flex items-center justify-center">
         <p className="text-white text-sm">Footer à venir...</p>
      </div>
    </div>
  );
}