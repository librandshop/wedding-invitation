// Change this to your ceremony time once confirmed. Use: YYYY-MM-DDTHH:MM:SS
const weddingDate = new Date("2026-11-08T00:00:00");

const units = {
  days: document.querySelector("#days"),
  hours: document.querySelector("#hours"),
  minutes: document.querySelector("#minutes"),
  seconds: document.querySelector("#seconds"),
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

updateCountdown();
window.setInterval(updateCountdown, 1000);

