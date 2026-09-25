import { OutcomeNote } from "./OutcomeNote";
import { Plus, Minus } from "lucide-react";

const stages = [
  { title: "Diagnose", body: "Agree what needs to change. Map the workflow, identify the constraint and establish who owns the result.", output: "A defined problem, a baseline and an agreed scope." },
  { title: "Design", body: "Work through the decisions, exceptions and responsibilities before implementation begins.", output: "A proposed workflow or model, with assumptions and checks documented." },
  { title: "Deploy", body: "Put the work into use alongside your team. Test the handoffs and prepare the people who will run it.", output: "A working implementation, operating guidance and a named owner." },
  { title: "Defend", body: "Review the result against the original question. Keep the evidence clear enough for the next review or handover.", output: "A review record, supporting evidence and a plan for ongoing ownership." },
];

export function SquaredMethod() {
  return (
    <section className="bs-bg-canvas py-20 md:py-28" data-testid="squared-method">
      <div className="bs-container grid grid-cols-1 lg:grid-cols-[5fr_6fr] gap-12 lg:gap-20 items-start">
        <div>
          <h2 className="font-display text-[38px] md:text-[56px] leading-[1.12] font-bold tracking-[-0.02em]" style={{ fontSize: "var(--bs-type-section)", lineHeight: 1.2 , fontFamily: "Bitter, Georgia, serif"}}>The work behind<br /><span className="text-[hsl(var(--bs-forest-deep))]">the outcome.</span></h2>
          <p className="mt-7 text-[18px] leading-[1.6] max-w-[420px]">The Squared Method.<br />Four connected stages, shaped around the decision your business needs to make.</p>
        </div>
        <div className="pl-6 md:pl-9 border-l border-[hsl(var(--bs-forest-accent))]">
          {stages.map((stage, i) => (
            <details key={stage.title} open={i === 0} className="bs-method-note group border-b border-[hsl(var(--bs-forest-accent))] py-6 first:pt-0" data-testid={`method-${stage.title.toLowerCase()}`}>
              <summary className="flex items-center justify-between gap-5 cursor-pointer list-none">
                <h3 className="font-display text-[28px] md:text-[32px] font-semibold leading-[1.2]" style={{ fontSize: "var(--bs-type-feature)", lineHeight: 1.2 , fontFamily: "Bitter, Georgia, serif"}}>{stage.title}</h3>
                <Plus className="group-open:hidden shrink-0" size={22} aria-hidden="true" /><Minus className="hidden group-open:block shrink-0" size={22} aria-hidden="true" />
              </summary>
              <p className="mt-5 text-[17px] leading-[1.6]">{stage.body}</p>
              <OutcomeNote className="mt-6">{stage.output}</OutcomeNote>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
