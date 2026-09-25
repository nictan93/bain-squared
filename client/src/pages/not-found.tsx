import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bs-bg-canvas">
      <Header />
      <main className="bs-container pt-40 pb-24 md:pt-48 md:pb-32">
        <p className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--bs-forest-deep))]">Page not found</p>
        <h1 className="font-display text-4xl md:text-6xl mt-5 max-w-3xl" style={{ fontSize: "var(--bs-type-page)", lineHeight: 1.1 , fontFamily: "Bitter, Georgia, serif"}}>We couldn’t find that page.</h1>
        <p className="mt-6 text-lg max-w-xl">The link may have changed. Explore our services or return to Insights to find what you need.</p>
        <div className="flex flex-wrap gap-6 mt-10 font-semibold text-[hsl(var(--bs-forest-deep))]">
          <a href="#/what-we-do" className="underline underline-offset-4">Explore our services</a>
          <a href="#/insights" className="underline underline-offset-4">View Insights</a>
          <a href="#/contact" className="underline underline-offset-4">Contact us</a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
