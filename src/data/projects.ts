export interface Project {
  id: string;
  name: { zh: string; en: string };
  category: { zh: string; en: string };
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
    description: {
      zh: "星座互动产品：用星盘与 AI 对话探索自我。从 Web 原型走到 Web / iOS / Android，自研星盘引擎与完整用户系统。",
      en: "Astrology product pairing star charts with AI dialogue. From web prototype to Web / iOS / Android, with a proprietary chart engine and full user system.",
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
    description: {
      zh: "Apple Vision Pro 原生应用：用 Swift 从零探索空间 UI、手势与 3D 渲染，试空间计算如何改写交互。",
      en: "Native Vision Pro app in Swift — spatial UI, gesture, and 3D rendering as a probe into how spatial computing changes interaction.",
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
    description: {
      zh: "面向 AI 编程代理的终端工作区：并排跑 agent、找回历史会话、按项目与主题继续。兼容 Claude Code、Codex、OpenCode、Pi。",
      en: "Terminal workspace for AI coding agents — split panes, resume sessions, pick up by project or topic. Works with Claude Code, Codex, OpenCode, Pi.",
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
    description: {
      zh: "专注写作，自动生成带配音、字幕与动画的视频。Remotion + TTS，把 Markdown 收成片。",
      en: "Write Markdown; get narrated, subtitled, animated video. Remotion + TTS — text to cut.",
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
    description: {
      zh: "把美股投研沉淀成可检索、可追踪、可复盘的研究终端。「每日观察」聚合 X 高赞讨论，「深度研究」沉淀个股与产业链。仅供研究，非投资建议。",
      en: "Searchable research terminal for US equities — daily X digests plus deep dives on names and supply chains. Research only; not advice.",
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
    description: {
      zh: "内容从制作到发布的自动化工具链。一次编辑，同步多平台，把时间留在内容本身。",
      en: "Draft-to-publish automation. Edit once, sync across platforms — leave the ops, keep the craft.",
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
