import type { Lang } from "../types";

type Copy = Record<Lang, string>;
export type CaseStudy = {
  category: Copy;
  headline: Copy;
  intro?: Copy;
  capabilities: string[];
} & (
  | { paragraphs: Copy[] }
  | { challenge: Copy; approach: Copy; evidence: Copy }
);

// Editorial summaries of the existing project materials, not invented traction metrics.
export const caseStudies: Record<string, CaseStudy> = {
  herduck: {
    category: { zh: "开发者工具 · 开源", en: "Developer tools · Open source" },
    headline: {
      zh: "让多个 Agent，接着把事做完。",
      en: "Keep the work going. Across agents.",
    },
    intro: {
      zh: "把 Agent 窗口、工作看板和会话放进同一个工作空间。看清谁在做什么，切换工具时也能接着推进。",
      en: "Agent windows, a work board, and sessions in one workspace. See what is happening and pick up the work across tools.",
    },
    challenge: {
      zh: "多个 Agent 同时开工，目标、进度和阻塞却散在不同窗口。切换会话，往往意味着重新找上下文。",
      en: "Parallel agents scatter goals, progress, and blockers across windows. Switching sessions means piecing the context together again.",
    },
    approach: {
      zh: "把 Work 作为持续推进的对象，用 Agents、Work、Projects、Sessions 四个视图连接执行现场与全局进度。",
      en: "Make Work the persistent unit. Connect execution and the bigger picture through Agents, Work, Projects, and Sessions.",
    },
    evidence: {
      zh: "公开源码与四个工作视图截图：可以直接查看实现，而不只看产品介绍。",
      en: "A public codebase and screenshots of all four work views. Inspect the implementation as well as the product.",
    },
    capabilities: ["Rust / Zig", "Agent orchestration", "Terminal UI"],
  },
  starsay: {
    category: {
      zh: "AI 原生应用 · 记忆与交互",
      en: "AI-native app · Memory & interaction",
    },
    headline: {
      zh: "让 AI 的记忆，变成看得见的宇宙。",
      en: "A universe that remembers you.",
    },
    intro: {
      zh: "从对话里留下值得记住的念头，长成星卡、觉察流与像素星球。把记忆系统做成愿意每天打开的体验。",
      en: "Turn meaningful moments into star cards, an awareness feed, and pixel planets. A memory system you want to return to.",
    },
    challenge: {
      zh: "长期记忆通常藏在系统内部。用户很难知道 AI 记住了什么，也缺少再次回看的理由。",
      en: "Long-term memory is usually hidden inside the system. People cannot easily see what was kept or why they should revisit it.",
    },
    approach: {
      zh: "将记忆提取放到主对话旁路，结合日级整理；再把记忆映射成星卡、星系和 Widget，让底层能力成为可感知的交互。",
      en: "Extract memory alongside the main conversation, consolidate it daily, and express it as star cards, galaxies, and a home-screen widget.",
    },
    evidence: {
      zh: "完整的产品图集：对话入口、觉察流、星卡、Widget，以及三组动态像素星球。",
      en: "A product gallery spanning the conversation entry, awareness feed, star cards, widget, and three animated planet collections.",
    },
    capabilities: ["Memory agents", "Cross-platform", "WebGL"],
  },
  rentkoa: {
    category: {
      zh: "Agent 应用 · 创作者协作",
      en: "Agent product · Creator collaboration",
    },
    headline: {
      zh: "让 AI 参与小额内容合作。",
      en: "AI for small creator partnerships.",
    },
    intro: {
      zh: "我自己接过小红书的推广合作。一两百元的单子，也可能花三五天沟通选题、报价和稿件。RentKoa 就从这件事出发，让品牌和创作者各自的 Agent 参与找人、谈合作和准备内容。",
      en: "I have taken on small Xiaohongshu partnerships myself. Even a modest fee could mean days of discussing topics, pricing, and drafts. RentKoa grew out of that experience: agents on both sides help find creators, discuss a collaboration, and prepare content.",
    },
    paragraphs: [],
    capabilities: ["Multi-agent", "Google GenAI", "Cloudflare"],
  },
};
