// 💖 Show hydration reminder on page + play sound
function showReminder() {
  const loveMsg = document.getElementById("love-message");
  loveMsg.innerText = " i love uhhhh!! Keep glowing and sipping 🌸";
  loveMsg.style.display = "block";

  
  const chime = document.getElementById("chime-sound");
  if (chime) {
    chime.currentTime = 0; // Reset to start
    chime.play().catch((err) => {
      console.warn("🎧 Audio play was blocked by browser:", err);
    });
  }
}

let index = 0;
setInterval(() => {
  document.body.style.backgroundImage = `url(${bgImages[index]})`;
  index = (index + 1) % bgImages.length;
}, 3600000); // Change every 1 hour

// 🔔 Notification permission + hourly reminder
Notification.requestPermission().then((result) => {
  if (result === "granted") {
    setInterval(() => {
      new Notification("💧 Time to Hydrate!", {
        body: "Cookie, drink some water and bloom! 🌼"
      });
    }, 3600000); // Notify every 1 hour
  }
});
