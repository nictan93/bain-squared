import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { ImageStripCarousel } from "@/components/ImageStripCarousel";
import { RelevantCompanies } from "@/components/RelevantCompanies";
import { ClientStoryFlipped } from "@/components/ClientStoryFlipped";
import { PartnerEcosystems } from "@/components/PartnerEcosystems";
import { WhitepaperFeature } from "@/components/WhitepaperFeature";
import { CTAStrip } from "@/components/CTAStrip";
import { Footer } from "@/components/Footer";

export default function WhoWeWorkWith() {
  return (
    <div className="bs-bg-canvas" data-testid="page-who-we-work-with">
      <Header />
      <main>
        <PageHero
          title="Who we"
          accentSuffix="work with"
          lead="Operators, founders, and boards who treat AI, finance, and intangibles as one connected build."
          body="We are selective. The work we do is operator-led, not slide-led, which means the teams we partner with have to be ready to rebuild the parts of the business that the next phase of growth depends on."
          ctas={[
            { label: "Speak to us", href: "#/contact", variant: "primary" },
            { label: "What we do", href: "#/what-we-do", variant: "outline" },
          ]}
        />

        <ImageStripCarousel
          cards={[
            {
              image:
                "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
              eyebrow: "Industry",
              title: "Technology",
            },
            {
              image:
                "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80",
              eyebrow: "Industry",
              title: "SaaS",
            },
            {
              image:
                "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
              eyebrow: "Industry",
              title: "Professional Services",
            },
            {
              image:
                "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
              eyebrow: "Industry",
              title: "Healthcare",
            },
          ]}
        />

        <RelevantCompanies />

        <ClientStoryFlipped
          eyebrow="Client story"
          headline="Bold steps forward, taken with discipline."
          body="A regional SaaS operator came to us mid-raise with a story the numbers could not yet defend. We rebuilt the operating model, installed an agentic ops layer in the revenue stack, and rewrote the intangibles narrative for the data room. The round closed on the operator's terms."
          ctaLabel="Read the client story"
          ctaHref="#/contact"
          image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80"
          imageAlt="Operators in a working session reviewing a rebuilt operating model."
        />

        <PartnerEcosystems
          eyebrow="Partner ecosystems"
          before="We build alongside the"
          accent="partners and platforms"
          after="our clients already trust."
          body="Bain Squared connects operator-grade advisory with the engineering, data, and capital partners that turn a plan into a running system. We bring the partners in early, on the client's terms, not ours."
        />

        <WhitepaperFeature
          eyebrow="Whitepaper"
          headline="The operator's playbook for agentic AI in the finance function."
          body="Most AI programs stall because the operating core was never ready. This paper lays out how we sequence agentic build-outs inside the CFO suite, the controls we install before automation goes live, and the intangibles we make visible to the board."
          ctaLabel="Download the paper"
          ctaHref="#/contact"
          image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80"
          imageAlt="Cover of the Bain Squared whitepaper on agentic AI in finance."
        />

        <CTAStrip
          text="Bring us your equivalent problem."
          buttonLabel="Reach out"
          href="#/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
