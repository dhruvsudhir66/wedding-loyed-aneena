# Wedding Invitation — Save the Date

A production-ready Next.js + Tailwind CSS foundation for an editorial, immersive wedding invitation.

## Current scope

Only the **Save the Date** chapter is implemented, as requested. The project is structured so additional invitation chapters can be added component-by-component without rewriting the first section.

### Included

- Next.js App Router + TypeScript
- Tailwind CSS v4
- Responsive mobile/desktop composition
- Local optimized wedding image in `public/images`
- Editorial serif + clean sans typography
- Olive / warm-paper palette inspired by the supplied reference
- Full-viewport card composition
- Accessible button and image alt text
- `prefers-reduced-motion` support
- Open Invitation transition
- `wedding:open-invitation` browser event reserved for the next sections
- Production-oriented Next.js configuration

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Where to edit

### Invitation content

Edit the `invitation` object in:

`components/save-date/SaveTheDate.tsx`

### Wedding photo

Replace:

`public/images/couple-holding-hands.png`

with the final image, keeping the same filename, or update the `src` in `SaveTheDate.tsx`.

### Visual styling

- Page/global styles: `app/globals.css`
- Save-the-date component: `components/save-date/SaveTheDate.tsx`
- Decorative mark: `components/ui/FloralMark.tsx`

## Adding the next chapter

The button already emits:

```ts
window.dispatchEvent(new CustomEvent("wedding:open-invitation"));
```

The next section can be introduced as a sibling component and the transition can then be changed to scroll/reveal that chapter. No dependency on a specific animation library is required for the current section.

## Deployment

This project is compatible with standard Next.js hosting, including Vercel and other Node-compatible production platforms. Run `npm run build` before deployment.
