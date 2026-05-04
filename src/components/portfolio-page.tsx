"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Mail,
  Menu,
  MessageCircle,
  MoveRight,
  Network,
  X,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import {
  architectureNodes,
  contact,
  navItems,
  pillars,
  profileImage,
  projects,
  stackCategories,
  statusChips,
  timeline,
  valueItems,
} from "@/data/portfolio";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease: "easeOut" },
} as const;

export function PortfolioPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030812] text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.14),transparent_32%),radial-gradient(circle_at_85%_8%,rgba(14,165,233,0.16),transparent_28%),linear-gradient(180deg,#020617_0%,#06111f_46%,#020617_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.05] [background-image:linear-gradient(#e2e8f0_1px,transparent_1px),linear-gradient(90deg,#e2e8f0_1px,transparent_1px)] [background-size:72px_72px]" />
      <Header />
      <Hero />
      <Pillars />
      <About />
      <Projects />
      <Stack />
      <Timeline />
      <ValueSection />
      <ContactCTA />
    </main>
  );
}

function ProfilePhoto({ size = "large" }: { size?: "large" | "compact" }) {
  const [hasImageError, setHasImageError] = useState(false);
  const isLarge = size === "large";

  return (
    <div
      className={[
        "relative overflow-hidden rounded-[1.75rem] border border-white/12 bg-white/[0.055] shadow-2xl shadow-cyan-950/25 backdrop-blur",
        isLarge ? "h-72 w-full max-w-72 p-2 sm:h-80 sm:max-w-80" : "size-16 rounded-2xl p-1",
      ].join(" ")}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[1.35rem] border border-white/10 bg-gradient-to-br from-emerald-300/18 via-cyan-300/12 to-slate-950">
        {!hasImageError ? (
          <Image
            src={profileImage.src}
            alt={profileImage.alt}
            fill
            priority={isLarge}
            sizes={isLarge ? "(max-width: 768px) 288px, 320px" : "64px"}
            className="object-cover"
            onError={() => setHasImageError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-3xl font-semibold text-emerald-100 sm:text-5xl">
            LM
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030812]/35 via-transparent to-white/5" />
      </div>
    </div>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#030812]/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#topo" className="group flex items-center gap-3" aria-label="Ir para o topo">
          <span className="flex size-10 items-center justify-center rounded-xl border border-emerald-300/20 bg-emerald-300/10 text-sm font-semibold text-emerald-200">
            LM
          </span>
          <span>
            <span className="block text-sm font-semibold text-white">Luis Augusto Mariano</span>
            <span className="block text-xs text-slate-400">CRM, automações e integrações</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={contact.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-5 py-2.5 text-sm font-medium text-cyan-100 transition hover:border-cyan-200/50 hover:bg-cyan-300/15 lg:inline-flex"
        >
          <MessageCircle size={16} />
          Contato
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 lg:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-white/10 bg-[#030812]/95 px-5 py-5 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-4" aria-label="Navegação mobile">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section id="topo" className="relative px-5 pb-20 pt-16 sm:px-8 lg:pb-28 lg:pt-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.03fr_0.97fr]">
        <motion.div {...fadeUp}>
          <div className="mb-7 flex flex-col gap-5 sm:flex-row sm:items-center">
            <ProfilePhoto size="compact" />
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-100">
              <Network size={16} />
              Operações comerciais conectadas
            </div>
          </div>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
            CRM, integrações e IA para escalar operações comerciais.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Sou especialista em Zoho CRM, automação comercial e integrações via API. Transformo processos manuais em
            sistemas conectados, rastreáveis e orientados por dados.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-300 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
            >
              Chamar no WhatsApp
              <ArrowRight size={17} />
            </a>
            <a
              href={contact.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-200/40 hover:bg-white/10"
            >
              Ver LinkedIn
              <ExternalLink size={17} />
            </a>
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            {statusChips.map((chip) => {
              const Icon = chip.icon;
              return (
                <span
                  key={chip.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300"
                >
                  <Icon size={15} className="text-cyan-200" />
                  {chip.label}
                </span>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="rounded-[2rem] border border-white/12 bg-white/[0.06] p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl sm:p-5">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#06111f]/80 p-5 sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm text-slate-400">Arquitetura comercial</p>
                  <h2 className="mt-1 text-xl font-semibold text-white">Operação integrada</h2>
                </div>
                <div className="flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-emerald-300" />
                  <span className="size-2.5 rounded-full bg-cyan-300" />
                  <span className="size-2.5 rounded-full bg-slate-500" />
                </div>
              </div>

              <div className="relative mt-7 grid gap-3 sm:grid-cols-2">
                {architectureNodes.map((node, index) => {
                  const Icon = node.icon;
                  return (
                    <motion.div
                      key={node.label}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.45 }}
                      className="group rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-emerald-200/35 hover:bg-white/[0.07]"
                    >
                      <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-100">
                        <Icon size={19} />
                      </div>
                      <p className="text-sm font-semibold text-white">{node.label}</p>
                      <p className="mt-1 text-sm text-slate-400">{node.detail}</p>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-5 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="shrink-0 text-emerald-200" size={20} />
                  <p className="text-sm text-emerald-50">
                    CRM como centro da execução, com sistemas conectados por regras, APIs e dados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div {...fadeUp} className="mx-auto mb-10 max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">{description}</p> : null}
    </motion.div>
  );
}

function Pillars() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Pilares de atuação"
          title="Da dor operacional ao sistema funcionando."
          description="Minha entrega combina entendimento de negócio, desenho de processo e execução técnica para transformar rotina comercial em operação escalável."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.article
                key={pillar.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.05 }}
                className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur transition hover:border-cyan-200/30 hover:bg-white/[0.065]"
              >
                <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-emerald-300/10 text-emerald-200">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{pillar.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.78fr_1.22fr]">
        <motion.div {...fadeUp} className="flex flex-col gap-7">
          <ProfilePhoto />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">Sobre mim</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">
              Negócio, processo e tecnologia na mesma mesa.
            </h2>
          </div>
        </motion.div>
        <motion.div
          {...fadeUp}
          className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 text-lg leading-8 text-slate-300 backdrop-blur sm:p-8"
        >
          <p>
            Minha trajetória começou no marketing operacional, passando por marketplaces, e-commerce, RD Station,
            campanhas digitais e e-mails marketing. Com o tempo, migrei naturalmente para a área comercial e
            tecnológica, assumindo projetos de CRM, automações, integrações entre sistemas e melhoria de processos
            internos.
          </p>
          <p className="mt-6">
            Hoje atuo na interseção entre negócio e tecnologia: entendo a dor operacional, desenho a arquitetura do
            processo e desenvolvo a solução técnica para gerar escala, previsibilidade e eficiência.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projetos" className="px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Projetos selecionados"
          title="Implementações que conectam execução, dados e operação."
          description="Projetos reais envolvendo Zoho CRM, Deluge, APIs, comunicação comercial, pós-venda e uso prático de IA."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.03 }}
              className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur transition hover:border-emerald-200/25 hover:bg-white/[0.065] sm:p-7"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-cyan-200">{project.category}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
                </div>
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-xs font-medium text-emerald-100">
                  <MoveRight size={14} />
                  Automação
                </span>
              </div>
              <p className="mt-5 text-base leading-7 text-slate-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.06] p-4">
                <p className="text-sm font-semibold text-cyan-100">Impacto</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{project.impact}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Stack técnica"
          title="Stack técnica"
          description="Ferramentas, linguagens e plataformas que já integrei para construir operações comerciais conectadas."
        />
        <div className="space-y-8">
          {stackCategories.map((group, groupIndex) => (
            <motion.div key={group.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: groupIndex * 0.04 }}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">{group.title}</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {group.tools.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <article
                      key={tool.name}
                      className="group rounded-3xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-200/35 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-cyan-950/20"
                    >
                      <div className="mb-5 flex items-center justify-between gap-4">
                        <span className="flex size-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-sm font-semibold text-cyan-100">
                          {tool.mark}
                        </span>
                        <Icon size={20} className="text-emerald-200 transition group-hover:text-cyan-100" />
                      </div>
                      <h4 className="text-lg font-semibold text-white">{tool.name}</h4>
                      <p className="mt-2 text-sm text-slate-400">{tool.category}</p>
                    </article>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section id="trajetoria" className="px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionIntro eyebrow="Trajetória" title="Evolução de marketing operacional para arquitetura comercial." />
        <div className="relative">
          <div className="absolute left-4 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-cyan-300 via-emerald-300 to-transparent sm:block" />
          <div className="space-y-5">
            {timeline.map((item, index) => (
              <motion.article
                key={item.role}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.06 }}
                className="relative rounded-3xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur sm:ml-12 sm:p-7"
              >
                <span className="absolute -left-[3.35rem] top-8 hidden size-4 rounded-full border-2 border-cyan-100 bg-cyan-300 shadow-[0_0_28px_rgba(34,211,238,0.7)] sm:block" />
                <p className="text-sm font-semibold text-emerald-200">{item.period}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{item.role}</h3>
                <p className="mt-4 text-base leading-7 text-slate-300">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueSection() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Valor gerado" title="Onde eu gero mais valor" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {valueItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.035 }}
                className="flex min-h-32 items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur transition hover:border-emerald-200/25 hover:bg-white/[0.065]"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-100">
                  <Icon size={20} />
                </span>
                <p className="text-base font-medium leading-6 text-white">{item.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section id="contato" className="px-5 pb-20 pt-16 sm:px-8 lg:pb-28 lg:pt-24">
      <motion.div
        {...fadeUp}
        className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 text-center shadow-2xl shadow-emerald-950/30 backdrop-blur-xl sm:p-10 lg:p-14"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200">Contato</p>
        <h2 className="mt-5 text-3xl font-semibold text-white sm:text-5xl">
          Vamos construir uma operação mais automatizada?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
          Posso ajudar com arquitetura de CRM, automações, integrações via API, dashboards e uso prático de IA em
          processos comerciais.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-300 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
          >
            Chamar no WhatsApp
            <MessageCircle size={17} />
          </a>
          <a
            href={contact.linkedIn}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-200/40 hover:bg-white/10"
          >
            Ver LinkedIn
            <ExternalLink size={17} />
          </a>
        </div>
        <a
          href={`mailto:${contact.email}`}
          className="mt-7 inline-flex items-center justify-center gap-2 text-sm font-medium text-cyan-100 transition hover:text-cyan-50"
        >
          <Mail size={16} />
          {contact.email}
        </a>
      </motion.div>
    </section>
  );
}
