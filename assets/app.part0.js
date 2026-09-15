import{StrictMode as e,useCallback as t,useMemo as n,useState as r}from"https://esm.sh/react@19.1.1"
;import{createRoot as i}from"https://esm.sh/react-dom@19.1.1/client";import{Fragment as a,jsx as o,j
sxs as s}from"https://esm.sh/react@19.1.1/jsx-runtime";import c from"https://esm.sh/katex@0.16.22";(
function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`
))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserv
er(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===
`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.
integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credent
ials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}
function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=[{id:`t1-positive-rationa
ls`,code:`1`,title:`Use Positive Rational Numbers`,blurb:`Add, subtract, multiply, and divide fracti
ons & decimals.`,gradeBand:`6`,color:`#3b82f6`},{id:`t2-integers-rationals`,code:`2`,title:`Integers
 and Rational Numbers`,blurb:`Compare, order, and place signed numbers on a number line.`,gradeBand:
`6`,color:`#8b5cf6`},{id:`t3-expressions`,code:`3`,title:`Numeric and Algebraic Expressions`,blurb:`
Evaluate expressions and work with variables.`,gradeBand:`6`,color:`#06b6d4`},{id:`t4-equations-ineq
ualities`,code:`4`,title:`Represent and Solve Equations and Inequalities`,blurb:`Solve one-step equa
tions and graph simple inequalities.`,gradeBand:`6`,color:`#10b981`},{id:`t5-ratio-rate`,code:`5`,ti
tle:`Understand and Use Ratio and Rate`,blurb:`Write ratios, unit rates, and scale quantities.`,grad
eBand:`6`,color:`#f59e0b`},{id:`t6-percent`,code:`6`,title:`Understand and Use Percent`,blurb:`Conve
rt between fractions, decimals, and percents.`,gradeBand:`6`,color:`#ef4444`},{id:`t7-area-volume`,c
ode:`7`,title:`Solve Area, Surface Area, and Volume`,blurb:`Rectangles, triangles, nets, and rectang
ular prisms.`,gradeBand:`6`,color:`#ec4899`},{id:`t8-data`,code:`8`,title:`Display, Describe, and Su
mmarize Data`,blurb:`Mean, median, mode, range, and simple data sets.`,gradeBand:`6`,color:`#14b8a6`
},{id:`t71-rational-ops`,code:`7-1`,title:`Rational Number Operations`,blurb:`Add, subtract, multipl
y, and divide signed rationals.`,gradeBand:`7`,color:`#6366f1`},{id:`t72-proportions`,code:`7-2`,tit
le:`Analyze and Use Proportional Relationships`,blurb:`Find missing values and constant of proportio
nality.`,gradeBand:`7`,color:`#a855f7`},{id:`t73-percent-problems`,code:`7-3`,title:`Analyze and Sol
ve Percent Problems`,blurb:`Tax, tip, discount, markup, and percent change.`,gradeBand:`7`,color:`#f
97316`},{id:`t74-equivalent-expr`,code:`7-4`,title:`Generate Equivalent Expressions`,blurb:`Combine 
like terms and use the distributive property.`,gradeBand:`7`,color:`#0ea5e9`}];function u(e){return 
l.find(t=>t.id===e)}var d=`math-catchup-progress-v1`,f={version:1,byTopic:{},sessionsCompleted:0};fu
nction p(){try{let e=localStorage.getItem(d);if(!e)return{...f,byTopic:{}};let t=JSON.parse(e);retur
n t?.version===1?t:{...f,byTopic:{}}}catch{return{...f,byTopic:{}}}}function m(e){localStorage.setIt
em(d,JSON.stringify(e))}function h(e,t,n){let r=p(),i=r.byTopic[e]??{attempted:0,correct:0};return r
.byTopic[e]={attempted:i.attempted+n,correct:i.correct+t,lastPracticed:new Date().toISOString()},r.s
essionsCompleted+=1,m(r),r}function g(e){return!e||e.attempted===0?null:Math.round(100*e.correct/e.a
ttempted)}function _(){return m({...f,byTopic:{}}),p()}function v({progress:e,onBack:t,onPractice:n,
onReset:r}){let i=l.map(t=>{let n=e.byTopic[t.id];return{t,stats:n,acc:g(n)}}),a=i.filter(e=>e.acc!=
=null),c=a.length===0?null:Math.round(a.reduce((e,t)=>e+(t.acc??0),0)/a.length),u=i.filter(e=>e.acc!
==null&&e.acc<70).sort((e,t)=>(e.acc??0)-(t.acc??0));return s(`div`,{className:`page`,children:[s(`h
eader`,{className:`hero`,children:[s(`div`,{children:[o(`button`,{type:`button`,className:`btn btn-g
host`,onClick:t,children:`← Back`}),o(`h1`,{children:`Progress dashboard`}),s(`p`,{className:`subtit
le`,children:[e.sessionsCompleted,` session`,e.sessionsCompleted===1?``:`s`,` completed`,c===null?``
:` · ~${c}% average across practiced topics`]})]}),o(`button`,{type:`button`,className:`btn btn-seco
ndary`,onClick:()=>{confirm(`Reset all progress on this device? This cannot be undone.`)&&r()},child
ren:`Reset progress`})]}),u.length>0&&s(`section`,{className:`card suggest`,children:[o(`h2`,{childr
en:`Weak topics to revisit`}),o(`div`,{className:`chip-row`,children:u.map(({t:e,acc:t})=>s(`button`
,{type:`button`,className:`chip`,style:{borderColor:e.color},onClick:()=>n(e.id),children:[e.code,`.
 `,e.title,` · `,t,`%`]},e.id))})]}),o(`div`,{className:`card`,children:s(`table`,{className:`stats-
table`,children:[o(`thead`,{children:s(`tr`,{children:[o(`th`,{children:`Topic`}),o(`th`,{children:`
Tried`}),o(`th`,{children:`Correct`}),o(`th`,{children:`Accuracy`}),o(`th`,{})]})}),o(`tbody`,{child
ren:i.map(({t:e,stats:t,acc:r})=>s(`tr`,{children:[s(`td`,{children:[o(`span`,{className:`dot`,style
:{background:e.color},"aria-hidden":!0}),e.code,`. `,e.title]}),o(`td`,{children:t?.attempted??0}),o
(`td`,{children:t?.correct??0}),o(`td`,{children:r===null?o(`span`,{className:`muted`,children:`—`})
:s(`span`,{className:r>=70?`ok-text`:`bad-text`,children:[r,`%`]})}),o(`td`,{children:o(`button`,{ty
pe:`button`,className:`btn btn-small`,onClick:()=>n(e.id),children:`Practice`})})]},e.id))})]})})]})
}function y({progress:e,onPractice:t,onDashboard:n}){let r=l.map(t=>({topic:t,acc:g(e.byTopic[t.id])
})).filter(e=>e.acc!==null&&e.acc<70).sort((e,t)=>(e.acc??100)-(t.acc??100)).slice(0,3),i=l.filter(e
=>e.gradeBand===`6`),a=l.filter(e=>e.gradeBand===`7`);return s(`div`,{className:`page`,children:[s(`
header`,{className:`hero`,children:[s(`div`,{children:[o(`p`,{className:`eyebrow`,children:`Math Cat
ch-Up · Issaquah Math 1–2`}),o(`h1`,{children:`Practice what you missed — then crush Math 2 & 3`}),s
(`p`,{className:`subtitle`,children:[`Pick a topic, solve `,16,` fresh problems, get instant feedbac
k. Progress stays on this device.`]})]}),o(`button`,{type:`button`,className:`btn btn-secondary`,onC
lick:n,children:`Progress dashboard`})]}),r.length>0&&s(`section`,{className:`suggest card`,children
:[o(`h2`,{children:`Suggested focus`}),o(`p`,{children:`These topics need a bit more practice:`}),o(
`div`,{className:`chip-row`,children:r.map(({topic:e,acc:n})=>s(`button`,{type:`button`,className:`c
hip`,style:{borderColor:e.color},onClick:()=>t(e.id),children:[e.code,`. `,e.title,` · `,n,`%`]},e.i
d))})]}),s(`section`,{children:[o(`h2`,{className:`section-title`,children:`Grade 6 foundations`}),o
(`div`,{className:`topic-grid`,children:i.map(n=>o(b,{code:n.code,title:n.title,blurb:n.blurb,color:
n.color,acc:g(e.byTopic[n.id]),onClick:()=>t(n.id)},n.id))})]}),s(`section`,{children:[o(`h2`,{class
Name:`section-title`,children:`Grade 7 extensions`}),o(`div`,{className:`topic-grid`,children:a.map(
n=>o(b,{code:n.code,title:n.title,blurb:n.blurb,color:n.color,acc:g(e.byTopic[n.id]),onClick:()=>t(n
.id)},n.id))})]})]})}function b({code:e,title:t,blurb:n,color:r,acc:i,onClick:a}){return s(`button`,
{type:`button`,className:`topic-card`,onClick:a,children:[o(`span`,{className:`topic-code`,style:{ba
ckground:r},children:e}),o(`span`,{className:`topic-title`,children:t}),o(`span`,{className:`topic-b
lurb`,children:n}),s(`span`,{className:`topic-meta`,children:[i===null?`Not started`:`${i}% accuracy
`,` · Tap to practice`]})]})}function x(e,t){for(e=Math.abs(Math.trunc(e)),t=Math.abs(Math.trunc(t))
;t;){let n=t;t=e%t,e=n}return e||1}function S(e,t){t<0&&(e=-e,t=-t);let n=x(e,t);return{n:e/n,d:t/n}
