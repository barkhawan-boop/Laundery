const STORAGE_KEY = "laundery-erbil-state-v1";
const ADMIN_PIN = "0000";
const DEFAULT_LAUNDRY_SERVICES = "Blanket & Curtain Washing, Ironing Clothes Blankets & Curtains, Washing, Washing & Drying";
const REMEMBER_ADMIN_SESSION = false;
const laundryServiceLabels = {
  blanketCurtainWashing: {
    en: "Blanket & Curtain Washing",
    ku: "شوشتنی بەتانی و پەردە",
    ar: "غسل البطانيات والستائر",
    aliases: ["Blanket Washing"]
  },
  ironingAll: {
    en: "Ironing Clothes Blankets & Curtains",
    ku: "ووتوکردنی جل و بەرگ و بەتانی و پەردە",
    ar: "كي الملابس والبطانيات والستائر",
    aliases: ["Clothes Cleaning & Ironing"]
  },
  washing: {
    en: "Washing",
    ku: "شوشتن",
    ar: "غسل",
    aliases: ["Cleaning"]
  },
  washingDryingService: {
    en: "Washing & Drying",
    ku: "شوشتن و ووشک کردن",
    ar: "غسل وتجفيف",
    aliases: ["Dry Cleaning & Laundry"]
  }
};

const languages = {
  en: { label: "English", dir: "ltr" },
  ku: { label: "کوردی", dir: "rtl" },
  ar: { label: "العربية", dir: "rtl" }
};

const dict = {
  en: {
    city: "Erbil service",
    appName: "Erbil Laundries",
    chooseLanguage: "Choose language",
    owner: "Laundry owner",
    customer: "Customer",
    admin: "Admin",
    back: "Back",
    logout: "Log out",
    changeLanguage: "Language",
    signIn: "Sign in",
    laundryName: "Laundry name",
    ownerCode: "Owner code",
    customerCode: "Customer code",
    adminPin: "Admin PIN",
    ownerLogin: "Owner sign in",
    customerLogin: "Customer sign in",
    adminLogin: "Admin sign in",
    addCustomer: "Add customer",
    newSubmission: "New submission",
    orderName: "Order name",
    submissions: "Submissions",
    customerName: "Customer name",
    customerPhone: "Customer phone",
    existingCustomer: "Existing customer",
    newCustomer: "New customer",
    ownerPhone: "Owner phone",
    location: "Location",
    laundryContact: "Laundry contact",
    services: "Services",
    servicesHint: "Separate services with commas",
    serviceChoices: "Required services",
    clothes: "Clothes",
    blanket: "Blanket",
    curtain: "Curtain",
    drying: "Drying",
    washing: "Washing",
    washingDrying: "Washing + drying",
    ironing: "Ironing",
    ironingAmount: "Ironing amount",
    findNearestLaundry: "Find nearest laundry",
    nearestLaundry: "Nearest laundry",
    useMyLocation: "Use my location",
    nearestIntro: "Use your current location to find laundries closest to you.",
    distanceAway: "away",
    locationNeeded: "Location permission is needed",
    laundryLocationMissing: "No map location saved for this laundry",
    noNearbyLaundries: "No laundries with map locations yet",
    locationHint: "Use a Google Maps link or coordinates like 36.1911, 44.0092",
    optional: "optional",
    clothesParts: "Clothes parts",
    markUrgent: "Urgent",
    add: "Add",
    active: "Active",
    urgent: "Urgent",
    urgentCustomers: "Urgent customers",
    readyToday: "Ready today",
    notifications: "Notifications",
    noNotifications: "No notifications",
    markRead: "Mark read",
    orders: "Customers",
    searchByCode: "Search by code",
    history: "History",
    completed: "Completed",
    complete: "Complete",
    ready: "Clothes are ready",
    waiting: "In progress",
    requestUrgent: "Request urgent",
    urgentSent: "Urgent request sent",
    welcome: "Welcome",
    selectLaundry: "Select laundry",
    noOrders: "No clothes found for this code",
    customerRegistered: "Customer registered",
    noLaundries: "No laundries registered",
    registerLaundry: "Register laundry",
    generateCode: "Generate code",
    saveLaundry: "Save laundry",
    serviceControl: "Service control",
    serviceDisabled: "Disable service",
    activeFrom: "Active from",
    activeTo: "Active until",
    saveService: "Save service",
    serviceActive: "Service active",
    serviceStopped: "Service stopped",
    delivery: "Delivery",
    deliveryEnabled: "Delivery available",
    deliveryDisabled: "No delivery",
    enableDelivery: "Delivery",
    saveDelivery: "Save delivery",
    requestDelivery: "Request delivery",
    deliveryRequested: "Delivery request sent",
    deliveryLocation: "Delivery location",
    enterDeliveryLocation: "Write delivery location",
    useCurrentLocation: "Use current location",
    locationReady: "Location added",
    locationUnavailable: "Location is unavailable",
    deliveryLocationRequired: "Please write the delivery location",
    deliveryNoticeTitle: "Delivery request",
    deliveryNoticeBody: "Customer requested delivery.",
    deliveryUnavailable: "Delivery is not available from this laundry",
    accountExpiredTitle: "Your account expired",
    accountExpiredBody: "Please pay app fee to continue. For paying call 07504558922 or FIB same number.",
    registeredLaundries: "Registered laundries",
    codeRange: "3 numbers + 1 letter",
    partsLabel: "parts",
    codeLabel: "code",
    added: "Added",
    doneNoticeTitle: "Done",
    doneNoticeBody: "Your clothes are ready for pickup.",
    urgentNoticeTitle: "Urgent request",
    urgentNoticeBody: "Customer requested urgent service.",
    ownerUrgentBody: "This order is marked urgent.",
    saved: "Saved",
    completedToast: "Customer notified",
    invalidLogin: "Check the name and code",
    invalidAdmin: "Wrong admin PIN",
    invalidCode: "Use the generated customer code",
    duplicateActive: "This code already has active clothes",
    duplicateCustomerCode: "This code already belongs to another customer. Choose the customer from the existing list.",
    notificationPermission: "Phone alerts",
    enableAlerts: "Enable alerts",
    alertsEnabled: "Alerts enabled",
    alertsBlocked: "Alerts are blocked in this browser",
    seenByOwner: "Seen by laundry owner",
    waitingForOwnerRead: "Waiting for laundry owner to read",
    notSeenYet: "Not seen yet",
    demoPin: "Demo PIN: 0000"
  },
  ku: {
    city: "خزمەتگوزاری هەولێر",
    appName: "Erbil Laundries",
    chooseLanguage: "زمان هەڵبژێرە",
    owner: "خاوەنی لاندری",
    customer: "کڕیار",
    admin: "ئەدمین",
    back: "گەڕانەوە",
    logout: "چوونەدەرەوە",
    changeLanguage: "زمان",
    signIn: "چوونەژوورەوە",
    laundryName: "ناوی لاندری",
    ownerCode: "کۆدی خاوەن",
    customerCode: "کۆدی کڕیار",
    adminPin: "پینی ئەدمین",
    ownerLogin: "چوونە ژوورەوەی خاوەن کارەکان",
    customerLogin: "چوونەژوورەوەی کڕیار",
    adminLogin: "چوونەژوورەوەی ئەدمین",
    addCustomer: "زیادکردنی کڕیار",
    newSubmission: "داواکاری نوێ",
    orderName: "ناوی داواکاری",
    submissions: "سپاردنەکان",
    customerName: "ناوی کڕیار",
    customerPhone: "ژمارەی مۆبایلی کڕیار",
    existingCustomer: "کڕیاری پێشوو",
    newCustomer: "کڕیاری نوێ",
    ownerPhone: "ژمارەی مۆبایلی خاوەن",
    location: "شوێن",
    laundryContact: "پەیوەندی لاندری",
    services: "خزمەتگوزارییەکان",
    servicesHint: "خزمەتگوزارییەکان بە کۆما جیا بکەوە",
    serviceChoices: "خزمەتگوزارییە پێویستەکان",
    clothes: "جل",
    blanket: "بەتانی",
    curtain: "پەردە",
    drying: "وشککردن",
    washing: "شوشتن",
    washingDrying: "شوشتن و وشککردن",
    ironing: "ئوتووکردن",
    ironingAmount: "ژمارەی ئوتووکردن",
    findNearestLaundry: "نزیکترین لاندری بدۆزەوە",
    nearestLaundry: "نزیکترین لاندری",
    useMyLocation: "شوێنی من بەکاربهێنە",
    nearestIntro: "شوێنی ئێستات بەکاربهێنە بۆ دۆزینەوەی نزیکترین لاندری.",
    distanceAway: "دوورە",
    locationNeeded: "پێویستە ڕێگە بە شوێن بدەیت",
    laundryLocationMissing: "شوێنی نەخشە بۆ ئەم لاندرییە تۆمار نەکراوە",
    noNearbyLaundries: "هێشتا هیچ لاندرییەک شوێنی نەخشەی نییە",
    locationHint: "لینکی Google Maps یان کۆردینات وەک 36.1911, 44.0092 بەکاربهێنە",
    optional: "ئارەزوومەندانە",
    clothesParts: "ژمارەی پارچە جل",
    markUrgent: "پەلە",
    add: "زیادکردن",
    active: "چالاک",
    urgent: "پەلە",
    urgentCustomers: "کڕیارە پەلەکان",
    readyToday: "ئەمڕۆ ئامادەبوو",
    notifications: "ئاگادارکردنەوەکان",
    noNotifications: "ئاگادارکردنەوە نییە",
    markRead: "خوێندراوە",
    orders: "کڕیارەکان",
    searchByCode: "گەڕان بە کۆد",
    history: "لیستی داواکاریەکان",
    completed: "تەواوبوو",
    complete: "تەواوکرا",
    ready: "جلەکان ئامادەن",
    waiting: "لە کاردایە",
    requestUrgent: "داوای پەلە",
    urgentSent: "داوای پەلە نێردرا",
    welcome: "بەخێربێیت",
    selectLaundry: "لاندری هەڵبژێرە",
    noOrders: "هیچ جلێک بۆ ئەم کۆدە نەدۆزرایەوە",
    customerRegistered: "کڕیار تۆمارکرا",
    noLaundries: "هیچ لاندرییەک تۆمار نەکراوە",
    registerLaundry: "تۆمارکردنی لاندری",
    generateCode: "دروستکردنی کۆد",
    saveLaundry: "پاشەکەوتکردنی لاندری",
    serviceControl: "کۆنترۆڵی خزمەتگوزاری",
    serviceDisabled: "وەستاندنی خزمەتگوزاری",
    activeFrom: "چالاکە لە",
    activeTo: "چالاکە تا",
    saveService: "پاشەکەوتکردنی خزمەتگوزاری",
    serviceActive: "خزمەتگوزاری چالاکە",
    serviceStopped: "خزمەتگوزاری وەستاوە",
    delivery: "گەیاندن",
    deliveryEnabled: "گەیاندن هەیە",
    deliveryDisabled: "گەیاندن نیە",
    enableDelivery: "گەیاندن",
    saveDelivery: "پاشەکەوتکردنی گەیاندن",
    requestDelivery: "داوای گەیاندن",
    deliveryRequested: "داوای گەیاندن نێردرا",
    deliveryLocation: "شوێنی گەیاندن",
    enterDeliveryLocation: "شوێنی گەیاندن بنووسە",
    useCurrentLocation: "شوێنی ئێستا بەکاربهێنە",
    locationReady: "شوێن زیادکرا",
    locationUnavailable: "شوێن بەردەست نییە",
    deliveryLocationRequired: "تکایە شوێنی گەیاندن بنووسە",
    deliveryNoticeTitle: "داوای گەیاندن",
    deliveryNoticeBody: "کڕیار داوای گەیاندنی کرد.",
    deliveryUnavailable: "گەیاندن لەم لاندرییە بەردەست نییە",
    accountExpiredTitle: "هەژمارەکەت بەسەرچووە",
    accountExpiredBody: "تکایە کرێی ئەپەکە بدە بۆ بەردەوامبوون. بۆ پارەدان پەیوەندی بکە بە 07504558922 یان FIB بە هەمان ژمارە.",
    registeredLaundries: "لاندرییە تۆمارکراوەکان",
    codeRange: "٣ ژمارە + ١ پیت",
    partsLabel: "پارچە",
    codeLabel: "کۆد",
    added: "زیادکرا",
    doneNoticeTitle: "تەواوە",
    doneNoticeBody: "جلەکانت ئامادەن بۆ وەرگرتنەوە.",
    urgentNoticeTitle: "داوای پەلە",
    urgentNoticeBody: "کڕیار داوای خزمەتی پەلەی کرد.",
    ownerUrgentBody: "ئەم داواکارییە پەلەیە.",
    saved: "پاشەکەوتکرا",
    completedToast: "کڕیار ئاگادارکرایەوە",
    invalidLogin: "ناو و کۆد بپشکنە",
    invalidAdmin: "پینی ئەدمین هەڵەیە",
    invalidCode: "کۆدی دروستکراوی کڕیار بەکاربهێنە",
    duplicateActive: "ئەم کۆدە جلێکی چالاکی هەیە",
    duplicateCustomerCode: "ئەم کۆدە پێشتر بۆ کڕیارێک تۆمارکراوە. کڕیارەکە لە لیستی کڕیاری پێشوو هەڵبژێرە.",
    notificationPermission: "ئاگاداری مۆبایل",
    enableAlerts: "چالاککردنی ئاگاداری",
    alertsEnabled: "ئاگاداری چالاککرا",
    alertsBlocked: "ئاگاداری لەم وێبگەڕە داخراوە",
    seenByOwner: "خاوەنەکە بینیویەتی",
    waitingForOwnerRead: "چاوەڕێی خوێندنەوەی خاوەنەکە",
    notSeenYet: "هێشتا نەبینراوە",
    demoPin: "پینی نموونە: 0000"
  },
  ar: {
    city: "خدمة أربيل",
    appName: "Erbil Laundries",
    chooseLanguage: "اختر اللغة",
    owner: "صاحب المغسلة",
    customer: "الزبون",
    admin: "المشرف",
    back: "رجوع",
    logout: "خروج",
    changeLanguage: "اللغة",
    signIn: "دخول",
    laundryName: "اسم المغسلة",
    ownerCode: "كود صاحب المغسلة",
    customerCode: "كود الزبون",
    adminPin: "رمز المشرف",
    ownerLogin: "دخول صاحب المغسلة",
    customerLogin: "دخول الزبون",
    adminLogin: "دخول المشرف",
    addCustomer: "إضافة زبون",
    newSubmission: "تسليم جديد",
    orderName: "اسم الطلب",
    submissions: "التسليمات",
    customerName: "اسم الزبون",
    customerPhone: "رقم هاتف الزبون",
    existingCustomer: "زبون سابق",
    newCustomer: "زبون جديد",
    ownerPhone: "هاتف صاحب المغسلة",
    location: "الموقع",
    laundryContact: "معلومات المغسلة",
    services: "الخدمات",
    servicesHint: "افصل الخدمات بفواصل",
    serviceChoices: "الخدمات المطلوبة",
    clothes: "ملابس",
    blanket: "بطانية",
    curtain: "ستارة",
    drying: "تجفيف",
    washing: "غسل",
    washingDrying: "غسل وتجفيف",
    ironing: "كي",
    ironingAmount: "عدد الكي",
    findNearestLaundry: "اعثر على أقرب مغسلة",
    nearestLaundry: "أقرب مغسلة",
    useMyLocation: "استخدم موقعي",
    nearestIntro: "استخدم موقعك الحالي للعثور على أقرب المغاسل.",
    distanceAway: "بعيد",
    locationNeeded: "يجب السماح بالموقع",
    laundryLocationMissing: "لا يوجد موقع خريطة لهذه المغسلة",
    noNearbyLaundries: "لا توجد مغاسل لديها موقع خريطة بعد",
    locationHint: "استخدم رابط Google Maps أو إحداثيات مثل 36.1911, 44.0092",
    optional: "اختياري",
    clothesParts: "عدد قطع الملابس",
    markUrgent: "مستعجل",
    add: "إضافة",
    active: "نشط",
    urgent: "مستعجل",
    urgentCustomers: "الزبائن المستعجلون",
    readyToday: "جاهز اليوم",
    notifications: "الإشعارات",
    noNotifications: "لا توجد إشعارات",
    markRead: "تمت القراءة",
    orders: "الزبائن",
    searchByCode: "بحث بالكود",
    history: "السجل",
    completed: "مكتمل",
    complete: "إكمال",
    ready: "الملابس جاهزة",
    waiting: "قيد التجهيز",
    requestUrgent: "طلب مستعجل",
    urgentSent: "تم إرسال طلب الاستعجال",
    welcome: "أهلا",
    selectLaundry: "اختر المغسلة",
    noOrders: "لا توجد ملابس لهذا الكود",
    customerRegistered: "تم تسجيل الزبون",
    noLaundries: "لا توجد مغاسل مسجلة",
    registerLaundry: "تسجيل مغسلة",
    generateCode: "توليد كود",
    saveLaundry: "حفظ المغسلة",
    serviceControl: "إدارة الخدمة",
    serviceDisabled: "إيقاف الخدمة",
    activeFrom: "تفعيل من",
    activeTo: "تفعيل إلى",
    saveService: "حفظ الخدمة",
    serviceActive: "الخدمة فعالة",
    serviceStopped: "الخدمة متوقفة",
    delivery: "التوصيل",
    deliveryEnabled: "التوصيل متوفر",
    deliveryDisabled: "لا يوجد توصيل",
    enableDelivery: "التوصيل",
    saveDelivery: "حفظ التوصيل",
    requestDelivery: "طلب التوصيل",
    deliveryRequested: "تم إرسال طلب التوصيل",
    deliveryLocation: "موقع التوصيل",
    enterDeliveryLocation: "اكتب موقع التوصيل",
    useCurrentLocation: "استخدم موقعي الحالي",
    locationReady: "تمت إضافة الموقع",
    locationUnavailable: "الموقع غير متوفر",
    deliveryLocationRequired: "يرجى كتابة موقع التوصيل",
    deliveryNoticeTitle: "طلب توصيل",
    deliveryNoticeBody: "الزبون طلب التوصيل.",
    deliveryUnavailable: "التوصيل غير متوفر من هذه المغسلة",
    accountExpiredTitle: "انتهى حسابك",
    accountExpiredBody: "يرجى دفع رسوم التطبيق للمتابعة. للدفع اتصل على 07504558922 أو FIB على نفس الرقم.",
    registeredLaundries: "المغاسل المسجلة",
    codeRange: "٣ أرقام + حرف",
    partsLabel: "قطع",
    codeLabel: "كود",
    added: "تمت الإضافة",
    doneNoticeTitle: "تم",
    doneNoticeBody: "ملابسك جاهزة للاستلام.",
    urgentNoticeTitle: "طلب مستعجل",
    urgentNoticeBody: "الزبون طلب خدمة مستعجلة.",
    ownerUrgentBody: "هذا الطلب مستعجل.",
    saved: "تم الحفظ",
    completedToast: "تم إشعار الزبون",
    invalidLogin: "تأكد من الاسم والكود",
    invalidAdmin: "رمز المشرف غير صحيح",
    invalidCode: "استخدم كود الزبون المولد",
    duplicateActive: "يوجد طلب نشط لهذا الكود",
    duplicateCustomerCode: "هذا الكود مسجل لزبون آخر. اختر الزبون من القائمة السابقة.",
    notificationPermission: "تنبيهات الهاتف",
    enableAlerts: "تفعيل التنبيهات",
    alertsEnabled: "تم تفعيل التنبيهات",
    alertsBlocked: "التنبيهات محظورة في هذا المتصفح",
    seenByOwner: "شاهده صاحب المغسلة",
    waitingForOwnerRead: "بانتظار قراءة صاحب المغسلة",
    notSeenYet: "لم تتم المشاهدة بعد",
    demoPin: "رمز التجربة: 0000"
  }
};

