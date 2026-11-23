/* ==========================================================================
   MTD Studio — Bilingual Internationalization Engine (EN default / VI)
   Automatically translates [data-i18n], [data-i18n-placeholder], [data-i18n-title],
   persists in localStorage("mtd_lang"), and dispatches "mtd:langchange" on window.
   ========================================================================== */

window.MTD_I18N = {
  en: {
    // Navigation & Header
    "nav.brandTag": "Official Microsoft Store Publisher",
    "nav.publisherTag": "Microsoft Store Publisher",
    "nav.products": "Products",
    "nav.docs": "Docs & API",
    "nav.support": "Support Center",
    "nav.privacy": "Privacy Policy",
    "nav.donate": "Support MTD",
    "nav.getFlagship": "Get Quick Audio Switcher",

    // Hero Section (index.html)
    "hero.badge": "Official Microsoft Store Publisher · 100% Local-First Privacy · No Subscriptions",
    "hero.title": "High-Craft Windows 11 Utilities by MTD Studio",
    "hero.subtitle": "Native, ultra-fast desktop apps designed in Smoked Liquid Glass. Built for creators, streamers, and power users worldwide.",
    "hero.ctaPrimary": "Get Quick Audio Switcher v3.4",
    "hero.ctaSecondary": "Explore All 5 Apps",
    "hero.ctaExplore": "Explore All 5 Apps",
    "hero.ctaDocs": "API & Stream Deck Docs",
    "hero.trustStore": "Signed MSIX · Store ID 9PC7TTDCCN2V",
    "hero.trustPrivacy": "100% Local Execution · No Cloud Tracking",
    "hero.trustLicense": "Free Forever Core · $3.99 Lifetime Pro",
    "hero.trust1": "100% Local-First Execution",
    "hero.trust2": "Zero Telemetry or Ads",
    "hero.trust3": "Microsoft Store Certified",
    "hero.trust4": "One-Time Pro Lifetime ($3.99)",

    // Flagship Showcase (index.html)
    "flagship.badge": "FLAGSHIP RELEASE · v3.4.2.0",
    "flagship.title": "Quick Audio Switcher v3.4.2 — Sound & Device Controller",
    "flagship.subtitle": "Experience macOS-inspired Smoked Liquid Glass on Windows 11. Control audio outputs, per-app routing, Chat-Mix, Dynamic Island, Unified 3-in-1 Spectrum Dock, Side Edge Notch, and Elgato Stream Deck in milliseconds.",
    "flagship.openStoreApp": "Open in Microsoft Store",
    "flagship.webListing": "Web Listing ↗",
    "shots.shot1.title": "Dynamic Island 4-Tab, Unified Dock & Side Edge Notch",
    "shots.shot1.desc": "Smoked Liquid Glass top-edge Dynamic Island with Controls, Calendar, Devices & Music tabs plus Alt click-through Ghost Mode.",
    "shots.shot1.short": "Dynamic Island & Surfaces",
    "shots.shot2.short": "4-Tab Bento Command Center",
    "shots.shot3.short": "Per-App Mixer & Routing",
    "shots.shot4.short": "3-in-1 Dock & Edge Notch",
    "shots.shot5.short": "Stream Deck & Local API",

    // Free vs Pro Comparison (index.html)
    "tiers.heading": "Free Forever vs. Pro Lifetime ($3.99 One-Time)",
    "tiers.subheading": "No recurring subscriptions, no cloud accounts, no nag screens. Enjoy a generous Free Forever edition or unlock all 5 flagship Pro power pillars with a single lifetime purchase via Microsoft Store.",
    "tiers.free.badge": "FREE FOREVER",
    "tiers.free.name": "Core Edition",
    "tiers.free.tagline": "Essential daily audio & desktop control with zero ads or limits on device switching.",
    "tiers.free.period": "Forever · No Ads",
    "tiers.free.f1Title": "Instant Output & Input Switching",
    "tiers.free.f1Desc": "1-click speaker, headphone, and microphone switching from system tray, flyout, and global hotkeys (Ctrl+Alt+D / Ctrl+Alt+M).",
    "tiers.free.f2Title": "Smoked Liquid Glass Dynamic Island (4 Tabs)",
    "tiers.free.f2Desc": "Controls, Calendar, Devices, and Now Playing Media tabs with 120fps Volume & Display Brightness sliders and Alt Ghost Mode.",
    "tiers.free.f3Title": "Unified 3-in-1 Taskbar Dock & Side Edge Notch",
    "tiers.free.f3Desc": "Live Mic indicator, 16-bar real-time audio spectrum visualizer, and ±2% mouse wheel volume control directly on screen edge.",
    "tiers.free.f4Title": "Per-App Volume Mixer & Alt + Wheel Gesture",
    "tiers.free.f4Desc": "Adjust individual application volume levels on the fly or hold Alt + Mouse Wheel over any window to tune its volume.",
    "tiers.free.f5Title": "Instant WinRT Wi-Fi, Bluetooth & Pomodoro Timer",
    "tiers.free.f5Desc": "Toggle system radios locally without opening Windows Settings and track deep focus sessions from the top pill.",
    "tiers.free.cta": "Download Free on Microsoft Store",
    "tiers.pro.badge": "PRO LIFETIME · 7-DAY FREE TRIAL",
    "tiers.pro.name": "Pro Studio Edition",
    "tiers.pro.tagline": "Everything in Free, plus 5 studio-grade audio routing, automation & hardware API pillars.",
    "tiers.pro.period": "One-Time · Lifetime License",
    "tiers.pro.p1Title": "1. Per-App Output Routing & Game/Voice Chat-Mix",
    "tiers.pro.p1Desc": "Route Spotify to speakers while keeping Discord and games on your headset. Balance Game vs. Voice Chat-Mix in real time.",
    "tiers.pro.p2Title": "2. Audio Studio: Auto-Duck, Call Autopilot & Safe Hearing",
    "tiers.pro.p2Desc": "Automatically lower background music during voice calls, auto-pause media when a mic call begins, toggle Spatial 3D Sonic, and solo active apps.",
    "tiers.pro.p3Title": "3. Pro Desktop Surfaces, Radial Wheel & Liquid Glass Themes",
    "tiers.pro.p3Desc": "Summon the Ctrl+Alt+W Radial HUD Wheel, Ctrl+Alt+K Command Palette, custom Smoked Liquid Glass accent palettes, and smart acoustic profiles.",
    "tiers.pro.p4Title": "4. Mic Gain Lock, Anti-Hijack & Bluetooth Spike Guards",
    "tiers.pro.p4Desc": "Lock your microphone level so apps cannot alter your gain, block virtual drivers from hijacking default audio, and cap 100% Bluetooth reconnect spikes.",
    "tiers.pro.p5Title": "5. Elgato Stream Deck Plugin & Local REST / WebSocket API",
    "tiers.pro.p5Desc": "1-click Stream Deck plugin installation plus authenticated loopback REST & WebSocket API (127.0.0.1:49152) for custom macro keys and automation.",
    "tiers.pro.cta": "Get Pro Lifetime ($3.99) · 7-Day Free Trial",

    // Product Shelf (index.html)
    "shelf.eyebrow": "MTD STUDIO ECOSYSTEM · 5 WINDOWS APPS",
    "shelf.title": "5-App Bento Product Shelf",
    "shelf.subtitle": "Every MTD Studio utility is crafted natively for Windows 11 & 10, verified by Microsoft Store, and built on a strict zero-telemetry, local-first architecture.",
    "products.getStore": "Get on Microsoft Store",
    "products.webStore": "Web Store ↗",
    "products.supportBtn": "Support & FAQ",
    "products.privacyBtn": "Privacy Policy",
    "products.docsBtn": "User Guide & API",

    // Privacy Policy Page (privacy.html)
    "privacy.heroBadge": "Microsoft Store Policy 10.5 · GDPR · CCPA · COPPA Compliant",
    "privacy.heroTitle": "MTD Studio Privacy Policy Portal",
    "privacy.heroSubtitle": "100% Local-First Architecture. Zero Personal Data Collection, Zero Cloud Telemetry, Zero Third-Party Advertising SDKs. Effective Date & Last Updated: November 23, 2026.",
    "privacy.partnerBadge": "MICROSOFT PARTNER CENTER CERTIFICATION BAR",
    "privacy.partnerTitle": "Select Product Privacy Scope & Direct Permalink",
    "privacy.partnerDesc": "All product policies are pre-rendered in static HTML for automated Microsoft Store certification bots. Select an app below to highlight or filter its dedicated privacy disclosure and copy its direct Partner Center URL.",
    "privacy.copyUrlBtn": "Copy Privacy URL for Partner Center",
    "privacy.tabAll": "All MTD Studio Apps (#all)",
    "privacy.tocHeading": "Policy Sections",
    "privacy.toc1": "1. Overview & Zero Data Collection",
    "privacy.toc2": "2. Product-Specific Local Capabilities",
    "privacy.toc3": "3. Microsoft Store IAP & Licensing",
    "privacy.toc4": "4. Optional Voluntary Donations",
    "privacy.toc5": "5. Local Storage, Backup & Deletion",
    "privacy.toc6": "6. Children's Privacy (IARC 3+)",
    "privacy.toc7": "7. Contact Us",
    "privacy.s1.title": "1. Overview & Zero Personal Data Collection",
    "privacy.s1.intro": "MTD Studio (\"we\", \"our\", or \"us\") develops native Windows desktop utilities distributed exclusively through the official Microsoft Store, including Quick Audio Switcher, Daily Habit Tracker Widget (HabitGrid), Batch File Renamer, Quick Invoice Maker, and AuraDesk. We are committed to an uncompromising 100% Local-First Privacy Architecture.",
    "privacy.s1.summaryTitle": "Executive Privacy Summary for Users & Microsoft Store Reviewers:",
    "privacy.s1.bullet1": "No Personal Data Collection: Our applications do NOT collect, transmit, store on external servers, or process any Personally Identifiable Information (PII), such as your name, email address, phone number, physical location, IP address, or biometric identifiers.",
    "privacy.s1.bullet2": "No Telemetry or Analytics SDKs: We do NOT embed third-party analytics, crash-reporting trackers, fingerprinting scripts, or telemetry frameworks (no Google Analytics, no Application Insights, no Sentry, no Mixpanel).",
    "privacy.s1.bullet3": "No Advertising or Data Monetization: Our apps contain zero advertisements and zero ad-tracking SDKs. We never sell, rent, trade, or share user data with any third party under GDPR, CCPA/CPRA, or any global privacy regulation.",
    "privacy.s1.bullet4": "No Cloud Account Required: None of our applications require account registration, sign-in, or cloud synchronization to function. All user settings and workspaces reside strictly on your local Windows device.",
    "privacy.s2.title": "2. Product-Specific Local Processing & System Capabilities",
    "privacy.s2.intro": "Because our Windows utilities interact with native operating system APIs to deliver hardware and desktop control, Microsoft Store Policy requires clear disclosure of how each capability is used. All processing described below happens 100% locally in memory on your PC.",
    "privacy.s3.title": "3. Microsoft Store In-App Purchases & Trial Licensing",
    "privacy.s3.p1": "Our applications use the official Microsoft Store Commerce & Licensing API (Windows.Services.Store.StoreContext) to verify trial status and process one-time lifetime Pro upgrades (such as the Quick Audio Switcher $3.99 Pro Lifetime add-on).",
    "privacy.s3.b1": "Payment Processing by Microsoft: All billing transactions, currency conversions, tax calculations, and payment receipts are processed directly by Microsoft Corporation through your Microsoft Account.",
    "privacy.s3.b2": "Zero Access to Payment Information: MTD Studio never receives, sees, or stores your credit card number, bank account details, billing address, or Microsoft Account password. Our application receives only a cryptographic boolean entitlement token from Windows confirming whether the Pro add-on license is active on your device.",
    "privacy.s4.title": "4. Optional Voluntary Donations",
    "privacy.s4.p1": "Our support website and application About/Support screens include an optional link to support independent development via PayPal (https://paypal.me/Developerhoangtruong).",
    "privacy.s4.b1": "Strictly Voluntary Tip (Microsoft Store Policy 10.8.7): Voluntary tips or donations made via PayPal are completely optional expressions of appreciation. They do not unlock any locked Pro features, digital goods, or in-app entitlements; all paid app features are unlocked exclusively through the official Microsoft Store in-app purchase system.",
    "privacy.s4.b2": "External Browser Handling: Clicking the PayPal link opens your default external web browser. Any transaction conducted on PayPal is governed by PayPal's own Privacy Statement.",
    "privacy.s5.title": "5. Local Data Storage, JSON Backup & Complete Deletion",
    "privacy.s5.p1": "You retain 100% ownership and physical control over all configuration files and workspace data created by MTD Studio apps. Because no data is stored on our servers, there is no remote database record of you to request or delete. You can inspect, back up, reset, or permanently erase all local application data at any time:",
    "privacy.s5.p2": "How to Permanently Delete All Data: Uninstalling any MTD Studio packaged MSIX app via Windows Settings → Apps → Installed Apps → Uninstall automatically removes its sandboxed container data, or you may manually delete the corresponding folder in %LocalAppData% (press Win + R, type %LocalAppData%, and press Enter).",
    "privacy.s6.title": "6. Children's Privacy (IARC Everyone 3+ / COPPA)",
    "privacy.s6.p1": "MTD Studio utilities are general-audience productivity and system tools rated IARC 3+ (Everyone) on the Microsoft Store. Because our applications do not collect, request, or transmit any personal information from any user of any age, we do not knowingly or unknowingly collect personal data from children under the age of 13 (or under 16 in applicable jurisdictions), in full compliance with the U.S. Children's Online Privacy Protection Act (COPPA) and EU GDPR-K.",
    "privacy.s7.title": "7. Contact Us",
    "privacy.s7.p1": "If you have any questions regarding this Privacy Policy, Microsoft Store certification disclosures, or how you contact us voluntarily via email (where your email address is used solely to reply to your support inquiry and is never added to any marketing list), please reach out directly:",

    // Support Center Page (support.html)
    "support.heroBadge": "Direct Engineering Support · Avg Response < 24 Hours · 100% Local Diagnostic Privacy",
    "support.heroTitle": "MTD Studio Support Center & Ticket Portal",
    "support.heroSubtitle": "Resolve issues in seconds with our interactive 3-step troubleshooting wizard, browse product FAQs, or send a formatted diagnostic ticket straight to the lead developer.",
    "support.ctaWizard": "Run 3-Step Troubleshooter",
    "support.ctaTicket": "Submit Support Ticket",
    "support.ctaDocs": "Quick Audio Switcher v3.4 Guide",
    "support.wizardTag": "Interactive Self-Service",
    "support.wizardTitle": "3-Step Instant Troubleshooting Wizard",
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
    "support.faqTitle": "Frequently Asked Questions",
    "support.faqSubtitle": "Filter by product or search keywords across all 5 MTD Studio Windows utilities.",
    "support.filterAll": "All Apps (10)",
    "support.faqSearchPlaceholder": "Search FAQs (e.g., Ghost Mode, Alt click-through, Pro license, Stream Deck, WASAPI, JSON backup)...",
    "support.faqNoMatch": "No FAQs matched your search filter. Try clearing the search box or send us a support ticket below!",
    "support.ticketBadge": "Direct Engineering Escalation",
    "support.ticketTitle": "Submit a Smart Support Ticket",
    "support.ticketSubtitle": "Tickets go directly to developerhoangtruong@gmail.com. Include your diagnostic log path or steps to reproduce for fastest resolution.",
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
    "support.indieTitle": "Support MTD Studio Indie Development",
    "support.indieDesc": "Every MTD Studio app is crafted with native Windows performance, Smoked Liquid Glass aesthetics, zero ads, and zero cloud tracking. If our utilities save you time every day, consider buying the developer a coffee or leaving a 5★ review!",
    "support.btnBuyCoffee": "Support MTD Studio via PayPal",
    "support.btnRateStore": "⭐⭐⭐⭐Rate 5★ on Microsoft Store",
    "support.policy1087Title": "Microsoft Store Policy 10.8.7 Disclosure:",
    "support.policy1087Text": "Contributions via PayPal (paypal.me/Developerhoangtruong) are 100% voluntary tips to support independent software development. Voluntary tips do not unlock in-app Pro features or digital goods; all Pro Lifetime licenses are purchased and managed exclusively through the official Microsoft Store in-app commerce API.",
    "support.directChannelsTitle": "Direct Support & Local Paths",

    // Docs & API Page (docs.html)
    "docs.heroBadge": "Quick Audio Switcher v3.4.2 · Smoked Liquid Glass Engine · Loopback REST & WebSocket API",
    "docs.heroTitle": "Quick Audio Switcher v3.4 User Guide & Developer API",
    "docs.heroSubtitle": "Master every desktop surface, mouse gesture, tab-avoidance shortcut, Elgato Stream Deck integration, and local loopback automation endpoint.",
    "docs.ctaSurfaces": "Surface & Gesture Guide",
    "docs.ctaStreamDeck": "Stream Deck 1-Click Setup",
    "docs.ctaApi": "REST & WebSocket API (127.0.0.1:49152)",
    "docs.surfacesTag": "Smoked Liquid Glass Architecture",
    "docs.surfacesTitle": "v3.4 Desktop Surfaces, Gestures & Shortcuts",
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
    "docs.apiTitle": "Complete Local REST & WebSocket API Reference",
    "docs.apiSubtitle": "Automate Windows audio from Elgato Stream Deck, Touch Portal, AutoHotkey, Node-RED, macro pads, or custom scripts. Strictly bound to 127.0.0.1 (localhost loopback) for 100% network safety.",

    // Footer & Common
    "footer.tagline": "High-craft Windows 10 & 11 desktop utilities designed in Smoked Liquid Glass. 100% local-first privacy, zero telemetry, and no recurring subscriptions.",
    "footer.desc": "High-craft Windows 11 desktop utilities designed in Smoked Liquid Glass. 100% local-first privacy, zero telemetry, published on the official Microsoft Store.",
    "footer.appsHeading": "Microsoft Store Apps",
    "footer.productsHeading": "Products",
    "footer.resourcesHeading": "Documentation & Legal",
    "footer.contactHeading": "Contact & Support",
    "footer.colProducts": "Products",
    "footer.colResources": "Resources & Legal",
    "footer.colLegal": "Privacy & Contact",
    "footer.rights": "© 2026 MTD Studio. All rights reserved. Microsoft, Windows, and the Microsoft Store logo are trademarks of Microsoft Corporation.",
    "showcase.eyebrow": "FLAGSHIP RELEASE · v3.4.2.0",
    "showcase.title": "Quick Audio Switcher v3.4.2 — Sound & Device Controller",
    "showcase.subtitle": "Experience macOS-inspired Smoked Liquid Glass on Windows 11. Control audio outputs, per-app routing, Chat-Mix, Dynamic Island, Unified 3-in-1 Spectrum Dock, Side Edge Notch, and Elgato Stream Deck in milliseconds.",
    "showcase.shot1": "Dynamic Island & Surfaces",
    "showcase.shot2": "4-Tab Bento Command Center",
    "showcase.shot3": "Per-App Mixer & Routing",
    "showcase.shot4": "3-in-1 Dock & Edge Notch",
    "showcase.shot5": "Stream Deck & Local API",
    "tier.eyebrow": "Fair Indie Pricing · No Subscriptions Ever",
    "tier.title": "Free Forever vs. Pro Lifetime",
    "tier.subtitle": "No recurring subscriptions, no cloud accounts, no nag screens. Enjoy a generous Free Forever edition or unlock all 5 flagship Pro power pillars with a single lifetime purchase via Microsoft Store.",
    "tier.freeTitle": "Core Edition",
    "tier.freeBadge": "FREE FOREVER",
    "tier.freePrice": "$0",
    "tier.freeUnit": "Forever",
    "tier.freeSub": "No ads · No account required",
    "tier.downloadFree": "Download Free on Microsoft Store",
    "tier.proTitle": "Pro Lifetime",
    "tier.proBadge": "3-DAY FREE TRIAL · ONE-TIME",
    "tier.proPrice": "$3.99",
    "tier.proUnit": "One-time",
    "tier.proSub": "One-time purchase · 3-day free trial",
    "tier.buyPro": "Unlock Pro Lifetime ($3.99)",
    "tier.f1": "Instant speaker, headphone, and microphone switching with global hotkeys (Ctrl+Alt+D / Ctrl+Alt+M).",
    "tier.f2": "4-tab Smoked Liquid Glass Dynamic Island (Controls, Calendar, Devices, Music) with Alt click-through Ghost Mode.",
    "tier.f3": "Per-app volume mixer and Alt + Mouse Wheel gesture to tune any hovered window on the fly.",
    "tier.f4": "Instant native WinRT Wi-Fi & Bluetooth toggles (<50ms), live CPU/RAM monitor, and Pomodoro timer.",
    "tier.f5": "Complete local JSON settings export & import backup with zero telemetry.",
    "tier.p1": "Per-App Output Routing & Chat-Mix: send apps to separate speakers/headphones and balance Game vs. Voice.",
    "tier.p2": "Audio Studio & Smart Automation: Auto-Duck on calls, Call Autopilot, Safe Hearing guard, and unlimited app rules.",
    "tier.p3": "Pro Desktop Surfaces: Unified 3-in-1 Taskbar Dock, Side Edge Notch, Adaptive Album Glow, and custom glass themes.",
    "tier.p4": "Mic Lock & Hardware Guards: lock mic gain, block USB device hijacks, remember volumes, and Bluetooth low-battery alerts.",
    "tier.p5": "Elgato Stream Deck & Local REST/WebSocket API (127.0.0.1:49152), Radial Wheel (Ctrl+Alt+W), and Command Palette.",
    "footer.qasPrivacy": "Quick Audio Switcher Privacy",
    "footer.storePage": "Microsoft Store Page",
    "footer.paypalTip": "PayPal Tip Jar (Voluntary)",
    "products.eyebrow": "MTD STUDIO ECOSYSTEM · 5 WINDOWS APPS",
    "products.title": "5-App Bento Product Shelf",
    "products.subtitle": "Every MTD Studio utility is crafted natively for Windows 11 & 10, verified by Microsoft Store, and built on a strict zero-telemetry, local-first architecture.",
    "privacy.eyebrow": "Microsoft Store Policy 10.5 · GDPR · CCPA · COPPA Compliant",
    "privacy.title": "MTD Studio Privacy Policy Portal",
    "privacy.subtitle": "100% Local-First Architecture. Zero Personal Data Collection, Zero Cloud Telemetry, Zero Third-Party Advertising SDKs.",
    "privacy.lastUpdated": "Effective Date & Last Updated: November 23, 2026",
    "privacy.copyLabel": "Partner Center Privacy Policy URL:",
    "privacy.copyBtn": "Copy Privacy URL for Partner Center",
    "privacy.filterAll": "All MTD Studio Apps (#all)",
    "common.copied": "Copied to clipboard!"
  },

  vi: {
    // Navigation & Header
    "nav.brandTag": "Nhà phát hành chính thức Microsoft Store",
    "nav.publisherTag": "Nhà phát hành Microsoft Store",
    "nav.products": "Sản phẩm",
    "nav.docs": "Hướng dẫn & API",
    "nav.support": "Trung tâm Hỗ trợ",
    "nav.privacy": "Chính sách Bảo mật",
    "nav.donate": "Ủng hộ MTD",
    "nav.getFlagship": "Tải Quick Audio Switcher",

    // Hero Section (index.html)
    "hero.badge": "Nhà phát hành Microsoft Store · Bảo mật Cục bộ 100% · Không Thuê bao Tháng",
    "hero.title": "Hệ sinh thái Tiện ích Windows 11 Cao cấp từ MTD Studio",
    "hero.subtitle": "Ứng dụng gốc siêu mượt mang ngôn ngữ thiết kế Smoked Liquid Glass. Tối ưu cho nhà sáng tạo nội dung, streamer và người dùng chuyên nghiệp.",
    "hero.ctaPrimary": "Tải Quick Audio Switcher v3.4",
    "hero.ctaSecondary": "Khám phá 5 Ứng dụng",
    "hero.ctaExplore": "Khám phá Cả 5 Ứng dụng",
    "hero.ctaDocs": "Tài liệu API & Stream Deck",
    "hero.trustStore": "Gói MSIX Chữ ký số · Store ID 9PC7TTDCCN2V",
    "hero.trustPrivacy": "Xử lý Cục bộ 100% · Không Theo dõi Đám mây",
    "hero.trustLicense": "Miễn phí Vĩnh viễn · Pro Trọn đời $3.99",
    "hero.trust1": "Xử lý Cục bộ 100% trên PC",
    "hero.trust2": "Không Quảng cáo & Theo dõi",
    "hero.trust3": "Chứng nhận bởi Microsoft Store",
    "hero.trust4": "Mua Pro Trọn đời 1 lần ($3.99)",

    // Flagship Showcase (index.html)
    "flagship.badge": "SẢN PHẨM CHỦ LỰC · v3.4.2.0",
    "flagship.title": "Quick Audio Switcher v3.4.2 — Điều khiển Âm thanh & Thiết bị",
    "flagship.subtitle": "Trải nghiệm giao diện Smoked Liquid Glass đẳng cấp trên Windows 11. Chuyển loa/tai nghe, định tuyến âm thanh từng ứng dụng, Chat-Mix, Dynamic Island, Thanh Dock Sóng nhạc 3-trong-1, Side Edge Notch và Elgato Stream Deck trong tích tắc.",
    "flagship.openStoreApp": "Mở trong Microsoft Store",
    "flagship.webListing": "Xem bản Web ↗",
    "shots.shot1.title": "Dynamic Island 4-Tab, Thanh Dock 3-trong-1 & Side Edge Notch",
    "shots.shot1.desc": "Dynamic Island Smoked Liquid Glass ở mép trên màn hình với 4 tab Controls, Calendar, Devices, Music cùng chế độ giữ Alt xuyên chuột (Ghost Mode).",
    "shots.shot1.short": "Dynamic Island & Giao diện",
    "shots.shot2.short": "Trung tâm Bento 4-Tab",
    "shots.shot3.short": "Bộ trộn & Định tuyến App",
    "shots.shot4.short": "Dock 3-trong-1 & Edge Notch",
    "shots.shot5.short": "Stream Deck & Local API",

    // Free vs Pro Comparison (index.html)
    "tiers.heading": "Miễn phí Trọn đời vs. Pro Lifetime ($3.99 Mua 1 Lần)",
    "tiers.subheading": "Không phí thuê bao tháng, không yêu cầu tài khoản đám mây, không quảng cáo làm phiền. Trải nghiệm bản Miễn phí vĩnh viễn hoặc mở khóa trọn bộ 5 trụ cột Pro chỉ với một lần mua duy nhất trên Microsoft Store.",
    "tiers.free.badge": "MIỄN PHÍ VĨNH VIỄN",
    "tiers.free.name": "Bản Core (Miễn phí)",
    "tiers.free.tagline": "Điều khiển âm thanh & màn hình thiết yếu hàng ngày, hoàn toàn không quảng cáo và không giới hạn số lần chuyển thiết bị.",
    "tiers.free.period": "Trọn đời · Không Quảng cáo",
    "tiers.free.f1Title": "Chuyển nhanh Loa, Tai nghe & Micro 1 chạm",
    "tiers.free.f1Desc": "Chuyển đổi thiết bị phát và thu âm tức thì từ khay hệ thống, Flyout và phím tắt toàn cục (Ctrl+Alt+D / Ctrl+Alt+M).",
    "tiers.free.f2Title": "Dynamic Island Smoked Liquid Glass (4 Tab)",
    "tiers.free.f2Desc": "Đầy đủ 4 tab Controls, Calendar, Devices và Nhạc đang phát với thanh trượt Âm lượng + Độ sáng màn hình 120fps và giữ Alt xuyên chuột.",
    "tiers.free.f3Title": "Thanh Dock 3-trong-1 & Thanh trượt Cạnh màn hình",
    "tiers.free.f3Desc": "Đèn báo Micro LIVE, sóng nhạc 16 cột thời gian thực và cuộn chuột ±2% âm lượng ngay trên mép màn hình.",
    "tiers.free.f4Title": "Bộ trộn Âm lượng Từng ứng dụng & Cử chỉ Alt + Cuộn chuột",
    "tiers.free.f4Desc": "Chỉnh âm lượng riêng cho từng phần mềm hoặc giữ Alt + Cuộn chuột ngay trên cửa sổ bất kỳ để tăng/giảm âm lượng.",
    "tiers.free.f5Title": "Bật/tắt nhanh Wi-Fi, Bluetooth & Đồng hồ Pomodoro",
    "tiers.free.f5Desc": "Điều khiển kết nối không dây trực tiếp qua WinRT không cần mở Windows Settings và hẹn giờ tập trung làm việc.",
    "tiers.free.cta": "Tải Miễn phí trên Microsoft Store",
    "tiers.pro.badge": "PRO TRỌN ĐỜI · DÙNG THỬ MIỄN PHÍ 7 NGÀY",
    "tiers.pro.name": "Bản Pro Studio",
    "tiers.pro.tagline": "Bao gồm toàn bộ tính năng bản Miễn phí, cộng thêm 5 trụ cột định tuyến âm thanh phòng thu, tự động hóa & API phần cứng.",
    "tiers.pro.period": "Mua 1 lần · Bản quyền Trọn đời",
    "tiers.pro.p1Title": "1. Định tuyến Đầu ra Từng ứng dụng & Cân bằng Game/Voice Chat-Mix",
    "tiers.pro.p1Desc": "Phát nhạc Spotify ra loa ngoài trong khi vẫn giữ âm thanh Discord và Game trong tai nghe. Cân bằng âm lượng Game và Thoại theo thời gian thực.",
    "tiers.pro.p2Title": "2. Audio Studio: Auto-Duck, Call Autopilot & Bảo vệ Thính giác",
    "tiers.pro.p2Desc": "Tự động giảm nhạc nền khi có cuộc gọi thoại, tự tạm dừng nhạc khi bật mic họp, bật âm thanh vòm Spatial 3D Sonic và chế độ Solo ứng dụng.",
    "tiers.pro.p3Title": "3. Bánh xe Radial HUD, Command Palette & Giao diện Liquid Glass",
    "tiers.pro.p3Desc": "Triệu hồi bánh xe điều khiển Ctrl+Alt+W, bảng lệnh nhanh Ctrl+Alt+K, bảng màu Smoked Liquid Glass tùy chỉnh và cấu hình âm thanh thông minh.",
    "tiers.pro.p4Title": "4. Khóa Âm lượng Micro, Chống Cướp Thiết bị & Chống Sốc Âm Bluetooth",
    "tiers.pro.p4Desc": "Khóa mức thu Micro không cho ứng dụng tự ý thay đổi, chặn driver ảo tự chuyển thiết bị mặc định và chặn tiếng nổ 100% âm lượng khi kết nối lại tai nghe Bluetooth.",
    "tiers.pro.p5Title": "5. Plugin Elgato Stream Deck 1 Chạm & Local REST / WebSocket API",
    "tiers.pro.p5Desc": "Cài đặt plugin Stream Deck chỉ với 1 cú nhấp cùng máy chủ điều khiển REST & WebSocket cục bộ (127.0.0.1:49152) cho phím macro và tự động hóa.",
    "tiers.pro.cta": "Mở khóa Pro Trọn đời ($3.99) · Dùng thử 7 Ngày",

    // Product Shelf (index.html)
    "shelf.eyebrow": "HỆ SINH THÁI MTD STUDIO · 5 ỨNG DỤNG WINDOWS",
    "shelf.title": "Kệ 5 Sản phẩm Chính thức trên Microsoft Store",
    "shelf.subtitle": "Mọi tiện ích của MTD Studio đều được phát triển gốc cho Windows 11 & 10, đã kiểm duyệt bởi Microsoft Store và tuân thủ kiến trúc bảo mật cục bộ không thu thập dữ liệu.",
    "products.getStore": "Tải trên Microsoft Store",
    "products.webStore": "Trang Web Store ↗",
    "products.supportBtn": "Hỗ trợ & FAQ",
    "products.privacyBtn": "Chính sách Bảo mật",
    "products.docsBtn": "Hướng dẫn & API",

    // Privacy Policy Page (privacy.html)
    "privacy.heroBadge": "Chuẩn Chính sách Microsoft Store 10.5 · Tuân thủ GDPR · CCPA · COPPA",
    "privacy.heroTitle": "Cổng Chính sách Quyền riêng tư MTD Studio",
    "privacy.heroSubtitle": "Kiến trúc Xử lý Cục bộ 100% (Local-First). Không Thu thập Dữ liệu Cá nhân, Không Telemetry Đám mây, Không SDK Quảng cáo Bên thứ ba. Ngày hiệu lực & Cập nhật: 23/11/2026.",
    "privacy.partnerBadge": "THANH CHỨNG NHẬN MICROSOFT PARTNER CENTER",
    "privacy.partnerTitle": "Chọn Phạm vi Sản phẩm & Sao chép Đường dẫn Trực tiếp",
    "privacy.partnerDesc": "Toàn bộ chính sách bảo mật của từng sản phẩm đều được kết xuất sẵn bằng HTML tĩnh để hệ thống kiểm duyệt Microsoft Store xác thực tức thì. Chọn ứng dụng bên dưới để lọc nội dung và sao chép URL cho Partner Center.",
    "privacy.copyUrlBtn": "Sao chép URL Bảo mật cho Partner Center",
    "privacy.tabAll": "Tất cả Ứng dụng MTD Studio (#all)",
    "privacy.tocHeading": "Mục lục Chính sách",
    "privacy.toc1": "1. Tổng quan & Cam kết Không Thu thập Dữ liệu",
    "privacy.toc2": "2. Quyền Hệ thống & Xử lý Cục bộ Từng Sản phẩm",
    "privacy.toc3": "3. Thanh toán & Bản quyền Microsoft Store",
    "privacy.toc4": "4. Khoản Ủng hộ Tự nguyện (Donations)",
    "privacy.toc5": "5. Lưu trữ Cục bộ, Sao lưu & Xóa Dữ liệu",
    "privacy.toc6": "6. Quyền riêng tư Trẻ em (IARC 3+)",
    "privacy.toc7": "7. Thông tin Liên hệ",
    "privacy.s1.title": "1. Tổng quan & Cam kết Không Thu thập Dữ liệu Cá nhân",
    "privacy.s1.intro": "MTD Studio phát triển các tiện ích máy tính Windows gốc được phân phối chính thức qua Microsoft Store, bao gồm Quick Audio Switcher, Daily Habit Tracker Widget (HabitGrid), Batch File Renamer, Quick Invoice Maker và AuraDesk. Chúng tôi cam kết tuyệt đối với Kiến trúc Bảo mật Cục bộ 100% (Local-First Privacy).",
    "privacy.s1.summaryTitle": "Tóm tắt Quyền riêng tư dành cho Người dùng & Kiểm duyệt viên Microsoft Store:",
    "privacy.s1.bullet1": "Không Thu thập Dữ liệu Cá nhân: Ứng dụng của chúng tôi KHÔNG thu thập, truyền tải, lưu trữ trên máy chủ ngoài hay xử lý bất kỳ Thông tin Định danh Cá nhân (PII) nào như họ tên, email, số điện thoại, vị trí, địa chỉ IP hay sinh trắc học.",
    "privacy.s1.bullet2": "Không SDK Theo dõi hay Phân tích (Telemetry): Chúng tôi KHÔNG nhúng bất kỳ công cụ phân tích hay theo dõi hành vi bên thứ ba nào (không Google Analytics, không Application Insights, không Sentry, không Mixpanel).",
    "privacy.s1.bullet3": "Không Quảng cáo hay Bán Dữ liệu: Ứng dụng hoàn toàn không chứa quảng cáo và không bao giờ bán, cho thuê hay chia sẻ dữ liệu người dùng cho bên thứ ba theo tiêu chuẩn GDPR và CCPA/CPRA.",
    "privacy.s1.bullet4": "Không Yêu cầu Tài khoản Đám mây: Không ứng dụng nào yêu cầu đăng ký tài khoản hay đăng nhập đám mây. Mọi thiết lập và dữ liệu đều nằm hoàn toàn trên máy tính Windows của bạn.",
    "privacy.s2.title": "2. Xử lý Cục bộ & Quyền Truy cập Hệ thống theo Từng Sản phẩm",
    "privacy.s2.intro": "Vì các tiện ích Windows tương tác với API hệ điều hành để điều khiển phần cứng, Chính sách Microsoft Store yêu cầu giải thích rõ mục đích của từng quyền. Toàn bộ quá trình xử lý dưới đây diễn ra 100% cục bộ trong bộ nhớ máy tính của bạn.",
    "privacy.s3.title": "3. Mua hàng Trong ứng dụng & Bản quyền Dùng thử Microsoft Store",
    "privacy.s3.p1": "Ứng dụng sử dụng API Thương mại & Bản quyền chính thức của Microsoft Store (Windows.Services.Store.StoreContext) để kiểm tra trạng thái dùng thử và kích hoạt gói nâng cấp Pro Trọn đời (như gói Pro $3.99 của Quick Audio Switcher).",
    "privacy.s3.b1": "Xử lý Thanh toán bởi Microsoft: Mọi giao dịch thanh toán, chuyển đổi tiền tệ, tính thuế và biên lai đều do Microsoft Corporation xử lý trực tiếp qua Tài khoản Microsoft của bạn.",
    "privacy.s3.b2": "Không Tiếp cận Thông tin Thẻ/Ngân hàng: MTD Studio không bao giờ nhận, nhìn thấy hoặc lưu trữ số thẻ tín dụng, tài khoản ngân hàng hay mật khẩu của bạn. Ứng dụng chỉ nhận mã xác nhận quyền sử dụng (boolean token) từ Windows.",
    "privacy.s4.title": "4. Khoản Ủng hộ Tự nguyện (Voluntary Donations)",
    "privacy.s4.p1": "Trang web hỗ trợ và mục Giới thiệu của ứng dụng có liên kết tùy chọn để người dùng ủng hộ nhà phát triển độc lập qua PayPal (https://paypal.me/Developerhoangtruong).",
    "privacy.s4.b1": "Khoản Ủng hộ Hoàn toàn Tự nguyện (Chính sách Microsoft Store 10.8.7): Mọi khoản đóng góp qua PayPal là hoàn toàn tự nguyện và KHÔNG dùng để mở khóa tính năng Pro hay nội dung số trong ứng dụng; toàn bộ tính năng Pro chỉ được mở khóa qua hệ thống thanh toán của Microsoft Store.",
    "privacy.s4.b2": "Mở trên Trình duyệt Ngoài: Khi nhấn vào liên kết PayPal, trình duyệt web mặc định của bạn sẽ mở ra và giao dịch tuân theo Chính sách Quyền riêng tư của PayPal.",
    "privacy.s5.title": "5. Lưu trữ Dữ liệu Cục bộ, Sao lưu JSON & Xóa Hoàn toàn",
    "privacy.s5.p1": "Bạn nắm quyền sở hữu và kiểm soát vật lý 100% đối với mọi tệp cấu hình và dữ liệu do ứng dụng MTD Studio tạo ra. Vì không có dữ liệu nào lưu trên máy chủ của chúng tôi, bạn có thể kiểm tra, sao lưu hoặc xóa vĩnh viễn dữ liệu cục bộ bất cứ lúc nào:",
    "privacy.s5.p2": "Cách Xóa Vĩnh viễn Toàn bộ Dữ liệu: Gỡ cài đặt ứng dụng MSIX qua Windows Settings → Apps → Installed Apps → Uninstall sẽ tự động xóa vùng chứa dữ liệu của ứng dụng, hoặc bạn có thể xóa trực tiếp thư mục tương ứng trong %LocalAppData% (nhấn Win + R, gõ %LocalAppData% và nhấn Enter).",
    "privacy.s6.title": "6. Quyền riêng tư của Trẻ em (IARC Everyone 3+ / COPPA)",
    "privacy.s6.p1": "Các tiện ích của MTD Studio là công cụ năng suất và hệ thống dành cho mọi lứa tuổi, được xếp hạng IARC 3+ (Everyone) trên Microsoft Store. Do ứng dụng không thu thập bất kỳ thông tin cá nhân nào từ bất kỳ ai, chúng tôi tuân thủ tuyệt đối đạo luật bảo vệ trẻ em COPPA (Hoa Kỳ) và GDPR-K (Châu Âu).",
    "privacy.s7.title": "7. Liên hệ với Chúng tôi",
    "privacy.s7.p1": "Nếu bạn có bất kỳ câu hỏi nào về Chính sách Quyền riêng tư này hoặc cần hỗ trợ kỹ thuật (địa chỉ email bạn gửi tới chỉ được dùng duy nhất để phản hồi yêu cầu hỗ trợ của bạn), vui lòng liên hệ trực tiếp:",

    // Support Center Page (support.html)
    "support.heroBadge": "Hỗ trợ Kỹ thuật Trực tiếp · Phản hồi < 24 Giờ · Bảo mật Log Chẩn đoán Cục bộ 100%",
    "support.heroTitle": "Trung tâm Hỗ trợ & Gửi Phiếu Yêu cầu MTD Studio",
    "support.heroSubtitle": "Khắc phục sự cố trong vài giây với Trợ lý Chẩn đoán 3 bước, tra cứu câu hỏi thường gặp (FAQ) theo sản phẩm hoặc gửi phiếu hỗ trợ định dạng sẵn trực tiếp tới kỹ sư trưởng.",
    "support.ctaWizard": "Chạy Trợ lý Khắc phục 3 Bước",
    "support.ctaTicket": "Gửi Phiếu Hỗ trợ",
    "support.ctaDocs": "Hướng dẫn Quick Audio Switcher v3.4",
    "support.wizardTag": "Tự Chẩn đoán Thông minh",
    "support.wizardTitle": "Trợ lý Khắc phục Sự cố Tức thì (3 Bước)",
    "support.wizardSubtitle": "Chọn ứng dụng MTD Studio và nhóm vấn đề bạn đang gặp để xem hướng dẫn chi tiết từng bước hoặc điền sẵn phiếu hỗ trợ ưu tiên.",
    "support.step1Label": "Chọn Sản phẩm",
    "support.step2Label": "Chọn Nhóm Vấn đề",
    "support.step3Label": "Giải pháp Tức thì & Tạo Phiếu",
    "support.step1Heading": "Bước 1 — Bạn cần hỗ trợ cho ứng dụng nào?",
    "support.step2Heading": "Bước 2 — Vấn đề bạn đang gặp phải là gì?",
    "support.catRestorePro": "Khôi phục Bản quyền Pro / Giao dịch Store",
    "support.catIslandOverlap": "Dynamic Island che tab trình duyệt",
    "support.catStreamDeck": "Kết nối Elgato Stream Deck / Local API",
    "support.catAudioRouting": "Định tuyến âm thanh từng ứng dụng / Chat-Mix",
    "support.catDiagnosticBug": "Đính kèm file log chẩn đoán / Báo lỗi",
    "support.instantFixBadge": "✓ Giải pháp Đã Kiểm chứng",
    "support.diagPathLabel": "Đường dẫn File Log Chẩn đoán Cục bộ (Win + R):",
    "support.btnCopyLogPath": "Sao chép Đường dẫn Log",
    "support.btnPrefillTicket": "Điền sẵn vào Phiếu Hỗ trợ Bên dưới ↓",
    "support.faqTag": "Cơ sở Tri thức",
    "support.faqTitle": "Câu hỏi Thường gặp (FAQ)",
    "support.faqSubtitle": "Lọc theo từng sản phẩm hoặc tìm kiếm từ khóa cho cả 5 tiện ích Windows của MTD Studio.",
    "support.filterAll": "Tất cả Ứng dụng (10)",
    "support.faqSearchPlaceholder": "Tìm kiếm FAQ (VD: Ghost Mode, giữ Alt xuyên chuột, bản quyền Pro, Stream Deck, WASAPI, sao lưu JSON)...",
    "support.faqNoMatch": "Không tìm thấy câu hỏi phù hợp với từ khóa. Hãy thử xóa bộ lọc hoặc gửi phiếu hỗ trợ ở bên dưới!",
    "support.ticketBadge": "Hỗ trợ Kỹ thuật Trực tiếp",
    "support.ticketTitle": "Gửi Phiếu Hỗ trợ Thông minh",
    "support.ticketSubtitle": "Phiếu hỗ trợ được gửi trực tiếp tới developerhoangtruong@gmail.com. Hãy đính kèm nội dung log chẩn đoán hoặc các bước tái hiện để được xử lý nhanh nhất.",
    "support.labelProduct": "Sản phẩm",
    "support.labelIssueType": "Phân loại Yêu cầu",
    "support.labelAppVersion": "Phiên bản App",
    "support.labelWinVersion": "Phiên bản Windows",
    "support.labelEmail": "Địa chỉ Email của bạn",
    "support.labelSubject": "Tiêu đề",
    "support.labelMessage": "Nội dung chi tiết / Các bước tái hiện",
    "support.placeholderSubject": "Tóm tắt ngắn gọn sự cố hoặc tính năng bạn đề xuất...",
    "support.placeholderMessage": "1. Bạn đang thao tác gì khi sự cố xảy ra?\n2. Kết quả mong muốn vs. thực tế:\n3. Dán các dòng liên quan từ %LocalAppData%\\QuickAudioSwitcher\\logs\\diagnostic.log (tùy chọn):",
    "support.btnCopyDiagHelper": "Sao chép Đường dẫn Log (%LocalAppData%\\QuickAudioSwitcher\\logs\\diagnostic.log)",
    "support.btnSendPrimary": "Gửi Phiếu Hỗ trợ Ngay",
    "support.btnOpenMailto": "Mở bằng Ứng dụng Email Mặc định (mailto:)",
    "support.btnCopyFormatted": "Sao chép Nội dung Phiếu vào Clipboard",
    "support.ticketPrivacyNote": "🔒 Không thu thập dữ liệu ngầm: chỉ những thông tin bạn chủ động gửi ở trên mới được chuyển tới developerhoangtruong@gmail.com.",
    "support.indieBadge": "Phần mềm Windows Độc lập",
    "support.indieTitle": "Đồng hành cùng Nhà phát triển Độc lập MTD Studio",
    "support.indieDesc": "Mỗi ứng dụng MTD Studio đều được tối ưu hiệu năng gốc cho Windows với thiết kế Smoked Liquid Glass, không quảng cáo và không theo dõi đám mây. Nếu ứng dụng giúp ích cho công việc hàng ngày của bạn, hãy mời nhà phát triển một ly cà phê hoặc đánh giá 5★ nhé!",
    "support.btnBuyCoffee": "Ủng hộ MTD Studio qua PayPal",
    "support.btnRateStore": "⭐⭐⭐⭐Đánh giá 5★ trên Microsoft Store",
    "support.policy1087Title": "Thông báo Tuân thủ Chính sách Microsoft Store 10.8.7:",
    "support.policy1087Text": "Mọi khoản ủng hộ qua PayPal (paypal.me/Developerhoangtruong) là tiền tip hoàn toàn tự nguyện nhằm khích lệ phát triển phần mềm độc lập. Khoản ủng hộ tự nguyện không mở khóa tính năng Pro trong ứng dụng; toàn bộ bản quyền Pro Lifetime chỉ được mua và quản lý qua hệ thống thanh toán chính thức của Microsoft Store.",
    "support.directChannelsTitle": "Kênh Liên hệ Trực tiếp & Đường dẫn Cục bộ",

    // Docs & API Page (docs.html)
    "docs.heroBadge": "Quick Audio Switcher v3.4.2 · Smoked Liquid Glass Engine · Loopback REST & WebSocket API",
    "docs.heroTitle": "Hướng dẫn Sử dụng Quick Audio Switcher v3.4 & Tài liệu API",
    "docs.heroSubtitle": "Làm chủ mọi bề mặt điều khiển trên màn hình, thao tác chuột, phím tắt chống che tab trình duyệt, tích hợp Elgato Stream Deck và giao thức tự động hóa cục bộ.",
    "docs.ctaSurfaces": "Hướng dẫn Giao diện & Thao tác",
    "docs.ctaStreamDeck": "Cài đặt Stream Deck 1 Chạm",
    "docs.ctaApi": "REST & WebSocket API (127.0.0.1:49152)",
    "docs.surfacesTag": "Kiến trúc Smoked Liquid Glass",
    "docs.surfacesTitle": "Giao diện Bề mặt v3.4, Cử chỉ Chuột & Phím tắt",
    "docs.surfacesSubtitle": "Tối ưu phản hồi mượt mà 120fps, hoàn toàn không cản trở thao tác chuột trên các tab trình duyệt phóng대 hoặc game toàn màn hình.",
    "docs.islandCardTitle": "Dynamic Island (4 Tab: Controls · Calendar · Devices · Music) & Tránh Che Tab",
    "docs.islandCardDesc": "Viên thuốc kính mờ Smoked Liquid Glass ở mép trên màn hình tích hợp sóng nhạc 5 cột, cặp thanh trượt Âm lượng (60%) + Độ sáng màn hình (40%) song song và ngăn kéo thu gọn [ ✦ Audio Studio › ].",
    "docs.dockCardTitle": "Thanh Dock Taskbar 3-trong-1 (316×34)",
    "docs.dockCardDesc": "Hợp nhất 3 widget riêng lẻ thành một viên nang Smoked Liquid Glass siêu gọn nằm ngay cạnh khay hệ thống Windows 11.",
    "docs.edgeCardTitle": "Thanh trượt Cạnh màn hình Side Edge Notch (10px)",
    "docs.edgeCardDesc": "Lý tưởng cho game thủ và hệ thống đa màn hình muốn không gian mép trên hoàn toàn trống trải nhưng vẫn điều khiển âm lượng tức thì ở viền màn hình.",
    "docs.shortcutsCardTitle": "Phím tắt Toàn cục & Cử chỉ Con lăn Chuột",
    "docs.shortcutsCardDesc": "Điều chỉnh âm lượng riêng cho từng ứng dụng, chuyển nhanh tai nghe/loa hoặc mở bảng lệnh Command Palette từ bất kỳ đâu mà không cần thoát game.",
    "docs.sdTag": "Tích hợp Phần cứng Sáng tạo Nội dung",
    "docs.sdTitle": "Hướng dẫn Cài đặt Elgato Stream Deck 1 Chạm",
    "docs.sdSubtitle": "Điều khiển chuyển loa/tai nghe, núm xoay âm lượng từng ứng dụng, cân bằng Chat-Mix, Khóa Micro và Cấu hình Âm thanh với biểu tượng OLED động trên Stream Deck MK.2, XL, Mini, Neo và Stream Deck +.",
    "docs.apiTag": "Giao thức Tự động hóa Cục bộ · 127.0.0.1:49152",
    "docs.apiTitle": "Tài liệu Tham chiếu Local REST & WebSocket API Đầy đủ",
    "docs.apiSubtitle": "Tự động hóa âm thanh Windows từ Elgato Stream Deck, Touch Portal, AutoHotkey, Node-RED, bàn phím macro hoặc script cá nhân. Chỉ lắng nghe trên 127.0.0.1 (localhost) đảm bảo an toàn mạng tuyệt đối.",

    // Footer & Common
    "footer.tagline": "Tiện ích máy tính Windows 10 & 11 cao cấp thiết kế theo phong cách Smoked Liquid Glass. Bảo mật cục bộ 100%, không theo dõi, không phí thuê bao định kỳ.",
    "footer.desc": "Tiện ích máy tính Windows 11 cao cấp thiết kế theo phong cách Smoked Liquid Glass. Bảo mật cục bộ 100%, không theo dõi, phát hành chính thức trên Microsoft Store.",
    "footer.appsHeading": "Ứng dụng Microsoft Store",
    "footer.productsHeading": "Sản phẩm",
    "footer.resourcesHeading": "Tài liệu & Pháp lý",
    "footer.contactHeading": "Liên hệ & Hỗ trợ",
    "footer.colProducts": "Sản phẩm",
    "footer.colResources": "Tài liệu & Pháp lý",
    "footer.colLegal": "Bảo mật & Liên hệ",
    "footer.rights": "© 2026 MTD Studio. Bảo lưu mọi quyền. Microsoft, Windows và logo Microsoft Store là thương hiệu của Microsoft Corporation.",
    "showcase.eyebrow": "SẢN PHẨM CHỦ LỰC · v3.4.2.0",
    "showcase.title": "Quick Audio Switcher v3.4.2 — Điều khiển Âm thanh & Thiết bị",
    "showcase.subtitle": "Trải nghiệm giao diện Smoked Liquid Glass đẳng cấp trên Windows 11. Chuyển loa/tai nghe, định tuyến âm thanh từng ứng dụng, Chat-Mix, Dynamic Island, Thanh Dock Sóng nhạc 3-trong-1, Side Edge Notch và Elgato Stream Deck trong tích tắc.",
    "showcase.shot1": "Dynamic Island & Giao diện",
    "showcase.shot2": "Trung tâm Bento 4-Tab",
    "showcase.shot3": "Bộ trộn & Định tuyến App",
    "showcase.shot4": "Dock 3-trong-1 & Edge Notch",
    "showcase.shot5": "Stream Deck & Local API",
    "tier.eyebrow": "Chi phí Minh bạch · Mua 1 Lần Dùng Trọn đời",
    "tier.title": "Miễn phí Vĩnh viễn vs. Pro Trọn đời",
    "tier.subtitle": "Không phí thuê bao tháng, không yêu cầu tài khoản đám mây, không quảng cáo làm phiền. Trải nghiệm bản Miễn phí vĩnh viễn hoặc mở khóa trọn bộ 5 trụ cột Pro chỉ với một lần mua duy nhất trên Microsoft Store.",
    "tier.freeTitle": "Bản Core",
    "tier.freeBadge": "MIỄN PHÍ VĨNH VIỄN",
    "tier.freePrice": "$0",
    "tier.freeUnit": "Vĩnh viễn",
    "tier.freeSub": "Không quảng cáo · Không cần tài khoản",
    "tier.downloadFree": "Tải Miễn phí trên Microsoft Store",
    "tier.proTitle": "Pro Trọn đời",
    "tier.proBadge": "DÙNG THỬ 3 NGÀY · MUA 1 LẦN",
    "tier.proPrice": "$3.99",
    "tier.proUnit": "Mua 1 lần",
    "tier.proSub": "Mua 1 lần dùng mãi mãi · Dùng thử 3 ngày",
    "tier.buyPro": "Mở khóa Pro Trọn đời ($3.99)",
    "tier.f1": "Đổi loa, tai nghe và micro tức thì bằng phím tắt toàn cục (Ctrl+Alt+D / Ctrl+Alt+M).",
    "tier.f2": "Dynamic Island 4 tab Smoked Liquid Glass (Controls, Lịch, Thiết bị, Nhạc) kèm giữ Alt xuyên chuột tránh che tab.",
    "tier.f3": "Mixer âm lượng từng ứng dụng và thao tác giữ Alt + Cuộn chuột chỉnh volume ngay trên cửa sổ đang mở.",
    "tier.f4": "Bật/tắt Wi-Fi & Bluetooth WinRT gốc (<50ms), theo dõi CPU/RAM trực tiếp và đồng hồ Pomodoro.",
    "tier.f5": "Sao lưu & khôi phục toàn bộ cài đặt ra file JSON cục bộ, không thu thập dữ liệu.",
    "tier.p1": "Định tuyến từng app & Chat-Mix: gửi mỗi app ra loa/tai nghe riêng và cân bằng âm thanh Game vs. Voice Chat.",
    "tier.p2": "Audio Studio & Tự động hóa: Tự giảm nhạc khi gọi (Auto-Duck), Call Autopilot, Bảo vệ thính giác & quy tắc app không giới hạn.",
    "tier.p3": "Bề mặt Desktop Pro: Thanh Dock 3-trong-1 trên Taskbar, Side Edge Notch, Ánh sáng bìa nhạc & chủ đề kính tùy chỉnh.",
    "tier.p4": "Khóa Mic & Bảo vệ phần cứng: Khóa mức âm lượng mic, chặn USB/tay cầm cướp loa mặc định & báo pin tai nghe Bluetooth.",
    "tier.p5": "Elgato Stream Deck & Local REST/WebSocket API (127.0.0.1:49152), Vòng xoay nhanh (Ctrl+Alt+W) & Command Palette.",
    "footer.qasPrivacy": "Chính sách bảo mật Quick Audio Switcher",
    "footer.storePage": "Trang Microsoft Store",
    "footer.paypalTip": "Ủng hộ qua PayPal (Tự nguyện)",
    "products.eyebrow": "HỆ SINH THÁI MTD STUDIO · 5 ỨNG DỤNG WINDOWS",
    "products.title": "Kệ 5 Sản phẩm Chính thức trên Microsoft Store",
    "products.subtitle": "Mọi tiện ích của MTD Studio đều được phát triển gốc cho Windows 11 & 10, đã kiểm duyệt bởi Microsoft Store và tuân thủ kiến trúc bảo mật cục bộ không thu thập dữ liệu.",
    "privacy.eyebrow": "Chuẩn Chính sách Microsoft Store 10.5 · Tuân thủ GDPR · CCPA · COPPA",
    "privacy.title": "Cổng Chính sách Quyền riêng tư MTD Studio",
    "privacy.subtitle": "Kiến trúc Xử lý Cục bộ 100% (Local-First). Không Thu thập Dữ liệu Cá nhân, Không Telemetry Đám mây, Không SDK Quảng cáo Bên thứ ba.",
    "privacy.lastUpdated": "Ngày hiệu lực & Cập nhật: 23/11/2026",
    "privacy.copyLabel": "Đường dẫn Privacy Policy cho Partner Center:",
    "privacy.copyBtn": "Sao chép URL Bảo mật cho Partner Center",
    "privacy.filterAll": "Tất cả Ứng dụng MTD Studio (#all)",
    "common.copied": "Đã sao chép vào bộ nhớ tạm!"
  }
};

