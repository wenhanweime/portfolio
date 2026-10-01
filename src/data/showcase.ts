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
      zh: "帮创作者接洽合作的 AI 分身。",
      en: "An AI counterpart for creator partnerships.",
    },
    paragraphs: [
      {
        zh: "分身会参考创作者常写的话题和表达风格。品牌可以浏览创作者主页和推荐内容，寻找适合这次推广的人，再由双方的 Agent 围绕具体需求起草内容、处理修改意见。",
        en: "Each counterpart draws on the creator’s usual topics and writing style. Brands can browse creator profiles and recommended content to find a fit. Agents on both sides then work with the brief to draft content and handle revisions.",
      },
      {
        zh: "做这个项目时，我更感兴趣的是匹配之后的合作。所以我把出稿、修改和跟进放在同一笔订单里，有新需求或反馈时，再让 Agent 接着处理。这是我对 AI 参与日常商务协作的一次尝试。",
        en: "What interests me most is what happens after a match. I kept drafts, revisions, and follow-up within the same order, with agents picking up the work when a new request or feedback arrives. RentKoa is my experiment in bringing AI into the day-to-day work of a partnership.",
      },
    ],
    capabilities: ["Multi-agent", "Google GenAI", "Cloudflare"],
  },
};