Object.assign(dict.en, {
  deleteCustomer: "Delete customer",
  deleteLaundry: "Delete laundry",
  confirmDeleteCustomer: "Delete this customer and all orders?",
  confirmDeleteLaundry: "Delete this laundry and all related customers/orders?",
  customerDeleted: "Customer deleted",
  laundryDeleted: "Laundry deleted"
});

Object.assign(dict.ku, {
  deleteCustomer: "سڕینەوەی کڕیار",
  deleteLaundry: "سڕینەوەی لاندری",
  confirmDeleteCustomer: "ئەم کڕیارە و هەموو داواکارییەکانی بسڕدرێتەوە؟",
  confirmDeleteLaundry: "ئەم لاندرییە و هەموو کڕیار و داواکارییەکانی بسڕدرێتەوە؟",
  customerDeleted: "کڕیار سڕدرایەوە",
  laundryDeleted: "لاندری سڕدرایەوە"
});

Object.assign(dict.ar, {
  deleteCustomer: "حذف الزبون",
  deleteLaundry: "حذف المغسلة",
  confirmDeleteCustomer: "هل تريد حذف هذا الزبون وكل طلباته؟",
  confirmDeleteLaundry: "هل تريد حذف هذه المغسلة وكل الزبائن والطلبات المرتبطة بها؟",
  customerDeleted: "تم حذف الزبون",
  laundryDeleted: "تم حذف المغسلة"
});

const icons = {
  owner: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 10.5 12 4l7 6.5V20H5z"/><path d="M9 20v-6h6v6"/></svg>',
  customer: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
  admin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 5 6v5c0 4.5 3 8.5 7 10 4-1.5 7-5.5 7-10V6z"/><path d="m9 12 2 2 4-5"/></svg>',
  back: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18 9 12l6-6"/></svg>',
  bell: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></svg>',
  done: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 13 4 4L19 7"/></svg>',
  add: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
  alert: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2 21h20z"/><path d="M12 9v5M12 17h.01"/></svg>',
  code: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/></svg>',
  truck: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 17H5V6h11v11h-2"/><path d="M16 9h3l3 4v4h-2"/><circle cx="7" cy="17" r="2"/><circle cx="18" cy="17" r="2"/></svg>',
  pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-5.2 7-11a7 7 0 0 0-14 0c0 5.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>'
};

let data = loadData();
let view = getInitialView();
let adminTapCount = 0;
let adminTapTimer = null;
let splashTimer = null;
let nearestState = { loading: false, searched: false, error: "", results: [], userLocation: null };

const app = document.querySelector("#app");
const toastStack = document.querySelector("#toastStack");

render();
registerServiceWorker();

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const { action } = button.dataset;

  if (action === "language") {
    setLanguage(button.dataset.lang);
  }
  if (action === "change-language") {
    view = { screen: "language", session: null };
    render();
  }
  if (action === "go-language") {
    data.lastSession = null;
    saveData();
    view = { screen: "language", session: null };
    render();
  }
  if (action === "screen") {
    view = { screen: button.dataset.screen, session: null };
    render();
  }
  if (action === "logout") {
    data.lastSession = null;
    saveData();
    view = { screen: "role", session: null };
    render();
  }
  if (action === "back-role") {
    view = { screen: "role", session: null };
    render();
  }
  if (action === "mark-read") {
    markRelevantNoticesRead();
  }
  if (action === "complete") {
    completeOrder(button.dataset.orderId);
  }
  if (action === "owner-urgent") {
    markOrderUrgent(button.dataset.orderId, "owner");
  }
  if (action === "customer-urgent") {
    requestUrgentFromCustomer();
  }
  if (action === "customer-delivery") {
    requestDeliveryFromCustomer();
  }
  if (action === "use-current-location") {
    fillCurrentDeliveryLocation();
  }
  if (action === "find-nearest") {
    findNearestLaundries();
  }
  if (action === "generate-code") {
    const input = document.querySelector("#adminLaundryCode");
    if (input) input.value = String(generateLaundryCode());
  }
  if (action === "generate-customer-code") {
    const form = button.closest("form");
    const input = form?.elements.customerCode;
    if (input) input.value = generateCustomerCode(view.session?.laundryId);
  }
  if (action === "delete-customer") {
    deleteCustomer(button.dataset.customerCode);
  }
  if (action === "delete-laundry") {
    deleteLaundry(button.dataset.laundryId);
  }
  if (action === "enable-alerts") {
    requestNotificationPermission();
  }
  if (action === "secret-admin-tap") {
    handleSecretAdminTap();
  }
});

document.addEventListener("change", (event) => {
  const select = event.target.closest('[data-action="select-existing-customer"]');
  const ownerCustomerSelect = event.target.closest('[data-action="select-owner-customer"]');
  const deliveryToggle = event.target.closest('[data-action="toggle-delivery"]');
  const preferenceField = event.target.closest("form[data-form] input, form[data-form] select");

  if (select) fillExistingCustomer(select);
  if (ownerCustomerSelect) selectOwnerCustomer(ownerCustomerSelect.value);
  if (deliveryToggle) updateDelivery(deliveryToggle.checked);
  if (preferenceField) saveFieldPreference(preferenceField);
});

document.addEventListener("input", (event) => {
  const input = event.target.closest('input[name^="ironQty_"]');
  if (input) {
    updatePartsTotal(event.target.closest("form"));
  }

  const codeSearch = event.target.closest('[data-action="search-owner-customer-code"]');
  if (codeSearch) {
    searchOwnerCustomerByCode(codeSearch.value);
  }

  const preferenceField = event.target.closest("form[data-form] input, form[data-form] select");
  if (preferenceField) saveFieldPreference(preferenceField);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;

  const trigger = event.target.closest('[data-action="secret-admin-tap"]');
  if (!trigger) return;

  event.preventDefault();
  handleSecretAdminTap();
});

document.addEventListener("submit", (event) => {
  const form = event.target.closest("form[data-form]");
  if (!form) return;
  event.preventDefault();

  updatePartsTotal(form);
  const formData = new FormData(form);
  const type = form.dataset.form;
  saveFormPreferences(form);

  if (type === "owner-login") ownerLogin(formData);
  if (type === "customer-login") customerLogin(formData);
  if (type === "admin-login") adminLogin(formData);
  if (type === "add-customer" || type === "add-submission") addCustomer(formData, form);
  if (type === "save-laundry") saveLaundry(formData, form);
  if (type === "update-laundry-service") updateLaundryService(formData);
});

