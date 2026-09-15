# Floral invitation design

Clean white stationery, fresh floral pink, and contemporary photographic ranunculus, roses, and white orchids. Includes English, Thai, and Burmese, with synchronized language selectors on the envelope screen and the invitation. Language preferences persist across visits, and links can select a language using `?lang=en`, `?lang=th`, or `?lang=my`.

## Motion

- A 6.6-second opening sequence releases satin ribbons and the rose seal, lifts the envelope flap, extracts a folded card, opens its two floral panels in 3D, reveals the names and date, then dissolves into the main invitation. There is no separate opening button or visible Open invitation label. The envelope remains a keyboard-accessible button with a translated accessible name.
- The main invitation's paper frame rises into place, flowers enter from the sides, rules extend, and names, invitation text, botanical drawing, and date appear in sequence.
- Petals drift and flowers gently sway throughout the invitation.
- Calendar, personal note, schedule cards, venue, countdown, RSVP, and footer reveal on scroll. Schedule cards tilt gently into view; the RSVP flowers and monogram have separate entrances, followed by the reply text. Hero flowers and the venue keepsake respond subtly to scrolling.
- Illustrated schedule icons draw into view; changing countdown numbers animate while visible.
- Pause motion is always available. System reduced-motion preferences are respected by default; guests can explicitly resume motion.
- A translated skip control appears only during opening. Escape opens the invitation immediately. Focus remains in the opening dialog until opened, then moves to the couple's names. Direct section links bypass the envelope.
- Without JavaScript the invitation is readable immediately. There is no automatic music.

## Artwork

Project asset: `assets/modern-florals.webp` (1100 × 733, transparent WebP, approximately 130 KiB). The earlier watercolor artwork is retained as an unused asset.

Created using the built-in image-generation tool, then resized and encoded as WebP while retaining transparency. The generated source PNG is retained in the local generated-images directory.

Final generation prompt:

> Use case: photorealistic-natural. Asset type: transparent floral cutout for a contemporary luxury wedding invitation website. Create a fresh modern florist arrangement photographed in extremely soft luminous daylight: three pale blush pink ranunculus and garden rose blooms, an airy arching stem of white phalaenopsis orchids with subtle warm pink centers, a few delicate white sweet peas, very minimal fresh pale green stems and leaves. Light and airy with sculptural curves, graceful asymmetry, ample empty space between the flowers; flowers facing naturally different directions. The arrangement grows diagonally from a loose cluster at the lower left toward a long elegant orchid stem at upper right, all fully inside the canvas. Refined contemporary editorial floral photography with real silky petal texture, whites clean and luminous, pinks soft but fresh. Genuinely transparent background with alpha. No vase, no paper, no watercolor, no painting, no vintage texture, no dried flowers, no brown foliage, no dark shadows, no text, no logos, no watermark. Landscape 1536x1024. This will float over pure white and very pale pink website sections.

## Verification

Chrome browser checks covered desktop (1440px), mobile (390px), narrow mobile (320px), all scroll reveals, image loading, language switching, pause/replay, reduced motion, direct RSVP links, and JavaScript-disabled fallback. Additional checks cover the full 3D opening on desktop, phone, narrow Burmese layout, Thai landscape layout, letter content bounds, skip, replay, pausing mid-opening, Escape, and main-page reveals. Visual screenshots were reviewed locally. No browser JavaScript errors were reported.
