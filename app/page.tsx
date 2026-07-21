import { Contact } from "@/components/main/contact";
import { Experience } from "@/components/main/experience";
import { Hero } from "@/components/main/hero";
import { Products } from "@/components/main/products";
import { Projects } from "@/components/main/projects";
import { Publications } from "@/components/main/publications";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <Hero />
        <Products />
        <Publications />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}
