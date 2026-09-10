export interface Project {
  id: string;
  name: { zh: string; en: string };
  category: { zh: string; en: string };
  tagColor: string;
  description: { zh: string; en: string };
  techStack: string[];
  highlights: { zh: string[]; en: string[] };
  year: string;
  href?: string;
}

export const projects: Project[] = [
  {
    id: "staroracle",
    name: { zh: "星谕 StarOracle", en: "StarOracle" },
    category: { zh: "核心产品", en: "Product" },
    tagColor: "#0f766e",
    description: {
      zh: "星座互动产品：用星盘与 AI 对话探索自我。从 Web 原型起步，历经多轮架构迭代，覆盖 Web / iOS / Android，含完整用户系统与自研星盘可视化引擎。",
      en: "An astrology product where star charts and AI dialogue help people explore themselves. Grown from a web prototype through multiple architecture iterations into Web, iOS, and Android — with a full user system and a proprietary chart engine.",
    },
    techStack: [
      "React",
      "TypeScript",
      "React Native",
      "Capacitor",
      "Node.js",
      "Supabase",
      "Tailwind CSS",
    ],
    highlights: {
      zh: [
        "Web 原型到全平台产品的完整迭代",
        "自研星盘可视化引擎",
        "AI 驱动的个性化星座对话",
      ],
      en: [
        "Full path from web prototype to multi-platform product",
        "Proprietary star-chart visualization engine",
        "AI-driven personalized astrology dialogue",
      ],
    },
    year: "2024–",
  },
  {
    id: "mira",
    name: { zh: "MIRA", en: "MIRA" },
    category: { zh: "空间计算", en: "Spatial" },
    tagColor: "#7c3aed",
    description: {
      zh: "跑在 Apple Vision Pro 上的原生应用，探索空间计算如何改变人与数字内容的相处方式。用 Swift 从零构建，多轮迭代空间 UI、手势与 3D 渲染。",
      en: "A native Apple Vision Pro app exploring how spatial computing changes interaction with digital content. Built from scratch in Swift, iterating on spatial UI, gesture, and 3D rendering.",
    },
    techStack: ["Swift", "SwiftUI", "visionOS", "RealityKit"],
    highlights: {
      zh: [
        "Vision Pro 原生开发实践",
        "空间 UI 与手势交互探索",
        "从零搭建空间组件库",
      ],
      en: [
        "Native Vision Pro development",
        "Spatial UI and gesture exploration",
        "Spatial component library built from scratch",
      ],
    },
    year: "2025",
  },
  {
    id: "herduck",
    name: { zh: "Herduck", en: "Herduck" },
    category: { zh: "AI Agent", en: "AI Agent" },
    tagColor: "#b45309",
    description: {
      zh: "面向 AI 编程代理的终端工作区：并排跑 agent、找回历史会话、按项目与主题继续。兼容 Claude Code、Codex、OpenCode、Pi 等既有 CLI。",
      en: "A terminal workspace for AI coding agents — run agents side by side, find past conversations, and pick up by project or topic. Works with the CLIs you already use: Claude Code, Codex, OpenCode, Pi.",
    },
    techStack: ["Rust", "Zig", "TypeScript", "Node.js", "Terminal UI"],
    highlights: {
      zh: [
        "多 agent 分屏与会话恢复",
        "Sessions / Projects / Topics 组织工作",
        "开源 · github.com/wenhanweime/herduck",
      ],
      en: [
        "Split panes and session resume for multiple agents",
        "Sessions, Projects, and Topics to organize work",
        "Open source · github.com/wenhanweime/herduck",
      ],
    },
    year: "2026",
    href: "https://github.com/wenhanweime/herduck",
  },
  {
    id: "md2video",
    name: { zh: "md2video", en: "md2video" },
    category: { zh: "内容生产", en: "Content" },
    tagColor: "#ea580c",
    description: {
      zh: "专注写作，自动生成带配音、字幕与动画的视频。基于 Remotion，集成 TTS，把 Markdown 与视频制作之间的鸿沟收窄。",
      en: "Write once; generate video with narration, subtitles, and motion. Built on Remotion with TTS — narrowing the gap between Markdown and finished video.",
    },
    techStack: ["React", "Remotion", "TypeScript", "Edge TTS", "FFmpeg"],
    highlights: {
      zh: [
        "文本到手成片的自动化链路",
        "TTS 语音合成集成",
        "多模板场景支持",
      ],
      en: [
        "Automated path from text to finished video",
        "TTS narration integration",
        "Multi-template scene support",
      ],
    },
    year: "2024",
  },
  {
    id: "us-stock-daily",
    name: { zh: "美股投研", en: "US Stock Daily" },
    category: { zh: "研究工具", en: "Research" },
    tagColor: "#0369a1",
    description: {
      zh: "把美股投研沉淀成可检索、可追踪、可复盘的研究终端。「每日观察」聚合 X 高赞讨论，「深度研究」沉淀个股与产业链。仅供研究，非投资建议。",
      en: "A searchable research terminal for US equities — daily X digests plus deep dives on names and supply chains. For research only; not investment advice.",
    },
    techStack: ["Automation", "Research", "GitHub Pages"],
    highlights: {
      zh: [
        "每日自动更新的观察日报",
        "个股 / 产业链深度研报",
        "顶部搜索同时过滤研报与日报",
      ],
      en: [
        "Automatically updated daily observation digests",
        "Deep dives on stocks and industry chains",
        "Unified search across reports and dailies",
      ],
    },
    year: "2026",
    href: "https://wenhanweime.github.io/us-stock-daily/",
  },
  {
    id: "autopublish",
    name: { zh: "内容自动发布", en: "Content Automation" },
    category: { zh: "增长工具", en: "Growth" },
    tagColor: "#059669",
    description: {
      zh: "内容从制作到发布的自动化工具链。一次编辑，同步到多个平台，让创作者把时间留在内容本身。",
      en: "An automation chain from drafting to publishing. Edit once, sync across platforms — so creators stay on the work, not the ops.",
    },
    techStack: ["Node.js", "Chrome Extension", "Shell"],
    highlights: {
      zh: [
        "一次编辑、多平台同步",
        "Chrome 扩展与管理后台",
        "定时任务与批量操作",
      ],
      en: [
        "Edit once, sync to multiple platforms",
        "Chrome extension plus admin surface",
        "Scheduling and batch operations",
      ],
    },
    year: "2024",
  },
];
