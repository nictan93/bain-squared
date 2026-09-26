import { siteImage } from "@/data/site-media";
import { Header } from "@/components/Header";
import { FormIntro } from "@/components/FormIntro";
import { RoleSwitcher } from "@/components/RoleSwitcher";
import { CareersFormFields } from "@/components/CareersFormFields";
import { Footer } from "@/components/Footer";

export default function CareersForm() {
  return (
    <div className="bs-bg-canvas" data-testid="page-careers-form">
      <Header />
      <main>
        <FormIntro
          paragraph="Tell us about your experience, the work you have delivered and the areas you would like to develop. This form registers your interest in future opportunities; it is not a list of confirmed vacancies."
          headline="Tell us about your"
          accent="experience."
        />

        <RoleSwitcher
          roles={[
            {
              label: "Consultant",
              description:
                "Contribute to client work from analysis through implementation. Bring a clear approach to solving problems and the ability to work with the people responsible for using the result.",
              image:
                siteImage("careers-form-01", "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80"),
            },
            {
              label: "Senior Consultant",
              description:
                "Lead a defined area of delivery, coordinate contributors and help clients make informed decisions. Relevant experience includes scoping work, reviewing quality and preparing an effective handover.",
              image:
                siteImage("careers-form-02", "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1600&q=80"),
            },
            {
              label: "Associate",
              description:
                "Develop models, research or technical implementations that support a client decision. We are interested in careful analysis, curiosity and a willingness to learn through delivery.",
              image:
                siteImage("careers-form-03", "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"),
            },
            {
              label: "Partner",
              description:
                "Bring experience in building a practice, leading client relationships and taking responsibility for delivery. The scope and terms of any partnership are discussed individually.",
              image:
                siteImage("careers-form-04", "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1600&q=80"),
            },
            {
              label: "Other",
              description:
                "Tell us how your experience could contribute to the firm. We welcome relevant backgrounds in operations, design, engineering, finance and other disciplines.",
              image:
                siteImage("careers-form-05", "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80"),
            },
          ]}
        />

        {/* Form */}
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
                    fontSize: "var(--bs-type-section)",
                    fontWeight: 700,
                    lineHeight: 1.2,
                    letterSpacing: "-0.015em",
                    color: "hsl(var(--bs-ink))", fontFamily: "Bitter, Georgia, serif"}}
                >
                  Register your interest
                </h2>
                <CareersFormFields />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
