export type GalleryItem =
  | {
      kind?: "image";
      src: string;
      caption?: { zh: string; en: string };
      /** full-bleed black plate for planet grids */
      full?: boolean;
    }
  | {
      kind: "prose";
      eyebrow?: { zh: string; en: string };
      title: { zh: string; en: string };
      body: { zh: string; en: string };
    };

export interface Project {
  id: string;
  name: { zh: string; en: string };
  description: { zh: string; en: string };
  techStack: string[];
  highlights: { zh: string[]; en: string[] };
  year: string;
  cover: string;
  gallery?: GalleryItem[];
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
      zh: "你的心里藏着一整座宇宙。StarSay 不是又一个聊天框——主对话负责体验，旁路 Memory Agent 约每五轮轻轻对比过往、判断「这一刻值不值得留下」；日级 dreaming 把碎片收成自我认知；觉察流收集念头与情绪；集星把洞察变成可回看的星卡。Memory 不再是黑盒向量，而是你看得见、摸得着的星辰。Ask anything，点亮一颗星；Widget 把内心宇宙放在主屏幕上，让你愿意继续聊、继续被记住。",
      en: "Your mind holds a whole universe. StarSay is not another chat box—the main loop keeps the feel light, while a side-path Memory agent every few turns decides what is worth keeping. Daily dreaming compacts fragments into self-knowledge; the Awareness Feed gathers thoughts and feelings; Stars turn insights into cards you can revisit. Memory stops being a black-box vector and becomes something you can see. Ask anything. A star is born. Carry your inner universe on the home screen.",
    },
    techStack: [
      "React",
      "TypeScript",
      "React Native",
      "Capacitor",
      "Node.js",
      "Supabase",
      "Tailwind CSS",
      "WebGL Pixel Planets",
    ],
    highlights: {
      zh: [
        "内心宇宙：提问点亮星辰，反思长成只属于你的星系",
        "旁路 Memory Agent：主对话不堵，约每 5 轮抽取觉察与新事实",
        "日级 dreaming / compact：跨会话总结，次日可见「昨日变化」",
        "Memory 外显：星卡可收集、可回看——看见自己被记住",
        "觉察流：碎片念头与情绪，收成一条可检索的觉察记忆",
        "Planets × 像素星球：主题星系入口，单星可拉满分辨率转动",
        "低摩擦补 context：灵感 / 点选也能攒记忆，不只靠打字",
        "跨端：Web / iOS / Android，Widget 把宇宙带在身边",
      ],
      en: [
        "Inner universe: every ask lights a star; reflections grow your galaxy",
        "Side-path Memory agent: main chat stays light; ~every 5 turns extract what matters",
        "Daily dreaming / compact: cross-session self-knowledge, visible the next day",
        "Memory made visible: collectible star cards you can trust and revisit",
        "Awareness Feed: scattered thoughts become a searchable stream",
        "Planets × pixel worlds: theme galaxies, single planets at max resolution",
        "Low-friction context: inspiration taps feed memory—not only typing",
        "Web / iOS / Android, with a home-screen widget for your cosmos",
      ],
    },
    year: "2024–",
    cover: "/covers/starsay-card.jpg",
    gallery: [
      {
        src: "/covers/starsay/marketing-strip.jpg",
        caption: {
          zh: "内心宇宙的四扇窗 · Ask 点亮 / Galaxy 生长 / Inspire 轻声回答 / Widget 随身携带",
          en: "Four windows into the self · Ask lights a star / Galaxy grows / Inspire answers softly / Widget stays close",
        },
      },
      {
        kind: "prose",
        eyebrow: { zh: "记忆成星", en: "Memory becomes a world" },
        title: {
          zh: "每一段值得留下的觉察，都会长成一颗星球",
          en: "Every awareness worth keeping grows into a planet",
        },
        body: {
          zh: "StarSay 里的星球不是皮肤，是 Memory 的外形。你提问、点选灵感、写下情绪——旁路记忆轻轻判断「这一刻要不要留下」；留下的，就落成可回望的世界。下面三组气质，对应你与自己相处的三种方式。",
          en: "In StarSay, a planet is not chrome—it is the shape of memory. You ask, tap an inspire card, name a feeling; a side-path memory quietly decides what to keep. What remains becomes a world you can revisit. The three temperaments below map how you meet yourself.",
        },
      },
      {
        kind: "prose",
        eyebrow: { zh: "宜居之地", en: "Habitable ground" },
        title: {
          zh: "有海有岸，也有霜与绿洲",
          en: "Shores, frost, and quiet green",
        },
        body: {
          zh: "日常的念头、温和的情绪、还说得清的困惑——当你愿意把它们收进觉察流，记忆会长成可居住的星球：湿润陆海、干旱陆地、群岛与冰世界。不是打卡，是让普通的一天，也有地方安住。",
          en: "Everyday thoughts, gentle moods, confusions you can still name—when you let them into the Awareness Feed, memory grows habitable: wet terran, dry land, islands, ice. Not a streak. A place for ordinary days to rest.",
        },
      },
      {
        src: "/covers/starsay/planet-grid-habitable.gif",
        full: true,
        caption: {
          zh: "湿润陆海 · 干旱 · 群岛 · 冰世界",
          en: "Wet terran · Dry · Islands · Ice",
        },
      },
      {
        kind: "prose",
        eyebrow: { zh: "极端之境", en: "Extreme weather" },
        title: {
          zh: "熔岩与荒石，也配被认真记住",
          en: "Lava and barren stone deserve to be kept",
        },
        body: {
          zh: "愤怒、空洞、说不出口的夜晚——不必先把自己修成温柔。选一颗烈星收纳它：熔岩、无大气、小行星、气态巨物。Memory 只在真实时才值得信任；星卡让你日后看见：那段火，也曾是你。",
          en: "Anger, hollowness, nights without words—you need not sand yourself soft first. Keep them as fierce worlds: lava, airless rock, asteroid, gas giant. Memory earns trust only when it is honest; star cards let you see later that the fire was you, too.",
        },
      },
      {
        src: "/covers/starsay/planet-grid-extreme.gif",
        full: true,
        caption: {
          zh: "熔岩 · 无大气 · 小行星 · 气态巨行星",
          en: "Lava · Airless · Asteroid · Gas giant",
        },
      },
      {
        kind: "prose",
        eyebrow: { zh: "更远的宇宙", en: "Farther cosmos" },
        title: {
          zh: "问得更大时，星会往深处亮",
          en: "Ask larger, and stars light farther out",
        },
        body: {
          zh: "关于意义、消失、与「我究竟是谁」——当你 Ask anything，答案不必停在对话里。环带气态、恒星、黑洞与星系：集星把洞察收成可收藏的远方。看见自己被记住，你才更愿意继续聊，继续把内心宇宙长成河系。",
          en: "Meaning, vanishing, who you are—when you ask anything, the answer need not end in chat. Ringed gas, star, black hole, galaxy: Stars collect insight into a far place you can hold. Seeing what was kept makes you want to keep talking—and grow your inner universe into a river of light.",
        },
      },
      {
        src: "/covers/starsay/planet-grid-cosmic.gif",
        full: true,
        caption: {
          zh: "环带气态 · 恒星 · 黑洞 · 星系",
          en: "Ringed gas · Star · Black hole · Galaxy",
        },
      },
      {
        src: "/covers/starsay/sim-planets.jpg",
        caption: {
          zh: "Planets · 走进主题星系，选择此刻想探索的自己",
          en: "Planets · Enter a theme galaxy; choose which self to explore",
        },
      },
      {
        src: "/covers/starsay/sim-awareness.jpg",
        caption: {
          zh: "Awareness Feed · 碎片念头收成可回看的觉察记忆",
          en: "Awareness Feed · Scattered thoughts become awareness you can revisit",
        },
      },
      {
        src: "/covers/starsay/sim-stars.jpg",
        caption: {
          zh: "集星 · 洞察变成星卡，Memory 看得见",
          en: "Stars · Insights become cards—memory made visible",
        },
      },
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
