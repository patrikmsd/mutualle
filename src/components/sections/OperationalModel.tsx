const STEPS = [
  {
    n: "01",
    title: "Sinalize o interesse",
    desc: "Nesse primeiro momento, você Presidente só precisa sinalizar o interesse de sua associação preenchendo o nosso formulário de intenção.",
  },
  {
    n: "02",
    title: "Credenciamento e contrato",
    desc: "Após o credenciamento da Administradora Mutualle pela Susep, sua associação celebrará o contrato conosco.",
  },
  {
    n: "03",
    title: "Adequação regulatória",
    desc: "A Mutualle irá ajudar na adequação de sua associação às exigências do regulatório.",
  },
  {
    n: "04",
    title: "Taxa proporcional",
    desc: "Com o início dos serviços, sua associação pagará apenas a taxa administrativa proporcional ao número de veículos participantes dos seus grupos de proteção patrimonial.",
  },
  {
    n: "05",
    title: "Operação flexível",
    desc: "Sua associação poderá contar com os serviços prestados pela Mutualle transferindo toda a gestão ou mantendo sua participação no administrativo através do apoio operacional permitido pela Susep.",
  },
];

export function OperationalModel() {
  return (
    <section id="modelo" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Passo a passo para regulamentar sua associação
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/20 to-transparent md:-translate-x-px" />
          <div className="space-y-10">
            {STEPS.map((s, i) => (
              <div
                key={s.n}
                className={`relative flex md:items-center gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 size-3 rounded-full bg-primary ring-4 ring-background" />
                <div className="hidden md:block flex-1" />
                <div className="ml-16 md:ml-0 flex-1 rounded-2xl bg-card border border-border shadow-card-soft p-6 md:p-7">
                  <div className="text-xs font-bold tracking-widest text-primary mb-2">
                    ETAPA {s.n}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
