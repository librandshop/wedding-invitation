# A personal wedding letter

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
- The main page is one continuous white, fine-bordered letter on blush paper. A small code-native satin bow crowns the arched stationery; a matching bow introduces the reply. The envelope markup and opening functions are unchanged.
- A personal salutation and signed note precede the calendar actions. English copy uses softer serif typography, with appropriate Thai and Burmese font shaping and line heights.
- Ceremony, reception and dinner form a centered wedding program, without business-style numbering, cards or timeline. Unconfirmed times and the shared details notice remain explicit.
- Venue directions are a simple centered invitation detail; the decorative route graphic has been removed. Both calendar buttons and the Maps button retain their prominent themed design and original destinations.
- The countdown is printed directly on the paper, without dashboard tiles. The RSVP closes the letter rather than repeating a call to action in the hero.
- Slow ink fades, drawn ornamental dividers, a revealing signature and gentle ribbon movement replace presentation-style card tilts. `letter.css` scopes the redesign to the main invitation without changing envelope styles.

## Heirloom refinement

- The invitation is presented as a finely bordered arched sheet on a layered blush background, with subtle paper grain and soft depth rather than rectangular website sections.
- A small double-line oval holds the date like a printed keepsake, while the guest message gains a restrained quotation mark and balanced typesetting.
- Tiny jasmine vines grow from selected paper margins only. They remain secondary to the names and never become central bouquets.
- The wedding program alternates gently from side to side like a handwritten order of events. The icons and ornamental dividers draw themselves as guests reach them.
- Countdown values are connected by one fine rule and delicate dots, and the venue and RSVP use soft ceremonial arches instead of dashboard cards.
- A vertical progress thread runs along the edge of the stationery and ends in a small star, making scrolling feel like following a ribbon through the letter.
- The entire paper arrives softly after the envelope closes; the date keepsake, margin vines, program entries and final reply then reveal in their own restrained sequence.
- Motion can be paused; system reduced-motion preferences are honored by default. There is no automatic music.

## Artwork

Asset: `assets/jasmine-vine.webp`, 667 × 1000, transparent WebP, 64,118 bytes. Created with the built-in image-generation tool, then resized and encoded while preserving alpha. Earlier bouquet assets remain on disk but are no longer used in the invitation artwork.

Final generation prompt:

> Use case: photorealistic-natural. Asset type: genuinely transparent botanical cutout for weaving around the letters of a wedding couple's names in a modern editorial website. Primary request: one very slender, airy trailing flowering vine, an elegant loose S curve hanging vertically. Fine fresh sage-green jasmine stems, tiny sparse heart-shaped leaves, six very small white jasmine blossoms and three tiny pale blush pink sweet pea flowers, a few buds. Each flower is small compared with the long fine stem, no large focal bloom, no bouquet or cluster. Real delicate silky petals, luminous soft daylight, natural subtle shadows only on petals. Composition: portrait 1024x1536, one single strand, gently curving from upper left to mid-right then trailing to lower left, fully within canvas with margin, lots of transparent space around and between the tiny leaves and blossoms. This is a typographic embellishment, not a standalone centerpiece. Clean contemporary florist photography, actual alpha transparent background. No text, letters, vase, paper, vintage watercolor, big roses, dense foliage, garland frame, border, drop shadow, watermark or other props.

## Verification

Chrome checks at 1440 × 1000, 390 × 844, 320 × 640 and 844 × 390 cover the full opening, centered card geometry, content bounds, all scroll reveals, horizontal overflow, replay, skip, Escape, reduced motion, pausing mid-opening and no-JavaScript fallback. A separate deterministic timeline test checks 900, 1700, 2800 and 3300 milliseconds: inside words remain hidden and both panels remain closed. At 5100 milliseconds the printing is visible and the card is centered. Screenshots were reviewed on desktop and phones, including Burmese and Thai.

## Custom RSVP experience

The generic Google Form page is no longer part of the guest journey. A custom reply card now lives inside the invitation and inherits its fine pink rules, serif typography, pill-shaped attendance choices and restrained heart details. It adapts after the guest accepts or declines, presents a localized confirmation in place, and allows another household response without leaving the letter.

Responses continue to use the existing Google Form as their private collection backend. The live form's five exact entry fields are preserved: guest name, attendance, party size, plus-one name and dietary requirements. The interface and confirmation copy are fully translated in English, Thai and Burmese. Native browser validation, keyboard focus, an accessible live status and a no-JavaScript Google Form fallback are retained.

Automated checks intercept the submission before it reaches Google, then verify the exact encoded field names and values, attendance-dependent controls, translated placeholders, reset flow, confirmation positioning and layout at desktop, phone and 320-pixel widths. No test response is added to the couple's response sheet.
