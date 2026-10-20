import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, Mail, Phone, MapPin, AlertCircle } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { sendContact } from "@/lib/contact.functions";

const STATES = [
  "AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO",
];

const schema = z.object({
  presidente: z.string().trim().min(2, "Informe o nome do presidente").max(120),
  associacao: z.string().trim().min(2, "Informe o nome da associação").max(160),
  cidadeUf: z.string().trim().min(2, "Informe cidade/estado").max(120),
  estadosAtivos: z.array(z.string()).min(1, "Selecione ao menos um estado"),
  qtdAssociados: z.string().trim().min(1, "Informe a quantidade").max(20),
  veiculos: z.string().trim().max(500).optional().or(z.literal("")),
  telefone: z.string().trim().min(8, "Informe um telefone válido").max(40),
  email: z.string().trim().email("E-mail inválido").max(160),
  jaAdequou: z.enum(["sim", "nao", "em_andamento"]),
  participar: z.enum(["sim", "saber_mais", "ainda_nao"]),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const send = useServerFn(sendContact);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { estadosAtivos: [] },
  });

  const estados = watch("estadosAtivos") || [];
  const toggleEstado = (uf: string) => {
    const next = estados.includes(uf) ? estados.filter((s) => s !== uf) : [...estados, uf];
    setValue("estadosAtivos", next, { shouldValidate: true });
  };

  const onSubmit = async (data: FormData) => {
    setErrorMsg(null);
    setSent(false);
    try {
      await send({ data });
      setSent(true);
      reset({ estadosAtivos: [] });
    } catch (e) {
      setErrorMsg(
        e instanceof Error ? e.message : "Não foi possível enviar. Tente novamente em instantes.",
      );
    }
  };

  return (
    <section id="contato" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14 max-w-6xl mx-auto items-start">
          <div className="lg:sticky lg:top-24">
            <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
              Contato
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Vamos conversar sobre sua associação
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Preencha o formulário e nosso time entrará em contato para entender suas
              necessidades e apresentar a proposta da Mutualle.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <span className="shrink-0 size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Mail className="size-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-primary font-semibold">
                    E-mail
                  </div>
                  <a
                    href="mailto:diretoria@arxadm.com.br"
                    className="text-sm md:text-base font-bold text-foreground hover:text-primary transition"
                  >
                    diretoria@arxadm.com.br
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0 size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Phone className="size-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-primary font-semibold">
                    Telefone
                  </div>
                  <a
                    href="https://wa.me/5562991090046?text=Ol%C3%A1%2C%20vim%20do%20site%2C%20quero%20saber%20mais%20sobre%20a%20Mutualle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-base font-bold text-foreground hover:text-primary transition"
                  >
                    (62) 99109-0046
                  </a>

                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0 size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-primary font-semibold">
                    Cobertura
                  </div>
                  <div className="text-sm md:text-base font-bold text-foreground">
                    Atuação nacional
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl bg-card border border-border shadow-card-soft p-6 md:p-8 grid gap-5"
          >
          <Field label="Nome do Presidente" error={errors.presidente?.message}>
            <input className={inputCls} {...register("presidente")} />
          </Field>

          <Field label="Nome da Associação" error={errors.associacao?.message}>
            <input className={inputCls} {...register("associacao")} />
          </Field>

          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Cidade / Estado (sede)" error={errors.cidadeUf?.message}>
              <input className={inputCls} placeholder="Ex.: Goiânia / GO" {...register("cidadeUf")} />
            </Field>
            <Field label="Quantidade de associados" error={errors.qtdAssociados?.message}>
              <input className={inputCls} inputMode="numeric" {...register("qtdAssociados")} />
            </Field>
          </div>

          <Field label="Estados brasileiros com associados ativos" error={errors.estadosAtivos?.message as string}>
            <div className="flex flex-wrap gap-1.5">
              {STATES.map((uf) => {
                const active = estados.includes(uf);
                return (
                  <button
                    type="button"
                    key={uf}
                    onClick={() => toggleEstado(uf)}
                    className={`px-2.5 py-1.5 rounded-md text-xs font-semibold border transition ${
                      active
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background text-muted-foreground border-border hover:border-primary/40"
                    }`}
                  >
                    {uf}
                  </button>
                );
              })}
            </div>
          </Field>

          <Field label="Quantidade de veículos por tipo" error={errors.veiculos?.message}>
            <textarea
              className={inputCls + " min-h-24"}
              placeholder="Ex.: Carros: 1200; Motos: 300; Caminhões: 50"
              {...register("veiculos")}
            />
          </Field>

          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Telefone / WhatsApp" error={errors.telefone?.message}>
              <input className={inputCls} {...register("telefone")} />
            </Field>
            <Field label="E-mail" error={errors.email?.message}>
              <input className={inputCls} type="email" {...register("email")} />
            </Field>
          </div>

          <Field label="A associação já realizou cadastro / adequação?" error={errors.jaAdequou?.message}>
            <select className={inputCls} {...register("jaAdequou")} defaultValue="">
              <option value="" disabled>Selecione</option>
              <option value="sim">Sim</option>
              <option value="em_andamento">Em andamento</option>
              <option value="nao">Ainda não</option>
            </select>
          </Field>

          <Field label="Deseja participar do grupo?" error={errors.participar?.message}>
            <select className={inputCls} {...register("participar")} defaultValue="">
              <option value="" disabled>Selecione</option>
              <option value="sim">Sim</option>
              <option value="saber_mais">Quero saber mais</option>
              <option value="ainda_nao">Ainda não</option>
            </select>
          </Field>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:brightness-110 transition disabled:opacity-60"
          >
            {isSubmitting ? "Enviando..." : "Enviar formulário"}
          </button>

          {sent && (
            <div className="rounded-lg bg-primary/10 text-primary px-4 py-3 text-sm flex items-center gap-2">
              <Check className="size-4" /> Formulário enviado com sucesso
            </div>
          )}
          {errorMsg && (
            <div className="rounded-lg bg-destructive/10 text-destructive px-4 py-3 text-sm flex items-center gap-2">
              <AlertCircle className="size-4" /> {errorMsg}
            </div>
          )}
        </form>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-foreground mb-1.5">{label}</span>
      {children}
      {error && <span className="block mt-1 text-xs text-destructive">{error}</span>}
    </label>
  );
}
