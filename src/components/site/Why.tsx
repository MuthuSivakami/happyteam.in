import {
  Wrench,
  MousePointerClick,
  Smartphone,
  ShieldCheck,
  TrendingUp,
  IndianRupee,
  Store,
  School,
  GraduationCap,
  Factory,
  HeartHandshake,
  Landmark,
  Briefcase,
  Headphones,
  ArrowRight,
} from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";

const features = [
  { icon: Wrench, title: "Custom Built", text: "Built around your workflow, not a rigid template." },
  { icon: MousePointerClick, title: "Easy to Use", text: "Clean screens your staff learn in a day." },
  { icon: Smartphone, title: "Mobile Responsive", text: "Works on desktop, tablet and phone." },
  { icon: ShieldCheck, title: "Secure & Reliable", text: "Role-based access, backups and audit trails." },
  { icon: TrendingUp, title: "Scalable", text: "Add branches, users and modules as you grow." },
  { icon: IndianRupee, title: "Affordable", text: "Practical pricing designed for Indian SMEs." },
];

export function Why() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow="Why Happy Team" title="Why Businesses Choose Happy Team" />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal as="li" key={f.title} delay={(i % 3) * 90}>
              <div className="group glass relative h-full overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-primary/30 bg-primary/10 text-primary transition-all duration-500 group-hover:bg-[image:var(--gradient-primary)] group-hover:text-primary-foreground">
                    <f.icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base font-bold">{f.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{f.text}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

const steps = [
  ["01", "Understand", "We understand your business and workflow."],
  ["02", "Plan", "We identify the right features and technology."],
  ["03", "Design", "We create a simple and professional user experience."],
  ["04", "Develop", "We build and test your software."],
  ["05", "Launch", "We deploy your system and help you get started."],
  ["06", "Support", "We provide ongoing improvements and support."],
];

export function Process() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow="Process" title="From Idea to Software" />
        <div className="relative mt-14">
          <div aria-hidden className="absolute top-6 right-0 left-0 hidden h-px bg-border lg:block" />
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {steps.map(([n, title, text], i) => (
              <Reveal as="li" key={n} delay={i * 100}>
                <div className="group relative h-full">
                  <span className="relative z-10 grid h-12 w-12 place-items-center rounded-2xl bg-[image:var(--gradient-primary)] text-sm font-extrabold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform duration-500 group-hover:scale-110">
                    {n}
                  </span>
                  <h3 className="mt-4 text-base font-bold">{title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

const industries = [
  { icon: Store, label: "Retail & Supermarkets" },
  { icon: School, label: "Schools" },
  { icon: GraduationCap, label: "Colleges" },
  { icon: Factory, label: "Manufacturing" },
  { icon: HeartHandshake, label: "NGOs" },
  { icon: Landmark, label: "Trusts & Organizations" },
  { icon: Briefcase, label: "Small Businesses" },
  { icon: Headphones, label: "Service Companies" },
];

export function Industries() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow="Industries" title="Built for Real-World Businesses" />
        <ul className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {industries.map((it, i) => (
            <Reveal as="li" key={it.label} delay={(i % 4) * 80}>
              <div className="group glass flex h-full flex-col items-center gap-3 rounded-3xl p-6 text-center transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--glow-red)]">
                <span className="grid h-14 w-14 place-items-center rounded-full border border-primary/25 bg-primary/10 text-primary transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110">
                  <it.icon className="size-6" />
                </span>
                <p className="text-sm font-semibold">{it.label}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

const before = [
  "Paper Bills",
  "Manual Records",
  "Excel Files",
  "Stock Confusion",
  "Time-Consuming Reports",
  "Payroll Calculations",
];
const after = [
  "Digital Billing",
  "Centralized Data",
  "Automated Reports",
  "Real-Time Stock",
  "Instant Analytics",
  "Automated Payroll",
];

export function BeforeAfter() {
  return (
    <section className="relative overflow-hidden py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: "var(--gradient-hero)", opacity: 0.55 }}
      />
      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="The difference"
          title="Before & After Happy Team"
          subtitle="The same business, running on systems instead of paper."
        />

        <div className="mt-14 grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
          <Reveal>
            <div className="rounded-3xl border border-border bg-secondary/40 p-6">
              <h3 className="text-sm font-bold tracking-[0.2em] text-muted-foreground uppercase">
                Before
              </h3>
              <ul className="mt-5 space-y-3">
                {before.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-3 rounded-2xl bg-background/50 px-4 py-3 text-sm text-muted-foreground line-through decoration-muted-foreground/40"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={150} className="mx-auto">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-elegant)]">
              <ArrowRight className="size-6 md:rotate-0" />
            </span>
          </Reveal>

          <Reveal delay={250}>
            <div className="glass rounded-3xl p-6 shadow-[var(--glow-red)]">
              <h3 className="text-sm font-bold tracking-[0.2em] text-primary uppercase">After</h3>
              <ul className="mt-5 space-y-3">
                {after.map((a) => (
                  <li
                    key={a}
                    className="flex items-center gap-3 rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3 text-sm font-semibold"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}