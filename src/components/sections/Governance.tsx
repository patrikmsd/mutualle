import { Scale, Calculator, Cpu, Building2 } from "lucide-react";
import celionesImg from "@/assets/directors/celiones.png";
import wedersonImg from "@/assets/directors/wederson.jpeg";
import marcosImg from "@/assets/directors/marcos.jpeg";
import isabellaImg from "@/assets/directors/isabella.jpeg";
import fabioImg from "@/assets/directors/fabio.jpeg";
import arthurImg from "@/assets/directors/arthur.jpeg";
import marcioImg from "@/assets/directors/marcio.jpeg";
import marioImg from "@/assets/directors/mario.jpeg";

type Director = {
  name: string;
  role: string;
  photo: string;
  bio: string;
  duties: { label?: string; text: string }[];
};

const DIRECTORS: Director[] = [
  {
    name: "Celiones Gouveia",
    role: "Diretor Presidente",
    photo: celionesImg,
    bio: "Empresário com sólida trajetória no setor privado, atuando como gestor, fundador e sócio em diversas empresas dos segmentos de administração, proteção patrimonial, tecnologia, consultoria, marketing, educação corporativa, saúde e gastronomia. Capacidade comprovada na estruturação de operações complexas, gestão de riscos, conformidade regulatória, liderança de equipes e expansão de negócios. Gestor com atuação estratégica em holdings patrimoniais e de participação societária. Reconhecido com a Medalha de Mérito Legislativo Pedro Ludovico Teixeira — Assembleia Legislativa do Estado de Goiás (2022) e com o Certificado de Honra ao Mérito como Cidadão Goianiense — Câmara Municipal de Goiânia (2022).",
    duties: [
      { text: "Conduz a estratégia institucional da Mutualle, representando-a perante associações, parceiros e órgãos reguladores." },
    ],
  },
  {
    name: "Wederson Viana",
    role: "Diretor Contábil",
    photo: wedersonImg,
    bio: "Sócio Fundador do Grupo Destra. CEO e Diretor de Projetos. Profissional com 25 anos de experiência em gestão estratégica organizacional. Especialista em inteligência de negócios e gerenciamento de projetos. Atuou por mais de 17 anos em grandes empresas nacionais. Sólida experiência em soluções empresariais integradas, liderança de equipes, treinamentos com foco em resultados, consultoria administrativa, financeira, contábil e Gestão da Qualidade e inovação.",
    duties: [
      { text: "Garante a fidedignidade das informações contábeis e financeiras da Mutualle e de seus grupos." },
    ],
  },
  {
    name: "Marcos Henrique",
    role: "Diretor Administrativo-Financeiro",
    photo: marcosImg,
    bio: "Diretor Geral da ARX Administradora. Graduado em Administração de Empresas. Especialista em Gestão Empresarial. Especialista em Docência Universitária. MBA - Auditoria, Controladoria e Finanças, MBA em Marketing. MBA em Gestão Estratégica de Pessoas. Mestre em Administração de Empresas pela FEAD-MG. Autor dos livros: As 9 competências para você Administrador sobressair no mercado de trabalho; Os caminhos da Gestão; Gestão de Qualidade: ferramentas práticas.",
    duties: [
      { text: "Supervisiona a gestão financeira e administrativa, assegurando conformidade societária e solvência." },
    ],
  },
  {
    name: "Isabella Capuzzo",
    role: "Diretora de Controles Internos e de Relações com a SUSEP",
    photo: isabellaImg,
    bio: "Empresária e Administradora. Formação e especializações pela UnB, ABBC, AD&M Consultoria e Universidade Projeção. Executiva sênior com mais de 10 anos de experiência em gestão financeira, compliance, governança corporativa e controles internos. Atuou no setor financeiro, consultoria, tecnologia e agronegócios. Foi Diretora de Operações de Crédito em banco digital, CEO de empresas de consultoria e conselheira estratégica em engenharia e infraestrutura geral.",
    duties: [
      { label: "Função — Controles Internos", text: "Implementa e supervisiona o sistema de controles internos, compliance e políticas de integridade." },
      { label: "Função — Relações com a SUSEP", text: "Atua como elo institucional, prestando informações e coordenando comunicações oficiais." },
    ],
  },
  {
    name: "Fábio da Silva Teixeira",
    role: "Diretor e Atuário Responsável Técnico",
    photo: fabioImg,
    bio: "Atuário e executivo sênior com mais de 25 anos de experiência em gestão atuarial, governança, riscos, compliance, estratégia empresarial e administração financeira nos setores de saúde suplementar, seguros e consultoria. Bacharel em Ciências Atuariais, com MBAs em Administração Hospitalar, Gestão de Riscos e Seguros e Gestão Empresarial pela Faculdade Unimed, ENS e FGV. Certificado pelo IBA e diretor técnico certificado pela ANS. Atuou em empresas como FAC Consultoria Atuarial, Klini Saúde, Hospital Unimed Serrana RJ, Unimed Nova Iguaçu, SulAmérica, Assim Saúde e ASTA Consultoria.",
    duties: [
      { text: "Elabora e assina cálculos das provisões técnicas, rateios e contribuições; emite notas técnicas e relatórios atuariais à SUSEP." },
    ],
  },
];

