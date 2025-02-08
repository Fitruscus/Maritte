function openCard() {
    const card = document.getElementById("card");
    const message = document.getElementById("message");
    card.style.transform = "rotateX(180deg)";
    setTimeout(() => {
      message.style.display = "block";
    }, 400);
  }
  
  function closeCard() {
    const card = document.getElementById("card");
    const message = document.getElementById("message");
    card.style.transform = "rotateX(0deg)";
    message.style.display = "none";
  }
  
  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.getElementById("hearts").appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    setInterval(createHeart, 500);
    const cardContainer = document.querySelector(".card-container");
    const message = document.getElementById("message");
  
    cardContainer.addEventListener("click", openCard);
    message.addEventListener("click", closeCard);
  });