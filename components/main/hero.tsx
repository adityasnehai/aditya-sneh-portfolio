import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div id="about-me" className="relative flex h-full w-full scroll-mt-24 flex-col">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover -z-20"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      <HeroContent />
    </div>
  );
};