function loadData() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      return normalizeStoredData(JSON.parse(saved));
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  const now = Date.now();
  return {
    language: null,
    laundries: [
      {
        id: "laundry-shanadar",
        name: "Shanadar Laundry",
        code: "1842",
        ownerPhone: "07504558922",
        location: "https://www.google.com/maps/search/?api=1&query=Shanadar%20Laundry%20Erbil",
        services: DEFAULT_LAUNDRY_SERVICES,
        serviceDisabled: false,
        deliveryEnabled: false,
        activeFrom: "",
        activeTo: "",
        createdAt: now - 86400000
      },
      {
        id: "laundry-citadel",
        name: "Citadel Clean",
        code: "2760",
        ownerPhone: "",
        location: "https://www.google.com/maps/search/?api=1&query=Citadel%20Clean%20Erbil",
        services: DEFAULT_LAUNDRY_SERVICES,
        serviceDisabled: false,
        deliveryEnabled: false,
        activeFrom: "",
        activeTo: "",
        createdAt: now - 43200000
      }
    ],
    customers: [
      {
        id: "customer-shanadar-12",
        laundryId: "laundry-shanadar",
        name: "Ari",
        phone: "",
        code: "12",
        createdAt: now - 7200000,
        updatedAt: now - 7200000
      },
      {
        id: "customer-citadel-45",
        laundryId: "laundry-citadel",
        name: "Sara",
        phone: "",
        code: "45",
        createdAt: now - 172800000,
        updatedAt: now - 172800000
      }
    ],
    orders: [
      {
        id: "order-100",
        laundryId: "laundry-shanadar",
        customerName: "Ari",
        customerPhone: "",
        customerCode: "12",
        parts: 4,
        urgent: false,
        urgentByCustomer: false,
        deliveryRequested: false,
        deliveryRequestedAt: null,
        deliveryLocation: "",
        done: false,
        createdAt: now - 7200000,
        completedAt: null,
        urgentAt: null
      },
      {
        id: "order-101",
        laundryId: "laundry-citadel",
        customerName: "Sara",
        customerPhone: "",
        customerCode: "45",
        parts: 2,
        urgent: true,
        urgentByCustomer: true,
        deliveryRequested: false,
        deliveryRequestedAt: null,
        deliveryLocation: "",
        done: true,
        createdAt: now - 172800000,
        completedAt: now - 86400000,
        urgentAt: now - 169200000
      }
    ],
    notices: [],
    lastSession: null,
    preferences: {}
  };
}

function normalizeStoredData(state) {
  return {
    language: state.language || null,
    laundries: Array.isArray(state.laundries) ? state.laundries.map(normalizeLaundry) : [],
    customers: normalizeCustomers(state),
    orders: Array.isArray(state.orders) ? state.orders.map(normalizeOrder) : [],
    notices: Array.isArray(state.notices)
      ? state.notices.map((notice) => ({ ...notice, customerCode: normalizeCustomerCode(notice.customerCode), readAt: notice.readAt || null, orderId: notice.orderId || null, type: notice.type || "general" }))
      : [],
    lastSession: state.lastSession || null,
    preferences: state.preferences && typeof state.preferences === "object" ? state.preferences : {}
  };
}

function normalizeCustomers(state) {
  const byCustomer = new Map();
  const sourceCustomers = Array.isArray(state.customers) ? state.customers : [];
  const sourceOrders = Array.isArray(state.orders) ? state.orders : [];

  sourceCustomers.forEach((customer) => {
    const normalized = normalizeCustomer(customer);
    byCustomer.set(customerKey(normalized.laundryId, normalized.code), normalized);
  });

  sourceOrders.forEach((order) => {
    const code = normalizeCustomerCode(order.customerCode);
    if (!order.laundryId || !isValidCustomerCode(code)) return;

    const key = customerKey(order.laundryId, code);
    if (!byCustomer.has(key)) {
      byCustomer.set(key, normalizeCustomer({
        id: `customer-${order.laundryId}-${code}`,
        laundryId: order.laundryId,
        name: order.customerName || "",
        phone: order.customerPhone || "",
        code,
        createdAt: order.createdAt || Date.now(),
        updatedAt: order.createdAt || Date.now()
      }));
    }
  });

  return Array.from(byCustomer.values());
}

function normalizeCustomer(customer) {
  return {
    id: customer.id || crypto.randomUUID(),
    laundryId: customer.laundryId || "",
    name: customer.name || customer.customerName || "",
    phone: customer.phone || customer.customerPhone || "",
    code: normalizeCustomerCode(customer.code ?? customer.customerCode),
    createdAt: customer.createdAt || Date.now(),
    updatedAt: customer.updatedAt || customer.createdAt || Date.now()
  };
}

function normalizeLaundry(laundry) {
  return {
    ...laundry,
    ownerPhone: laundry.ownerPhone || "",
    location: laundry.location || "",
    services: laundry.services || DEFAULT_LAUNDRY_SERVICES,
    serviceDisabled: Boolean(laundry.serviceDisabled),
    deliveryEnabled: Boolean(laundry.deliveryEnabled),
    activeFrom: laundry.activeFrom || "",
    activeTo: laundry.activeTo || ""
  };
}

