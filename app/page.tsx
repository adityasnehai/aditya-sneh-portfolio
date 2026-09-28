import { Contact } from "@/components/main/contact";
import { Experience } from "@/components/main/experience";
import { Hero } from "@/components/main/hero";
import { Products } from "@/components/main/products";
import { Projects } from "@/components/main/projects";
import { Publications } from "@/components/main/publications";
import { ProofStrip } from "@/components/main/proof-strip";
import { Skills } from "@/components/main/skills";
import { ScrollReveals } from "@/components/main/scroll-reveals";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="h-full w-full">
      <ScrollReveals />
      <div className="flex flex-col">
        <Hero />
        <ProofStrip />
        <Products />
        <Publications />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}
