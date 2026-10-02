const fs = require("fs");
const vm = require("vm");

const source = fs.readFileSync("sample-data/data.js", "utf8");
const context = { window: {} };
vm.createContext(context);
vm.runInContext(source, context, { filename: "sample-data/data.js" });

const data = context.window.ABHA_VISITOR_GUIDE_DATA;
const fail = (message) => { throw new Error(message); };
const local = (path) => typeof path === "string" && path && !/^(?:https?:|\/|[A-Za-z]:|\/\/)/.test(path);
const bilingual = (value) => value && value.en && value.ar;
const file = (path, label) => {
  if (!local(path)) fail(`${label} must use a project-relative path.`);
  if (!fs.existsSync(path)) fail(`${label} is missing: ${path}`);
};

file(data.media.hero.src, "Hero image");
if (!bilingual(data.media.hero.alt) || !data.media.hero.width || !data.media.hero.height) fail("Hero image needs bilingual alt text and dimensions.");
file(data.media.discoverVideo.posterSrc, "Discover poster");
if (!bilingual(data.media.discoverVideo.posterAlt) || !data.media.discoverVideo.posterWidth || !data.media.discoverVideo.posterHeight) fail("Discover poster needs bilingual alt text and dimensions.");
if (data.media.discoverVideo.provider !== "mp4") fail("Discover video provider must be local MP4.");
file(data.media.discoverVideo.localMp4Src, "Discover local video");
if (!Number.isFinite(data.media.discoverVideo.videoWidth) || !Number.isFinite(data.media.discoverVideo.videoHeight) || data.media.discoverVideo.videoWidth <= 0 || data.media.discoverVideo.videoHeight <= 0) fail("Discover local video needs positive dimensions.");
if (fs.statSync(data.media.discoverVideo.localMp4Src).size > 10 * 1024 * 1024) fail("Discover local video must stay below 10 MB.");

const naturalVideo = data.media.naturalVideo;
if (!naturalVideo || naturalVideo.provider !== "mp4") fail("Natural Attractions video must be a local MP4.");
file(naturalVideo.localMp4Src, "Natural Attractions local video");
file(naturalVideo.posterSrc, "Natural Attractions poster");
if (!bilingual(naturalVideo.posterAlt) || !naturalVideo.posterWidth || !naturalVideo.posterHeight) fail("Natural Attractions poster needs bilingual alt text and dimensions.");
if (!Number.isFinite(naturalVideo.videoWidth) || !Number.isFinite(naturalVideo.videoHeight) || naturalVideo.videoWidth <= 0 || naturalVideo.videoHeight <= 0) fail("Natural Attractions video needs positive dimensions.");
if (fs.statSync(naturalVideo.localMp4Src).size > 10 * 1024 * 1024) fail("Natural Attractions local video must stay below 10 MB.");
if (naturalVideo.areaId !== "natural" || naturalVideo.afterDestinationId !== "asir-overlook") fail("Natural Attractions video needs the approved placement metadata.");
["en", "ar"].forEach((language) => {
  const content = naturalVideo.content?.[language];
  if (!content?.eyebrow || !content.title || !content.description || !content.videoLabel || !content.unavailable) {
    fail(`Natural Attractions video needs complete ${language} content.`);
  }
  const caption = naturalVideo.captions?.[language];
  if (caption) file(caption, `Natural Attractions ${language} captions`);
});

if (!Array.isArray(data.areas) || !data.areas.length) fail("Guide needs at least one destination area.");
const areaIds = new Set();
data.areas.forEach((area) => {
  if (!area.id || areaIds.has(area.id)) fail(`Area id must be unique: ${area.id || "missing"}`);
  areaIds.add(area.id);
  if (!area.targetId || !bilingual(area.title) || !bilingual(area.eyebrow)) fail(`${area.id} area needs a target and bilingual labels.`);
});

