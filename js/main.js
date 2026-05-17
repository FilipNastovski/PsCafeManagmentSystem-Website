(function () {
    const GITHUB_OWNER = "FilipNastovski";
    const GITHUB_REPO = "PsCafeManagmentSystem-Website";

    var translations = {
        en: {
            page_title: "PlayStation Cafe Management System",
            nav_features: "Features",
            nav_download: "Download",
            nav_requirements: "Requirements",
            nav_getting_started: "Getting Started",
            nav_faq: "FAQ",
            hero_title: "PlayStation Cafe Management System",
            hero_tagline: "A lightweight desktop application for managing PlayStation devices in a cafe. Track sessions, handle billing, and generate reports, all offline, all local.",
            hero_btn_windows: "Download for Windows",
            hero_btn_linux: "Download for Linux",
            features_title: "Features",
            feature_dashboard_title: "Dashboard",
            feature_dashboard_desc: "View all devices with real-time status, elapsed time, and estimated cost at a glance.",
            feature_sessions_title: "Session Management",
            feature_sessions_desc: "Start timed (fixed duration) or open-ended sessions with a single click.",
            feature_billing_title: "Automatic Billing",
            feature_billing_desc: "Minute-based billing in MKD with transparent pricing shown on session end.",
            feature_alerts_title: "Sound Alerts",
            feature_alerts_desc: "Get notified when timed sessions expire. Mute toggle available for quiet hours.",
            feature_reports_title: "Reports",
            feature_reports_desc: "View revenue for Today, Week, Month, or custom date ranges, filter by device.",
            feature_devices_title: "Device Management",
            feature_devices_desc: "Add, edit, or remove devices with custom hourly rates. Auto-named PS1, PS2, etc.",
            download_title: "Download",
            download_loading: "Loading latest version...",
            download_windows_format: ".zip, Extract and run",
            download_windows_btn: "Download for Windows",
            download_windows_note: "Windows 10 or later",
            download_linux_format: ".tar.gz, Extract and run",
            download_linux_btn: "Download for Linux",
            download_linux_note: "Modern distro (glibc 2.31+)",
            requirements_title: "System Requirements",
            req_win_1: "Windows 10 or later",
            req_space: "~50-100 MB disk space",
            req_no_install: "No installation required",
            req_linux_1: "Modern distro (glibc 2.31+)",
            requirements_note: "Fully portable, all data stored locally on your machine. No internet connection required.",
            getting_started_title: "Getting Started",
            step_1_title: "Download and Extract",
            step_1_desc: "Download the archive for your platform and extract it to any folder.",
            step_2_title: "Run the App",
            step_2_desc: "Double-click the executable, no setup or installation needed.",
            step_3_title: "Start a Session",
            step_3_desc: "Click <strong>Start</strong> on any available device to begin a timed or open session.",
            faq_title: "FAQ",
            faq_1_q: "Is it free?",
            faq_1_a: "Yes, completely free to use.",
            faq_2_q: "Does it work offline?",
            faq_2_a: "Yes, fully local. No internet connection required. All data is stored in a local SQLite database on your machine.",
            faq_3_q: "Where is my data stored?",
            faq_3_a: "All data is stored locally in a SQLite database. On Windows, it is saved in <code>%APPDATA%/PsCafeManagement/pscafe.db</code>. On Linux, it is in <code>~/.local/share/PsCafeManagement/pscafe.db</code>.",
            faq_4_q: "Can I use it on multiple computers?",
            faq_4_a: "Yes, you can install and run it on any number of machines. However, data does not sync between computers, each machine has its own independent database.",
            faq_5_q: "What currency does it use?",
            faq_5_a: "MKD (Macedonian Denar). Prices are stored as whole integers with no decimals.",
            footer: "\u00a9 2026 PsCafe Management System",
            release_badge: "Released",
            release_fallback: "Check GitHub Releases for downloads",
            lang_toggle_label: "MK"
        },
        mk: {
            page_title: "PlayStation Cafe Менаџмент Систем",
            nav_features: "Функции",
            nav_download: "Преземи",
            nav_requirements: "Барања",
            nav_getting_started: "Започнување",
            nav_faq: "Прашања",
            hero_title: "PlayStation Cafe Менаџмент Систем",
            hero_tagline: "Лесна десктоп апликација за менаџирање на PlayStation уреди во кафе. Следење на сесии, наплата и извештаи, целосно офлајн, локално.",
            hero_btn_windows: "Преземи за Windows",
            hero_btn_linux: "Преземи за Linux",
            features_title: "Функции",
            feature_dashboard_title: "Контролна табла",
            feature_dashboard_desc: "Преглед на сите уреди со статус во реално време, поминато време и проценета цена.",
            feature_sessions_title: "Менаџирање на сесии",
            feature_sessions_desc: "Започнете временски ограничени или отворени сесии со еден клик.",
            feature_billing_title: "Автоматска наплата",
            feature_billing_desc: "Наплата врз основа на минути во МКД со транспарентна цена при завршување на сесијата.",
            feature_alerts_title: "Звучни известувања",
            feature_alerts_desc: "Бидете известени кога временските сесии истекуваат. Достапен mute копче за тивки часови.",
            feature_reports_title: "Извештаи",
            feature_reports_desc: "Преглед на приход за денес, недела, месец или прилагодлив датум, филтрирајте по уред.",
            feature_devices_title: "Менаџирање на уреди",
            feature_devices_desc: "Додајте, уредувајте или отстранувајте уреди со прилагодливи часовни стапки. Автоматски именувани PS1, PS2, итн.",
            download_title: "Преземи",
            download_loading: "Вчитување на последната верзија...",
            download_windows_format: ".zip, Извлечи и покpени",
            download_windows_btn: "Преземи за Windows",
            download_windows_note: "Windows 10 или понова",
            download_linux_format: ".tar.gz, Извлечи и покpени",
            download_linux_btn: "Преземи за Linux",
            download_linux_note: "Модерна дистрибуција (glibc 2.31+)",
            requirements_title: "Системски барања",
            req_win_1: "Windows 10 или понова",
            req_space: "~50-100 MB простор на диск",
            req_no_install: "Не е потребна инсталација",
            req_linux_1: "Модерна дистрибуција (glibc 2.31+)",
            requirements_note: "Целосно пренослив, сите податоци се чуваат локално на вашиот уред. Не е потребна интернет врска.",
            getting_started_title: "Започнување",
            step_1_title: "Преземи и извлечи",
            step_1_desc: "Преземете ја архивата за вашата платформа и извлечете ја во било која папка.",
            step_2_title: "Покpени ја апликацијата",
            step_2_desc: "Кликнете двапати на извршната датотека, без поставување или инсталација.",
            step_3_title: "Започни сесија",
            step_3_desc: "Кликнете <strong>Start</strong> на било кој достапен уред за да започнете временска или отворена сесија.",
            faq_title: "Прашања",
            faq_1_q: "Дали е бесплатно?",
            faq_1_a: "Да, целосно бесплатно за користење.",
            faq_2_q: "Дали работи офлајн?",
            faq_2_a: "Да, целосно локално. Не е потребна интернет врска. Сите податоци се чуваат во локална SQLite база на вашиот уред.",
            faq_3_q: "Каде се чуваат моите податоци?",
            faq_3_a: "Сите податоци се чуваат локално во SQLite база. На Windows, се зачувува во <code>%APPDATA%/PsCafeManagement/pscafe.db</code>. На Linux, се наоѓа во <code>~/.local/share/PsCafeManagement/pscafe.db</code>.",
            faq_4_q: "Можам ли да го користам на повеќе компјутери?",
            faq_4_a: "Да, можете да го инсталирате и користите на било кој број на машини. Сепак, податоците не се синхронизираат помеѓу компјутерите, секоја машина има своја независна база.",
            faq_5_q: "Која валута се користи?",
            faq_5_a: "МКД (Македонски денар). Цените се чуваат како цели броеви без децимали.",
            footer: "\u00a9 2026 PsCafe Management System",
            release_badge: "Објавено",
            release_fallback: "Проверете ги GitHub Releases за преземање",
            lang_toggle_label: "EN"
        }
    };

    var currentLang = localStorage.getItem("pscafe-lang") || "en";

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem("pscafe-lang", lang);
        document.documentElement.lang = lang;

        var t = translations[lang];
        var elements = document.querySelectorAll("[data-i18n]");
        elements.forEach(function (el) {
            var key = el.getAttribute("data-i18n");
            if (t[key] !== undefined) {
                if (el.tagName === "TITLE") {
                    document.title = t[key];
                } else {
                    el.innerHTML = t[key];
                }
            }
        });

        var langToggle = document.getElementById("lang-toggle");
        if (langToggle) {
            langToggle.textContent = t.lang_toggle_label;
        }

        var badge = document.getElementById("release-info");
        if (badge && !badge.getAttribute("data-version")) {
            badge.textContent = t.download_loading;
        }
    }

    var langToggle = document.getElementById("lang-toggle");
    if (langToggle) {
        langToggle.addEventListener("click", function () {
            var newLang = currentLang === "en" ? "mk" : "en";
            setLanguage(newLang);
        });
    }

    setLanguage(currentLang);

    var navToggle = document.querySelector(".nav-toggle");
    var navLinks = document.querySelector(".nav-links");

    if (navToggle && navLinks) {
        navToggle.addEventListener("click", function () {
            navLinks.classList.toggle("open");
        });

        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("open");
            });
        });
    }

    var faqQuestions = document.querySelectorAll(".faq-question");
    faqQuestions.forEach(function (btn) {
        btn.addEventListener("click", function () {
            var item = btn.parentElement;
            var isOpen = item.classList.contains("open");
            document.querySelectorAll(".faq-item.open").forEach(function (openItem) {
                openItem.classList.remove("open");
            });
            if (!isOpen) {
                item.classList.add("open");
            }
        });
    });

    function fetchLatestRelease() {
        var url = "https://api.github.com/repos/" + GITHUB_OWNER + "/" + GITHUB_REPO + "/releases/latest";
        var badge = document.getElementById("release-info");
        var winBtn = document.getElementById("download-windows");
        var linuxBtn = document.getElementById("download-linux");
        var t = translations[currentLang];

        fetch(url)
            .then(function (res) {
                if (!res.ok) throw new Error("No release found");
                return res.json();
            })
            .then(function (data) {
                var version = data.tag_name || data.name || "latest";
                var locale = currentLang === "mk" ? "mk-MK" : "en-US";
                var date = new Date(data.published_at).toLocaleDateString(locale, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                });

                if (badge) {
                    badge.textContent = version + " " + t.release_badge + " " + date;
                    badge.setAttribute("data-version", version);
                }

                data.assets.forEach(function (asset) {
                    var name = asset.name.toLowerCase();
                    if (name.includes("windows")) {
                        if (winBtn) {
                            winBtn.href = asset.browser_download_url;
                            winBtn.removeAttribute("style");
                            winBtn.style.pointerEvents = "auto";
                        }
                    } else if (name.includes("linux")) {
                        if (linuxBtn) {
                            linuxBtn.href = asset.browser_download_url;
                            linuxBtn.removeAttribute("style");
                            linuxBtn.style.pointerEvents = "auto";
                        }
                    }
                });
            })
            .catch(function () {
                if (badge) {
                    badge.textContent = t.release_fallback;
                }
            });
    }

    fetchLatestRelease();
})();
