(this.webpackJsonphw6=this.webpackJsonphw6||[]).push([[0],{24:function(e,t,a){e.exports=a(37)},29:function(e,t,a){},31:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),o=a.n(c),s=(a(29),a(10)),l=a(11),i=a(13),u=a(12),m=a(14),p=a(2),h=a.n(p),d=a(6),f="https://www.reddit.com";function v(e){return b.apply(this,arguments)}function b(){return(b=Object(d.a)(h.a.mark(function e(t){var a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(f,"/r/").concat(t,".json"));case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function E(e){return w.apply(this,arguments)}function w(){return(w=Object(d.a)(h.a.mark(function e(t){var a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(f,"/user/").concat(t,".json"));case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}var g=a(7);a(31);function j(){return r.a.createElement("div",{className:"loader"})}var O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=Object(d.a)(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a.props),e.next=3,E(a.props.match.params.author);case 3:t=e.sent,a.setState({threads:t.data.children,loading:!1});case 5:case"end":return e.stop()}},e)})),a.componentDidUpdate=function(){var e=Object(d.a)(h.a.mark(function e(t){var n,r;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.props.match.params.author,t.match.params.author===n){e.next=6;break}return e.next=4,E(n);case 4:r=e.sent,a.setState({threads:r.data.children,loading:!1});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.state={threads:[],loading:!0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"threads"},this.state.loading?r.a.createElement(j,null):this.state.threads.map(function(e){return r.a.createElement(k,{thread:e})}))}}]),t}(r.a.Component);function k(e){var t="",a=e.thread,n="/authors/"+a.data.author;return void 0!==a.data.preview?((t=(t=a.data.preview.images[0].source.url).replace("amp;","")).includes("amp;")&&(t=t.replace("amp;","")),console.log(t)):t="https://icon-library.net/images/no-image-available-icon/no-image-available-icon-6.jpg",console.log(a.data),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("a",{href:a.data.url,target:"_blank"},a.data.title),r.a.createElement("p",null,a.data.ups.toLocaleString()),r.a.createElement(g.b,{to:n},r.a.createElement("p",null,a.data.author)),r.a.createElement("img",{src:t,width:"150"})))}var x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=Object(d.a)(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a.props),e.next=3,v(a.props.match.params.animal);case 3:t=e.sent,a.setState({threads:t.data.children,loading:!1});case 5:case"end":return e.stop()}},e)})),a.componentDidUpdate=function(){var e=Object(d.a)(h.a.mark(function e(t){var n,r;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.props.match.params.animal,t.match.params.animal===n){e.next=6;break}return e.next=4,v(n);case 4:r=e.sent,a.setState({threads:r.data.children,loading:!1});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.state={threads:[],loading:!0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"threads"},this.state.loading?r.a.createElement(j,null):this.state.threads.map(function(e){return r.a.createElement(k,{thread:e})}))}}]),t}(r.a.Component);function y(e){return r.a.createElement("h3",null,"The URL ",e.location.pathname," was not found.")}var C=a(8),D=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(g.a,null,r.a.createElement("h1",null,"Animal threads"),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(g.b,{to:"/animals/cats"},"Cats")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/animals/chickens"},"Chickens")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/animals/cows"},"Cows")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/animals/dogs"},"Dogs")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/animals/pigs"},"Pigs")))),r.a.createElement(C.c,null,r.a.createElement(C.a,{path:"/animals/:animal",component:x}),r.a.createElement(C.a,{path:"/authors/:author",component:O}),r.a.createElement(C.a,{component:y})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.439cd6d1.chunk.js.map