function normalizeOrder(order) {
  return {
    ...order,
    customerCode: normalizeCustomerCode(order.customerCode),
    orderName: order.orderName || "",
    customerPhone: order.customerPhone || "",
    serviceSelections: Array.isArray(order.serviceSelections) ? order.serviceSelections : [],
    ironingAmounts: order.ironingAmounts || {},
    deliveryRequested: Boolean(order.deliveryRequested),
    deliveryRequestedAt: order.deliveryRequestedAt || null,
    deliveryLocation: order.deliveryLocation || ""
  };
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function preferenceKey(formType, fieldName) {
  return `${formType}.${fieldName}`;
}

function preferenceValue(formType, fieldName, fallback = "") {
  return data.preferences?.[preferenceKey(formType, fieldName)] ?? fallback;
}

function shouldSaveFieldPreference(field) {
  const form = field.closest("form[data-form]");
  if (!form || !field.name) return false;
  if (form.dataset.form === "admin-login") return false;
  if (field.type === "hidden" || field.type === "password" || field.type === "checkbox") return false;
  if (field.readOnly || field.disabled) return false;
  return true;
}

function saveFieldPreference(field) {
  if (!shouldSaveFieldPreference(field)) return;
  const form = field.closest("form[data-form]");
  data.preferences = data.preferences || {};
  data.preferences[preferenceKey(form.dataset.form, field.name)] = field.value;
  saveData();
}

function saveFormPreferences(form) {
  form.querySelectorAll("input[name], select[name]").forEach(saveFieldPreference);
}

function setLanguage(lang) {
  data.language = languages[lang] ? lang : "en";
  saveData();
  view = { screen: "role", session: null };
  render();
}

function t(key) {
  const lang = data.language || "en";
  return dict[lang][key] || dict.en[key] || key;
}

function render() {
  const lang = data.language || "en";
  document.documentElement.lang = lang;
  document.documentElement.dir = languages[lang].dir;
  markVisibleNotificationsRead();
  app.innerHTML = `<div class="app-shell">${renderScreen()}</div>`;
  decorateIcons();
  scheduleSplash();
}

function renderScreen() {
  if (view.screen === "splash") return renderSplash();
  if (view.screen === "language") return renderLanguage();
  if (view.screen === "owner-login") return renderOwnerLogin();
  if (view.screen === "customer-login") return renderCustomerLogin();
  if (view.screen === "nearest-laundry") return renderNearestLaundry();
  if (view.screen === "admin-login") return renderAdminLogin();
  if (view.screen === "owner-dashboard") return renderOwnerDashboard();
  if (view.screen === "customer-dashboard") return renderCustomerDashboard();
  if (view.screen === "admin-dashboard") return renderAdminDashboard();
  return renderRoleChoice();
}

function renderSplash() {
  return `
    <section class="splash-screen" aria-label="${escapeHtml(t("appName"))}">
      <div class="splash-brand">
        <img class="splash-logo" src="assets/icon.svg?v=64" alt="" />
        <h1>${escapeHtml(t("appName"))}</h1>
      </div>
    </section>
  `;
}

function scheduleSplash() {
  if (view.screen !== "splash") {
    clearTimeout(splashTimer);
    splashTimer = null;
    return;
  }

  if (splashTimer) return;
  splashTimer = setTimeout(() => {
    splashTimer = null;
    view = { screen: "language", session: null };
    render();
  }, 1400);
}

function renderTopbar({ title = t("appName"), subtitle = "", back = true, secretAdmin = false } = {}) {
  const brandAction = secretAdmin ? "secret-admin-tap" : "go-language";
  const brandLabel = secretAdmin ? t("appName") : t("chooseLanguage");

  return `
    <header class="topbar">
      <button class="brand brand-trigger brand-button" data-action="${brandAction}" type="button" aria-label="${escapeHtml(brandLabel)}">
        <img class="brand-mark" src="assets/icon.svg?v=64" alt="" />
        <div class="brand-text">
          ${subtitle ? `<div class="eyebrow">${escapeHtml(subtitle)}</div>` : ""}
          <h1 class="screen-title">${escapeHtml(title)}</h1>
        </div>
      </button>
      ${back ? `<button class="btn ghost icon-btn" data-action="back-role" title="${escapeHtml(t("back"))}" aria-label="${escapeHtml(t("back"))}">${icons.back}</button>` : ""}
    </header>
  `;
}

function renderLanguage() {
  return `
    <section class="screen">
      <div class="hero-band">
        <div class="brand brand-trigger" data-action="secret-admin-tap" role="button" tabindex="0" aria-label="${escapeHtml(t("appName"))}">
          <img class="brand-mark" src="assets/icon.svg?v=64" alt="" />
          <div class="brand-text">
            <h1 class="title">${escapeHtml(t("appName"))}</h1>
          </div>
        </div>
        <h2 class="screen-title">${escapeHtml(t("chooseLanguage"))}</h2>
      </div>
      <div class="language-grid">
        ${Object.entries(languages).map(([code, lang]) => `
          <button class="btn ${code === "en" ? "primary" : code === "ku" ? "blue" : "coral"}" data-action="language" data-lang="${code}">
            ${escapeHtml(lang.label)}
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function renderRoleChoice() {
  return `
    <section class="screen">
      ${renderTopbar({ back: false, secretAdmin: true })}
      <div class="role-grid">
        <button class="btn primary" data-action="screen" data-screen="owner-login">${icons.owner}${escapeHtml(t("owner"))}</button>
        <button class="btn blue" data-action="screen" data-screen="customer-login">${icons.customer}${escapeHtml(t("customer"))}</button>
        <button class="btn light" data-action="screen" data-screen="nearest-laundry">${icons.pin}${escapeHtml(t("findNearestLaundry"))}</button>
      </div>
      <div class="panel">
        <div class="panel-title">
          <strong>${escapeHtml(t("notificationPermission"))}</strong>
          <button class="btn light" data-action="enable-alerts">${icons.bell}${escapeHtml(t("enableAlerts"))}</button>
        </div>
      </div>
    </section>
  `;
}

function renderNearestLaundry() {
  return `
    <section class="screen">
      ${renderTopbar({ title: t("nearestLaundry") })}
      <section class="panel compact-panel">
        <p class="subtle no-margin">${escapeHtml(t("nearestIntro"))}</p>
        <button class="btn primary" data-action="find-nearest" ${nearestState.loading ? "disabled" : ""}>${icons.pin}${escapeHtml(nearestState.loading ? t("locationNeeded") : t("useMyLocation"))}</button>
        <a class="btn light" href="https://www.google.com/maps/search/laundry+near+me+Erbil" target="_blank" rel="noopener noreferrer">${icons.pin}Google Maps</a>
        ${nearestState.error ? `<div class="notice service-blocked"><strong>${escapeHtml(nearestState.error)}</strong></div>` : ""}
      </section>
      <section class="list" aria-label="${escapeHtml(t("nearestLaundry"))}">
        ${renderNearestResults()}
      </section>
    </section>
  `;
}

function renderNearestResults() {
  const results = nearestState.results.length ? nearestState.results : registeredLaundryMapResults();
  if (!nearestState.searched && !results.length) return "";
  if (!results.length) {
    return `
      <article class="card">
        <div class="card-head">
          <div>
            <h3 class="card-title">Google Maps</h3>
            <p class="meta">${escapeHtml(t("noNearbyLaundries"))}</p>
          </div>
        </div>
        <a class="btn primary" href="https://www.google.com/maps/search/laundry+near+me+Erbil" target="_blank" rel="noopener noreferrer">${icons.pin}Google Maps</a>
      </article>
    `;
  }

  return results.map((result) => {
    const mapUrl = googleMapsSearchUrl(result.laundry);
    const directionsUrl = googleMapsDirectionsUrl(result.laundry, nearestState.userLocation);
    const distanceLine = Number.isFinite(result.distanceKm)
      ? `<p class="meta">${formatDistance(result.distanceKm)} ${escapeHtml(t("distanceAway"))}</p>`
      : `<p class="meta">${escapeHtml(t("location"))}: Google Maps</p>`;

    return `
      <article class="card">
        <div class="card-head">
          <div>
            <h3 class="card-title">${escapeHtml(result.laundry.name)}</h3>
            ${distanceLine}
            ${result.laundry.ownerPhone ? `<p class="meta">${escapeHtml(t("ownerPhone"))}: <a href="${safePhoneHref(result.laundry.ownerPhone)}">${escapeHtml(result.laundry.ownerPhone)}</a></p>` : ""}
            ${result.laundry.location ? `<p class="meta">${escapeHtml(t("location"))}: ${renderLocationValue(result.laundry.location)}</p>` : `<p class="meta">${escapeHtml(t("laundryLocationMissing"))}</p>`}
          </div>
          <span class="badge done">${icons.pin}${escapeHtml(t("nearestLaundry"))}</span>
        </div>
        <div class="button-row">
          <a class="btn light" href="${escapeHtml(mapUrl)}" target="_blank" rel="noopener noreferrer">${icons.pin}Google Maps</a>
          <a class="btn primary" href="${escapeHtml(directionsUrl)}" target="_blank" rel="noopener noreferrer">${icons.truck}Directions</a>
        </div>
      </article>
    `;
  }).join("");
}

function renderOwnerLogin() {
  const savedLaundryId = preferenceValue("owner-login", "laundryId");
  const savedCode = preferenceValue("owner-login", "code");

  return `
    <section class="screen">
      ${renderTopbar({ title: t("ownerLogin") })}
      <form class="panel form-grid" data-form="owner-login">
        <label class="field">
          <span>${escapeHtml(t("laundryName"))}</span>
          <select class="select" name="laundryId" required>
            <option value="">${escapeHtml(t("selectLaundry"))}</option>
            ${data.laundries.map((laundry) => `<option value="${escapeHtml(laundry.id)}" ${savedLaundryId === laundry.id ? "selected" : ""}>${escapeHtml(laundry.name)}</option>`).join("")}
          </select>
        </label>
        <label class="field">
          <span>${escapeHtml(t("ownerCode"))}</span>
          <input class="input" name="code" inputmode="numeric" autocomplete="one-time-code" value="${escapeHtml(savedCode)}" required />
        </label>
        <button class="btn primary" type="submit">${icons.owner}${escapeHtml(t("signIn"))}</button>
      </form>
    </section>
  `;
}

function renderCustomerLogin() {
  const savedLaundryId = preferenceValue("customer-login", "laundryId");
  const savedCode = preferenceValue("customer-login", "code");

  return `
    <section class="screen">
      ${renderTopbar({ title: t("customerLogin") })}
      <form class="panel form-grid" data-form="customer-login">
        <label class="field">
          <span>${escapeHtml(t("selectLaundry"))}</span>
          <select class="select" name="laundryId" required>
            <option value="">${escapeHtml(t("selectLaundry"))}</option>
            ${data.laundries.map((laundry) => `<option value="${escapeHtml(laundry.id)}" ${savedLaundryId === laundry.id ? "selected" : ""}>${escapeHtml(laundry.name)}</option>`).join("")}
          </select>
        </label>
        <label class="field">
          <span>${escapeHtml(t("customerCode"))}</span>
          <input class="input" name="code" autocomplete="one-time-code" value="${escapeHtml(savedCode)}" required />
        </label>
        <button class="btn blue" type="submit">${icons.customer}${escapeHtml(t("signIn"))}</button>
      </form>
    </section>
  `;
}

function renderAdminLogin() {
  return `
    <section class="screen">
      ${renderTopbar({ title: t("adminLogin") })}
      <form class="panel form-grid" data-form="admin-login">
        <label class="field">
          <span>${escapeHtml(t("adminPin"))}</span>
          <input class="input" name="pin" inputmode="numeric" autocomplete="one-time-code" required />
        </label>
        <button class="btn coral" type="submit">${icons.admin}${escapeHtml(t("signIn"))}</button>
      </form>
    </section>
  `;
}

function renderOwnerDashboard() {
  const laundry = findLaundry(view.session?.laundryId);
  if (!laundry) return renderRoleChoice();

  const orders = data.orders
    .filter((order) => order.laundryId === laundry.id)
    .sort((a, b) => Number(a.done) - Number(b.done) || b.createdAt - a.createdAt);
  const active = orders.filter((order) => !order.done);
  const urgent = active.filter((order) => order.urgent || order.urgentByCustomer);
  const doneToday = orders.filter((order) => order.done && isToday(order.completedAt)).length;
  const notices = noticesForOwner(laundry.id);
  const serviceAccess = getLaundryServiceAccess(laundry);
  const blocked = serviceAccess.blocked;
  const disabledAttr = blocked ? "disabled" : "";
  const customerGroups = groupCustomersByLaundry(laundry.id, active);
  const selectedCustomer = selectedOwnerCustomerGroup(laundry.id, customerGroups);
  const suggestedCustomerCode = generateCustomerCode(laundry.id);

  return `
    <section class="screen">
      ${renderTopbar({ title: laundry.name, subtitle: t("owner"), back: false })}
      ${blocked ? renderServiceBlockedNotice(serviceAccess) : ""}
      <div class="stats">
        <div class="stat"><strong>${active.length}</strong><span>${escapeHtml(t("active"))}</span></div>
        <div class="stat"><strong>${urgent.length}</strong><span>${escapeHtml(t("urgent"))}</span></div>
        <div class="stat"><strong>${doneToday}</strong><span>${escapeHtml(t("readyToday"))}</span></div>
      </div>
      <section class="panel compact-panel">
        <div class="delivery-toggle-row">
          <span class="delivery-toggle-title">${icons.truck}${escapeHtml(t("enableDelivery"))}</span>
          <label class="switch">
            <input type="checkbox" data-action="toggle-delivery" ${laundry.deliveryEnabled ? "checked" : ""} ${disabledAttr} />
            <span class="switch-track" aria-hidden="true"></span>
          </label>
        </div>
        <span class="delivery-status ${laundry.deliveryEnabled ? "on" : "off"}">${escapeHtml(t(laundry.deliveryEnabled ? "deliveryEnabled" : "deliveryDisabled"))}</span>
      </section>
      ${renderNotices(notices)}
      <form class="panel form-grid" data-form="add-customer">
        <h2 class="panel-title">${icons.add}<span>${escapeHtml(t("addCustomer"))}</span></h2>
        <label class="field">
          <span>${escapeHtml(t("customerName"))} (${escapeHtml(t("optional"))})</span>
          <input class="input" name="customerName" autocomplete="name" ${disabledAttr} />
        </label>
        <label class="field">
          <span>${escapeHtml(t("customerPhone"))} (${escapeHtml(t("optional"))})</span>
          <input class="input" name="customerPhone" type="tel" inputmode="tel" autocomplete="tel" ${disabledAttr} />
        </label>
        <label class="field">
          <span>${escapeHtml(t("customerCode"))}</span>
          <input class="input" name="customerCode" value="${escapeHtml(suggestedCustomerCode)}" autocomplete="off" readonly required ${disabledAttr} />
        </label>
        <button class="btn primary" type="submit" ${disabledAttr}>${icons.add}${escapeHtml(t("add"))}</button>
      </form>
      <section class="panel form-grid" aria-label="${escapeHtml(t("orders"))}">
        <h2 class="panel-title">${escapeHtml(t("orders"))}</h2>
        ${customerGroups.length ? `
          <label class="field compact-search-field">
            <span>${escapeHtml(t("searchByCode"))}</span>
            <input class="input mini-input" data-action="search-owner-customer-code" autocomplete="off" placeholder="${escapeHtml(t("customerCode"))}" />
          </label>
          <label class="field">
            <span>${escapeHtml(t("existingCustomer"))}</span>
            <select class="select" data-action="select-owner-customer">
              ${customerGroups.map((group) => `
                <option value="${escapeHtml(group.customerCode)}" ${selectedCustomer?.customerCode === group.customerCode ? "selected" : ""}>${escapeHtml(group.name)} - ${escapeHtml(t("codeLabel"))}: ${group.customerCode}</option>
              `).join("")}
            </select>
          </label>
          ${selectedCustomer ? renderSelectedCustomerInfo(selectedCustomer) : ""}
          ${selectedCustomer ? renderOwnerCustomerGroup(selectedCustomer, blocked) : ""}
        ` : `<div class="empty">${escapeHtml(t("noOrders"))}</div>`}
      </section>
      ${selectedCustomer ? `
        <button class="btn danger" data-action="delete-customer" data-customer-code="${escapeHtml(selectedCustomer.customerCode)}">${escapeHtml(t("deleteCustomer"))}</button>
      ` : ""}
      <div class="footer-actions">
        <button class="btn ghost" data-action="logout">${escapeHtml(t("logout"))}</button>
      </div>
    </section>
  `;
}

function renderServiceBlockedNotice(serviceAccess) {
  return `
    <section class="notice service-blocked">
      <strong>${escapeHtml(t("accountExpiredTitle"))}</strong>
      <span>${escapeHtml(t("accountExpiredBody"))}</span>
      ${serviceAccess.activeTo ? `<span>${escapeHtml(t("activeTo"))}: ${escapeHtml(formatPlainDate(serviceAccess.activeTo))}</span>` : ""}
    </section>
  `;
}

function renderCustomerDashboard() {
  const session = view.session;
  const laundry = findLaundry(session?.laundryId);
  if (!session || !laundry) return renderRoleChoice();

  const orders = customerOrders(session.laundryId, session.customerCode);
  const customer = findCustomer(session.laundryId, session.customerCode);
  const latest = orders[0];
  const active = orders.find((order) => !order.done);
  const name = latest?.customerName || customer?.name || `${t("codeLabel")} ${session.customerCode}`;
  const customerTitle = `${name} - ${t("codeLabel")}: ${session.customerCode}`;
  const notices = noticesForCustomer(session.laundryId, session.customerCode);

  return `
    <section class="screen">
      ${renderTopbar({ title: `${t("welcome")}, ${customerTitle}`, subtitle: laundry.name, back: false })}
      ${renderLaundryContact(laundry)}
      ${latest ? renderCustomerStatus(latest, active, laundry) : `<div class="empty">${escapeHtml(t("noOrders"))}</div>`}
      ${renderNotices(notices)}
      <section class="list" aria-label="${escapeHtml(t("history"))}">
        <h2 class="panel-title">${escapeHtml(t("history"))}</h2>
        ${orders.length ? orders.map((order) => renderHistoryCard(order, findLaundry(order.laundryId))).join("") : `<div class="empty">${escapeHtml(t("noOrders"))}</div>`}
      </section>
      <div class="footer-actions">
        <button class="btn ghost" data-action="logout">${escapeHtml(t("logout"))}</button>
      </div>
    </section>
  `;
}

function renderAdminDashboard() {
  const trialStart = todayDateString();
  const trialEnd = addMonthsDateString(trialStart, 3);
  const savedOwnerPhone = preferenceValue("save-laundry", "ownerPhone");
  const savedLocation = preferenceValue("save-laundry", "location");
  const savedServices = preferenceValue("save-laundry", "services", localizedDefaultLaundryServices());

  return `
    <section class="screen">
      ${renderTopbar({ title: t("admin"), subtitle: t("appName"), back: false })}
      <form class="panel form-grid" data-form="save-laundry">
        <h2 class="panel-title">${icons.admin}<span>${escapeHtml(t("registerLaundry"))}</span></h2>
        <label class="field">
          <span>${escapeHtml(t("laundryName"))}</span>
          <input class="input" name="name" autocomplete="organization" required />
        </label>
        <label class="field">
          <span>${escapeHtml(t("ownerCode"))}</span>
          <input id="adminLaundryCode" class="input" name="code" inputmode="numeric" required />
        </label>
        <label class="field">
          <span>${escapeHtml(t("ownerPhone"))} (${escapeHtml(t("optional"))})</span>
          <input class="input" name="ownerPhone" type="tel" inputmode="tel" autocomplete="tel" value="${escapeHtml(savedOwnerPhone)}" />
        </label>
        <label class="field">
          <span>${escapeHtml(t("location"))} (${escapeHtml(t("optional"))})</span>
          <input class="input" name="location" autocomplete="street-address" value="${escapeHtml(savedLocation)}" />
          <small class="field-hint">${escapeHtml(t("locationHint"))}</small>
        </label>
        <label class="field">
          <span>${escapeHtml(t("services"))}</span>
          <input class="input" name="services" value="${escapeHtml(savedServices)}" />
          <small class="field-hint">${escapeHtml(t("servicesHint"))}</small>
        </label>
        <div class="button-row">
          <label class="field">
            <span>${escapeHtml(t("activeFrom"))}</span>
            <input class="input" name="activeFrom" type="date" value="${escapeHtml(trialStart)}" />
          </label>
          <label class="field">
            <span>${escapeHtml(t("activeTo"))}</span>
            <input class="input" name="activeTo" type="date" value="${escapeHtml(trialEnd)}" />
          </label>
        </div>
        <label class="check-field">
          <input name="serviceDisabled" type="checkbox" />
          <span>${escapeHtml(t("serviceDisabled"))}</span>
        </label>
        <div class="button-row">
          <button class="btn light" type="button" data-action="generate-code">${icons.code}${escapeHtml(t("generateCode"))}</button>
          <button class="btn coral" type="submit">${icons.done}${escapeHtml(t("saveLaundry"))}</button>
        </div>
      </form>
      <section class="list" aria-label="${escapeHtml(t("registeredLaundries"))}">
        <h2 class="panel-title">${escapeHtml(t("registeredLaundries"))}</h2>
        ${data.laundries.length ? data.laundries.map(renderLaundryAdminCard).join("") : `<div class="empty">${escapeHtml(t("noLaundries"))}</div>`}
      </section>
      <div class="footer-actions">
        <button class="btn ghost" data-action="logout">${escapeHtml(t("logout"))}</button>
      </div>
    </section>
  `;
}

function renderOwnerCustomerGroup(group, blocked = false) {
  const latest = group.orders[0];
  const visibleOrders = group.orders.filter((order) => !order.done);
  const activeCount = group.orders.filter((order) => !order.done).length;
  const urgentCount = group.orders.filter((order) => !order.done && (order.urgent || order.urgentByCustomer)).length;
  const disabledAttr = blocked ? "disabled" : "";
  const phoneLine = group.phone ? `<p class="meta">${escapeHtml(t("customerPhone"))}: ${escapeHtml(group.phone)}</p>` : "";
  const submissions = visibleOrders.length
    ? visibleOrders.map((order) => renderOwnerOrderCard(order, blocked)).join("")
    : `<div class="empty">${escapeHtml(t("noOrders"))}</div>`;

  return `
    <article class="card ${urgentCount ? "urgent" : activeCount ? "" : "done"}">
      <div class="card-head">
        <div>
          <h3 class="card-title">${escapeHtml(group.name)}</h3>
          <p class="meta">${escapeHtml(t("codeLabel"))}: ${group.customerCode} · ${group.orders.length} ${escapeHtml(t("submissions"))}</p>
          ${phoneLine}
        </div>
        <div class="badge-row">
          ${activeCount ? `<span class="badge info">${activeCount} ${escapeHtml(t("active"))}</span>` : `<span class="badge done">${escapeHtml(t("completed"))}</span>`}
          ${urgentCount ? `<span class="badge urgent">${urgentCount} ${escapeHtml(t("urgent"))}</span>` : ""}
        </div>
      </div>
      <div class="submission-list">
        ${submissions}
      </div>
      <form class="form-grid service-form" data-form="add-submission">
        <input type="hidden" name="customerCode" value="${escapeHtml(group.customerCode)}" />
        <input type="hidden" name="customerName" value="${escapeHtml(latest?.customerName || group.name || "")}" />
        <input type="hidden" name="customerPhone" value="${escapeHtml(latest?.customerPhone || group.phone || "")}" />
        <h4 class="mini-title">${escapeHtml(t("newSubmission"))}</h4>
        <label class="field">
          <span>${escapeHtml(t("orderName"))} (${escapeHtml(t("optional"))})</span>
          <input class="input" name="orderName" autocomplete="off" ${disabledAttr} />
        </label>
        ${renderServiceChoiceTable(disabledAttr)}
        <label class="check-field">
          <input name="urgent" type="checkbox" ${disabledAttr} />
          <span>${escapeHtml(t("markUrgent"))}</span>
        </label>
        <button class="btn light" type="submit" ${disabledAttr}>${icons.add}${escapeHtml(t("add"))}</button>
      </form>
    </article>
  `;
}

function renderUrgentCustomers(groups, blocked = false) {
  return `
    <section class="panel form-grid" aria-label="${escapeHtml(t("urgentCustomers"))}">
      <h2 class="panel-title">${icons.alert}<span>${escapeHtml(t("urgentCustomers"))}</span></h2>
      ${groups.length ? groups.map((group) => renderUrgentCustomerCard(group, blocked)).join("") : `<div class="empty">${escapeHtml(t("noOrders"))}</div>`}
    </section>
  `;
}

function renderUrgentCustomerCard(group, blocked = false) {
  const urgentOrders = group.orders.filter((order) => !order.done && (order.urgent || order.urgentByCustomer));
  const phoneLine = group.phone ? `<p class="meta">${escapeHtml(t("customerPhone"))}: ${escapeHtml(group.phone)}</p>` : "";

  return `
    <article class="card urgent">
      <div class="card-head">
        <div>
          <h3 class="card-title">${escapeHtml(group.name)}</h3>
          <p class="meta">${escapeHtml(t("codeLabel"))}: ${group.customerCode} آ· ${urgentOrders.length} ${escapeHtml(t("urgent"))}</p>
          ${phoneLine}
        </div>
        <span class="badge urgent">${escapeHtml(t("urgent"))}</span>
      </div>
      <div class="submission-list">
        ${urgentOrders.map((order) => renderOwnerOrderCard(order, blocked)).join("")}
      </div>
    </article>
  `;
}

function selectedOwnerCustomerGroup(laundryId, groups) {
  if (!groups.length) return null;

  const selectedCode = normalizeCustomerCode(view.selectedCustomerCode);
  const selected = groups.find((group) => group.customerCode === selectedCode);
  if (selected && selected.orders.some((order) => !order.done)) return selected;

  const activeGroup = groups.find((group) => group.orders.some((order) => !order.done));
  const nextGroup = activeGroup || selected || groups[0];
  view.selectedCustomerCode = nextGroup.customerCode;
  return nextGroup;
}

function selectOwnerCustomer(customerCode) {
  view = {
    ...view,
    selectedCustomerCode: normalizeCustomerCode(customerCode)
  };
  render();
}

function searchOwnerCustomerByCode(value) {
  const code = normalizeCustomerCode(value);
  if (!isValidCustomerCode(code)) return;

  const laundryId = view.session?.laundryId;
  const exists = data.customers.some((customer) =>
    customer.laundryId === laundryId && customer.code === code
  ) || data.orders.some((order) =>
    order.laundryId === laundryId && order.customerCode === code
  );

  if (exists) selectOwnerCustomer(code);
}

function renderSelectedCustomerInfo(group) {
  return `
    <div class="notice customer-info-panel">
      <strong>${escapeHtml(group.name)}</strong>
      <span>${escapeHtml(t("codeLabel"))}: ${escapeHtml(group.customerCode)} · ${group.orders.length} ${escapeHtml(t("submissions"))}</span>
      ${group.phone ? `<span>${escapeHtml(t("customerPhone"))}: ${escapeHtml(group.phone)}</span>` : ""}
    </div>
  `;
}

function renderOwnerOrderCard(order, blocked = false) {
  const name = order.customerName || `${t("customer")} ${order.customerCode}`;
  const statusClass = order.done ? "done" : order.urgent || order.urgentByCustomer ? "urgent" : "";
  const deliveryLocationLine = renderDeliveryLocationLine(order);
  const orderNameLine = order.orderName ? `<p class="contact-line">${escapeHtml(t("orderName"))}: ${escapeHtml(order.orderName)}</p>` : "";
  return `
    <article class="submission-item ${statusClass}">
      <div class="card-head">
        <div>
          <h4 class="card-title">${escapeHtml(formatDate(order.createdAt))}</h4>
          ${orderNameLine}
          ${deliveryLocationLine}
          ${renderOrderServices(order)}
          <p class="meta">${escapeHtml(t("codeLabel"))}: ${order.customerCode} · ${order.parts} ${escapeHtml(t("partsLabel"))} · ${formatDate(order.createdAt)}</p>
        </div>
        <div class="badge-row">
          ${order.done ? `<span class="badge done">${escapeHtml(t("completed"))}</span>` : ""}
          ${order.urgent || order.urgentByCustomer ? `<span class="badge urgent">${escapeHtml(t("urgent"))}</span>` : ""}
          ${order.deliveryRequested ? `<span class="badge info">${icons.truck}${escapeHtml(t("delivery"))}</span>` : ""}
        </div>
      </div>
      <div class="button-row">
        <button class="btn primary" data-action="complete" data-order-id="${escapeHtml(order.id)}" ${order.done || blocked ? "disabled" : ""}>${icons.done}${escapeHtml(t("complete"))}</button>
      </div>
    </article>
  `;
}

function serviceColumns() {
  return [
    { key: "clothes", label: t("clothes") },
    { key: "blanket", label: t("blanket") },
    { key: "curtain", label: t("curtain") }
  ];
}

function serviceRows() {
  return [
    { key: "washing", label: t("washing") },
    { key: "washingDrying", label: t("washingDrying") },
    { key: "ironing", label: t("ironing") }
  ];
}

function renderServiceChoiceTable(disabledAttr = "") {
  const columns = serviceColumns();
  const rows = serviceRows();

  return `
    <section class="service-choice">
      <h4 class="mini-title">${escapeHtml(t("serviceChoices"))}</h4>
      <div class="service-choice-table" role="table" aria-label="${escapeHtml(t("serviceChoices"))}">
        <div class="service-choice-row service-choice-head" role="row">
          <span role="columnheader"></span>
          ${columns.map((column) => `<span role="columnheader">${escapeHtml(column.label)}</span>`).join("")}
        </div>
        ${rows.map((row) => `
          <div class="service-choice-row" role="row">
            <span role="rowheader">${escapeHtml(row.label)}</span>
            ${columns.map((column) => `
              <label class="service-check" title="${escapeHtml(`${row.label} - ${column.label}`)}">
                <input type="checkbox" name="service_${row.key}_${column.key}" ${disabledAttr} />
                <span></span>
              </label>
            `).join("")}
          </div>
        `).join("")}
      </div>
      <div class="service-amount-grid">
        <span aria-hidden="true"></span>
        ${columns.map((column) => `
          <label class="field service-amount-field">
            <span>${escapeHtml(column.label)}</span>
            <input class="input mini-input" name="ironQty_${column.key}" inputmode="numeric" pattern="[0-9٠-٩۰-۹]*" ${disabledAttr} />
          </label>
        `).join("")}
      </div>
      <label class="field service-total-field">
        <span>${escapeHtml(t("clothesParts"))}</span>
        <input class="input mini-input" name="parts" data-role="parts-total" inputmode="numeric" pattern="[0-9٠-٩۰-۹]*" readonly required ${disabledAttr} />
      </label>
    </section>
  `;
}

function renderOrderServices(order) {
  const selections = Array.isArray(order.serviceSelections) ? order.serviceSelections : [];
  const quantities = order.ironingAmounts || {};
  const quantityEntries = serviceColumns()
    .map((column) => ({ column, amount: localizedNumber(quantities[column.key]) }))
    .filter((item) => Number.isFinite(item.amount) && item.amount > 0);

  if (!selections.length && !quantityEntries.length) return "";

  const isSelected = (rowKey, columnKey) =>
    selections.some((selection) => selection.row === rowKey && selection.column === columnKey);

  return `
    <div class="service-summary service-summary-table">
      <strong>${escapeHtml(t("serviceChoices"))}</strong>
      <div class="service-choice-table service-readonly-table" role="table" aria-label="${escapeHtml(t("serviceChoices"))}">
        <div class="service-choice-row service-choice-head" role="row">
          <span role="columnheader"></span>
          ${serviceColumns().map((column) => `<span role="columnheader">${escapeHtml(column.label)}</span>`).join("")}
        </div>
        ${serviceRows().map((row) => `
          <div class="service-choice-row" role="row">
            <span role="rowheader">${escapeHtml(row.label)}</span>
            ${serviceColumns().map((column) => `
              <span class="service-readonly-cell">
                <input type="checkbox" ${isSelected(row.key, column.key) ? "checked" : ""} disabled />
              </span>
            `).join("")}
          </div>
        `).join("")}
      </div>
      ${quantityEntries.length ? `
        <div class="service-amount-grid service-readonly-amounts">
          <span aria-hidden="true"></span>
          ${serviceColumns().map((column) => {
            const amount = localizedNumber(quantities[column.key]);
            return `
              <label class="field service-amount-field">
                <span>${escapeHtml(column.label)}</span>
                <input class="input mini-input" value="${Number.isFinite(amount) && amount > 0 ? escapeHtml(amount) : ""}" readonly />
              </label>
            `;
          }).join("")}
        </div>
      ` : ""}
    </div>
  `;
}

function serviceLabel(key) {
  const found = [...serviceRows(), ...serviceColumns()].find((item) => item.key === key);
  return found?.label || key;
}

function collectServiceDetails(formData) {
  const selections = [];
  const ironingAmounts = {};

  serviceRows().forEach((row) => {
    serviceColumns().forEach((column) => {
      if (formData.get(`service_${row.key}_${column.key}`) === "on") {
        selections.push({ row: row.key, column: column.key });
      }
    });
  });

  serviceColumns().forEach((column) => {
    const amount = localizedNumber(formData.get(`ironQty_${column.key}`));
    if (Number.isFinite(amount) && amount > 0) {
      ironingAmounts[column.key] = amount;
    }
  });

  return { selections, ironingAmounts };
}

function updatePartsTotal(form) {
  if (!form) return;

  const totalInput = form.querySelector('[data-role="parts-total"]');
  if (!totalInput) return;

  const total = serviceColumns().reduce((sum, column) => {
    const value = localizedNumber(form.elements[`ironQty_${column.key}`]?.value);
    return sum + (Number.isFinite(value) && value > 0 ? value : 0);
  }, 0);

  totalInput.value = total > 0 ? String(total) : "";
}

function renderCustomerStatus(latest, active, laundry) {
  if (latest.done && !active) {
    return `
      <div class="status-block ready">
        <strong>${icons.done}${escapeHtml(t("ready"))}</strong>
        <span>${escapeHtml(formatDate(latest.completedAt || latest.createdAt))}</span>
      </div>
    `;
  }

  const target = active || latest;
  const urgentSent = target.urgentByCustomer;
  const urgentReceipt = urgentSent ? renderUrgentReadReceipt(target) : "";
  const deliveryAvailable = laundry?.deliveryEnabled && !getLaundryServiceAccess(laundry).blocked;
  const deliveryButton = deliveryAvailable && !target.done ? `
      ${target.deliveryRequested ? "" : `
        <label class="field compact-field">
          <span>${escapeHtml(t("deliveryLocation"))}</span>
          <input class="input" data-field="delivery-location" autocomplete="street-address" placeholder="${escapeHtml(t("enterDeliveryLocation"))}" required />
        </label>
        <button class="btn light" type="button" data-action="use-current-location">${icons.pin}${escapeHtml(t("useCurrentLocation"))}</button>
      `}
      <button class="btn blue" data-action="customer-delivery" ${target.deliveryRequested ? "disabled" : ""}>${icons.truck}${escapeHtml(target.deliveryRequested ? t("deliveryRequested") : t("requestDelivery"))}</button>
      ${target.deliveryRequested && target.deliveryLocation ? renderDeliveryLocationLine(target, "span") : ""}
    ` : "";

  return `
    <div class="status-block waiting">
      <strong>${escapeHtml(t("waiting"))}</strong>
      ${target.orderName ? `<span>${escapeHtml(t("orderName"))}: ${escapeHtml(target.orderName)}</span>` : ""}
      ${renderOrderServices(target)}
      ${renderOrderPiecesDate(target)}
      <button class="btn coral" data-action="customer-urgent" ${urgentSent || target.done ? "disabled" : ""}>${icons.alert}${escapeHtml(urgentSent ? t("urgentSent") : t("requestUrgent"))}</button>
      ${deliveryButton}
      ${urgentReceipt}
    </div>
  `;
}

function renderUrgentReadReceipt(order) {
  const notice = urgentNoticeForOrder(order);
  if (!notice?.read) {
    return `<span class="receipt pending">${escapeHtml(t("waitingForOwnerRead"))}</span>`;
  }

  return `<span class="receipt seen">${icons.done}${escapeHtml(t("seenByOwner"))} · ${escapeHtml(formatDate(notice.readAt || notice.createdAt))}</span>`;
}

function renderDeliveryLocationLine(order, tagName = "p") {
  if (!order.deliveryRequested || !order.deliveryLocation) return "";

  const value = String(order.deliveryLocation);
  const safeValue = escapeHtml(value);
  const isLink = /^https?:\/\//i.test(value);
  const content = isLink
    ? `<a href="${safeValue}" target="_blank" rel="noopener">${safeValue}</a>`
    : safeValue;

  return `<${tagName} class="meta delivery-location-line">${icons.truck}${escapeHtml(t("deliveryLocation"))}: ${content}</${tagName}>`;
}

function renderOrderPiecesDate(order) {
  return `
    <span class="order-pieces-date">
      <span class="piece-count"><span dir="ltr">${escapeHtml(String(order.parts))}</span> ${escapeHtml(t("partsLabel"))}</span>
      <span class="date-text" dir="ltr">${escapeHtml(formatDate(order.createdAt))}</span>
    </span>
  `;
}


function renderHistoryCard(order, laundry) {
  return `
    <details class="card history-order ${order.done ? "done" : ""}">
      <summary class="history-summary">
        <span class="history-summary-title">${escapeHtml(laundry?.name || t("laundryName"))}</span>
        ${renderOrderPiecesDate(order)}
      </summary>
      <div class="card-head history-details">
        <div>
          <h3 class="card-title">${escapeHtml(laundry?.name || t("laundryName"))}</h3>
          ${order.orderName ? `<p class="contact-line">${escapeHtml(t("orderName"))}: ${escapeHtml(order.orderName)}</p>` : ""}
          ${renderOrderServices(order)}
          ${renderOrderPiecesDate(order)}
        </div>
        <div class="badge-row">
          <span class="badge ${order.done ? "done" : "info"}">${escapeHtml(order.done ? t("ready") : t("waiting"))}</span>
          ${order.urgent || order.urgentByCustomer ? `<span class="badge urgent">${escapeHtml(t("urgent"))}</span>` : ""}
          ${order.deliveryRequested ? `<span class="badge info">${icons.truck}${escapeHtml(t("delivery"))}</span>` : ""}
        </div>
      </div>
      ${renderDeliveryLocationLine(order)}
    </details>
  `;
}

function renderLaundryAdminCard(laundry) {
  const active = data.orders.filter((order) => order.laundryId === laundry.id && !order.done).length;
  const serviceAccess = getLaundryServiceAccess(laundry);
  const statusText = serviceAccess.blocked ? t("serviceStopped") : t("serviceActive");
  return `
    <article class="card">
      <div class="card-head">
        <div>
          <h3 class="card-title">${escapeHtml(laundry.name)}</h3>
          <p class="meta">${escapeHtml(t("ownerCode"))}: ${escapeHtml(laundry.code)}</p>
          ${laundry.ownerPhone ? `<p class="meta">${escapeHtml(t("ownerPhone"))}: ${escapeHtml(laundry.ownerPhone)}</p>` : ""}
          ${laundry.location ? `<p class="meta">${escapeHtml(t("location"))}: ${escapeHtml(laundry.location)}</p>` : ""}
          ${laundry.services ? `<p class="meta">${escapeHtml(t("services"))}: ${escapeHtml(laundry.services)}</p>` : ""}
          <p class="meta">${escapeHtml(t("activeFrom"))}: ${escapeHtml(formatPlainDate(laundry.activeFrom) || "-")} · ${escapeHtml(t("activeTo"))}: ${escapeHtml(formatPlainDate(laundry.activeTo) || "-")}</p>
        </div>
        <div class="badge-row">
          <span class="badge ${serviceAccess.blocked ? "urgent" : "done"}">${escapeHtml(statusText)}</span>
          <span class="badge info">${active} ${escapeHtml(t("active"))}</span>
        </div>
      </div>
      <form class="form-grid service-form" data-form="update-laundry-service">
        <input type="hidden" name="laundryId" value="${escapeHtml(laundry.id)}" />
        <label class="check-field">
          <input name="serviceDisabled" type="checkbox" ${laundry.serviceDisabled ? "checked" : ""} />
          <span>${escapeHtml(t("serviceDisabled"))}</span>
        </label>
        <div class="button-row">
          <label class="field">
            <span>${escapeHtml(t("activeFrom"))}</span>
            <input class="input" name="activeFrom" type="date" value="${escapeHtml(laundry.activeFrom || "")}" />
          </label>
          <label class="field">
            <span>${escapeHtml(t("activeTo"))}</span>
            <input class="input" name="activeTo" type="date" value="${escapeHtml(laundry.activeTo || "")}" />
          </label>
        </div>
        <button class="btn light" type="submit">${icons.done}${escapeHtml(t("saveService"))}</button>
      </form>
      <button class="btn danger" data-action="delete-laundry" data-laundry-id="${escapeHtml(laundry.id)}">${escapeHtml(t("deleteLaundry"))}</button>
    </article>
  `;
}

function renderNotices(notices) {
  return `
    <section class="panel">
      <div class="panel-title">
        <strong>${icons.bell}${escapeHtml(t("notifications"))}</strong>
        ${notices.some((notice) => !notice.read) ? `<button class="btn light" data-action="mark-read">${escapeHtml(t("markRead"))}</button>` : ""}
      </div>
      <div class="list">
        ${notices.length ? notices.map((notice) => `
          <div class="notice ${notice.read ? "" : "unread"}">
            <strong>${escapeHtml(notice.title)}</strong>
            <span>${escapeHtml(displayNoticeBody(notice))} · ${escapeHtml(formatDate(notice.createdAt))}</span>
            ${renderNoticeReceipt(notice)}
          </div>
        `).join("") : `<div class="empty">${escapeHtml(t("noNotifications"))}</div>`}
      </div>
    </section>
  `;
}

function displayNoticeBody(notice) {
  if (notice.audience !== "owner") return notice.body;

  const order = notice.orderId
    ? data.orders.find((item) => item.id === notice.orderId)
    : customerOrders(notice.laundryId, notice.customerCode)[0];
  if (!order) return notice.body;

  const name = order.customerName || `${t("customer")} ${order.customerCode}`;
  const customerLine = `${name} · ${t("codeLabel")}: ${order.customerCode}`;
  if (notice.body.includes(`: ${order.customerCode}`) || notice.body.includes(`${order.customerCode} ·`)) {
    return notice.body;
  }

  return `${customerLine} · ${notice.body}`;
}

function renderNoticeReceipt(notice) {
  if (notice.audience !== "owner") return "";

  if (!notice.read) {
    return `<span class="receipt pending">${escapeHtml(t("notSeenYet"))}</span>`;
  }

  return `<span class="receipt seen">${icons.done}${escapeHtml(t("seenByOwner"))} · ${escapeHtml(formatDate(notice.readAt || notice.createdAt))}</span>`;
}

function ownerLogin(formData) {
  const laundryId = String(formData.get("laundryId") || "");
  const code = normalize(formData.get("code"));
  const laundry = findLaundry(laundryId);

  if (!laundry || normalize(laundry.code) !== code) {
    toast(t("invalidLogin"), "error");
    return;
  }

  const session = { role: "owner", laundryId: laundry.id };
  rememberSession(session);
  view = { screen: "owner-dashboard", session };
  render();
}

function customerLogin(formData) {
  const laundryId = String(formData.get("laundryId") || "");
  const customerCode = normalizeCustomerCode(formData.get("code"));

  if (!isValidCustomerCode(customerCode)) {
    toast(t("invalidCode"), "error");
    return;
  }

  const orders = customerOrders(laundryId, customerCode);
  const customer = findCustomer(laundryId, customerCode);
  if (!orders.length && !customer) {
    toast(t("noOrders"), "error");
    return;
  }

  const session = { role: "customer", laundryId, customerCode };
  rememberSession(session);
  view = { screen: "customer-dashboard", session };
  render();
}

function adminLogin(formData) {
  if (normalizeDigits(formData.get("pin")).trim() !== ADMIN_PIN) {
    toast(t("invalidAdmin"), "error");
    return;
  }

  const session = { role: "admin" };
  if (REMEMBER_ADMIN_SESSION) rememberSession(session);
  view = { screen: "admin-dashboard", session };
  render();
}

function addCustomer(formData, form) {
  const formType = form?.dataset?.form || "";
  const laundryId = view.session?.laundryId;
  let customerCode = normalizeCustomerCode(formData.get("customerCode"));
  const partsValue = String(formData.get("parts") || "").trim();
  const hasParts = partsValue !== "";
  const parts = localizedNumber(partsValue);
  const customerName = String(formData.get("customerName") || "").trim();
  const customerPhone = String(formData.get("customerPhone") || "").trim();
  const orderName = String(formData.get("orderName") || "").trim();
  const serviceDetails = collectServiceDetails(formData);
  const urgent = formData.get("urgent") === "on";
  const laundry = findLaundry(laundryId);
  const serviceAccess = getLaundryServiceAccess(laundry);

  if (serviceAccess.blocked) {
    toast(t("accountExpiredTitle"), "error");
    return;
  }

  if (!customerCode && formType === "add-customer") {
    customerCode = generateCustomerCode(laundryId);
  }

  if (!laundryId || !isValidCustomerCode(customerCode)) {
    toast(t("invalidCode"), "error");
    return;
  }

  if (hasParts && (!Number.isInteger(parts) || parts < 1)) {
    toast(t("clothesParts"), "error");
    return;
  }

  const existingCustomer = findCustomer(laundryId, customerCode);
  const isNewCustomerForm = formType === "add-customer";
  if (isNewCustomerForm && existingCustomer) {
    toast(t("duplicateCustomerCode"), "error");
    return;
  }

  const savedCustomer = upsertCustomer({
    laundryId,
    code: customerCode,
    name: customerName || existingCustomerName(laundryId, customerCode),
    phone: customerPhone || existingCustomerPhone(laundryId, customerCode)
  });

  if (!hasParts) {
    view.selectedCustomerCode = customerCode;
    saveData();
    form.reset();
    toast(t("customerRegistered"));
    render();
    return;
  }

  const order = {
    id: crypto.randomUUID(),
    laundryId,
    customerName: savedCustomer.name,
    orderName,
    customerPhone: savedCustomer.phone,
    customerCode,
    parts,
    serviceSelections: serviceDetails.selections,
    ironingAmounts: serviceDetails.ironingAmounts,
    urgent,
    urgentByCustomer: false,
    deliveryRequested: false,
    deliveryRequestedAt: null,
    deliveryLocation: "",
    done: false,
    createdAt: Date.now(),
    completedAt: null,
    urgentAt: urgent ? Date.now() : null
  };

  data.orders.push(order);
  view.selectedCustomerCode = customerCode;

  if (urgent) {
    addNotice({
      audience: "owner",
      laundryId,
      customerCode,
      orderId: order.id,
      title: t("urgentNoticeTitle"),
      body: t("ownerUrgentBody")
    });
  }

  saveData();
  form.reset();
  toast(t("added"));
  render();
}

function saveLaundry(formData, form) {
  const name = String(formData.get("name") || "").trim();
  const code = normalizeDigits(formData.get("code")).trim();
  const ownerPhone = String(formData.get("ownerPhone") || "").trim();
  const location = String(formData.get("location") || "").trim();
  const services = String(formData.get("services") || DEFAULT_LAUNDRY_SERVICES).trim();
  let activeFrom = String(formData.get("activeFrom") || "");
  let activeTo = String(formData.get("activeTo") || "");
  const serviceDisabled = formData.get("serviceDisabled") === "on";

  if (!name || !code) return;

  const existing = data.laundries.find((laundry) => normalize(laundry.name) === normalize(name));
  if (!existing) {
    activeFrom = activeFrom || todayDateString();
    activeTo = activeTo || addMonthsDateString(activeFrom, 3);
  }

  if (existing) {
    existing.name = name;
    existing.code = code;
    existing.ownerPhone = ownerPhone;
    existing.location = location;
    existing.services = services || DEFAULT_LAUNDRY_SERVICES;
    existing.serviceDisabled = serviceDisabled;
    existing.activeFrom = activeFrom;
    existing.activeTo = activeTo;
  } else {
    data.laundries.push({
      id: crypto.randomUUID(),
      name,
      code,
      ownerPhone,
      location,
      services: services || DEFAULT_LAUNDRY_SERVICES,
      serviceDisabled,
      deliveryEnabled: false,
      activeFrom,
      activeTo,
      createdAt: Date.now()
    });
  }

  saveData();
  form.reset();
  toast(t("saved"));
  render();
}

function updateLaundryService(formData) {
  const laundry = findLaundry(String(formData.get("laundryId") || ""));
  if (!laundry) return;

  laundry.serviceDisabled = formData.get("serviceDisabled") === "on";
  laundry.activeFrom = String(formData.get("activeFrom") || "");
  laundry.activeTo = String(formData.get("activeTo") || "");

  saveData();
  toast(t("saved"));
  render();
}

function deleteCustomer(customerCode) {
  const laundryId = view.session?.laundryId;
  const code = normalizeCustomerCode(customerCode);
  if (!laundryId || !isValidCustomerCode(code)) return;
  if (!window.confirm(t("confirmDeleteCustomer"))) return;

  data.customers = data.customers.filter((customer) =>
    !(customer.laundryId === laundryId && customer.code === code)
  );
  data.orders = data.orders.filter((order) =>
    !(order.laundryId === laundryId && order.customerCode === code)
  );
  data.notices = data.notices.filter((notice) =>
    !(notice.laundryId === laundryId && notice.customerCode === code)
  );

  if (view.selectedCustomerCode === code) {
    view.selectedCustomerCode = null;
  }

  saveData();
  toast(t("customerDeleted"));
  render();
}

function deleteLaundry(laundryId) {
  const id = String(laundryId || "");
  if (!id || !findLaundry(id)) return;
  if (!window.confirm(t("confirmDeleteLaundry"))) return;

  data.laundries = data.laundries.filter((laundry) => laundry.id !== id);
  data.customers = data.customers.filter((customer) => customer.laundryId !== id);
  data.orders = data.orders.filter((order) => order.laundryId !== id);
  data.notices = data.notices.filter((notice) => notice.laundryId !== id);

  if (view.session?.laundryId === id || data.lastSession?.laundryId === id) {
    data.lastSession = null;
    view = { screen: "admin-dashboard", session: { role: "admin" } };
  }

  saveData();
  toast(t("laundryDeleted"));
  render();
}

function updateDelivery(enabled) {
  const laundry = findLaundry(view.session?.laundryId);
  if (!laundry) return;

  const serviceAccess = getLaundryServiceAccess(laundry);
  if (serviceAccess.blocked) {
    toast(t("accountExpiredTitle"), "error");
    return;
  }

  laundry.deliveryEnabled = Boolean(enabled);
  saveData();
  render();
}

function completeOrder(orderId) {
  const order = data.orders.find((item) => item.id === orderId);
  if (!order || order.done) return;
  const laundry = findLaundry(order.laundryId);
  const serviceAccess = getLaundryServiceAccess(laundry);

  if (serviceAccess.blocked) {
    toast(t("accountExpiredTitle"), "error");
    return;
  }

  order.done = true;
  order.completedAt = Date.now();
  addNotice({
    audience: "customer",
    laundryId: order.laundryId,
    customerCode: order.customerCode,
    title: t("doneNoticeTitle"),
    body: t("doneNoticeBody")
  });

  saveData();
  notifyDevice(t("doneNoticeTitle"), t("doneNoticeBody"));
  toast(t("completedToast"));
  render();
}

function markOrderUrgent(orderId, source) {
  const order = data.orders.find((item) => item.id === orderId);
  if (!order || order.done) return;

  if (source === "customer") {
    order.urgentByCustomer = true;
  } else {
    order.urgent = true;
  }
  order.urgentAt = Date.now();

  addNotice({
    audience: "owner",
    laundryId: order.laundryId,
    customerCode: order.customerCode,
    orderId: order.id,
    title: t("urgentNoticeTitle"),
    body: t("urgentNoticeBody")
  });

  saveData();
  toast(t("urgentSent"));
  render();
}

function requestUrgentFromCustomer() {
  const session = view.session;
  if (!session) return;

  const active = customerOrders(session.laundryId, session.customerCode).find((order) => !order.done);
  if (!active) {
    toast(t("noOrders"), "error");
    return;
  }

  markOrderUrgent(active.id, "customer");
}

function requestDeliveryFromCustomer() {
  const session = view.session;
  if (!session) return;

  const laundry = findLaundry(session.laundryId);
  if (!laundry?.deliveryEnabled || getLaundryServiceAccess(laundry).blocked) {
    toast(t("deliveryUnavailable"), "error");
    return;
  }

  const active = customerOrders(session.laundryId, session.customerCode).find((order) => !order.done);
  if (!active) {
    toast(t("noOrders"), "error");
    return;
  }

  if (active.deliveryRequested) {
    toast(t("deliveryRequested"));
    return;
  }

  const deliveryLocation = String(document.querySelector('[data-field="delivery-location"]')?.value || "").trim();
  if (!deliveryLocation) {
    toast(t("deliveryLocationRequired"), "error");
    return;
  }

  active.deliveryRequested = true;
  active.deliveryRequestedAt = Date.now();
  active.deliveryLocation = deliveryLocation;

  addNotice({
    type: "delivery",
    audience: "owner",
    laundryId: session.laundryId,
    customerCode: session.customerCode,
    orderId: active.id,
    title: t("deliveryNoticeTitle"),
    body: `${t("deliveryNoticeBody")} ${t("deliveryLocation")}: ${deliveryLocation}`
  });

  saveData();
  notifyDevice(t("deliveryNoticeTitle"), `${t("deliveryNoticeBody")} ${t("deliveryLocation")}: ${deliveryLocation}`);
  toast(t("deliveryRequested"));
  render();
}

function fillCurrentDeliveryLocation() {
  const input = document.querySelector('[data-field="delivery-location"]');
  if (!input || !("geolocation" in navigator)) {
    toast(t("locationUnavailable"), "error");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const latitude = position.coords.latitude.toFixed(6);
      const longitude = position.coords.longitude.toFixed(6);
      input.value = `https://maps.google.com/?q=${latitude},${longitude}`;
      toast(t("locationReady"));
    },
    () => toast(t("locationUnavailable"), "error"),
    { enableHighAccuracy: true, timeout: 12000, maximumAge: 60000 }
  );
}

function findNearestLaundries() {
  if (!("geolocation" in navigator)) {
    nearestState = { loading: false, searched: true, error: t("locationUnavailable"), results: registeredLaundryMapResults(), userLocation: null };
    render();
    return;
  }

  nearestState = { ...nearestState, loading: true, searched: true, error: "" };
  render();

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      const results = data.laundries
        .map((laundry) => {
          const coords = parseLocationCoordinates(laundry.location);

          return {
            laundry,
            distanceKm: coords ? distanceBetweenKm(userLocation, coords) : null
          };
        })
        .filter((result) => result.laundry.location || result.laundry.name)
        .sort(sortNearestResults);

      nearestState = { loading: false, searched: true, error: "", results, userLocation };
      render();
    },
    () => {
      nearestState = { loading: false, searched: true, error: t("locationNeeded"), results: registeredLaundryMapResults(), userLocation: null };
      render();
    },
    { enableHighAccuracy: true, timeout: 12000, maximumAge: 60000 }
  );
}

