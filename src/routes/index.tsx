import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/site/Nav";
import { ScrollProgress } from "@/components/site/primitives";

import { Hero } from "@/components/site/Hero";
import { Intro, Services, OneSystem } from "@/components/site/Intro";
import { ShowcaseSection, Projects } from "@/components/site/Showcase";
import { Packages } from "@/components/site/Packages";
import { Why, Process, Industries, BeforeAfter } from "@/components/site/Why";
import {
  Testimonials,
  ContactSection,
  WhatsAppFab,
  Footer,
} from "@/components/site/Contact";

const TITLE = "Happy Team | Custom Software, Billing & Business Solutions";
const DESCRIPTION =
  "Happy Team builds custom websites, billing software, ERP systems, student management, payroll, inventory and business management software for growing businesses.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Happy Team",
          description: DESCRIPTION,
          slogan: "Smart Software. Simple Business.",
          areaServed: "IN",
          email: "happyteamsinfo@gmail.com",
          telephone: "+91 8903507954",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Thuckalay",
            addressLocality: "Thuckalay",
            addressRegion: "Kanniyakumari, Tamil Nadu",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
});

function Cinema({ children }: { children: React.ReactNode }) {
  return <div className="cinema cinema-zoom">{children}</div>;
}

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Cinema>
          <Intro />
        </Cinema>
        <Cinema>
          <Services />
        </Cinema>
        <Cinema>
          <OneSystem />
        </Cinema>
        <Packages />
        <Cinema>
          <ShowcaseSection />
        </Cinema>
        <Cinema>
          <Why />
        </Cinema>
        <Cinema>
          <Process />
        </Cinema>
        <Cinema>
          <Industries />
        </Cinema>
        <Cinema>
          <BeforeAfter />
        </Cinema>
        <Cinema>
          <Projects />
        </Cinema>
        <Testimonials />
        <Cinema>
          <CustomQuote />
        </Cinema>
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFab />
      <Toaster />
    </div>
  );
}

