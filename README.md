# Wedding invitation

A no-build wedding invitation site that can be hosted free with GitHub Pages.

## Personalize it

Open `index.html` in an editor and replace the sample date, venue, address, dress code, maps link, and RSVP email. The couple names are already set to Ye Moe Myint and Nang Htet Htet Aung. Then update the `weddingDate` near the top of `script.js` using your ceremony time in this format:

```js
const weddingDate = new Date("2026-11-08T00:00:00");
```

You can preview the site locally by opening `index.html` in a browser.

## Publish with GitHub Pages

1. Create a new GitHub repository, for example `wedding-invitation`.
2. Upload these files to the repository root and commit them.
3. On GitHub, open **Settings** â†’ **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, then select branch **main** and folder **/(root)**. Save.
5. After GitHub finishes deploying, it will show your public URL, typically `https://YOUR-USERNAME.github.io/wedding-invitation/`.

GitHub Pages normally takes a minute or two after the first deployment. Every new commit updates the invitation automatically.

> The RSVP button opens an email reply. A static GitHub Pages site cannot save form submissions on its own; use an RSVP service or a form backend if you prefer a web form.

