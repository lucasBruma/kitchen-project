import ExperienceSection from "@/components/ExperienceSection";
import HomeHero from "@/components/HomeHero";
import { SectionTransparent } from "@/components/SectionTransparent";
import PaymentHome from "@/components/PaymentHome";
import RemodelingHome from "@/components/RemodelingHome";
import TestimonialsHome from "@/components/TestimonialsHome";
import { ContactHome } from "@/components/ContactHome";
import MapHome from "@/components/MapHome";
import Home3D from "@/components/Home3D";


export const metadata = {
  title: "Explore Kitchens",
  description: "Kitchen Remodeling Northern Virginia",
};

export default function Page() {
  return (
    <main>
      <HomeHero />
      <Home3D />
      <ExperienceSection />
      <SectionTransparent title="Our consultant will look at what you want to have done and need to have done, and if we can provide that service, we will give you an accurate written proposal on what your investment would be, and if we can’t provide the service you need, we may be able to provide you the names of others who can." />
      <RemodelingHome />
      <PaymentHome />
      <MapHome />
      <div style={{ background: "linear-gradient(90deg, rgba(56, 55, 65, 0.3) -60%, rgba(250, 250, 250, 0) 100%)" }}>
        <TestimonialsHome />
      </div>
      <ContactHome />
    </main>
  );
}
