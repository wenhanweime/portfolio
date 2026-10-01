import React from 'react';
import { createRoot } from 'react-dom/client';
import Settings from '@rentkoa/components/AgentSettingsSheet';
import Inbox from '@rentkoa/components/CreatorInboxSheet';
import History from '@rentkoa/components/CampaignHistorySheet';
import Inspiration from '@rentkoa/components/InspirationModule';
import '@rentkoa/index.css';

// Illustrative data only. Original components are imported without copying or editing them.
// No requests from this harness reach a backend, and no invitations can be sent.
const avatar = (letter: string, color: string) => 'data:image/svg+xml,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="80" height="80" rx="40" fill="${color}"/><text x="40" y="52" text-anchor="middle" font-family="sans-serif" font-size="32" fill="white">${letter}</text></svg>`);
const creator = {id:'example-lin',name:'小林的生活笔记',handle:'example-lin',avatar:avatar('林','#536458'),followers:3000,category:'生活方式',categories:'生活方式',subCategory:'日常体验',priceRange:'¥100–200',valuation:150,minPrice:120,description:'分享独居生活和日常工具，喜欢用真实经历讲产品。',negotiationStyle:'先确认体验与交付要求，再协商报价',tags:['生活','体验'],coverTitle:'让日常生活轻松一点'};
const productName = '心屿 AI 陪伴';
const campaign = {id:'example-campaign',title:`${productName}投放`,brandUserId:'example-brand',objective:'新品种草',productName,productDesc:'通过真实生活场景介绍睡前聊天与情绪陪伴。',targetAudience:'独居青年',contentFormat:'图文笔记',requirements:'真实体验，避免夸大效果',budget:500,status:'launched',summary:'示例任务：两位创作者分别处于已同意与等待回复状态。',createdAt:'2026-10-01T00:00:00Z',updatedAt:'2026-10-01T00:00:00Z',targets:[] as unknown[]};
const drafts = [
{id:'example-d1',title:`我用 ${productName} 解决了一个独居青年常见问题`,angle:'真实体验型',format:'图文笔记',coverCopy:`${productName} 真实体验`,hook:'如果你也是独居青年，这个方法可能比硬扛更省时间。',outline:['开头用一个生活方式场景切入痛点',`展示使用 ${productName} 前后的对比`,'拆解 3 个最容易感知的卖点','结尾引导评论区提问或领取试用'],cta:'评论区留下你的使用场景',note:campaign.requirements},
{id:'example-d2',title:`${productName} 值不值得试？我按 3 个维度测了一遍`,angle:'测评清单型',format:'图文笔记',coverCopy:`3 点测评 ${productName}`,hook:'我把它拆成体验、效率、成本三个维度，避免只看广告词。',outline:['先说明测评标准和适用人群','用真实任务演示核心能力','列出适合/不适合的人群边界'],cta:'收藏这份测评清单，试用前对照看',note:campaign.productDesc},
{id:'example-d3',title:`给独居青年的 ${productName} 入门指南`,angle:'教程种草型',format:'图文笔记',coverCopy:`${productName} 入门指南`,hook:'不用一次学完，先照着这 4 步跑通最关键流程。',outline:['定义目标用户','展示第一步','给出小技巧','引导保存'],cta:'保存后按步骤试一次',note:campaign.requirements},
];
campaign.targets=[{id:'example-t1',campaignId:campaign.id,kolId:creator.id,kol:creator,status:'accepted',matchScore:82,reasons:['日常生活内容与产品使用场景相近'],estimatedPrice:150,contentDrafts:drafts}, {id:'example-t2',campaignId:campaign.id,kolId:'example-ning',kol:{...creator,id:'example-ning',name:'阿宁的日常观察',avatar:avatar('宁','#70594f')},status:'sent',matchScore:78,reasons:['面向独居青年的生活内容'],estimatedPrice:160,contentDrafts:[],flow:{lastMessageAt:'2026-10-01T01:00:00Z',autoAcceptAt:'2026-10-02T01:00:00Z',nextNudgeAt:'2026-10-01T07:00:00Z',canNudge:true}}];
const inspiration = {id:'example-inspiration',title:'独居生活：把睡前十分钟留给自己',blogger:creator.name,references:['阿宁的日常观察'],category:'生活方式',qualityScore:82,updatedAt:'2026-10-01T00:00:00Z',content:'从下班后的真实生活切入，记录放下手机、整理情绪和准备入睡的过程。让产品出现在具体使用场景中。'};
const plan={titleOptions:['独居第三年，我开始认真过睡前十分钟','下班后不想说话的日子，我这样整理心情','把睡前的碎碎念留在这里'],hook:'关了灯，脑子却还在加班。我试着给自己留十分钟，把今天的事说完。',outline:['用一个真实的睡前片段开场','展示记录心情和回看对话的过程','说出哪些时刻有帮助，哪些仍想自己消化','用第二天的感受收尾'],coverCopy:'睡前十分钟\n给自己留一点空间',shotList:['夜灯下的房间全景','记录心情的手机画面','次日清晨的生活片段'],hashtags:['独居生活','睡前日常','情绪记录'],referenceAccounts:[creator.name],cta:'你通常用什么方式结束一天？'};
window.fetch = async (input) => {
 const url=String(input);
 const data=url.includes('/inspirations/content-plan') ? plan : url.includes('/inspirations') ? {items:[inspiration],source:'global',personalized:false,updatedAt:inspiration.updatedAt} : url.includes('/inbox') ? [{id:'example-message',status:'sent',campaign,target:campaign.targets[0],body:`你好，我们希望邀请你体验「${productName}」，以独居生活为切入点写一篇图文笔记。先确认你是否有兴趣，再沟通体验时间和具体要求。`}] : url.includes('/campaigns') ? [campaign] : [];
 return new Response(JSON.stringify({success:true,data}),{headers:{'content-type':'application/json'}});
};
const screen=new URLSearchParams(location.search).get('screen') || 'settings';
const noop=()=>{};
createRoot(document.getElementById('root')!).render(<>
<style>{'.koa-modal-backdrop{padding-top:64px;align-items:flex-start!important}.koa-modal-backdrop>div{height:calc(100vh - 64px)!important}'}</style>
<div style={{position:'fixed',top:20,left:24,right:24,zIndex:1000,color:'#cbd5e1',font:'13px system-ui',display:'flex',justifyContent:'space-between'}}><strong>rent KOA</strong><span>原界面 · 示例数据 · 未发送实际邀约</span></div>
{screen==='settings' ? <Settings agent={creator} onClose={noop} onSave={async()=>{}}/> : screen==='inbox' ? <Inbox kolId={creator.id} onClose={noop}/> : screen==='inspiration' ? <div style={{maxWidth:1024,margin:'0 auto',padding:'40px 24px'}}><Inspiration/></div> : <History onClose={noop}/>}
</>);
