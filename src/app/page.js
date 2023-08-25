import ExperienceSection from "@/components/ExperienceSection";
import HomeHero from "@/components/HomeHero";
import { SectionTransparent } from "@/components/SectionTransparent";

export default function Page() {
  return (
    <main>
      <HomeHero />
      <ExperienceSection />
      <SectionTransparent title="Our consultant will look at what you want to have done and need to have done, and if we can provide that service, we will give you an accurate written proposal on what your investment would be, and if we can’t provide the service you need, we may be able to provide you the names of others who can." />
    </main>
  );
}