function registeredLaundryMapResults() {
  return data.laundries
    .filter((laundry) => laundry.location || laundry.name)
    .map((laundry) => ({ laundry, distanceKm: null }));
}

function sortNearestResults(a, b) {
  const aHasDistance = Number.isFinite(a.distanceKm);
  const bHasDistance = Number.isFinite(b.distanceKm);
  if (aHasDistance && bHasDistance) return a.distanceKm - b.distanceKm;
  if (aHasDistance) return -1;
  if (bHasDistance) return 1;
  return a.laundry.name.localeCompare(b.laundry.name);
}

function addNotice({ audience, laundryId, customerCode, orderId = null, title, body, type = "general" }) {
  data.notices.unshift({
    id: crypto.randomUUID(),
    type,
    audience,
    laundryId,
    customerCode: normalizeCustomerCode(customerCode),
    orderId,
    title,
    body,
    read: false,
    readAt: null,
    createdAt: Date.now()
  });
}

function noticesForOwner(laundryId) {
  return data.notices
    .filter((notice) => notice.audience === "owner" && notice.laundryId === laundryId)
    .slice(0, 5);
}

function noticesForCustomer(laundryId, customerCode) {
  return data.notices
    .filter((notice) => notice.audience === "customer" && notice.laundryId === laundryId && notice.customerCode === customerCode)
    .slice(0, 5);
}

