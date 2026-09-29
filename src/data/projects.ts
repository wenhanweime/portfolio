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
  /** Homepage card blurb. Falls back to description. */
  summary?: { zh: string; en: string };
  techStack: string[];
  highlights: { zh: string[]; en: string[] };
  year: string;
  cover: string;
  /** Portrait posters should contain; default cover. */
  coverFit?: "cover" | "contain";
  gallery?: GalleryItem[];
  href?: string;
  hrefLabel?: { zh: string; en: string };
}

export const projects: Project[] = [
  {
    id: "herduck",
    name: { zh: "Herduck", en: "Herduck" },
    description: {
      zh: "面向人与 Agent 的持久工作层：把分散在会话、Agent、项目里的目标、状态、阻塞与下一步收成一件完整的 Work，换 Agent 也能接着干。",
      en: "The persistent work layer for Agents — keep Goal, Status, Blocker, and Next Steps whole across sessions and tools, so work stays ready to continue.",
    },
    summary: {
      zh: "Agent 的持久工作层",
      en: "The persistent work layer for Agents",
    },
    techStack: ["Rust", "Zig", "TypeScript", "Node.js", "Terminal UI"],
    highlights: {
      zh: [
        "Agents 执行；Herduck 让 Work 持续",
        "四视图：Work / Agents / Projects / Sessions",
        "开源 AGPL · github.com/wenhanweime/herduck",
      ],
      en: [
        "Agents execute; Herduck keeps the Work continuous",
        "Four views: Work / Agents / Projects / Sessions",
        "Open source AGPL · github.com/wenhanweime/herduck",
      ],
    },
    year: "2026",
    cover: "/covers/herduck-v4.jpg",
    gallery: [
      { src: "/covers/herduck/agents-v2.jpg", caption: { zh: "Agents 分屏", en: "Agents" } },
      { src: "/covers/herduck/work-v2.jpg", caption: { zh: "Work", en: "Work" } },
      { src: "/covers/herduck/projects-v2.jpg", caption: { zh: "Projects", en: "Projects" } },
      { src: "/covers/herduck/sessions-v2.jpg", caption: { zh: "Sessions", en: "Sessions" } },
    ],
    href: "https://github.com/wenhanweime/herduck",
    hrefLabel: { zh: "GitHub", en: "GitHub" },
  },
  {
    id: "starsay",
    name: { zh: "StarSay", en: "StarSay" },
    description: {
      zh: "你的心里藏着一整座宇宙。StarSay 不是又一个聊天框——主对话负责体验，旁路 Memory Agent 约每五轮轻轻对比过往、判断「这一刻值不值得留下」；日级 dreaming 把碎片收成自我认知；觉察流收集念头与情绪；集星把洞察变成可回看的星卡。Memory 不再是黑盒向量，而是你看得见、摸得着的星辰。Ask anything，点亮一颗星；Widget 把内心宇宙放在主屏幕上，让你愿意继续聊、继续被记住。",
      en: "Your mind holds a whole universe. StarSay is not another chat box—the main loop keeps the feel light, while a side-path Memory agent every few turns decides what is worth keeping. Daily dreaming compacts fragments into self-knowledge; the Awareness Feed gathers thoughts and feelings; Stars turn insights into cards you can revisit. Memory stops being a black-box vector and becomes something you can see. Ask anything. A star is born. Carry your inner universe on the home screen.",
    },
    summary: {
      zh: "把记忆长成看得见的宇宙",
      en: "Memory that grows into a visible universe",
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
        src: "/covers/starsay/sim-galaxy.jpg",
        full: true,
        caption: {
          zh: "主页银河 · 轻触星河，说说你的困惑——提问由此点亮成星",
          en: "Home galaxy · Touch the sky, ask anything—every question can light a star",
        },
      },
      {
        src: "/covers/starsay/widget.jpg",
        caption: {
          zh: "Widget · 内心宇宙放在主屏幕上，每天看见自己被记住",
          en: "Widget · Carry your inner universe on the home screen",
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
        src: "/covers/starsay/planet-grid-habitable-v2.gif",
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
        src: "/covers/starsay/planet-grid-extreme-v2.gif",
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
        src: "/covers/starsay/planet-grid-cosmic-v2.gif",
        full: true,
        caption: {
          zh: "环带气态 · 恒星 · 黑洞 · 星系",
          en: "Ringed gas · Star · Black hole · Galaxy",
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
          zh: "集星 · 洞察变成星卡，Memory 看得见、可回看",
          en: "Stars · Insights become cards—memory made visible",
        },
      },
    ],
  },
  {
    id: "particle-morph",
    name: { zh: "Particle Sky", en: "Particle Sky" },
    description: {
      zh: "千万粒光点织成一片可触摸的夜空。从真实星云与星系取样布局，形态在呼吸间平滑切换；轻轻拖动，视差让星河微微侧倾。每周一帧 NASA 新图，星空又长出新的样子。",
      en: "A sky woven from countless points of light. Layouts sampled from real nebulae and galaxies morph softly into one another; a gentle drag tilts the river of stars with light parallax. Each week a new NASA image arrives, and the sky grows another face.",
    },
    summary: {
      zh: "可触摸的 NASA 粒子夜空",
      en: "A touchable particle sky from NASA",
    },
    techStack: ["Vite", "TypeScript", "Three.js"],
    highlights: {
      zh: [
        "粒子模拟的可变换星空",
        "NASA 星云与星系形态平滑切换",
        "轻量 3D 视差，星河可侧倾",
        "每周更新一张 NASA 新图形态",
        "开源 · github.com/wenhanweime/particle-morph",
      ],
      en: [
        "A transformable sky made of particles",
        "Smooth morphs across NASA nebulae and galaxies",
        "Light 3D parallax—tilt the river of stars",
        "A new NASA image form each week",
        "Open source · github.com/wenhanweime/particle-morph",
      ],
    },
    year: "2026",
    cover: "/covers/particle-morph-v2.jpg",
    href: "https://wenhanweime.github.io/particle-morph/",
    hrefLabel: { zh: "打开演示", en: "Open demo" },
  },
  {
    id: "mira",
    name: { zh: "MIRA", en: "MIRA" },
    description: {
      zh: "Apple Vision Pro 原生应用：空间 UI、手势与 3D 场景里的发现 / 地图 / 社交面板。",
      en: "Native Vision Pro app — spatial UI, gesture, and 3D discovery / map / social panels.",
    },
    summary: {
      zh: "Vision Pro 上的空间发现",
      en: "Spatial discovery on Vision Pro",
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
    summary: {
      zh: "Markdown 一键成片",
      en: "From Markdown to finished video",
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
    coverFit: "contain",
  },
  {
    id: "us-stock-daily",
    name: { zh: "US Stock Daily", en: "US Stock Daily" },
    description: {
      zh: "把美股投研沉淀成可检索、可追踪、可复盘的研究站。「每日观察」聚合讨论，「深度研究」沉淀个股与产业链。仅供研究，非投资建议。",
      en: "Searchable research site for US equities — daily digests plus deeper notes on names and supply chains. Research only; not advice.",
    },
    summary: {
      zh: "可检索的美股研究站",
      en: "A searchable US equities research desk",
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
    hrefLabel: { zh: "打开站点", en: "Open site" },
  },
  {
    id: "autopublish",
    name: { zh: "Content Autopublish", en: "Content Autopublish" },
    description: {
      zh: "开源内容流水线：X Lists → LLM 写作 → Telegram 闸门 → Markdown 归档。",
      en: "Open-source pipeline: X Lists → LLM drafts → Telegram gate → Markdown archive.",
    },
    summary: {
      zh: "人审闸门的内容流水线",
      en: "A human-gated content pipeline",
    },
    techStack: ["Node.js", "Python", "Shell"],
    highlights: {
      zh: [
        "开源核心流水线（MIT）",
        "MD-only 默认，人工确认再发布",
        "热点审计与质量评测",
      ],
      en: [
        "Open-source core pipeline (MIT)",
        "MD-only by default; human-in-the-loop publish",
        "Hotness audit and quality evaluation",
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
    href: "https://github.com/wenhanweime/content-autopublish",
    hrefLabel: { zh: "GitHub", en: "GitHub" },
  }
];

export function getProject(id: string): Project | undefined {
  if (id === "staroracle") return projects.find((p) => p.id === "starsay");
  return projects.find((p) => p.id === id);
}
