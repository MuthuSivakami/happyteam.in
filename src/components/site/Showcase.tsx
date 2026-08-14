import { useState } from "react";
import { Reveal, SectionHeading } from "./primitives";
import { Window, Stat, Bars, Line, Rows, Shot } from "./Mockups";
import { cn } from "@/lib/utils";

type Tab = { id: string; label: string; render: () => React.ReactNode };

const tabs: [Tab, ...Tab[]] = [
  {
    id: "billing",
    label: "Billing",
    render: () => (
      <div className="grid gap-4 md:grid-cols-[1.2fr_1fr]">
        <Window title="Billing Dashboard">
          <Shot id="photo-1551288049-bebda4e38f71" alt="Billing dashboard analytics" />
          <div className="mt-3 grid grid-cols-3 gap-2">
            <Stat label="Today" value="₹1.24L" trend="▲ 18%" />
            <Stat label="Invoices" value="132" />
            <Stat label="Pending" value="₹42K" />
          </div>
        </Window>
        <Window title="Recent Invoices">
          <Shot id="photo-1554224155-6726b3ff858f" alt="Invoices and accounting" ratio="aspect-[16/9]" />
          <div className="mt-3">
          <Rows
            rows={[
              ["INV-10241 · Sharma Stores", "₹12,400", "Paid"],
              ["INV-10242 · Anand Traders", "₹4,150", "Due"],
              ["INV-10243 · Vinayak Ent.", "₹28,900", "Paid"],
              ["INV-10244 · KMR Agencies", "₹7,600", "Paid"],
            ]}
          />
          </div>
        </Window>
      </div>
    ),
  },
  {
    id: "sales",
    label: "Sales Report",
    render: () => (
      <div className="grid gap-4 md:grid-cols-[1fr_1.2fr]">
        <Window title="GST Summary">
          <Shot id="photo-1554224155-6726b3ff858f" alt="GST tax summary reports" ratio="aspect-[16/9]" />
          <div className="mt-3 grid gap-2">
            <Stat label="Taxable Value" value="₹18,42,000" />
            <Stat label="CGST + SGST" value="₹1,65,780" />
            <Stat label="Net Sales" value="₹20,07,780" trend="▲ 9.2% MoM" />
          </div>
        </Window>
        <Window title="Monthly Sales">
          <Shot id="photo-1460925895917-afdab827c52f" alt="Monthly sales performance dashboard" />
          <div className="mt-3">
            <Bars data={[38, 52, 44, 70, 58, 82, 66, 91, 78]} />
          </div>
        </Window>
      </div>
    ),
  },
  {
    id: "inventory",
    label: "Inventory",
    render: () => (
      <div className="grid gap-4 md:grid-cols-[1fr_1fr]">
        <Window title="Stock Overview">
          <Shot id="photo-1553413077-190dd305871c" alt="Warehouse stock overview" ratio="aspect-[16/9]" />
          <div className="mt-3 grid grid-cols-2 gap-2">
            <Stat label="SKUs" value="1,284" />
            <Stat label="Low Stock" value="17" trend="Needs reorder" />
            <Stat label="Suppliers" value="46" />
            <Stat label="Stock Value" value="₹34.7L" />
          </div>
        </Window>
        <Window title="Movements">
          <Shot id="photo-1586528116311-ad8dd3c8310d" alt="Goods movement and dispatch" ratio="aspect-[16/9]" />
          <div className="mt-3">
          <Rows
            rows={[
              ["Basmati Rice 25kg", "-40", "Out"],
              ["Refined Oil 5L", "+120", "In"],
              ["Sugar 1kg", "-12", "Low"],
              ["Wheat Flour 10kg", "+80", "In"],
            ]}
          />
          </div>
        </Window>
      </div>
    ),
  },
  {
    id: "student",
    label: "Student Mgmt",
    render: () => (
      <div className="grid gap-4 md:grid-cols-[1.1fr_1fr]">
        <Window title="Academics Dashboard">
          <Shot id="photo-1523240795612-9a054b0db644" alt="Students in classroom" />
          <div className="mt-3 grid grid-cols-3 gap-2">
            <Stat label="Students" value="1,860" />
            <Stat label="Attendance" value="96.2%" trend="This week" />
            <Stat label="Fees Due" value="₹3.1L" />
          </div>
        </Window>
        <Window title="Fee Collection">
          <Shot id="photo-1541339907198-e08756dedf3f" alt="College campus students" ratio="aspect-[16/9]" />
          <div className="mt-3">
          <Rows
            rows={[
              ["Class X-A", "₹2,40,000", "98%"],
              ["Class IX-B", "₹1,86,000", "91%"],
              ["B.Com I Yr", "₹4,20,000", "87%"],
              ["BBA II Yr", "₹3,10,000", "94%"],
            ]}
          />
          </div>
        </Window>
      </div>
    ),
  },
  {
    id: "payroll",
    label: "Payroll",
    render: () => (
      <div className="grid gap-4 md:grid-cols-[1fr_1.2fr]">
        <Window title="Payroll Run · March">
          <Shot id="photo-1521737604893-d14cc237f11d" alt="Team at work payroll" ratio="aspect-[16/9]" />
          <div className="mt-3 grid gap-2">
            <Stat label="Employees" value="128" />
            <Stat label="Gross Payroll" value="₹42,80,000" />
            <Stat label="Deductions" value="₹3,96,400" trend="PF · ESI · TDS" />
          </div>
        </Window>
        <Window title="Salary Register">
          <Shot id="photo-1454165804606-c3d57bc86b40" alt="Salary register review meeting" />
          <div className="mt-3">
          <Rows
            rows={[
              ["Ramesh K · Production", "₹38,400", "Paid"],
              ["Priya S · Accounts", "₹46,200", "Paid"],
              ["Arjun M · Sales", "₹41,000", "Hold"],
              ["Divya R · Support", "₹33,800", "Paid"],
            ]}
          />
          </div>
        </Window>
      </div>
    ),
  },
  {
    id: "erp",
    label: "ERP",
    render: () => (
      <div className="grid gap-4 md:grid-cols-3">
        <Window title="Operations">
          <Shot id="photo-1581091226825-a6a2a5aee158" alt="ERP operations control" ratio="aspect-[16/9]" />
          <div className="mt-3 grid gap-2">
            <Stat label="Open Orders" value="214" />
            <Stat label="Production" value="88%" trend="Capacity" />
          </div>
        </Window>
        <Window title="Finance">
          <Shot id="photo-1543286386-713bdd548da4" alt="Finance analytics screen" ratio="aspect-[16/9]" />
          <div className="mt-3">
            <Line />
          </div>
        </Window>
        <Window title="Purchases">
          <Shot id="photo-1504384308090-c894fdcc538d" alt="Purchase reports" ratio="aspect-[16/9]" />
          <div className="mt-3">
          <Rows
            rows={[
              ["PO-2291", "₹1.4L", "Open"],
              ["PO-2292", "₹86K", "Recv"],
              ["PO-2293", "₹2.2L", "Open"],
            ]}
          />
          </div>
        </Window>
      </div>
    ),
  },
];

