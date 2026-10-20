import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { RegulatoryContext } from "@/components/sections/RegulatoryContext";
import { Differentiators } from "@/components/sections/Differentiators";
import { Proposal } from "@/components/sections/Proposal";
import { OperationalModel } from "@/components/sections/OperationalModel";
import { GroupNumbers } from "@/components/sections/GroupNumbers";

import { Governance } from "@/components/sections/Governance";
import { Content } from "@/components/sections/Content";
import { FinalCta } from "@/components/sections/FinalCta";
import { ContactForm } from "@/components/sections/ContactForm";
import { SiteFooter } from "@/components/sections/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mutualle — União estratégica para associações no mercado regulado" },
      {
        name: "description",
        content:
          "A Mutualle reúne associações sérias em um grupo estruturado, preparado para a adequação à LC 213/2025 e ao novo mercado regulado de proteção patrimonial mutualista.",
      },
      { property: "og:title", content: "Mutualle — Estrutura para o novo marco regulatório" },
      {
        property: "og:description",
        content:
          "Governança, escala e preparação regulatória para associações que querem entrar no mercado supervisionado pela Susep.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@500;600;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <RegulatoryContext />
        <Differentiators />
        <Proposal />
        <OperationalModel />
        <GroupNumbers />
        <Governance />
        <Content />
        <FinalCta />
        <ContactForm />
      </main>
      <SiteFooter />
    </div>
  );
}
