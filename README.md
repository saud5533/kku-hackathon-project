# Abha Visitor Guide

A bilingual, one-screen visitor guide for planning a gentle day across **Abha** and **Al Namas**.

## What it does

- Browse made-up sample destinations by category.
- Save favorite places and build an ordered trip plan.
- Move stops up or down, remove them, clear the plan, or restore a built-in example plan.
- Open a selected destination in Google Maps after choosing its link.
- Choose a planning weather condition for practical clothing advice.
- Switch between English/Arabic (including RTL layout) and light/dark mode.

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

## Project notes

All destination entries are fictional, visitor-oriented examples for the KKU Claude Code Hackathon. This guide includes Al Namas and does not use real visitor, customer, or patient information.

Built with Claude Code during the KKU Claude Code hackathon.
Started on 2026-10-01.
