import{useMemo as e,useState as t}from"https://esm.sh/react@19.1.1";import{Fragment as n,jsx as r,js
xs as i}from"https://esm.sh/react@19.1.1/jsx-runtime";import a from"https://esm.sh/katex@0.16.22";va
r o=[{id:`t1-positive-rationals`,code:`1`,title:`Use Positive Rational Numbers`,blurb:`Add, subtract
, multiply, and divide fractions & decimals.`,gradeBand:`6`,color:`#3b82f6`},{id:`t2-integers-ration
als`,code:`2`,title:`Integers and Rational Numbers`,blurb:`Compare, order, and place signed numbers 
on a number line.`,gradeBand:`6`,color:`#8b5cf6`},{id:`t3-expressions`,code:`3`,title:`Numeric and A
lgebraic Expressions`,blurb:`Evaluate expressions and work with variables.`,gradeBand:`6`,color:`#06
b6d4`},{id:`t4-equations-inequalities`,code:`4`,title:`Represent and Solve Equations and Inequalitie
s`,blurb:`Solve one-step equations and graph simple inequalities.`,gradeBand:`6`,color:`#10b981`},{i
d:`t5-ratio-rate`,code:`5`,title:`Understand and Use Ratio and Rate`,blurb:`Write ratios, unit rates
, and scale quantities.`,gradeBand:`6`,color:`#f59e0b`},{id:`t6-percent`,code:`6`,title:`Understand 
and Use Percent`,blurb:`Convert between fractions, decimals, and percents.`,gradeBand:`6`,color:`#ef
4444`},{id:`t7-area-volume`,code:`7`,title:`Solve Area, Surface Area, and Volume`,blurb:`Rectangles,
 triangles, nets, and rectangular prisms.`,gradeBand:`6`,color:`#ec4899`},{id:`t8-data`,code:`8`,tit
le:`Display, Describe, and Summarize Data`,blurb:`Mean, median, mode, range, and simple data sets.`,
gradeBand:`6`,color:`#14b8a6`},{id:`t71-rational-ops`,code:`7-1`,title:`Rational Number Operations`,
blurb:`Add, subtract, multiply, and divide signed rationals.`,gradeBand:`7`,color:`#6366f1`},{id:`t7
2-proportions`,code:`7-2`,title:`Analyze and Use Proportional Relationships`,blurb:`Find missing val
ues and constant of proportionality.`,gradeBand:`7`,color:`#a855f7`},{id:`t73-percent-problems`,code
:`7-3`,title:`Analyze and Solve Percent Problems`,blurb:`Tax, tip, discount, markup, and percent cha
nge.`,gradeBand:`7`,color:`#f97316`},{id:`t74-equivalent-expr`,code:`7-4`,title:`Generate Equivalent
 Expressions`,blurb:`Combine like terms and use the distributive property.`,gradeBand:`7`,color:`#0e
a5e9`}];function s(e){return o.find(t=>t.id===e)}var c=`math-catchup-progress-v1`,l={version:1,byTop
ic:{},sessionsCompleted:0};function u(){try{let e=localStorage.getItem(c);if(!e)return{...l,byTopic:
{}};let t=JSON.parse(e);return t?.version===1?t:{...l,byTopic:{}}}catch{return{...l,byTopic:{}}}}fun
ction d(e){localStorage.setItem(c,JSON.stringify(e))}function f(e,t,n){let r=u(),i=r.byTopic[e]??{at
tempted:0,correct:0};return r.byTopic[e]={attempted:i.attempted+n,correct:i.correct+t,lastPracticed:
new Date().toISOString()},r.sessionsCompleted+=1,d(r),r}function p(e){return!e||e.attempted===0?null
:Math.round(100*e.correct/e.attempted)}function m(){return d({...l,byTopic:{}}),u()}function h({prog
ress:e,onBack:t,onPractice:n,onReset:a}){let s=o.map(t=>{let n=e.byTopic[t.id];return{t,stats:n,acc:
p(n)}}),c=s.filter(e=>e.acc!==null),l=c.length===0?null:Math.round(c.reduce((e,t)=>e+(t.acc??0),0)/c
.length),u=s.filter(e=>e.acc!==null&&e.acc<70).sort((e,t)=>(e.acc??0)-(t.acc??0));return i(`div`,{cl
assName:`page`,children:[i(`header`,{className:`hero`,children:[i(`div`,{children:[r(`button`,{type:
`button`,className:`btn btn-ghost`,onClick:t,children:`← Back`}),r(`h1`,{children:`Progress dashboar
d`}),i(`p`,{className:`subtitle`,children:[e.sessionsCompleted,` session`,e.sessionsCompleted===1?``
:`s`,` completed`,l===null?``:` · ~${l}% average across practiced topics`]})]}),r(`button`,{type:`bu
tton`,className:`btn btn-secondary`,onClick:()=>{confirm(`Reset all progress on this device? This ca
nnot be undone.`)&&a()},children:`Reset progress`})]}),u.length>0&&i(`section`,{className:`card sugg
est`,children:[r(`h2`,{children:`Weak topics to revisit`}),r(`div`,{className:`chip-row`,children:u.
map(({t:e,acc:t})=>i(`button`,{type:`button`,className:`chip`,style:{borderColor:e.color},onClick:()
=>n(e.id),children:[e.code,`. `,e.title,` · `,t,`%`]},e.id))})]}),r(`div`,{className:`card`,children
:i(`table`,{className:`stats-table`,children:[r(`thead`,{children:i(`tr`,{children:[r(`th`,{children
:`Topic`}),r(`th`,{children:`Tried`}),r(`th`,{children:`Correct`}),r(`th`,{children:`Accuracy`}),r(`
th`,{})]})}),r(`tbody`,{children:s.map(({t:e,stats:t,acc:a})=>i(`tr`,{children:[i(`td`,{children:[r(
`span`,{className:`dot`,style:{background:e.color},"aria-hidden":!0}),e.code,`. `,e.title]}),r(`td`,
{children:t?.attempted??0}),r(`td`,{children:t?.correct??0}),r(`td`,{children:a===null?r(`span`,{cla
ssName:`muted`,children:`—`}):i(`span`,{className:a>=70?`ok-text`:`bad-text`,children:[a,`%`]})}),r(
`td`,{children:r(`button`,{type:`button`,className:`btn btn-small`,onClick:()=>n(e.id),children:`Pra
ctice`})})]},e.id))})]})})]})}function g({progress:e,onPractice:t,onDashboard:n}){let a=o.map(t=>({t
opic:t,acc:p(e.byTopic[t.id])})).filter(e=>e.acc!==null&&e.acc<70).sort((e,t)=>(e.acc??100)-(t.acc??
100)).slice(0,3),s=o.filter(e=>e.gradeBand===`6`),c=o.filter(e=>e.gradeBand===`7`);return i(`div`,{c
lassName:`page`,children:[i(`header`,{className:`hero`,children:[i(`div`,{children:[r(`p`,{className
:`eyebrow`,children:`Math Catch-Up · Issaquah Math 1–2`}),r(`h1`,{children:`Practice what you missed
 — then crush Math 2 & 3`}),i(`p`,{className:`subtitle`,children:[`Pick a topic, solve `,16,` fresh 
problems, get instant feedback. Progress stays on this device.`]})]}),r(`button`,{type:`button`,clas
sName:`btn btn-secondary`,onClick:n,children:`Progress dashboard`})]}),a.length>0&&i(`section`,{clas
sName:`suggest card`,children:[r(`h2`,{children:`Suggested focus`}),r(`p`,{children:`These topics ne
ed a bit more practice:`}),r(`div`,{className:`chip-row`,children:a.map(({topic:e,acc:n})=>i(`button
`,{type:`button`,className:`chip`,style:{borderColor:e.color},onClick:()=>t(e.id),children:[e.code,`
. `,e.title,` · `,n,`%`]},e.id))})]}),i(`section`,{children:[r(`h2`,{className:`section-title`,child
ren:`Grade 6 foundations`}),r(`div`,{className:`topic-grid`,children:s.map(n=>r(_,{code:n.code,title
:n.title,blurb:n.blurb,color:n.color,acc:p(e.byTopic[n.id]),onClick:()=>t(n.id)},n.id))})]}),i(`sect
ion`,{children:[r(`h2`,{className:`section-title`,children:`Grade 7 extensions`}),r(`div`,{className
:`topic-grid`,children:c.map(n=>r(_,{code:n.code,title:n.title,blurb:n.blurb,color:n.color,acc:p(e.b
yTopic[n.id]),onClick:()=>t(n.id)},n.id))})]})]})}function _({code:e,title:t,blurb:n,color:a,acc:o,o
nClick:s}){return i(`button`,{type:`button`,className:`topic-card`,onClick:s,children:[r(`span`,{cla
ssName:`topic-code`,style:{background:a},children:e}),r(`span`,{className:`topic-title`,children:t})
,r(`span`,{className:`topic-blurb`,children:n}),i(`span`,{className:`topic-meta`,children:[o===null?
`Not started`:`${o}% accuracy`,` · Tap to practice`]})]})}function v(e,t){for(e=Math.abs(Math.trunc(
e)),t=Math.abs(Math.trunc(t));t;){let n=t;t=e%t,e=n}return e||1}function y(e,t){t<0&&(e=-e,t=-t);let
 n=v(e,t);return{n:e/n,d:t/n}}function b(e,t){let n=y(e,t);return n.d===1?String(n.n):`${n.n}/${n.d}
`}function x(e,t){return Math.floor(Math.random()*(t-e+1))+e}function S(e){return e[Math.floor(Math.
random()*e.length)]}function C(e){return e.trim().toLowerCase().replace(/[−–—]/g,`-`).replace(/\s+/g
,``).replace(/×/g,`*`).replace(/÷/g,`/`).replace(/≤/g,`<=`).replace(/≥/g,`>=`).replace(/≠/g,`!=`)}fu
