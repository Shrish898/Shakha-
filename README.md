# 🪔 Shakha

**Every culture has a source. Credit it.**

Shakha is a provenance and attribution web app for living culture. It records cultural works with their creator, source, region and reuse permissions, gives every record a shareable credit card, and tracks every fork, change, flag and photo in an audit trail, so credit travels with a tradition wherever it goes.

Built for **ART//CODE 2026**, problem statement **PS-03: Credit the Culture** (Attribution & Ownership).

**Live demo:** https://shakha-nine.vercel.app

---

## The problem

Cultural work such as kolam patterns, songs, craft techniques and festival traditions is often reposted or reused online with no origin, creator or permissions attached. Generative AI adds further questions about consent and acceptable reuse. Someone who wants to reuse a work cannot easily tell where it comes from, who should be credited, or what they are allowed to do.

Our test case is **Diwali traditions across Indian regions**, where the same tradition drifts between communities and the original credit is easily lost.

## Our idea

> Culture doesn't disappear. It drifts.

Shakha records every version of a tradition with its source and its rules, so the drift is traceable instead of erasing the people it came from.

## Features (mapped to PS-03)

| PS-03 objective | How Shakha covers it |
|---|---|
| Digital record with creator, source, region and cultural context | Record creation form and a full record page |
| Clearly stated reuse permissions and attribution requirements | Four permission levels plus a "how to credit" line on every record |
| Shareable credit card or downloadable provenance record | Credit card page with a copy-link button and a downloadable text record |
| Search by title, creator or record ID | One search bar across all three |
| A way to flag missing attribution or unauthorised reuse | Flag button with a reason and an optional note |
| Optional audit trail of changes | Dated history log on every record, plus fork lineage |

**Also included**

- **Fork and diff:** anyone can fork a record into their own regional version. The fork credits its parent, the parent logs the fork, and a word-level diff shows exactly what changed.
- **Photo memories:** each record can hold up to 6 photos, each with a caption and its own photo credit.
- **12 sample records** (clearly labelled as demo data), including two forks, one flagged record and one locked record.

## Permissions model

Every record carries one of four reuse permissions, ordered from most open to most restricted:

1. **Free to reuse with credit:** anyone may reuse it, with attribution
2. **Reuse for non-commercial only:** reuse is fine, selling it is not
3. **Ask the community first:** get permission before forking (the app asks users to confirm)
4. **Do not reuse:** locked, and forking is blocked

Rules enforced by the app:

- A fork can **keep or tighten** its parent's permission, **never loosen** it.
- A record marked **Do not reuse** cannot be forked.
- Every record states exactly how it must be credited, and forks automatically credit their parent in that line.
- Photos carry their own credit, and the upload form reminds contributors to share only photos they took or have permission to share, and to respect the consent of people pictured.

## How the diff works

The diff view compares two versions word by word using the **longest common subsequence (LCS)** algorithm. Words that appear in both versions, in the same order, stay plain. Everything else is marked as removed (struck through) or added (highlighted). The implementation lives in `store.js` (`diffWords` and `diffHtml`).

## Scope and honesty

Shakha is an **attribution and permission-management prototype**. It is **not** an automated copyright detector, and it **does not claim to establish legal ownership**. Every record states who *says* they created a work, and a visible disclaimer on the form and on every credit card says so.

All 12 pre-loaded records are **illustrative sample data**. Contributor names such as "Sample contributor" are placeholders, not real attributions.

## Tech stack

- HTML, CSS and vanilla JavaScript (no framework, no build step)
- `localStorage` for records, edits, flags and photos
- Photos are resized to a maximum of 900 px and saved as compressed JPEG in the browser
- Fonts: Cormorant Garamond and Jost (Google Fonts), with an optional local "Apricots" font if a file is placed in `fonts/`
- Hosted on Vercel, source on GitHub

The UI was built with AI assistance; the core logic is plain, readable JavaScript.

## Project structure

```
index.html     Catalogue page: add a record, search, browse
credit.html    Record page: credit card, lineage, history, flags, photos, fork
compare.html   Diff view between a record and its fork
store.js       Data helpers, photo compression, permissions list, diff algorithm
data.js        The 12 sample records
style.css      Shared styles and animations
```


## Credits

Built by Shrish and Sanju Baiju for **ART//CODE 2026**, organised by DELTA.
