import { useEffect, useRef, useState, type ReactNode } from "react";

/** A decorative, one-shot accent for a concrete delivery outcome. */
export function OutcomeNote({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <p className={`flex items-start gap-4 text-[15px] leading-[1.6] ${className}`}>
      <span ref={ref} className="bs-outcome-sequence" data-visible={visible} aria-hidden="true">
        <i /><i /><i />
      </span>
      <span>{children}</span>
    </p>
  );
}
