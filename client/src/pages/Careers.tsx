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
          lead="We hire operators who have run the work, not just modeled it. The bar is high. The room is small. The work is real."
          body="If you have rebuilt a finance function, shipped agentic systems inside a real business, or made intangibles defendable in front of a board, we want to talk. Bain Squared is built for the operators clients can actually feel in the room."
          ctas={[
            { label: "Search open roles", href: "#/careers-form", variant: "primary" },
          ]}
        />

        <ImageStripCarousel
          cards={[
            {
              image:
                "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80",
              eyebrow: "Culture",
              title: "Operator-led, always.",
            },
            {
              image:
                "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
              eyebrow: "Culture",
              title: "Build, then advise.",
            },
            {
              image:
                "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80",
              eyebrow: "Culture",
              title: "Deep work, protected.",
            },
            {
              image:
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
              eyebrow: "Culture",
              title: "Small room, high bar.",
            },
          ]}
        />

        <WhyBainSquared />

        <YouMatter
          eyebrow="You matter"
          headline="Your work, your craft, your career."
          body="We invest in the operator behind the consultant. Named partner sponsors, quarterly craft reviews, transparent comp bands, and the kind of project staffing that lets you actually finish what you start. Career growth here is documented, not implied."
          ctaLabel="Learn more about life here"
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
          seeAllHref="#/contact"
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
