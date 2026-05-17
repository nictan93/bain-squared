import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArticleBody, type Block } from "@/components/ArticleBody";

/**
 * LegalPage — reusable template for Privacy Policy and Terms of Use.
 * Single-column long-form, serif body. No hero image.
 * Renders title + "Last updated" meta + structured body blocks.
 */

type Props = {
  title: string;
  lastUpdated: string;
  blocks: Block[];
};

export default function LegalPage({ title, lastUpdated, blocks }: Props) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [title]);

  return (
    <div className="bs-bg-canvas" data-testid={`page-legal`}>
      <Header />
      <main>
        {/* Top spacer so the fixed header doesn't overlap the title */}
        <div style={{ height: "160px" }} aria-hidden="true" />

        <section className="bs-bg-canvas">
          <div className="bs-container">
            <div className="max-w-[720px] mx-auto">
              <h1
                className="font-display"
                style={{
                  color: "hsl(var(--bs-ink))",
                  fontSize: "clamp(36px, 5vw, 56px)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-0.015em",
                }}
              >
                {title}
              </h1>
              <p
                className="mt-6 text-[14px] italic"
                style={{ color: "hsl(var(--bs-ink-muted))" }}
              >
                Last updated and effective: {lastUpdated}
              </p>
            </div>
          </div>
        </section>

        <ArticleBody blocks={blocks} />
      </main>
      <Footer />
    </div>
  );
}
