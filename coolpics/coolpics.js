const menu = document.querySelector(".menu");
const gallery = document.querySelector(".gallery");
//menu toggle button
function toggleMenu() {
    const navItems = document.querySelector(".navItems");
    navItems.classList.toggle("show");
}

function handleResize() {
    const navItems = document.querySelector(".navItems");
    if (window.innerWidth > 1000) {
        menu.style.display = "none";
        navItems.classList.add("show");
    } else {
        menu.style.display = "block";
        navItems.classList.remove("show");
    }
}

const modal = document.createElement("dialog");
modal.innerHTML = `
    <img id="modalImage" src="" alt="">
    <button class="close-viewer">X</button>
`;
document.body.appendChild(modal);

const modalImage = modal.querySelector("#modalImage");
const closeButton = modal.querySelector(".close-viewer");

closeButton.addEventListener("click", () => modal.close());

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.close();
  }
});


function showModal(event) {
    const clickedImg = event.target.closest("img");
    if (!clickedImg) return;
    const src = clickedImg.getAttribute("src");
    const alt = clickedImg.getAttribute("alt");
    const fullSrc = src.split("-")[0] + "-full.jpeg";
    modalImage.src = fullSrc;
    modalImage.alt = alt;
    modal.showModal();
}

menu.addEventListener("click", toggleMenu);
window.addEventListener("resize", handleResize);
gallery.addEventListener("click", showModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
  }
});