(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{92:function(e,t,a){"use strict";a.r(t);var l=a(0),r=a.n(l),i=a(104),n=a(4),c=a(97),o=a(99),s=a(85),m=function(e){var t=e.title,a=void 0===t?"[YOUR TITLE HERE]":t,l=e.description,i=void 0===l?"[YOUR DESCRIPTION HERE]":l,n=e.button_label,m=void 0===n?"[BUTTON LABEL HERE]":n,d=e.button_url,u=void 0===d?"#":d,v=e.image_url,p=void 0===v?"":v,b=e.image_alt,E=void 0===b?"":b,_=e.children;return r.a.createElement("header",{className:Object(c.a)(s.hero)},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:Object(c.a)("col col--6")},r.a.createElement("div",{className:s.hero_text},r.a.createElement("h1",null,a),r.a.createElement("h3",null,i),r.a.createElement(o.a,{className:Object(c.a)("button button--outline button--primary button--lg",s.hero_button),to:u},m))),r.a.createElement("div",{className:Object(c.a)("col col--6")},r.a.createElement("img",{src:p,alt:E}))),_))},d=a(86),u=function(){return r.a.createElement("div",{className:Object(c.a)(d.wave_wrap)},r.a.createElement("div",{className:Object(c.a)(d.wave_animation)},r.a.createElement("div",{className:Object(c.a)(d.wave_top)},r.a.createElement("div",{className:Object(c.a)(d.wave_bg,d.wave_bg_top)})),r.a.createElement("div",{className:Object(c.a)(d.wave_middle)},r.a.createElement("div",{className:Object(c.a)(d.wave_bg,d.wave_bg_middle)})),r.a.createElement("div",{className:Object(c.a)(d.wave_bottom)},r.a.createElement("div",{className:Object(c.a)(d.wave_bg,d.wave_bg_bottom)}))))},v=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.description,l=e.button_label,i=e.button_url,n=e.image_url,c=e.image_alt;return r.a.createElement(m,{title:t,description:a,button_label:l,button_url:i,image_url:n,image_alt:c},r.a.createElement(u,null))},t}(l.Component),p=a(211),b=a(87),E=function(e){var t=e.language,a=void 0===t?"javascript":t,l=e.code,i=void 0===l?"":l;return r.a.createElement("div",{className:Object(c.a)(b.code_snippet)},r.a.createElement(p.a,{language:a,text:i,showLineNumbers:!1,theme:p.b,wrapLines:!0,codeBlock:!0}))},_=a(88),g=function(e){var t=e.theme,a=void 0===t?"light":t,l=e.children;return r.a.createElement("div",{className:Object(c.a)("light"===a?_.theme_light:_.theme_dark)},l)},h=a(89),O=function(e){function t(){return e.apply(this,arguments)||this}Object(n.a)(t,e);var a=t.prototype;return a.render=function(){var e=this,t=this.props,a=t.title,l=void 0===a?"[TITLE HERE]":a,i=t.description,n=void 0===i?"[DESCRIPTION HERE]":i,o=t.code,s=void 0===o?"[CODE HERE]":o,m=t.features,d=void 0===m?[]:m;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{theme:"light"},r.a.createElement("div",{className:Object(c.a)("container")},r.a.createElement("div",{className:Object(c.a)("row")},r.a.createElement("div",{className:Object(c.a)("col col--6",h.description_col)},r.a.createElement("h3",null,l),r.a.createElement("p",{className:Object(c.a)(h.p_special)},n)),r.a.createElement("div",{className:Object(c.a)("col col--6",h.code_snippet)},r.a.createElement(E,{code:s}))))),r.a.createElement(g,{theme:"dark"},r.a.createElement("div",{className:Object(c.a)("container")},r.a.createElement("div",{className:Object(c.a)("row")},r.a.createElement("div",{className:Object(c.a)("col col--12")},r.a.createElement("h3",{className:Object(c.a)(h.h_special)},"Features")),d.map((function(t){return e.renderFeature(t)}))))))},a.renderFeature=function(e){var t=e.key,a=void 0===t?Math.random():t,l=e.title,i=e.description,n=e.image_url,o=e.image_alt;return r.a.createElement("div",{key:a,className:Object(c.a)("col col--4")},r.a.createElement("div",{className:Object(c.a)(h.feature_block)},r.a.createElement("img",{src:n,alt:o}),r.a.createElement("h4",null,l),r.a.createElement("p",null,i)))},t}(l.Component);t.default=function(){return r.a.createElement(i.a,{title:"Welcome",description:"Open source NodeJS framework for building protocol agnostic and scalable multiplayer servers"},r.a.createElement(v,{title:"Multiplayer framework",description:"Open source NodeJS framework for building protocol agnostic and scalable multiplayer servers",button_label:"Get Started",button_url:"/docs",image_url:"/img/gfx-rivalis.png",image_alt:"rivalis overview"}),r.a.createElement("main",null,r.a.createElement(O,{title:"Why Rivalis?",description:"The powerful API structure and extensibility of this framework will fit perfectly in every type of game. Rivalis is designed to support and solve most common problems when it comes to development of multiplayer game servers.",code:"const { Rivalis } = require('@rivalis/core')\nconst { WebSocketProtocol } = require('@rivalis/protocol-websocket')\nconst gameserver = new Rivalis({\n    adapter: null, // default: InMemoryAdapter,\n    protocols: [ new WebSocketProtocol() ]\n})\ngameserver.initialize()\n",features:[{image_url:"",image_alt:"",title:"Flexible",description:"Rivalis can work with one or multiple bidirectional web transfer protocols at same time."},{image_url:"",image_alt:"",title:"Consistent",description:"Rivalis provides OOTB consistent event ordering and a lot more helpful utilities."},{image_url:"",image_alt:"",title:"Open Source",description:"Rivalis is free to use and extend. Is licensed under the most permissive MIT License."}]})))}}}]);