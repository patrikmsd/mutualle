import { TrendingUp, Users, Building2, Cpu, UserCog } from "lucide-react";

const ITEMS = [
  { icon: UserCog, label: "Mão de obra", value: "R$ 5,40 a R$ 9,00" },
  { icon: TrendingUp, label: "Margem", value: "R$ 1,80" },
  { icon: Users, label: "Diretoria estatutária", value: "R$ 0,36 por veículo" },
  { icon: Building2, label: "Estrutura", value: "R$ 0,54 a R$ 0,90" },
  { icon: Cpu, label: "Sistemas", value: "R$ 1,80 a R$ 2,70" },
];

export function Costs() {
  return (
    <section id="custos" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-10">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
            Custos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Transparência sobre custos
          </h2>
        </div>

        <div className="rounded-xl bg-primary/5 border-l-4 border-primary p-5 mb-8 text-sm md:text-base text-foreground/80 leading-relaxed">
          <span className="font-bold text-foreground">OBS:</span> Na Mutualle, a taxa administrativa
          terá como objetivo exclusivamente garantir a sustentabilidade operacional da administradora,
          cobrindo apenas os custos necessários para a gestão da plataforma. Como essas despesas
          serão diluídas entre um grande número de participantes, a taxa será significativamente
          reduzida, tornando o modelo mais acessível, eficiente e vantajoso para todos os membros
          da comunidade.
        </div>

        <div className="rounded-2xl bg-gradient-to-r from-navy to-navy-deep text-white text-center px-6 py-8 mb-12 shadow-elegant">
          <p className="font-display text-xl md:text-2xl italic font-semibold">
            "Sozinho, sua adequação pode ser cara. Em grupo, se torna viável."
          </p>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Custos Estimados</h3>

        <div className="relative overflow-hidden mb-10 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex gap-4 w-max animate-marquee-ltr hover:[animation-play-state:paused]">
            {[...ITEMS, ...ITEMS].map(({ icon: Icon, label, value }, i) => (
              <div
                key={`${label}-${i}`}
                className="shrink-0 w-56 rounded-xl bg-card border border-border p-5 shadow-card-soft"
              >
                <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Icon className="size-5" />
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5">
                  {label}
                </div>
                <div className="text-base md:text-lg font-bold text-foreground">{value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-primary/5 border border-primary/20 px-6 py-10 text-center">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
            Estimativa
          </div>
          <div className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight whitespace-nowrap">
            R$ 9,90 a R$ 14,76
          </div>
          <div className="mt-3 text-sm text-muted-foreground">por veículo</div>
          <div className="mt-4 text-base md:text-lg font-semibold text-primary">
            5,5% a 8,2% do ticket médio
          </div>
        </div>
      </div>
    </section>
  );
}
