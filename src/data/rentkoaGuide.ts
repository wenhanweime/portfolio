import type { Lang } from '../types';

type Copy = Record<Lang, string>;
export interface RentkoaFeature {
  id: string;
  title: Copy;
  body: Copy;
  readImage: Copy;
  image: string;
  source: 'live' | 'example';
  group: 'workflow' | 'studio';
}

export const rentkoaFeatures: RentkoaFeature[] = [
  {
    id: 'create', group: 'workflow', source: 'live',
    title: { zh: '上传主页截图，创建 AI 分身', en: 'Start a counterpart with a profile screenshot' },
    body: { zh: '创作者上传小红书主页截图后，系统会识别账号名称、粉丝数、简介和内容领域，并估算单篇笔记的报价。确认资料后，就能创建分身，获得一个可以分享的主页。', en: 'A creator uploads a Xiaohongshu profile screenshot. RentKoa extracts profile details and suggests a price range per post. The creator can then create a counterpart with a shareable public profile.' },
    readImage: { zh: '从页面中央上传截图，截图需包含粉丝数、点赞数和简介。系统给出的报价仅供参考。', en: 'The central upload area starts the flow. The screenshot should include follower counts, likes, and a bio. Pricing is an estimate.' },
    image: '/covers/rentkoa/01-create-agent.png',
  },
  {
    id: 'settings', group: 'workflow', source: 'example',
    title: { zh: '设置分身人设和最低报价', en: 'Give the counterpart a profile and a price floor' },
    body: { zh: '创作者可以修改分身人设、谈判风格、最低报价和内容分类。与品牌沟通时，分身会参考账号资料、人设和底价来回答。', en: 'Creators can edit the counterpart’s persona, negotiation style, minimum price, and category. Business conversations use the account details, persona, and price floor as context.' },
    readImage: { zh: '页面从上到下列出四项设置，图中的 ¥120 是示例底价。', en: 'Read the four settings from top to bottom. ¥120 is a sample creator’s minimum price.' },
    image: '/covers/rentkoa/04-agent-settings.png',
  },
  {
    id: 'brief', group: 'workflow', source: 'live',
    title: { zh: '品牌填写推广需求', en: 'Describe the campaign before looking for creators' },
    body: { zh: '品牌先介绍产品，说明想面向谁推广、有什么具体要求，再设置推广目标、预算和内容形式。未登录也能预览推荐结果；保存任务、发送邀约则需要登录。', en: 'The brand supplies a product, audience, brief, and requirements, then chooses a goal, budget, and content format. Guests can preview recommendations before signing in to save a campaign and send invitations.' },
    readImage: { zh: '左侧填写产品和目标人群，右侧设置预算与内容形式。点击“寻找匹配分身”可预览推荐结果。', en: 'The left side describes the product and audience; the right sets budget and format. The matching button opens a preview.' },
    image: '/covers/rentkoa/02-campaign-brief.png',
  },
  {
    id: 'matching', group: 'workflow', source: 'live',
    title: { zh: '查看推荐理由，选择合作对象', en: 'Choose creators with the reasons in view' },
    body: { zh: '推荐结果会列出每位创作者的内容方向、参考报价、资料更新时间和推荐理由，并附上邀约草稿。品牌勾选创作者后，可以看到合计费用；超出预算时，页面会提醒。', en: 'Candidate cards combine content fit, estimated price, profile freshness, and recommendation reasons with an invitation draft. Selecting creators updates the total cost, with a warning when it exceeds the budget.' },
    readImage: { zh: '右上角显示已选人数和合计费用。每张卡片中间是推荐理由，底部是邀约草稿；匹配分数仅供筛选时参考。', en: 'The top right shows selection count and cost. Each card explains the recommendation and provides an invitation draft. Scores are guidance.' },
    image: '/covers/rentkoa/03-creator-matching.png',
  },
  {
    id: 'inbox', group: 'workflow', source: 'example',
    title: { zh: '创作者查看并回复邀约', en: 'Respond to a campaign in the creator inbox' },
    body: { zh: '品牌通过“一键推广”发出邀约后，创作者会在收件箱收到消息。看过产品、预算、内容形式和建议报价，就可以选择接受、继续协商或拒绝。品牌也能在投放记录中看到回复。', en: 'Campaign invitations arrive in the creator inbox with the product, budget, format, and estimated fee. The creator can accept, negotiate, or decline; the response updates the campaign record.' },
    readImage: { zh: '示例邀约的上半部分列出合作信息，下方是接受、协商和拒绝三个按钮。', en: 'The example invitation shows campaign details above the three response choices.' },
    image: '/covers/rentkoa/05-creator-inbox.png',
  },
  {
    id: 'follow-up', group: 'workflow', source: 'example',
    title: { zh: '跟进合作进度，准备内容草稿', en: 'Follow replies and prepare content in one place' },
    body: { zh: '在“我的投放”里，品牌可以查看哪些创作者还没回复、哪些已同意、哪些正在协商或已拒绝。尚未回复的邀约会显示最近联系和催促的时间；标记为已同意的合作则提供体验、测评、教程三种草稿，供后续修改。', en: 'My campaigns groups creators by response status. Pending invitations show contact and follow-up timing. Accepted collaborations offer experience, review, and tutorial draft directions to copy and develop.' },
    readImage: { zh: '绿色区域是按模板生成的三份草稿，下方是等待回复的邀约。自动同意和催促的时间规则见文末说明。', en: 'The green panel contains three draft directions; the pending task appears below. These drafts use structured templates. Timing rules are explained at the end.' },
    image: '/covers/rentkoa/06-campaign-history.png',
  },
  {
    id: 'direct', group: 'studio', source: 'live',
    title: { zh: '和某位创作者的分身聊聊合作', en: 'Explore an idea with an individual creator' },
    body: { zh: '点击“请他推广”，可以为这位创作者选择种草、测评或口播等合作形式，填写目标、编辑邀约，也可以直接向分身提问。目前，这里的发送按钮只会显示提示；要让对方在收件箱收到邀约，需要使用前面介绍的“一键推广”。', en: 'The individual collaboration panel offers post, review, and spoken-video formats, an editable invitation, and a question box for the counterpart. This panel prepares the conversation; recorded invitations use the campaign flow above.' },
    readImage: { zh: '图中依次是合作形式、推广目标和邀约编辑区，截图时没有发送真实消息。', en: 'Look for the collaboration format, campaign goal, and editable draft. No real messages were sent for this capture.' },
    image: '/covers/rentkoa/09-direct-collaboration.png',
  },
  {
    id: 'benchmark', group: 'studio', source: 'live',
    title: { zh: '参考其他创作者的内容和表达', en: 'Compare how other creators tell a story' },
    body: { zh: '“创作对标”会比较两个账号的内容节奏、受众、选题和互动方式，给出创作建议，帮助创作者发现可以借鉴的做法。页面上的相似度仅供参考。', en: 'Creator benchmarking compares pacing, audience, topics, and interaction patterns, then suggests approaches to learn from. The similarity score is a supporting signal.' },
    readImage: { zh: '页面中间列出两个账号在四个方面的差异，底部是具体的创作建议。', en: 'The middle section explains the four comparison dimensions; the bottom provides a suggestion.' },
    image: '/covers/rentkoa/08-benchmark.png',
  },
  {
    id: 'ideas', group: 'studio', source: 'example',
    title: { zh: '从选题开始，准备文案和拍摄提纲', en: 'Turn an idea into a writing or filming plan' },
    body: { zh: '灵感卡片会列出参考创作者、选题方向和更新时间。展开内容方案，就能查看备选标题、开头、内容大纲、封面文案、拍摄镜头和标签，复制后再按自己的想法修改。', en: 'Inspiration cards identify reference creators, a topic, and an update time. Expanding a plan provides title options, an opening, outline, cover copy, shot list, and hashtags to copy and develop.' },
    readImage: { zh: '左侧是标题、开头和大纲，右侧是封面文案与拍摄提示。图中内容为示例，用来说明一份方案包含哪些部分。', en: 'Titles, opening, and outline are on the left; cover copy and filming notes are on the right. Example content illustrates the output structure.' },
    image: '/covers/rentkoa/07-content-plan.png',
  },
];