const destinationIds = new Set();
data.destinations.forEach((destination) => {
  if (!destination.id || destinationIds.has(destination.id)) fail(`Destination id must be unique: ${destination.id || "missing"}`);
  destinationIds.add(destination.id);
  if (!areaIds.has(destination.area)) fail(`${destination.id} has an undeclared area: ${destination.area || "missing"}`);
  if (!destination.image) fail(`${destination.id} is missing image metadata.`);
  file(destination.image.src, `${destination.id} image`);
  if (!bilingual(destination.image.alt) || !destination.image.width || !destination.image.height) {
    fail(`${destination.id} image needs bilingual alt text and dimensions.`);
  }
});

data.areas.forEach((area) => {
  if (!data.destinations.some((destination) => destination.area === area.id)) fail(`${area.id} area has no destinations.`);
});

const expectedDestinationVideos = {
  "art-street": [848, 480],
  "highland-studio": [480, 848],
  "heritage-courtyard": [480, 848]
};
const destinationVideos = data.destinations.filter((destination) => destination.video);
if (destinationVideos.length !== Object.keys(expectedDestinationVideos).length) fail("Guide needs exactly three approved Cultural & Arts card videos.");
destinationVideos.forEach((destination) => {
  const expectedDimensions = expectedDestinationVideos[destination.id];
  const video = destination.video;
  if (!expectedDimensions || destination.area !== "culture" || video.provider !== "mp4") fail(`${destination.id} has an unapproved card video.`);
  file(video.localMp4Src, `${destination.id} card video`);
  if (fs.statSync(video.localMp4Src).size > 10 * 1024 * 1024) fail(`${destination.id} card video must stay below 10 MB.`);
  if (video.videoWidth !== expectedDimensions[0] || video.videoHeight !== expectedDimensions[1]) fail(`${destination.id} card video has unexpected dimensions.`);
  if (!bilingual(video.label) || !bilingual(video.unavailable)) fail(`${destination.id} card video needs bilingual accessibility content.`);
  ["en", "ar"].forEach((language) => {
    const caption = video.captions?.[language];
    if (caption) file(caption, `${destination.id} ${language} captions`);
  });
});

const foodItems = data.southernFood?.items;
const expectedFoodIds = ["areekah", "mabthouth", "tasabee", "mashghouthah", "tannour-bread"];
if (!Array.isArray(foodItems) || foodItems.length !== expectedFoodIds.length) fail("Southern Food gallery must contain five food cards.");
const foodIds = new Set();
foodItems.forEach((food) => {
  if (!food.id || foodIds.has(food.id)) fail(`Southern Food id must be unique: ${food.id || "missing"}`);
  foodIds.add(food.id);
  if (typeof food.title !== "string" || !food.title.trim() || !bilingual(food.description)) fail(`${food.id} needs an English title and bilingual description.`);
  if (!food.image) fail(`${food.id} is missing image metadata.`);
  file(food.image.src, `${food.id} food image`);
  if (!bilingual(food.image.alt) || !food.image.width || !food.image.height) {
    fail(`${food.id} food image needs bilingual alt text and dimensions.`);
  }
});
expectedFoodIds.forEach((id) => {
  if (!foodIds.has(id)) fail(`Southern Food card is missing: ${id}`);
});

const artStreet = data.destinations.find((destination) => destination.id === "art-street");
if (!artStreet) fail("Art Street destination is missing.");
if (artStreet.title?.en !== "شارع الفن" || artStreet.title?.ar !== "شارع الفن") fail("Art Street must use شارع الفن in both language fields.");
if (!bilingual(artStreet.description) || !bilingual(artStreet.visitorTip) || !bilingual(artStreet.tags)) fail("Art Street needs bilingual visitor content.");

console.log(`Media and area contract passed for ${data.destinations.length} destination images, ${destinationVideos.length} Cultural & Arts card videos, ${foodItems.length} Southern Food slots, and both local videos.`);