function markRelevantNoticesRead() {
  const session = view.session;
  if (!session) return;

  data.notices.forEach((notice) => {
    if (session.role === "owner" && notice.audience === "owner" && notice.laundryId === session.laundryId) {
      notice.read = true;
      notice.readAt = notice.readAt || Date.now();
    }
    if (
      session.role === "customer" &&
      notice.audience === "customer" &&
      notice.laundryId === session.laundryId &&
      notice.customerCode === session.customerCode
    ) {
      notice.read = true;
      notice.readAt = notice.readAt || Date.now();
    }
  });

  saveData();
  render();
}

async function requestNotificationPermission() {
  if (!("Notification" in window)) {
    toast(t("alertsBlocked"), "error");
    return;
  }

  const permission = await Notification.requestPermission();
  if (permission === "granted") {
    toast(t("alertsEnabled"));
  } else {
    toast(t("alertsBlocked"), "error");
  }
}

function notifyDevice(title, body) {
  if (!("Notification" in window) || Notification.permission !== "granted") return;
  navigator.serviceWorker?.getRegistration?.().then((registration) => {
    if (registration?.showNotification) {
      registration.showNotification(title, {
        body,
        icon: "assets/icon.svg?v=64",
        badge: "assets/icon.svg?v=64"
      });
    } else {
      new Notification(title, { body, icon: "assets/icon.svg?v=64" });
    }
  });
}

