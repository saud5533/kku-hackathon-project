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
if (data.media.discoverVideo.provider !== "placeholder") fail("Default video provider must be placeholder.");

data.destinations.forEach((destination) => {
  if (!destination.image) fail(`${destination.id} is missing image metadata.`);
  file(destination.image.src, `${destination.id} image`);
  if (!bilingual(destination.image.alt) || !destination.image.width || !destination.image.height) {
    fail(`${destination.id} image needs bilingual alt text and dimensions.`);
  }
});

console.log(`Media contract passed for ${data.destinations.length} destination images.`);
