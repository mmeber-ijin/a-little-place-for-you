const openButton = document.getElementById("openLetter");
const backButton = document.getElementById("backToEnvelope");
const intro = document.getElementById("intro");
const letter = document.getElementById("letter");
const music = document.getElementById("backgroundMusic");

openButton.addEventListener("click", () => {
  intro.classList.add("hidden");
  letter.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (music) {
    music.volume = 0.5;
    music.play().catch((error) => {
      console.log("Music could not autoplay:", error);
    });
  }
});

backButton.addEventListener("click", () => {
  letter.classList.add("hidden");
  intro.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});
