# Abha Visitor Guide

A bilingual, one-screen visitor guide for planning a gentle day across **Abha** and **Al Namas**.

## What it does

- Browse Natural Attractions, Cultural & Arts, Cafes, and Restaurants through quick section shortcuts.
- Discover a separate Southern Food Gallery after Restaurants, with five informational cards and replaceable local image slots.
- Discover Art Street as an illustrated cultural stop, while its name remains **Art Street** in both English and Arabic modes.
- Save favorite places in a dedicated Favorites section and build an ordered trip plan.
- Move stops up or down, remove them, clear the plan, or restore a built-in example plan.
- Open a selected destination in Google Maps after choosing its link.
- Choose a planning weather condition and read local planning tips.
- Switch between English/Arabic (including RTL layout) and light/dark mode.
- Explore original local mountain, place, café, culture, and activity illustrations with bilingual alt text.
- Experience a highland visual palette: rocky beige surfaces, mountain-sunset orange primary actions, deep natural greens, misty blue-gray contrast, and a local foggy mountain hero.
- Play the responsive local **Discover Abha** video directly after the hero.

## Who it is for

Visitors looking for a calm, simple way to shortlist a few highland stops and prepare for a day out.

## Needs

A modern web browser. The guide has no server, build step, API key, remote fonts, images, or third-party code.

Google Maps opens only when someone deliberately selects an **Open in Google Maps** link; the rest of the guide works offline.

## How to run it

1. Open this project folder.
2. Double-click `index.html`.
3. The guide opens directly in the browser—no server is needed.

## Try it with the sample data

The built-in, made-up sample guide content is stored in `sample-data/data.js` and is loaded with a normal script tag so it also works when `index.html` is opened directly.

- Select **Load example plan** to restore three suggested stops.
- Use the quick shortcuts to move directly to Natural Attractions, Cultural & Arts, Cafes, or Restaurants.
- Browse the separate Southern Food Gallery after Restaurants. It is informational only and does not change favorites, the trip planner, or Maps links.
- Save a card to show it in the dedicated Favorites section.
- Add stops to your trip plan, then use the arrow controls to change their order.
- The weather selector and local tips provide planning-only guidance. They are **not** live conditions; always check current local conditions before travelling.

Favorites, trip plans, language, theme, and weather choice are saved only in the current browser through `localStorage`. No typed choices are sent to GitHub or a server.

## Local media and replacement

All checked-in visuals in `assets/` are local project media: original SVG placeholder illustrations, the refreshed rocky mountain/cloud/fog hero, the selected venue photos, and a supplied local **Discover Abha** MP4. No remote stock media is used.

To replace an illustration, add an appropriately licensed file inside `assets/`, then update the matching `src`, `width`, `height`, and English/Arabic `alt` fields in `sample-data/data.js`. Keep paths relative and local.

Southern Food image slots live in `assets/foods/`. The gallery currently contains five local placeholder illustrations because no matching food photos are in the project yet. To replace a dish illustration with a licensed local food photo, add the photo there, then update the matching item in `southernFood.items` in `sample-data/data.js` with its relative `src`, dimensions, and English/Arabic `alt` text. Keep the item ID and its English-only title stable; the gallery remains informational and separate from destinations.

The local Discover Abha video remains below 10 MB and loads only after the visitor selects **Play preview**. To replace it, put a licensed MP4 below 10 MB in `assets/` and update `localMp4Src` in `sample-data/data.js`. Matching caption files can be configured later if available.

Run `node verify-media.js` to validate the local image paths, bilingual alt text, dimensions, Southern Food slots, and default offline video configuration.

## Project notes

All destination entries are fictional, visitor-oriented examples for the KKU Claude Code Hackathon. This guide includes Al Namas and does not use real visitor, customer, or patient information.

Built with Claude Code during the KKU Claude Code hackathon.
Started on 2026-10-01.
