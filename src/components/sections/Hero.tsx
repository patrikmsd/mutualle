import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";

const go = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-navy-deep text-white"
    >

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full pt-24 lg:pt-28"
      >
        <video
          src="/manifesto-mutualle.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls
          className="w-full h-auto block"
        />
      </motion.div>

      <div className="container mx-auto px-4 pt-12 pb-24 lg:pt-16 lg:pb-32 relative">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 mb-6">
            <Shield className="size-3.5" /> Estruturação para o novo marco regulatório
          </div>


          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            União estratégica para associações que querem entrar no{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary-glow">
              mercado regulado
            </span>
          </h1>

          <div className="mt-8 space-y-5 text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            <p>
              Durante anos, associações enfrentaram insegurança jurídica, questionamentos
              regulatórios e dificuldade de reconhecimento institucional. Com a regulamentação,
              surge uma nova oportunidade: transformar experiência associativa em operação
              profissional, transparente e preparada para supervisão.
            </p>
            <p>
              A Mutualle se propôs a reunir associações sérias em um grupo estruturado, pronto
              para se adequar ao novo cenário regulatório brasileiro.
            </p>
            <p>
              A Mutualle é uma empresa do <strong className="text-white">Grupo ARX</strong>, uma
              gestora com mais de 7 anos de atuação no mercado, reconhecida pela sua excelência
              em gestão e processos. O grupo possui certificações relevantes como{" "}
              <strong className="text-white">GPTW</strong> e{" "}
              <strong className="text-white">ISO 9001</strong>, que reforçam seu compromisso
              com qualidade, governança e melhoria contínua.
            </p>
            <p className="text-white/70 text-sm md:text-base border-l-2 border-primary-glow/60 pl-4 text-left max-w-2xl mx-auto">
              Não somos, neste momento, uma administradora autorizada pela Susep. Mas já estamos
              preparados para a fase de estruturação societária, técnica, operacional e
              regulatória necessária para pleitear a autorização junto à Susep.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => go("contato")}
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary-glow px-6 py-3.5 text-sm font-semibold text-white shadow-elegant hover:brightness-110 transition"
            >
              Quero fazer parte do grupo
              <ArrowRight className="size-4 group-hover:translate-x-0.5 transition" />
            </button>
            <button
              onClick={() => go("proposta")}
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Conheça a proposta
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
