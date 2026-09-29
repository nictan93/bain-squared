import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import { CTAStrip } from '@/components/CTAStrip';
import { sectors } from '@/data/sectors';
import NotFound from '@/pages/not-found';
export default function Sector({params}:{params:{slug:string}}) {
 const sector=sectors.find(s=>s.slug===params.slug);
 if(!sector)return <NotFound/>;
 return <div className="bs-bg-canvas"><Header/><main>
  <PageHero title={sector.title} lead={sector.lead} body={sector.body} ctas={[{label:'Discuss your priorities',href:'/contact'},{label:'Who we work with',href:'/who-we-work-with',variant:'outline'}]}/>
  <section className="py-16 md:py-24" style={{background:'hsl(var(--bs-forest-soft))'}}><div className="bs-container">
   <h2 className="font-display mb-10" style={{fontSize:'var(--bs-type-section)'}}>Where the work can start</h2>
   {sector.focus.map(([title,body])=><div key={title} className="grid md:grid-cols-2 gap-4 md:gap-16 py-8 border-t border-current/20"><h3 className="font-display text-2xl">{title}</h3><p className="text-[17px] leading-relaxed max-w-2xl">{body}</p></div>)}
  </div></section>
  <section className="bs-container py-16 md:py-24"><h2 className="font-display mb-8" style={{fontSize:'var(--bs-type-section)'}}>Explore our services</h2><div className="flex flex-col gap-5 items-start text-lg">
   <a className="underline underline-offset-4" href="/financial-transformation">Financial transformation</a><a className="underline underline-offset-4" href="/intangibles-valuation">Intangible asset valuation</a><a className="underline underline-offset-4" href="/ai-integration">Agentic AI automation</a>
  </div></section>
  <CTAStrip text="Start with the decision your business needs to make." buttonLabel="Speak to us" href="/contact"/>
 </main><Footer/></div>;
}
