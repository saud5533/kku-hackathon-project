window.ABHA_VISITOR_GUIDE_DATA = {
  media: {
    hero: {
      src: "assets/abha-mountains-fog.svg",
      width: 1200,
      height: 900,
      alt: { en: "Original illustration of fog drifting over green mountain ridges in Abha", ar: "رسم أصلي لضباب ينساب فوق سلاسل الجبال الخضراء في أبها" }
    },
    discoverVideo: {
      provider: "mp4",
      posterSrc: "assets/discover-abha-poster.svg",
      posterWidth: 1600,
      posterHeight: 900,
      posterAlt: { en: "Original illustrated poster of misty Abha mountains and a winding highland path", ar: "ملصق مرسوم أصلي لجبال أبها الضبابية وطريق متعرج في المرتفعات" },
      localMp4Src: "assets/abha-discover-video.mp4",
      videoWidth: 848,
      videoHeight: 480,
      youtubeEmbedUrl: "",
      captions: { en: "", ar: "" }
    },
    naturalVideo: {
      provider: "mp4",
      areaId: "natural",
      afterDestinationId: "asir-overlook",
      posterSrc: "assets/southern-mountains-poster.svg",
      posterWidth: 480,
      posterHeight: 848,
      posterAlt: { en: "Original illustrated poster of misty southern mountain ridges", ar: "ملصق مرسوم أصلي لسلاسل الجبال الجنوبية الضبابية" },
      localMp4Src: "assets/southern-mountains-video.mp4",
      videoWidth: 480,
      videoHeight: 848,
      captions: { en: "", ar: "" },
      content: {
        en: { eyebrow: "Watch the landscape", title: "Southern Mountains", description: "A short local nature video of the mountain landscape, ready to play with native controls.", videoLabel: "Southern Mountains nature video", unavailable: "The local mountain video could not be played. The guide remains available offline." },
        ar: { eyebrow: "شاهد الطبيعة", title: "الجبال الجنوبية", description: "فيديو محلي قصير للطبيعة الجبلية، جاهز للتشغيل باستخدام عناصر التحكم الأصلية.", videoLabel: "فيديو طبيعة الجبال الجنوبية", unavailable: "تعذر تشغيل فيديو الجبال المحلي. يظل الدليل متاحًا دون اتصال." }
      }
    }
  },
  areas: [
    {
      id: "natural",
      targetId: "natural-attractions",
      eyebrow: { en: "Fresh air and wide views", ar: "هواء نقي وإطلالات واسعة" },
      title: { en: "Natural Attractions", ar: "المعالم الطبيعية" },
      description: { en: "Slow down among misty hills, scenic viewpoints, and open highland paths.", ar: "تمهّل بين التلال الضبابية والإطلالات الجميلة ومسارات المرتفعات المفتوحة." }
    },
    {
      id: "culture",
      targetId: "cultural-arts",
      eyebrow: { en: "Stories, colour, and craft", ar: "حكايات وألوان وحرف" },
      title: { en: "Cultural & Arts", ar: "الثقافة والفنون" },
      description: { en: "Make time for local patterns, creative corners, and an artful walk through the city.", ar: "خصص وقتًا للنقوش المحلية والزوايا الإبداعية وجولة فنية هادئة في المدينة." }
    },
    {
      id: "cafes",
      targetId: "cafes",
      eyebrow: { en: "A gentle coffee pause", ar: "استراحة قهوة هادئة" },
      title: { en: "Cafes", ar: "المقاهي" },
      description: { en: "Choose a simple coffee stop between highland plans.", ar: "اختر محطة قهوة بسيطة بين خطط المرتفعات." }
    },
    {
      id: "restaurants",
      targetId: "restaurants",
      eyebrow: { en: "Make room for a meal", ar: "اترك وقتًا للوجبة" },
      title: { en: "Restaurants", ar: "المطاعم" },
      description: { en: "Set aside an unhurried meal during a day around Abha.", ar: "خصص وقتًا لوجبة هادئة خلال يومك في أبها." }
    }
  ],
  destinations: [
    {
      id: "asir-overlook", area: "natural", location: { en: "Asir", ar: "عسير" }, title: { en: "Asir", ar: "Asir" },
      description: { en: "A mountain-region stop for wide ridges, cool air, and time to take in the changing highland views.", ar: "محطة جبلية للاستمتاع بالسلاسل الواسعة والهواء العليل وتغيّر إطلالات المرتفعات." }, visitorTip: { en: "Check local road and weather conditions before setting out, especially when mist settles over the mountains.", ar: "تحقق من حالة الطرق والطقس محليًا قبل الانطلاق، خصوصًا عند انتشار الضباب فوق الجبال." }, tags: { en: ["Mountain views", "Highland air"], ar: ["إطلالات جبلية", "هواء المرتفعات"] }, duration: 90, mapQuery: "Asir Mountains, Saudi Arabia", gradient: "lavender",
      image: { src: "assets/destinations/asir-overlook.svg", width: 800, height: 500, alt: { en: "Original illustration of misty mountain ridges in the Asir region", ar: "رسم أصلي لسلاسل جبلية ضبابية في منطقة عسير" } }
    },
    {
      id: "heritage-courtyard", area: "culture", location: { en: "Abha", ar: "أبها" }, title: { en: "Heritage Courtyard", ar: "فناء التراث" },
      description: { en: "A small story-filled courtyard imagined for browsing craft details and local patterns.", ar: "فناء صغير مليء بالقصص لتأمل تفاصيل الحرف والنقوش المحلية." }, tags: { en: ["Craft detail", "Slow browse"], ar: ["حرف يدوية", "تجول هادئ"] }, duration: 60, mapQuery: "Heritage Courtyard, Abha, Saudi Arabia", gradient: "clay",
      image: { src: "assets/destinations/heritage-courtyard.svg", width: 800, height: 500, alt: { en: "Original illustration of a patterned highland heritage courtyard", ar: "رسم أصلي لفناء تراثي في المرتفعات مزين بالنقوش" } },
      video: { provider: "mp4", localMp4Src: "assets/destinations/heritage-courtyard.mp4", videoWidth: 480, videoHeight: 848, captions: { en: "", ar: "" }, label: { en: "Heritage Courtyard video", ar: "فيديو فناء التراث" }, unavailable: { en: "The local Heritage Courtyard video could not be played. The illustration remains available.", ar: "تعذر تشغيل فيديو فناء التراث المحلي. يبقى الرسم التوضيحي متاحًا." } }
    },
    {
      id: "highland-studio", area: "culture", location: { en: "Abha", ar: "أبها" }, title: { en: "Highland Studio", ar: "استوديو المرتفعات" },
      description: { en: "A fictional creative room for seeing colour, pattern, and highland-inspired stories together.", ar: "مساحة إبداعية خيالية تجتمع فيها الألوان والنقوش وحكايات المرتفعات." }, tags: { en: ["Design", "Indoors"], ar: ["تصميم", "في الداخل"] }, duration: 45, mapQuery: "Highland Studio, Abha, Saudi Arabia", gradient: "rose",
      image: { src: "assets/destinations/highland-studio.svg", width: 800, height: 500, alt: { en: "Original illustration of a colourful highland art studio", ar: "رسم أصلي لاستوديو فني ملون في المرتفعات" } },
      video: { provider: "mp4", localMp4Src: "assets/destinations/highland-studio.mp4", videoWidth: 480, videoHeight: 848, captions: { en: "", ar: "" }, label: { en: "Highland Studio video", ar: "فيديو استوديو المرتفعات" }, unavailable: { en: "The local Highland Studio video could not be played. The illustration remains available.", ar: "تعذر تشغيل فيديو استوديو المرتفعات المحلي. يبقى الرسم التوضيحي متاحًا." } }
    },
    {
      id: "art-street", area: "culture", location: { en: "Abha", ar: "أبها" }, title: { en: "Art Street", ar: "Art Street" },
      description: { en: "A colourful cultural walk for noticing outdoor artworks, local patterns, and a creative side of the city.", ar: "جولة ثقافية ملونة لتأمل الأعمال الفنية في الهواء الطلق والنقوش المحلية والجانب الإبداعي من المدينة." }, visitorTip: { en: "Wear comfortable walking shoes and use Maps to check current activities before you go.", ar: "ارتدِ حذاءً مريحًا للمشي واستخدم الخرائط للتحقق من الفعاليات الحالية قبل الزيارة." }, tags: { en: ["Outdoor art", "Cultural walk"], ar: ["فن في الهواء الطلق", "جولة ثقافية"] }, duration: 60, mapQuery: "Art Street Abha Saudi Arabia", gradient: "rose",
      image: { src: "assets/destinations/art-street.svg", width: 800, height: 500, alt: { en: "Original illustration of a colourful outdoor art promenade in Abha", ar: "رسم أصلي لممشى فني خارجي ملون في أبها" } },
      video: { provider: "mp4", localMp4Src: "assets/destinations/art-street.mp4", videoWidth: 848, videoHeight: 480, captions: { en: "", ar: "" }, label: { en: "Art Street video", ar: "فيديو شارع الفن" }, unavailable: { en: "The local Art Street video could not be played. The illustration remains available.", ar: "تعذر تشغيل فيديو شارع الفن المحلي. يبقى الرسم التوضيحي متاحًا." } }
    },
    {
      id: "hayz-coffee", area: "cafes", location: { en: "Abha", ar: "أبها" }, title: { en: "Hayz Coffee", ar: "كوفي حيز" },
      description: { en: "A casual coffee stop for a short pause between highland plans.", ar: "محطة قهوة هادئة لتوقف قصير بين خطط المرتفعات." }, tags: { en: ["Coffee break", "Casual stop"], ar: ["استراحة قهوة", "توقف هادئ"] }, duration: 40, mapQuery: "كوفي حيز أبها", gradient: "honey",
      image: { src: "assets/destinations/hayz-coffee.jpg", width: 720, height: 1280, alt: { en: "H’YZ Coffee storefront in Abha", ar: "واجهة مقهى H’YZ في أبها" } }
    },
    {
      id: "nair-coffee", area: "cafes", location: { en: "Abha", ar: "أبها" }, title: { en: "Nair Coffee", ar: "كوفي نير" },
      description: { en: "A simple café stop for coffee and an unhurried moment in the day.", ar: "محطة مقهى بسيطة للقهوة ولحظة هادئة خلال اليوم." }, tags: { en: ["Coffee break", "Slow moment"], ar: ["استراحة قهوة", "لحظة هادئة"] }, duration: 40, mapQuery: "كوفي نير أبها", gradient: "clay",
      image: { src: "assets/destinations/nair-coffee.jpg", width: 720, height: 1280, alt: { en: "Nair Coffee storefront sign in Abha", ar: "لافتة واجهة مقهى نير في أبها" } }
    },
    {
      id: "row-coffee", area: "cafes", location: { en: "Abha", ar: "أبها" }, title: { en: "Row Coffee", ar: "رو كوفي" },
      description: { en: "A relaxed coffee stop to add a gentle pause to a day around Abha.", ar: "محطة قهوة مريحة لإضافة استراحة لطيفة إلى يوم في أبها." }, tags: { en: ["Coffee break", "Relaxed"], ar: ["استراحة قهوة", "استرخاء"] }, duration: 45, mapQuery: "Row Coffee Abha", gradient: "sage",
      image: { src: "assets/destinations/row-coffee.jpg", width: 720, height: 1280, alt: { en: "Row Coffee night storefront and drive-through in Abha", ar: "واجهة وممر خدمة رو كوفي الليلي في أبها" } }
    },
    {
      id: "prime-cut", area: "restaurants", location: { en: "Abha", ar: "أبها" }, title: { en: "Prime Cut", ar: "Prime Cut" },
      description: { en: "A relaxed restaurant stop for a considered meal during a day around Abha.", ar: "محطة مطعم هادئة لوجبة متأنية خلال يوم في أبها." }, visitorTip: { en: "Consider checking current opening times before you go.", ar: "تحقق من أوقات العمل الحالية قبل الزيارة." }, tags: { en: ["Restaurant", "Meal stop"], ar: ["مطعم", "توقف للوجبة"] }, duration: 75, mapQuery: "Prime Cut Cafe Abha", gradient: "clay",
      image: { src: "assets/destinations/prime-cut.jpg", width: 720, height: 1280, alt: { en: "Prime Cut night storefront and dining area in Abha", ar: "واجهة ومنطقة جلوس برايم كت الليلية في أبها" } }
    },
    {
      id: "rwd-basil", area: "restaurants", location: { en: "Abha", ar: "أبها" }, title: { en: "Rwd Basil", ar: "Rwd Basil" },
      description: { en: "A simple restaurant stop for a meal and an unhurried pause in the day.", ar: "محطة مطعم بسيطة لوجبة واستراحة هادئة خلال اليوم." }, visitorTip: { en: "Use the Maps search to confirm the current location before leaving.", ar: "استخدم بحث الخرائط لتأكيد الموقع الحالي قبل المغادرة." }, tags: { en: ["Restaurant", "Relaxed meal"], ar: ["مطعم", "وجبة هادئة"] }, duration: 70, mapQuery: "Rwd Basil Abha", gradient: "sage",
      image: { src: "assets/destinations/rwd-basil.jpg", width: 719, height: 1280, alt: { en: "Rwd Basil branded table setting in Abha", ar: "طاولة بإعداد يحمل علامة Rwd Basil في أبها" } }
    }
  ],
  southernFood: {
    items: [
      {
        id: "areekah",
        title: "Areekah",
        description: { en: "A comforting southern dish of soft wheat and dates, often finished with honey or ghee.", ar: "طبق جنوبي دافئ من القمح الطري والتمر، ويُقدَّم غالبًا مع العسل أو السمن." },
        image: { src: "assets/foods/areekah.svg", width: 800, height: 500, alt: { en: "Original illustration placeholder of Areekah with dates and honey", ar: "رسم توضيحي بديل للعريكة مع التمر والعسل" } }
      },
      {
        id: "mabthouth",
        title: "Mabthouth",
        description: { en: "A southern wheat dish, gently cooked and served with a rich, warming character.", ar: "طبق جنوبي من القمح يُطهى بهدوء ويُقدَّم بطابع غني ودافئ." },
        image: { src: "assets/foods/mabthouth.svg", width: 800, height: 500, alt: { en: "Original illustration placeholder of Mabthouth", ar: "رسم توضيحي بديل للمبثوث" } }
      },
      {
        id: "tasabee",
        title: "Tasabee",
        description: { en: "A familiar southern dish with a soft texture and comforting, home-style flavour.", ar: "طبق جنوبي مألوف بقوام طري ونكهة منزلية دافئة." },
        image: { src: "assets/foods/tasabee.svg", width: 800, height: 500, alt: { en: "Original illustration placeholder of Tasabee", ar: "رسم توضيحي بديل للتصابيع" } }
      },
      {
        id: "mashghouthah",
        title: "Mashghouthah",
        description: { en: "A hearty southern dish, enjoyed for its generous serving and warming flavours.", ar: "طبق جنوبي مشبع يُستمتع به لحصته السخية ونكهاته الدافئة." },
        image: { src: "assets/foods/mashghouthah.svg", width: 800, height: 500, alt: { en: "Original illustration placeholder of Mashghouthah", ar: "رسم توضيحي بديل للمشغوثة" } }
      },
      {
        id: "tannour-bread",
        title: "Tannour Bread",
        description: { en: "Fresh bread baked in a tannour oven, made to accompany a shared southern meal.", ar: "خبز طازج يُخبز في التنور ويُقدَّم لمرافقة وجبة جنوبية مشتركة." },
        image: { src: "assets/foods/tannour-bread.svg", width: 800, height: 500, alt: { en: "Original illustration placeholder of Tannour Bread", ar: "رسم توضيحي بديل لخبز التنور" } }
      }
    ]
  },
  examplePlan: ["asir-overlook", "heritage-courtyard"],
  localTips: {
    en: ["Check current local conditions before leaving for viewpoints.", "Allow a little extra driving time when mist settles over the highlands.", "Use Maps to confirm a destination before you leave, and keep water and a light layer with you."],
    ar: ["تحقق من الأحوال المحلية الحالية قبل التوجه إلى الإطلالات.", "اترك وقتًا إضافيًا قليلًا للقيادة عندما يستقر الضباب فوق المرتفعات.", "استخدم الخرائط لتأكيد وجهتك قبل المغادرة، واحتفظ بالماء وطبقة خفيفة معك."]
  },
  weather: {
    sunny: { label: { en: "Sunny & bright", ar: "مشمس ومشرق" }, advice: { en: "Bring a light layer for the breeze, sun protection, water, and comfortable walking shoes.", ar: "أحضر طبقة خفيفة للنسيم وواقيًا من الشمس وماءً وحذاءً مريحًا للمشي." } },
    cool: { label: { en: "Cool highland air", ar: "أجواء مرتفعات باردة" }, advice: { en: "Choose a warm mid-layer, closed shoes, and a light scarf for shaded overlooks.", ar: "اختر طبقة متوسطة دافئة وحذاءً مغلقًا ووشاحًا خفيفًا للإطلالات المظللة." } },
    rainy: { label: { en: "Rainy possibility", ar: "احتمال أمطار" }, advice: { en: "Pack a waterproof outer layer, shoes with grip, and a small cover for your bag.", ar: "احمل طبقة خارجية مقاومة للماء وحذاءً ثابتًا وغطاءً صغيرًا لحقيبتك." } },
    foggy: { label: { en: "Foggy & misty", ar: "ضبابي ورطب" }, advice: { en: "Wear warm layers and grippy shoes; leave extra time and keep viewpoint plans flexible.", ar: "ارتدِ طبقات دافئة وحذاءً ثابتًا؛ امنح نفسك وقتًا إضافيًا واجعل خطط الإطلالات مرنة." } }
  },
  copy: {
    en: {
      heroEyebrow: "A quieter way to explore", heroTitle: "Find your rhythm in the highlands.", heroDescription: "Choose a few special stops across Abha and Al Namas, then keep your day beautifully simple.", explorePlaces: "Explore places", loadExample: "Load example plan", offlineNote: "Works offline · Your choices stay on this device",
      discoverEyebrow: "See the landscape", discoverTitle: "Discover Abha", discoverDescription: "Watch a short local video of Abha’s misty highlands, ready when you are.", discoverPlay: "Play preview", discoverPlaceholder: "A short local video is ready to play when you select the preview.", discoverUnavailable: "The local video could not be played. The guide remains available offline.", discoverVideoTitle: "Discover Abha video", discoverYoutube: "Watch on YouTube",
      quickEyebrow: "Choose your next stop", quickTitle: "Explore by area", quickNavLabel: "Quick destination shortcuts", naturalEyebrow: "Fresh air and wide views", naturalTitle: "Natural Attractions", cultureEyebrow: "Stories, colour, and craft", cultureTitle: "Cultural & Arts", cafesEyebrow: "A gentle coffee pause", cafesTitle: "Cafes", restaurantsEyebrow: "Make room for a meal", restaurantsTitle: "Restaurants", southernFoodEyebrow: "A taste of the highlands", southernFoodTitle: "Southern Food", southernFoodDescription: "Discover a few much-loved southern dishes, each shown here with a local image slot ready for a future food photo.",
      yourDayEyebrow: "Your little itinerary", tripTitle: "Today’s trip plan", clearPlan: "Clear plan", favoritesEyebrow: "Saved for later", favoritesTitle: "Favorites", favoritesEmptyTitle: "No favorites saved yet.", favoritesEmptyHint: "Save a place you would like to keep close, and it will appear here.", packingEyebrow: "Pack thoughtfully", weatherTitle: "Clothing advice", weatherLabel: "Choose a planning condition", weatherDisclaimer: "Planning guidance only — check current local conditions before leaving.", localTipsEyebrow: "Know before you go", localTipsTitle: "Local tips",
      visitorTip: "Visitor tip", footerGuide: "A made-up sample guide for thoughtful visitors.", footerPrivacy: "Favorites and plans are saved only in your browser.", addedToPlan: "Added to plan", addToPlan: "Add to plan", removeFromPlan: "Remove from plan", addFavorite: "Save favorite", removeFavorite: "Remove favorite", openMaps: "Open in Google Maps", mapsNote: "Opens Google Maps in a new tab", duration: "min", noPlan: "Your plan is open for a good idea.", noPlanHint: "Add a place that feels right, or start with our example plan.", planStops: "stops", planMinutes: "minutes of unhurried exploring", moveUp: "Move up", moveDown: "Move down", remove: "Remove", inPlan: "In plan", favorite: "Favorite", statusAdded: "{place} was added to your plan.", statusRemoved: "{place} was removed from your plan.", statusSaved: "{place} was saved to favorites.", statusUnsaved: "{place} was removed from favorites.", statusLoaded: "The example plan is ready to explore.", statusCleared: "Your trip plan was cleared.", switchTheme: "Switch to dark mode", switchLight: "Switch to light mode", switchArabic: "Switch to Arabic", switchEnglish: "Switch to English"
    },
    ar: {
      heroEyebrow: "طريقة أهدأ للاستكشاف", heroTitle: "اكتشف إيقاعك بين المرتفعات.", heroDescription: "اختر بعض المحطات المميزة في أبها والنماص، واجعل يومك بسيطًا وجميلاً.", explorePlaces: "استكشف الأماكن", loadExample: "حمّل خطة مثال", offlineNote: "يعمل دون اتصال · اختياراتك تبقى على هذا الجهاز",
      discoverEyebrow: "شاهد المشهد الطبيعي", discoverTitle: "اكتشف أبها", discoverDescription: "شاهد فيديو محليًا قصيرًا عن مرتفعات أبها الضبابية عندما تكون مستعدًا.", discoverPlay: "تشغيل المعاينة", discoverPlaceholder: "فيديو محلي قصير جاهز للتشغيل عند اختيار المعاينة.", discoverUnavailable: "تعذر تشغيل الفيديو المحلي. يظل الدليل متاحًا دون اتصال.", discoverVideoTitle: "فيديو اكتشف أبها", discoverYoutube: "شاهد على YouTube",
      quickEyebrow: "اختر محطتك التالية", quickTitle: "استكشف حسب المنطقة", quickNavLabel: "اختصارات سريعة للوجهات", naturalEyebrow: "هواء نقي وإطلالات واسعة", naturalTitle: "المعالم الطبيعية", cultureEyebrow: "حكايات وألوان وحرف", cultureTitle: "الثقافة والفنون", cafesEyebrow: "استراحة قهوة هادئة", cafesTitle: "المقاهي", restaurantsEyebrow: "اترك وقتًا للوجبة", restaurantsTitle: "المطاعم", southernFoodEyebrow: "نكهات من المرتفعات", southernFoodTitle: "الأكلات الجنوبية", southernFoodDescription: "تعرّف على عدد من الأطباق الجنوبية المحببة، مع مساحة لصورة محلية يمكن استبدالها لاحقًا لكل طبق.",
      yourDayEyebrow: "مسار يومك الصغير", tripTitle: "خطة رحلتك اليوم", clearPlan: "مسح الخطة", favoritesEyebrow: "محفوظة لوقت لاحق", favoritesTitle: "المفضلة", favoritesEmptyTitle: "لا توجد أماكن محفوظة بعد.", favoritesEmptyHint: "احفظ مكانًا تريد الاحتفاظ به قريبًا وسيظهر هنا.", packingEyebrow: "احزم أمتعتك بعناية", weatherTitle: "نصيحة الملابس", weatherLabel: "اختر حالة للتخطيط", weatherDisclaimer: "هذه إرشادات للتخطيط فقط — تحقق من الأحوال المحلية الحالية قبل المغادرة.", localTipsEyebrow: "اعرف قبل أن تذهب", localTipsTitle: "نصائح محلية",
      visitorTip: "نصيحة للزائر", footerGuide: "دليل تجريبي ببيانات خيالية للزوار المتأملين.", footerPrivacy: "تُحفظ المفضلة والخطط في متصفحك فقط.", addedToPlan: "ضمن الخطة", addToPlan: "أضف إلى الخطة", removeFromPlan: "أزل من الخطة", addFavorite: "احفظ في المفضلة", removeFavorite: "أزل من المفضلة", openMaps: "افتح في خرائط Google", mapsNote: "تفتح خرائط Google في علامة تبويب جديدة", duration: "دقيقة", noPlan: "خطتك تنتظر فكرة جميلة.", noPlanHint: "أضف مكانًا يعجبك، أو ابدأ بخطة المثال.", planStops: "محطات", planMinutes: "دقيقة للاستكشاف بهدوء", moveUp: "نقل للأعلى", moveDown: "نقل للأسفل", remove: "إزالة", inPlan: "ضمن الخطة", favorite: "مفضلة", statusAdded: "تمت إضافة {place} إلى خطتك.", statusRemoved: "تمت إزالة {place} من خطتك.", statusSaved: "تم حفظ {place} في المفضلة.", statusUnsaved: "تمت إزالة {place} من المفضلة.", statusLoaded: "خطة المثال جاهزة للاستكشاف.", statusCleared: "تم مسح خطة رحلتك.", switchTheme: "التبديل إلى الوضع الداكن", switchLight: "التبديل إلى الوضع الفاتح", switchArabic: "التبديل إلى العربية", switchEnglish: "التبديل إلى الإنجليزية"
    }
  }
};
