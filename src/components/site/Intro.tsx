import {
  Globe,
  Receipt,
  GraduationCap,
  Wallet,
  Boxes,
  Network,
  FileSpreadsheet,
  Wand2,
} from "lucide-react";
import { Counter, Reveal, SectionHeading } from "./primitives";

const stats = [
  { to: 8, suffix: "+", label: "Software Projects" },
  { to: 2, suffix: "+", label: "Years Experience" },
  { to: 10, suffix: "+", label: "Business Modules" },
  { to: 100, suffix: "%", label: "Custom Solutions" },
];

const services = [
  {
    icon: Globe,
    title: "Website Development",
    text: "Modern, responsive and high-performance websites that turn visitors into customers.",
  },
  {
    icon: Receipt,
    title: "Billing Software",
    text: "Fast and easy billing systems with invoices, receipts, sales reports and customer management.",
  },
  {
    icon: GraduationCap,
    title: "Student Management",
    text: "Manage admissions, students, fees, attendance, courses, reports and academic information.",
  },
  {
    icon: Wallet,
    title: "Payroll Software",
    text: "Automate employee salary calculation, payroll generation, deductions and salary reports.",
  },
  {
    icon: Boxes,
    title: "Inventory Management",
    text: "Track stock, purchases, sales, suppliers, stock movements and low-stock alerts.",
  },
  {
    icon: Network,
    title: "ERP Software",
    text: "Connect your business operations with powerful centralized ERP solutions.",
  },
  {
    icon: FileSpreadsheet,
    title: "GST Billing",
    text: "Professional GST invoices, sales reports, purchase reports and financial summaries.",
  },
  {
    icon: Wand2,
    title: "Custom Software",
    text: "Have a unique business requirement? We build software around your exact workflow.",
  },
];

export function Intro() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Why we exist"
          title="Technology That Makes Business Simpler"
          subtitle="Happy Team creates practical software solutions that replace manual work, spreadsheets and disconnected processes with simple digital systems your whole team can actually use."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="glass group relative h-full overflow-hidden rounded-3xl p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--glow-red)]">
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-[image:var(--gradient-primary)] opacity-60"
                />
                <p className="text-3xl font-extrabold sm:text-5xl">
                  <span className="text-gradient">
                    <Counter to={s.to} suffix={s.suffix} />
                  </span>
                </p>
                <p className="mt-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase sm:text-sm">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Services"
          title="Software Solutions for Every Business"
          subtitle="Ten focused modules, one dependable partner — built for Indian SMEs, schools and growing organisations."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal as="li" key={s.title} delay={(i % 4) * 80}>
              <article className="group glass relative h-full overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]">
                <div
                  aria-hidden
                  className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <s.icon className="size-6" />
                </div>
                <h3 className="relative mt-5 text-lg font-bold">{s.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

const flow = [
  "Customer",
  "Billing",
  "Inventory",
  "Purchases",
  "Payroll",
  "Reports",
  "Business Dashboard",
];

export function OneSystem() {
  return (
    <section className="relative overflow-hidden py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: "var(--gradient-hero)", opacity: 0.7 }}
      />
      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="One business. One powerful system."
          title={
            <>
              Everything Your Business Needs — <span className="text-gradient">In One Place.</span>
            </>
          }
          subtitle="Every module talks to the next. No duplicate entry, no lost data, no guesswork."
        />

        <div className="relative mx-auto mt-16 max-w-2xl">
          <div aria-hidden className="absolute top-0 bottom-0 left-6 w-px bg-border" />
          <ol className="space-y-4">
            {flow.map((step, i) => (
              <Reveal as="li" key={step} delay={i * 80}>
                <div className="relative flex items-center gap-4 pl-14">
                  <span
                    aria-hidden
                    className="absolute left-6 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-[var(--glow-red)]"
                  />
                  <div className="glass flex w-full items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--glow-red)]">
                    <span className="text-sm font-extrabold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-base font-bold sm:text-lg">{step}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}