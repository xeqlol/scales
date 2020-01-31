(this.webpackJsonpscales=this.webpackJsonpscales||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(5),c=n.n(l),m=n(1),i=n(7),u=n(2),o=["torquoise","emerald","peter-river","carrot","alizarin","amethyst","sun-flower","white"],s=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B","B#"],f=s.length,p=[{name:"Minor",pattern:[0,2,3,5,7,8,10]},{name:"Harmonic minor",pattern:[0,2,3,5,7,8,11]},{name:"Melodic minor",pattern:[0,2,4,6,8,9,11]},{name:"Major",pattern:[0,2,4,5,7,9,11]},{name:"Harmonic major",pattern:[0,2,4,5,7,8,11]},{name:"Melodic major",pattern:[0,2,4,5,7,8,10]},{name:"Diminished",pattern:[0,2,3,5,6,8,9,11]},{name:"Minor arpeggio",pattern:[0,3,7]},{name:"Minor 7th arpeggio",pattern:[0,3,7,10]}],v=[{name:"Standard E",pattern:[4,11,7,2,9,4]},{name:"Drop D",pattern:[4,11,7,2,9,2]},{name:"Drop C#",pattern:[3,10,6,1,8,1]},{name:"Drop C",pattern:[2,9,5,0,7,0]}],g=function(e){return s[e]},d=(n(13),function(e){var t=e.strings,n=e.tuning,a=t.map((function(e){return Object(m.a)(e,1)[0]}));return r.a.createElement("div",{className:"bridge"},n.map((function(e,t){return r.a.createElement("div",{className:"bridge-note",key:t},r.a.createElement("div",{className:["bridge-label",a.includes(e)?"active":""].join(" ")},g(e)))})))}),E=(n(14),function(e){var t=e.strings;return r.a.createElement(r.a.Fragment,null,t[0].slice(1).map((function(e,n){return r.a.createElement("div",{className:"fret",key:n},r.a.createElement("div",{className:"fret-index"},n+1),r.a.createElement("div",{className:"fret-notes"},t.map((function(e,a){var l=t[a][n+1];return r.a.createElement("div",{className:"note",key:a},null!==l?r.a.createElement("div",{className:"label"},g(l)):null)}))))})))}),b=(n(15),function(e){var t=e.strings,n=e.tuning;return r.a.createElement("div",{className:"frets"},r.a.createElement(d,{strings:t,tuning:n}),r.a.createElement(E,{strings:t}))}),h=(n(16),function(e){var t=e.value,n=e.onChange,a=e.items,l=e.label;return r.a.createElement("div",{className:"select-container"},r.a.createElement("div",{className:"select-label"},l),r.a.createElement("div",{className:"select"},r.a.createElement("select",{value:t,onChange:function(e){return n(e.target.value)}},a.map((function(e,t){var n=e.name,a=e.value;return r.a.createElement("option",{value:a,key:t},n)})))))}),N=(n(17),function(){return r.a.createElement("div",{className:"credential-container"},"made for fun",r.a.createElement("div",{className:"credential-links"},r.a.createElement("a",{href:"https://twitter.com/xeqlol"},"twitter"),r.a.createElement("a",{href:"http://github.com/xeqlol"},"github"),r.a.createElement("a",{href:"https://t.me/xeqlol"},"telegram"),r.a.createElement("a",{href:"mailto:xeqlol@gmail.com"},"email")))}),j=(n(18),Object(u.a)("scale")),O=Object(u.a)("root"),C=Object(u.a)("frets-count"),M=Object(u.a)("tuning"),k=Object(u.a)("theme"),y=p.map((function(e,t){return{name:e.name,value:t}})),D=s.map((function(e,t){return{name:e,value:t}})),w=[12,18,22,24].map((function(e){return{name:e,value:e}})),x=v.map((function(e,t){return{name:e.name,value:t}})),q=[].concat(Object(i.a)(o.map((function(e,t){return{name:e,value:t}}))),[{name:"random",value:o.length}]),F=function(){var e=j(0),t=Object(m.a)(e,2),n=t[0],l=t[1],c=O(0),i=Object(m.a)(c,2),u=i[0],s=i[1],g=C(22),d=Object(m.a)(g,2),E=d[0],F=d[1],B=M(0),A=Object(m.a)(B,2),G=A[0],H=A[1],J=k(0),S=Object(m.a)(J,2),z=S[0],I=S[1],R=p[n].pattern,T=v[G].pattern,K=T.map((function(e){return function(e,t){return e.map((function(e){return t.includes(e)?e:null}))}(function(e,t){for(var n=[],a=0;a<t+1;a++)n.push((a+e)%(f-1));return n}(e,E),R.map((function(e){return(e+u)%(f-1)})))}));return Object(a.useEffect)((function(){document.body.className=z===o.length?o[Math.floor(Math.random()*o.length)]:o[z]})),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"controls"},r.a.createElement(h,{label:"Scale",items:y,value:n,onChange:function(e){return l(Number(e))}}),r.a.createElement(h,{label:"Root note",items:D,value:u,onChange:function(e){return s(Number(e))}}),r.a.createElement(h,{label:"Frets count",items:w,value:E,onChange:function(e){return F(Number(e))}}),r.a.createElement(h,{label:"Tuning",items:x,value:G,onChange:function(e){return H(Number(e))}}),r.a.createElement(h,{label:"Color theme",items:q,value:z,onChange:function(e){return I(Number(e))}})),r.a.createElement(b,{strings:K,tuning:T}),r.a.createElement(N,null))};n(19);c.a.render(r.a.createElement(F,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.5de96d8a.chunk.js.map