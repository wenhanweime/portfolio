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
    title: { zh: '用一张主页截图建立分身', en: 'Start a counterpart with a profile screenshot' },
    body: { zh: '创作者上传小红书主页截图，系统识别名称、粉丝数、简介和内容领域，给出单篇笔记的参考报价。确认后建立分身，并得到可以分享的公开主页。', en: 'A creator uploads a Xiaohongshu profile screenshot. RentKoa extracts profile details and suggests a price range per post. The creator can then create a counterpart with a shareable public profile.' },
    readImage: { zh: '看中央的上传入口。截图需要包含粉丝数、点赞数和简介；报价是参考估算。', en: 'The central upload area starts the flow. The screenshot should include follower counts, likes, and a bio. Pricing is an estimate.' },
    image: '/covers/rentkoa/01-create-agent.png',
  },
  {
    id: 'settings', group: 'workflow', source: 'example',
    title: { zh: '把自己的定位和报价底线告诉分身', en: 'Give the counterpart a profile and a price floor' },
    body: { zh: '创作者可以调整分身人设、谈判风格、最低报价和内容分类。品牌方接触到的分身因此有具体的创作者背景；商务对话会用到账号资料、人设和底价。', en: 'Creators can edit the counterpart’s persona, negotiation style, minimum price, and category. Business conversations use the account details, persona, and price floor as context.' },
    readImage: { zh: '从上往下看四个设置项。图中 ¥120 是示例创作者填写的底价。', en: 'Read the four settings from top to bottom. ¥120 is a sample creator’s minimum price.' },
    image: '/covers/rentkoa/04-agent-settings.png',
  },
  {
    id: 'brief', group: 'workflow', source: 'live',
    title: { zh: '品牌先说明这次想推广什么', en: 'Describe the campaign before looking for creators' },
    body: { zh: '填写产品、目标人群、投放说明和补充要求，再选择目标、预算及内容形式。访客可以先预览匹配结果，登录后再保存任务和发出邀约。', en: 'The brand supplies a product, audience, brief, and requirements, then chooses a goal, budget, and content format. Guests can preview recommendations before signing in to save a campaign and send invitations.' },
    readImage: { zh: '左侧定义产品和人群，右侧限定预算与内容形式。“寻找匹配分身”开始预览。', en: 'The left side describes the product and audience; the right sets budget and format. The matching button opens a preview.' },
    image: '/covers/rentkoa/02-campaign-brief.png',
  },
  {
    id: 'matching', group: 'workflow', source: 'live',
    title: { zh: '看清推荐理由，再决定邀请谁', en: 'Choose creators with the reasons in view' },
    body: { zh: '候选卡片把内容方向、参考报价、资料更新时间和推荐理由放在一起，并准备好邀约文案。品牌可以勾选创作者，查看合计费用；超过预算时页面会提示。', en: 'Candidate cards combine content fit, estimated price, profile freshness, and recommendation reasons with an invitation draft. Selecting creators updates the total cost, with a warning when it exceeds the budget.' },
    readImage: { zh: '右上角是已选人数和合计费用；每张卡片中部解释为什么推荐，底部是邀约草稿。分数是匹配参考。', en: 'The top right shows selection count and cost. Each card explains the recommendation and provides an invitation draft. Scores are guidance.' },
    image: '/covers/rentkoa/03-creator-matching.png',
  },
  {
    id: 'inbox', group: 'workflow', source: 'example',
    title: { zh: '创作者在收件箱回应合作', en: 'Respond to a campaign in the creator inbox' },
    body: { zh: '品牌通过一键推广发出的站内邀约进入收件箱。创作者可以查看产品、预算、内容形式和建议报价，然后接受、继续谈或拒绝。回应会更新对应的投放记录。', en: 'Campaign invitations arrive in the creator inbox with the product, budget, format, and estimated fee. The creator can accept, negotiate, or decline; the response updates the campaign record.' },
    readImage: { zh: '这张示例邀约把合作信息放在上方，三个回应按钮放在下方。', en: 'The example invitation shows campaign details above the three response choices.' },
    image: '/covers/rentkoa/05-creator-inbox.png',
  },
  {
    id: 'follow-up', group: 'workflow', source: 'example',
    title: { zh: '在同一处跟进回复，接着准备内容', en: 'Follow replies and prepare content in one place' },
    body: { zh: '“我的投放”汇总等待回复、已同意、协商中和已拒绝的创作者。待回应任务显示最近触达和催促时间；已同意的任务提供体验、测评和教程三种内容草案，可以复制后继续写。', en: 'My campaigns groups creators by response status. Pending invitations show contact and follow-up timing. Accepted collaborations offer experience, review, and tutorial draft directions to copy and develop.' },
    readImage: { zh: '绿色区域展示三份草案，下方展示待回应任务。当前草案使用结构化模板；计时规则见文末的版本说明。', en: 'The green panel contains three draft directions; the pending task appears below. These drafts use structured templates. Timing rules are explained at the end.' },
    image: '/covers/rentkoa/06-campaign-history.png',
  },
  {
    id: 'direct', group: 'studio', source: 'live',
    title: { zh: '选中一个创作者，先讨论合作方向', en: 'Explore an idea with an individual creator' },
    body: { zh: '“请他推广”打开单人合作面板，可以选择种草、测评或口播，填写目标、编辑邀约文案，也可以向分身提问。当前快捷面板用于准备沟通内容；正式站内邀约走上面的一键推广流程。', en: 'The individual collaboration panel offers post, review, and spoken-video formats, an editable invitation, and a question box for the counterpart. This panel prepares the conversation; recorded invitations use the campaign flow above.' },
    readImage: { zh: '看合作形式、推广目标和文案编辑区。截图展示入口，没有发送真实消息。', en: 'Look for the collaboration format, campaign goal, and editable draft. No real messages were sent for this capture.' },
    image: '/covers/rentkoa/09-direct-collaboration.png',
  },
  {
    id: 'benchmark', group: 'studio', source: 'live',
    title: { zh: '对照其他创作者，找值得借鉴的表达', en: 'Compare how other creators tell a story' },
    body: { zh: '创作对标从内容节奏、受众、选题和互动结构比较账号，给出可参考的表达建议。它帮助创作者找到学习方向，页面上的相似度属于辅助判断。', en: 'Creator benchmarking compares pacing, audience, topics, and interaction patterns, then suggests approaches to learn from. The similarity score is a supporting signal.' },
    readImage: { zh: '中部四项差异解释比较维度，底部给出创作建议。', en: 'The middle section explains the four comparison dimensions; the bottom provides a suggestion.' },
    image: '/covers/rentkoa/08-benchmark.png',
  },
  {
    id: 'ideas', group: 'studio', source: 'example',
    title: { zh: '把一个灵感展开成可以动手写的方案', en: 'Turn an idea into a writing or filming plan' },
    body: { zh: '灵感卡片列出参考创作者、选题方向和更新时间。展开内容方案后，可以拿到备选标题、开头、内容大纲、封面文案、拍摄镜头与标签，复制出来继续创作。', en: 'Inspiration cards identify reference creators, a topic, and an update time. Expanding a plan provides title options, an opening, outline, cover copy, shot list, and hashtags to copy and develop.' },
    readImage: { zh: '左侧是标题、开头和大纲；右侧是封面与拍摄提示。示例内容用来展示方案的结构。', en: 'Titles, opening, and outline are on the left; cover copy and filming notes are on the right. Example content illustrates the output structure.' },
    image: '/covers/rentkoa/07-content-plan.png',
  },
];

