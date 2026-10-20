import { MutualleLogo } from "../layout/MutualleLogo";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white/80 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg md:text-xl font-display leading-relaxed text-white">
            Mutualle: o ponto de encontro entre o associativismo que construiu o setor e a
            governança que vai sustentar o futuro.
          </p>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row gap-6 items-center justify-between">
          <MutualleLogo className="h-14 w-auto" showText={true} invert={true} />
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/60 justify-center">
            <a href="#proposta" className="hover:text-white transition">Proposta</a>
            <a href="#governanca" className="hover:text-white transition">Governança</a>
            <a href="#numeros" className="hover:text-white transition">Números</a>
            <a href="#contato" className="hover:text-white transition">Contato</a>
          </div>
          <div className="text-xs text-white/50 text-center md:text-right">
            <div>CNPJ: 64.342.450/001-45</div>
            <div className="mt-1">Endereço: ESP DO ANICUNS, Goiânia - GO, CEP 74433-160</div>
            <div className="mt-1">© {new Date().getFullYear()} Mutualle • Empresa do Grupo ARX</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
