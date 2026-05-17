import { Header } from "@/components/Header";
import { ContactFormFields } from "@/components/ContactFormFields";
import { OfficeLocationsSidebar } from "@/components/OfficeLocationsSidebar";
import { Footer } from "@/components/Footer";

export default function Contact() {
  return (
    <div className="bs-bg-canvas" data-testid="page-contact">
      <Header />
      <main>
        {/* Intro */}
        <section
          className="bs-bg-canvas pt-32 md:pt-40 pb-12 md:pb-16"
          data-testid="contact-intro"
        >
          <div className="bs-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
              <div className="lg:col-span-8">
                <h1
                  className="font-display"
                  style={{
                    fontSize: "clamp(40px, 5.4vw, 72px)",
                    fontWeight: 700,
                    lineHeight: 1.05,
                    letterSpacing: "-0.02em",
                    color: "hsl(var(--bs-ink))",
                  }}
                >
                  Bring us your{" "}
                  <span style={{ color: "hsl(var(--bs-forest-deep))" }}>
                    problem.
                  </span>
                </h1>
              </div>
              <div className="lg:col-span-4">
                <p
                  className="text-[16px] md:text-[18px] leading-[1.55] font-bold"
                  style={{ color: "hsl(var(--bs-ink))" }}
                >
                  Tell us where the operating core needs the rebuild. A partner
                  will get back to you within two business days.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Form + sidebar */}
        <section
          className="bs-bg-canvas pb-20 md:pb-28"
          data-testid="contact-form-section"
        >
          <div className="bs-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-8">
                <ContactFormFields />
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
