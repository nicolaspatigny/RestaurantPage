import "./styles.css";
import { createHome } from "./modules/home";
import { createMenu } from "./modules/menu";
import { createContact } from "./modules/contact";

function createHeader() {
  const nav = document.createElement("nav");
  nav.classList.add("nav-bar");

  const homeBtn = document.createElement("button");
  const menuBtn = document.createElement("button");
  const contactBtn = document.createElement("button");

  homeBtn.classList.add("nav-button");
  menuBtn.classList.add("nav-button");
  contactBtn.classList.add("nav-button");

  homeBtn.textContent = "Home";
  menuBtn.textContent = "Menu";
  contactBtn.textContent = "Contact";

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  return { nav, homeBtn, menuBtn, contactBtn };
}

function initializeWebsite() {
  const content = document.getElementById("content");
  const { nav, homeBtn, menuBtn, contactBtn } = createHeader();
  const main = document.createElement("main");
  main.classList.add("page-content");

  content.appendChild(nav);
  content.appendChild(main);

  // Set default page
  main.appendChild(createHome());
  homeBtn.classList.add("active");

  // Add event listeners
  homeBtn.addEventListener("click", () => {
    main.innerHTML = "";
    main.appendChild(createHome());
    setActiveButton(homeBtn);
  });

  menuBtn.addEventListener("click", () => {
    main.innerHTML = "";
    main.appendChild(createMenu());
    setActiveButton(menuBtn);
  });

  contactBtn.addEventListener("click", () => {
    main.innerHTML = "";
    main.appendChild(createContact());
    setActiveButton(contactBtn);
  });
}

function setActiveButton(activeButton) {
  const buttons = document.querySelectorAll(".nav-button");
  buttons.forEach((button) => button.classList.remove("active"));
  activeButton.classList.add("active");
}

initializeWebsite();
