let count = 0;
let goal = 0;

function increment() {
  count++;
  document.getElementById("count").innerText = count;
  goal = parseInt(document.getElementById("goal").value) || 0;

  if (goal > 0 && count === goal) {
    // Vibrate for mobile
    if ("vibrate" in navigator) {
      navigator.vibrate([150, 80, 150]);
    }

    // Popup for desktop
    if (!/Mobi|Android/i.test(navigator.userAgent)) {
      alert("🎉 Alhamdulillah! You reached your goal.");
    }

    document.getElementById("doneMessage").style.display = "block";
  }
}

function resetCounter() {
  count = 0;
  document.getElementById("count").innerText = count;
  document.getElementById("doneMessage").style.display = "none";
}
