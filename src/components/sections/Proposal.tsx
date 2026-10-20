import { Building2, Users, Briefcase, Network, Cog, Handshake } from "lucide-react";

const ITEMS = [
  { icon: Building2, title: "Mutualle S.A", desc: "Empresa estruturada para pleitear autorização perante a Susep." },
  { icon: Briefcase, title: "Diretoria estatutária", desc: "Com nomes definidos e responsabilidades claras." },
  { icon: Users, title: "Conselho consultivo/estratégico", desc: "Profissionais técnicos, jurídicos, contábeis, operacionais e institucionais." },
  { icon: Network, title: "Grupo de associações fundadoras", desc: "Associações interessadas em caminhar juntas na adequação." },
  { icon: Cog, title: "Modelo operacional compartilhado", desc: "Tecnologia, compliance, atendimento, regulação de eventos, financeiro e governança." },
  { icon: Handshake, title: "Parcerias fortes", desc: "Com os melhores escritórios jurídicos e contábeis do setor." },
];

export function Proposal() {
  return (
    <section id="proposta" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
            Proposta Mutualle
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
            Formar um grupo nacional de associações interessadas na adequação regulatória
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A Mutualle pretende atuar como uma plataforma de organização, governança e preparação
            para associações que desejam participar do mercado regulado de proteção patrimonial
            mutualista.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {ITEMS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl bg-card border border-border p-6 hover:shadow-card-soft hover:-translate-y-0.5 transition"
            >
              <div className="size-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Icon className="size-5" />
              </div>
              <h3 className="font-semibold text-foreground mb-1.5">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
