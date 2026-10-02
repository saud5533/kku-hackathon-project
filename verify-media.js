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

const artStreet = data.destinations.find((destination) => destination.id === "art-street");
if (!artStreet) fail("Art Street destination is missing.");
if (artStreet.title?.en !== "Art Street" || artStreet.title?.ar !== "Art Street") fail("Art Street must use the English name in both language fields.");
if (!bilingual(artStreet.description) || !bilingual(artStreet.visitorTip) || !bilingual(artStreet.tags)) fail("Art Street needs bilingual visitor content.");

console.log(`Media and area contract passed for ${data.destinations.length} destination images and the local Discover video.`);
