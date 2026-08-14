import { useEffect, useRef } from "react";
import { ArrowRight, Sparkles, LayoutDashboard } from "lucide-react";
import logo from "@/assets/happy-team-logo.png";
import { Btn } from "./Btn";
import { Window, Stat, Shot } from "./Mockups";

function Particles() {
  const dots = Array.from({ length: 26 }, (_, i) => ({
    left: (i * 37) % 100,
    size: 2 + (i % 3),
    delay: (i % 10) * 1.6,
    dur: 16 + (i % 7) * 3,
  }));
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute bottom-[-10%] rounded-full bg-primary/60"
          style={{
            left: `${d.left}%`,
            width: d.size,
            height: d.size,
            animation: `drift ${d.dur}s linear ${d.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    let frame = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        el.style.setProperty("--mx", String(x));
        el.style.setProperty("--my", String(y));
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      id="home"
      ref={wrapRef}
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(circle at 50% 30%, black, transparent 75%)",
        }}
      />
      <Particles />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-4 lg:grid-cols-[1.05fr_1fr]">
        <div className="animate-fade-in">
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2">
            <img src={logo} alt="Happy Team" width={24} height={24} className="h-6 w-6 rounded-full" />
            <span className="text-xs font-semibold tracking-[0.16em] uppercase">
              Software Development Company
            </span>
          </div>

          <h1 className="mt-6 text-4xl leading-[1.05] font-extrabold text-balance sm:text-6xl lg:text-7xl">
            Powerful Software.
            <br />
            <span className="text-gradient">Built for Your Business.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-pretty text-muted-foreground sm:text-lg">
            Websites, Billing, ERP, Student Management, Payroll and Custom Business Software — built
            to simplify your everyday work.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Btn asChild size="lg">
              <a href="#contact">
                Get a Free Consultation <ArrowRight />
              </a>
            </Btn>
            <Btn asChild size="lg" variant="ghostGlass">
              <a href="#services">
                <LayoutDashboard /> Explore Our Solutions
              </a>
            </Btn>
          </div>

          <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 text-xs font-medium text-muted-foreground sm:text-sm">
            <Sparkles className="size-4 text-primary" />
            Custom Software • Affordable • Scalable • Reliable
          </p>
        </div>

        <div
          className="relative h-[420px] sm:h-[520px]"
          style={{
            transform:
              "translate3d(calc(var(--mx, 0) * -18px), calc(var(--my, 0) * -18px), 0)",
            transition: "transform 300ms ease-out",
          }}
        >
          <div className="animate-float-soft absolute top-0 right-0 w-[78%]">
            <Window title="Billing Dashboard">
              <Shot id="photo-1551288049-bebda4e38f71" alt="Live billing analytics dashboard" w={1000} />
              <div className="mt-3 grid grid-cols-2 gap-2">
                <Stat label="Today Sales" value="₹1,24,500" trend="▲ 18.4%" />
                <Stat label="Invoices" value="132" trend="▲ 12 new" />
              </div>
            </Window>
          </div>

          <div
            className="animate-float-soft absolute bottom-16 left-0 w-[56%] sm:bottom-24"
            style={{ animationDelay: "1.2s" }}
          >
            <Window title="Inventory">
              <Shot id="photo-1553413077-190dd305871c" alt="Warehouse inventory management" w={800} />
            </Window>
          </div>

          <div
            className="animate-float-soft glow-ring absolute right-2 bottom-0 hidden w-[46%] rounded-2xl sm:block"
            style={{ animationDelay: "2.4s" }}
          >
            <Window title="Students">
              <Shot id="photo-1523240795612-9a054b0db644" alt="Students in a classroom" w={800} />
            </Window>
          </div>
        </div>
      </div>
    </section>
  );
}