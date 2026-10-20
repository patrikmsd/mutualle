import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { MutualleLogo } from "./MutualleLogo";

const NAV = [
  { id: "inicio", label: "Início" },
  { id: "contexto", label: "Contexto" },
  { id: "diferenciais", label: "Diferenciais" },
  { id: "proposta", label: "Proposta" },
  { id: "modelo", label: "Passo a Passo" },
  { id: "numeros", label: "Números" },
  
  { id: "governanca", label: "Governança" },
  { id: "conteudo", label: "Conteúdo" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV.concat([{ id: "contato", label: "" }]).forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-black/5 py-3 shadow-sm"
          : "bg-white/85 backdrop-blur-sm py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between gap-6">
        <button
          onClick={() => go("inicio")}
          className="flex items-center gap-2 text-logo-navy"
          aria-label="Ir para o topo"
        >
          <MutualleLogo className="h-12 w-auto" showText={true} invert={false} />
        </button>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/5562991090046?text=Ol%C3%A1%2C%20vim%20do%20site%2C%20quero%20saber%20mais%20sobre%20a%20Mutualle"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-logo-navy px-4 py-2 text-sm font-semibold text-white shadow-elegant hover:brightness-110 transition"
          >
            Fale conosco
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-logo-navy hover:bg-logo-navy/10"
            aria-label="Menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

      </div>

      {open && (
        <div className="border-t border-logo-navy/10 bg-white/95 backdrop-blur">
          <div className="container mx-auto px-4 py-3 flex flex-col">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="text-left px-3 py-2.5 text-sm text-logo-navy/80 hover:text-logo-navy hover:bg-logo-navy/5 rounded"
              >
                {n.label}
              </button>
            ))}
            <a
              href="https://wa.me/5562991090046?text=Ol%C3%A1%2C%20vim%20do%20site%2C%20quero%20saber%20mais%20sobre%20a%20Mutualle"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-logo-navy px-4 py-2.5 text-sm font-semibold text-white"
            >
              Fale conosco
            </a>

          </div>
        </div>
      )}
    </header>
  );
}
