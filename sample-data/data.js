window.ABHA_VISITOR_GUIDE_DATA = {
  media: {
    hero: {
      src: "assets/abha-mountains-fog.svg",
      width: 1200,
      height: 900,
      alt: { en: "Original illustration of fog drifting over green mountain ridges in Abha", ar: "رسم أصلي لضباب ينساب فوق سلاسل الجبال الخضراء في أبها" }
    },
    discoverVideo: {
      provider: "placeholder",
      posterSrc: "assets/discover-abha-poster.svg",
      posterWidth: 1600,
      posterHeight: 900,
      posterAlt: { en: "Original illustrated poster of misty Abha mountains and a winding highland path", ar: "ملصق مرسوم أصلي لجبال أبها الضبابية وطريق متعرج في المرتفعات" },
      localMp4Src: "",
      youtubeEmbedUrl: "",
      captions: { en: "", ar: "" }
    }
  },
  categories: [
    { id: "nature", label: { en: "Nature", ar: "الطبيعة" } },
    { id: "culture", label: { en: "Culture", ar: "الثقافة" } },
    { id: "views", label: { en: "Views", ar: "الإطلالات" } },
    { id: "food", label: { en: "Local taste", ar: "المذاق المحلي" } }
  ],
  destinations: [
    {
      id: "cloudline-park", category: "nature", location: { en: "Abha", ar: "أبها" }, title: { en: "Cloudline Park", ar: "منتزه خط السحاب" },
      description: { en: "A gentle hillside loop with cedar shade, quiet benches, and wide valley air.", ar: "مسار هادئ على التلال بظلال العرعر ومقاعد مريحة وهواء الوادي الواسع." }, tags: { en: ["Easy walk", "Morning"], ar: ["مشي سهل", "الصباح"] }, duration: 75, mapQuery: "Cloudline Park, Abha, Saudi Arabia", gradient: "sage",
      image: { src: "assets/destinations/cloudline-park.svg", width: 800, height: 500, alt: { en: "Original illustration of a cedar-lined path through misty Abha hills", ar: "رسم أصلي لمسار تحيط به أشجار العرعر في تلال أبها الضبابية" } }
    },
    {
      id: "al-namas-overlook", category: "views", location: { en: "Al Namas", ar: "النماص" }, title: { en: "Al Namas Overlook", ar: "إطلالة النماص" },
      description: { en: "A slow, scenic stop for highland views, cool breezes, and a long golden-hour pause.", ar: "توقّف هادئ لإطلالات المرتفعات والنسيم العليل ولحظات الغروب الطويلة." }, tags: { en: ["Golden hour", "Scenic drive"], ar: ["وقت الغروب", "رحلة بالسيارة"] }, duration: 90, mapQuery: "Al Namas Overlook, Al Namas, Saudi Arabia", gradient: "lavender",
      image: { src: "assets/destinations/al-namas-overlook.svg", width: 800, height: 500, alt: { en: "Original illustration of a golden view from an Al Namas mountain overlook", ar: "رسم أصلي لإطلالة ذهبية من مرتفعات النماص" } }
    },
    {
      id: "heritage-courtyard", category: "culture", location: { en: "Abha", ar: "أبها" }, title: { en: "Heritage Courtyard", ar: "فناء التراث" },
      description: { en: "A small story-filled courtyard imagined for browsing craft details and local patterns.", ar: "فناء صغير مليء بالقصص لتأمل تفاصيل الحرف والنقوش المحلية." }, tags: { en: ["Craft detail", "Slow browse"], ar: ["حرف يدوية", "تجول هادئ"] }, duration: 60, mapQuery: "Heritage Courtyard, Abha, Saudi Arabia", gradient: "clay",
      image: { src: "assets/destinations/heritage-courtyard.svg", width: 800, height: 500, alt: { en: "Original illustration of a patterned highland heritage courtyard", ar: "رسم أصلي لفناء تراثي في المرتفعات مزين بالنقوش" } }
    },
    {
      id: "juniper-table", category: "food", location: { en: "Abha", ar: "أبها" }, title: { en: "Juniper Table", ar: "مائدة العرعر" },
      description: { en: "A fictional local-taste stop for warm bread, aromatic coffee, and an unhurried table.", ar: "محطة خيالية للمذاق المحلي مع خبز دافئ وقهوة عطرية وجلسة غير مستعجلة." }, tags: { en: ["Local taste", "Relaxed"], ar: ["مذاق محلي", "استرخاء"] }, duration: 50, mapQuery: "Juniper Table, Abha, Saudi Arabia", gradient: "honey",
      image: { src: "assets/destinations/juniper-table.svg", width: 800, height: 500, alt: { en: "Original illustration of coffee, warm bread, and juniper on a café table", ar: "رسم أصلي للقهوة والخبز الدافئ وأغصان العرعر على طاولة مقهى" } }
    },
    {
      id: "terrace-trail", category: "nature", location: { en: "Al Namas", ar: "النماص" }, title: { en: "Terrace Trail", ar: "مسار المدرجات" },
      description: { en: "A made-up trail through green terrace shapes, best enjoyed with calm shoes and a little time.", ar: "مسار خيالي بين مدرجات خضراء، يستحق حذاءً مريحًا وبعض الوقت الهادئ." }, tags: { en: ["Fresh air", "Walking shoes"], ar: ["هواء نقي", "حذاء للمشي"] }, duration: 105, mapQuery: "Terrace Trail, Al Namas, Saudi Arabia", gradient: "mist",
      image: { src: "assets/destinations/terrace-trail.svg", width: 800, height: 500, alt: { en: "Original illustration of green terrace fields and a walking trail in Al Namas", ar: "رسم أصلي لمدرجات خضراء ومسار للمشي في النماص" } }
    },
    {
      id: "highland-studio", category: "culture", location: { en: "Abha", ar: "أبها" }, title: { en: "Highland Studio", ar: "استوديو المرتفعات" },
      description: { en: "A fictional creative room for seeing colour, pattern, and highland-inspired stories together.", ar: "مساحة إبداعية خيالية تجتمع فيها الألوان والنقوش وحكايات المرتفعات." }, tags: { en: ["Design", "Indoors"], ar: ["تصميم", "في الداخل"] }, duration: 45, mapQuery: "Highland Studio, Abha, Saudi Arabia", gradient: "rose",
      image: { src: "assets/destinations/highland-studio.svg", width: 800, height: 500, alt: { en: "Original illustration of a colourful highland art studio", ar: "رسم أصلي لاستوديو فني ملون في المرتفعات" } }
    },
    {
      id: "hayz-coffee", category: "food", location: { en: "Abha", ar: "أبها" }, title: { en: "Hayz Coffee", ar: "كوفي حيز" },
      description: { en: "A casual coffee stop for a short pause between highland plans.", ar: "محطة قهوة هادئة لتوقف قصير بين خطط المرتفعات." }, tags: { en: ["Coffee break", "Casual stop"], ar: ["استراحة قهوة", "توقف هادئ"] }, duration: 40, mapQuery: "كوفي حيز أبها", gradient: "honey",
      image: { src: "assets/destinations/hayz-coffee.svg", width: 800, height: 500, alt: { en: "Original illustration of a warm coffee cup and pastry on a café table", ar: "رسم أصلي لفنجان قهوة دافئ ومعجنات على طاولة مقهى" } }
    },
    {
      id: "nair-coffee", category: "food", location: { en: "Abha", ar: "أبها" }, title: { en: "Nair Coffee", ar: "كوفي نير" },
      description: { en: "A simple café stop for coffee and an unhurried moment in the day.", ar: "محطة مقهى بسيطة للقهوة ولحظة هادئة خلال اليوم." }, tags: { en: ["Coffee break", "Slow moment"], ar: ["استراحة قهوة", "لحظة هادئة"] }, duration: 40, mapQuery: "كوفي نير أبها", gradient: "clay",
      image: { src: "assets/destinations/nair-coffee.svg", width: 800, height: 500, alt: { en: "Original illustration of a coffee cup beside a sunlit café window", ar: "رسم أصلي لفنجان قهوة بجانب نافذة مقهى مضيئة" } }
    },
    {
      id: "row-coffee", category: "food", location: { en: "Abha", ar: "أبها" }, title: { en: "Row Coffee", ar: "رو كوفي" },
      description: { en: "A relaxed coffee stop to add a gentle pause to a day around Abha.", ar: "محطة قهوة مريحة لإضافة استراحة لطيفة إلى يوم في أبها." }, tags: { en: ["Coffee break", "Relaxed"], ar: ["استراحة قهوة", "استرخاء"] }, duration: 45, mapQuery: "Row Coffee Abha", gradient: "sage",
      image: { src: "assets/destinations/row-coffee.svg", width: 800, height: 500, alt: { en: "Original illustration of iced coffee and a small notebook on a café table", ar: "رسم أصلي لقهوة باردة ودفتر صغير على طاولة مقهى" } }
    },
    {
      id: "medhal-coffee", category: "food", location: { en: "Abha", ar: "أبها" }, title: { en: "Medhal Coffee", ar: "كوفي مدهال" },
      description: { en: "A neutral coffee stop for a quick drink and a quiet reset.", ar: "محطة قهوة هادئة لمشروب سريع واستراحة قصيرة." }, tags: { en: ["Quick pause", "Coffee"], ar: ["استراحة سريعة", "قهوة"] }, duration: 35, mapQuery: "كوفي مدهال أبها", gradient: "mist",
      image: { src: "assets/destinations/medhal-coffee.svg", width: 800, height: 500, alt: { en: "Original illustration of a coffee pot and cup on a patterned café table", ar: "رسم أصلي لدلة وفنجان قهوة على طاولة مقهى مزخرفة" } }
    },
    {
      id: "prime-cut", category: "food", location: { en: "Abha", ar: "أبها" }, title: { en: "Prime Cut", ar: "Prime Cut" },
      description: { en: "A relaxed restaurant stop for a considered meal during a day around Abha.", ar: "محطة مطعم هادئة لوجبة متأنية خلال يوم في أبها." }, visitorTip: { en: "Consider checking current opening times before you go.", ar: "تحقق من أوقات العمل الحالية قبل الزيارة." }, tags: { en: ["Restaurant", "Meal stop"], ar: ["مطعم", "توقف للوجبة"] }, duration: 75, mapQuery: "Prime Cut Cafe Abha", gradient: "clay",
      image: { src: "assets/destinations/prime-cut.svg", width: 800, height: 500, alt: { en: "Original illustration of a warm restaurant table with a plated meal", ar: "رسم أصلي لطاولة مطعم دافئة مع طبق مُقدَّم" } }
    },
    {
      id: "rwd-basil", category: "food", location: { en: "Abha", ar: "أبها" }, title: { en: "Rwd Basil", ar: "Rwd Basil" },
      description: { en: "A simple restaurant stop for a meal and an unhurried pause in the day.", ar: "محطة مطعم بسيطة لوجبة واستراحة هادئة خلال اليوم." }, visitorTip: { en: "Use the Maps search to confirm the current location before leaving.", ar: "استخدم بحث الخرائط لتأكيد الموقع الحالي قبل المغادرة." }, tags: { en: ["Restaurant", "Relaxed meal"], ar: ["مطعم", "وجبة هادئة"] }, duration: 70, mapQuery: "Rwd Basil Abha", gradient: "sage",
      image: { src: "assets/destinations/rwd-basil.svg", width: 800, height: 500, alt: { en: "Original illustration of a restaurant table with herbs and shared dishes", ar: "رسم أصلي لطاولة مطعم مع أعشاب وأطباق مشتركة" } }
    }
  ],
  examplePlan: ["cloudline-park", "juniper-table", "al-namas-overlook"],
  weather: {
    sunny: { label: { en: "Sunny & bright", ar: "مشمس ومشرق" }, advice: { en: "Bring a light layer for the breeze, sun protection, water, and comfortable walking shoes.", ar: "أحضر طبقة خفيفة للنسيم وواقيًا من الشمس وماءً وحذاءً مريحًا للمشي." } },
    cool: { label: { en: "Cool highland air", ar: "أجواء مرتفعات باردة" }, advice: { en: "Choose a warm mid-layer, closed shoes, and a light scarf for shaded overlooks.", ar: "اختر طبقة متوسطة دافئة وحذاءً مغلقًا ووشاحًا خفيفًا للإطلالات المظللة." } },
    rainy: { label: { en: "Rainy possibility", ar: "احتمال أمطار" }, advice: { en: "Pack a waterproof outer layer, shoes with grip, and a small cover for your bag.", ar: "احمل طبقة خارجية مقاومة للماء وحذاءً ثابتًا وغطاءً صغيرًا لحقيبتك." } },
    foggy: { label: { en: "Foggy & misty", ar: "ضبابي ورطب" }, advice: { en: "Wear warm layers and grippy shoes; leave extra time and keep viewpoint plans flexible.", ar: "ارتدِ طبقات دافئة وحذاءً ثابتًا؛ امنح نفسك وقتًا إضافيًا واجعل خطط الإطلالات مرنة." } }
  },
  copy: {
    en: {
      heroEyebrow: "A quieter way to explore", heroTitle: "Find your rhythm in the highlands.", heroDescription: "Choose a few special stops across Abha and Al Namas, then keep your day beautifully simple.", explorePlaces: "Explore places", loadExample: "Load example plan", offlineNote: "Works offline · Your choices stay on this device",
      discoverEyebrow: "See the landscape", discoverTitle: "Discover Abha", discoverDescription: "A place for a short local video of Abha’s misty highlands when you are ready to add one.", discoverPlay: "Play preview", discoverPlaceholder: "This offline sample includes a poster, not a video file. Add a licensed local MP4 to enable playback.", discoverUnavailable: "No playable local video is configured yet. See the README for replacement steps.", discoverVideoTitle: "Discover Abha video", discoverYoutube: "Watch on YouTube",
      yourDayEyebrow: "Your little itinerary", tripTitle: "Today’s trip plan", clearPlan: "Clear plan", packingEyebrow: "Pack thoughtfully", weatherTitle: "Clothing advice", weatherLabel: "Choose a planning condition", weatherDisclaimer: "Planning guidance only — check current local conditions before leaving.",
      guideEyebrow: "Make room for detours", guideTitle: "Places worth keeping close", visitorTip: "Visitor tip", showFavorites: "Favorites", footerGuide: "A made-up sample guide for thoughtful visitors.", footerPrivacy: "Favorites and plans are saved only in your browser.", all: "All places", addedToPlan: "Added to plan", addToPlan: "Add to plan", removeFromPlan: "Remove from plan", addFavorite: "Save favorite", removeFavorite: "Remove favorite", openMaps: "Open in Google Maps", mapsNote: "Opens Google Maps in a new tab", duration: "min", noPlaces: "Nothing matches this view yet.", noPlacesHint: "Try another category or show all places.", showAll: "Show all places", noPlan: "Your plan is open for a good idea.", noPlanHint: "Add a place that feels right, or start with our example plan.", planStops: "stops", planMinutes: "minutes of unhurried exploring", moveUp: "Move up", moveDown: "Move down", remove: "Remove", inPlan: "In plan", favorite: "Favorite", statusAdded: "{place} was added to your plan.", statusRemoved: "{place} was removed from your plan.", statusSaved: "{place} was saved to favorites.", statusUnsaved: "{place} was removed from favorites.", statusLoaded: "The example plan is ready to explore.", statusCleared: "Your trip plan was cleared.", switchTheme: "Switch to dark mode", switchLight: "Switch to light mode", switchArabic: "Switch to Arabic", switchEnglish: "Switch to English", showOnlyFavorites: "Show only favorites", showAllPlaces: "Show all places", results: "{count} places to consider"
    },
    ar: {
      heroEyebrow: "طريقة أهدأ للاستكشاف", heroTitle: "اكتشف إيقاعك بين المرتفعات.", heroDescription: "اختر بعض المحطات المميزة في أبها والنماص، واجعل يومك بسيطًا وجميلاً.", explorePlaces: "استكشف الأماكن", loadExample: "حمّل خطة مثال", offlineNote: "يعمل دون اتصال · اختياراتك تبقى على هذا الجهاز",
      discoverEyebrow: "شاهد المشهد الطبيعي", discoverTitle: "اكتشف أبها", discoverDescription: "مساحة لفيديو محلي قصير عن مرتفعات أبها الضبابية عندما تكون مستعدًا لإضافته.", discoverPlay: "تشغيل المعاينة", discoverPlaceholder: "تتضمن هذه النسخة دون اتصال ملصقًا فقط، وليس ملف فيديو. أضف ملف MP4 محليًا ومرخصًا لتفعيل التشغيل.", discoverUnavailable: "لا يوجد فيديو محلي قابل للتشغيل حتى الآن. راجع ملف README لخطوات الاستبدال.", discoverVideoTitle: "فيديو اكتشف أبها", discoverYoutube: "شاهد على YouTube",
      yourDayEyebrow: "مسار يومك الصغير", tripTitle: "خطة رحلتك اليوم", clearPlan: "مسح الخطة", packingEyebrow: "احزم أمتعتك بعناية", weatherTitle: "نصيحة الملابس", weatherLabel: "اختر حالة للتخطيط", weatherDisclaimer: "هذه إرشادات للتخطيط فقط — تحقق من الأحوال المحلية الحالية قبل المغادرة.",
      guideEyebrow: "اترك مجالاً للمنعطفات الجميلة", guideTitle: "أماكن تستحق أن تبقى قريبة", visitorTip: "نصيحة للزائر", showFavorites: "المفضلة", footerGuide: "دليل تجريبي ببيانات خيالية للزوار المتأملين.", footerPrivacy: "تُحفظ المفضلة والخطط في متصفحك فقط.", all: "كل الأماكن", addedToPlan: "ضمن الخطة", addToPlan: "أضف إلى الخطة", removeFromPlan: "أزل من الخطة", addFavorite: "احفظ في المفضلة", removeFavorite: "أزل من المفضلة", openMaps: "افتح في خرائط Google", mapsNote: "تفتح خرائط Google في علامة تبويب جديدة", duration: "دقيقة", noPlaces: "لا توجد أماكن مطابقة لهذا العرض الآن.", noPlacesHint: "جرّب فئة أخرى أو اعرض كل الأماكن.", showAll: "عرض كل الأماكن", noPlan: "خطتك تنتظر فكرة جميلة.", noPlanHint: "أضف مكانًا يعجبك، أو ابدأ بخطة المثال.", planStops: "محطات", planMinutes: "دقيقة للاستكشاف بهدوء", moveUp: "نقل للأعلى", moveDown: "نقل للأسفل", remove: "إزالة", inPlan: "ضمن الخطة", favorite: "مفضلة", statusAdded: "تمت إضافة {place} إلى خطتك.", statusRemoved: "تمت إزالة {place} من خطتك.", statusSaved: "تم حفظ {place} في المفضلة.", statusUnsaved: "تمت إزالة {place} من المفضلة.", statusLoaded: "خطة المثال جاهزة للاستكشاف.", statusCleared: "تم مسح خطة رحلتك.", switchTheme: "التبديل إلى الوضع الداكن", switchLight: "التبديل إلى الوضع الفاتح", switchArabic: "التبديل إلى العربية", switchEnglish: "التبديل إلى الإنجليزية", showOnlyFavorites: "عرض المفضلة فقط", showAllPlaces: "عرض كل الأماكن", results: "{count} أماكن للاختيار"
    }
  }
};
