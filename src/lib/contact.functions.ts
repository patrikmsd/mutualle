import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  presidente: z.string().trim().min(2).max(120),
  associacao: z.string().trim().min(2).max(160),
  cidadeUf: z.string().trim().min(2).max(120),
  estadosAtivos: z.array(z.string()).min(1),
  qtdAssociados: z.string().trim().min(1).max(20),
  veiculos: z.string().trim().max(500).optional().or(z.literal("")),
  telefone: z.string().trim().min(8).max(40),
  email: z.string().trim().email().max(160),
  jaAdequou: z.enum(["sim", "nao", "em_andamento"]),
  participar: z.enum(["sim", "saber_mais", "ainda_nao"]),
});

const labelsAdequou: Record<string, string> = {
  sim: "Sim",
  nao: "Ainda não",
  em_andamento: "Em andamento",
};
const labelsParticipar: Record<string, string> = {
  sim: "Sim",
  saber_mais: "Quero saber mais",
  ainda_nao: "Ainda não",
};

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));

export const sendContact = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => schema.parse(input))
  .handler(async ({ data }) => {
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "diretoria@arxadm.com.br";
    if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY não configurada");

    const rows: [string, string][] = [
      ["Nome do Presidente", data.presidente],
      ["Nome da Associação", data.associacao],
      ["Cidade / Estado (sede)", data.cidadeUf],
      ["Estados com associados ativos", data.estadosAtivos.join(", ")],
      ["Quantidade de associados", data.qtdAssociados],
      ["Quantidade de veículos por tipo", data.veiculos || "—"],
      ["Telefone / WhatsApp", data.telefone],
      ["E-mail", data.email],
      ["Já realizou cadastro / adequação?", labelsAdequou[data.jaAdequou]],
      ["Deseja participar do grupo?", labelsParticipar[data.participar]],
    ];

    const html = `
      <div style="font-family:Arial,sans-serif;color:#0f172a;max-width:640px">
        <h2 style="color:#1e3a8a;margin:0 0 16px">Novo contato — Mutualle</h2>
        <table style="border-collapse:collapse;width:100%">
          ${rows
            .map(
              ([k, v]) => `
            <tr>
              <td style="padding:8px 12px;background:#f1f5f9;font-weight:600;border:1px solid #e2e8f0;width:240px">${escapeHtml(k)}</td>
              <td style="padding:8px 12px;border:1px solid #e2e8f0">${escapeHtml(v)}</td>
            </tr>`,
            )
            .join("")}
        </table>
      </div>`;

    const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Mutualle <contato@grupocapuzzo.com>",
        to: [CONTACT_EMAIL],
        reply_to: data.email,
        subject: `Contato Mutualle — ${data.associacao}`,
        html,
        text,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      throw new Error(`Falha ao enviar e-mail [${res.status}]: ${body}`);
    }

    return { ok: true as const };
  });
