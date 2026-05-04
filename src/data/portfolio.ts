import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BarChart3,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Clock3,
  Code2,
  DatabaseZap,
  GitBranch,
  Headphones,
  Layers3,
  LineChart,
  MessageCircle,
  Network,
  PhoneCall,
  PlugZap,
  Repeat2,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";
import type { SimpleIcon } from "simple-icons";
import {
  siGotomeeting,
  siJavascript,
  siNodedotjs,
  siOpenapiinitiative,
  siPython,
  siWhatsapp,
  siZoho,
} from "simple-icons";

export const contact = {
  email: "luisaugustoo.mariano@gmail.com",
  linkedIn: "https://www.linkedin.com/in/luis-augusto-mariano-552b31332",
  whatsapp:
    "https://wa.me/5512988447368?text=Ol%C3%A1%20Luis%2C%20vi%20seu%20portf%C3%B3lio%20e%20quero%20conversar%20sobre%20CRM%2C%20automa%C3%A7%C3%B5es%20e%20integra%C3%A7%C3%B5es.",
};

export const profileImage = {
  src: "/luis-augusto.jpg",
  alt: "Luis Augusto Mariano",
};

export const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Stack", href: "#stack" },
  { label: "Trajetória", href: "#trajetoria" },
  { label: "Contato", href: "#contato" },
];

export type Pillar = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const pillars: Pillar[] = [
  {
    title: "Processos escaláveis",
    description: "Desenho fluxos comerciais com regras claras, menos variação e mais previsibilidade operacional.",
    icon: Workflow,
  },
  {
    title: "Integrações entre sistemas",
    description: "Conecto CRM, ERP, WhatsApp, telefonia e operação técnica com APIs e automações confiáveis.",
    icon: PlugZap,
  },
  {
    title: "IA aplicada à operação",
    description: "Uso IA para preservar contexto comercial, apoiar atendimento e reduzir perda de informação.",
    icon: BrainCircuit,
  },
  {
    title: "Gestão orientada por dados",
    description: "Transformo execução diária em indicadores, rastreabilidade e decisões mais objetivas.",
    icon: BarChart3,
  },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  impact: string;
};

export const projects: Project[] = [
  {
    title: "Zoho CRM + ERP Omie",
    category: "Integração CRM/ERP",
    description:
      "Integração criada para transformar orçamentos do Zoho CRM em pedidos no ERP Omie, com cadastro, vínculo de produto e geração do pedido via API.",
    stack: ["Zoho CRM", "Deluge", "Omie API", "REST API"],
    impact: "Redução de retrabalho manual, padronização comercial e maior confiabilidade entre vendas e financeiro.",
  },
  {
    title: "Zoho CRM + WATI WhatsApp",
    category: "Automação Comercial",
    description:
      "Automações para disparo de mensagens via WhatsApp conforme movimentações de estágio e regras comerciais dentro do CRM.",
    stack: ["Zoho CRM", "Deluge", "WATI API", "WhatsApp Business"],
    impact: "Comunicações comerciais mais rápidas, consistentes e menos dependentes de ações manuais.",
  },
  {
    title: "Validação de Chamadas com GoTo",
    category: "Governança Comercial",
    description:
      "Integração que busca registros de chamadas e valida se o vendedor realmente ligou para o lead antes de concluir tarefas no CRM.",
    stack: ["Zoho CRM", "Deluge", "GoTo Connect", "Logs de chamada"],
    impact: "Mais rastreabilidade, aderência ao processo e controle real da execução comercial.",
  },
  {
    title: "Zoho CRM + Auvo",
    category: "Pós-venda e Operação",
    description:
      "Integração com OAuth2 para criar tarefas de instalação no Auvo a partir do agendamento feito dentro do CRM.",
    stack: ["Zoho CRM", "Deluge", "Auvo API", "OAuth2"],
    impact: "Agendamento mais rápido, integrado e com menos duplicidade entre atendimento e operação técnica.",
  },
  {
    title: "ChatGPT + WATI + Zoho CRM",
    category: "IA Aplicada a Vendas",
    description:
      "Fluxo em que a IA analisa conversas comerciais na WATI e retorna contexto estruturado em notas no card do CRM.",
    stack: ["ChatGPT API", "Zoho CRM", "Deluge", "WATI"],
    impact: "Menos perda de contexto, melhor acompanhamento comercial e uso prático de IA na rotina de vendas.",
  },
  {
    title: "CEP automático em Quotes",
    category: "Produtividade Operacional",
    description:
      "Client Script em JavaScript que consulta dados de endereço pelo CEP e preenche campos automaticamente em orçamentos.",
    stack: ["JavaScript", "Zoho Client Script", "Deluge", "API CEP"],
    impact: "Orçamentos mais rápidos, padronizados e com menor risco de erro operacional.",
  },
  {
    title: "Cadência bem ou mal executada",
    category: "Controle de Processo Comercial",
    description:
      "Lógica criada para avaliar se tarefas comerciais estavam sendo executadas no tempo correto e conforme as regras do processo.",
    stack: ["Zoho CRM", "Deluge", "Tarefas", "Workflows", "Validação de Processo"],
    impact: "Maior clareza sobre a qualidade da execução comercial e identificação de desvios operacionais.",
  },
];