export function ShowcaseSection() {
  const [active, setActive] = useState<string>(tabs[0].id);
  const current: Tab = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <section id="showcase" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Software showcase"
          title="See the Systems We Build"
          subtitle="Clean, fast interfaces your staff can learn in a day — not a month."
        />

        <Reveal className="mt-12">
          <div className="glass mx-auto flex w-full max-w-3xl flex-wrap justify-center gap-1 rounded-full p-1.5">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActive(t.id)}
                aria-pressed={active === t.id}
                className={cn(
                  "rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 sm:text-sm",
                  active === t.id
                    ? "bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-elegant)]"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div key={current.id} className="animate-fade-in mt-8">
            {current.render()}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const projects = [
  {
    category: "ERP",
    title: "Business ERP",
    text: "Centralised operations, finance and reporting for a multi-branch trading business.",
    tech: "React · Node.js · PostgreSQL",
    features: ["Multi-branch", "Role access", "Live reports"],
    preview: () => <Shot id="photo-1460925895917-afdab827c52f" alt="Business ERP dashboard" w={800} />,
  },
  {
    category: "Manufacturing",
    title: "Food Manufacturing ERP",
    text: "Batch production, raw material tracking and dispatch planning for a food unit.",
    tech: "React · Express · MySQL",
    features: ["Batch tracking", "BOM costing", "Dispatch"],
    preview: () => (
      <Shot id="photo-1581091226825-a6a2a5aee158" alt="Food manufacturing production line" w={800} />
    ),
  },
  {
    category: "Education",
    title: "Student & Fees Management",
    text: "Admissions, fee schedules, receipts and defaulter reports for an institution.",
    tech: "React · Supabase",
    features: ["Fee receipts", "Defaulters", "SMS alerts"],
    preview: () => <Shot id="photo-1523240795612-9a054b0db644" alt="Students and fees management" w={800} />,
  },
  {
    category: "Retail",
    title: "POS & Store Billing",
    text: "Counter billing with barcode scanning, offers and daily closing reports.",
    tech: "React · Node.js · Thermal Print",
    features: ["Barcode", "GST bills", "Day close"],
    preview: () => <Shot id="photo-1556742049-0cfed4f6a45d" alt="Retail POS billing counter" w={800} />,
  },
  {
    category: "Sports",
    title: "Sports Management",
    text: "Player registration, teams, fixtures, scoring and tournament dashboards.",
    tech: "React · Firebase",
    features: ["Fixtures", "Live scores", "Teams"],
    preview: () => <Shot id="photo-1461896836934-ffe607ba8211" alt="Sports stadium event" w={800} />,
  },
  {
    category: "NGO",
    title: "Donation & Trust Management",
    text: "Donor records, receipts, 80G reports and transparent fund utilisation tracking.",
    tech: "React · PostgreSQL",
    features: ["80G receipts", "Donor CRM", "Fund reports"],
    preview: () => <Shot id="photo-1593113630400-ea4288922497" alt="Donation and charity work" w={800} />,
  },
  {
    category: "Institution",
    title: "Student Management",
    text: "Attendance, courses, exams and academic records with parent visibility.",
    tech: "React · Node.js",
    features: ["Attendance", "Exams", "Parent portal"],
    preview: () => <Shot id="photo-1541339907198-e08756dedf3f" alt="Campus student management" w={800} />,
  },
  {
    category: "Distribution",
    title: "Inventory & Billing System",
    text: "Stock, purchase, sales and supplier management with low-stock alerts.",
    tech: "React · MySQL",
    features: ["Low stock", "Suppliers", "Purchase orders"],
    preview: () => <Shot id="photo-1586528116311-ad8dd3c8310d" alt="Inventory and distribution" w={800} />,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Portfolio"
          title="Solutions We've Built"
          subtitle="Real systems running real businesses — from shop counters to factory floors."
        />

        <ul className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((p, i) => (
            <Reveal as="li" key={p.title} delay={(i % 4) * 80}>
              <article className="group glass flex h-full flex-col overflow-hidden rounded-3xl p-5 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]">
                <div className="rounded-2xl border border-border bg-background/40 p-3">
                  {p.preview()}
                </div>
                <span className="mt-4 inline-flex w-fit rounded-full bg-primary/15 px-3 py-1 text-[11px] font-bold tracking-wider text-primary uppercase">
                  {p.category}
                </span>
                <h3 className="mt-3 text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                <p className="mt-3 text-xs font-semibold text-muted-foreground">{p.tech}</p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}