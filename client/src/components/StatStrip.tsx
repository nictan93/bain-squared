const stats = [
  {
    value: "90%",
    caption: "of typical company value sits in intangible assets we know how to defend.",
  },
  {
    value: "3–6",
    suffix: "weeks",
    caption: "from kickoff to a deployable AI workflow in your business.",
  },
  {
    value: "40%",
    caption: "average close-cycle reduction after a finance operating-model rebuild.",
  },
];

export function StatStrip() {
  return (
    <section
      className="bs-section bs-bg-forest-soft"
      data-testid="section-stat-strip"
      aria-label="Key proof points"
    >
      <div className="bs-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col" data-testid={`stat-${i + 1}`}>
              <div className="flex items-baseline gap-3">
                <span className="bs-stat">{s.value}</span>
                {s.suffix && (
                  <span className="text-[20px] md:text-[24px] font-display font-bold text-[hsl(var(--bs-forest-deep))]">
                    {s.suffix}
                  </span>
                )}
              </div>
              <p className="bs-stat-caption">{s.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
