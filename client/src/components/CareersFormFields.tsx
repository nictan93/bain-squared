import { useState, FormEvent, ChangeEvent } from "react";

/**
 * CareersFormFields — 9-field application form.
 * Submits via mailto:hr@bainsquared.com (no backend).
 *
 * Fields: First*, Last*, Email*, Phone*, Location*, Desired Function*,
 *         LinkedIn*, Intro*, Resume (file name only — mailto can't attach), Terms*
 */

const FUNCTIONS = [
  "Consultant",
  "Senior Consultant",
  "Associate",
  "Partner",
  "Other",
];

type FormState = {
  first: string;
  last: string;
  email: string;
  phone: string;
  location: string;
  function: string;
  linkedin: string;
  intro: string;
  resumeName: string;
  terms: boolean;
};

const initial: FormState = {
  first: "",
  last: "",
  email: "",
  phone: "",
  location: "",
  function: "",
  linkedin: "",
  intro: "",
  resumeName: "",
  terms: false,
};

export function CareersFormFields() {
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

  const onResume = (e: ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) setForm((s) => ({ ...s, resumeName: f.name }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `Career application — ${form.first} ${form.last} (${form.function})`;
    const bodyLines = [
      `Name: ${form.first} ${form.last}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Location: ${form.location}`,
      `Desired function: ${form.function}`,
      `LinkedIn: ${form.linkedin}`,
      "",
      "Intro:",
      form.intro,
      "",
      `Resume file (please attach manually): ${form.resumeName || "—"}`,
    ];
    const href = `mailto:hr@bainsquared.com?subject=${encodeURIComponent(
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
        data-testid="careers-form-success"
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
          Please attach your resume to the draft and hit send. We review every
          application by a real human, and aim to close every loop within three
          weeks.
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
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
      data-testid="careers-form"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="first" className={labelClass} style={labelStyle}>
            First name *
          </label>
          <input
            id="first"
            required
            value={form.first}
            onChange={set("first")}
            className={inputClass}
            style={inputStyle}
            data-testid="input-first"
          />
        </div>
        <div>
          <label htmlFor="last" className={labelClass} style={labelStyle}>
            Last name *
          </label>
          <input
            id="last"
            required
            value={form.last}
            onChange={set("last")}
            className={inputClass}
            style={inputStyle}
            data-testid="input-last"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className={labelClass} style={labelStyle}>
            Email *
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={set("email")}
            className={inputClass}
            style={inputStyle}
            data-testid="input-email"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass} style={labelStyle}>
            Phone *
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={form.phone}
            onChange={set("phone")}
            className={inputClass}
            style={inputStyle}
            data-testid="input-phone"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="location" className={labelClass} style={labelStyle}>
            Location *
          </label>
          <input
            id="location"
            required
            placeholder="City, Country"
            value={form.location}
            onChange={set("location")}
            className={inputClass}
            style={inputStyle}
            data-testid="input-location"
          />
        </div>
        <div>
          <label htmlFor="function" className={labelClass} style={labelStyle}>
            Desired function *
          </label>
          <select
            id="function"
            required
            value={form.function}
            onChange={set("function")}
            className={inputClass}
            style={inputStyle}
            data-testid="select-function"
          >
            <option value="" disabled>
              Select a role
            </option>
            {FUNCTIONS.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="linkedin" className={labelClass} style={labelStyle}>
          LinkedIn profile *
        </label>
        <input
          id="linkedin"
          type="url"
          required
          placeholder="https://www.linkedin.com/in/..."
          value={form.linkedin}
          onChange={set("linkedin")}
          className={inputClass}
          style={inputStyle}
          data-testid="input-linkedin"
        />
      </div>

      <div>
        <label htmlFor="intro" className={labelClass} style={labelStyle}>
          Tell us about yourself *
        </label>
        <textarea
          id="intro"
          required
          rows={6}
          value={form.intro}
          onChange={set("intro")}
          className={inputClass}
          style={inputStyle}
          data-testid="input-intro"
        />
      </div>

      <div>
        <label htmlFor="resume" className={labelClass} style={labelStyle}>
          Resume / CV *
        </label>
        <input
          id="resume"
          type="file"
          required
          accept=".pdf,.doc,.docx"
          onChange={onResume}
          className="block w-full text-[14px]"
          style={{ color: "hsl(var(--bs-ink))" }}
          data-testid="input-resume"
        />
        <p
          className="mt-2 text-[12px]"
          style={{ color: "hsl(var(--bs-ink-muted))" }}
        >
          PDF or Word doc. You'll attach it to the draft email after submitting.
        </p>
      </div>

      <label
        className="flex items-start gap-3 cursor-pointer"
        data-testid="label-terms"
      >
        <input
          type="checkbox"
          required
          checked={form.terms}
          onChange={set("terms")}
          className="mt-1 h-4 w-4 shrink-0"
          style={{ accentColor: "hsl(var(--bs-forest-deep))" }}
          data-testid="checkbox-terms"
        />
        <span
          className="text-[14px] leading-[1.55]"
          style={{ color: "hsl(var(--bs-ink))" }}
        >
          I agree that Bain Squared may process the information in this form for
          recruitment purposes, and I have read the privacy notice. *
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
        data-testid="button-submit-careers"
      >
        Submit application
      </button>
    </form>
  );
}