export const rentkoaNotes = {
  zh: {
    title: 'RentKoa 产品能力图解',
    intro: '品牌带着一个推广需求来，创作者带着自己的内容和报价来。RentKoa 把双方需要反复交换的信息放进分身与投放任务里，让找人、邀约、回应和内容准备能接起来。',
    flow: ['建立分身', '填写需求', '选择创作者', '回应邀约', '跟进与出稿'],
    workflow: '一次合作，如何往下走', studio: '围绕创作的其他工具',
    live: '线上界面', example: '原组件 · 示例数据', zoom: '打开原图',
    images: '线上截图拍于 2026-10-01。标注“示例数据”的画面由产品原组件渲染，用于展示设置、邀约和内容结构。',
    scopeTitle: '这个版本做到哪里',
    scope: [
      '已具备分身创建、资料配置、需求预览、候选推荐、站内邀约、回应记录、跟进和内容草案。分身公开主页可以分享；报价与收益估算帮助创作者了解参考区间。',
      '当前版本有“邀约 24 小时未拒绝或协商后自动同意”的规则，并设有 6 小时催促间隔；超时推进会在读取投放记录时检查。这是当前实现的规则，不等同于创作者本人确认。',
      '订单草案目前是三类模板。完整的多轮审稿、改稿版本管理、站外自动发布、付款结算和投放效果回收，尚未在本次核查中确认贯通。最终内容仍需要人审核与发布。',
      '匹配分数、相似度、参考报价与收益预估来自模型或规则计算，不能当作真实成交、实际收入或投放效果。',
    ],
    buildTitle: '我在这里做的工作',
    build: '从自己的小额商单经历出发，定义品牌与创作者两端的流程，再完成界面、服务端、分身上下文、任务状态和部署。最想验证的是：让 Agent 带着各自的背景和约束，参与一项会持续往返的合作。',
    download: '下载完整能力文档（Markdown）',
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
