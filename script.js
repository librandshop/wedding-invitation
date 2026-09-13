// Change this to your ceremony time once confirmed. Use: YYYY-MM-DDTHH:MM:SS
const weddingDate = new Date("2026-11-08T00:00:00");

const units = {
  days: document.querySelector("#days"),
  hours: document.querySelector("#hours"),
  minutes: document.querySelector("#minutes"),
  seconds: document.querySelector("#seconds"),
};

const translations = {
  en: {
    pageTitle: "Ye & Nang's Wedding Invitation",
    pageDescription: "Wedding invitation for Ye Moe Myint and Nang Htet Htet Aung.",
    heroEyebrow: "Together with their families",
    heroInvite: "joyfully invite you to celebrate the wedding of",
    heroDate: "Sunday, the eighth<br>of November",
    heroYear: "Two Thousand Twenty-Six",
    savebarTitle: "Keep this date close",
    saveDate: "Add to Google Calendar",
    calendarFile: "Apple Calendar & Outlook",
    details: "Details",
    celebrateEyebrow: "A celebration of love",
    celebrateTitle: "We're getting married",
    celebrateCopy: "We would be so happy to have you by our side as we begin our next chapter. Join us for an evening of vows, dinner, dancing, and a little bit of magic.",
    scheduleEyebrow: "The day",
    scheduleDate: "Sunday, November 8, 2026",
    ceremony: "Ceremony",
    reception: "Reception",
    dinnerDancing: "Dinner & Dancing",
    timeTba: "Time to be announced",
    detailsSoon: "Wedding details<br>will be shared soon",
    venueLabel: "Wedding<br>venue",
    venueEyebrow: "Where to find us",
    venueTitle: "Our wedding venue",
    venueCopy: "Tap below to see the location and get directions<br>on Google Maps.",
    openMaps: "Open in Google Maps",
    countdownEyebrow: "Counting down",
    countdownTitle: "Until we say I do",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    rsvpEyebrow: "Kindly reply",
    rsvpTitle: "Will you celebrate with us?",
    rsvpCopy: "Please let us know whether you can join us by completing our RSVP form.",
    rsvpButton: "RSVP now",
    rsvpNote: "Please reply by 30 September 2026",
    footerDate: "November 8, 2026",
  },
  th: {
    pageTitle: "\u0e01\u0e32\u0e23\u0e4c\u0e14\u0e40\u0e0a\u0e34\u0e0d\u0e07\u0e32\u0e19\u0e41\u0e15\u0e48\u0e07\u0e07\u0e32\u0e19 Ye & Nang",
    pageDescription: "\u0e01\u0e32\u0e23\u0e4c\u0e14\u0e40\u0e0a\u0e34\u0e0d\u0e07\u0e32\u0e19\u0e41\u0e15\u0e48\u0e07\u0e07\u0e32\u0e19\u0e02\u0e2d\u0e07 Ye Moe Myint \u0e41\u0e25\u0e30 Nang Htet Htet Aung",
    heroEyebrow: "\u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e14\u0e49\u0e27\u0e22\u0e04\u0e23\u0e2d\u0e1a\u0e04\u0e23\u0e31\u0e27\u0e02\u0e2d\u0e07\u0e17\u0e31\u0e49\u0e07\u0e2a\u0e2d\u0e07\u0e1d\u0e48\u0e32\u0e22",
    heroInvite: "\u0e21\u0e35\u0e04\u0e27\u0e32\u0e21\u0e22\u0e34\u0e19\u0e14\u0e35\u0e02\u0e2d\u0e40\u0e0a\u0e34\u0e0d\u0e23\u0e48\u0e27\u0e21\u0e40\u0e1b\u0e47\u0e19\u0e2a\u0e31\u0e01\u0e02\u0e35\u0e1e\u0e22\u0e32\u0e19\u0e43\u0e19\u0e07\u0e32\u0e19\u0e21\u0e07\u0e04\u0e25\u0e2a\u0e21\u0e23\u0e2a\u0e02\u0e2d\u0e07",
    heroDate: "\u0e27\u0e31\u0e19\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c\u0e17\u0e35\u0e48 8<br>\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19",
    heroYear: "\u0e1e.\u0e28. 2569",
    savebarTitle: "\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e27\u0e31\u0e19\u0e2a\u0e33\u0e04\u0e31\u0e0d\u0e19\u0e35\u0e49\u0e44\u0e27\u0e49",
    saveDate: "\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e43\u0e19 Google Calendar",
    calendarFile: "Apple Calendar \u0e41\u0e25\u0e30 Outlook",
    details: "\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14",
    celebrateEyebrow: "\u0e40\u0e09\u0e25\u0e34\u0e21\u0e09\u0e25\u0e2d\u0e07\u0e04\u0e27\u0e32\u0e21\u0e23\u0e31\u0e01",
    celebrateTitle: "\u0e40\u0e23\u0e32\u0e01\u0e33\u0e25\u0e31\u0e07\u0e08\u0e30\u0e41\u0e15\u0e48\u0e07\u0e07\u0e32\u0e19",
    celebrateCopy: "\u0e40\u0e23\u0e32\u0e22\u0e34\u0e19\u0e14\u0e35\u0e40\u0e1b\u0e47\u0e19\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e22\u0e34\u0e48\u0e07\u0e17\u0e35\u0e48\u0e08\u0e30\u0e44\u0e14\u0e49\u0e21\u0e35\u0e04\u0e38\u0e13\u0e23\u0e48\u0e27\u0e21\u0e41\u0e1a\u0e48\u0e07\u0e1b\u0e31\u0e19\u0e27\u0e31\u0e19\u0e1e\u0e34\u0e40\u0e28\u0e29\u0e02\u0e2d\u0e07\u0e40\u0e23\u0e32 \u0e23\u0e48\u0e27\u0e21\u0e40\u0e1b\u0e47\u0e19\u0e2a\u0e31\u0e01\u0e02\u0e35\u0e1e\u0e22\u0e32\u0e19\u0e43\u0e19\u0e1e\u0e34\u0e18\u0e35 \u0e23\u0e31\u0e1a\u0e1b\u0e23\u0e30\u0e17\u0e32\u0e19\u0e2d\u0e32\u0e2b\u0e32\u0e23 \u0e40\u0e15\u0e49\u0e19\u0e23\u0e33 \u0e41\u0e25\u0e30\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e04\u0e27\u0e32\u0e21\u0e17\u0e23\u0e07\u0e08\u0e33\u0e41\u0e2a\u0e19\u0e1e\u0e34\u0e40\u0e28\u0e29\u0e44\u0e1b\u0e14\u0e49\u0e27\u0e22\u0e01\u0e31\u0e19",
    scheduleEyebrow: "\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e01\u0e32\u0e23",
    scheduleDate: "\u0e27\u0e31\u0e19\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c\u0e17\u0e35\u0e48 8 \u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19 \u0e1e.\u0e28. 2569",
    ceremony: "\u0e1e\u0e34\u0e18\u0e35\u0e21\u0e07\u0e04\u0e25\u0e2a\u0e21\u0e23\u0e2a",
    reception: "\u0e07\u0e32\u0e19\u0e40\u0e25\u0e35\u0e49\u0e22\u0e07\u0e09\u0e25\u0e2d\u0e07",
    dinnerDancing: "\u0e14\u0e34\u0e19\u0e40\u0e19\u0e2d\u0e23\u0e4c\u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e40\u0e15\u0e49\u0e19\u0e23\u0e33",
    timeTba: "\u0e08\u0e30\u0e41\u0e08\u0e49\u0e07\u0e43\u0e2b\u0e49\u0e17\u0e23\u0e32\u0e1a\u0e20\u0e32\u0e22\u0e2b\u0e25\u0e31\u0e07",
    detailsSoon: "\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e07\u0e32\u0e19\u0e08\u0e30\u0e1b\u0e23\u0e30\u0e01\u0e32\u0e28\u0e40\u0e23\u0e47\u0e27 \u0e46 \u0e19\u0e35\u0e49",
    venueLabel: "\u0e2a\u0e16\u0e32\u0e19\u0e17\u0e35\u0e48<br>\u0e08\u0e31\u0e14\u0e07\u0e32\u0e19",
    venueEyebrow: "\u0e2a\u0e16\u0e32\u0e19\u0e17\u0e35\u0e48\u0e08\u0e31\u0e14\u0e07\u0e32\u0e19",
    venueTitle: "\u0e2a\u0e16\u0e32\u0e19\u0e17\u0e35\u0e48\u0e08\u0e31\u0e14\u0e07\u0e32\u0e19\u0e41\u0e15\u0e48\u0e07\u0e07\u0e32\u0e19",
    venueCopy: "\u0e41\u0e15\u0e30\u0e14\u0e49\u0e32\u0e19\u0e25\u0e48\u0e32\u0e07\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e14\u0e39\u0e2a\u0e16\u0e32\u0e19\u0e17\u0e35\u0e48\u0e41\u0e25\u0e30\u0e23\u0e31\u0e1a\u0e40\u0e2a\u0e49\u0e19\u0e17\u0e32\u0e07\u0e43\u0e19<br>Google Maps",
    openMaps: "\u0e40\u0e1b\u0e34\u0e14\u0e43\u0e19 Google Maps",
    countdownEyebrow: "\u0e19\u0e31\u0e1a\u0e16\u0e2d\u0e22\u0e2b\u0e25\u0e31\u0e07",
    countdownTitle: "\u0e08\u0e19\u0e01\u0e27\u0e48\u0e32\u0e08\u0e30\u0e16\u0e36\u0e07\u0e27\u0e31\u0e19\u0e02\u0e2d\u0e07\u0e40\u0e23\u0e32",
    days: "\u0e27\u0e31\u0e19",
    hours: "\u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07",
    minutes: "\u0e19\u0e32\u0e17\u0e35",
    seconds: "\u0e27\u0e34\u0e19\u0e32\u0e17\u0e35",
    rsvpEyebrow: "\u0e42\u0e1b\u0e23\u0e14\u0e15\u0e2d\u0e1a\u0e23\u0e31\u0e1a",
    rsvpTitle: "\u0e04\u0e38\u0e13\u0e08\u0e30\u0e23\u0e48\u0e27\u0e21\u0e09\u0e25\u0e2d\u0e07\u0e01\u0e31\u0e1a\u0e40\u0e23\u0e32\u0e44\u0e2b\u0e21",
    rsvpCopy: "\u0e01\u0e23\u0e38\u0e13\u0e32\u0e01\u0e23\u0e2d\u0e01\u0e41\u0e1a\u0e1a\u0e15\u0e2d\u0e1a\u0e23\u0e31\u0e1a\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e41\u0e08\u0e49\u0e07\u0e40\u0e23\u0e32\u0e27\u0e48\u0e32\u0e04\u0e38\u0e13\u0e08\u0e30\u0e21\u0e32\u0e23\u0e48\u0e27\u0e21\u0e07\u0e32\u0e19\u0e44\u0e14\u0e49\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48",
    rsvpButton: "\u0e15\u0e2d\u0e1a\u0e23\u0e31\u0e1a RSVP",
    rsvpNote: "\u0e01\u0e23\u0e38\u0e13\u0e32\u0e15\u0e2d\u0e1a\u0e23\u0e31\u0e1a\u0e20\u0e32\u0e22\u0e43\u0e19\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48 30 \u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19 \u0e1e.\u0e28. 2569",
    footerDate: "8 \u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19 \u0e1e.\u0e28. 2569",
  },
};

function updateCountdown() {
  const remaining = Math.max(0, weddingDate.getTime() - Date.now());
  const totalSeconds = Math.floor(remaining / 1000);
  const values = {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };

  for (const [unit, value] of Object.entries(values)) {
    units[unit].textContent = String(value).padStart(2, "0");
  }
}

function setLanguage(language) {
  const copy = translations[language] || translations.en;
  document.documentElement.lang = language === "th" ? "th" : "en";
  document.title = copy.pageTitle;
  document.querySelector('meta[name="description"]').setAttribute("content", copy.pageDescription);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = copy[element.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = copy[element.dataset.i18nHtml];
  });
  document.querySelectorAll("[data-language]").forEach((button) => {
    const isActive = button.dataset.language === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  try {
    window.localStorage.setItem("invitation-language", language);
  } catch {
    // The invitation still works when browser storage is unavailable.
  }
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

try {
  const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
  setLanguage(requestedLanguage === "th" ? "th" : window.localStorage.getItem("invitation-language") || "en");
} catch {
  setLanguage("en");
}

updateCountdown();
window.setInterval(updateCountdown, 1000);

