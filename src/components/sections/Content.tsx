import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { ExternalLink, Instagram } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import setorImg from "@/assets/blog/setor-supervisionado.jpg";
import regimentoImg from "@/assets/blog/regimento-susep.jpg";
import governancaImg from "@/assets/blog/governanca-mutualista.jpg";
import mutualismoImg from "@/assets/blog/mutualismo.jpg";
import celionesImg from "@/assets/blog/celiones-instagram.jpg";

type Article = {
  title: string;
  summary: string;
  url: string;
  tag: string;
  image: string;
  social?: boolean;
};

const ARTICLES: Article[] = [
  {
    title: "Setor supervisionado movimenta R$ 68,32 bilhões no primeiro bimestre de 2026",
    summary:
      "O setor supervisionado pela SUSEP movimentou R$ 68,32 bilhões no primeiro bimestre de 2026, reforçando a importância de estruturas mais robustas, transparentes e preparadas para um ambiente regulado.",
    url: "https://www.gov.br/susep/pt-br/central-de-conteudos/noticias/2026/abril/setor-supervisionado-movimenta-r-68-32-bilhoes-no-primeio-bimestre-de-2026",
    tag: "Mercado",
    image: setorImg,
  },
  {
    title: "Novo regimento interno da Susep atualiza estrutura organizacional da autarquia",
    summary:
      "A atualização do regimento interno da SUSEP moderniza sua estrutura organizacional e fortalece a capacidade de supervisão em um mercado cada vez mais complexo e regulado.",
    url: "https://www.gov.br/susep/pt-br/central-de-conteudos/noticias/2026/marco/novo-regimento-interno-da-susep-atualiza-estrutura-organizacional-da-autarquia",
    tag: "Regulatório",
    image: regimentoImg,
  },
  {
    title: "Por que a governança será o fator decisivo no novo mercado mutualista",
    summary:
      "A Lei Complementar nº 213/2025 torna a governança essencial para que associações e administradoras se adaptem ao novo mercado mutualista com organização, controle e sustentabilidade.",
    url: "https://jus.com.br/artigos/116850/os-reflexos-da-lei-complementar-n-213-2025-no-segmento-mutualista-brasileiro-a-figura-da-administradora-de-protecao-patrimonial-mutualista-e-seus-impactos-cenarios-e-estrategias-para-as-associacoes",
    tag: "Governança",
    image: governancaImg,
  },
  {
    title: "Proteção Mutualista",
    summary:
      "A Proteção Veicular surgiu no Brasil como uma alternativa ao mercado de seguros, oferecendo proteção patrimonial acessível à população negligenciada pelas seguradoras.",
    url: "https://www.jusbrasil.com.br/artigos/a-regulamentacao-da-protecao-patrimonial-mutualista-no-brasil/2774487025",
    tag: "Mutualismo",
    image: mutualismoImg,
  },
  {
    title: "Celiones, presidente do Grupo ARX, na Câmara dos Deputados",
    summary:
      "Acompanhe os bastidores da participação do nosso presidente em Brasília.",
    url: "https://www.instagram.com/reels/DWZvlvOgXGe/",
    tag: "Instagram",
    image: celionesImg,
    social: true,
  },
];

export function Content() {
  const autoplay = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section id="conteudo" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
            Conteúdo
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Acompanhe o setor regulado
          </h2>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[autoplay.current]}
          className="max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {ARTICLES.map((a) => (
              <CarouselItem
                key={a.url}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <a
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group h-full rounded-2xl overflow-hidden border shadow-card-soft hover:-translate-y-1 hover:shadow-elegant transition flex flex-col bg-card relative ${
                    a.social
                      ? "border-primary ring-2 ring-primary/30"
                      : "border-border"
                  }`}
                >
                  {a.social && (
                    <div className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-brand-electric text-white px-3 py-1.5 text-xs font-bold shadow-md">
                      <Instagram className="size-3.5" />
                      Redes Sociais
                    </div>
                  )}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={a.image}
                      alt={a.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="inline-flex self-start rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold mb-4">
                      {a.tag}
                    </div>
                    <h3 className="font-bold text-foreground leading-snug mb-3 group-hover:text-primary transition">
                      {a.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {a.summary}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      {a.social ? "Seguir" : "Ler artigo"}
                      <ExternalLink className="size-3.5" />
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4" />
          <CarouselNext className="hidden md:flex -right-4" />
        </Carousel>
      </div>
    </section>
  );
}