type Council = {
  name: string;
  role: string;
  photo: string;
  bio: string;
};

const COUNCIL: Council[] = [
  {
    name: "Arthur Rufino",
    role: "Conselheiro Consultivo",
    photo: arthurImg,
    bio: 'Executivo e empreendedor com mais de 20 anos de experiência em economia circular automotiva, desmobilização de frotas, desmontagem veicular e mercado de peças usadas com procedência. CEO da Octa e ex-CEO da JR Diesel, possui atuação estratégica em inovação, sustentabilidade, logística e transformação de ativos automotivos.',
  },
  {
    name: "Márcio Artiaga",
    role: "Conselheiro Consultivo",
    photo: marcioImg,
    bio: "Executivo com mais de 25 anos de experiência internacional em tecnologia, logística, transformação digital e mercados ligados à sustentabilidade e crédito de carbono. Atuou em empresas como Xerox, InPost Brasil, Clique Retire e NEXT ESG, além de participar de conferências climáticas da ONU e projetos internacionais de infraestrutura digital e inovação.",
  },
  {
    name: "Mario Mendes",
    role: "Conselheiro Consultivo",
    photo: marioImg,
    bio: 'Executivo e estrategista global com experiência em inovação tecnológica, governança corporativa, consultoria empresarial e expansão internacional de mercados. Fundador do assistente virtual de Inteligência Artificial "Dr. Wilson", premiado internacionalmente, atua em projetos estratégicos no Brasil, Estados Unidos, Europa e África.',
  },
];

const COUNCIL_DUTIES = [
  "Supervisão técnica e prudencial",
  "Apoio estratégico às diretorias",
  "Análise de solvência, indicadores e compliance",
  "Avaliação das políticas essenciais",
];

const COUNCIL_AREAS = [
  { icon: Scale, label: "Jurídico-Regulatório" },
  { icon: Calculator, label: "Contábil" },
  { icon: Cpu, label: "Tecnologia" },
  { icon: Building2, label: "Institucional" },
];

export function Governance() {
  return (
    <section id="governanca" className="bg-secondary">
      <div className="bg-gradient-to-br from-navy-deep to-navy py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mb-12">
              <div className="text-xs uppercase tracking-widest text-white/70 font-semibold mb-3">
                Conselho
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                Governança não é discurso. É estrutura.
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                A Mutualle contará com um conselho formado por profissionais experientes para
                apoiar decisões estratégicas, regulatórias e institucionais.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {COUNCIL_AREAS.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 text-center hover:bg-white/10 transition-colors"
                >
                  <Icon className="size-9 text-white mx-auto mb-4" strokeWidth={2} />
                  <h3 className="text-lg md:text-xl font-bold text-white">{label}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
            Diretoria
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Liderança preparada para o novo ciclo do setor
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-6 mb-20">
          {DIRECTORS.map((d) => (
            <article
              key={d.name}
              className="rounded-2xl bg-card border border-border shadow-card-soft p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8"
            >
              <div className="shrink-0 mx-auto md:mx-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden ring-4 ring-background shadow-md">
                  <img
                    src={d.photo}
                    alt={d.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                  {d.name}
                </h3>
                <p className="text-primary font-semibold text-sm md:text-base mt-1">
                  {d.role}
                </p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-4">
                  {d.bio}
                </p>
                <div className="mt-5 rounded-xl border-l-4 border-primary bg-primary/5 p-4 md:p-5 space-y-3">
                  {d.duties.map((duty, i) => (
                    <p key={i} className="text-sm md:text-base text-foreground/80 leading-relaxed">
                      <span className="font-bold text-foreground uppercase tracking-wide text-xs md:text-sm">
                        {duty.label ?? "Função"}:
                      </span>{" "}
                      {duty.text}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
            Conselheiros Consultivos
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Experiência estratégica a serviço da governança
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {COUNCIL.map((c) => (
            <article
              key={c.name}
              className="rounded-2xl bg-card border border-border shadow-card-soft p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8"
            >
              <div className="shrink-0 mx-auto md:mx-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden ring-4 ring-background shadow-md">
                  <img
                    src={c.photo}
                    alt={c.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                  {c.name}
                </h3>
                <p className="text-primary font-semibold text-sm md:text-base mt-1">
                  {c.role}
                </p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-4">
                  {c.bio}
                </p>
                <div className="mt-5 rounded-xl border-l-4 border-primary bg-primary/5 p-4 md:p-5">
                  <p className="font-bold text-foreground uppercase tracking-wide text-xs md:text-sm mb-3">
                    Função:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm md:text-base text-foreground/80 leading-relaxed">
                    {COUNCIL_DUTIES.map((duty) => (
                      <li key={duty}>{duty}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
