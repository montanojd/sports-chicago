zuix.store("config",{title:"News Blog",baseUrl:"/news-blog/",language:"en",resourcePath:"/news-blog/app/",libraryPath:{"@lib":"/news-blog/lib/1.1/","@hgui":"https://genielabs.github.io/homegenie-web-ui/app/","@cdnjs":"https://cdnjs.cloudflare.com/ajax/libs/"},"zuixjs.github.io":{baseUrl:"/news-blog/",resourcePath:"/news-blog/app/",libraryPath:{"@lib":"/news-blog/lib/1.1/","@hgui":"https://genielabs.github.io/homegenie-web-ui/app/","@cdnjs":"https://cdnjs.cloudflare.com/ajax/libs/"}},siteMapUrl:"https://zuixjs.github.io/news-blog"}),"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/news-blog/service-worker.js")});let module={};function ZuixAnimateCss(){zuix.$.classExists(".animate__animated .animate__bounce")||zuix.using("style","https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"),zuix.$.ZxQuery.prototype.animateCss||(zuix.$.ZxQuery.prototype.animateCss=function(s,t,i){const n=this;let e,a;"function"==typeof i?(a=t,e=i):"function"==typeof t&&(e=t),"string"!=typeof s?("function"==typeof s?e=s:a=s,s=""):a=t;const o=["-webkit","-moz","-o","-ms"];for(const r in a)if(a.hasOwnProperty(r))for(let t=0;t<o.length;t++)this.css(o[t]+"-animation-"+r,a[r]);return this.hasClass("animate__animated")&&(this.css("transition","initial"),this.attr("class")&&(i=this.attr("class").split(" ").filter(function(t){return t.startsWith("animate__")}).join(" "),this.removeClass(i)),this.trigger("animationend")),this.addClass("animate__animated animate__"+s),this.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){var t=this.attr("class").split(" ").filter(function(t){return t.startsWith("animate__")}).join(" ");this.removeClass(t);for(const i in a)if(a.hasOwnProperty(i))for(let t=0;t<o.length;t++)n.css(o[t]+"-animation-"+i,"");"function"==typeof e&&e.call(n,s)}),this})}(module.exports=ZuixAnimateCss)();