# Abha Visitor Guide

A bilingual, one-screen visitor guide for planning a gentle day across **Abha** and **Al Namas**.

## What it does

- Browse made-up sample destinations by category.
- Save favorite places and build an ordered trip plan.
- Move stops up or down, remove them, clear the plan, or restore a built-in example plan.
- Open a selected destination in Google Maps after choosing its link.
- Choose a planning weather condition for practical clothing advice.
- Switch between English/Arabic (including RTL layout) and light/dark mode.
- Explore original local mountain, place, café, culture, and activity illustrations with bilingual alt text.
- Use the responsive **Discover Abha** video poster and replace it later with a local MP4 if wanted.

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
- Choose a category or Favorites to narrow the guide.
- Add stops to your trip plan, then use the arrow controls to change their order.
- The weather selector provides planning-only clothing guidance. It is **not** live weather; always check current local conditions before travelling.

Favorites, trip plans, language, theme, and weather choice are saved only in the current browser through `localStorage`. No typed choices are sent to GitHub or a server.

## Local media and replacement

All checked-in visuals in `assets/` are original local SVG placeholder illustrations created for this project. They are not remote stock photos, and the default **Discover Abha** experience does not load a video, YouTube embed, or any remote media.

To replace an illustration, add an appropriately licensed file inside `assets/`, then update the matching `src`, `width`, `height`, and English/Arabic `alt` fields in `sample-data/data.js`. Keep paths relative and local.

To add a local video, put a licensed MP4 below 10 MB in `assets/`, set `provider` to `"mp4"`, and set `localMp4Src` in `sample-data/data.js`. The video loads only after the visitor selects **Play preview**. The default `"placeholder"` provider preserves offline operation. A YouTube embed is supported only as an optional, deliberately configured online enhancement and is loaded only after Play; it is not configured in this project.

Run `node verify-media.js` to validate the local image paths, bilingual alt text, dimensions, and default offline video configuration.

## Project notes

All destination entries are fictional, visitor-oriented examples for the KKU Claude Code Hackathon. This guide includes Al Namas and does not use real visitor, customer, or patient information.

Built with Claude Code during the KKU Claude Code hackathon.
Started on 2026-10-01.