(function () {
  var STORAGE_KEY = "mtd_lang";
  var DEFAULT_LANG = "en";

  function getSavedLanguage() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved && window.MTD_I18N[saved]) {
        return saved;
      }
    } catch (e) {
      // Ignore storage access errors in restricted webviews
    }
    return DEFAULT_LANG;
  }

  window.getMtdLanguage = function () {
    return window.MTD_CURRENT_LANG || getSavedLanguage();
  };

  window.tMtd = function (key, fallback) {
    var lang = window.getMtdLanguage();
    var dict = window.MTD_I18N[lang] || window.MTD_I18N[DEFAULT_LANG] || {};
    var enDict = window.MTD_I18N[DEFAULT_LANG] || {};
    if (Object.prototype.hasOwnProperty.call(dict, key)) {
      return dict[key];
    }
    if (Object.prototype.hasOwnProperty.call(enDict, key)) {
      return enDict[key];
    }
    return fallback !== undefined ? fallback : key;
  };

  window.applyMtdTranslations = function (root) {
    var scope = root || document;
    var lang = window.getMtdLanguage();

    if (document.documentElement) {
      document.documentElement.setAttribute("lang", lang);
    }

    // Translate textContent elements
    var nodes = scope.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute("data-i18n");
      var val = window.tMtd(key, null);
      if (val !== null) {
        el.textContent = val;
      }
    }

    // Translate placeholders
    var placeholders = scope.querySelectorAll("[data-i18n-placeholder]");
    for (var j = 0; j < placeholders.length; j++) {
      var pEl = placeholders[j];
      var pKey = pEl.getAttribute("data-i18n-placeholder");
      var pVal = window.tMtd(pKey, null);
      if (pVal !== null) {
        pEl.setAttribute("placeholder", pVal);
      }
    }

    // Translate title attributes
    var titles = scope.querySelectorAll("[data-i18n-title]");
    for (var k = 0; k < titles.length; k++) {
      var tEl = titles[k];
      var tKey = tEl.getAttribute("data-i18n-title");
      var tVal = window.tMtd(tKey, null);
      if (tVal !== null) {
        tEl.setAttribute("title", tVal);
      }
    }

    // Update language switcher button states (.lang-btn[data-lang="en"|"vi"])
    var langButtons = document.querySelectorAll(".lang-btn");
    for (var b = 0; b < langButtons.length; b++) {
      var btn = langButtons[b];
      var btnLang = (btn.getAttribute("data-lang") || btn.textContent || "").trim().toLowerCase();
      if (btnLang === lang) {
        btn.classList.add("active");
        btn.setAttribute("aria-pressed", "true");
      } else {
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false");
      }
    }
  };

  window.setMtdLanguage = function (lang) {
    var normalized = (lang || DEFAULT_LANG).toLowerCase();
    if (!window.MTD_I18N[normalized]) {
      normalized = DEFAULT_LANG;
    }
    window.MTD_CURRENT_LANG = normalized;
    try {
      localStorage.setItem(STORAGE_KEY, normalized);
    } catch (e) {
      // Ignore localStorage quota/privacy errors
    }

    window.applyMtdTranslations(document);

    try {
      var evt = new CustomEvent("mtd:langchange", {
        detail: { lang: normalized }
      });
      window.dispatchEvent(evt);
    } catch (e) {
      var legacyEvt = document.createEvent("CustomEvent");
      legacyEvt.initCustomEvent("mtd:langchange", false, false, { lang: normalized });
      window.dispatchEvent(legacyEvt);
    }
  };

  function initMtdI18n() {
    window.MTD_CURRENT_LANG = getSavedLanguage();
    window.applyMtdTranslations(document);

    document.addEventListener("click", function (e) {
      var btn = e.target.closest ? e.target.closest(".lang-btn[data-lang]") : null;
      if (btn) {
        var targetLang = btn.getAttribute("data-lang");
        if (targetLang) {
          window.setMtdLanguage(targetLang);
        }
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMtdI18n);
  } else {
    initMtdI18n();
  }
})();