function customerOrders(laundryId, customerCode) {
  const code = normalizeCustomerCode(customerCode);
  return data.orders
    .filter((order) => order.laundryId === laundryId && order.customerCode === code)
    .sort((a, b) => b.createdAt - a.createdAt);
}

function groupCustomersByLaundry(laundryId, orders) {
  const groups = new Map();

  data.customers
    .filter((customer) => customer.laundryId === laundryId)
    .forEach((customer) => {
      groups.set(customerKey(customer.laundryId, customer.code), {
        customerCode: customer.code,
        name: customer.name || `${t("customer")} ${customer.code}`,
        phone: customer.phone || "",
        createdAt: customer.createdAt || 0,
        orders: []
      });
    });

  orders.forEach((order) => {
    const key = customerKey(order.laundryId, order.customerCode);
    if (!groups.has(key)) {
      groups.set(key, {
        customerCode: order.customerCode,
        name: order.customerName || `${t("customer")} ${order.customerCode}`,
        phone: order.customerPhone || "",
        createdAt: order.createdAt || 0,
        orders: []
      });
    }

    const group = groups.get(key);
    if (!group.name && order.customerName) group.name = order.customerName;
    if (!group.phone && order.customerPhone) group.phone = order.customerPhone;
    group.createdAt = Math.max(group.createdAt || 0, order.createdAt || 0);
    group.orders.push(order);
  });

  return Array.from(groups.values())
    .map((group) => ({
      ...group,
      orders: group.orders.sort((a, b) => b.createdAt - a.createdAt)
    }))
    .sort((a, b) => (b.orders[0]?.createdAt || b.createdAt || 0) - (a.orders[0]?.createdAt || a.createdAt || 0));
}

function existingCustomerName(laundryId, customerCode) {
  return findCustomer(laundryId, customerCode)?.name || customerOrders(laundryId, customerCode).find((order) => order.customerName)?.customerName || "";
}

function existingCustomerPhone(laundryId, customerCode) {
  return findCustomer(laundryId, customerCode)?.phone || customerOrders(laundryId, customerCode).find((order) => order.customerPhone)?.customerPhone || "";
}