export type StackTool = {
  name: string;
  category: string;
  mark: string;
  icon: LucideIcon;
  logo?: SimpleIcon;
  logoSrc?: string;
};

export type StackCategory = {
  title: string;
  tools: StackTool[];
};

export const stackCategories: StackCategory[] = [
  {
    title: "CRM e automação",
    tools: [
      { name: "Zoho CRM", category: "CRM", mark: "ZC", icon: DatabaseZap, logo: siZoho },
      { name: "Zoho Deluge", category: "Automação", mark: "DL", icon: Workflow, logo: siZoho },
      { name: "Zoho Client Script", category: "CRM Frontend", mark: "CS", icon: Code2, logo: siZoho },
    ],
  },
  {
    title: "Comunicação e atendimento",
    tools: [
      { name: "WATI", category: "WhatsApp Business", mark: "WA", icon: MessageCircle, logo: siWhatsapp },
      { name: "GoTo Connect", category: "Telefonia", mark: "GT", icon: PhoneCall, logo: siGotomeeting },
      { name: "RD Station", category: "Marketing", mark: "RD", icon: Headphones, logoSrc: "/brand-logos/rd-station.png" },
    ],
  },
  {
    title: "ERP e operação",
    tools: [
      { name: "Omie", category: "ERP", mark: "OM", icon: Activity, logoSrc: "/brand-logos/omie.png" },
      { name: "SIGE", category: "Gestão operacional", mark: "SG", icon: Layers3, logoSrc: "/brand-logos/sige.png" },
      { name: "Auvo", category: "Pós-venda", mark: "AV", icon: CheckCircle2, logoSrc: "/brand-logos/auvo.png" },
    ],
  },
  {
    title: "Desenvolvimento e integrações",
    tools: [
      { name: "APIs REST", category: "Integrações", mark: "API", icon: PlugZap, logo: siOpenapiinitiative },
      { name: "OAuth2", category: "Autenticação", mark: "OA", icon: ShieldCheck, logoSrc: "/brand-logos/oauth.png" },
      { name: "JavaScript", category: "Linguagem", mark: "JS", icon: Code2, logo: siJavascript },
      { name: "Node.js", category: "Runtime", mark: "ND", icon: Network, logo: siNodedotjs },
      { name: "Python", category: "Automação", mark: "PY", icon: Workflow, logo: siPython },
    ],
  },
  {
    title: "Dados e IA",
    tools: [
      { name: "OpenAI / ChatGPT API", category: "IA aplicada", mark: "AI", icon: BrainCircuit, logoSrc: "/brand-logos/openai.png" },
      { name: "Dashboards / BI", category: "Dados", mark: "BI", icon: LineChart, logoSrc: "/brand-logos/power-bi.png" },
    ],
  },
];

export const timeline = [
  {
    period: "2026 — Atual",
    role: "Líder de Marketing e Tecnologia",
    description:
      "Liderança das áreas de Marketing, Desenvolvimento e Tecnologia, com foco em arquitetura comercial, automações, integrações, dados e sistemas internos.",
  },
  {
    period: "2024 — 2026",
    role: "Zoho Developer / Especialista em CRM",
    description:
      "Estruturação do Zoho CRM, desenvolvimento de automações em Deluge, integrações via API e projetos de eficiência operacional.",
  },
  {
    period: "2023 — 2024",
    role: "Estagiário de Marketing",
    description:
      "Base operacional em marketing digital, marketplaces, e-commerce, RD Station, e-mails marketing e funis de aquisição.",
  },
];

export type ValueItem = {
  label: string;
  icon: LucideIcon;
};

export const valueItems: ValueItem[] = [
  { label: "Redução de retrabalho manual", icon: Repeat2 },
  { label: "Integração entre sistemas", icon: Network },
  { label: "Padronização comercial", icon: Layers3 },
  { label: "Rastreabilidade de atividades", icon: GitBranch },
  { label: "Automação de processos", icon: Zap },
  { label: "Dashboards e gestão por dados", icon: LineChart },
  { label: "IA aplicada a vendas e atendimento", icon: Bot },
  { label: "Estruturação de operações escaláveis", icon: ShieldCheck },
];

export const architectureNodes = [
  { label: "CRM", detail: "Base da operação", icon: DatabaseZap },
  { label: "ERP", detail: "Pedido e financeiro", icon: Activity },
  { label: "WhatsApp", detail: "Atendimento comercial", icon: MessageCircle },
  { label: "Telefonia", detail: "Validação de contato", icon: PhoneCall },
  { label: "IA", detail: "Contexto e análise", icon: BrainCircuit },
  { label: "Pós-venda", detail: "Execução técnica", icon: CheckCircle2 },
];

export const statusChips = [
  { label: "Processos conectados", icon: Workflow },
  { label: "Dados rastreáveis", icon: GitBranch },
  { label: "Operação em evolução", icon: Clock3 },
];
