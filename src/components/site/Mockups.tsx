import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Live HD photo fetched from the Unsplash CDN at render time. */
export function Shot({
  id,
  alt,
  className,
  ratio = "aspect-[16/10]",
  w = 1200,
}: {
  id: string;
  alt: string;
  className?: string;
  ratio?: string;
  w?: number;
}) {
  const src = `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-border bg-secondary/40",
        ratio,
        className,
      )}
    >
      <img
        src={src}
        srcSet={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${Math.round(w / 2)}&q=80 ${Math.round(w / 2)}w, ${src} ${w}w`}
        sizes="(max-width: 768px) 100vw, 50vw"
        alt={alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--color-background)_75%,transparent),transparent_55%)]"
      />
    </div>
  );
}

export function Window({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "glass overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/25" />
        <span className="ml-2 truncate text-xs font-semibold text-muted-foreground">{title}</span>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

export function Stat({ label, value, trend }: { label: string; value: string; trend?: string }) {
  return (
    <div className="rounded-xl border border-border bg-secondary/50 p-3">
      <p className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">
        {label}
      </p>
      <p className="mt-1 text-lg font-bold">{value}</p>
      {trend ? <p className="text-[11px] font-medium text-primary">{trend}</p> : null}
    </div>
  );
}

export function Bars({ data }: { data: number[] }) {
  return (
    <div className="flex h-28 items-end gap-1.5">
      {data.map((v, i) => (
        <div
          key={i}
          style={{ height: `${v}%` }}
          className="flex-1 rounded-t-md bg-[image:var(--gradient-primary)] opacity-80 transition-all duration-500 hover:opacity-100"
        />
      ))}
    </div>
  );
}

export function Line() {
  return (
    <svg viewBox="0 0 300 100" className="h-28 w-full" role="img" aria-label="Revenue trend chart">
      <defs>
        <linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.45" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 80 L40 62 L80 70 L120 40 L160 52 L200 26 L240 34 L300 12 L300 100 L0 100 Z"
        fill="url(#lineFill)"
      />
      <path
        d="M0 80 L40 62 L80 70 L120 40 L160 52 L200 26 L240 34 L300 12"
        fill="none"
        stroke="var(--primary)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Rows({ rows }: { rows: [string, string, string][] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border">
      {rows.map((r, i) => (
        <div
          key={i}
          className={cn(
            "grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-3 px-3 py-2.5 text-xs",
            i % 2 === 0 ? "bg-secondary/40" : "bg-transparent",
          )}
        >
          <span className="truncate font-medium">{r[0]}</span>
          <span className="text-muted-foreground">{r[1]}</span>
          <span className="rounded-full bg-primary/15 px-2 py-0.5 font-semibold text-primary">
            {r[2]}
          </span>
        </div>
      ))}
    </div>
  );
}