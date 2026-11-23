/* ==========================================================================
   MTD Studio — Official Microsoft Store Product Catalog & Config
   Add a new product in ~30 seconds by appending an entry to window.MTD_PRODUCTS
   ========================================================================== */

window.MTD_CONFIG = {
  studioName: "MTD Studio",
  supportEmail: "developerhoangtruong@gmail.com",
  paypalUrl: "https://paypal.me/Developerhoangtruong",
  storeReviewUrl: "ms-windows-store://review/?ProductId=9PC7TTDCCN2V",
  web3FormsKey: ""
};

window.MTD_PRODUCTS = [
  {
    id: "quick-audio-switcher",
    slug: "quick-audio-switcher",
    privacySlug: "quick-audio-switcher",
    flagship: true,
    version: "v3.4.2.0",
    storeId: "9PC7TTDCCN2V",
    storeUrl: "ms-windows-store://pdp/?ProductId=9PC7TTDCCN2V",
    webStoreUrl: "https://apps.microsoft.com/detail/9PC7TTDCCN2V",
    reviewUrl: "ms-windows-store://review/?ProductId=9PC7TTDCCN2V",
    icon: "🎧",
    logo: "assets/logo.png",
    pricing: {
      en: "Free Forever · Pro Lifetime $3.99 (7-Day Free Trial)",
      vi: "Miễn phí trọn đời · Pro Lifetime $3.99 (Dùng thử 7 ngày)"
    },
    name: {
      en: "Quick Audio Switcher - Sound & Device Controller",
      vi: "Quick Audio Switcher - Điều khiển Âm thanh & Thiết bị"
    },
    tagline: {
      en: "Smoked Liquid Glass Dynamic Island, Per-App Audio Router, Chat-Mix & Elgato Stream Deck Hub for Windows 11",
      vi: "Dynamic Island Smoked Liquid Glass, Bộ trộn âm thanh từng ứng dụng, Chat-Mix & Kết nối Elgato Stream Deck cho Windows 11"
    },
    description: {
      en: "Switch playback and microphone devices in one click, mix and route individual app audio outputs, balance Game vs. Voice Chat, control spatial EQ, and trigger everything from Elgato Stream Deck or global hotkeys.",
      vi: "Chuyển đổi loa/tai nghe và micro chỉ với 1 cú nhấp, điều chỉnh âm lượng và định tuyến âm thanh riêng cho từng ứng dụng, cân bằng Game/Voice Chat và điều khiển qua Elgato Stream Deck hoặc phím tắt toàn cục."
    },
    category: {
      en: "Utilities & Tools · Audio & Streaming",
      vi: "Tiện ích & Công cụ · Âm thanh & Streaming"
    },
    status: {
      en: "Available on Microsoft Store",
      vi: "Đã phát hành trên Microsoft Store"
    },
    highlights: {
      en: [
        "Smoked Liquid Glass Dynamic Island, Unified 3-in-1 Taskbar Dock & Side Edge Notch",
        "1-Click Audio Output & Microphone Switching + Alt+Wheel Hovered App Volume",
        "Per-App Audio Output Routing, Dual-Output Mirroring & Game/Voice Chat-Mix",
        "Audio Studio: 5-Band EQ, Bass/Vocal Boost, Smart Auto-Ducking & Safe Hearing Limiter",
        "1-Click Elgato Stream Deck Plugin & Local Loopback REST/WebSocket API (127.0.0.1:49152)"
      ],
      vi: [
        "Dynamic Island Smoked Liquid Glass, Thanh Dock 3-trong-1 & Side Edge Notch",
        "Chuyển nhanh Loa/Micro 1 chạm + Giữ Alt + Cuộn chuột chỉnh âm lượng cửa sổ đang trỏ",
        "Định tuyến đầu ra âm thanh từng ứng dụng, Phát song song 2 thiết bị & Chat-Mix",
        "Audio Studio: EQ 5 dải, Tăng Bass/Giọng nói, Tự động giảm nhạc khi họp & Bảo vệ thính giác",
        "Cài đặt Plugin Elgato Stream Deck 1 chạm & Local REST/WebSocket API (127.0.0.1:49152)"
      ]
    },
    privacySummary: {
      en: "100% local audio processing via Windows Core Audio (WASAPI). Microphone activity check only reads Windows endpoint active/mute state and NEVER records, listens to, or transmits audio. Optional Local Control Server binds strictly to 127.0.0.1 loopback with Bearer token protection.",
      vi: "Xử lý âm thanh 100% cục bộ qua Windows Core Audio (WASAPI). Tính năng kiểm tra trạng thái Micro chỉ đọc cờ bật/tắt của thiết bị, TUYỆT ĐỐI KHÔNG thu âm, nghe lén hay gửi dữ liệu. Máy chủ điều khiển cục bộ chỉ chạy trên 127.0.0.1 với mã bảo mật Bearer token."
    },
    localDataPath: "%LocalAppData%\\QuickAudioSwitcher",
    logPath: "%LocalAppData%\\QuickAudioSwitcher\\logs\\diagnostic.log",
    faqs: [
      {
        q: {
          en: "What if Dynamic Island overlaps my browser tabs at the top of the screen?",
          vi: "Làm sao khi Dynamic Island che mất tab trình duyệt ở cạnh trên màn hình?"
        },
        a: {
          en: "Hold the Alt key to instantly enter Ghost Click-Through Mode (opacity drops to 22% so you can click browser tabs directly underneath). You can also drag Dynamic Island left or right along the top edge, or right-click it and select 'Hide for 5 seconds' or 'Reset position to center'.",
          vi: "Giữ phím Alt để kích hoạt chế độ Xuyên chuột (Ghost Mode - độ mờ giảm còn 22% giúp bạn bấm trực tiếp vào tab trình duyệt bên dưới). Bạn cũng có thể kéo Dynamic Island sang trái/phải dọc mép trên, hoặc chuột phải chọn 'Ẩn trong 5 giây'."
        }
      },
      {
        q: {
          en: "How do I restore my Pro Lifetime license on a new Windows PC?",
          vi: "Làm thế nào để khôi phục bản quyền Pro Lifetime khi cài lại máy hoặc đổi PC mới?"
        },
        a: {
          en: "Sign into the Microsoft Store app using the same Microsoft account that purchased Pro, then open Quick Audio Switcher -> Settings -> Pro License and click 'Restore Purchase'. Your lifetime license is tied to your Microsoft account at no extra cost.",
          vi: "Đăng nhập ứng dụng Microsoft Store bằng đúng tài khoản Microsoft đã mua bản Pro, sau đó mở Quick Audio Switcher -> Cài đặt -> Bản quyền Pro và bấm 'Khôi phục giao dịch mua (Restore Purchase)'."
        }
      },
      {
        q: {
          en: "How do I connect Elgato Stream Deck to Quick Audio Switcher?",
          vi: "Làm sao để kết nối bàn phím Elgato Stream Deck với Quick Audio Switcher?"
        },
        a: {
          en: "Open Quick Audio Switcher -> Settings -> Integrations & API and click 'Install Stream Deck Plugin'. This automatically enables the Local Control Server on 127.0.0.1:49152 and registers the official plugin inside your Elgato Stream Deck software.",
          vi: "Mở Quick Audio Switcher -> Cài đặt -> Integrations & API và nhấn 'Install Stream Deck Plugin'. Ứng dụng sẽ tự động bật Local Control Server tại 127.0.0.1:49152 và cài plugin vào phần mềm Elgato Stream Deck."
        }
      }
    ]
  },
  {
    id: "habitgrid",
    slug: "habitgrid",
    privacySlug: "habitgrid",
    flagship: false,
    version: "v3.2.0",
    storeId: "MTD-HABITGRID",
    storeUrl: "https://apps.microsoft.com/search?query=HabitGrid+MTD+Studio",
    webStoreUrl: "https://apps.microsoft.com/search?query=HabitGrid+MTD+Studio",
    reviewUrl: "https://apps.microsoft.com/search?query=HabitGrid+MTD+Studio",
    icon: "🟩",
    logo: "assets/logo.png",
    pricing: {
      en: "Free + One-Time Pro Upgrade",
      vi: "Miễn phí + Nâng cấp Pro 1 lần"
    },
    name: {
      en: "Daily Habit Tracker Widget (HabitGrid)",
      vi: "Daily Habit Tracker Widget (HabitGrid)"
    },
    tagline: {
      en: "Windows 11 Desktop Habit Grid, GitHub-Style Streak Heatmap & Pomodoro Focus Timer",
      vi: "Lưới theo dõi thói quen trên Desktop Windows 11, Biểu đồ Heatmap chuỗi ngày & Đồng hồ Pomodoro"
    },
    description: {
      en: "Build lasting daily routines right on your Windows 11 desktop. Visualize your consistency with GitHub-inspired contribution heatmaps, pinned glass desktop widgets, smart reminders, and built-in Pomodoro focus sessions.",
      vi: "Xây dựng thói quen kỷ luật mỗi ngày ngay trên màn hình Desktop Windows 11. Trực quan hóa chuỗi ngày hoàn thành bằng biểu đồ Heatmap kiểu GitHub, widget kính mờ ghim trên màn hình và đồng hồ tập trung Pomodoro."
    },
    category: {
      en: "Productivity · Lifestyle & Focus",
      vi: "Năng suất · Thói quen & Tập trung"
    },
    status: {
      en: "Available on Microsoft Store",
      vi: "Đã phát hành trên Microsoft Store"
    },
    highlights: {
      en: [
        "365-Day GitHub-Style Streak Heatmap & Consistency Analytics",
        "Pin-to-Desktop Smoked Glass Widget with 1-Click Daily Check-In",
        "Built-In Pomodoro Focus Timer & Custom Routine Reminders",
        "100% Offline SQLite/JSON Storage with Instant Local Backup & Export"
      ],
      vi: [
        "Biểu đồ Heatmap chuỗi 365 ngày phong cách GitHub & thống kê tiến độ",
        "Widget kính mờ ghim trực tiếp lên Desktop, điểm danh thói quen 1 chạm",
        "Tích hợp đồng hồ Pomodoro và nhắc nhở lịch trình thông minh",
        "Lưu trữ SQLite/JSON 100% ngoại tuyến, hỗ trợ sao lưu và xuất dữ liệu dễ dàng"
      ]
    },
    privacySummary: {
      en: "All habit logs, streak histories, notes, and Pomodoro statistics are stored 100% locally in %LocalAppData%\\HabitGrid. Zero cloud sync, zero account registration, and zero third-party analytics.",
      vi: "Toàn bộ nhật ký thói quen, chuỗi ngày và thống kê Pomodoro được lưu trữ 100% cục bộ tại %LocalAppData%\\HabitGrid. Không đồng bộ đám mây, không cần tạo tài khoản và không thu thập dữ liệu phân tích."
    },
    localDataPath: "%LocalAppData%\\HabitGrid",
    logPath: "%LocalAppData%\\HabitGrid\\logs",
    faqs: [
      {
        q: {
          en: "How do I back up or move my HabitGrid streaks to another computer?",
          vi: "Làm sao để sao lưu hoặc chuyển dữ liệu chuỗi thói quen HabitGrid sang máy tính khác?"
        },
        a: {
          en: "Open HabitGrid -> Settings -> Data & Backup and click 'Export JSON Backup'. On your new PC, click 'Import JSON Backup' to restore all your habits and 365-day streak heatmaps immediately.",
          vi: "Mở HabitGrid -> Cài đặt -> Dữ liệu & Sao lưu và chọn 'Xuất bản sao lưu JSON (Export JSON)'. Trên máy tính mới, chọn 'Nhập JSON (Import JSON)' để khôi phục toàn bộ chuỗi ngày."
        }
      }
    ]
  },
  {
    id: "batch-file-renamer",
    slug: "batch-file-renamer",
    privacySlug: "batch-file-renamer",
    flagship: false,
    version: "v2.4.0",
    storeId: "MTD-BATCHRENAMER",
    storeUrl: "https://apps.microsoft.com/search?query=Batch+File+Renamer+MTD+Studio",
    webStoreUrl: "https://apps.microsoft.com/search?query=Batch+File+Renamer+MTD+Studio",
    reviewUrl: "https://apps.microsoft.com/search?query=Batch+File+Renamer+MTD+Studio",
    icon: "🗂️",
    logo: "assets/logo.png",
    pricing: {
      en: "Free + One-Time Pro Upgrade",
      vi: "Miễn phí + Nâng cấp Pro 1 lần"
    },
    name: {
      en: "Batch File Renamer",
      vi: "Batch File Renamer - Đổi tên File hàng loạt"
    },
    tagline: {
      en: "Fast Rule-Based Bulk File, Folder & Photo Renaming Utility for Windows",
      vi: "Công cụ đổi tên hàng ngàn tệp tin, thư mục và ảnh theo quy tắc siêu tốc cho Windows"
    },
    description: {
      en: "Rename thousands of files, folders, and photos in milliseconds with live before/after diff previews, stackable rule pipelines, Regex, EXIF date/camera metadata tags, sequential numbering, and 1-click undo rollback.",
      vi: "Đổi tên hàng ngàn tệp tin, thư mục và hình ảnh chỉ trong tích tắc với bảng xem trước trực quan, chuỗi quy tắc linh hoạt, biểu thức chính quy (Regex), dữ liệu ngày chụp EXIF, đánh số thứ tự và hoàn tác (Undo) 1 chạm."
    },
    category: {
      en: "Utilities & Tools · File Management",
      vi: "Tiện ích & Công cụ · Quản lý Tệp tin"
    },
    status: {
      en: "Available on Microsoft Store",
      vi: "Đã phát hành trên Microsoft Store"
    },
    highlights: {
      en: [
        "Real-Time Before/After Diff Preview & Automatic Conflict Detection",
        "Stackable Rule Pipeline: Find/Replace, Regex, Prefix/Suffix, Case & Trim",
        "Photo EXIF Date Taken, Dimensions & Audio Tag Variable Insertion",
        "1-Click Full Rollback / Undo History & Saved Preset Templates"
      ],
      vi: [
        "Xem trước sự thay đổi Tên cũ / Tên mới theo thời gian thực & cảnh báo trùng tên",
        "Kết hợp nhiều quy tắc: Tìm/Thay thế, Regex, Tiền tố/Hậu tố, Viết hoa/thường",
        "Chèn tự động ngày chụp ảnh EXIF, kích thước ảnh và thẻ siêu dữ liệu (metadata) âm nhạc",
        "Hoàn tác (Undo) toàn bộ mẻ đổi tên chỉ với 1 cú nhấp & lưu mẫu quy tắc"
      ]
    },
    privacySummary: {
      en: "Batch File Renamer operates strictly on local files and folders explicitly selected or dragged into the app by the user. No file names, file contents, or directory structures ever leave your PC.",
      vi: "Batch File Renamer chỉ thao tác trên các tệp và thư mục cục bộ do chính người dùng chọn hoặc kéo thả vào ứng dụng. Không có bất kỳ tên tệp hay nội dung tệp nào được gửi ra khỏi máy tính của bạn."
    },
    localDataPath: "%LocalAppData%\\BatchFileRenamer",
    logPath: "%LocalAppData%\\BatchFileRenamer\\logs",
    faqs: [
      {
        q: {
          en: "Can I undo a batch rename if I made a mistake?",
          vi: "Tôi có thể hoàn tác (Undo) nếu lỡ đổi tên nhầm hàng loạt file không?"
        },
        a: {
          en: "Yes! Every rename batch is recorded in the local Rollback History log. Simply click the 'Undo Last Batch' button in the top toolbar to restore every file to its exact original filename.",
          vi: "Hoàn toàn được! Mọi lượt đổi tên đều được lưu trong lịch sử cục bộ. Bạn chỉ cần bấm nút 'Undo Last Batch' trên thanh công cụ để khôi phục nguyên trạng tên gốc của tất cả các file."
        }
      }
    ]
  },
  {
    id: "quick-invoice-maker",
    slug: "quick-invoice-maker",
    privacySlug: "quick-invoice-maker",
    flagship: false,
    version: "v2.1.0",
    storeId: "MTD-QUICKINVOICE",
    storeUrl: "https://apps.microsoft.com/search?query=Quick+Invoice+Maker+MTD+Studio",
    webStoreUrl: "https://apps.microsoft.com/search?query=Quick+Invoice+Maker+MTD+Studio",
    reviewUrl: "https://apps.microsoft.com/search?query=Quick+Invoice+Maker+MTD+Studio",
    icon: "🧾",
    logo: "assets/logo.png",
    pricing: {
      en: "Free + One-Time Pro Upgrade",
      vi: "Miễn phí + Nâng cấp Pro 1 lần"
    },
    name: {
      en: "Quick Invoice Maker",
      vi: "Quick Invoice Maker - Tạo Hóa đơn & Báo giá PDF"
    },
    tagline: {
      en: "Clean Offline Invoice, Estimate & PDF Receipt Generator for Freelancers",
      vi: "Phần mềm tạo hóa đơn, báo giá và biên lai PDF chuyên nghiệp 100% ngoại tuyến cho Freelancer"
    },
    description: {
      en: "Create polished, print-ready PDF invoices, quotes, and receipts in under 60 seconds without monthly SaaS fees. Manage clients, saved catalog items, multi-currency taxes, discounts, and payment terms 100% offline.",
      vi: "Tạo hóa đơn, báo giá và biên lai PDF sắc nét chỉ trong 60 giây mà không tốn phí thuê bao hàng tháng. Quản lý khách hàng, danh mục dịch vụ, đa tiền tệ, thuế và chiết khấu 100% ngoại tuyến trên máy tính của bạn."
    },
    category: {
      en: "Business & Finance · Invoicing",
      vi: "Kinh doanh & Tài chính · Hóa đơn"
    },
    status: {
      en: "Available on Microsoft Store",
      vi: "Đã phát hành trên Microsoft Store"
    },
    highlights: {
      en: [
        "Instant Vector PDF Export with Your Custom Business Logo & Brand Colors",
        "Multi-Currency, Tax/VAT, Discount & Shipping Calculation Engine",
        "Reusable Client Address Book & Product/Service Item Catalog",
        "100% Local Financial Privacy — Your Client & Revenue Data Never Hits a Cloud Server"
      ],
      vi: [
        "Xuất file PDF vector sắc nét kèm Logo doanh nghiệp và màu sắc thương hiệu riêng",
        "Hỗ trợ đa tiền tệ (USD, EUR, VND...), tự động tính thuế VAT, chiết khấu và phí vận chuyển",
        "Danh bạ khách hàng và danh mục sản phẩm/dịch vụ tái sử dụng nhanh chóng",
        "Bảo mật tài chính 100% cục bộ — dữ liệu doanh thu và khách hàng không bao giờ lên đám mây"
      ]
    },
    privacySummary: {
      en: "All business profiles, client records, line items, and generated PDF invoices are saved 100% locally on your device. MTD Studio has zero access to your financial or customer information.",
      vi: "Toàn bộ hồ sơ doanh nghiệp, danh sách khách hàng và hóa đơn PDF được lưu trữ 100% trên ổ cứng của bạn. MTD Studio hoàn toàn không có quyền truy cập vào dữ liệu tài chính hay khách hàng của bạn."
    },
    localDataPath: "%LocalAppData%\\QuickInvoiceMaker",
    logPath: "%LocalAppData%\\QuickInvoiceMaker\\logs",
    faqs: [
      {
        q: {
          en: "Are my client lists and invoice totals stored on any cloud server?",
          vi: "Danh sách khách hàng và doanh thu hóa đơn của tôi có bị lưu trên máy chủ đám mây nào không?"
        },
        a: {
          en: "Never. Quick Invoice Maker is architected to be 100% offline-first. Your database lives exclusively inside %LocalAppData%\\QuickInvoiceMaker on your Windows PC.",
          vi: "Tuyệt đối không. Quick Invoice Maker hoạt động 100% ngoại tuyến. Cơ sở dữ liệu của bạn chỉ nằm duy nhất trong thư mục %LocalAppData%\\QuickInvoiceMaker trên máy tính của bạn."
        }
      }
    ]
  },
  {
    id: "auradesk",
    slug: "auradesk",
    privacySlug: "auradesk",
    flagship: false,
    version: "v1.5.0",
    storeId: "MTD-AURADESK",
    storeUrl: "https://apps.microsoft.com/search?query=AuraDesk+MTD+Studio",
    webStoreUrl: "https://apps.microsoft.com/search?query=AuraDesk+MTD+Studio",
    reviewUrl: "https://apps.microsoft.com/search?query=AuraDesk+MTD+Studio",
    icon: "✨",
    logo: "assets/logo.png",
    pricing: {
      en: "Free + One-Time Pro Upgrade",
      vi: "Miễn phí + Nâng cấp Pro 1 lần"
    },
    name: {
      en: "AuraDesk",
      vi: "AuraDesk - Không gian Làm việc & Âm thanh Tập trung"
    },
    tagline: {
      en: "Smart Desktop Workspace, Ambient Focus Audio & Productivity Suite for Windows",
      vi: "Không gian làm việc thông minh, Âm thanh Ambient tập trung & Bộ tiện ích năng suất cho Windows"
    },
    description: {
      en: "Transform your Windows desktop into a calm, high-output workspace. Blend layered offline ambient soundscapes (rain, café, white/brown noise), launch workspace app profiles, and track deep-work sessions in Smoked Liquid Glass.",
      vi: "Biến màn hình Windows thành không gian làm việc sâu đầy cảm hứng. Phối trộn âm thanh thiên nhiên ngoại tuyến (tiếng mưa, quán cà phê, brown noise), khởi chạy nhanh cụm ứng dụng công việc và quản lý phiên làm việc tập trung."
    },
    category: {
      en: "Productivity · Personalization & Focus",
      vi: "Năng suất · Cá nhân hóa & Tập trung"
    },
    status: {
      en: "Available on Microsoft Store",
      vi: "Đã phát hành trên Microsoft Store"
    },
    highlights: {
      en: [
        "Multi-Track Offline Ambient Sound Mixer (Rain, Fireplace, Café, Brown Noise)",
        "1-Click Workspace Profiles & Scratchpad Notes Dock",
        "Smoked Liquid Glass Clock, Deep-Work Session Timer & Break Alerts",
        "Lightweight Native Engine with Zero Background Telemetry"
      ],
      vi: [
        "Bộ trộn âm thanh Ambient nhiều lớp ngoại tuyến (Mưa, Lửa trại, Café, Brown Noise)",
        "Khởi chạy cấu hình không gian làm việc 1 chạm & sổ tay ghi chú nhanh",
        "Đồng hồ Smoked Liquid Glass, hẹn giờ Deep-Work và nhắc nghỉ ngơi bảo vệ mắt",
        "Nhẹ, mượt, tối ưu hóa phần cứng gốc và không chạy ngầm thu thập dữ liệu"
      ]
    },
    privacySummary: {
      en: "All scratchpad notes, workspace presets, and ambient mixer configurations are saved locally in %LocalAppData%\\AuraDesk. Audio loops are synthesized/played locally with zero network usage.",
      vi: "Mọi ghi chú nhanh, cấu hình không gian làm việc và thiết lập âm thanh đều được lưu cục bộ tại %LocalAppData%\\AuraDesk. Âm thanh được phát ngoại tuyến, không sử dụng kết nối mạng."
    },
    localDataPath: "%LocalAppData%\\AuraDesk",
    logPath: "%LocalAppData%\\AuraDesk\\logs",
    faqs: [
      {
        q: {
          en: "Does AuraDesk require an internet connection to play ambient focus sounds?",
          vi: "AuraDesk có cần kết nối Internet để phát âm thanh tập trung không?"
        },
        a: {
          en: "No. All ambient sound layers are bundled and synthesized locally on your PC so you can focus on flights, trains, or completely offline environments.",
          vi: "Không cần. Toàn bộ các lớp âm thanh Ambient đều được xử lý ngoại tuyến ngay trên máy tính, giúp bạn tập trung làm việc mọi lúc mọi nơi kể cả khi không có mạng."
        }
      }
    ]
  }
];
