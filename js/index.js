const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Links
const nav = document.querySelector("nav");
let navLinks = document.querySelectorAll("nav a");
// navLinks[0].textContent = siteContent["nav"]["nav-item-0"];
navLinks.forEach(
  (item, index) =>
    (item.textContent = siteContent["nav"]["nav-item-" + (index + 1)])
);
navLinks.forEach((item) => (item.style.color = "green"));

// CREATE AND APPEND
const newEl1 = document.createElement("a");
const newEl2 = document.createElement("a");
newEl1.classList.add("nav-item-7");
newEl2.classList.add("nav-item-8");
newEl1.href = "#";
newEl2.href = "#";
newEl1.textContent = "Fire";
newEl2.textContent = "Water";
newEl1.style.color = "red";
newEl2.style.color = "blue";
// console.log(newEl1);
// console.log(newEl2);
nav.appendChild(newEl1);
nav.appendChild(newEl2);

const ctaText = document.querySelector(".cta-text");
const ctaH1 = document.querySelector(".cta-text h1");
const ctaButton = document.querySelector(".cta-text button");
const ctaImg = document.querySelector("#cta-img");

ctaH1.textContent = siteContent["cta"]["h1"];
ctaButton.textContent = siteContent["cta"]["button"];
ctaImg.src = siteContent["cta"]["img-src"];

const topContent = document.querySelector(".top-content");
const textContent = document.querySelector(".text-content");
const textContentH4 = document.querySelectorAll(".text-content h4");
const textContentP = document.querySelectorAll(".text-content p");
const middleImg = document.querySelector(".middle-img");
const contact = document.querySelector(".contact");
const contactH4 = document.querySelector(".contact h4");
const contactP = document.querySelectorAll(".contact p");
const footer = document.querySelector("footer");
const footerP = document.querySelector("footer p");

const arrMid = ["features", "about", "services", "product", "vision"];
const contactInfo = ["address", "phone", "email"];

// textContentH4[0].textContent = siteContent["main-content"]["features-h4"];
// textContentH4[1].textContent = siteContent["main-content"]["about-h4"];
// textContentH4[2].textContent = siteContent["main-content"]["services-h4"];
// textContentH4[3].textContent = siteContent["main-content"]["product-h4"];
// textContentH4[4].textContent = siteContent["main-content"]["vision-h4"];
// textContentP[0].textContent = siteContent["main-content"]["features-content"];
textContentH4.forEach(
  (item, index) =>
    (item.textContent = siteContent["main-content"][arrMid[index] + "-h4"])
);
textContentP.forEach(
  (item, index) =>
    (item.textContent = siteContent["main-content"][arrMid[index] + "-content"])
);

middleImg.src = siteContent["main-content"]["middle-img-src"];

contactH4.textContent = siteContent["contact"]["contact-h4"];
contactP.forEach(
  (item, index) =>
    (item.textContent = siteContent["contact"][contactInfo[index]])
);

footerP.textContent = siteContent["footer"]["copyright"];
