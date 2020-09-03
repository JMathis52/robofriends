(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{18:function(e,n,t){e.exports=t(30)},28:function(e,n,t){},29:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(8),c=t.n(a),i=t(9),s=t(7),l=t(16),u=t(17),h=(t(27),t(3)),d=t(4),f=t(6),b=t(5),p=function(e){var n=e.name,t=e.email,r=e.id;return o.a.createElement("div",{className:"bg-light-green br2 pa2 shadow-5 fl w-75 w-25-ns mw5 h5 ma3"},o.a.createElement("img",{src:"https://robohash.org/".concat(r,".jp2?ignoreext=false"),style:{height:"150px",width:"150px"},alt:"robot"}),o.a.createElement("h2",{className:"f4"},n),o.a.createElement("p",{className:"f7"},t))},m=function(e){var n=e.robots;return o.a.createElement("div",{className:"flex flex-column flex-row-ns flex-wrap-ns items-center justify-center-ns"},n.map((function(e,t){return o.a.createElement(p,{key:t,id:n[t].id,name:n[t].name,email:n[t].email})})))},g=function(e){Object(f.a)(t,e);var n=Object(b.a)(t);function t(e){var r;return Object(h.a)(this,t),(r=n.call(this,e)).state={hasError:!1},r}return Object(d.a)(t,[{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Oooops. This is not good"):this.props.children}}]),t}(r.Component),v=function(e){var n=e.searchChange;return o.a.createElement("input",{className:"pa3 ba br2 b--green bg-lightest-blue",type:"search",placeholder:"Search robots",onChange:n})},E=function(e){Object(f.a)(t,e);var n=Object(b.a)(t);function t(){return Object(h.a)(this,t),n.apply(this,arguments)}return Object(d.a)(t,[{key:"shouldComponentUpdate",value:function(e,n){return!1}},{key:"render",value:function(){return o.a.createElement("div",{className:"flex flex-column items-center justify-center vh-25"},o.a.createElement("h1",{className:"f2"},"RoboFriends"),o.a.createElement(v,{searchChange:this.props.searchChange}))}}]),t}(r.Component),w=function(e){return o.a.createElement("div",{className:"bt b--black overflow-container vh-75"},e.children)},O=(t(28),function(e){Object(f.a)(t,e);var n=Object(b.a)(t);function t(){return Object(h.a)(this,t),n.apply(this,arguments)}return Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.searchField,t=e.onSearchChange,r=e.robots,a=e.isPending,c=r.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return a?o.a.createElement("h1",{className:"tc"},"LOADING"):o.a.createElement("div",{className:"tc"},o.a.createElement(E,{searchChange:t}),o.a.createElement(w,null,o.a.createElement(g,null,o.a.createElement(m,{robots:c}))))}}]),t}(r.Component)),y=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(n){return e({type:"CHANGE_SEARCH_FIELD",payload:n.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:n})})).catch((function(n){return e({type:"REQUEST_ROBOTS_FAILURE",payload:n})}))}))}}}))(O),R=(t(29),{searchField:""}),j={isPending:!1,robots:[],error:""},S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var N=Object(l.createLogger)(),k=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:n.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:n.payload,isPending:!1});case"REQUEST_ROBOTS_FAILURE":return Object.assign({},e,{error:n.payload,isPending:!1});default:return e}}}),_=Object(s.d)(k,Object(s.a)(u.a,N));c.a.render(o.a.createElement(i.a,{store:_},o.a.createElement(y,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/robofriends","/service-worker.js");S?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):C(n,e)}))}}()}},[[18,1,2]]]);
//# sourceMappingURL=main.e80ec048.chunk.js.map