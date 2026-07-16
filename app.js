const STORAGE_KEY = "laundery-erbil-state-v1";
const ADMIN_PIN = "0000";

const languages = {
  en: { label: "English", dir: "ltr" },
  ku: { label: "کوردی", dir: "rtl" },
  ar: { label: "العربية", dir: "rtl" }
};

const dict = {
  en: {
    city: "Erbil service",
    appName: "Laundery-Erbil",
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
    submissions: "Submissions",
    customerName: "Customer name",
    customerPhone: "Customer phone",
    existingCustomer: "Existing customer",
    newCustomer: "New customer",
    ownerPhone: "Owner phone",
    location: "Location",
    laundryContact: "Laundry contact",
    optional: "optional",
    clothesParts: "Clothes parts",
    markUrgent: "Urgent",
    add: "Add",
    active: "Active",
    urgent: "Urgent",
    readyToday: "Ready today",
    notifications: "Notifications",
    noNotifications: "No notifications",
    markRead: "Mark read",
    orders: "Customers",
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
    deliveryEnabled: "Delivery on",
    deliveryDisabled: "Delivery off",
    enableDelivery: "Enable delivery",
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
    codeRange: "Code 0-500",
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
    invalidCode: "Use a code from 0 to 500",
    duplicateActive: "This code already has active clothes",
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
    appName: "ئوتوەکانی هەولێر",
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
    ownerLogin: "چوونەژوورەوەی خاوەن",
    customerLogin: "چوونەژوورەوەی کڕیار",
    adminLogin: "چوونەژوورەوەی ئەدمین",
    addCustomer: "زیادکردنی کڕیار",
    newSubmission: "سپاردنی نوێ",
    submissions: "سپاردنەکان",
    customerName: "ناوی کڕیار",
    customerPhone: "ژمارەی مۆبایلی کڕیار",
    existingCustomer: "کڕیاری پێشوو",
    newCustomer: "کڕیاری نوێ",
    ownerPhone: "ژمارەی مۆبایلی خاوەن",
    location: "شوێن",
    laundryContact: "پەیوەندی لاندری",
    optional: "ئارەزوومەندانە",
    clothesParts: "ژمارەی پارچە جل",
    markUrgent: "پەلە",
    add: "زیادکردن",
    active: "چالاک",
    urgent: "پەلە",
    readyToday: "ئەمڕۆ ئامادەبوو",
    notifications: "ئاگادارکردنەوەکان",
    noNotifications: "ئاگادارکردنەوە نییە",
    markRead: "خوێندراوە",
    orders: "کڕیارەکان",
    history: "مێژوو",
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
    deliveryEnabled: "گەیاندن چالاکە",
    deliveryDisabled: "گەیاندن داخراوە",
    enableDelivery: "چالاککردنی گەیاندن",
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
    codeRange: "کۆد 0-500",
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
    invalidCode: "کۆد لە نێوان 0 تا 500 بەکاربهێنە",
    duplicateActive: "ئەم کۆدە جلێکی چالاکی هەیە",
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
    appName: "مکوی-أربيل",
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
    submissions: "التسليمات",
    customerName: "اسم الزبون",
    customerPhone: "رقم هاتف الزبون",
    existingCustomer: "زبون سابق",
    newCustomer: "زبون جديد",
    ownerPhone: "هاتف صاحب المغسلة",
    location: "الموقع",
    laundryContact: "معلومات المغسلة",
    optional: "اختياري",
    clothesParts: "عدد قطع الملابس",
    markUrgent: "مستعجل",
    add: "إضافة",
    active: "نشط",
    urgent: "مستعجل",
    readyToday: "جاهز اليوم",
    notifications: "الإشعارات",
    noNotifications: "لا توجد إشعارات",
    markRead: "تمت القراءة",
    orders: "الزبائن",
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
    deliveryEnabled: "التوصيل مفعل",
    deliveryDisabled: "التوصيل متوقف",
    enableDelivery: "تفعيل التوصيل",
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
    codeRange: "الكود 0-500",
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
    invalidCode: "استخدم كودا من 0 إلى 500",
    duplicateActive: "يوجد طلب نشط لهذا الكود",
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
  if (action === "generate-code") {
    const input = document.querySelector("#adminLaundryCode");
    if (input) input.value = String(generateLaundryCode());
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
  if (!select) return;

  fillExistingCustomer(select);
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

  const formData = new FormData(form);
  const type = form.dataset.form;

  if (type === "owner-login") ownerLogin(formData);
  if (type === "customer-login") customerLogin(formData);
  if (type === "admin-login") adminLogin(formData);
  if (type === "add-customer" || type === "add-submission") addCustomer(formData, form);
  if (type === "save-laundry") saveLaundry(formData, form);
  if (type === "update-laundry-service") updateLaundryService(formData);
  if (type === "update-delivery") updateDelivery(formData);
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
        location: "Erbil",
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
        location: "Erbil",
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
        code: 12,
        createdAt: now - 7200000,
        updatedAt: now - 7200000
      },
      {
        id: "customer-citadel-45",
        laundryId: "laundry-citadel",
        name: "Sara",
        phone: "",
        code: 45,
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
        customerCode: 12,
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
        customerCode: 45,
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
    lastSession: null
  };
}

function normalizeStoredData(state) {
  return {
    language: state.language || null,
    laundries: Array.isArray(state.laundries) ? state.laundries.map(normalizeLaundry) : [],
    customers: normalizeCustomers(state),
    orders: Array.isArray(state.orders) ? state.orders.map(normalizeOrder) : [],
    notices: Array.isArray(state.notices)
      ? state.notices.map((notice) => ({ ...notice, readAt: notice.readAt || null, orderId: notice.orderId || null, type: notice.type || "general" }))
      : [],
    lastSession: state.lastSession || null
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
    const code = Number(order.customerCode);
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
    code: Number(customer.code ?? customer.customerCode),
    createdAt: customer.createdAt || Date.now(),
    updatedAt: customer.updatedAt || customer.createdAt || Date.now()
  };
}

function normalizeLaundry(laundry) {
  return {
    ...laundry,
    ownerPhone: laundry.ownerPhone || "",
    location: laundry.location || "",
    serviceDisabled: Boolean(laundry.serviceDisabled),
    deliveryEnabled: Boolean(laundry.deliveryEnabled),
    activeFrom: laundry.activeFrom || "",
    activeTo: laundry.activeTo || ""
  };
}

function normalizeOrder(order) {
  return {
    ...order,
    customerPhone: order.customerPhone || "",
    deliveryRequested: Boolean(order.deliveryRequested),
    deliveryRequestedAt: order.deliveryRequestedAt || null,
    deliveryLocation: order.deliveryLocation || ""
  };
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
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
}

function renderScreen() {
  if (view.screen === "language") return renderLanguage();
  if (view.screen === "owner-login") return renderOwnerLogin();
  if (view.screen === "customer-login") return renderCustomerLogin();
  if (view.screen === "admin-login") return renderAdminLogin();
  if (view.screen === "owner-dashboard") return renderOwnerDashboard();
  if (view.screen === "customer-dashboard") return renderCustomerDashboard();
  if (view.screen === "admin-dashboard") return renderAdminDashboard();
  return renderRoleChoice();
}

function renderTopbar({ title = t("appName"), subtitle = t("city"), back = true, secretAdmin = false } = {}) {
  const brandOpen = secretAdmin
    ? `<div class="brand brand-trigger" data-action="secret-admin-tap" role="button" tabindex="0" aria-label="${escapeHtml(t("appName"))}">`
    : `<div class="brand">`;
  const brandClose = `</div>`;

  return `
    <header class="topbar">
      ${brandOpen}
        <img class="brand-mark" src="assets/icon.svg" alt="" />
        <div class="brand-text">
          <div class="eyebrow">${escapeHtml(subtitle)}</div>
          <h1 class="screen-title">${escapeHtml(title)}</h1>
        </div>
      ${brandClose}
      ${back ? `<button class="btn ghost icon-btn" data-action="back-role" title="${escapeHtml(t("back"))}" aria-label="${escapeHtml(t("back"))}">${icons.back}</button>` : ""}
    </header>
  `;
}

function renderLanguage() {
  return `
    <section class="screen">
      <div class="hero-band">
        <div class="brand brand-trigger" data-action="secret-admin-tap" role="button" tabindex="0" aria-label="${escapeHtml(t("appName"))}">
          <img class="brand-mark" src="assets/icon.svg" alt="" />
          <div class="brand-text">
            <div class="eyebrow">${escapeHtml(t("city"))}</div>
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
      </div>
      <div class="panel">
        <div class="panel-title">
          <strong>${escapeHtml(t("notificationPermission"))}</strong>
          <button class="btn light" data-action="enable-alerts">${icons.bell}${escapeHtml(t("enableAlerts"))}</button>
        </div>
        <div class="subtle">${escapeHtml(t("demoPin"))}</div>
      </div>
      <div class="footer-actions">
        <button class="btn ghost" data-action="change-language">${escapeHtml(t("changeLanguage"))}</button>
      </div>
    </section>
  `;
}

function renderOwnerLogin() {
  return `
    <section class="screen">
      ${renderTopbar({ title: t("ownerLogin") })}
      <form class="panel form-grid" data-form="owner-login">
        <label class="field">
          <span>${escapeHtml(t("laundryName"))}</span>
          <select class="select" name="laundryId" required>
            <option value="">${escapeHtml(t("selectLaundry"))}</option>
            ${data.laundries.map((laundry) => `<option value="${escapeHtml(laundry.id)}">${escapeHtml(laundry.name)}</option>`).join("")}
          </select>
        </label>
        <label class="field">
          <span>${escapeHtml(t("ownerCode"))}</span>
          <input class="input" name="code" inputmode="numeric" autocomplete="one-time-code" required />
        </label>
        <button class="btn primary" type="submit">${icons.owner}${escapeHtml(t("signIn"))}</button>
      </form>
    </section>
  `;
}

function renderCustomerLogin() {
  return `
    <section class="screen">
      ${renderTopbar({ title: t("customerLogin") })}
      <form class="panel form-grid" data-form="customer-login">
        <label class="field">
          <span>${escapeHtml(t("selectLaundry"))}</span>
          <select class="select" name="laundryId" required>
            <option value="">${escapeHtml(t("selectLaundry"))}</option>
            ${data.laundries.map((laundry) => `<option value="${escapeHtml(laundry.id)}">${escapeHtml(laundry.name)}</option>`).join("")}
          </select>
        </label>
        <label class="field">
          <span>${escapeHtml(t("customerCode"))}</span>
          <input class="input" name="code" type="number" min="0" max="500" inputmode="numeric" required />
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
  const customerGroups = groupCustomersByLaundry(laundry.id, orders);

  return `
    <section class="screen">
      ${renderTopbar({ title: laundry.name, subtitle: t("owner"), back: false })}
      ${blocked ? renderServiceBlockedNotice(serviceAccess) : ""}
      <div class="stats">
        <div class="stat"><strong>${active.length}</strong><span>${escapeHtml(t("active"))}</span></div>
        <div class="stat"><strong>${urgent.length}</strong><span>${escapeHtml(t("urgent"))}</span></div>
        <div class="stat"><strong>${doneToday}</strong><span>${escapeHtml(t("readyToday"))}</span></div>
      </div>
      <form class="panel compact-panel" data-form="update-delivery">
        <div class="panel-title">
          <strong>${icons.truck}${escapeHtml(t("delivery"))}</strong>
          <span class="badge ${laundry.deliveryEnabled ? "done" : "info"}">${escapeHtml(t(laundry.deliveryEnabled ? "deliveryEnabled" : "deliveryDisabled"))}</span>
        </div>
        <label class="check-field">
          <input name="deliveryEnabled" type="checkbox" ${laundry.deliveryEnabled ? "checked" : ""} ${disabledAttr} />
          <span>${escapeHtml(t("enableDelivery"))}</span>
        </label>
        <button class="btn light" type="submit" ${disabledAttr}>${icons.done}${escapeHtml(t("saveDelivery"))}</button>
      </form>
      ${renderNotices(notices)}
      <form class="panel form-grid" data-form="add-customer">
        <h2 class="panel-title">${icons.add}<span>${escapeHtml(t("addCustomer"))}</span></h2>
        ${customerGroups.length ? `
          <label class="field">
            <span>${escapeHtml(t("existingCustomer"))}</span>
            <select class="select" data-action="select-existing-customer" ${disabledAttr}>
              <option value="">${escapeHtml(t("newCustomer"))}</option>
              ${customerGroups.map((group) => `
                <option value="${escapeHtml(customerSelectValue(group))}">${escapeHtml(group.name)} - ${escapeHtml(t("codeLabel"))}: ${group.customerCode}</option>
              `).join("")}
            </select>
          </label>
        ` : ""}
        <label class="field">
          <span>${escapeHtml(t("customerName"))} (${escapeHtml(t("optional"))})</span>
          <input class="input" name="customerName" autocomplete="name" ${disabledAttr} />
        </label>
        <label class="field">
          <span>${escapeHtml(t("customerPhone"))} (${escapeHtml(t("optional"))})</span>
          <input class="input" name="customerPhone" type="tel" inputmode="tel" autocomplete="tel" ${disabledAttr} />
        </label>
        <label class="field">
          <span>${escapeHtml(t("customerCode"))} · ${escapeHtml(t("codeRange"))}</span>
          <input class="input" name="customerCode" type="number" min="0" max="500" inputmode="numeric" required ${disabledAttr} />
        </label>
        <label class="field">
          <span>${escapeHtml(t("clothesParts"))}</span>
          <input class="input" name="parts" type="number" min="1" inputmode="numeric" ${disabledAttr} />
        </label>
        <label class="check-field">
          <input name="urgent" type="checkbox" ${disabledAttr} />
          <span>${escapeHtml(t("markUrgent"))}</span>
        </label>
        <button class="btn primary" type="submit" ${disabledAttr}>${icons.add}${escapeHtml(t("add"))}</button>
      </form>
      <section class="list" aria-label="${escapeHtml(t("orders"))}">
        <h2 class="panel-title">${escapeHtml(t("orders"))}</h2>
        ${customerGroups.length ? customerGroups.map((group) => renderOwnerCustomerGroup(group, blocked)).join("") : `<div class="empty">${escapeHtml(t("noOrders"))}</div>`}
      </section>
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
  const notices = noticesForCustomer(session.laundryId, session.customerCode);

  return `
    <section class="screen">
      ${renderTopbar({ title: `${t("welcome")}, ${name}`, subtitle: laundry.name, back: false })}
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
          <input class="input" name="ownerPhone" type="tel" inputmode="tel" autocomplete="tel" />
        </label>
        <label class="field">
          <span>${escapeHtml(t("location"))} (${escapeHtml(t("optional"))})</span>
          <input class="input" name="location" autocomplete="street-address" />
        </label>
        <div class="button-row">
          <label class="field">
            <span>${escapeHtml(t("activeFrom"))}</span>
            <input class="input" name="activeFrom" type="date" />
          </label>
          <label class="field">
            <span>${escapeHtml(t("activeTo"))}</span>
            <input class="input" name="activeTo" type="date" />
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
  const activeCount = group.orders.filter((order) => !order.done).length;
  const urgentCount = group.orders.filter((order) => !order.done && (order.urgent || order.urgentByCustomer)).length;
  const disabledAttr = blocked ? "disabled" : "";
  const phoneLine = group.phone ? `<p class="meta">${escapeHtml(t("customerPhone"))}: ${escapeHtml(group.phone)}</p>` : "";
  const submissions = group.orders.length
    ? group.orders.map((order) => renderOwnerOrderCard(order, blocked)).join("")
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
          <span>${escapeHtml(t("clothesParts"))}</span>
          <input class="input" name="parts" type="number" min="1" inputmode="numeric" required ${disabledAttr} />
        </label>
        <label class="check-field">
          <input name="urgent" type="checkbox" ${disabledAttr} />
          <span>${escapeHtml(t("markUrgent"))}</span>
        </label>
        <button class="btn light" type="submit" ${disabledAttr}>${icons.add}${escapeHtml(t("add"))}</button>
      </form>
    </article>
  `;
}

function renderOwnerOrderCard(order, blocked = false) {
  const name = order.customerName || `${t("customer")} ${order.customerCode}`;
  const statusClass = order.done ? "done" : order.urgent || order.urgentByCustomer ? "urgent" : "";
  const deliveryLocationLine = renderDeliveryLocationLine(order);
  return `
    <article class="submission-item ${statusClass}">
      <div class="card-head">
        <div>
          <h4 class="card-title">${escapeHtml(formatDate(order.createdAt))}</h4>
          ${deliveryLocationLine}
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
      <span>${target.parts} ${escapeHtml(t("partsLabel"))} · ${escapeHtml(formatDate(target.createdAt))}</span>
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

function renderHistoryCard(order, laundry) {
  return `
    <article class="card ${order.done ? "done" : ""}">
      <div class="card-head">
        <div>
          <h3 class="card-title">${escapeHtml(laundry?.name || t("laundryName"))}</h3>
          <p class="meta">${escapeHtml(formatDate(order.createdAt))} · ${order.parts} ${escapeHtml(t("partsLabel"))}</p>
        </div>
        <div class="badge-row">
          <span class="badge ${order.done ? "done" : "info"}">${escapeHtml(order.done ? t("ready") : t("waiting"))}</span>
          ${order.urgent || order.urgentByCustomer ? `<span class="badge urgent">${escapeHtml(t("urgent"))}</span>` : ""}
          ${order.deliveryRequested ? `<span class="badge info">${icons.truck}${escapeHtml(t("delivery"))}</span>` : ""}
        </div>
      </div>
      ${renderDeliveryLocationLine(order)}
    </article>
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
  const customerCode = Number(formData.get("code"));

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
  if (String(formData.get("pin") || "") !== ADMIN_PIN) {
    toast(t("invalidAdmin"), "error");
    return;
  }

  const session = { role: "admin" };
  rememberSession(session);
  view = { screen: "admin-dashboard", session };
  render();
}

function addCustomer(formData, form) {
  const laundryId = view.session?.laundryId;
  const customerCode = Number(formData.get("customerCode"));
  const partsValue = String(formData.get("parts") || "").trim();
  const hasParts = partsValue !== "";
  const parts = Number(partsValue);
  const customerName = String(formData.get("customerName") || "").trim();
  const customerPhone = String(formData.get("customerPhone") || "").trim();
  const urgent = formData.get("urgent") === "on";
  const laundry = findLaundry(laundryId);
  const serviceAccess = getLaundryServiceAccess(laundry);

  if (serviceAccess.blocked) {
    toast(t("accountExpiredTitle"), "error");
    return;
  }

  if (!laundryId || !isValidCustomerCode(customerCode)) {
    toast(t("invalidCode"), "error");
    return;
  }

  if (hasParts && (!Number.isInteger(parts) || parts < 1)) {
    toast(t("clothesParts"), "error");
    return;
  }

  const savedCustomer = upsertCustomer({
    laundryId,
    code: customerCode,
    name: customerName || existingCustomerName(laundryId, customerCode),
    phone: customerPhone || existingCustomerPhone(laundryId, customerCode)
  });

  if (!hasParts) {
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
    customerPhone: savedCustomer.phone,
    customerCode,
    parts,
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
  const code = String(formData.get("code") || "").trim();
  const ownerPhone = String(formData.get("ownerPhone") || "").trim();
  const location = String(formData.get("location") || "").trim();
  const activeFrom = String(formData.get("activeFrom") || "");
  const activeTo = String(formData.get("activeTo") || "");
  const serviceDisabled = formData.get("serviceDisabled") === "on";

  if (!name || !code) return;

  const existing = data.laundries.find((laundry) => normalize(laundry.name) === normalize(name));
  if (existing) {
    existing.name = name;
    existing.code = code;
    existing.ownerPhone = ownerPhone;
    existing.location = location;
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

function updateDelivery(formData) {
  const laundry = findLaundry(view.session?.laundryId);
  if (!laundry) return;

  const serviceAccess = getLaundryServiceAccess(laundry);
  if (serviceAccess.blocked) {
    toast(t("accountExpiredTitle"), "error");
    return;
  }

  laundry.deliveryEnabled = formData.get("deliveryEnabled") === "on";
  saveData();
  toast(t("saved"));
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

function addNotice({ audience, laundryId, customerCode, orderId = null, title, body, type = "general" }) {
  data.notices.unshift({
    id: crypto.randomUUID(),
    type,
    audience,
    laundryId,
    customerCode,
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
        icon: "assets/icon.svg",
        badge: "assets/icon.svg"
      });
    } else {
      new Notification(title, { body, icon: "assets/icon.svg" });
    }
  });
}

function customerOrders(laundryId, customerCode) {
  return data.orders
    .filter((order) => order.laundryId === laundryId && order.customerCode === Number(customerCode))
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
  return data.customers.find((customer) => customer.laundryId === laundryId && customer.code === Number(customerCode));
}

function upsertCustomer({ laundryId, code, name = "", phone = "" }) {
  const customerCode = Number(code);
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
  return `${laundryId}:${Number(customerCode)}`;
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
  if (!laundry.ownerPhone && !laundry.location) return "";

  return `
    <section class="panel compact-panel">
      <div class="panel-title">
        <strong>${icons.owner}${escapeHtml(t("laundryContact"))}</strong>
      </div>
      ${laundry.ownerPhone ? `<p class="contact-line">${escapeHtml(t("ownerPhone"))}: <a href="tel:${escapeHtml(laundry.ownerPhone)}">${escapeHtml(laundry.ownerPhone)}</a></p>` : ""}
      ${laundry.location ? `<p class="contact-line">${escapeHtml(t("location"))}: ${escapeHtml(laundry.location)}</p>` : ""}
    </section>
  `;
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
  return Number.isInteger(value) && value >= 0 && value <= 500;
}

function normalize(value) {
  return String(value || "").trim().toLowerCase();
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
  if (isAdminAccessUrl()) {
    return { screen: "admin-login", session: null };
  }

  const restored = restoreSavedSession();
  if (restored) return restored;

  return { screen: data.language ? "role" : "language", session: null };
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
      session: { role: "customer", laundryId: session.laundryId, customerCode: Number(session.customerCode) }
    };
  }

  if (session.role === "admin") {
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
