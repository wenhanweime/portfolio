export interface Project {
  id: string;
  name: { zh: string; en: string };
  category: { zh: string; en: string };
  tagColor: string;
  description: { zh: string; en: string };
  techStack: string[];
  highlights: { zh: string[]; en: string[] };
  year: string;
}

export const projects: Project[] = [
  {
    id: "staroracle",
    name: { zh: "\u661f\u8c15 StarOracle", en: "StarOracle" },
    category: { zh: "\u6838\u5fc3\u4ea7\u54c1", en: "Core Product" },
    tagColor: "#3b82f6",
    description: {
      zh: "\u4e00\u6b3e\u661f\u5ea7\u4ea4\u4e92\u4ea7\u54c1\uff0c\u8ba9\u7528\u6237\u901a\u8fc7\u661f\u76d8\u4e0e AI \u5bf9\u8bdd\u63a2\u7d22\u81ea\u6211\u3002\u4ece\u4e00\u4e2a Web \u539f\u578b\u51fa\u53d1\uff0c\u8fed\u4ee3 6 \u6b21\u67b6\u6784\uff0c\u6210\u957f\u4e3a\u8986\u76d6 Web\u3001iOS\u3001Android \u7684\u5168\u5e73\u53f0\u4ea7\u54c1\uff0c\u62e5\u6709\u5b8c\u6574\u7684\u7528\u6237\u7cfb\u7edf\u4e0e\u661f\u76d8\u53ef\u89c6\u5316\u5f15\u64ce\u3002",
      en: "An astrology interactive product that lets users explore themselves through star charts and AI dialogue. Evolved from a web prototype through 6 architecture iterations into a full-platform product covering Web, iOS, and Android, with a complete user system and star chart visualization engine.",
    },
    techStack: ["React", "TypeScript", "React Native", "Capacitor", "Node.js", "Supabase", "UniApp", "Tailwind CSS"],
    highlights: {
      zh: ["\u4ece Web \u539f\u578b\u5230\u5168\u5e73\u53f0\u4ea7\u54c1\u7684\u5b8c\u6574\u8fed\u4ee3", "\u81ea\u7814\u661f\u76d8\u53ef\u89c6\u5316\u5f15\u64ce", "AI \u9a71\u52a8\u7684\u4e2a\u6027\u5316\u661f\u5ea7\u5bf9\u8bdd", "\u8de8 6 \u4e2a\u6280\u672f\u67b6\u6784\u7684\u6280\u672f\u6f14\u8fdb"],
      en: ["Full iteration from web prototype to full-platform product", "Proprietary star chart visualization engine", "AI-driven personalized astrology dialogue", "Technical evolution across 6 architectures"],
    },
    year: "2024",
  },
  {
    id: "mira",
    name: { zh: "MIRA", en: "MIRA" },
    category: { zh: "\u7a7a\u95f4\u8ba1\u7b97", en: "Spatial Computing" },
    tagColor: "#8b5cf6",
    description: {
      zh: "\u4e00\u6b3e\u8dd1\u5728 Apple Vision Pro \u4e0a\u7684\u539f\u751f\u5e94\u7528\uff0c\u63a2\u7d22\u7a7a\u95f4\u8ba1\u7b97\u5982\u4f55\u6539\u53d8\u4eba\u4eec\u4e0e\u6570\u5b57\u5185\u5bb9\u7684\u4ea4\u4e92\u65b9\u5f0f\u3002\u7528 Swift \u4ece\u96f6\u6784\u5efa\uff0c\u591a\u8f6e\u8fed\u4ee3\u63a2\u7d22\u7a7a\u95f4 UI\u3001\u624b\u52bf\u4ea4\u4e92\u4e0e 3D \u6e32\u67d3\u7684\u6700\u4f73\u5b9e\u8df5\u3002",
      en: "A native app for Apple Vision Pro, exploring how spatial computing changes our interaction with digital content. Built from scratch in Swift, with multiple iterations exploring spatial UI, gesture interaction, and 3D rendering best practices.",
    },
    techStack: ["Swift", "SwiftUI", "visionOS", "Xcode", "RealityKit"],
    highlights: {
      zh: ["\u63a2\u7d22\u7a7a\u95f4\u8ba1\u7b97\u7684\u4ea4\u4e92\u8303\u5f0f", "Vision Pro \u539f\u751f\u5f00\u53d1\u4f53\u9a8c", "\u4ece\u96f6\u6784\u5efa\u7a7a\u95f4 UI \u7ec4\u4ef6\u5e93", "\u591a\u8f6e\u6280\u672f\u65b9\u6848\u8fed\u4ee3"],
      en: ["Exploring spatial computing interaction paradigms", "Native Vision Pro development experience", "Built spatial UI component library from scratch", "Multiple technical approach iterations"],
    },
    year: "2025",
  },
  {
    id: "md2video",
    name: { zh: "md2video", en: "md2video" },
    category: { zh: "\u5185\u5bb9\u751f\u4ea7", en: "Content Production" },
    tagColor: "#f97316",
    description: {
      zh: "\u8ba9\u5199\u4f5c\u8005\u53ea\u9700\u4e13\u6ce8\u5185\u5bb9\uff0c\u5c31\u80fd\u81ea\u52a8\u751f\u6210\u5e26\u914d\u97f3\u3001\u5b57\u5e55\u548c\u52a8\u753b\u7684\u89c6\u9891\u3002\u57fa\u4e8e Remotion \u6784\u5efa\uff0c\u96c6\u6210 TTS \u8bed\u97f3\u5408\u6210\uff0c\u5c06 Markdown \u5199\u4f5c\u4e0e\u89c6\u9891\u5236\u4f5c\u7684\u9e38\u77e9\u6253\u7834\u3002",
      en: "Lets creators focus on content while automatically generating videos with narration, subtitles, and animations. Built on Remotion with TTS integration, breaking the barrier between Markdown writing and video production.",
    },
    techStack: ["React", "Remotion", "TypeScript", "Edge TTS", "FFmpeg"],
    highlights: {
      zh: ["\u5199\u4f5c\u4e0e\u89c6\u9891\u5236\u4f5c\u7684\u8fb9\u754c\u88ab\u6253\u7834", "\u4ece\u6587\u672c\u5230\u89c6\u9891\u7684\u5168\u81ea\u52a8\u5316", "TTS \u8bed\u97f3\u5408\u6210\u96c6\u6210", "\u591a\u6a21\u677f\u573a\u666f\u652f\u6301"],
      en: ["Breaking the boundary between writing and video production", "Full automation from text to video", "TTS voice synthesis integration", "Multi-template scene support"],
    },
    year: "2024",
  },
  {
    id: "kolbot",
    name: { zh: "KolBot", en: "KolBot" },
    category: { zh: "AI Agent", en: "AI Agent" },
    tagColor: "#8b5cf6",
    description: {
      zh: "\u4e00\u4e2a\u8ba9\u5185\u5bb9\u521b\u4f5c\u8005\u7528 AI \u7406\u89e3\u5e73\u53f0\u8d8b\u52bf\u7684\u5de5\u5177\u3002\u81ea\u52a8\u722c\u53d6\u5c0f\u7ea2\u4e66\u5185\u5bb9\uff0c\u7528 AI \u5206\u6790\u70ed\u95e8\u8bdd\u9898\u4e0e\u7ade\u54c1\u7b56\u7565\uff0c\u8ba9\u6570\u636a\u51b3\u7b56\u53d8\u5f97\u76f4\u89c2\u3002",
      en: "A tool that lets content creators understand platform trends with AI. Automatically crawls Xiaohongshu content, uses AI to analyze hot topics and competitor strategies, making data-driven decisions intuitive.",
    },
    techStack: ["Next.js", "React", "Node.js", "PostgreSQL", "Puppeteer"],
    highlights: {
      zh: ["AI \u9a71\u52a8\u7684\u5185\u5bb9\u8d8b\u52bf\u5206\u6790", "\u81ea\u52a8\u5316\u7ade\u54c1\u76d1\u63a7", "\u6570\u636e\u53ef\u89c6\u5316\u51b3\u7b56\u770b\u677f", "Next.js \u5168\u6808\u67b6\u6784"],
      en: ["AI-driven content trend analysis", "Automated competitor monitoring", "Data visualization decision dashboard", "Next.js full-stack architecture"],
    },
    year: "2024",
  },
  {
    id: "autopublish",
    name: { zh: "\u5185\u5bb9\u81ea\u52a8\u53d1\u5e03", en: "Content Automation" },
    category: { zh: "\u589e\u957f\u5de5\u5177", en: "Growth Tool" },
    tagColor: "#10b981",
    description: {
      zh: "\u4e00\u5957\u8ba9\u5185\u5bb9\u4ece\u5236\u4f5c\u5230\u53d1\u5e03\u5168\u6d41\u7a0b\u81ea\u52a8\u5316\u7684\u5de5\u5177\u94fe\u3002\u4e00\u6b21\u7f16\u8f91\uff0c\u540c\u6b65\u53d1\u5e03\u5230\u5c0f\u7ea2\u4e66\u3001\u5fae\u535a\u3001Twitter \u7b49\u591a\u4e2a\u5e73\u53f0\uff0c\u8ba9\u521b\u4f5c\u8005\u4e13\u6ce8\u5185\u5bb9\u800c\u975e\u64cd\u4f5c\u3002",
      en: "An automation toolchain that streamlines content from creation to publishing. Edit once, sync to Xiaohongshu, Weibo, Twitter and more, letting creators focus on content, not operations.",
    },
    techStack: ["Node.js", "Chrome Extension", "Shell Script", "HTML/CSS"],
    highlights: {
      zh: ["\u4e00\u6b21\u7f16\u8f91\u591a\u5e73\u53f0\u540c\u6b65", "Chrome \u6269\u5c55 + Web \u7ba1\u7406\u540e\u53f0", "\u5b9a\u65f6\u4efb\u52a1\u81ea\u52a8\u53d1\u5e03", "\u5185\u5bb9\u6a21\u677f\u4e0e\u6279\u91cf\u64cd\u4f5c"],
      en: ["Edit once, sync to multiple platforms", "Chrome extension + Web dashboard", "Scheduled automatic publishing", "Content templates and batch operations"],
    },
    year: "2024",
  },
];
