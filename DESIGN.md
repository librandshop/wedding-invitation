# Entwined invitation design

White and floral-pink stationery with oversized, asymmetric italic name lettering. Small jasmine and blush sweet-pea vines weave around the Y and the end of Nang; fine animated stems pass behind and in front of the letters. There are no large standalone bouquets. Full names remain beneath the centerpiece, and Y & N remains the seal monogram.

English, Thai and Burmese are preserved, with synchronized cover and main-page selectors, saved language preference and `?lang=en`, `?lang=th`, `?lang=my` links. Wedding details, RSVP, calendar and map destinations are unchanged.

## One physical invitation

The same card is nested between the envelope back and front pocket. The former duplicate printed placeholder has been removed. The closed gatefold is opaque and its inside copy stays hidden throughout extraction.

- 0–1.1 seconds: release the wax seal and ribbon; unfold the envelope flap.
- 1.1–2.95 seconds: slide the closed card above the pocket, then rotate it upright and center it. The envelope drops away before the rotation finishes.
- 2.95–3.55 seconds: release the paper band. The left fold starts at 3.4 seconds, the right at 3.55 seconds. Only then is the inside printing exposed.
- 3.55–5.9 seconds: the panels unfold around the printed invitation, followed by a short reading pause.
- 5.9–6.6 seconds: the letter and cover dissolve into the main invitation.

Geometry is measured from the actual envelope and untransformed card dimensions for mobile, landscape and replay. A localized skip control, Escape, reduced motion and pausing can finish immediately. Focus is contained in the cover while open and moves to the main names afterward. JavaScript-disabled visitors see the complete invitation immediately.

## Main-page motion and layout

- Ye and Nang inscribe separately; the ampersand settles between them; fine stems trace around the names and small flowering vines grow into place, then gently sway.
- The personal message is a centered editorial note, with larger heading treatment and animated typography.
- Ceremony, reception and dinner connect along a drawing timeline: horizontal on desktop, vertical on phones. Illustrated icons draw and milestones arrive in order.
- The venue is a layered postcard with a drawing route and a landing location pin. This is a decorative route, not a geographic map; the real Google Maps link is unchanged.
- Countdown numbers sit on individual folded-paper tiles and animate when they change in view.
- The RSVP is a folded-corner reply note with a wax monogram seal, staged content and a pill-shaped action button.
- Motion can be paused; system reduced-motion preferences are honored by default. There is no automatic music.

## Artwork

Asset: `assets/jasmine-vine.webp`, 667 × 1000, transparent WebP, 64,118 bytes. Created with the built-in image-generation tool, then resized and encoded while preserving alpha. Earlier bouquet assets remain on disk but are no longer used in the invitation artwork.

Final generation prompt:

> Use case: photorealistic-natural. Asset type: genuinely transparent botanical cutout for weaving around the letters of a wedding couple's names in a modern editorial website. Primary request: one very slender, airy trailing flowering vine, an elegant loose S curve hanging vertically. Fine fresh sage-green jasmine stems, tiny sparse heart-shaped leaves, six very small white jasmine blossoms and three tiny pale blush pink sweet pea flowers, a few buds. Each flower is small compared with the long fine stem, no large focal bloom, no bouquet or cluster. Real delicate silky petals, luminous soft daylight, natural subtle shadows only on petals. Composition: portrait 1024x1536, one single strand, gently curving from upper left to mid-right then trailing to lower left, fully within canvas with margin, lots of transparent space around and between the tiny leaves and blossoms. This is a typographic embellishment, not a standalone centerpiece. Clean contemporary florist photography, actual alpha transparent background. No text, letters, vase, paper, vintage watercolor, big roses, dense foliage, garland frame, border, drop shadow, watermark or other props.

## Verification

Chrome checks at 1440 × 1000, 390 × 844, 320 × 640 and 844 × 390 cover the full opening, centered card geometry, content bounds, all scroll reveals, horizontal overflow, replay, skip, Escape, reduced motion, pausing mid-opening and no-JavaScript fallback. A separate deterministic timeline test checks 900, 1700, 2800 and 3300 milliseconds: inside words remain hidden and both panels remain closed. At 5100 milliseconds the printing is visible and the card is centered. Screenshots were reviewed on desktop and phones, including Burmese and Thai.
