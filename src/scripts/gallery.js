document.addEventListener("DOMContentLoaded", function () {
  const seeMoreBtn = document.getElementById("seeMoreBtn");
  const gallery = document.getElementById("grid");

  seeMoreBtn.addEventListener("click", function () {
      const newImage = document.createElement("div");
      newImage.className = "image";
      newImage.textContent = "New Image";
      gallery.appendChild(newImage);
      newImage.scrollIntoView({ behavior: "smooth" });
  });
});