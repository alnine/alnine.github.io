(this["webpackJsonptic-tac"]=this["webpackJsonptic-tac"]||[]).push([[0],{19:function(n,e,t){n.exports=t(31)},31:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),l=t(6),i=t.n(l),o=t(9),c=t(7),u=t(8),s=t(4),d=t(11),f=t(17),p=function(){return Array(9).fill({}).map((function(n,e){return{id:e,value:null}}))},m=function(n){if("undefined"===typeof n)return null;if(!Array.isArray(n)||0===n.length)return null;var e=null;return[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]].forEach((function(t){var r=Object(f.a)(t,3),a=r[0],l=r[1],i=r[2];n[a].value&&n[a].value===n[l].value&&n[a].value===n[i].value&&(e=n[a].value)})),e},y={history:[p()],currentBoard:0,currentPlayer:"X",setsPlayed:0,stepsLeft:9,result:{X:0,O:0}},b=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0,t=e.type,r=e.payload;switch(t){case"MAKE_STEP":var a="X"===r.value?"O":"X",l=n.history.slice(0,n.currentBoard+1),i=l[l.length-1],o=Object(d.a)(i);return o[r.index]={id:r.index,value:r.value},Object(s.a)({},n,{history:[].concat(Object(d.a)(l),[o]),currentBoard:n.currentBoard+1,currentPlayer:a,stepsLeft:n.stepsLeft-1});case"WRITE_RESULT":return Object(s.a)({},n,{history:[p()],currentBoard:0,currentPlayer:"X",setsPlayed:n.setsPlayed+1,stepsLeft:9,result:Object(s.a)({},n.result,Object(u.a)({},r.winner,n.result[r.winner]+1))});case"PREV_BOARD":return Object(s.a)({},n,{currentBoard:n.currentBoard-1,currentPlayer:"X"===n.currentPlayer?"O":"X",stepsLeft:n.stepsLeft+1});case"NEXT_BOARD":return Object(s.a)({},n,{currentBoard:n.currentBoard+1,currentPlayer:"X"===n.currentPlayer?"O":"X",stepsLeft:n.stepsLeft-1});default:return n}},h=Object(c.b)(b),v=t(1),g=t(2);function E(){var n=Object(v.a)(["\n  display: inline-block;\n  margin: 0;\n  padding: 0;\n  font: inherit;\n  border: none;\n  background: none;\n  cursor: pointer;\n  outline: none;\n\n  :disabled {\n    cursor: default;\n  }\n"]);return E=function(){return n},n}var x=g.a.button(E()),w=function(n){var e=n.label,t=n.className,r=n.disabled,l=n.onClick;return a.a.createElement(x,{className:t,onClick:l,disabled:r},e)},O=w;w.defaultProps={label:null,className:null,disabled:!1,onClick:null};function P(){var n=Object(v.a)(["\n  width: 2em;\n  height: 2em;\n  margin-top: -1px;\n  margin-right: -1px;\n  font-size: 1em;\n  font-weight: bold;\n  line-height: 2em;\n  text-align: center;\n  border: 1px solid #000000;\n"]);return P=function(){return n},n}var k=Object(g.a)(O)(P()),B=function(n){var e=n.value,t=n.onClick;return a.a.createElement(k,{label:e,onClick:t})},j=B;B.defaultProps={value:null};function C(){var n=Object(v.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 6em;\n  font-size: 1.5em;\n"]);return C=function(){return n},n}var L=g.a.div(C()),X=function(n){var e=n.plan,t=n.onCellClick;return a.a.createElement(L,null,e&&e.map((function(n,e){return a.a.createElement(j,{key:n.id,value:n.value,onClick:function(){return t(e)}})})))},R=X;X.defaultProps={plan:null,onCellClick:null};var A=function(n,e){return{type:"MAKE_STEP",payload:{index:n,value:e}}},N=function(n){return{type:"WRITE_RESULT",payload:{winner:n}}};function T(){var n=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 320px;\n  margin: 0 auto;\n  padding-top: 1em;\n  font-family: sans-serif;\n  font-size: 1.25rem;\n\n  p {\n    margin: 0;\n    text-align: center;\n    :first-child {\n      margin-top: 2em;\n    }\n  }\n\n  .history {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    margin-bottom: 1.5em;\n  }\n\n  .history-btn--prev {\n    ::before {\n      content: '\u2190';\n      display: inline-block;\n      margin-right: 5px;\n    }\n  }\n\n  .history-btn--next {\n    ::after {\n      content: '\u2192';\n      display: inline-block;\n      margin-left: 5px;\n    }\n  }\n"],["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 320px;\n  margin: 0 auto;\n  padding-top: 1em;\n  font-family: sans-serif;\n  font-size: 1.25rem;\n\n  p {\n    margin: 0;\n    text-align: center;\n    :first-child {\n      margin-top: 2em;\n    }\n  }\n\n  .history {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    margin-bottom: 1.5em;\n  }\n\n  .history-btn--prev {\n    ::before {\n      content: '\\u2190';\n      display: inline-block;\n      margin-right: 5px;\n    }\n  }\n\n  .history-btn--next {\n    ::after {\n      content: '\\u2192';\n      display: inline-block;\n      margin-left: 5px;\n    }\n  }\n"]);return T=function(){return n},n}var _=g.a.div(T());var S=Object(o.b)((function(n){return{history:n.history,currentBoard:n.currentBoard,currentPlayer:n.currentPlayer,setsPlayed:n.setsPlayed,stepsLeft:n.stepsLeft,result:n.result}}))((function(n){var e=n.history,t=n.currentBoard,r=n.currentPlayer,l=n.setsPlayed,i=n.stepsLeft,o=n.result,c=n.dispatch,u=m(e[t]);u&&c(N(u)),0===i&&c(N("O"));var s=e.length-1===t;return a.a.createElement(_,null,a.a.createElement("div",{className:"history"},a.a.createElement(O,{className:"history-btn--prev",label:"Step Back",disabled:!t,onClick:function(){c({type:"PREV_BOARD"})}}),a.a.createElement(O,{className:"history-btn--next",label:"Step Forward",disabled:s,onClick:function(){c({type:"NEXT_BOARD"})}})),a.a.createElement(R,{plan:e[t],onCellClick:function(n){e[t][n].value||c(A(n,r))}}),a.a.createElement("div",null,a.a.createElement("p",null,"Set played: ",l),a.a.createElement("p",null,"Player 1 wins: ",o.X),a.a.createElement("p",null,"Player 2 wins: ",o.O)))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(o.a,{store:h},a.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.af56f747.chunk.js.map