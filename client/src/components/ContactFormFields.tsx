import { useState, FormEvent, ChangeEvent } from "react";

/**
 * ContactFormFields — Contact form.
 * Submits via mailto:hello@bainsquared.com (no backend).
 *
 * Fields: First*, Last*, Business Email*, Organization*, Job Title*,
 *         Service* dropdown, How can we help?*, Terms*
 */

const SERVICES = [
  "Agentic AI",
  "Financial Advisory",
  "Intangibles Valuation",
  "The Squared Method (all three)",
  "Not sure yet",
];

type FormState = {
  first: string;
  last: string;
  email: string;
  organization: string;
  jobTitle: string;
  service: string;
  message: string;
  terms: boolean;
};

const initial: FormState = {
  first: "",
  last: "",
  email: "",
  organization: "",
  jobTitle: "",
  service: "",
  message: "",
  terms: false,
};

export function ContactFormFields() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);

  const set =
    <K extends keyof FormState>(key: K) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const target = e.target as HTMLInputElement;
      const value =
        target.type === "checkbox" ? target.checked : (target.value as never);
      setForm((f) => ({ ...f, [key]: value }) as FormState);
    };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `Inbound — ${form.first} ${form.last} @ ${form.organization} (${form.service})`;
    const bodyLines = [
      `Name: ${form.first} ${form.last}`,
      `Business email: ${form.email}`,
      `Organization: ${form.organization}`,
      `Job title: ${form.jobTitle}`,
      `Service: ${form.service}`,
      "",
      "How we can help:",
      form.message,
    ];
    const href = `mailto:hello@bainsquared.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = href;
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3 text-[15px] bg-white border focus:outline-none transition-colors";
  const inputStyle = {
    color: "hsl(var(--bs-ink))",
    borderColor: "hsl(var(--bs-hairline))",
  } as const;
  const labelClass =
    "block text-[13px] font-bold mb-2 uppercase tracking-[0.06em]";
  const labelStyle = { color: "hsl(var(--bs-ink))" } as const;

  if (submitted) {
    return (
      <div
        className="p-10 border"
        style={{ borderColor: "hsl(var(--bs-hairline))" }}
        data-testid="contact-form-success"
      >
        <h3
          className="font-display mb-4"
          style={{
            fontSize: "26px",
            fontWeight: 700,
            color: "hsl(var(--bs-ink))",
          }}
        >
          Your mail client just opened.
        </h3>
        <p
          className="text-[16px] leading-[1.6]"
          style={{ color: "hsl(var(--bs-ink))" }}
        >
          Hit send on the draft and a partner will get back to you within two
          business days.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(initial);
            setSubmitted(false);
          }}
          className="mt-8 inline-flex items-center gap-2 text-[15px] font-bold border-b-2 pb-1 transition-colors"
          style={{
            color: "hsl(var(--bs-forest-deep))",
            borderColor: "hsl(var(--bs-forest-deep))",
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
      data-testid="contact-form"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="c-first" className={labelClass} style={labelStyle}>
            First name *
          </label>
          <input
            id="c-first"
            required
            value={form.first}
            onChange={set("first")}
            className={inputClass}
            style={inputStyle}
            data-testid="input-c-first"
          />
        </div>
        <div>
          <label htmlFor="c-last" className={labelClass} style={labelStyle}>
            Last name *
          </label>
          <input
            id="c-last"
            required
            value={form.last}
            onChange={set("last")}
            className={inputClass}
            style={inputStyle}
            data-testid="input-c-last"
          />
        </div>
      </div>

      <div>
        <label htmlFor="c-email" className={labelClass} style={labelStyle}>
          Business email *
        </label>
        <input
          id="c-email"
          type="email"
          required
          value={form.email}
          onChange={set("email")}
          className={inputClass}
          style={inputStyle}
          data-testid="input-c-email"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="c-org" className={labelClass} style={labelStyle}>
            Organization *
          </label>
          <input
            id="c-org"
            required
            value={form.organization}
            onChange={set("organization")}
            className={inputClass}
            style={inputStyle}
            data-testid="input-c-org"
          />
        </div>
        <div>
          <label htmlFor="c-title" className={labelClass} style={labelStyle}>
            Job title *
          </label>
          <input
            id="c-title"
            required
            value={form.jobTitle}
            onChange={set("jobTitle")}
            className={inputClass}
            style={inputStyle}
            data-testid="input-c-title"
          />
        </div>
      </div>

      <div>
        <label htmlFor="c-service" className={labelClass} style={labelStyle}>
          Which service is this about? *
        </label>
        <select
          id="c-service"
          required
          value={form.service}
          onChange={set("service")}
          className={inputClass}
          style={inputStyle}
          data-testid="select-c-service"
        >
          <option value="" disabled>
            Select a service
          </option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="c-message" className={labelClass} style={labelStyle}>
          How can we help? *
        </label>
        <textarea
          id="c-message"
          required
          rows={6}
          value={form.message}
          onChange={set("message")}
          className={inputClass}
          style={inputStyle}
          data-testid="input-c-message"
        />
      </div>

      <label
        className="flex items-start gap-3 cursor-pointer"
        data-testid="label-c-terms"
      >
        <input
          type="checkbox"
          required
          checked={form.terms}
          onChange={set("terms")}
          className="mt-1 h-4 w-4 shrink-0"
          style={{ accentColor: "hsl(var(--bs-forest-deep))" }}
          data-testid="checkbox-c-terms"
        />
        <span
          className="text-[14px] leading-[1.55]"
          style={{ color: "hsl(var(--bs-ink))" }}
        >
          I agree that Bain Squared may process this information to respond to
          my inquiry, and I have read the privacy notice. *
        </span>
      </label>

      <button
        type="submit"
        className="inline-flex items-center justify-center px-10 py-4 text-[15px] font-bold transition-colors whitespace-nowrap border"
        style={{
          backgroundColor: "hsl(var(--bs-forest-deep))",
          color: "white",
          borderColor: "hsl(var(--bs-forest-deep))",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor =
            "hsl(var(--bs-forest-deep-hover))";
          e.currentTarget.style.borderColor =
            "hsl(var(--bs-forest-deep-hover))";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "hsl(var(--bs-forest-deep))";
          e.currentTarget.style.borderColor = "hsl(var(--bs-forest-deep))";
        }}
        data-testid="button-submit-contact"
      >
        Send message
      </button>
    </form>
  );
}
