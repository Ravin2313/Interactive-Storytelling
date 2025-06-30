window.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");
  if (music) {
    music.volume = 0.5; // 🔊 Set low volume so it doesn't blast
  }

  const storyElement = document.querySelector("p");
  const text = storyElement.innerText;
  storyElement.innerText = "";

  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      storyElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 30); // 🕐 Typing speed
    }
  }

  typeWriter();
});
