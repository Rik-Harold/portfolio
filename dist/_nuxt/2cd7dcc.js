(window.webpackJsonp=window.webpackJsonp||[]).push([[11,2,3,5],{298:function(t,e,n){"use strict";n.r(e);var r={name:"Footer"},o=n(64),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("footer",[n("span",[t._v("Cédrik DODDE ~ "),n("span",{staticClass:"far fa-copyright"}),t._v(" 2023 Tous droits réservés.")])])])}],!1,null,"3176b117",null);e.default=component.exports;installComponents(component,{Footer:n(298).default})},300:function(t,e,n){"use strict";n.r(e);var r={name:"Entete",data:function(){return{fond:"navbarre-scroll",clique:!1}},mounted:function(){window.addEventListener("scroll",(function(t){window.scrollY>100?document.getElementById("fondNavBarre").classList.add("navbarre-sticky"):document.getElementById("fondNavBarre").classList.remove("navbarre-sticky")}))}},o=n(64),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("nav",{staticClass:"navbarre",attrs:{id:"fondNavBarre"}},[n("div",{staticClass:"max-width"},[n("div",{staticClass:"logo"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("Portfo"),n("span",{attrs:{id:"partie"}},[t._v("lio.")])])],1),t._v(" "),n("ul",{staticClass:"menu",class:{active:t.clique}},[n("li",[n("nuxt-link",{staticClass:"menu-btn",attrs:{to:"/"}},[t._v("Profil")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"menu-btn",attrs:{to:"/realisations"}},[t._v("Réalisations")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"menu-btn",attrs:{to:"/#contact"}},[t._v("Contact")])],1)]),t._v(" "),n("div",{staticClass:"menu-btn"},[n("i",{staticClass:"fas fa-bars",class:{active:t.clique},on:{click:function(e){t.clique=!t.clique}}})])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"scroll-up-btn"},[e("i",{staticClass:"fas fa-angle-up"})])}],!1,null,null,null);e.default=component.exports},301:function(t,e,n){"use strict";var r=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;t.exports=function(t){return!(t.length>320)&&r.test(t)}},304:function(t,e,n){"use strict";n.r(e);n(219),n(155),n(11),n(26),n(16),n(36),n(17),n(1),n(3);var r=n(301),o=n.n(r);function c(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return"string"==typeof t&&(t.endsWith(",")&&(t=t.substring(0,t.length-1)),t.startsWith(",")&&(t=t.substring(1)),t=t.split(",")),t=t.map((function(t){return t.trim()})),e?t:n?t.join(", "):t.join(",")}function l(t){var e=!0;return(t=c(t,!0,!1)).forEach((function(t){o()(t)||(e=!1)})),e}var d={props:{mail:{type:[String,Array],required:!0,validator:function(t){return l(t)}},cc:{type:[String,Array],default:void 0,validator:function(t){return l(t)}},bcc:{type:[String,Array],default:void 0,validator:function(t){return l(t)}},subject:{type:String,default:void 0},body:{type:String,default:void 0},target:{type:[String],default:void 0}},computed:{encoded:function(){for(var t=c(this.mail),e=[],i=t.length-1;i>=0;i--)e.unshift(["&#",t.charCodeAt(i),";"].join(""));return e.join("")}},methods:{mailtoHandler:function(t){t.preventDefault();var e,body,n,r,o,l=["mailto:",c(this.mail),(e=this.subject,body=this.body,n=this.cc,r=this.bcc,o=[],n=void 0!==n?"CC=".concat(c(n)):null,r=void 0!==r?"BCC=".concat(c(r)):null,e=void 0!==e?"subject=".concat(encodeURIComponent(e)):null,body=void 0!==body?"body=".concat(encodeURIComponent(body)):null,n&&o.push(n),r&&o.push(r),e&&o.push(e),body&&o.push(body),o.length>0?"?".concat(o.join("&")):"")];"_blank"===this.target?window.open(l.join(""),"_blank"):window.location.href=l.join("")}}},h=n(64),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"#"},on:{click:t.mailtoHandler}},[t._t("default",(function(){return[n("span",{domProps:{innerHTML:t._s(t.encoded)}})]}))],2)}),[],!1,null,null,null);e.default=component.exports},305:function(t,e,n){t.exports=n.p+"img/profil.c016c58.webp"},315:function(t,e,n){var content=n(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(77).default)("1b7833da",content,!0,{sourceMap:!1})},329:function(t,e,n){"use strict";n(315)},330:function(t,e,n){var r=n(76)(!1);r.push([t.i,"",""]),t.exports=r},331:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"about",attrs:{id:"about"}},[r("div",{staticClass:"max-width"},[r("h2",{staticClass:"title",attrs:{id:"moi"}},[t._v("A propos de moi")]),t._v(" "),r("div",{staticClass:"about-content"},[r("div",{staticClass:"column left"},[r("img",{attrs:{src:n(305),alt:"moi"}})]),t._v(" "),r("div",{staticClass:"column right"},[r("div",{staticClass:"text"},[t._v("Je suis Cédrik DODDE")]),t._v(" "),r("p",[t._v("J'ai 22ans et je suis développeur web et UI/UX Designer. Ma passion pour l'informatique m'a poussé à obtenir un BTS SIO en Solution logiciel et applications métiers avant de compléter ma formation d'un Titre RNCP (Bac +2) en Infographie et Design Web à "),r("i",[t._v("DORANCO")]),t._v(". Je me sers ainsi de mes compétences mixtes danc ces deux domaines pour créer, protoyper et développer des interfaces web, des projets print et de l'animation 2D et 3D.")]),t._v(" "),r("div",{staticClass:"text"},[t._v("Mes perspectives d'avenir")]),t._v(" "),r("p",[t._v("Polyvalent dans mes compétences, je suis disponible à travailler sur plusieurs projets en tant que Freelance. Toutefois, une bonne opportunité en entreprise est également une perspective que j'aimerai explorer.")]),t._v(" "),r("a",{staticClass:"lien",attrs:{href:"CV_Cedrik_DODDE_Dev_Designer.pdf",target:"_blank"}},[t._v("Télécharger mon CV")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"services",attrs:{id:"services"}},[n("div",{staticClass:"max-width"},[n("h2",{staticClass:"title",attrs:{id:"formations"}},[t._v("Mes formations")]),t._v(" "),n("div",{staticClass:"serv-content"},[n("div",{staticClass:"card"},[n("div",{staticClass:"box"},[n("i",{staticClass:"fas fa-chart-line"}),t._v(" "),n("div",{staticClass:"text"},[t._v("Baccalauréat")]),t._v(" "),n("p",[t._v("J'ai orienté mes études secondaires du second cycle en sciences et maths pour obtenir un Baccalauréat scientifique.")])])]),t._v(" "),n("div",{staticClass:"card"},[n("div",{staticClass:"box"},[n("i",{staticClass:"fas fa-code"}),t._v(" "),n("div",{staticClass:"text"},[t._v("BTS")]),t._v(" "),n("p",[t._v("Diplômé d'un baccalauréat scientifique, je me suis spécialisé en informatique à travers un cursus de BTS SIO.")])])]),t._v(" "),n("div",{staticClass:"card"},[n("div",{staticClass:"box"},[n("i",{staticClass:"fas fa-paint-brush"}),t._v(" "),n("div",{staticClass:"text"},[t._v("Infographie")]),t._v(" "),n("p",[t._v("Une spécialisation en infographie m'a permis d'améliorer mes compétences en développement d'interfaces.")])])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"column left"},[n("div",{staticClass:"text"},[t._v("Réseaux sociaux professionnels")]),t._v(" "),n("p",[t._v("Je suis également actif sur les réseaux sociaux comme "),n("a",{attrs:{href:"https://github.com/Rik-Harold",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub")]),t._v(" \n                      et "),n("a",{attrs:{href:"https://www.linkedin.com/in/cédrik-dodde-b0178a19a",target:"_blank",rel:"noopener noreferrer"}},[t._v("LinkedIn")]),t._v(".")]),t._v(" "),n("div",{staticClass:"icons"},[n("div",{staticClass:"row"},[n("i",{staticClass:"fas fa-user"}),t._v(" "),n("div",{staticClass:"info"},[n("div",{staticClass:"head"},[t._v("Nom et Prénom")]),t._v(" "),n("div",{staticClass:"sub-title"},[t._v("DODDE Cédrik")])])]),t._v(" "),n("div",{staticClass:"row"},[n("i",{staticClass:"fas fa-map-marker-alt"}),t._v(" "),n("div",{staticClass:"info"},[n("div",{staticClass:"head"},[t._v("Addresse")]),t._v(" "),n("div",{staticClass:"sub-title"},[t._v("10 Avenue Marc sangnier, Viry-Châtillon")])])]),t._v(" "),n("div",{staticClass:"row"},[n("i",{staticClass:"fas fa-envelope"}),t._v(" "),n("div",{staticClass:"info"},[n("div",{staticClass:"head"},[t._v("Email")]),t._v(" "),n("div",{staticClass:"sub-title"},[t._v("cdrikdodde@yahoo.com")])])])])])}];function o(){return o=Object.assign?Object.assign.bind():function(t){for(var s=1;s<arguments.length;s++){var e=arguments[s];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},o.apply(this,arguments)}var s={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,s){},onStringTyped:function(t,s){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,s){},onTypingResumed:function(t,s){},onReset:function(t){},onStop:function(t,s){},onStart:function(t,s){},onDestroy:function(t){}},c=new(function(){function t(){}var e=t.prototype;return e.load=function(t,e,i){if(t.el="string"==typeof i?document.querySelector(i):i,t.options=o({},s,e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map((function(t){return t.trim()})),t.stringsElement="string"==typeof t.options.stringsElement?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var n=Array.prototype.slice.apply(t.stringsElement.children),r=n.length;if(r)for(var a=0;a<r;a+=1)t.strings.push(n[a].innerHTML.trim())}for(var u in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[u]=u;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},e.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent},e.appendCursorAnimationCss=function(t){var s="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+s+"]")){var e=document.createElement("style");e.setAttribute(s,"true"),e.innerHTML="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ",document.body.appendChild(e)}},e.appendFadeOutAnimationCss=function(t){var s="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+s+"]")){var e=document.createElement("style");e.setAttribute(s,"true"),e.innerHTML="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ",document.body.appendChild(e)}},t}()),l=new(function(){function t(){}var s=t.prototype;return s.typeHtmlChars=function(t,s,e){if("html"!==e.contentType)return s;var n=t.substring(s).charAt(0);if("<"===n||"&"===n){var i;for(i="<"===n?">":";";t.substring(s+1).charAt(0)!==i&&!(1+ ++s>t.length););s++}return s},s.backSpaceHtmlChars=function(t,s,e){if("html"!==e.contentType)return s;var n=t.substring(s).charAt(0);if(">"===n||";"===n){var i;for(i=">"===n?"<":"&";t.substring(s-1).charAt(0)!==i&&!(--s<0););s--}return s},t}()),i=function(){function t(t,s){c.load(this,s,t),this.begin()}var s=t.prototype;return s.toggle=function(){this.pause.status?this.start():this.stop()},s.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},s.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},s.destroy=function(){this.reset(!1),this.options.onDestroy(this)},s.reset=function(t){void 0===t&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},s.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout((function(){0===t.strPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)}),this.startDelay)},s.typewrite=function(t,s){var e=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var i=this.humanizer(this.typeSpeed),n=1;!0!==this.pause.status?this.timeout=setTimeout((function(){s=l.typeHtmlChars(t,s,e);var i=0,r=t.substring(s);if("^"===r.charAt(0)&&/^\^\d+/.test(r)){var a=1;a+=(r=/\d+/.exec(r)[0]).length,i=parseInt(r),e.temporaryPause=!0,e.options.onTypingPaused(e.arrayPos,e),t=t.substring(0,s)+t.substring(s+a),e.toggleBlinking(!0)}if("`"===r.charAt(0)){for(;"`"!==t.substring(s+n).charAt(0)&&(n++,!(s+n>t.length)););var u=t.substring(0,s),p=t.substring(u.length+1,s+n),o=t.substring(s+n+1);t=u+p+o,n--}e.timeout=setTimeout((function(){e.toggleBlinking(!1),s>=t.length?e.doneTyping(t,s):e.keepTyping(t,s,n),e.temporaryPause&&(e.temporaryPause=!1,e.options.onTypingResumed(e.arrayPos,e))}),i)}),i):this.setPauseStatus(t,s,!0)},s.keepTyping=function(t,s,e){0===s&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var n=t.substring(0,s+=e);this.replaceText(n),this.typewrite(t,s)},s.doneTyping=function(t,s){var e=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout((function(){e.backspace(t,s)}),this.backDelay))},s.backspace=function(t,s){var e=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var i=this.humanizer(this.backSpeed);this.timeout=setTimeout((function(){s=l.backSpaceHtmlChars(t,s,e);var i=t.substring(0,s);if(e.replaceText(i),e.smartBackspace){var n=e.strings[e.arrayPos+1];e.stopNum=n&&i===n.substring(0,s)?s:0}s>e.stopNum?(s--,e.backspace(t,s)):s<=e.stopNum&&(e.arrayPos++,e.arrayPos===e.strings.length?(e.arrayPos=0,e.options.onLastStringBackspaced(),e.shuffleStringsIfNeeded(),e.begin()):e.typewrite(e.strings[e.sequence[e.arrayPos]],s))}),i)}else this.setPauseStatus(t,s,!1)},s.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},s.setPauseStatus=function(t,s,e){this.pause.typewrite=e,this.pause.curString=t,this.pause.curStrPos=s},s.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},s.humanizer=function(t){return Math.round(Math.random()*t/2)+t},s.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort((function(){return Math.random()-.5})))},s.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout((function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)}),this.fadeOutDelay)},s.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t},s.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",(function(s){t.stop()})),this.el.addEventListener("blur",(function(s){t.el.value&&0!==t.el.value.length||t.start()})))},s.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},t}(),d=n(300),h=n(298),v={layout:"model",name:"Index",components:{Entete:d.default,Footer:h.default},data:function(){return{animeBienvenu:null}},mounted:function(){var t=new i(".typing",{strings:["UI/UX Designer","Développeur web","Développeur mobile"],typeSpeed:100,backSpeed:100,loop:!0,fadeOut:!0,fadeOutClass:"typed-fade-out",fadeOutDelay:500});this.animeBienvenu=t}},f=(n(329),n(64)),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"index"}},[n("Entete"),t._v(" "),n("section",{staticClass:"home",attrs:{id:"home"}},[n("div",{staticClass:"max-width"},[n("transition",{attrs:{name:"entete"}},[n("div",{staticClass:"home-content"},[n("div",{staticClass:"text-1"},[t._v("Bonjour, je m'appelle")]),t._v(" "),n("div",{staticClass:"text-2"},[t._v("Cédrik Doddé")]),t._v(" "),n("div",{staticClass:"text-3"},[t._v("Et je suis "),n("span",{staticClass:"typing"})]),t._v(" "),n("a",{staticClass:"cv",attrs:{href:"CV_Cedrik_DODDE_Dev_Designer.pdf",target:"_blank"}},[t._v("CV")]),t._v(" "),n("a",{staticClass:"lien",attrs:{href:"realisations"}},[t._v("Réalisations")])])])],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),n("section",{staticClass:"contact",attrs:{id:"contact"}},[n("div",{staticClass:"max-width"},[n("h2",{staticClass:"title",attrs:{id:"contactez-moi"}},[t._v("Contactez-moi")]),t._v(" "),n("div",{staticClass:"contact-content"},[t._m(2),t._v(" "),n("div",{staticClass:"column right"},[n("div",{staticClass:"text"},[t._v("Ecrivez-moi")]),t._v(" "),n("form",{attrs:{action:"#"}},[n("div",{staticClass:"fields"},[n("div",{staticClass:"field name"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.identite,expression:"identite"}],attrs:{type:"text",placeholder:"Nom et Prénom",required:""},domProps:{value:t.identite},on:{input:function(e){e.target.composing||(t.identite=e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"field"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.sujet,expression:"sujet"}],attrs:{type:"text",placeholder:"Sujet",required:""},domProps:{value:t.sujet},on:{input:function(e){e.target.composing||(t.sujet=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"field textarea"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{cols:"30",rows:"10",placeholder:"Message..",required:""},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"button-area"},[n("Mailto",{attrs:{mail:t.destinataire,subject:t.sujet,body:t.message+"\n\n"+t.identite,title:"Envoyer"}},[n("button",{attrs:{type:"button",id:"mailButton"},on:{click:function(e){return t.send(t.instance)}}},[t._v("\n                                      Envoyer\n                                  ")])])],1)])])])])]),t._v(" "),n("Footer")],1)}),r,!1,null,null,null);e.default=component.exports;installComponents(component,{Entete:n(300).default,Mailto:n(304).default,Footer:n(298).default})}}]);