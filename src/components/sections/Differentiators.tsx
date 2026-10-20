import { Check, X } from "lucide-react";

const HAS = [
  "Todo o valor necessário para constituição e implantação do modelo operacional",
  "Governança forte e estruturada",
  "Experiência e capacidade técnica com possibilidade de escala",
  "Processos profissionalizados",
  "Documentação regulatória preparada",
  "Diretoria estatutária e conselho qualificados",
];

const NEED_NOT = [
  "Abrir mão do seu controle e gestão",
  "Pagar nenhuma mensalidade pré estabelecida",
];

export function Differentiators() {
  return (
    <section id="diferenciais" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
            A grande virada do setor
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            O mercado mudou. Agora, quem se organiza primeiro sai na frente.
          </h2>
        </div>

        <div className="max-w-3xl mx-auto rounded-2xl bg-card border border-border shadow-card-soft p-8 md:p-10">
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-foreground">A Mutualle já possui:</h3>
          <ul className="space-y-5 mb-10">
            {HAS.map((t) => (
              <li key={t} className="flex gap-4 items-start">
                <span className="shrink-0 mt-0.5 size-9 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <Check className="size-4" strokeWidth={3} />
                </span>
                <span className="text-foreground/80 pt-1">{t}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-xl md:text-2xl font-bold mb-6 text-foreground">Com a Mutualle sua associação não precisa:</h3>
          <ul className="space-y-5">
            {NEED_NOT.map((t) => (
              <li key={t} className="flex gap-4 items-start">
                <span className="shrink-0 mt-0.5 size-9 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
                  <X className="size-4" strokeWidth={3} />
                </span>
                <span className="text-foreground/80 pt-1">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
