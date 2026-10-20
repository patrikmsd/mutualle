import { Scale } from "lucide-react";

export function RegulatoryContext() {
  return (
    <section id="contexto" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto rounded-2xl border border-border bg-card shadow-card-soft p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start">
          <div className="shrink-0 size-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
            <Scale className="size-7" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
              Contexto Regulatório
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Lei Complementar nº 213/2025
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A Lei Complementar nº 213/2025 criou o marco legal das operações de proteção
              patrimonial mutualista e a figura das administradoras supervisionadas pela Susep.
              A própria Susep informa que as associações somente poderão formar grupos após
              contrato com administradora autorizada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
