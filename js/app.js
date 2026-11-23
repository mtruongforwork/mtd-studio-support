/* ==========================================================================
   MTD Studio — Interactive Application Controller (js/app.js)
   Powers:
   1. Bilingual i18n dictionary extensions & dynamic product shelf sync
   2. index.html — Flagship 5-Screenshot Gallery Switcher
   3. privacy.html — Partner Center Product Tab Filter & 1-Click URL Copy
   4. support.html — 3-Step Troubleshooting Wizard, FAQ Filter/Search &
      Smart Support Ticket Form (Web3Forms / mailto: / Copy Ticket + Log Path)
   5. docs.html — 1-Click curl & PowerShell Code Snippet Copy + Toast Feedback
   ========================================================================== */

(function () {
  "use strict";

  /* --------------------------------------------------------------------------
     0. Extend MTD_I18N with any page-specific keys used across the 4 pages
     -------------------------------------------------------------------------- */
  var EXTRA_I18N = {
    en: {
      "nav.publisherTag": "Official Microsoft Store Publisher",
      "hero.ctaExplore": "Explore All 5 Apps",
      " hero.trustStore": "Signed MSIX · Store ID 9PC7TTDCCN2V",
      "hero.trustStore": "Signed MSIX · Store ID 9PC7TTDCCN2V",
      "hero.trustPrivacy": "100% Local Execution · No Cloud Tracking",
      "hero.trustLicense": "Free Forever Core · $3.99 Lifetime Pro",
      "flagship.badge": "FLAGSHIP RELEASE · v3.4.2.0",
      "flagship.title": "Quick Audio Switcher v3.4.2 — Sound & Device Controller",
      "flagship.subtitle": "Experience macOS-inspired Smoked Liquid Glass on Windows 11. Control audio outputs, per-app routing, Chat-Mix, Dynamic Island, Unified 3-in-1 Spectrum Dock, Side Edge Notch, and Elgato Stream Deck in milliseconds.",
      "flagship.openStoreApp": "Open in Microsoft Store",
      "flagship.webListing": "Web Listing ↗",
      "shots.shot1.title": "Dynamic Island 4-Tab, Unified Dock & Side Edge Notch",
      "shots.shot1.desc": "Smoked Liquid Glass top-edge Dynamic Island with Controls, Calendar, Devices & Music tabs plus Alt click-through Ghost Mode.",
      "shots.shot1.short": "Dynamic Island & Surfaces",
      "shots.shot2.title": "4-Tab Bento Command Center & Instant WinRT Wi-Fi/BT",
      "shots.shot2.desc": "Side-by-side dual Volume & Display Brightness frosted capsules, Audio Studio sub-panel, and instant WinRT Wi-Fi & Bluetooth control.",
      "shots.shot2.short": "4-Tab Bento Command Center",
      "shots.shot3.title": "Per-App Mixer, Output Routing & Chat-Mix",
      "shots.shot3.desc": "Route individual apps to separate headphones or speakers, balance Game vs. Voice Chat-Mix, and control hovered app volume with Alt + Wheel.",
      "shots.shot3.short": "Per-App Mixer & Routing",
      "shots.shot4.title": "Unified 3-in-1 Spectrum Dock & Side Edge Notch",
      "shots.shot4.desc": "Compact 316×34 taskbar dock with 1-click [● LIVE] Mic mute, 16-bar real-time visualizer, and ±2% scroll wheel volume on the Side Edge Notch.",
      "shots.shot4.short": "3-in-1 Dock & Edge Notch",
      "shots.shot5.title": "Elgato Stream Deck Plugin & Local REST/WS API",
      "shots.shot5.desc": "1-click Elgato Stream Deck plugin installer and authenticated loopback REST/WebSocket control server on 127.0.0.1:49152.",
      "shots.shot5.short": "Stream Deck & Local API",
      "shelf.eyebrow": "MTD STUDIO ECOSYSTEM · 5 WINDOWS APPS",
      "shelf.title": "5-App Bento Product Shelf",
      "shelf.subtitle": "Every MTD Studio utility is crafted natively for Windows 11 & 10, verified by Microsoft Store, and built on a strict zero-telemetry, local-first architecture.",
      "footer.desc": "High-craft Windows 11 desktop utilities designed in Smoked Liquid Glass. 100% local-first privacy, zero telemetry, published on the official Microsoft Store.",
      "footer.productsHeading": "Products",
      "footer.resourcesHeading": "Resources & Legal",
      "privacy.heroBadge": "Microsoft Store Policy 10.5 · GDPR · CCPA · COPPA Compliant",
      "privacy.heroTitle": "MTD Studio Privacy Policy Portal",
      "privacy.heroSubtitle": "100% Local-First Architecture. Zero Personal Data Collection, Zero Cloud Telemetry, Zero Third-Party Advertising SDKs. Effective Date & Last Updated: November 23, 2026.",
      "privacy.partnerBadge": "MICROSOFT PARTNER CENTER CERTIFICATION BAR",
      "privacy.partnerTitle": "Select Product Privacy Scope & Direct Permalink",
      "privacy.partnerDesc": "All product policies are pre-rendered in static HTML for automated Microsoft Store certification bots. Select an app below to highlight or filter its dedicated privacy disclosure and copy its direct Partner Center URL.",
      "privacy.copyUrlBtn": "Copy Privacy URL for Partner Center",
      "privacy.tabAll": "All MTD Studio Apps (#all)",
      "support.heroBadge": "Direct Engineering Support · Avg Response < 24 Hours · 100% Local Diagnostic Privacy",
      "support.heroTitle": "MTD Studio Support Center & Ticket Portal",
      "support.heroSubtitle": "Resolve issues in seconds with our interactive 3-step troubleshooting wizard, browse product FAQs, or send a formatted diagnostic ticket straight to the lead developer.",
      "support.ctaWizard": "Run 3-Step Troubleshooter",
      "support.ctaTicket": "Submit Support Ticket",
      "support.ctaDocs": "📖 Quick Audio Switcher v3.4 Guide",
      "support.wizardTag": "Interactive Self-Service",
      "support.wizardSubtitle": "Select your MTD Studio application and issue category to get verified step-by-step solutions or pre-fill a priority support ticket.",
      "support.step1Label": "Select Product",
      "support.step2Label": "Choose Issue Category",
      "support.step3Label": "Instant Solution & Ticket Action",
      "support.step1Heading": "Step 1 — Which application do you need help with?",
      "support.step2Heading": "Step 2 — What are you experiencing?",
      "support.catRestorePro": "Restore Pro Purchase / License",
      "support.catIslandOverlap": "Dynamic Island overlaps browser tabs",
      "support.catStreamDeck": "Elgato Stream Deck / Local API connection",
      "support.catAudioRouting": "Per-app audio routing / Chat-Mix",
      "support.catDiagnosticBug": "Attach diagnostic log / Bug report",
      "support.instantFixBadge": "✓ Verified Instant Solution",
      "support.diagPathLabel": "Local Diagnostic Log Path (Win + R):",
      "support.btnCopyLogPath": "Copy Log Path",
      "support.btnPrefillTicket": "Open Pre-Filled Ticket Below ↓",
      "support.faqTag": "Knowledge Base",
      "support.faqSubtitle": "Filter by product or search keywords across all 5 MTD Studio Windows utilities.",
      "support.filterAll": "All Apps (10)",
      "support.faqNoMatch": "No FAQs matched your search filter. Try clearing the search box or send us a support ticket below!",
      "support.ticketBadge": "Direct Engineering Escalation",
      "support.labelProduct": "Product",
      "support.labelIssueType": "Issue Type",
      "support.labelAppVersion": "App Version",
      "support.labelWinVersion": "Windows Version",
      "support.labelEmail": "Your Email Address",
      "support.labelSubject": "Subject",
      "support.labelMessage": "Message / Steps to Reproduce",
      "support.placeholderSubject": "Brief summary of the issue or feature request...",
      "support.placeholderMessage": "1. What were you doing when the issue occurred?\n2. Expected vs. actual behavior:\n3. Paste relevant lines from %LocalAppData%\\QuickAudioSwitcher\\logs\\diagnostic.log (optional):",
      "support.btnCopyDiagHelper": "Copy Diagnostic Log Path (%LocalAppData%\\QuickAudioSwitcher\\logs\\diagnostic.log)",
      "support.btnSendPrimary": "Send Support Ticket",
      "support.btnOpenMailto": "Open in Default Mail App (mailto:)",
      "support.btnCopyFormatted": "Copy Formatted Ticket to Clipboard",
      "support.ticketPrivacyNote": "🔒 Zero background telemetry: only the fields you explicitly send above are shared with developerhoangtruong@gmail.com.",
      "support.indieBadge": "Independent Windows Craft",
      "support.btnBuyCoffee": "Buy MTD Studio a Coffee via PayPal",
      "support.btnRateStore": "⭐⭐⭐⭐Rate 5★ on Microsoft Store",
      "support.policy1087Title": "Microsoft Store Policy 10.8.7 Disclosure:",
      "support.policy1087Text": "Contributions via PayPal (paypal.me/Developerhoangtruong) are 100% voluntary tips to support independent software development. Voluntary tips do not unlock in-app Pro features or digital goods; all Pro Lifetime licenses are purchased and managed exclusively through the official Microsoft Store in-app commerce API.",
      "support.directChannelsTitle": "Direct Support & Local Paths",
      "docs.heroBadge": "Quick Audio Switcher v3.4.2 · Smoked Liquid Glass Engine · Loopback REST & WebSocket API",
      "docs.heroTitle": "Quick Audio Switcher v3.4 User Guide & Developer API",
      "docs.heroSubtitle": "Master every desktop surface, mouse gesture, tab-avoidance shortcut, Elgato Stream Deck integration, and local loopback automation endpoint.",
      "docs.ctaSurfaces": "Surface & Gesture Guide",
      "docs.ctaStreamDeck": "Stream Deck 1-Click Setup",
      "docs.ctaApi": "REST & WebSocket API (127.0.0.1:49152)",
      "docs.surfacesTag": "Smoked Liquid Glass Architecture",
      "docs.surfacesSubtitle": "Designed for 120fps fluid response with zero mouse interference over maximized browser tabs and fullscreen games.",
      "docs.islandCardTitle": "Dynamic Island (4 Tabs: Controls · Calendar · Devices · Music) & Tab-Avoidance",
      "docs.islandCardDesc": "A unified frosted Liquid Glass segmented pill at the top of your display with adaptive 5-bar spectrum equalizer, side-by-side Master Volume (60%) + Display Brightness (40%) frosted capsules, and the compact [ ✦ Audio Studio › ] sub-panel drawer.",
      "docs.dockCardTitle": "Unified 3-in-1 Taskbar Dock (316×34)",
      "docs.dockCardDesc": "Replaces three separate desktop widgets with one ultra-compact Smoked Liquid Glass capsule docked cleanly beside your Windows 11 system tray.",
      "docs.edgeCardTitle": "Side Edge Notch (10px Resting Handle)",
      "docs.edgeCardDesc": "Ideal for competitive gamers and multi-monitor workstations who want zero top-edge overlap while keeping instant tactile audio control on the screen border.",
      "docs.shortcutsCardTitle": "Global Keyboard & Mouse Wheel Shortcuts",
      "docs.shortcutsCardDesc": "Control per-application audio sessions, cycle headsets, or summon the Command Palette from anywhere in Windows without alt-tabbing out of your work or game.",
      "docs.sdTag": "Hardware Creator Integration",
      "docs.sdTitle": "Elgato Stream Deck 1-Click Setup Guide",
      "docs.sdSubtitle": "Control output switching, per-app volume dials, Chat-Mix balance, Mic Lock, and Audio Profiles with live dynamic OLED key icons on Stream Deck MK.2, XL, Mini, Neo, and Stream Deck + rotary dials.",
      "docs.apiTag": "Loopback Automation API · 127.0.0.1:49152",
      "docs.apiSubtitle": "Automate Windows audio from Elgato Stream Deck, Touch Portal, AutoHotkey, Node-RED, macro pads, or custom scripts. Strictly bound to 127.0.0.1 (localhost loopback) for 100% network safety."
    },
    vi: {
      "nav.publisherTag": "Nhà phát hành chính thức Microsoft Store",
      "hero.ctaExplore": "Khám phá cả 5 Ứng dụng",
      "hero.trustStore": "MSIX Chữ ký số · Store ID 9PC7TTDCCN2V",
      "hero.trustPrivacy": "Xử lý Cục bộ 100% · Không Theo dõi Đám mây",
      "hero.trustLicense": "Miễn phí Trọn đời · $3.99 Pro Trọn đời",
      "flagship.badge": "BẢN PHÁT HÀNH CHỦ LỰC · v3.4.2.0",
      "flagship.title": "Quick Audio Switcher v3.4.2 — Điều khiển Âm thanh & Thiết bị",
      "flagship.subtitle": "Trải nghiệm thiết kế Smoked Liquid Glass trên Windows 11. Điều khiển đầu ra âm thanh, định tuyến từng ứng dụng, Chat-Mix, Dynamic Island, Thanh Dock 3-trong-1, Side Edge Notch và Elgato Stream Deck chỉ trong tích tắc.",
      "flagship.openStoreApp": "Mở trong Microsoft Store",
      "flagship.webListing": "Xem trên Web ↗",
      "shots.shot1.title": "Dynamic Island 4 Tab, Thanh Dock 3-trong-1 & Side Edge Notch",
      "shots.shot1.desc": "Dynamic Island kính mờ Smoked Liquid Glass với 4 tab Controls, Calendar, Devices & Music cùng chế độ giữ phím Alt xuyên chuột (Ghost Mode).",
      "shots.shot1.short": "Dynamic Island & Bề mặt",
      "shots.shot2.title": "Bảng Điều khiển Bento 4 Tab & Bật/Tắt nhanh Wi-Fi/BT",
      "shots.shot2.desc": "Thanh đôi Âm lượng & Độ sáng màn hình 120fps mượt mà, trang con Audio Studio 5 tính năng và bật/tắt nhanh Wi-Fi & Bluetooth.",
      "shots.shot2.short": "Bảng Điều khiển Bento 4 Tab",
      "shots.shot3.title": "Bộ Trộn Âm lượng Từng Ứng dụng, Định tuyến & Chat-Mix",
      "shots.shot3.desc": "Định tuyến từng ứng dụng ra loa hoặc tai nghe riêng biệt, cân bằng Game/Voice Chat-Mix và giữ Alt + Lăn chuột chỉnh âm lượng cửa sổ đang trỏ.",
      "shots.shot3.short": "Mixer Từng App & Định tuyến",
      "shots.shot4.title": "Thanh Dock Sóng nhạc 3-trong-1 & Side Edge Notch",
      "shots.shot4.desc": "Thanh Dock 316×34 gọn cạnh khay hệ thống với nút [● LIVE] tắt/bật Mic 1 chạm, 16 cột sóng nhạc thời gian thực và lăn chuột ±2% âm lượng.",
      "shots.shot4.short": "Dock 3-trong-1 & Edge Notch",
      "shots.shot5.title": "Plugin Elgato Stream Deck & Local REST/WS API",
      "shots.shot5.desc": "Cài đặt Plugin Elgato Stream Deck chỉ với 1 cú nhấp và máy chủ điều khiển cục bộ REST/WebSocket tại 127.0.0.1:49152.",
      "shots.shot5.short": "Stream Deck & Local API",
      "shelf.eyebrow": "HỆ SINH THÁI MTD STUDIO · 5 ỨNG DỤNG WINDOWS",
      "shelf.title": "Kệ 5 Sản phẩm Bento MTD Studio",
      "shelf.subtitle": "Mỗi tiện ích từ MTD Studio đều được tối ưu gốc cho Windows 11 & 10, kiểm duyệt bởi Microsoft Store và bảo mật cục bộ 100%.",
      "footer.desc": "Tiện ích Windows 11 cao cấp thiết kế theo phong cách Smoked Liquid Glass. Bảo mật cục bộ 100%, không thu thập dữ liệu, phát hành chính thức trên Microsoft Store.",
      "footer.productsHeading": "Sản phẩm",
      "footer.resourcesHeading": "Tài nguyên & Pháp lý",
      "privacy.heroBadge": "Chuẩn Chính sách Microsoft Store 10.5 · Tuân thủ GDPR · CCPA · COPPA",
      "privacy.heroTitle": "Cổng Chính sách Quyền riêng tư MTD Studio",
      "privacy.heroSubtitle": "Kiến trúc Local-First 100%. Không thu thập dữ liệu cá nhân, không theo dõi đám mây, không chứa SDK quảng cáo. Cập nhật lần cuối: 23/11/2026.",
      "privacy.partnerBadge": "THANH SAO CHÉP NHANH CHO MICROSOFT PARTNER CENTER",
      "privacy.partnerTitle": "Chọn Phạm vi Sản phẩm & Sao chép Đường dẫn Trực tiếp",
      "privacy.partnerDesc": "Toàn bộ nội dung chính sách bảo mật được hiển thị sẵn bằng HTML tĩnh để hệ thống kiểm duyệt Microsoft Store xác thực tự động. Chọn từng ứng dụng bên dưới để lọc và sao chép URL cho Partner Center.",
      "privacy.copyUrlBtn": "Sao chép URL Bảo mật cho Partner Center",
      "privacy.tabAll": "Tất cả Ứng dụng MTD Studio (#all)",
      "support.heroBadge": "Hỗ trợ Kỹ thuật Trực tiếp · Phản hồi < 24 Giờ · Bảo mật Log Cục bộ 100%",
      "support.heroTitle": "Trung tâm Hỗ trợ & Gửi Phiếu Yêu cầu MTD Studio",
      "support.heroSubtitle": "Khắc phục sự cố tức thì với Trợ lý Chẩn đoán 3 bước, tra cứu FAQ theo sản phẩm hoặc gửi phiếu hỗ trợ định dạng sẵn tới trực tiếp nhà phát triển.",
      "support.ctaWizard": "Chạy Trợ lý Khắc phục 3 Bước",
      "support.ctaTicket": "Gửi Phiếu Hỗ trợ",
      "support.ctaDocs": "📖 Hướng dẫn Quick Audio Switcher v3.4",
      "support.wizardTag": "Tự Khắc phục Tương tác",
      "support.wizardSubtitle": "Chọn ứng dụng MTD Studio và danh mục vấn đề để xem hướng dẫn chi tiết từng bước hoặc điền sẵn thông tin vào phiếu hỗ trợ.",
      "support.step1Label": "Chọn Sản phẩm",
      "support.step2Label": "Chọn Nhóm Vấn đề",
      "support.step3Label": "Giải pháp Tức thì & Tạo Phiếu",
      "support.step1Heading": "Bước 1 — Bạn cần hỗ trợ cho ứng dụng nào?",
      "support.step2Heading": "Bước 2 — Bạn đang gặp vấn đề gì?",
      "support.catRestorePro": "Khôi phục bản quyền Pro / Mua hàng Store",
      "support.catIslandOverlap": "Dynamic Island che tab trình duyệt",
      "support.catStreamDeck": "Kết nối Elgato Stream Deck / Local API",
      "support.catAudioRouting": "Định tuyến âm thanh từng app / Chat-Mix",
      "support.catDiagnosticBug": "Đính kèm file diagnostic log / Báo lỗi",
      "support.instantFixBadge": "✓ Giải pháp Xác thực Tức thì",
      "support.diagPathLabel": "Đường dẫn File Log Chẩn đoán Cục bộ (Win + R):",
      "support.btnCopyLogPath": "Copy Đường dẫn Log",
      "support.btnPrefillTicket": "Điền sẵn vào Phiếu Hỗ trợ bên dưới ↓",
      "support.faqTag": "Cơ sở Tri thức",
      "support.faqSubtitle": "Lọc theo sản phẩm hoặc tìm kiếm từ khóa cho cả 5 ứng dụng Windows của MTD Studio.",
      "support.filterAll": "Tất cả App (10)",
      "support.faqNoMatch": "Không tìm thấy câu hỏi FAQ phù hợp. Hãy xóa từ khóa tìm kiếm hoặc gửi phiếu hỗ trợ bên dưới!",
      "support.ticketBadge": "Hỗ trợ Trực tiếp từ Kỹ sư",
      "support.labelProduct": "Sản phẩm",
      "support.labelIssueType": "Loại Yêu cầu",
      "support.labelAppVersion": "Phiên bản App",
      "support.labelWinVersion": "Phiên bản Windows",
      "support.labelEmail": "Email của bạn",
      "support.labelSubject": "Tiêu đề",
      "support.labelMessage": "Nội dung / Các bước tái hiện",
      "support.placeholderSubject": "Tóm tắt ngắn gọn sự cố hoặc đề xuất tính năng...",
      "support.placeholderMessage": "1. Bạn đang thao tác gì khi sự cố xảy ra?\n2. Kết quả mong muốn vs. thực tế:\n3. Dán nội dung từ %LocalAppData%\\QuickAudioSwitcher\\logs\\diagnostic.log (nếu có):",
      "support.btnCopyDiagHelper": "Copy đường dẫn Log (%LocalAppData%\\QuickAudioSwitcher\\logs\\diagnostic.log)",
      "support.btnSendPrimary": "Gửi Phiếu Hỗ trợ",
      "support.btnOpenMailto": "Mở trong Ứng dụng Mail (mailto:)",
      "support.btnCopyFormatted": "Copy Phiếu Hỗ trợ vào Clipboard",
      "support.ticketPrivacyNote": "🔒 Không thu thập dữ liệu ngầm: chỉ những thông tin bạn chủ động gửi ở trên mới được chuyển tới developerhoangtruong@gmail.com.",
      "support.indieBadge": "Phần mềm Indie Tâm huyết",
      "support.btnBuyCoffee": "Mời MTD Studio một ly Cà phê qua PayPal",
      "support.btnRateStore": "⭐⭐⭐⭐Đánh giá 5★ trên Microsoft Store",
      "support.policy1087Title": "Thông báo Tuân thủ Chính sách Microsoft Store 10.8.7:",
      "support.policy1087Text": "Khoản đóng góp qua PayPal (paypal.me/Developerhoangtruong) là tiền tip hoàn toàn tự nguyện nhằm khích lệ nhà phát triển độc lập. Khoản ủng hộ này không mở khóa tính năng Pro; mọi bản quyền Pro Lifetime được mua và quản lý độc quyền qua hệ thống thanh toán chính thức của Microsoft Store.",
      "support.directChannelsTitle": "Kênh Hỗ trợ & Đường dẫn Cục bộ",
      "docs.heroBadge": "Quick Audio Switcher v3.4.2 · Giao diện Smoked Liquid Glass · Loopback REST & WebSocket API",
      "docs.heroTitle": "Hướng dẫn Sử dụng Quick Audio Switcher v3.4 & Tài liệu API",
      "docs.heroSubtitle": "Làm chủ mọi bề mặt điều khiển, thao tác cử chỉ chuột, phím tắt tránh đè tab trình duyệt, tích hợp Elgato Stream Deck và Local API.",
      "docs.ctaSurfaces": "Hướng dẫn Bề mặt & Cử chỉ",
      "docs.ctaStreamDeck": "Cài đặt Stream Deck 1 Chạm",
      "docs.ctaApi": "REST & WebSocket API (127.0.0.1:49152)",
      "docs.surfacesTag": "Kiến trúc Smoked Liquid Glass",
      "docs.surfacesSubtitle": "Tối ưu phản hồi 120fps siêu mượt, không cản trở chuột khi dùng trình duyệt toàn màn hình hoặc chơi game.",
      "docs.islandCardTitle": "Dynamic Island (4 Tab: Controls · Calendar · Devices · Music) & Tránh Đè Tab",
      "docs.islandCardDesc": "Viên thuốc kính mờ Smoked Liquid Glass ở mép trên màn hình với cột sóng nhạc 5 dải, thanh đôi Âm lượng (60%) + Độ sáng màn hình (40%) và ngăn kéo [ ✦ Audio Studio › ] gọn gàng.",
      "docs.dockCardTitle": "Thanh Dock Taskbar 3-trong-1 (316×34)",
      "docs.dockCardDesc": "Gom 3 tiện ích rời rạc thành một viên thuốc kính mờ 316×34 duy nhất nằm gọn cạnh khay hệ thống Windows 11.",
      "docs.edgeCardTitle": "Side Edge Notch (Thanh Cạnh Màn hình 10px)",
      "docs.edgeCardDesc": "Lý tưởng cho game thủ và người dùng đa màn hình muốn giữ mép trên hoàn toàn trống trải nhưng vẫn điều khiển âm thanh tức thì.",
      "docs.shortcutsCardTitle": "Phím tắt Toàn cục & Cử chỉ Con lăn Chuột",
      "docs.shortcutsCardDesc": "Chỉnh âm lượng từng ứng dụng đang trỏ chuột, chuyển nhanh tai nghe/loa hoặc mở Command Palette từ bất kỳ đâu mà không cần Alt-Tab.",
      "docs.sdTag": "Tích hợp Phần cứng Streamer",
      "docs.sdTitle": "Hướng dẫn Cài đặt Elgato Stream Deck 1 Chạm",
      "docs.sdSubtitle": "Điều khiển chuyển loa/tai nghe, núm xoay âm lượng từng ứng dụng, cân bằng Chat-Mix, khóa Mic và chuyển Profile âm thanh với icon OLED động thời gian thực.",
      "docs.apiTag": "Loopback Automation API · 127.0.0.1:49152",
      "docs.apiSubtitle": "Tự động hóa âm thanh Windows từ Elgato Stream Deck, Touch Portal, AutoHotkey, Node-RED hoặc script cá nhân. Chỉ lắng nghe trên 127.0.0.1 (localhost) đảm bảo an toàn mạng tuyệt đối."
    }
  };

  function mergeExtraI18n() {
    if (!window.MTD_I18N) return;
    ["en", "vi"].forEach(function (lang) {
      if (!window.MTD_I18N[lang]) window.MTD_I18N[lang] = {};
      var src = EXTRA_I18N[lang] || {};
      Object.keys(src).forEach(function (k) {
        if (!Object.prototype.hasOwnProperty.call(window.MTD_I18N[lang], k)) {
          window.MTD_I18N[lang][k] = src[k];
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     1. Shared Utilities: Toast Notification & Clipboard Helper
     -------------------------------------------------------------------------- */
  var toastTimer = null;

  function showToast(message) {
    var toastEl = document.getElementById("toast-notice");
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.id = "toast-notice";
      toastEl.className = "toast-notice";
      toastEl.setAttribute("role", "status");
      toastEl.setAttribute("aria-live", "polite");
      document.body.appendChild(toastEl);
    }

    var msgSpan = document.getElementById("toast-message");
    if (msgSpan) {
      msgSpan.textContent = message;
    } else {
      toastEl.textContent = message;
    }

    toastEl.classList.add("show");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.classList.remove("show");
    }, 3200);
  }

  window.showMtdToast = showToast;

  function copyToClipboard(text, customToastMessage) {
    var lang = window.getMtdLanguage ? window.getMtdLanguage() : "en";
    var defaultMsg = lang === "vi" ? "✓ Đã sao chép vào bộ nhớ tạm!" : "✓ Copied to clipboard!";
    var toastMsg = customToastMessage || defaultMsg;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        function () {
          showToast(toastMsg);
        },
        function () {
          fallbackCopy(text, toastMsg);
        }
      );
    } else {
      fallbackCopy(text, toastMsg);
    }
  }

  function fallbackCopy(text, toastMsg) {
    try {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.top = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      showToast(toastMsg);
    } catch (err) {
      showToast("Copy failed: " + text);
    }
  }

  function getProductBySlug(slug) {
    var list = window.MTD_PRODUCTS || [];
    for (var i = 0; i < list.length; i++) {
      if (list[i].slug === slug || list[i].id === slug) {
        return list[i];
      }
    }
    return list[0] || null;
  }

  /* --------------------------------------------------------------------------
     2. index.html — Flagship Screenshot Gallery Switcher & Bilingual Shelf Sync
     -------------------------------------------------------------------------- */
  function initScreenshotGallery() {
    var gallery = document.getElementById("flagship-gallery");
    if (!gallery) return;

    var mainImg = document.getElementById("shot-main-img");
    var mainStep = document.getElementById("shot-main-step");
    var mainTitle = document.getElementById("shot-main-title");
    var mainDesc = document.getElementById("shot-main-desc");
    var thumbs = gallery.querySelectorAll(".shot-thumb");

    if (!mainImg || !thumbs.length) return;

    function activateThumb(thumbBtn) {
      for (var i = 0; i < thumbs.length; i++) {
        thumbs[i].classList.remove("active");
        thumbs[i].setAttribute("aria-selected", "false");
      }
      thumbBtn.classList.add("active");
      thumbBtn.setAttribute("aria-selected", "true");

      var newSrc = thumbBtn.getAttribute("data-src");
      var newStep = thumbBtn.getAttribute("data-step");
      var idx = parseInt(thumbBtn.getAttribute("data-index") || "0", 10) + 1;
      var titleKey = "showcase.shot" + idx;
      var descKey = "shots.shot" + idx + ".desc";

      var fallbackTitle = thumbBtn.getAttribute("data-title") || "";
      var fallbackDesc = thumbBtn.getAttribute("data-desc") || "";

      var translatedTitle = window.tMtd ? window.tMtd(titleKey, fallbackTitle) : fallbackTitle;
      var translatedDesc = window.tMtd ? window.tMtd(descKey, fallbackDesc) : fallbackDesc;

      if (newSrc && mainImg.getAttribute("src") !== newSrc) {
        mainImg.style.opacity = "0.35";
        setTimeout(function () {
          mainImg.setAttribute("src", newSrc);
          mainImg.setAttribute("alt", translatedTitle);
          mainImg.style.opacity = "1";
        }, 110);
      }

      if (mainStep && newStep) mainStep.textContent = newStep;
      if (mainTitle) {
        mainTitle.setAttribute("data-i18n", titleKey);
        mainTitle.textContent = translatedTitle;
      }
      if (mainDesc) {
        mainDesc.setAttribute("data-i18n", descKey);
        mainDesc.textContent = " — " + translatedDesc;
      }
    }

    for (var i = 0; i < thumbs.length; i++) {
      (function (btn) {
        btn.addEventListener("click", function () {
          activateThumb(btn);
        });
      })(thumbs[i]);
    }

    window.addEventListener("mtd:langchange", function () {
      var activeBtn = gallery.querySelector(".shot-thumb.active") || thumbs[0];
      if (activeBtn) activateThumb(activeBtn);
    });
  }

  function syncProductShelfTranslations() {
    var grid = document.getElementById("products-grid");
    if (!grid || !window.MTD_PRODUCTS) return;

    var lang = window.getMtdLanguage ? window.getMtdLanguage() : "en";
    var cards = grid.querySelectorAll(".product-card[data-product-slug]");

    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      var slug = card.getAttribute("data-product-slug");
      var prod = getProductBySlug(slug);
      if (!prod) continue;

      var titleEl = card.querySelector(".product-title");
      var taglineEl = card.querySelector(".product-tagline");
      var descEl = card.querySelector(".product-desc");
      var highlightsEl = card.querySelector(".product-highlights");

      if (titleEl && prod.name) {
        titleEl.textContent = prod.name[lang] || prod.name.en;
      }
      if (taglineEl && prod.tagline) {
        taglineEl.textContent = prod.tagline[lang] || prod.tagline.en;
      }
      if (descEl && prod.description) {
        descEl.textContent = prod.description[lang] || prod.description.en;
      }
      if (highlightsEl && prod.highlights && prod.highlights[lang]) {
        var items = prod.highlights[lang];
        highlightsEl.innerHTML = "";
        for (var h = 0; h < items.length; h++) {
          var li = document.createElement("li");
          li.textContent = items[h];
          highlightsEl.appendChild(li);
        }
      }
    }
  }

  /* --------------------------------------------------------------------------
     3. privacy.html — Product Tab Filter & "Copy Privacy URL for Partner Center"
     -------------------------------------------------------------------------- */
  function initPrivacyPortal() {
    var tabsContainer = document.getElementById("privacy-product-tabs");
    var urlDisplay = document.getElementById("privacy-current-url");
    var copyBtn = document.getElementById("copy-privacy-url-btn");

    if (!tabsContainer && !copyBtn) return;

    var tabs = tabsContainer ? tabsContainer.querySelectorAll("[data-privacy-tab]") : [];
    var productSections = document.querySelectorAll("[data-product-section]");

    function getCanonicalPrivacyUrl(slug) {
      var targetHash = "#" + (slug || "all");
      try {
        var loc = window.location;
        if (loc.protocol === "http:" || loc.protocol === "https:") {
          return loc.origin + loc.pathname + targetHash;
        }
      } catch (e) {}
      return "https://mtdstudio.dev/privacy.html" + targetHash;
    }

    function applyPrivacyScope(rawHash, shouldScroll) {
      var cleanSlug = (rawHash || "").replace(/^#/, "").trim().toLowerCase();
      var validSlugs = ["all", "quick-audio-switcher", "habitgrid", "batch-file-renamer", "quick-invoice-maker", "auradesk"];

      // If hash points to a general policy section (e.g. #section-overview), show all product cards
      var isProductSlug = validSlugs.indexOf(cleanSlug) !== -1;
      var activeSlug = isProductSlug ? cleanSlug : "all";

      // Update active pill tab
      for (var i = 0; i < tabs.length; i++) {
        var tab = tabs[i];
        var tabSlug = tab.getAttribute("data-privacy-tab");
        if (tabSlug === activeSlug) {
          tab.classList.add("active");
          tab.setAttribute("aria-selected", "true");
        } else {
          tab.classList.remove("active");
          tab.setAttribute("aria-selected", "false");
        }
      }

      // Highlight or filter product sections while keeping static text accessible
      for (var j = 0; j < productSections.length; j++) {
        var sec = productSections[j];
        var secSlug = sec.getAttribute("data-product-section");
        if (activeSlug === "all") {
          sec.hidden = false;
          sec.style.display = "";
          sec.classList.remove("highlighted");
        } else if (secSlug === activeSlug) {
          sec.hidden = false;
          sec.style.display = "";
          sec.classList.add("highlighted");
        } else {
          sec.classList.remove("highlighted");
          sec.style.display = "none";
        }
      }

      if (urlDisplay) {
        urlDisplay.textContent = getCanonicalPrivacyUrl(activeSlug);
      }

      if (shouldScroll && activeSlug !== "all") {
        var targetEl = document.getElementById(activeSlug);
        if (targetEl && targetEl.scrollIntoView) {
          targetEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }
    }

    // Bind clicks on product filter tabs
    for (var t = 0; t < tabs.length; t++) {
      (function (tabEl) {
        tabEl.addEventListener("click", function (e) {
          var slug = tabEl.getAttribute("data-privacy-tab") || "all";
          if (history.replaceState) {
            history.replaceState(null, "", "#" + slug);
          } else {
            window.location.hash = "#" + slug;
          }
          applyPrivacyScope(slug, false);
          e.preventDefault();
        });
      })(tabs[t]);
    }

    // Copy Privacy URL for Partner Center button
    if (copyBtn) {
      copyBtn.addEventListener("click", function () {
        var currentHash = (window.location.hash || "#all").replace(/^#/, "");
        var fullUrl = getCanonicalPrivacyUrl(currentHash || "all");
        var toastText = window.tMtd
          ? window.tMtd("privacy.copiedToast", "Copied Privacy Policy URL to clipboard!")
          : "Copied Privacy Policy URL to clipboard!";
        copyToClipboard(fullUrl, "✓ " + toastText + " (" + fullUrl + ")");
      });
    }

    window.addEventListener("hashchange", function () {
      applyPrivacyScope(window.location.hash, true);
    });

    applyPrivacyScope(window.location.hash || "#all", false);
  }

  /* --------------------------------------------------------------------------
     4. support.html — 3-Step Troubleshooting Wizard, FAQ Filter/Search & Ticket Form
     -------------------------------------------------------------------------- */
  var WIZARD_SOLUTIONS = {
    "restore-pro": {
      issueType: "Pro License / Store Billing",
      title: {
        en: "How to Restore Your Lifetime Pro License on Any Windows 10/11 PC",
        vi: "Cách Khôi phục Bản quyền Pro Lifetime trên Máy tính Windows 10/11"
      },
      steps: {
        en: [
          "Open the <strong>Microsoft Store</strong> app on Windows and verify you are signed in with the exact Microsoft Account used to purchase <strong>Pro Lifetime ($3.99)</strong>.",
          "Open the application → <strong>Settings (Gear Icon) → Pro License / Account</strong> and click <strong>Restore Purchase / Sync Store Entitlement</strong>.",
          "Your digital license is permanently bound to your Microsoft Account (supports up to 10 Windows PCs with zero recurring subscriptions). If the Windows Store cache is stale, press <kbd>Win + R</kbd>, run <code>wsreset.exe</code>, and relaunch the app."
        ],
        vi: [
          "Mở ứng dụng <strong>Microsoft Store</strong> trên Windows và kiểm tra bạn đã đăng nhập đúng Tài khoản Microsoft từng dùng để mua <strong>Pro Lifetime ($3.99)</strong>.",
          "Mở ứng dụng → <strong>Cài đặt (Biểu tượng Bánh răng) → Bản quyền Pro</strong> và bấm <strong>Khôi phục Giao dịch mua (Restore Purchase)</strong>.",
          "Bản quyền vĩnh viễn được gắn liền với Tài khoản Microsoft của bạn (hỗ trợ tối đa 10 máy tính Windows, không thu phí hàng tháng). Nếu bộ nhớ đệm Store bị kẹt, nhấn <kbd>Win + R</kbd>, chạy <code>wsreset.exe</code> rồi mở lại ứng dụng."
        ]
      }
    },
    "island-overlap": {
      issueType: "Bug Report",
      title: {
        en: "Preventing Dynamic Island from Blocking Browser Tabs (Alt Ghost Mode & Dragging)",
        vi: "Cách Bấm Xuyên Qua Dynamic Island Khi Trùng Tab Trình Duyệt (Giữ Alt & Kéo Vị Trí)"
      },
      steps: {
        en: [
          "<strong>Hold the <code>Alt</code> key</strong> at any time: Dynamic Island immediately enters <strong>Ghost Click-Through Mode (Opacity 0.22)</strong> so you can click, close, or drag browser tabs directly underneath.",
          "<strong>Reposition Along Top Edge:</strong> Click and drag the resting Dynamic Island horizontally left or right to park it away from your active tabs.",
          "<strong>Right-Click Quick Actions:</strong> Right-click Dynamic Island and choose <em>Hide for 5 seconds</em>, <em>Reset to center</em>, or switch your preferred surface to the <strong>Unified 3-in-1 Taskbar Dock</strong> or <strong>Side Edge Notch</strong>."
        ],
        vi: [
          "<strong>Giữ phím <code>Alt</code> bất kỳ lúc nào:</strong> Dynamic Island lập tức chuyển sang <strong>Chế độ Xuyên chuột Ghost Mode (Độ mờ 0.22)</strong> giúp bạn bấm, đóng hoặc kéo tab trình duyệt ngay bên dưới.",
          "<strong>Kéo sang Trái / Phải dọc mép trên:</strong> Nhấn giữ và kéo viên thuốc Dynamic Island sang vùng trống trên thanh tiêu đề.",
          "<strong>Menu Chuột phải Nhanh:</strong> Chuột phải vào Dynamic Island chọn <em>Ẩn trong 5 giây (Hide for 5 seconds)</em>, <em>Đặt lại chính giữa</em>, hoặc chuyển sang dùng <strong>Thanh Dock 3-trong-1</strong> hay <strong>Side Edge Notch</strong>."
        ]
      }
    },
    "streamdeck-api": {
      issueType: "Stream Deck & API",
      title: {
        en: "Connecting Elgato Stream Deck & Enabling the Local Control Server (127.0.0.1:49152)",
        vi: "Kết nối Elgato Stream Deck & Bật Máy chủ Điều khiển Cục bộ (127.0.0.1:49152)"
      },
      steps: {
        en: [
          "Open <strong>Quick Audio Switcher → Settings → Integrations &amp; API</strong> and click <strong>Install Stream Deck Plugin</strong>.",
          "This automatically enables the loopback server on <code>http://127.0.0.1:49152</code> (and WebSocket <code>ws://127.0.0.1:49152/ws</code>) and launches <code>com.mtdstudio.quickaudioswitcher.streamDeckPlugin</code>.",
          "Test connectivity anytime by running <code>curl -s http://127.0.0.1:49152/api/v1/status</code> or visiting our <a href=\"docs.html#api-reference\">Local REST &amp; WebSocket API Reference</a>."
        ],
        vi: [
          "Mở <strong>Quick Audio Switcher → Cài đặt → Integrations &amp; API</strong> và bấm nút <strong>Install Stream Deck Plugin</strong>.",
          "Thao tác này tự động bật Local Control Server tại <code>http://127.0.0.1:49152</code> (cùng WebSocket <code>ws://127.0.0.1:49152/ws</code>) và khởi chạy gói <code>com.mtdstudio.quickaudioswitcher.streamDeckPlugin</code>.",
          "Kiểm tra nhanh kết nối bằng lệnh <code>curl -s http://127.0.0.1:49152/api/v1/status</code> hoặc xem trang <a href=\"docs.html#api-reference\">Tài liệu Local REST &amp; WebSocket API</a>."
        ]
      }
    },
    "audio-routing": {
      issueType: "Bug Report",
      title: {
        en: "Configuring Per-App Audio Output Routing, Chat-Mix & Audio Studio Toggles",
        vi: "Cấu hình Định tuyến Âm thanh Từng Ứng dụng, Chat-Mix & Audio Studio"
      },
      steps: {
        en: [
          "Open the <strong>Controls</strong> tab on Dynamic Island and click the <strong>Mixer</strong> button beside the Master Volume capsule (or press <kbd>Ctrl+Alt+S</kbd>).",
          "Select any active application (e.g. Spotify, Discord, Chrome, Game) to route its audio output to a dedicated playback device or adjust its volume with <kbd>Alt + Mouse Wheel</kbd> directly over the app window.",
          "Click the compact <strong><code>[ ✦ Audio Studio › ]</code></strong> frosted pill on the Controls tab to toggle <em>Smart Auto-Duck</em>, <em>Spatial 3D Audio</em>, <em>Safe Vol &amp; Mic Lock</em>, <em>Solo Focus</em>, or <em>Call Autopilot</em>."
        ],
        vi: [
          "Mở tab <strong>Controls</strong> trên Dynamic Island và bấm nút <strong>Mixer</strong> cạnh thanh Âm lượng (hoặc nhấn <kbd>Ctrl+Alt+S</kbd>).",
          "Chọn ứng dụng đang phát âm thanh (VD: Spotify, Discord, Chrome, Game) để chuyển riêng đầu ra của ứng dụng đó sang Loa hoặc Tai nghe, hoặc giữ <kbd>Alt + Con lăn chuột</kbd> ngay trên cửa sổ ứng dụng để chỉnh âm lượng.",
          "Bấm vào thanh kính mờ <strong><code>[ ✦ Audio Studio › ]</code></strong> trên tab Controls để bật/tắt 5 tính năng: <em>Smart Auto-Duck</em>, <em>Spatial 3D Audio</em>, <em>Safe Vol &amp; Mic Lock</em>, <em>Solo Focus</em> và <em>Call Autopilot</em>."
        ]
      }
    },
    "diagnostic-bug": {
      issueType: "Bug Report",
      title: {
        en: "How to Locate Your Local Diagnostic Log & Submit a Reproducible Bug Report",
        vi: "Cách Lấy File Log Chẩn đoán Cục bộ & Gửi Báo cáo Lỗi Chi tiết"
      },
      steps: {
        en: [
          "Click <strong>Copy Log Path</strong> below, press <kbd>Win + R</kbd> on your keyboard, paste the path, and press <kbd>Enter</kbd> to open the local diagnostic log.",
          "All MTD Studio apps write logs 100% locally inside <code>%LocalAppData%</code> and never upload telemetry in the background.",
          "Click <strong>Open Pre-Filled Ticket Below ↓</strong> to jump straight to the support form with your selected product, app version, and log path ready to send to <code>developerhoangtruong@gmail.com</code>."
        ],
        vi: [
          "Bấm nút <strong>Copy Đường dẫn Log</strong> bên dưới, nhấn tổ hợp <kbd>Win + R</kbd> trên bàn phím, dán đường dẫn và nhấn <kbd>Enter</kbd> để mở file log chẩn đoán cục bộ.",
          "Mọi ứng dụng MTD Studio chỉ ghi nhật ký kỹ thuật 100% trên ổ cứng tại <code>%LocalAppData%</code> và không bao giờ tự động tải dữ liệu lên mạng.",
          "Bấm <strong>Điền sẵn vào Phiếu Hỗ trợ bên dưới ↓</strong> để chuyển xuống biểu mẫu đã được điền sẵn tên sản phẩm, phiên bản và đường dẫn log gửi tới <code>developerhoangtruong@gmail.com</code>."
        ]
      }
    }
  };

  function initSupportCenter() {
    var wizardCard = document.querySelector(".wizard-card");
    var faqList = document.getElementById("faq-list");
    var ticketForm = document.getElementById("support-ticket-form");

    if (!wizardCard && !faqList && !ticketForm) return;

    var selectedProductSlug = "quick-audio-switcher";
    var selectedCategoryKey = "restore-pro";

    // Check URL query string ?app=<slug>
    try {
      var params = new URLSearchParams(window.location.search);
      var appParam = (params.get("app") || "").trim().toLowerCase();
      if (appParam && getProductBySlug(appParam)) {
        selectedProductSlug = getProductBySlug(appParam).slug;
      }
    } catch (e) {}

    var prodBtns = document.querySelectorAll(".wizard-product-btn[data-product]");
    var catBtns = document.querySelectorAll(".wizard-category-btn[data-category]");
    var badgeEl = document.getElementById("wizard-solution-badge");
    var titleEl = document.getElementById("wizard-solution-title");
    var bodyEl = document.getElementById("wizard-solution-body");
    var pathCodeEl = document.getElementById("wizard-diag-path");
    var copyPathBtn = document.getElementById("wizard-copy-path-btn");
    var prefillBtn = document.getElementById("wizard-prefill-ticket-btn");

    var ticketProductSelect = document.getElementById("ticket-product");
    var ticketIssueSelect = document.getElementById("ticket-issue-type");
    var ticketVersionInput = document.getElementById("ticket-app-version");
    var ticketSubjectInput = document.getElementById("ticket-subject");
    var ticketMessageInput = document.getElementById("ticket-message");
    var helperCopyDiagBtn = document.getElementById("copy-diag-log-btn");

    function renderWizardSolution() {
      var lang = window.getMtdLanguage ? window.getMtdLanguage() : "en";
      var prod = getProductBySlug(selectedProductSlug);
      var sol = WIZARD_SOLUTIONS[selectedCategoryKey] || WIZARD_SOLUTIONS["restore-pro"];

      // Sync active button states
      for (var i = 0; i < prodBtns.length; i++) {
        var isProdActive = prodBtns[i].getAttribute("data-product") === selectedProductSlug;
        prodBtns[i].classList.toggle("active", isProdActive);
        prodBtns[i].setAttribute("aria-checked", isProdActive ? "true" : "false");
      }
      for (var j = 0; j < catBtns.length; j++) {
        var isCatActive = catBtns[j].getAttribute("data-category") === selectedCategoryKey;
        catBtns[j].classList.toggle("active", isCatActive);
        catBtns[j].setAttribute("aria-checked", isCatActive ? "true" : "false");
      }

      var prodName = prod && prod.name ? (prod.name[lang] || prod.name.en) : "Quick Audio Switcher";
      var logPath = (prod && prod.logPath) ? prod.logPath : "%LocalAppData%\\QuickAudioSwitcher\\logs\\diagnostic.log";

      if (badgeEl) {
        badgeEl.textContent = prodName + " (" + (prod ? prod.version : "v3.4.2.0") + ") · " + sol.issueType;
      }
      if (titleEl) {
        titleEl.textContent = sol.title[lang] || sol.title.en;
      }
      if (bodyEl) {
        var stepItems = sol.steps[lang] || sol.steps.en;
        var html = '<ol class="solution-steps-list">';
        for (var s = 0; s < stepItems.length; s++) {
          html += "<li>" + stepItems[s] + "</li>";
        }
        html += "</ol>";
        bodyEl.innerHTML = html;
      }
      if (pathCodeEl) {
        pathCodeEl.textContent = logPath;
      }
      if (copyPathBtn) {
        copyPathBtn.setAttribute("data-copy-text", logPath);
      }
      if (helperCopyDiagBtn) {
        helperCopyDiagBtn.setAttribute("data-copy-text", logPath);
      }
    }

    function syncTicketProduct(slug) {
      var prod = getProductBySlug(slug);
      if (!prod) return;
      if (ticketProductSelect) {
        ticketProductSelect.value = prod.slug;
      }
      if (ticketVersionInput && prod.version) {
        ticketVersionInput.value = prod.version;
      }
      if (helperCopyDiagBtn && prod.logPath) {
        helperCopyDiagBtn.setAttribute("data-copy-text", prod.logPath);
      }
    }

    for (var p = 0; p < prodBtns.length; p++) {
      (function (btn) {
        btn.addEventListener("click", function () {
          selectedProductSlug = btn.getAttribute("data-product") || "quick-audio-switcher";
          renderWizardSolution();
          syncTicketProduct(selectedProductSlug);
        });
      })(prodBtns[p]);
    }

    for (var c = 0; c < catBtns.length; c++) {
      (function (btn) {
        btn.addEventListener("click", function () {
          selectedCategoryKey = btn.getAttribute("data-category") || "restore-pro";
          renderWizardSolution();
        });
      })(catBtns[c]);
    }

    if (ticketProductSelect) {
      ticketProductSelect.addEventListener("change", function () {
        var newSlug = ticketProductSelect.value;
        syncTicketProduct(newSlug);
      });
    }

    if (prefillBtn) {
      prefillBtn.addEventListener("click", function () {
        var lang = window.getMtdLanguage ? window.getMtdLanguage() : "en";
        var prod = getProductBySlug(selectedProductSlug);
        var sol = WIZARD_SOLUTIONS[selectedCategoryKey] || WIZARD_SOLUTIONS["restore-pro"];

        syncTicketProduct(selectedProductSlug);
        if (ticketIssueSelect && sol.issueType) {
          ticketIssueSelect.value = sol.issueType;
        }
        if (ticketSubjectInput) {
          var prodShort = prod && prod.name ? (prod.name[lang] || prod.name.en) : "Quick Audio Switcher";
          ticketSubjectInput.value = "[" + prodShort + "] " + (sol.title[lang] || sol.title.en);
        }
        if (ticketMessageInput && !ticketMessageInput.value.trim()) {
          var logPath = (prod && prod.logPath) ? prod.logPath : "%LocalAppData%\\QuickAudioSwitcher\\logs\\diagnostic.log";
          ticketMessageInput.value =
            "Product: " + (prod && prod.name ? prod.name.en : "Quick Audio Switcher") + " (" + (prod ? prod.version : "v3.4.2.0") + ")\n" +
            "Issue Category: " + sol.issueType + "\n" +
            "Diagnostic Log Path: " + logPath + "\n\n" +
            "Details / Steps to Reproduce:\n1. ";
        }

        var ticketSec = document.getElementById("ticket-section");
        if (ticketSec && ticketSec.scrollIntoView) {
          ticketSec.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        if (ticketSubjectInput) {
          setTimeout(function () {
            ticketSubjectInput.focus();
          }, 400);
        }
      });
    }

    // Bind copy-path buttons on support.html
    var pathCopyButtons = document.querySelectorAll(".copy-path-btn");
    for (var b = 0; b < pathCopyButtons.length; b++) {
      (function (btn) {
        btn.addEventListener("click", function () {
          var pathText = btn.getAttribute("data-copy-text") || "%LocalAppData%\\QuickAudioSwitcher\\logs\\diagnostic.log";
          var lang = window.getMtdLanguage ? window.getMtdLanguage() : "en";
          var msg = lang === "vi"
            ? "✓ Đã sao chép đường dẫn Log: " + pathText
            : "✓ Copied Diagnostic Log Path: " + pathText;
          copyToClipboard(pathText, msg);
        });
      })(pathCopyButtons[b]);
    }

    // FAQ Accordion & Filter/Search
    var faqFilterPills = document.querySelectorAll("#faq-product-pills [data-faq-filter]");
    var faqSearchInput = document.getElementById("faq-search-input");
    var faqItems = faqList ? faqList.querySelectorAll(".faq-item") : [];
    var faqEmptyState = document.getElementById("faq-empty-state");
    var activeFaqFilter = "all";

    // Accordion expand/collapse
    for (var f = 0; f < faqItems.length; f++) {
      (function (item) {
        var qBtn = item.querySelector(".faq-question");
        if (qBtn) {
          qBtn.addEventListener("click", function () {
            var isOpen = item.classList.toggle("open");
            qBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
          });
        }
      })(faqItems[f]);
    }

    function filterFaqs() {
      var query = faqSearchInput ? faqSearchInput.value.trim().toLowerCase() : "";
      var visibleCount = 0;

      for (var i = 0; i < faqItems.length; i++) {
        var item = faqItems[i];
        var itemProd = item.getAttribute("data-product") || "";
        var matchesProd = activeFaqFilter === "all" || itemProd === activeFaqFilter;
        var text = (item.textContent || "").toLowerCase();
        var matchesQuery = !query || text.indexOf(query) !== -1;

        if (matchesProd && matchesQuery) {
          item.hidden = false;
          item.style.display = "";
          visibleCount++;
        } else {
          item.hidden = true;
          item.style.display = "none";
        }
      }

      if (faqEmptyState) {
        faqEmptyState.hidden = visibleCount > 0;
      }
    }

    for (var fp = 0; fp < faqFilterPills.length; fp++) {
      (function (pill) {
        pill.addEventListener("click", function () {
          activeFaqFilter = pill.getAttribute("data-faq-filter") || "all";
          for (var k = 0; k < faqFilterPills.length; k++) {
            var isMatch = faqFilterPills[k] === pill;
            faqFilterPills[k].classList.toggle("active", isMatch);
            faqFilterPills[k].setAttribute("aria-selected", isMatch ? "true" : "false");
          }
          filterFaqs();
        });
      })(faqFilterPills[fp]);
    }

    if (faqSearchInput) {
      faqSearchInput.addEventListener("input", filterFaqs);
    }

    // If URL had ?app=<slug>, auto-filter FAQ pill and pre-select wizard & form
    if (selectedProductSlug) {
      syncTicketProduct(selectedProductSlug);
      renderWizardSolution();
      if ( window.location.search.indexOf("app=") !== -1 ) {
        for (var k = 0; k < faqFilterPills.length; k++) {
          if (faqFilterPills[k].getAttribute("data-faq-filter") === selectedProductSlug) {
            faqFilterPills[k].click();
            break;
          }
        }
      }
    }

    // Smart Support Ticket Form (3 Reliable Delivery Modes)
    if (ticketForm) {
      var btnMailto = document.getElementById("btn-mailto-ticket");
      var btnCopyTicket = document.getElementById("btn-copy-ticket");

      function buildTicketPayload() {
        var prodSlug = ticketProductSelect ? ticketProductSelect.value : "quick-audio-switcher";
        var prodObj = getProductBySlug(prodSlug);
        var prodTitle = prodObj && prodObj.name ? prodObj.name.en : prodSlug;
        var issueType = ticketIssueSelect ? ticketIssueSelect.value : "Bug Report";
        var appVersion = ticketVersionInput ? ticketVersionInput.value.trim() : "v3.4.2.0";
        var winSelect = document.getElementById("ticket-win-version");
        var winVersion = winSelect ? winSelect.value : "Windows 11 24H2/23H2";
        var emailInput = document.getElementById("ticket-email");
        var email = emailInput && emailInput.value.trim() ? emailInput.value.trim() : "Not provided";
        var subject = ticketSubjectInput && ticketSubjectInput.value.trim()
          ? ticketSubjectInput.value.trim()
          : "[" + prodTitle + " " + appVersion + "] " + issueType;
        var message = ticketMessageInput && ticketMessageInput.value.trim()
          ? ticketMessageInput.value.trim()
          : "(No additional message entered)";
        var logPath = prodObj && prodObj.logPath
          ? prodObj.logPath
          : "%LocalAppData%\\QuickAudioSwitcher\\logs\\diagnostic.log";

        var formattedBody =
          "=== MTD STUDIO SUPPORT TICKET ===\n" +
          "Product: " + prodTitle + "\n" +
          "Issue Type: " + issueType + "\n" +
          "App Version: " + appVersion + "\n" +
          "Windows Version: " + winVersion + "\n" +
          "Reply-To Email: " + email + "\n" +
          "Local Log Path: " + logPath + "\n" +
          "Submitted At: " + new Date().toISOString() + "\n" +
          "=================================\n\n" +
          "Subject: " + subject + "\n\n" +
          "Message / Steps to Reproduce:\n" +
          message + "\n";

        var supportEmail = (window.MTD_CONFIG && window.MTD_CONFIG.supportEmail)
          ? window.MTD_CONFIG.supportEmail
          : "developerhoangtruong@gmail.com";

        var mailtoUrl =
          "mailto:" + encodeURIComponent(supportEmail) +
          "?subject=" + encodeURIComponent("[MTD Support] " + subject) +
          "&body=" + encodeURIComponent(formattedBody);

        return {
          prodTitle: prodTitle,
          issueType: issueType,
          appVersion: appVersion,
          winVersion: winVersion,
          email: email,
          subject: subject,
          message: message,
          formattedBody: formattedBody,
          supportEmail: supportEmail,
          mailtoUrl: mailtoUrl
        };
      }

      // Mode 1: Primary Submit (Web3Forms if key configured; otherwise opens mailto: AND copies to clipboard with confirmation toast)
      ticketForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var data = buildTicketPayload();
        var web3Key = (window.MTD_CONFIG && window.MTD_CONFIG.web3FormsKey)
          ? window.MTD_CONFIG.web3FormsKey.trim()
          : "";
        var lang = window.getMtdLanguage ? window.getMtdLanguage() : "en";

        if (web3Key) {
          var submitBtn = document.getElementById("btn-submit-ticket");
          if (submitBtn) submitBtn.disabled = true;

          fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({
              access_key: web3Key,
              subject: "[MTD Support] " + data.subject,
              from_name: data.email,
              email: data.email,
              product: data.prodTitle,
              issue_type: data.issueType,
              app_version: data.appVersion,
              windows_version: data.winVersion,
              message: data.formattedBody
            })
          })
            .then(function (res) {
              return res.json();
            })
            .then(function (result) {
              if (submitBtn) submitBtn.disabled = false;
              if (result && result.success) {
                showToast(
                  lang === "vi"
                    ? "✓ Đã gửi phiếu hỗ trợ thành công tới MTD Studio!"
                    : "✓ Support ticket sent directly to MTD Studio!"
                );
                ticketForm.reset();
              } else {
                copyToClipboard(
                  data.formattedBody,
                  lang === "vi"
                    ? "✓ Đã sao chép phiếu & đang mở ứng dụng Email (developerhoangtruong@gmail.com)!"
                    : "✓ Ticket copied to clipboard & opening mail app (developerhoangtruong@gmail.com)!"
                );
                window.location.href = data.mailtoUrl;
              }
            })
            .catch(function () {
              if (submitBtn) submitBtn.disabled = false;
              copyToClipboard(
                data.formattedBody,
                lang === "vi"
                  ? "✓ Đã sao chép phiếu & đang mở ứng dụng Email (developerhoangtruong@gmail.com)!"
                  : "✓ Ticket copied to clipboard & opening mail app (developerhoangtruong@gmail.com)!"
              );
              window.location.href = data.mailtoUrl;
            });
        } else {
          copyToClipboard(
            data.formattedBody,
            lang === "vi"
              ? "✓ Đã sao chép phiếu vào Clipboard & mở ứng dụng Email tới developerhoangtruong@gmail.com!"
              : "✓ Formatted ticket copied to clipboard & opening mail app to developerhoangtruong@gmail.com!"
          );
          setTimeout(function () {
            window.location.href = data.mailtoUrl;
          }, 180);
        }
      });

      // Mode 2: Secondary button — Open in Default Mail App (mailto:)
      if (btnMailto) {
        btnMailto.addEventListener("click", function () {
          var data = buildTicketPayload();
          var lang = window.getMtdLanguage ? window.getMtdLanguage() : "en";
          showToast(
            lang === "vi"
              ? "Đang mở ứng dụng Email mặc định (developerhoangtruong@gmail.com)..."
              : "Opening default mail app (developerhoangtruong@gmail.com)..."
          );
          window.location.href = data.mailtoUrl;
        });
      }

      // Mode 3: Tertiary button — Copy Formatted Ticket to Clipboard
      if (btnCopyTicket) {
        btnCopyTicket.addEventListener("click", function () {
          var data = buildTicketPayload();
          var lang = window.getMtdLanguage ? window.getMtdLanguage() : "en";
          copyToClipboard(
            data.formattedBody,
            lang === "vi"
              ? "✓ Đã sao chép toàn bộ Phiếu Hỗ trợ định dạng sẵn vào Clipboard!"
              : "✓ Copied formatted support ticket to clipboard! Paste into any email to developerhoangtruong@gmail.com."
          );
        });
      }
    }

    window.addEventListener("mtd:langchange", function () {
      renderWizardSolution();
    });
  }

  /* --------------------------------------------------------------------------
     5. docs.html — 1-Click Code Snippet Copy Buttons (curl / PowerShell)
     -------------------------------------------------------------------------- */
  function initDocsCodeCopy() {
    var copyButtons = document.querySelectorAll(".copy-btn[data-copy-code]");
    if (!copyButtons.length) return;

    for (var i = 0; i < copyButtons.length; i++) {
      (function (btn) {
        btn.addEventListener("click", function () {
          var snippet = btn.getAttribute("data-copy-code") || "";
          if (!snippet) return;

          var originalHtml = btn.innerHTML;
          var lang = window.getMtdLanguage ? window.getMtdLanguage() : "en";
          var isPs = snippet.indexOf("Invoke-RestMethod") !== -1 || snippet.indexOf("ClientWebSocket") !== -1;
          var label = isPs ? "PowerShell" : "curl";

          var toastMsg = lang === "vi"
            ? "✓ Đã sao chép lệnh " + label + " vào Clipboard!"
            : "✓ Copied " + label + " snippet to clipboard!";

          copyToClipboard(snippet, toastMsg);

          btn.innerHTML = lang === "vi" ? "✓ Đã chép" : "✓ Copied!";
          setTimeout(function () {
            btn.innerHTML = originalHtml;
          }, 1600);
        });
      })(copyButtons[i]);
    }
  }

  /* --------------------------------------------------------------------------
     6. Initialize All Modules on DOMContentLoaded
     -------------------------------------------------------------------------- */
  function bootMtdApp() {
    mergeExtraI18n();
    if (window.applyMtdTranslations) {
      window.applyMtdTranslations(document);
    }

    initScreenshotGallery();
    syncProductShelfTranslations();
    initPrivacyPortal();
    initSupportCenter();
    initDocsCodeCopy();

    window.addEventListener("mtd:langchange", function () {
      syncProductShelfTranslations();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootMtdApp);
  } else {
    bootMtdApp();
  }
})();