export const rentkoaNotes = {
  zh: {
    title: 'RentKoa 能做什么',
    intro: '品牌可以在 RentKoa 上找创作者、发邀约、跟进合作。创作者则可以根据自己的账号资料创建 AI 分身，让它协助回答品牌的问题。下面用九张界面截图，介绍这些功能具体怎么用。',
    flow: ['创建分身', '填写需求', '选择创作者', '回复邀约', '跟进与起草'],
    workflow: '从寻找合作到准备内容', studio: '其他合作与创作工具',
    live: '线上截图', example: '产品界面 · 示例数据', zoom: '打开原图',
    images: '线上截图拍摄于 2026-10-01。标注“示例数据”的图片使用产品原有界面，填入虚构资料，用来说明设置、邀约和内容方案的具体功能。',
    scopeTitle: '目前能用的功能和待完善的部分',
    scope: [
      '目前可以创建和设置分身、分享主页、预览推广需求、查看推荐、发送和回复站内邀约，以及跟进合作、准备内容草稿。另有报价和收益估算，供创作者参考。',
      '目前有一条自动处理规则：邀约发出 24 小时后，如果没有收到拒绝或协商回复，系统会将其标记为已同意。系统在读取投放记录时检查是否超时；两次催促至少间隔 6 小时。自动标记不代表创作者本人已经确认合作。',
      '合作草稿目前按三类模板生成。多轮审稿、修改记录、站外自动发布、付款结算和推广效果统计，还没有确认能完整走通。内容仍需人工审核和发布。',
      '匹配分数、相似度、报价和收益都是模型或规则给出的估算，不代表真实成交、实际收入或推广效果。',
    ],
    buildTitle: '这个项目是怎么做出来的',
    build: '做 RentKoa 的想法来自我自己接推广的经历。我先梳理了品牌找人、创作者接单的过程，再完成页面、后端、分身对话、合作进度管理和上线部署。我想试试：如果 Agent 知道品牌要推广什么，也了解创作者的内容和报价，能不能帮双方少花一些时间沟通。',
    download: '下载完整功能介绍（Markdown）',
    bundle: '下载文档与全部截图',
  },
  en: {
    title: 'A guide to RentKoa',
    intro: 'Brands bring a brief; creators bring their work and pricing. RentKoa puts the information they repeatedly exchange into counterparts and campaign records, connecting discovery, invitations, responses, and content preparation.',
    flow: ['Create a counterpart', 'Write a brief', 'Choose creators', 'Respond', 'Follow up & draft'],
    workflow: 'How a collaboration moves forward', studio: 'Tools around the creative work',
    live: 'Live interface', example: 'Original component · Example data', zoom: 'Open full image',
    images: 'Live screens captured on October 1, 2026. Screens marked “Example data” use original product components to illustrate settings, invitations, and content structures.',
    scopeTitle: 'What this version supports',
    scope: [
      'Counterpart creation, profile configuration, campaign previews, recommendations, recorded invitations and responses, follow-up, and draft directions are implemented. Public profiles can be shared; pricing and revenue estimates provide reference ranges.',
      'The current version treats an invitation as accepted after 24 hours without a refusal or negotiation, with a six-hour follow-up cooldown. Timeout progression is checked when campaign records are read. This rule is not explicit creator confirmation.',
      'Campaign drafts currently use three templates. A complete revision workflow, versioned reviews, external publishing, payment settlement, and performance reporting were not verified as connected. People still review and publish the content.',
      'Match scores, similarity, pricing, and revenue estimates come from models or rules. They do not establish actual deals, income, or campaign results.',
    ],
    buildTitle: 'My work on the project',
    build: 'I started from my own experience with small creator partnerships, designed both sides of the flow, and built the interface, backend, counterpart context, task states, and deployment. I wanted to explore agents participating in an ongoing collaboration with their own context and constraints.',
    download: 'Download the complete guide (Chinese Markdown)',
    bundle: 'Download the guide with all screenshots',
  },
};
