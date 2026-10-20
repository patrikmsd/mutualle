import { useEffect, useRef, useState } from "react";
import { Building2, Users, MapPin, DollarSign, Users2, Car } from "lucide-react";
import brazilMap from "@/assets/brazil-silhouette.png";

type Stat = {
  icon: typeof Building2;
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  format?: "thousands" | "raw";
  /** position over the map, percentages (0-100) */
  top: string;
  left: string;
};

const STATS: Stat[] = [
  { icon: Users, value: 44, label: "Associações representadas", top: "38%", left: "42%" },
  { icon: MapPin, value: 5, label: "Regiões alcançadas", top: "38%", left: "62%" },
  { icon: DollarSign, value: 6, prefix: "R$ ", suffix: " mi", label: "Fundo / reserva estimada", top: "55%", left: "42%" },
  { icon: Car, value: 316500, format: "thousands", prefix: "+", label: "Proteções ativas (placas)", top: "55%", left: "62%" },
];

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;

    // If already visible on mount (above the fold), trigger immediately
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < vh && rect.bottom > 0) {
      setInView(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [inView]);
  return { ref, inView };
}

function CountUp({
  value,
  start,
  duration = 1800,
  format,
}: {
  value: number;
  start: boolean;
  duration?: number;
  format?: "thousands" | "raw";
}) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, value, duration]);

  const formatted =
    format === "thousands" ? n.toLocaleString("pt-BR") : n.toString();
  return <>{formatted}</>;
}

export function GroupNumbers() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="numeros" className="relative py-8 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-2">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
            Números do grupo
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
            Um movimento que já começa com escala
          </h2>
        </div>

        {/* Desktop: map with stats overlaid */}
        <div ref={ref} className="hidden md:block relative mx-auto w-full max-w-[820px] aspect-square -my-20">
          <img
            src={brazilMap}
            alt="Mapa do Brasil"
            loading="lazy"
            width={1024}
            height={1024}
            className="absolute inset-0 w-full h-full object-contain"
          />
          {STATS.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="absolute text-center transition-all duration-700"
                style={{
                  top: s.top,
                  left: s.left,
                  opacity: inView ? 1 : 0,
                  transform: `translate(-50%, ${inView ? "-50%" : "calc(-50% + 12px)"})`,
                  transitionDelay: `${i * 120}ms`,
                }}
              >
                <Icon className="size-5 lg:size-6 text-primary mx-auto mb-1" strokeWidth={2.2} />
                <div className="font-display text-2xl lg:text-3xl font-bold text-foreground leading-none tracking-tight">
                  {s.prefix}
                  <CountUp value={s.value} start={inView} format={s.format} />
                  {s.suffix}
                </div>
                <div className="mt-1 text-[9px] lg:text-[10px] font-bold uppercase tracking-wider text-primary leading-tight max-w-[110px] mx-auto">
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: grid of cards */}
        <div className="md:hidden grid grid-cols-2 gap-4">
          {STATS.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="rounded-xl bg-card border border-border p-4 text-center shadow-card-soft"
              >
                <Icon className="size-6 text-primary mx-auto mb-2" />
                <div className="font-display text-2xl font-bold text-foreground">
                  {s.prefix}
                  {s.format === "thousands" ? s.value.toLocaleString("pt-BR") : s.value}
                  {s.suffix}
                </div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs md:text-sm text-muted-foreground max-w-3xl mx-auto mt-4 leading-relaxed">
          Os números apresentados correspondem a associações em tratativas, termos de intenção,
          pré-adesões ou contratos preliminares, conforme o estágio de cada participante.
        </p>
      </div>
    </section>
  );
}
