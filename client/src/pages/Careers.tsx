import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { ImageStripCarousel } from "@/components/ImageStripCarousel";
import { WhyBainSquared } from "@/components/WhyBainSquared";
import { YouMatter } from "@/components/YouMatter";
import { InsideHQArticles } from "@/components/InsideHQArticles";
import { CTAStrip } from "@/components/CTAStrip";
import { Footer } from "@/components/Footer";

export default function Careers() {
  return (
    <div className="bs-bg-canvas" data-testid="page-careers">
      <Header />
      <main>
        <PageHero
          title="Together let's be"
          accentSuffix="extraordinary"
          lead="Bring your experience to work that changes how businesses operate."
          body="We bring together people across technology, finance and valuation to solve complex business problems. You will work alongside clients, contribute your judgment and help turn decisions into working systems."
          ctas={[
            { label: "Search open roles", href: "#/careers-form", variant: "primary" },
          ]}
        />

        <ImageStripCarousel
          cards={[
            {
              image:
                "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80",
              title: "Experience put into practice.",
            },
            {
              image:
                "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
              title: "See your work through.",
            },
            {
              image:
                "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80",
              title: "Make room for better thinking.",
            },
            {
              image:
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
              title: "Different perspectives, shared purpose.",
            },
          ]}
        />

        <WhyBainSquared />

        <YouMatter
          headline="Your work, your craft, your career."
          body="Develop your expertise through work that connects analysis with implementation. We value thoughtful questions, clear communication and the willingness to learn from colleagues and clients across disciplines."
          ctaLabel="Explore roles and apply"
          ctaHref="#/careers-form"
          image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80"
          imageAlt="Two consultants in a working session, focused on the work."
        />

        <InsideHQArticles
          heading="Inside Bain Squared HQ"
          articles={[
            {
              eyebrow: "Field notes",
              title: "What a real operator-led interview looks like at Bain Squared.",
              href: "#/careers-form",
              image:
                "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
            },
            {
              eyebrow: "Craft",
              title: "How our consultants ship agentic systems clients actually keep running.",
              href: "#/careers-form",
              image:
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
            },
          ]}
          seeAllLabel="See all insights"
          seeAllHref="#/insights"
        />

        <CTAStrip
          text="Do your best work, on your terms."
          buttonLabel="Join our team"
          href="#/careers-form"
        />
      </main>
      <Footer />
    </div>
  );
}
