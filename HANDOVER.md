# Ye & Nang wedding invitation — handover

## Current invitation

- Couple: Ye Moe Myint (Ye) and Nang Htet Htet Aung (Nang)
- Wedding: Sunday, 8 November 2026
- Live site: https://librandshop.github.io/ye-and-nang/
- Thai preview: https://librandshop.github.io/ye-and-nang/?lang=th
- Repository: https://github.com/librandshop/ye-and-nang
- RSVP form: https://forms.gle/t9pPc5BuD8Esa8QF6
- RSVP deadline: 30 September 2026
- Venue map: https://maps.app.goo.gl/vTDBF3szrC5VXmnKA

## Site status

The invitation is a static, mobile-friendly GitHub Pages site. Its current visual direction is a premium pink-only floral design with editorial rose photography; there are no green design accents. It supports English and Thai, remembers the chosen language, and accepts `?lang=th` for a direct Thai link.

The site includes the invitation, wedding-day schedule, venue link, countdown, RSVP button, a Google Calendar link, and an Apple Calendar/Outlook `.ics` file. The RSVP button points to the published responder link above. The Google Calendar button opens a prefilled event; Apple Calendar and Outlook use the `.ics` file, which the visitor must confirm in their calendar app.

Event times and on-page venue text are intentionally not invented: the schedule says they will be announced. The venue button opens the supplied Google Maps location.

## Files

| File | Purpose |
| --- | --- |
| [`index.html`](index.html) | Invitation content, sections, links, and language controls. |
| [`styles.css`](styles.css) | Pink floral visual system and responsive layout. |
| [`assets/editorial-roses.jpg`](assets/editorial-roses.jpg) | Optimized floral artwork used on the site. |
| [`script.js`](script.js) | English/Thai copy, language selection, and countdown. |
| [`ye-nang-wedding.ics`](ye-nang-wedding.ics) | Apple Calendar and Outlook event file. |
| [`RSVP-GOOGLE-FORM.md`](RSVP-GOOGLE-FORM.md) | Bilingual form question reference. |

## Remaining checks before sharing widely

1. Confirm ceremony/reception times and replace all “time to be announced” copy when known.
2. Check the published RSVP form still permits intended guests to respond. Each guest may bring at most one plus-one; Thai guests should enter both their own and their plus-one's nicknames, as specified in the form reference.
3. Test the live invitation and calendar choices on actual iPhone and Android devices.

To publish changes, update the `main` branch of `librandshop/ye-and-nang`; GitHub Pages deploys from it. The `.preview` directory holds local screenshots only and is not part of the site.

