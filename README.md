# Portfolio — Kshitija Kumbharkar

A personal portfolio website built with **Vite + React + TypeScript**.

## Development

```bash
npm ci        # install dependencies
npm run dev   # start the dev server at http://localhost:5173
npm run build # type-check + production build
npm run lint  # lint
```

## Editing content

All text content (name, role, bio, projects, contact info) lives in one file:

- `src/data/portfolio.ts`

Edit the `profile`, `navLinks`, and `projects` values there — no component changes needed.

## Replacing the profile photo

The hero photo is served from `public/img/profile.png`. To use your own headshot,
replace that file with your photo, keeping the **same filename** (`profile.png`).

Recommended format:

- **File name:** `profile.png` (a `.jpg` also works — if you use JPG, name it
  `profile.jpg` and update the `src` in `src/components/Hero.tsx`).
- **Type:** PNG or JPG.
- **Orientation:** portrait or square (the frame is roughly square, ~1:1.08).
- **Suggested size:** ~1000×1200 px or larger (so it stays crisp), under ~5 MB.
- **Framing:** face centered and near the top — the image is cropped with
  `object-fit: cover` and `object-position: center top`.

You can either drop the file directly into `public/img/profile.png` in the repo,
or upload it in chat and it will be added for you.

## Replacing project images

Project images are in `public/img/` (e.g. `proj_speaker.png`). Swap any file
(keep the filename) or point a project's `image` field in
`src/data/portfolio.ts` to a new path. Recommended: landscape **4:3**,
~1024×768 px, PNG or JPG.
