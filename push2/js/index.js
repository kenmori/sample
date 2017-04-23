(function() {
    // Check permissions
    if ("Notification" in window) {
        var permission = Notification.permission;

        if (permission === "denied") {
            Notification.requestPermission(function (permission) {
                // If the user accepts, let's create a notification
                if (permission === "granted") {
                    var notification = new Notification("Hi there!");
                }
            });
        } else if (permission === "granted") {
            return checkVersion();
        }

        Notification.requestPermission().then(function () {
            checkVersion();
        });
    }

    function checkVersion() {
        // Retrieve current version
        var latestVersion = document.querySelector(".js-currentVersion").textContent;
        var currentVersion = localStorage.getItem("conciseVersion");
        if (currentVersion === null) {
            displayNotification(
                `Click to see what's new in v${latestVersion}`,
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/concise-logo.png",
                "A new version of Concise is available",
                `https://github.com/ConciseCSS/concise.css/releases/v${latestVersion}`
            );

            localStorage.setItem("conciseVersion", latestVersion);
        }
    }

    function displayNotification(body, icon, title, link, duration) {
        link = link || 0; // Link is optional
        duration = duration || 5000; // Default duration is 5 seconds

        var options = {
            body: body,
            icon: icon
        };

        var n = new Notification(title, options);

        if (link) {
            n.onclick = function () {
                window.open(link);
            };
        }

        setTimeout(n.close.bind(n), duration);
    }
})();
