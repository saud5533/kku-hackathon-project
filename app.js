(() => {
  "use strict";

  const data = window.ABHA_VISITOR_GUIDE_DATA;
  if (!data) return;

  const storageKeys = {
    favorites: "abha-guide-favorites",
    plan: "abha-guide-trip-plan",
    theme: "abha-guide-theme",
    language: "abha-guide-language",
    weather: "abha-guide-weather"
  };

  const validIds = new Set(data.destinations.map((destination) => destination.id));
  const validWeather = new Set(Object.keys(data.weather));
  const mediaQuery = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  const safeRead = (key, fallback) => {
    try {
      const value = window.localStorage.getItem(key);
      return value === null ? fallback : JSON.parse(value);
    } catch (_) {
      return fallback;
    }
  };

  const safeWrite = (key, value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (_) {
      // The guide stays usable when browser storage is unavailable.
    }
  };

  const validList = (value) => Array.isArray(value) ? [...new Set(value.filter((id) => validIds.has(id)))] : [];
  const validTheme = (value) => value === "light" || value === "dark" ? value : (mediaQuery && mediaQuery.matches ? "dark" : "light");
  const validLanguage = (value) => value === "ar" || value === "en" ? value : "en";

  const storedFavorites = safeRead(storageKeys.favorites, []);
  const storedPlan = safeRead(storageKeys.plan, []);
  const favorites = validList(storedFavorites);
  const plan = validList(storedPlan);
  if (JSON.stringify(favorites) !== JSON.stringify(storedFavorites)) safeWrite(storageKeys.favorites, favorites);
  if (JSON.stringify(plan) !== JSON.stringify(storedPlan)) safeWrite(storageKeys.plan, plan);

  const state = {
    language: validLanguage(safeRead(storageKeys.language, "en")),
    theme: validTheme(safeRead(storageKeys.theme, null)),
    favorites,
    plan,
    weather: validWeather.has(safeRead(storageKeys.weather, "sunny")) ? safeRead(storageKeys.weather, "sunny") : "sunny"
  };

  const elements = {
    theme: document.getElementById("theme-toggle"),
    language: document.getElementById("language-toggle"),
    heroImage: document.getElementById("hero-image"),
    discoverPlayer: document.getElementById("discover-player"),
    discoverNote: document.getElementById("discover-note"),
    quickLinks: document.getElementById("quick-links"),
    destinationAreas: document.getElementById("destination-areas"),
    areaGrids: Object.fromEntries(data.areas.map((area) => [area.id, document.getElementById(`${area.id}-grid`)])),
    favoritesGrid: document.getElementById("favorites-grid"),
    favoriteCount: document.getElementById("favorite-count"),
    southernFoodGrid: document.getElementById("southern-food-grid"),
    tripPlanner: document.getElementById("trip-planner"),
    loadExample: document.getElementById("load-example"),
    clearPlan: document.getElementById("clear-plan"),
    weather: document.getElementById("weather-select"),
    weatherAdvice: document.getElementById("weather-advice"),
    localTips: document.getElementById("local-tips-list"),
    status: document.getElementById("status-message")
  };

  const text = (key) => data.copy[state.language][key] || key;
  const englishNamedVenues = new Set(["hayz-coffee", "nair-coffee", "row-coffee", "prime-cut", "rwd-basil", "art-street"]);
  const getDestination = (id) => data.destinations.find((destination) => destination.id === id);
  const getDisplayTitle = (destination) => englishNamedVenues.has(destination.id) ? destination.title.en : destination.title[state.language];
  const mapUrl = (query) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  const localPath = (path) => typeof path === "string" && !/^(?:https?:|\/|[A-Za-z]:|\/\/)/.test(path);
  const safeText = (value) => String(value || "").replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", "\"": "&quot;" }[character]));
  const showImageFallback = (event) => event.currentTarget.closest(".media-fallback")?.classList.add("has-image-error");
  const safeEmbedUrl = (url) => typeof url === "string" && /^https:\/\/(?:www\.)?(?:youtube\.com|youtube-nocookie\.com)\/embed\//.test(url) ? url : "";
  const pluralStops = (count) => `${count} ${text("planStops")}`;
  const interpolate = (template, values) => Object.entries(values).reduce((result, [key, value]) => result.replace(`{${key}}`, value), template);

  const saveState = (key, value) => safeWrite(storageKeys[key], value);

  function setStatus(message) {
    elements.status.textContent = "";
    window.setTimeout(() => { elements.status.textContent = message; }, 20);
  }

  function applyDocumentPreferences() {
    document.documentElement.dataset.theme = state.theme;
    document.documentElement.lang = state.language;
    document.documentElement.dir = state.language === "ar" ? "rtl" : "ltr";
    elements.theme.setAttribute("aria-pressed", String(state.theme === "dark"));
    elements.theme.setAttribute("aria-label", state.theme === "dark" ? text("switchLight") : text("switchTheme"));
    elements.language.textContent = state.language === "en" ? "العربية" : "English";
    elements.language.setAttribute("aria-label", state.language === "en" ? text("switchArabic") : text("switchEnglish"));
    elements.quickLinks.setAttribute("aria-label", text("quickNavLabel"));
  }

  function renderStaticCopy() {
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = text(node.dataset.i18n);
    });
    elements.clearPlan.disabled = state.plan.length === 0;
  }

  function renderMedia() {
    const hero = data.media.hero;
    elements.heroImage.src = hero.src;
    elements.heroImage.alt = hero.alt[state.language];
    elements.heroImage.width = hero.width;
    elements.heroImage.height = hero.height;

    const video = data.media.discoverVideo;
    elements.discoverNote.textContent = video.provider === "placeholder" ? text("discoverPlaceholder") : text("discoverPlaceholder");
    elements.discoverPlayer.innerHTML = `
      <div class="video-frame media-fallback">
        <img class="discover-poster" src="${safeText(video.posterSrc)}" alt="${safeText(video.posterAlt[state.language])}" width="${video.posterWidth}" height="${video.posterHeight}">
        <div class="media-art-fallback" aria-hidden="true"></div>
        <button class="video-play" type="button" data-action="play-video" aria-label="${safeText(text("discoverPlay"))}">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m8 5 11 7-11 7Z"/></svg><span>${text("discoverPlay")}</span>
        </button>
      </div>
    `;
    elements.discoverPlayer.querySelector("img").addEventListener("error", showImageFallback, { once: true });
  }

  function playDiscoverVideo() {
    const video = data.media.discoverVideo;
    if (video.provider === "mp4" && localPath(video.localMp4Src)) {
      const captions = video.captions?.[state.language];
      elements.discoverPlayer.innerHTML = `
        <div class="video-frame video-frame-native" style="--video-aspect-ratio: ${video.videoWidth} / ${video.videoHeight}"><video controls playsinline preload="metadata" poster="${safeText(video.posterSrc)}" aria-label="${safeText(text("discoverVideoTitle"))}" width="${video.videoWidth}" height="${video.videoHeight}">
          <source src="${safeText(video.localMp4Src)}" type="video/mp4">${captions && localPath(captions) ? `<track kind="captions" src="${safeText(captions)}" srclang="${state.language}" label="${state.language}" default>` : ""}
        </video></div>`;
      const player = elements.discoverPlayer.querySelector("video");
      player.addEventListener("error", () => { renderMedia(); setStatus(text("discoverUnavailable")); }, { once: true });
      player.play().catch(() => {});
      return;
    }

    const embedUrl = video.provider === "youtube" ? safeEmbedUrl(video.youtubeEmbedUrl) : "";
    if (embedUrl) {
      elements.discoverPlayer.innerHTML = `<div class="video-frame"><iframe src="${safeText(embedUrl)}" title="${safeText(text("discoverVideoTitle"))}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
      return;
    }

    setStatus(text("discoverUnavailable"));
  }

  function renderQuickLinks() {
    elements.quickLinks.innerHTML = data.areas.map((area) => `
      <a class="quick-link" href="#${safeText(area.targetId)}">${safeText(area.title[state.language])}</a>
    `).join("");
  }

  function renderWeather() {
    elements.weather.innerHTML = Object.entries(data.weather).map(([id, detail]) => (
      `<option value="${id}" ${state.weather === id ? "selected" : ""}>${detail.label[state.language]}</option>`
    )).join("");
    elements.weatherAdvice.textContent = data.weather[state.weather].advice[state.language];
  }

  function renderLocalTips() {
    elements.localTips.innerHTML = data.localTips[state.language].map((tip) => `<li>${safeText(tip)}</li>`).join("");
  }

  function renderDestinationCard(destination) {
    const isFavorite = state.favorites.includes(destination.id);
    const inPlan = state.plan.includes(destination.id);
    const title = getDisplayTitle(destination);
    const visitorTip = destination.visitorTip?.[state.language];
    const tags = destination.tags[state.language].map((tag) => `<span>${safeText(tag)}</span>`).join("");
    const video = destination.video;
    const hasVideo = video?.provider === "mp4" && localPath(video.localMp4Src);
    const media = hasVideo ? `
          <video class="place-video" controls playsinline preload="metadata" poster="${safeText(destination.image.src)}" aria-label="${safeText(video.label?.[state.language])}" width="${video.videoWidth}" height="${video.videoHeight}">
            <source src="${safeText(video.localMp4Src)}" type="video/mp4">${video.captions?.[state.language] && localPath(video.captions[state.language]) ? `<track kind="captions" src="${safeText(video.captions[state.language])}" srclang="${state.language}" label="${state.language}" default>` : ""}
          </video>
          <img class="place-image place-video-fallback" src="${safeText(destination.image.src)}" alt="${safeText(destination.image.alt[state.language])}" width="${destination.image.width}" height="${destination.image.height}" loading="lazy" decoding="async">
          <p class="place-video-error" hidden>${safeText(video.unavailable?.[state.language])}</p>` : `
          <img class="place-image" src="${safeText(destination.image.src)}" alt="${safeText(destination.image.alt[state.language])}" width="${destination.image.width}" height="${destination.image.height}" loading="lazy" decoding="async">`;
    return `
      <article class="place-card">
        <div class="place-scene scene-${destination.gradient} media-fallback ${hasVideo ? "has-video" : ""}"${hasVideo ? ` style="--place-video-aspect-ratio: ${video.videoWidth} / ${video.videoHeight}"` : ""}>
          ${media}
          <div class="media-art-fallback" aria-hidden="true"></div>
        </div>
        <div class="place-card-body">
          <div class="place-card-topline">
            <p class="location-label">${safeText(destination.location[state.language])}</p>
            <button class="heart-button ${isFavorite ? "is-saved" : ""}" type="button" data-action="favorite" data-id="${destination.id}" aria-label="${isFavorite ? text("removeFavorite") : text("addFavorite")}: ${safeText(title)}" aria-pressed="${isFavorite}">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m12 20-1.6-1.45C4.7 13.4 1 10.04 1 6.9 1 4.34 3 2.35 5.55 2.35c1.45 0 2.84.68 3.75 1.76a3.57 3.57 0 0 1 5.4 0 4.92 4.92 0 0 1 3.75-1.76C21 2.35 23 4.34 23 6.9c0 3.14-3.7 6.5-9.4 11.66L12 20Z"/></svg>
            </button>
          </div>
          <h3>${safeText(title)}</h3>
          <p class="place-description">${safeText(destination.description[state.language])}</p>
          ${visitorTip ? `<p class="visitor-tip"><strong>${text("visitorTip")}:</strong> ${safeText(visitorTip)}</p>` : ""}
          <div class="tag-list">${tags}</div>
          <div class="place-meta"><span>${destination.duration} ${text("duration")}</span><span>${inPlan ? text("inPlan") : ""}</span></div>
          <div class="card-actions">
            <button class="card-action plan-action ${inPlan ? "is-selected" : ""}" type="button" data-action="plan" data-id="${destination.id}">${inPlan ? text("removeFromPlan") : text("addToPlan")}</button>
            <a class="card-action maps-action" href="${mapUrl(destination.mapQuery)}" target="_blank" rel="noopener noreferrer" aria-label="${text("openMaps")}: ${safeText(title)}">${text("openMaps")}</a>
          </div>
        </div>
      </article>
    `;
  }

  function bindCardMediaFallbacks(scope) {
    scope.querySelectorAll(".place-image").forEach((image) => image.addEventListener("error", showImageFallback, { once: true }));
    scope.querySelectorAll(".place-scene.has-video").forEach((scene) => {
      const player = scene.querySelector(".place-video");
      const fallback = scene.querySelector(".place-video-fallback");
      const error = scene.querySelector(".place-video-error");
      if (!player || !fallback || !error) return;
      player.addEventListener("error", () => {
        scene.classList.add("has-video-error");
        error.hidden = false;
      }, { once: true });
    });
  }

  function renderNaturalVideoCard(video) {
    const content = video.content?.[state.language];
    if (!content || video.provider !== "mp4" || !localPath(video.localMp4Src) || !localPath(video.posterSrc)) return "";
    return `
      <article class="natural-video-card">
        <div class="natural-video-copy">
          <p class="eyebrow">${safeText(content.eyebrow)}</p>
          <h3>${safeText(content.title)}</h3>
          <p>${safeText(content.description)}</p>
        </div>
        <div class="natural-video-frame media-fallback" style="--natural-video-aspect-ratio: ${video.videoWidth} / ${video.videoHeight}">
          <video controls playsinline preload="metadata" poster="${safeText(video.posterSrc)}" aria-label="${safeText(content.videoLabel)}" width="${video.videoWidth}" height="${video.videoHeight}">
            <source src="${safeText(video.localMp4Src)}" type="video/mp4">${video.captions?.[state.language] && localPath(video.captions[state.language]) ? `<track kind="captions" src="${safeText(video.captions[state.language])}" srclang="${state.language}" label="${state.language}" default>` : ""}
          </video>
          <div class="media-art-fallback" aria-hidden="true"></div>
          <p class="natural-video-error" hidden>${safeText(content.unavailable)}</p>
        </div>
      </article>
    `;
  }

  function bindNaturalVideoFallbacks(scope) {
    scope.querySelectorAll(".natural-video-frame").forEach((frame) => {
      const player = frame.querySelector("video");
      const error = frame.querySelector(".natural-video-error");
      if (!player || !error) return;
      player.addEventListener("error", () => {
        frame.classList.add("has-image-error");
        error.hidden = false;
      }, { once: true });
    });
  }

  function renderDestinationAreas() {
    const naturalVideo = data.media.naturalVideo;
    data.areas.forEach((area) => {
      const grid = elements.areaGrids[area.id];
      const places = data.destinations.filter((destination) => destination.area === area.id);
      grid.innerHTML = places.map((destination) => `${renderDestinationCard(destination)}${naturalVideo?.areaId === area.id && naturalVideo.afterDestinationId === destination.id ? renderNaturalVideoCard(naturalVideo) : ""}`).join("");
      bindCardMediaFallbacks(grid);
      bindNaturalVideoFallbacks(grid);
    });
  }

  function renderSouthernFoodGallery() {
    const foods = data.southernFood?.items || [];
    elements.southernFoodGrid.innerHTML = foods.map((food) => `
      <article class="food-card">
        <div class="food-scene media-fallback">
          <img class="food-image" src="${safeText(food.image.src)}" alt="${safeText(food.image.alt[state.language])}" width="${food.image.width}" height="${food.image.height}" loading="lazy" decoding="async">
          <div class="media-art-fallback" aria-hidden="true"></div>
        </div>
        <div class="food-card-body">
          <h3>${safeText(food.title)}</h3>
          <p>${safeText(food.description[state.language])}</p>
        </div>
      </article>
    `).join("");

    elements.southernFoodGrid.querySelectorAll(".food-image").forEach((image) => image.addEventListener("error", showImageFallback, { once: true }));
  }

  function renderFavorites() {
    const savedDestinations = state.favorites.map(getDestination).filter(Boolean);
    elements.favoriteCount.textContent = savedDestinations.length;
    elements.favoriteCount.setAttribute("aria-label", `${savedDestinations.length} ${text("favoritesTitle")}`);

    if (!savedDestinations.length) {
      elements.favoritesGrid.innerHTML = `
        <div class="empty-state">
          <h3>${text("favoritesEmptyTitle")}</h3>
          <p>${text("favoritesEmptyHint")}</p>
        </div>
      `;
      return;
    }

    elements.favoritesGrid.innerHTML = savedDestinations.map(renderDestinationCard).join("");
    bindCardMediaFallbacks(elements.favoritesGrid);
  }

  function renderPlanner() {
    const planDestinations = state.plan.map(getDestination).filter(Boolean);
    const totalMinutes = planDestinations.reduce((total, destination) => total + destination.duration, 0);

    if (!planDestinations.length) {
      elements.tripPlanner.innerHTML = `
        <div class="planner-empty">
          <span class="planner-orb" aria-hidden="true"></span>
          <div><h3>${text("noPlan")}</h3><p>${text("noPlanHint")}</p></div>
          <button class="button button-quiet" type="button" data-action="load-example">${text("loadExample")}</button>
        </div>
      `;
      return;
    }

    elements.tripPlanner.innerHTML = `
      <div class="plan-summary"><strong>${pluralStops(planDestinations.length)}</strong><span>${totalMinutes} ${text("planMinutes")}</span></div>
      <ol class="plan-list">
        ${planDestinations.map((destination, index) => {
          const title = getDisplayTitle(destination);
          return `
            <li class="plan-stop">
              <span class="stop-number" aria-hidden="true">${index + 1}</span>
              <div class="stop-copy"><strong>${safeText(title)}</strong><span>${destination.duration} ${text("duration")} · ${safeText(destination.location[state.language])}</span></div>
              <div class="stop-actions">
                <button type="button" data-action="move" data-id="${destination.id}" data-direction="up" aria-label="${text("moveUp")}: ${safeText(title)}" ${index === 0 ? "disabled" : ""}>
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m5 15 7-7 7 7"/></svg>
                </button>
                <button type="button" data-action="move" data-id="${destination.id}" data-direction="down" aria-label="${text("moveDown")}: ${safeText(title)}" ${index === planDestinations.length - 1 ? "disabled" : ""}>
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m5 9 7 7 7-7"/></svg>
                </button>
                <button type="button" data-action="remove-plan" data-id="${destination.id}" aria-label="${text("remove")}: ${safeText(title)}">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6 6 18"/></svg>
                </button>
              </div>
            </li>
          `;
        }).join("")}
      </ol>
    `;
  }

  function render() {
    applyDocumentPreferences();
    renderStaticCopy();
    renderMedia();
    renderQuickLinks();
    renderDestinationAreas();
    renderSouthernFoodGallery();
    renderPlanner();
    renderFavorites();
    renderWeather();
    renderLocalTips();
    elements.clearPlan.disabled = state.plan.length === 0;
  }

  function toggleFavorite(id) {
    const destination = getDestination(id);
    if (!destination) return;
    const exists = state.favorites.includes(id);
    state.favorites = exists ? state.favorites.filter((favoriteId) => favoriteId !== id) : [...state.favorites, id];
    saveState("favorites", state.favorites);
    setStatus(interpolate(text(exists ? "statusUnsaved" : "statusSaved"), { place: getDisplayTitle(destination) }));
    render();
  }

  function togglePlan(id) {
    const destination = getDestination(id);
    if (!destination) return;
    const exists = state.plan.includes(id);
    state.plan = exists ? state.plan.filter((planId) => planId !== id) : [...state.plan, id];
    saveState("plan", state.plan);
    setStatus(interpolate(text(exists ? "statusRemoved" : "statusAdded"), { place: getDisplayTitle(destination) }));
    render();
  }

  function movePlanItem(id, direction) {
    const index = state.plan.indexOf(id);
    const nextIndex = direction === "up" ? index - 1 : index + 1;
    if (index < 0 || nextIndex < 0 || nextIndex >= state.plan.length) return;
    [state.plan[index], state.plan[nextIndex]] = [state.plan[nextIndex], state.plan[index]];
    saveState("plan", state.plan);
    render();
  }

  function loadExample() {
    state.plan = [...data.examplePlan];
    saveState("plan", state.plan);
    setStatus(text("statusLoaded"));
    render();
  }

  elements.theme.addEventListener("click", () => {
    state.theme = state.theme === "light" ? "dark" : "light";
    saveState("theme", state.theme);
    render();
  });

  elements.language.addEventListener("click", () => {
    state.language = state.language === "en" ? "ar" : "en";
    saveState("language", state.language);
    render();
  });

  elements.weather.addEventListener("change", (event) => {
    state.weather = validWeather.has(event.target.value) ? event.target.value : "sunny";
    saveState("weather", state.weather);
    renderWeather();
  });

  elements.discoverPlayer.addEventListener("click", (event) => {
    if (event.target.closest("[data-action=\"play-video\"]")) playDiscoverVideo();
  });

  elements.loadExample.addEventListener("click", loadExample);
  elements.clearPlan.addEventListener("click", () => {
    if (!state.plan.length) return;
    state.plan = [];
    saveState("plan", state.plan);
    setStatus(text("statusCleared"));
    render();
  });

  elements.destinationAreas.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;
    if (button.dataset.action === "favorite") toggleFavorite(button.dataset.id);
    if (button.dataset.action === "plan") togglePlan(button.dataset.id);
  });

  elements.favoritesGrid.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;
    if (button.dataset.action === "favorite") toggleFavorite(button.dataset.id);
    if (button.dataset.action === "plan") togglePlan(button.dataset.id);
  });

  elements.tripPlanner.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;
    if (button.dataset.action === "load-example") loadExample();
    if (button.dataset.action === "remove-plan") togglePlan(button.dataset.id);
    if (button.dataset.action === "move") movePlanItem(button.dataset.id, button.dataset.direction);
  });

  render();
})();