function findCustomer(laundryId, customerCode) {
  const code = normalizeCustomerCode(customerCode);
  return data.customers.find((customer) => customer.laundryId === laundryId && customer.code === code);
}

function upsertCustomer({ laundryId, code, name = "", phone = "" }) {
  const customerCode = normalizeCustomerCode(code);
  let customer = findCustomer(laundryId, customerCode);

  if (!customer) {
    customer = {
      id: crypto.randomUUID(),
      laundryId,
      code: customerCode,
      name: "",
      phone: "",
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
    data.customers.push(customer);
  }

  customer.name = name || customer.name || `${t("customer")} ${customerCode}`;
  customer.phone = phone || customer.phone || "";
  customer.updatedAt = Date.now();
  return customer;
}

function customerKey(laundryId, customerCode) {
  return `${laundryId}:${normalizeCustomerCode(customerCode)}`;
}

function customerSelectValue(group) {
  return JSON.stringify({
    code: group.customerCode,
    name: group.name || "",
    phone: group.phone || ""
  });
}

function fillExistingCustomer(select) {
  const form = select.closest("form");
  if (!form) return;

  const nameInput = form.elements.customerName;
  const phoneInput = form.elements.customerPhone;
  const codeInput = form.elements.customerCode;

  if (!select.value) {
    if (nameInput) nameInput.value = "";
    if (phoneInput) phoneInput.value = "";
    if (codeInput) codeInput.value = "";
    return;
  }

  try {
    const customer = JSON.parse(select.value);
    if (nameInput) nameInput.value = customer.name || "";
    if (phoneInput) phoneInput.value = customer.phone || "";
    if (codeInput) codeInput.value = customer.code ?? "";
  } catch {
    toast(t("invalidCode"), "error");
  }
}

function renderLaundryContact(laundry) {
  const services = laundryServices(laundry);

  return `
    <section class="panel laundry-profile">
      <div>
        <h2 class="laundry-profile-title">${escapeHtml(laundry.name)}</h2>
        <p class="subtle no-margin">${escapeHtml(t("laundryContact"))}</p>
      </div>
      <div class="contact-grid">
        ${laundry.ownerPhone ? `<p class="contact-line">${escapeHtml(t("ownerPhone"))}: <a href="${safePhoneHref(laundry.ownerPhone)}">${escapeHtml(laundry.ownerPhone)}</a></p>` : ""}
        ${laundry.location ? `<p class="contact-line">${escapeHtml(t("location"))}: ${renderLocationValue(laundry.location)}</p>` : ""}
      </div>
      ${services.length ? `
        <div class="service-list" aria-label="${escapeHtml(t("services"))}">
          <strong>${escapeHtml(t("services"))}</strong>
          <div class="service-pills">
            ${services.map((service) => `<span class="service-pill">${escapeHtml(service)}</span>`).join("")}
          </div>
        </div>
      ` : ""}
    </section>
  `;
}

function laundryServices(laundry) {
  const seen = new Set();
  return String(laundry.services || DEFAULT_LAUNDRY_SERVICES)
    .split(",")
    .map((service) => service.trim())
    .filter(Boolean)
    .map(localizeLaundryService)
    .filter(Boolean)
    .filter((service) => {
      const normalized = normalizeServiceName(service);
      if (seen.has(normalized)) return false;
      seen.add(normalized);
      return true;
    });
}

function localizedDefaultLaundryServices() {
  return Object.values(laundryServiceLabels)
    .map((labels) => labels[data.language || "en"] || labels.en)
    .join(", ");
}

function localizeLaundryService(service) {
  if (normalizeServiceName(service) === "drying") return "";
  const key = laundryServiceKey(service);
  const labels = key ? laundryServiceLabels[key] : null;
  return labels ? labels[data.language || "en"] || labels.en : service;
}

function laundryServiceKey(service) {
  const normalized = normalizeServiceName(service);
  return Object.entries(laundryServiceLabels).find(([, labels]) =>
    [labels.en, labels.ku, labels.ar, ...(labels.aliases || [])].some((label) => normalizeServiceName(label) === normalized)
  )?.[0] || null;
}

function normalizeServiceName(service) {
  return String(service || "").trim().toLowerCase().replace(/\s+/g, " ");
}

function renderLocationValue(location) {
  const value = String(location || "");
  const safeValue = escapeHtml(value);
  return /^https?:\/\//i.test(value)
    ? `<a href="${safeValue}" target="_blank" rel="noopener noreferrer">${safeValue}</a>`
    : safeValue;
}

function safePhoneHref(phone) {
  const cleaned = String(phone || "").replace(/[^\d+]/g, "");
  return `tel:${escapeHtml(cleaned)}`;
}

function googleMapsSearchUrl(laundry) {
  const location = String(laundry?.location || "").trim();
  if (/^https?:\/\//i.test(location)) return location;

  const query = location
    ? `${laundry.name} ${location}`
    : `${laundry.name} Erbil`;

  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function googleMapsDirectionsUrl(laundry, origin = null) {
  const destinationCoords = parseLocationCoordinates(laundry?.location);
  const destination = destinationCoords
    ? `${destinationCoords.lat},${destinationCoords.lng}`
    : String(laundry?.location || "").trim() || `${laundry?.name || ""} Erbil`;
  const originPart = origin ? `&origin=${encodeURIComponent(`${origin.lat},${origin.lng}`)}` : "";

  return `https://www.google.com/maps/dir/?api=1${originPart}&destination=${encodeURIComponent(destination)}`;
}

function parseLocationCoordinates(location) {
  const value = normalizeDigits(location);
  if (!value) return null;

  const queryMatch = value.match(/[?&]q=(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)/i);
  const atMatch = value.match(/@(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)/);
  const bangMatch = value.match(/!3d(-?\d+(?:\.\d+)?)!4d(-?\d+(?:\.\d+)?)/);
  const plainMatch = value.match(/(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)/);
  const match = queryMatch || atMatch || bangMatch || plainMatch;
  if (!match) return null;

  const lat = localizedNumber(match[1]);
  const lng = localizedNumber(match[2]);
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null;
  if (Math.abs(lat) > 90 || Math.abs(lng) > 180) return null;

  return { lat, lng };
}

function distanceBetweenKm(origin, destination) {
  const radiusKm = 6371;
  const dLat = toRadians(destination.lat - origin.lat);
  const dLng = toRadians(destination.lng - origin.lng);
  const originLat = toRadians(origin.lat);
  const destinationLat = toRadians(destination.lat);
  const a = Math.sin(dLat / 2) ** 2 +
    Math.cos(originLat) * Math.cos(destinationLat) * Math.sin(dLng / 2) ** 2;
  return radiusKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function toRadians(value) {
  return value * Math.PI / 180;
}

function formatDistance(distanceKm) {
  if (distanceKm < 1) return `${Math.round(distanceKm * 1000)} m`;
  return `${distanceKm.toFixed(1)} km`;
}

function urgentNoticeForOrder(order) {
  const notices = data.notices.filter((notice) =>
    notice.audience === "owner" &&
    notice.laundryId === order.laundryId &&
    notice.customerCode === order.customerCode
  );

  return notices.find((notice) => notice.orderId === order.id) || notices[0] || null;
}

function findLaundry(laundryId) {
  return data.laundries.find((laundry) => laundry.id === laundryId);
}

function isValidCustomerCode(value) {
  const code = normalizeCustomerCode(value);
  const legacyNumeric = /^\d{1,3}$/.test(code);
  const generatedCode = /^(?=(?:.*\d){3})(?=(?:.*[A-Z]){1})[A-Z0-9]{4}$/.test(code);
  return legacyNumeric || generatedCode;
}

function normalize(value) {
  return normalizeDigits(value).trim().toLowerCase();
}

function normalizeCustomerCode(value) {
  return normalizeDigits(value).trim().toUpperCase().replace(/[^A-Z0-9]/g, "");
}

function normalizeDigits(value) {
  return String(value ?? "")
    .replace(/[٠-٩]/g, (digit) => String(digit.charCodeAt(0) - 0x0660))
    .replace(/[۰-۹]/g, (digit) => String(digit.charCodeAt(0) - 0x06f0));
}

function localizedNumber(value) {
  const normalized = normalizeDigits(value).trim();
  return normalized === "" ? NaN : Number(normalized);
}

function markVisibleNotificationsRead() {
  const session = view.session;
  if (!session) return;

  let changed = false;
  const now = Date.now();

  data.notices.forEach((notice) => {
    const ownerCanSee = session.role === "owner" &&
      notice.audience === "owner" &&
      notice.laundryId === session.laundryId;
    const customerCanSee = session.role === "customer" &&
      notice.audience === "customer" &&
      notice.laundryId === session.laundryId &&
      notice.customerCode === session.customerCode;

    if ((ownerCanSee || customerCanSee) && !notice.read) {
      notice.read = true;
      notice.readAt = now;
      changed = true;
    }
  });

  if (changed) saveData();
}

function getInitialView() {
  return { screen: "splash", session: null };
}

function restoreSavedSession() {
  const session = data.lastSession;
  if (!session?.role) return null;

  if (session.role === "owner" && findLaundry(session.laundryId)) {
    return { screen: "owner-dashboard", session: { role: "owner", laundryId: session.laundryId } };
  }

  if (
    session.role === "customer" &&
    findLaundry(session.laundryId) &&
    (customerOrders(session.laundryId, session.customerCode).length || findCustomer(session.laundryId, session.customerCode))
  ) {
    return {
      screen: "customer-dashboard",
      session: { role: "customer", laundryId: session.laundryId, customerCode: normalizeCustomerCode(session.customerCode) }
    };
  }

  if (session.role === "admin" && REMEMBER_ADMIN_SESSION) {
    return { screen: "admin-dashboard", session: { role: "admin" } };
  }

  data.lastSession = null;
  saveData();
  return null;
}

function rememberSession(session) {
  data.lastSession = {
    ...session,
    savedAt: Date.now()
  };
  saveData();
}

function handleSecretAdminTap() {
  clearTimeout(adminTapTimer);
  adminTapCount += 1;

  if (adminTapCount >= 5) {
    adminTapCount = 0;
    view = { screen: "admin-login", session: null };
    render();
    return;
  }

  adminTapTimer = setTimeout(() => {
    adminTapCount = 0;
  }, 1800);
}

function isAdminAccessUrl() {
  return new URLSearchParams(window.location.search).get("admin") === "1";
}

function generateLaundryCode() {
  const used = new Set(data.laundries.map((laundry) => String(laundry.code)));
  let code = "";
  do {
    code = String(Math.floor(1000 + Math.random() * 9000));
  } while (used.has(code));
  return code;
}

function generateCustomerCode(laundryId) {
  const letters = "ABCDEFGHJKLMNPQRSTUVWXYZ";
  const used = new Set([
    ...data.customers.filter((customer) => customer.laundryId === laundryId).map((customer) => normalizeCustomerCode(customer.code)),
    ...data.orders.filter((order) => order.laundryId === laundryId).map((order) => normalizeCustomerCode(order.customerCode))
  ]);

  let code = "";
  do {
    const parts = [
      letters[Math.floor(Math.random() * letters.length)],
      String(Math.floor(Math.random() * 10)),
      String(Math.floor(Math.random() * 10)),
      String(Math.floor(Math.random() * 10))
    ];

    for (let index = parts.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [parts[index], parts[swapIndex]] = [parts[swapIndex], parts[index]];
    }

    code = parts.join("");
  } while (used.has(code));

  return code;
}

function isToday(timestamp) {
  if (!timestamp) return false;
  const date = new Date(timestamp);
  const today = new Date();
  return date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate();
}

function todayDateString() {
  const date = new Date();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

function addMonthsDateString(value, months) {
  const [year, month, day] = String(value || todayDateString()).split("-").map(Number);
  const date = new Date(year, (month || 1) - 1, day || 1);
  date.setMonth(date.getMonth() + months);
  const nextMonth = String(date.getMonth() + 1).padStart(2, "0");
  const nextDay = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${nextMonth}-${nextDay}`;
}

function getLaundryServiceAccess(laundry) {
  if (!laundry) return { blocked: true };

  const today = todayDateString();
  const disabled = Boolean(laundry.serviceDisabled);
  const startsLater = laundry.activeFrom && laundry.activeFrom > today;
  const expired = laundry.activeTo && laundry.activeTo < today;

  return {
    blocked: disabled || startsLater || expired,
    disabled,
    startsLater,
    expired,
    activeFrom: laundry.activeFrom || "",
    activeTo: laundry.activeTo || ""
  };
}

function formatPlainDate(value) {
  if (!value) return "";
  const [year, month, day] = String(value).split("-");
  if (!year || !month || !day) return value;
  return new Intl.DateTimeFormat(data.language || "en", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(new Date(Number(year), Number(month) - 1, Number(day)));
}

function formatDate(timestamp) {
  if (!timestamp) return "";
  return new Intl.DateTimeFormat(data.language || "en", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(timestamp));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function decorateIcons() {
  document.querySelectorAll(".btn svg, .panel-title svg, .status-block svg, .receipt svg").forEach((svg) => {
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "2");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
  });
}

function toast(message, type = "") {
  const element = document.createElement("div");
  element.className = `toast ${type}`.trim();
  element.textContent = message;
  toastStack.append(element);
  setTimeout(() => element.remove(), 3000);
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
}
