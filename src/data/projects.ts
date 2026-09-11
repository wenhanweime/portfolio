export interface Project {
  id: string;
  name: { zh: string; en: string };
  description: { zh: string; en: string };
  techStack: string[];
  highlights: { zh: string[]; en: string[] };
  year: string;
  cover: string;
  gallery?: { src: string; caption?: { zh: string; en: string } }[];
  href?: string;
}

export const projects: Project[] = [
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
    cover: "/covers/herduck.jpg",
    gallery: [
      { src: "/covers/herduck/agents.jpg", caption: { zh: "Agents 分屏", en: "Agents" } },
      { src: "/covers/herduck/topics.jpg", caption: { zh: "Topics", en: "Topics" } },
      { src: "/covers/herduck/projects.jpg", caption: { zh: "Projects", en: "Projects" } },
      { src: "/covers/herduck/sessions.jpg", caption: { zh: "Sessions", en: "Sessions" } },
    ],
    href: "https://github.com/wenhanweime/herduck",
  },
  {
    id: "starsay",
    name: { zh: "StarSay", en: "StarSay" },
    description: {
      zh: "星盘与 AI 对话的个人宇宙产品。从 Web 原型到 Web / iOS / Android，自研星盘引擎与完整用户系统。原名 StarOracle。",
      en: "Personal-universe product pairing star charts with AI dialogue. Web prototype to Web / iOS / Android, with a custom chart engine. Formerly StarOracle.",
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
        "自研星盘 / 星系可视化",
        "Ask anything · Inspire Card · Widget 等产品面",
      ],
      en: [
        "Full path from web prototype to multi-platform",
        "Custom star-chart / galaxy visualization",
        "Ask anything, Inspire Card, Widget surfaces",
      ],
    },
    year: "2024–",
    cover: "/covers/starsay-card.jpg",
    gallery: [
      { src: "/covers/starsay/marketing-strip.jpg", caption: { zh: "营销图横拼", en: "Marketing strip" } },
      { src: "/covers/starsay/hero.jpg", caption: { zh: "营销主视觉", en: "Marketing hero" } },
      { src: "/covers/starsay/galaxy.jpg", caption: { zh: "Your Own Galaxy", en: "Your Own Galaxy" } },
      { src: "/covers/starsay/inspire.jpg", caption: { zh: "Inspire Card", en: "Inspire Card" } },
      { src: "/covers/starsay/widget.jpg", caption: { zh: "桌面小组件", en: "Widget" } },
      { src: "/covers/starsay/sim-home.jpg", caption: { zh: "模拟器原版 · 首页", en: "Simulator · Home" } },
      { src: "/covers/starsay/sim-planets.jpg", caption: { zh: "模拟器原版 · Planets", en: "Simulator · Planets" } },
      { src: "/covers/starsay/sim-awareness.jpg", caption: { zh: "模拟器原版 · Awareness", en: "Simulator · Awareness" } },
      { src: "/covers/starsay/sim-awareness-2.jpg", caption: { zh: "模拟器原版 · Awareness feed", en: "Simulator · Awareness feed" } },
      { src: "/covers/starsay/sim-stars.jpg", caption: { zh: "模拟器原版 · 集星", en: "Simulator · Stars" } },
      { src: "/covers/starsay/sim-stars-2.jpg", caption: { zh: "模拟器原版 · 星卡", en: "Simulator · Star cards" } },
    ],
  },
  {
    id: "mira",
    name: { zh: "MIRA", en: "MIRA" },
    description: {
      zh: "Apple Vision Pro 原生应用：空间 UI、手势与 3D 场景里的发现 / 地图 / 社交面板。",
      en: "Native Vision Pro app — spatial UI, gesture, and 3D discovery / map / social panels.",
    },
    techStack: ["Swift", "SwiftUI", "visionOS", "RealityKit"],
    highlights: {
      zh: [
        "visionOS 玻璃拟态空间界面",
        "附近推荐 Feed + 三维地图导航",
        "沉浸态下的模型放置与校准",
      ],
      en: [
        "visionOS glassmorphic spatial UI",
        "Nearby feed plus 3D map navigation",
        "Immersive model placement and calibration",
      ],
    },
    year: "2025",
    cover: "/covers/mira.jpg",
    gallery: [
      { src: "/covers/mira/spatial-2.jpg", caption: { zh: "空间双窗 · 展览详情", en: "Spatial dual windows" } },
      { src: "/covers/mira/spatial-1.jpg", caption: { zh: "发现 / 地图 / 个人中心", en: "Discover / map / profile" } },
      { src: "/covers/mira/immersive.jpg", caption: { zh: "沉浸态模型放置", en: "Immersive placement" } },
    ],
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
    cover: "/covers/us-stock-daily.jpg",
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
    cover: "/covers/content-automation.jpg",
    gallery: [
      { src: "/covers/autopublish/obsidian-forest-cover.jpg", caption: { zh: "Obsidian 森林清晨 · 成品", en: "Obsidian Forest Morning · finished" } },
      { src: "/covers/autopublish/obsidian-1.jpg", caption: { zh: "成品页 2", en: "Finished page 2" } },
      { src: "/covers/autopublish/obsidian-2.jpg", caption: { zh: "成品页 3", en: "Finished page 3" } },
      { src: "/covers/autopublish/obsidian-3.jpg", caption: { zh: "成品页 4", en: "Finished page 4" } },
    ],
  }
];

export function getProject(id: string): Project | undefined {
  if (id === "staroracle") return projects.find((p) => p.id === "starsay");
  return projects.find((p) => p.id === id);
}
