export interface Project {
  id: string;
  name: { zh: string; en: string };
  description: { zh: string; en: string };
  techStack: string[];
  highlights: { zh: string[]; en: string[] };
  year: string;
  cover: string;
  href?: string;
}

export const projects: Project[] = [
  {
    id: "staroracle",
    name: { zh: "星谕 StarOracle", en: "StarOracle" },
    description: {
      zh: "星座互动产品：用星盘与 AI 对话探索自我。从 Web 原型到 Web / iOS / Android，自研星盘引擎与完整用户系统。",
      en: "Astrology product pairing charts with AI dialogue. Grew from a web prototype to Web / iOS / Android, with a custom chart engine and full user system.",
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
        "Web prototype through multi-platform release",
        "Custom star-chart visualization engine",
        "Personalized astrology dialogue",
      ],
    },
    year: "2024–",
    cover: "/covers/staroracle.jpg",
  },
  {
    id: "mira",
    name: { zh: "MIRA", en: "MIRA" },
    description: {
      zh: "Apple Vision Pro 原生应用：用 Swift 探索空间 UI、手势与 3D 渲染。",
      en: "Native Vision Pro app in Swift — spatial UI, gesture, and 3D rendering.",
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
        "Spatial component library from scratch",
      ],
    },
    year: "2025",
    cover: "/covers/mira.png",
  },
  {
    id: "herduck",
    name: { zh: "Herduck", en: "Herduck" },
    description: {
      zh: "面向 AI 编程代理的终端工作区：并排跑 agent、找回历史会话、按项目与主题继续。兼容 Claude Code、Codex、OpenCode、Pi。",
      en: "Terminal workspace for AI coding agents — split panes, resume sessions, continue by project or topic. Works with Claude Code, Codex, OpenCode, Pi.",
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
    cover: "/covers/herduck.png",
    href: "https://github.com/wenhanweime/herduck",
  },
  {
    id: "md2video",
    name: { zh: "md2video", en: "md2video" },
    description: {
      zh: "把 Markdown 收成带配音、字幕与动画的视频。Remotion + TTS。",
      en: "Turn Markdown into narrated, subtitled, animated video. Remotion + TTS.",
    },
    techStack: ["React", "Remotion", "TypeScript", "Edge TTS", "FFmpeg"],
    highlights: {
      zh: [
        "文本到成片的自动化链路",
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
    cover: "/covers/md2video.png",
  },
  {
    id: "us-stock-daily",
    name: { zh: "美股投研", en: "US Stock Daily" },
    description: {
      zh: "把美股投研沉淀成可检索、可追踪、可复盘的研究站。「每日观察」聚合讨论，「深度研究」沉淀个股与产业链。仅供研究，非投资建议。",
      en: "Searchable research site for US equities — daily digests plus deeper notes on names and supply chains. Research only; not advice.",
    },
    techStack: ["Automation", "Research", "GitHub Pages"],
    highlights: {
      zh: [
        "每日自动更新的观察日报",
        "个股 / 产业链深度研报",
        "顶部搜索同时过滤研报与日报",
      ],
      en: [
        "Automatically updated daily digests",
        "Deep dives on stocks and industry chains",
        "Unified search across reports and dailies",
      ],
    },
    year: "2026",
    cover: "/covers/us-stock-daily.png",
    href: "https://wenhanweime.github.io/us-stock-daily/",
  },
  {
    id: "autopublish",
    name: { zh: "内容自动发布", en: "Content Automation" },
    description: {
      zh: "内容从制作到发布的自动化工具链。一次编辑，同步多平台。",
      en: "Draft-to-publish automation — edit once, sync across platforms.",
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
    cover: "/covers/content-automation.png",
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
