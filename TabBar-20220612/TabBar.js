const items = document.querySelectorAll(".list-item");
const indicator = document.querySelector(".indicator");

items.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    document.querySelector(".active").classList.remove("active");

    item.classList.add("active");
    indicator.style.left = `${index * 96 + 48}px`;
  });
});
