"use strict";(self.webpackChunkmindhub_docs=self.webpackChunkmindhub_docs||[]).push([[628],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>f});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var d=r.createContext({}),c=function(e){var t=r.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=c(o),p=n,f=l["".concat(d,".").concat(p)]||l[p]||m[p]||s;return o?r.createElement(f,a(a({ref:t},u),{},{components:o})):r.createElement(f,a({ref:t},u))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,a=new Array(s);a[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[l]="string"==typeof e?e:n,a[1]=i;for(var c=2;c<s;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},4554:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const s={sidebar_position:5},a="Planejamento de Testes",i={unversionedId:"Documentos/planejamento-de-testes",id:"Documentos/planejamento-de-testes",title:"Planejamento de Testes",description:"| Data       | Vers\xe3o       | Descri\xe7\xe3o                     |",source:"@site/docs/Documentos/planejamento-de-testes.mdx",sourceDirName:"Documentos",slug:"/Documentos/planejamento-de-testes",permalink:"/mindhub-docs/docs/Documentos/planejamento-de-testes",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Documentos/planejamento-de-testes.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Processo do Projeto",permalink:"/mindhub-docs/docs/Documentos/processo-do-projeto"},next:{title:"Decis\xf5es do projeto",permalink:"/mindhub-docs/docs/decisoes-de-projeto"}},d={},c=[{value:"1. Introdu\xe7\xe3o",id:"1-introdu\xe7\xe3o",level:2},{value:"2. Testes de aceita\xe7\xe3o",id:"2-testes-de-aceita\xe7\xe3o",level:2},{value:"3. Testes Unit\xe1rios",id:"3-testes-unit\xe1rios",level:2}],u={toc:c},l="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(l,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"planejamento-de-testes"},"Planejamento de Testes"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Data"),(0,n.kt)("th",{parentName:"tr",align:null},"Vers\xe3o"),(0,n.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"01/09/2023"),(0,n.kt)("td",{parentName:"tr",align:null},"0.1"),(0,n.kt)("td",{parentName:"tr",align:null},"Cria\xe7\xe3o do documento")))),(0,n.kt)("h2",{id:"1-introdu\xe7\xe3o"},"1. Introdu\xe7\xe3o"),(0,n.kt)("p",null,"Para garantir a qualidade do sistema e tamb\xe9m a conformidade com os ",(0,n.kt)("a",{parentName:"p",href:"/docs/Documentos/documento-de-requisitos#31-requisitos-funcionais"},"requisitos funcionais")," e os ",(0,n.kt)("a",{parentName:"p",href:"/docs/Documentos/documento-de-requisitos#32-requisitos-n%C3%A3o-funcionais"},"requisitos n\xe3o funcionais"),", \xe9 necess\xe1rio realizar alguns tipos de testes."),(0,n.kt)("h2",{id:"2-testes-de-aceita\xe7\xe3o"},"2. Testes de aceita\xe7\xe3o"),(0,n.kt)("p",null,"Os testes de aceita\xe7\xe3o s\xe3o realizados para verificar se o sistema atende aos requisitos funcionais. "),(0,n.kt)("p",null,"Os testes de aceita\xe7\xe3o devem ser escritos usando BDD (Behavior-Driven Development). O BDD \xe9 uma metodologia de desenvolvimento de software que usa o formato Gherkin para descrever o comportamento desejado do sistema."),(0,n.kt)("h2",{id:"3-testes-unit\xe1rios"},"3. Testes Unit\xe1rios"),(0,n.kt)("p",null,"Os testes unit\xe1rios s\xe3o os testes mais b\xe1sicos e s\xe3o realizados para verificar o comportamento de uma unidade de c\xf3digo. No caso do sistema MindHub, os testes unit\xe1rios devem ser realizados para verificar o comportamento dos componentes individuais do sistema, como os controladores, servi\xe7os e modelos."),(0,n.kt)("p",null,"Os testes unit\xe1rios devem ser escritos usando TDD (Test-Driven Development). O TDD \xe9 uma metodologia de desenvolvimento de software que consiste em escrever os testes antes de implementar o c\xf3digo. Isso ajuda a garantir que o c\xf3digo seja escrito de forma test\xe1vel e que os testes sejam completos."))}m.isMDXComponent=!0}}]);