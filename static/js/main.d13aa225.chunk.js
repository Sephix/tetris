(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,i){e.exports=i(32)},28:function(e,t,i){},29:function(e,t,i){},30:function(e,t,i){},31:function(e,t,i){},32:function(e,t,i){"use strict";i.r(t);var h=i(0),n=i.n(h),a=i(17),r=i.n(a),w=i(4),l=i(6),c=(i(28),i(29),i(1)),o=i(2),s=i(8),u=i(7),d=i(9),m=(i(30),function(e){var t=e.grid,i=e.id,h=e.className,a=void 0===h?"default":h;return n.a.createElement("div",{className:"".concat(a," grid")},t.map(function(e,t){return n.a.createElement("p",{className:"grid-row",key:"".concat(i,"r").concat(t)},e.map(function(e,h){return n.a.createElement("b",{className:e,key:"".concat(i).concat(t).concat(h)})}))}))}),f=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.savedCell,i=e.nextCell;return n.a.createElement("div",{className:"left-info"},n.a.createElement("div",{className:"next-cell"},n.a.createElement(m,{grid:i,id:"R"}),n.a.createElement("p",null,"Next")),n.a.createElement("div",{className:"save-cell"},n.a.createElement("p",null,"Saved"),n.a.createElement(m,{grid:t,id:"G"})))}}]),t}(n.a.Component),v=Object(w.b)(function(e){return{savedCell:e.savedCell,nextCell:e.nextCell}})(f),p=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.gameState,i=e.gameLevel,h=e.gameScore;return n.a.createElement("div",{className:"right-info"},n.a.createElement("div",null,""===t?"Appuyer sur Start":t),n.a.createElement("div",null,"Level: ",i),n.a.createElement("div",null,"Score: ",h))}}]),t}(n.a.Component),E=Object(w.b)(function(e){return{gameState:e.gameState,gameLevel:e.gameLevel,gameScore:e.gameScore}})(p),g=(i(31),-1),y=null,C=function(e){var t=e.children,i=e.type,h=e.input,a=e.action,r=e.id,w=function(e){-1!==g&&(clearInterval(g),g=-1)},l=function(e,t){null===y&&(y=e.type),"single"===i?e.type===y&&a(t):"repeat"===i&&(document.addEventListener("mouseup",w),document.addEventListener("mouseout",w),document.addEventListener("touchleave",w),document.addEventListener("touchcancel",w),document.addEventListener("touchend",w),e.type===y&&a(t),-1===g&&(g=setInterval(function(){return a(t)},100)))};return n.a.createElement("span",{id:r,className:"video-game-button",onTouchStart:function(e){return l(e,h)},onMouseDown:function(e){return l(e,h)}},t)},S=10,A="green",G="blue",b="purple",R="yellow",k="black",O=[["white","white","white","white","white","white","white","white","white","white"],["white","white","white","white","white","white","white","white","white","white"],["white","white","white","white","white","white","white","white","white","white"],["white","white","white","white","white","white","white","white","white","white"],["white","white","white","white","white","white","white","white","white","white"],["white","white","white","white","white","white","white","white","white","white"],["white","white","white","white","white","white","white","white","white","white"],["white","white","white","white","white","white","white","white","white","white"],["white","white","white","white","white","white","white","white","white","white"],["white","white","white","white","white","white","white","white","white","white"],["white","white","white","white","white","white","white","white","white","white"],["white","white","white","white","white","white","white","white","white","white"],["white","white","white","white","white","white","white","white","white","white"],["white","white","white","white","white","white","white","white","white","white"],["white","white","white","white","white","white","white","white","white","white"],["white","white","white","white","white","white","white","white","white","white"],["white","white","white","white","white","white","white","white","white","white"],["white","white","white","white","white","white","white","white","white","white"],["white","white","white","white","white","white","white","white","white","white"],["white","white","white","white","white","white","white","white","white","white"]],T=[["white","white","white","white","white","white","white","white","white","white"],["white",k,"white","white","white","white","white","white","white","white"],["white",k,"white","white","white","white","white","white","white","white"],["white",k,"white","white","white","white","white","white","white","white"],["white",k,"white","white","white","white","white","white","white","white"],["white",k,k,k,"white","white",k,k,k,"white"],["white","white","white","white","white","white",k,"white","white","white"],["white",k,k,k,"white","white",k,k,k,"white"],["white",k,"white",k,"white","white","white","white",k,"white"],["white",k,"white",k,"white","white",k,k,k,"white"],["white",k,"white",k,"white","white","white","white","white","white"],["white",k,k,k,"white","white","white","white","white","white"],["white","white","white","white","white","white",k,k,k,"white"],["white",k,k,k,"white","white",k,"white","white","white"],["white",k,"white",k,"white","white",k,k,"white","white"],["white",k,"white",k,"white","white",k,"white","white","white"],["white",k,"white",k,"white","white",k,k,k,"white"],["white",k,k,k,"white","white","white","white","white","white"],["white","white","white","white","white","white","white","white","white","white"],["white","white","white","white","white","white","white","white","white","white"]],L=[["white","white","white","white"],["white","white","white","white"],["white","white","white","white"],["white","white","white","white"]],P=[[A,A,"white","white"],[A,A,"white","white"],["white","white","white","white"],["white","white","white","white"]],N=[[G,"white","white","white"],[G,"white","white","white"],[G,"white","white","white"],[G,"white","white","white"]],j=[["white","orange","orange","white"],["orange","orange","white","white"],["white","white","white","white"],["white","white","white","white"]],D=[[b,b,"white","white"],["white",b,b,"white"],["white","white","white","white"],["white","white","white","white"]],_=[["white","cyan","white","white"],["cyan","cyan","cyan","white"],["white","white","white","white"],["white","white","white","white"]],F=[[R,"white","white","white"],[R,R,R,"white"],["white","white","white","white"],["white","white","white","white"]],M=[["white","white","red","white"],["red","red","red","white"],["white","white","white","white"],["white","white","white","white"]],q=function(){function e(){Object(c.a)(this,e),this.cell=[[]],this.isAlive=!0,this.cellHeight=0,this.cellWidth=0,this.rowPos=-1,this.randomCellSelection(),this.findCellSize(),this.colPos=Math.floor(Math.random()*(S-this.cellWidth+1))}return Object(o.a)(e,[{key:"moveLeft",value:function(e){this.willCollide(e,this.rowPos,this.colPos-1)||(this.prevCol=this.colPos,this.colPos--)}},{key:"moveRight",value:function(e){this.willCollide(e,this.rowPos,this.colPos+1)||(this.prevCol=this.colPos,this.colPos++)}},{key:"moveDown",value:function(e){this.willCollide(e.deadGrid,this.rowPos+1,this.colPos)?(this.isAlive=!1,this.rowPos<this.cellHeight-1&&e.setLost()):(this.prevRow=this.rowPos,this.rowPos+=1)}},{key:"rotate",value:function(e){for(var t=L.map(function(e){return e.map(function(e){return e})}),i=this.cell.map(function(e){return e.map(function(e){return e})}),h=this.cellHeight;h>0;h--)for(var n=this.cellWidth;n>0;n--)t[this.cellWidth-n][this.cellHeight-h]=i[h-1][this.cellWidth-n];var a=this.cell.map(function(e){return e.map(function(e){return e})});this.cell=t.map(function(e){return e.map(function(e){return e})}),this.findCellSize();for(var r=0;r<this.cellWidth;r++)if(!this.willCollide(e,this.rowPos,this.colPos-r)){this.colPos-=r;break}this.willCollide(e,this.rowPos,this.colPos)&&(this.cell=a.map(function(e){return e.map(function(e){return e})}),this.findCellSize())}},{key:"willCollide",value:function(e,t,i){if(S-this.cellWidth<i||i<0||t>19)return!0;for(var h=this.cellHeight-1>t?t+1:this.cellHeight,n=0;n<h;n++)for(var a=0;a<this.cellWidth;a++)if("white"!==e[t-n][i+a]&&"white"!==this.cell[this.cellHeight-1-n][a])return!0;return!1}},{key:"findCellSize",value:function(){for(var e=0;e<4;e++)for(var t=0;t<4;t++)"white"!==this.cell[e][t]&&(this.cellHeight=e+1);for(var i=0;i<4;i++)for(var h=0;h<4;h++)"white"!==this.cell[h][i]&&(this.cellWidth=i+1)}},{key:"resetRow",value:function(){this.rowPos=-1}},{key:"randomCellSelection",value:function(){var t=null;do{t=Math.floor(Math.random()*Math.floor(7))}while(t===e.previousCell);switch(e.previousCell=t,t){case 0:this.cell=P;break;case 1:this.cell=N;break;case 2:this.cell=j;break;case 3:this.cell=D;break;case 4:this.cell=_;break;case 5:this.cell=F;break;case 6:this.cell=M}}}]),e}();q.previousCell=null;var x=q,H=i(3),W=function(){function e(){Object(c.a)(this,e),this.livingCell=!1,this.intScore=0,this.score=0,this.previousScore=0,this.level=1,this.grid=e.generateGrid([]),this.deadGrid=e.generateGrid([]),this.lost=!1}return Object(o.a)(e,[{key:"setScore",value:function(e){this.score+=e*this.level,this.intScore+=e,this.intScore>this.previousScore+50&&(this.level++,this.previousScore+=this.intScore-(this.previousScore+50)+50)}},{key:"setLost",value:function(){this.lost=!0}},{key:"wipeActiveGrid",value:function(){this.grid=this.deadGrid.map(function(e){return e.map(function(e){return e})})}},{key:"renderCelltoGrid",value:function(e){if(this.livingCell&&!this.lost){var t=e.cell,i=e.cellHeight,h=e.cellWidth,n=e.rowPos,a=e.colPos,r=e.isAlive;if(r){for(var w=this.deadGrid.map(function(e){return e.map(function(e){return e})}),l=i-1>n?n+1:i,c=0;c<l;c++)for(var o=a;o<a+h;o++)"white"!==t[i-1-c][o-a]&&(w[n-c][o]=t[i-1-c][o-a]);this.grid=w}else r||(this.deadGrid=this.grid.map(function(e){return e.map(function(e){return e})}))}}},{key:"addCell",value:function(){this.livingCell||this.lost||(this.livingCell=!0)}},{key:"shouldGridDestruct",value:function(){return this.grid.map(function(e){return e.map(function(e){return e})}).reduce(function(e,t,i){return t.filter(function(e,t,i){return i&&"white"!==e}).length===S&&(e=[].concat(Object(H.a)(e),[i])),e},[]).length>0}},{key:"getTempGrid",value:function(){for(var e=this.grid.map(function(e){return e.map(function(e){return e})}),t=[],i=0;i<S;i++)t=[].concat(Object(H.a)(t),["white"]);var h=e.reduce(function(e,t,i){return t.filter(function(e,t,i){return i&&"white"!==e}).length===S&&(e=[].concat(Object(H.a)(e),[i])),e},[]);return h.reverse(),h.forEach(function(i){return e[i]=t}),e}},{key:"handleRowDestruction",value:function(){var t=this.grid.map(function(e){return e.map(function(e){return e})}),i=t.reduce(function(e,t,i){return t.filter(function(e,t,i){return i&&"white"!==e}).length===S&&(e=[].concat(Object(H.a)(e),[i])),e},[]);i.reverse(),this.setScore(i.length*i.length),i.forEach(function(e){return t.splice(e,1)}),t!==this.grid&&(this.grid=t),this.grid=e.generateGrid(this.grid).map(function(e){return e.map(function(e){return e})}),this.deadGrid=this.grid}}],[{key:"generateGrid",value:function(e){for(var t=[],i=e.length;i<20;i++){for(var h=[],n=0;n<S;n++)h=[].concat(Object(H.a)(h),["white"]);t=[].concat(Object(H.a)(t),[h])}return[].concat(Object(H.a)(t),Object(H.a)(e))}}]),e}(),B=function(e){return{type:"REFRESH_GRID",payload:e}},z=function(e){return{type:"REFRESH_NEXT_CELL",payload:e}},I={a:"BA",z:"BZ",q:"BQ",s:"BS",d:"BD"},V=["a","z","q","s","d"],J=-1,Q=null;function U(e){var t=e.key.toLowerCase();"a"!==t&&"z"!==t&&"q"!==t&&"s"!==t&&"d"!==t||(e.key!==Q&&Z(),-1===J&&(document.getElementById(I[e.key.toLowerCase()]).className+=" active",Q=t,"a"!==t&&"z"!==t?(me(t),J=setInterval(function(){return me(t)},90)):(Q=t,me(t),J=0)))}function Z(e){e&&V.some(function(t){return t===e.key.toLowerCase()})&&document.getElementById(I[e.key.toLowerCase()]).classList.remove("active");-1!==J&&(clearTimeout(J),J=-1)}var X=function(e,t){var i=e,h=19,n=0;requestAnimationFrame(function e(a){if(h>=0){if(a-n>0){n=a;for(var r=0;r<S;r++)i[h][r]="black";ye.dispatch(B(i)),-1===--h&&t()}requestAnimationFrame(e)}})},K=function(e,t){var i=e,h=0,n=0;requestAnimationFrame(function e(a){if(n<20){if(a-h>0){h=a;for(var r=0;r<S;r++)i[n][r]="white";ye.dispatch(B(i)),20===++n&&t()}requestAnimationFrame(e)}else t()})},Y=1,$=function(){Y+=1},ee={gameGrid:null,cell:null,nextCell:null,isSavedCell:null,isStarted:null,isPaused:null},te=function(){ee.gameGrid=new W,ee.cell=new x,ee.nextCell=new x,ee.savedCell={cell:L},ee.isSavedCell=!1,ee.isStarted=!1,ee.isPaused=!1,ee.gameGrid.addCell()},ie=function(){te(),ye.dispatch({type:"GAME_RESTARTED"}),function(e){if(!he){var t=e.map(function(e){return e.map(function(e){return e})});Y=1,requestAnimationFrame(function e(i){Y&&(ne(!0),i-0>100&&(1===Y&&(X(t,$),Y++),3===Y&&(K(t,$),Y++)),Y>5&&(ne(!1),Y=0),requestAnimationFrame(e))})}}(ee.gameGrid.grid)},he=!1,ne=function(e){he=e},ae=0,re=function e(t){var i=ee.gameGrid.level<10?120*ee.gameGrid.level:1080;if(ee.cell&&!ee.isPaused&&!he&&!ee.gameGrid.lost){var h=t;h-ae>1200-i&&(me("DOWN"),ae=h),requestAnimationFrame(e)}},we=function(){ee.isStarted?ee.isPaused&&le():(te(),ee.isStarted=!0,ye.dispatch(z(ee.nextCell.cell)),ye.dispatch({type:"GAME_STARTED"}),document.onkeypress=U,document.onkeyup=Z,requestAnimationFrame(re))},le=function(){ee.isStarted&&(ee.isPaused?(ee.isPaused=!1,requestAnimationFrame(re),ye.dispatch({type:"GAME_STARTED"})):(ee.isPaused=!0,ye.dispatch({type:"GAME_PAUSED"})))},ce=1,oe=function(){ce+=1},se=0,ue=0,de=function(e,t){requestAnimationFrame(function i(h){var n=h;se<7&&n-ue>=100?(se%2!==0&&se<6?ye.dispatch(B(e)):se<6&&ye.dispatch(B(t.grid)),ue=n,se++,requestAnimationFrame(i)):se>=7?(t.handleRowDestruction(),ye.dispatch(B(t.grid)),ye.dispatch({type:"GAME_SCORE",payload:t.score}),ye.dispatch({type:"GAME_LEVEL",payload:t.level}),se=0,ne(!1),requestAnimationFrame(re)):se<7&&requestAnimationFrame(i)})},me=function(e){if(ee.isStarted&&!ee.gameGrid.lost&&!ee.isPaused&&!ee.gameGrid.lost&&!he){if(ee.cell.isAlive||ee.gameGrid.lost||(ee.cell=ee.nextCell,ee.nextCell=new x,ye.dispatch(z(ee.nextCell.cell))),ee.cell)switch(e){case"a":if(ee.isSavedCell){var t=ee.savedCell;ee.savedCell=ee.cell,ee.cell=t,ee.savedCell.resetRow()}else ee.gameGrid.wipeActiveGrid(),ee.savedCell=ee.cell,ee.savedCell.resetRow(),ee.cell=ee.nextCell,ee.nextCell=new x,ee.isSavedCell=!0,ye.dispatch(z(ee.nextCell.cell));ye.dispatch({type:"REFRESH_SAVED_CELL",payload:ee.savedCell.cell});break;case"s":case"DOWN":ee.cell.moveDown(ee.gameGrid);break;case"d":case"RIGHT":ee.cell.moveRight(ee.gameGrid.deadGrid);break;case"q":case"LEFT":ee.cell.moveLeft(ee.gameGrid.deadGrid);break;case"z":case"ROTATE":ee.cell.rotate(ee.gameGrid.deadGrid)}ee.gameGrid.lost&&(ye.dispatch({type:"GAME_LOST"}),setTimeout(function(){return function(e){var t=e.map(function(e){return e.map(function(e){return e})});ce=1;var i=0,h=0,n=function e(t){i<10&&(t-h>250&&(i%2!==0?ye.dispatch(B(T)):ye.dispatch(B(O)),h=t,i++),requestAnimationFrame(e))};requestAnimationFrame(function e(i){ce&&(i-0>100&&(1===ce&&(X(t,oe),ce++),3===ce&&(K(t,oe),ce++),5===ce&&requestAnimationFrame(n)),requestAnimationFrame(e))})}(ee.gameGrid.grid)},250)),ee.gameGrid.renderCelltoGrid(ee.cell),ee.cell.isAlive||ee.gameGrid.shouldGridDestruct()&&(de(ee.gameGrid.getTempGrid(),ee.gameGrid),ne(!0)),ye.dispatch(B(ee.gameGrid.grid))}},fe=function(){return n.a.createElement("div",{className:"controls-box"},n.a.createElement("div",{className:"controls"},n.a.createElement("div",{className:"row"},n.a.createElement("span",{className:"start-btn",onClick:function(){return we()}},"START"),n.a.createElement("span",{className:"start-btn",onClick:function(){return le()}},"PAUSE"),n.a.createElement("span",{className:"start-btn",onClick:function(){return ie()}},"RESET")),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"game-btn"},n.a.createElement(C,{id:"BA",type:"single",input:"a",action:me},"A"),"SAVE"),n.a.createElement("div",{className:"game-btn"},n.a.createElement(C,{id:"BZ",type:"single",input:"ROTATE",action:me},"Z"),"ROTATE")),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"game-btn"},n.a.createElement(C,{id:"BQ",type:"repeat",input:"q",action:me},"Q"),"LEFT"),n.a.createElement("div",{className:"game-btn"},n.a.createElement(C,{id:"BD",type:"repeat",input:"d",action:me},"D"),"RIGHT")),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"game-btn"},n.a.createElement(C,{id:"BS",type:"repeat",input:"s",action:me},"S"),"DOWN"))))},ve=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.grid;return n.a.createElement(m,{className:"centeredgame",grid:e,id:"C"})}}]),t}(n.a.Component),pe=Object(w.b)(function(e){return{grid:e.grid}})(ve),Ee=function(){return n.a.createElement("div",{className:"game"},n.a.createElement("div",{className:"game-box"},n.a.createElement("div",{className:"game-grid"},n.a.createElement(v,null),n.a.createElement(pe,null),n.a.createElement(E,null)),n.a.createElement(fe,null)))},ge=Object(l.b)({grid:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O.map(function(e){return e.map(function(e){return e})}),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REFRESH_GRID":return t.payload.map(function(e){return e.map(function(e){return e})});case"GAME_RESTARTED":return O;default:return e}},nextCell:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REFRESH_NEXT_CELL":return t.payload.map(function(e){return e.map(function(e){return e})});case"GAME_RESTARTED":return L;default:return e}},savedCell:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REFRESH_SAVED_CELL":return t.payload.map(function(e){return e.map(function(e){return e})});case"GAME_RESTARTED":return L;default:return e}},gameState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";switch((arguments.length>1?arguments[1]:void 0).type){case"GAME_STARTED":return"Jeu en cours...";case"GAME_PAUSED":return"En pause.";case"GAME_LOST":return"Perdu !";case"GAME_RESTARTED":return"";default:return e}},gameLevel:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GAME_LEVEL":return t.payload;case"GAME_RESTARTED":return 1;default:return e}},gameScore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GAME_SCORE":return t.payload;case"GAME_RESTARTED":return 0;default:return e}}});i.d(t,"store",function(){return ye});var ye=Object(l.c)(ge);r.a.render(n.a.createElement(w.a,{store:ye},n.a.createElement(Ee,null)),document.querySelector("#root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.d13aa225.chunk.js.map