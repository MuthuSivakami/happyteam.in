import { useState, type FormEvent } from "react";
import {
  Quote,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Send,
  Star,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { toast } from "sonner";
import logo from "@/assets/happy-team-logo.png";
import { Reveal, SectionHeading } from "./primitives";
import { Btn } from "./Btn";



export const CONTACT = {
  phone: "+91 89035 07954",
  phoneHref: "tel:+918903507954",
  whatsappNumber: "+91 81228 57028",
  whatsapp:
    "https://wa.me/918122857028?text=Hi%20Happy%20Team%2C%20I%20need%20software%20for%20my%20business",
  email: "happyteamsinfo@gmail.com",
  address: "Thuckalay, Kanniyakumari District, Tamil Nadu, India",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Thuckalay%2C%20Kanniyakumari",
};

// Client reviews from across Tamil Nadu.
const testimonials = [
  {
    quote:
      "Our billing used to take two people all evening. Now a bill takes ten seconds and the day's report is ready before we pull the shutter down.",
    name: "R. Muthukumar",
    role: "Owner, Sri Amman Super Market · Nagercoil",
  },
  {
    quote:
      "Fee collection, attendance and parent WhatsApp updates are finally in one place. They understood how a college actually runs before writing any code.",
    name: "Dr. S. Lakshmi Priya",
    role: "Administrator, Arts & Science College · Madurai",
  },
  {
    quote:
      "Payroll for 128 staff used to be a three-day spreadsheet job. It is now a single click with PF, ESI and payslips on WhatsApp.",
    name: "K. Saravanan",
    role: "HR Manager, Spinning Mills · Coimbatore",
  },
  {
    quote:
      "Tooth chart, treatment history and reminders in one screen. Patient follow-ups doubled within three months.",
    name: "Dr. A. Jeyakumar",
    role: "Smile Care Dental Clinic · Thuckalay",
  },
  {
    quote:
      "Batch-wise and expiry-wise billing saved us from huge losses. The near-expiry alert alone paid for the software.",
    name: "M. Fathima Beevi",
    role: "Partner, Medical Store · Tirunelveli",
  },
  {
    quote:
      "Bookings, advance amounts and album delivery are all tracked now. No customer call is missed during wedding season.",
    name: "S. Vignesh",
    role: "Vignesh Photo Studio · Kanyakumari",
  },
  {
    quote:
      "Size-wise stock for our textile showroom was impossible on paper. Now we know every design and size in one second.",
    name: "P. Kavitha",
    role: "Sree Textiles · Tiruppur",
  },
  {
    quote:
      "Job cards, spare issue and service reminders run smoothly. Our workshop handles 40 vehicles a day without confusion.",
    name: "T. Arulmozhi",
    role: "Auto Service Centre · Trichy",
  },
  {
    quote:
      "Gold rate entry in the morning and every bill is accurate all day. The chit scheme module is exactly what we wanted.",
    name: "V. Balamurugan",
    role: "Jewellery Showroom · Thanjavur",
  },
  {
    quote:
      "Trip expenses, diesel and driver bhatta are clear now. We finally know the profit of every single load.",
    name: "A. Selvaraj",
    role: "Transport Owner · Salem",
  },
  {
    quote:
      "Membership renewals go out automatically on WhatsApp. Our drop-outs came down and collections went up.",
    name: "J. Divya Bharathi",
    role: "Fitness Studio · Chennai",
  },
  {
    quote:
      "They built exactly what we asked for and stayed available after launch. That support is the real reason we recommend them.",
    name: "N. Ramachandran",
    role: "Trustee, Charitable Trust · Erode",
  },
];


export function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? testimonials : testimonials.slice(0, 6);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Client reviews"
          title="Trusted Across Tamil Nadu"
          subtitle="Shops, clinics, studios, mills and institutions from Chennai to Kanyakumari run their day on Happy Team software."
        />

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((r, idx) => (
            <Reveal key={r.name} delay={Math.min(idx, 5) * 60}>
              <figure className="glass h-full rounded-3xl p-5 sm:p-6">
                <Quote className="size-7 text-primary/40" />
                <blockquote className="mt-3 text-sm leading-relaxed text-pretty text-muted-foreground sm:text-base">
                  "{r.quote}"
                </blockquote>
                <figcaption className="mt-4">
                  <div className="flex gap-0.5 text-primary">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="size-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="mt-2 text-sm font-bold break-words">{r.name}</p>
                  <p className="text-xs break-words text-muted-foreground">{r.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {!showAll ? (
          <div className="mt-8 flex justify-center">
            <Btn variant="ghostGlass" onClick={() => setShowAll(true)}>
              Show all {testimonials.length} reviews
            </Btn>
          </div>
        ) : null}
      </div>
    </section>
  );
}





export function CustomQuote() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-12">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{ backgroundImage: "var(--gradient-hero)" }}
            />
            <div className="relative">
              <h2 className="text-3xl font-extrabold text-balance sm:text-5xl">
                Every Business Is{" "}
                <span className="text-gradient">Different.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground sm:text-lg">
                Tell us what you need. We'll create a solution that fits your workflow and budget.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Btn asChild size="lg">
                  <a href="#contact">Request a Free Quote</a>
                </Btn>
                <Btn asChild size="lg" variant="ghostGlass">
                  <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
                    <MessageCircle /> Chat on WhatsApp
                  </a>
                </Btn>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const needs = [
  "Website",
  "Billing Software",
  "Student Management",
  "Payroll",
  "Inventory",
  "ERP",
  "Custom Software",
  "Other",
];

export function ContactSection() {
  type FieldKey = "name" | "phone" | "email" | "need" | "message";
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const next: Partial<Record<FieldKey, string>> = {};

    if (!data["name"]?.trim()) next["name"] = "Please enter your name.";
    if (!/^[6-9]\d{9}$/.test((data["phone"] ?? "").replace(/\D/g, "").slice(-10)))
      next["phone"] = "Enter a valid 10-digit phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data["email"] ?? "")) next["email"] = "Enter a valid email.";
    if (!data["need"]) next["need"] = "Please select what you need.";
    if ((data["message"] ?? "").trim().length < 10) next["message"] = "Tell us a bit more (10+ characters).";

    setErrors(next);
    if (Object.keys(next).length) return;

    const subject = `New Enquiry — ${data["need"]} — ${data["name"]}`;
    const body = [
      `Name: ${data["name"]}`,
      `Business: ${data["business"] || "-"}`,
      `Phone: ${data["phone"]}`,
      `Email: ${data["email"]}`,
      `Requirement: ${data["need"]}`,
      "",
      "Message:",
      data["message"] ?? "",
      "",
      "— Sent from happyteam website",
    ].join("\n");

    const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = mailto;
    } else {
      const win = window.open(gmail, "_blank", "noopener,noreferrer");
      if (!win) window.location.href = mailto;
    }

    toast.success(`Enquiry sending to ${CONTACT.email}`, {
      description: "Your mail window is open — press send and we'll reply within one business day.",
    });
    form.reset();

  };

  const field =
    "w-full rounded-2xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-primary/60 focus:shadow-[var(--glow-red)]";

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something Powerful."
          subtitle="Share your requirement and we'll suggest the right solution — no obligation."
        />

        <div className="mt-10 grid gap-6 sm:mt-14 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <form onSubmit={onSubmit} noValidate className="glass rounded-3xl p-4 sm:p-8">

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-xs font-semibold text-muted-foreground">
                    Name
                  </label>
                  <input id="name" name="name" className={field} placeholder="Your full name" />
                  {errors["name"] ? <p className="mt-1 text-xs text-primary">{errors["name"]}</p> : null}
                </div>
                <div>
                  <label htmlFor="business" className="text-xs font-semibold text-muted-foreground">
                    Business Name
                  </label>
                  <input id="business" name="business" className={field} placeholder="Company / Institution" />
                </div>
                <div>
                  <label htmlFor="phone" className="text-xs font-semibold text-muted-foreground">
                    Phone Number
                  </label>
                  <input id="phone" name="phone" inputMode="tel" className={field} placeholder="98765 43210" />
                  {errors["phone"] ? <p className="mt-1 text-xs text-primary">{errors["phone"]}</p> : null}
                </div>
                <div>
                  <label htmlFor="email" className="text-xs font-semibold text-muted-foreground">
                    Email
                  </label>
                  <input id="email" name="email" type="email" className={field} placeholder="you@business.com" />
                  {errors["email"] ? <p className="mt-1 text-xs text-primary">{errors["email"]}</p> : null}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="need" className="text-xs font-semibold text-muted-foreground">
                    What Software Do You Need?
                  </label>
                  <select id="need" name="need" defaultValue="" className={field}>
                    <option value="" disabled>
                      Select an option
                    </option>
                    {needs.map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                  {errors["need"] ? <p className="mt-1 text-xs text-primary">{errors["need"]}</p> : null}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-xs font-semibold text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={field}
                    placeholder="Tell us about your business and what you'd like to simplify."
                  />
                  {errors["message"] ? (
                    <p className="mt-1 text-xs text-primary">{errors["message"]}</p>
                  ) : null}
                </div>
              </div>

              <Btn type="submit" size="lg" className="mt-6 w-full sm:w-auto">
                <Send /> Send Enquiry
              </Btn>
            </form>
          </Reveal>

          <Reveal delay={140}>
            <div className="flex h-full flex-col gap-4">
              {[
                { icon: MessageCircle, label: "WhatsApp", value: CONTACT.whatsappNumber, href: CONTACT.whatsapp },
                { icon: Phone, label: "Phone", value: CONTACT.phone, href: CONTACT.phoneHref },
                { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
                { icon: MapPin, label: "Office", value: CONTACT.address, href: CONTACT.mapUrl },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group glass grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-3xl p-4 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--glow-red)] sm:gap-4 sm:p-5"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground transition-transform duration-500 group-hover:scale-110 sm:h-12 sm:w-12">
                    <c.icon className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                      {c.label}
                    </span>
                    <span className="block text-sm font-semibold break-words sm:text-base">{c.value}</span>
                  </span>
                </a>
              ))}
              <div className="glass flex-1 rounded-3xl p-5 sm:p-6">
                <p className="text-sm break-words text-muted-foreground">
                  <strong className="text-foreground">Office:</strong> {CONTACT.address}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  Prefer a quick chat? Message us on WhatsApp with your requirement and we'll reply
                  with a suggested solution and timeline.
                </p>
              </div>

            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Happy Team on WhatsApp"
      className="fixed right-5 bottom-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform duration-300 hover:scale-110"
    >
      <MessageCircle className="size-6" />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-primary/40" />
    </a>
  );
}

export function Footer() {
  const links = ["Home", "Services", "Solutions", "Projects", "About", "Contact"];
  const hrefs: Record<string, string> = {
    Home: "#home",
    Services: "#services",
    Solutions: "#showcase",
    Projects: "#projects",
    About: "#about",
    Contact: "#contact",
  };

  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Happy Team logo" width={48} height={48} className="h-12 w-12 rounded-full" />
              <span className="text-lg font-bold">
                Happy<span className="text-primary">Team</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Smart Software. Simple Business. Custom software, billing, ERP and management systems
              for growing businesses.
            </p>
            <div className="mt-5 flex gap-2">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Happy Team social profile"
                  className="glass grid h-10 w-10 place-items-center rounded-full transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:text-primary"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-sm font-bold tracking-wider uppercase">Links</h3>
            <ul className="mt-4 space-y-2">
              {links.map((l) => (
                <li key={l}>
                  <a
                    href={hrefs[l]}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase">Get in touch</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href={CONTACT.phoneHref} className="transition-colors hover:text-primary">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="transition-colors hover:text-primary">
                  WhatsApp {CONTACT.whatsappNumber}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-primary">
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={CONTACT.mapUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-primary">
                  {CONTACT.address}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © 2026 Happy Team. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}