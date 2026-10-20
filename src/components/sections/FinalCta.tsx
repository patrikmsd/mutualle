const WA_CONVERSAR =
  "https://wa.me/5562991090046?text=Ol%C3%A1%2C%20vim%20do%20site%20da%20Mutualle%20e%20quero%20conversar%20para%20entender%20melhor%20como%20a%20Mutualle%20pode%20apoiar%20nossa%20associa%C3%A7%C3%A3o.";
const WA_APRESENTACAO =
  "https://wa.me/5562991090046?text=Ol%C3%A1%2C%20vim%20do%20site%20da%20Mutualle%20e%20gostaria%20de%20solicitar%20a%20apresenta%C3%A7%C3%A3o%20institucional.";

export function FinalCta() {
  return (
    <section className="py-24 bg-hero-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-25" aria-hidden />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-primary-glow/20 blur-3xl" aria-hidden />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Sua associação quer continuar no setor ou liderar o próximo ciclo?
          </h2>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            A Mutualle está formando um grupo de associações comprometidas com legalidade,
            governança, transparência e sustentabilidade.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={WA_CONVERSAR}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-primary-glow px-6 py-3.5 text-sm font-semibold text-white shadow-elegant hover:brightness-110 transition"
            >
              Quero conversar com a Mutualle
            </a>
            <a
              href={WA_APRESENTACAO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Solicitar apresentação institucional
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
