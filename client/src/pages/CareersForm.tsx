import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { FormIntro } from "@/components/FormIntro";
import { RoleSwitcher } from "@/components/RoleSwitcher";
import { CareersFormFields } from "@/components/CareersFormFields";
import { OfficeLocationsSidebar } from "@/components/OfficeLocationsSidebar";
import { Footer } from "@/components/Footer";
import { getOpenRoles } from "@/lib/queries";

const FALLBACK_ROLES = [
  {
    label: "Consultant",
    description: "Own client workstreams end to end. You'll sit in the operator's seat during the rebuild, ship work that survives after handover, and learn craft from partners who have run the work themselves.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80",
  },
  {
    label: "Senior Consultant",
    description: "Lead full engagements with partner oversight. You'll scope the work, run the diagnose phase, manage the team, and own the handover quality bar that clients keep referring us on.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1600&q=80",
  },
  {
    label: "Associate",
    description: "The craft track. You'll build the models, ship the agentic prototypes, and produce the analysis the operator on the other side actually uses. We invest heavily in your tooling and depth.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    label: "Partner",
    description: "Run a piece of the firm. Partners here carry client outcomes, hire the next generation of operators, and protect the craft bar that makes Bain Squared what it is. Equity track, operator background expected.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    label: "Other",
    description: "Operations, finance, design, engineering, recruiting. If you would shape Bain Squared from inside the firm rather than on the client side, tell us where you'd add the most. The bar is the same.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function CareersForm() {
  const [roles, setRoles] = useState(FALLBACK_ROLES);

  useEffect(() => {
    getOpenRoles().then((data) => {
      if (data.length > 0) setRoles(data);
    });
  }, []);

  return (
    <div className="bs-bg-canvas" data-testid="page-careers-form">
      <Header />
      <main>
        <FormIntro
          paragraph="Every applicant is reviewed by a real human, always. No filters, no auto-reject. Tell us about the work you have shipped, the operating problems you have solved, and the kind of room you do your best work in."
          headline="Every application is read by a"
          accent="real human."
        />

        <RoleSwitcher roles={roles} />

        {/* Form + sidebar */}
        <section
          className="bs-bg-canvas py-16 md:py-24"
          data-testid="careers-form-section"
        >
          <div className="bs-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-8">
                <h2
                  className="font-display mb-10"
                  style={{
                    fontSize: "clamp(28px, 3vw, 40px)",
                    fontWeight: 700,
                    lineHeight: 1.15,
                    letterSpacing: "-0.015em",
                    color: "hsl(var(--bs-ink))",
                  }}
                >
                  Apply now
                </h2>
                <CareersFormFields />
              </div>
              <div className="lg:col-span-4">
                <OfficeLocationsSidebar />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
