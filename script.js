"use strict";

// ========== Guide, Monitor, and Data Toggle Code Starts Here ========== //
const overlay = document.querySelector(".overlay");

//Toggle Home and Guide navigation
const toggleOverlay = function () {
  overlay.classList.toggle("hidden");
};
const toggleGuide = function () {
  weeklyGuide.classList.toggle("hidden");
};
const toggleMonitor = function () {
  monitoring.classList.toggle("hidden");
};
const toggleData = function () {
  dataGuide.classList.toggle("hidden");
};

//Guide Section Variables
const weeklyGuide = document.querySelector(".weeklyGuide");
const guideButton = document.querySelector(".guideButton");
const closeGuideButton = document.querySelector(".closeGuide");

//Show Guide Section
guideButton.addEventListener("click", function () {
  toggleGuide();
  toggleOverlay();
});
closeGuideButton.addEventListener("click", function () {
  toggleGuide();
  toggleOverlay();
});

//Monitor Section Variables
const monitoring = document.querySelector(".monitoring");
const monitorButton = document.querySelector(".monitorButton");
const closeMonitoriButton = document.querySelector(".closeMonitoring");

//Show Monitoring Section
monitorButton.addEventListener("click", function () {
  toggleMonitor();
  toggleOverlay();
});

closeMonitoriButton.addEventListener("click", function () {
  toggleMonitor();
  toggleOverlay();
});

// Monitoring Switches

const pump_One = document.querySelector(".pump--1");
const pump_Two = document.querySelector(".pump--2");
const light_One = document.querySelector(".light--1");

const pump1_state = document.getElementById("pump1--state");
const light1_state = document.getElementById("light1--state");
const pump2_state = document.getElementById("pump2--state");

const turnOff_img =
  "https://raw.githubusercontent.com/lauroro/esp8266-relay/d89f42412d6603db13ab290bce6dadf24131c116/sketch/data/off.svg?fbclid=IwAR1_v2_gcfNgXtdtDBY0BfxqYYDqOKGiPkXWib5akY7MTpRwLdyfAvcL1_4";

const turnOn_img =
  "https://raw.githubusercontent.com/lauroro/esp8266-relay/d89f42412d6603db13ab290bce6dadf24131c116/sketch/data/on.svg?fbclid=IwAR09GPpp0KXHAUJ2bIrS69D_MnMz1Kf7CUk4URR1PM1OSlZYaP1cOkwue2Y";

pump_One.addEventListener("click", function () {
  if (pump1_state.src === turnOff_img) {
    pump1_state.src = turnOn_img;
  } else {
    pump1_state.src = turnOff_img;
  }
});

light_One.addEventListener("click", function () {
  if (light1_state.src === turnOff_img) {
    light1_state.src = turnOn_img;
  } else {
    light1_state.src = turnOff_img;
  }
});

pump_Two.addEventListener("click", function () {
  if (pump2_state.src === turnOff_img) {
    pump2_state.src = turnOn_img;
  } else {
    pump2_state.src = turnOff_img;
  }
});

//Show Data
const dataGuide = document.querySelector(".dataGuide");
const dataButton = document.querySelector(".dataButton");
const closeDataButton = document.querySelector(".closeData");

dataButton.addEventListener("click", function () {
  toggleData();
  toggleOverlay();
});

closeDataButton.addEventListener("click", function () {
  toggleData();
  toggleOverlay();
});
// ========== Guide, Monitor, and Data Toggle Code Ends Here ========== //

// ========== Toggle Menu for mobile navigation Starts Here
const navClass = document.querySelector(".navClass");
const navicon = document.querySelector(".navicon");
const menuList = document.querySelector(".menuList");
//Navigation Class
const header = document.querySelector(".headerSection");
const navAbout = document.querySelector(".nav--about");
const navResearcher = document.querySelector(".nav--researcher");
const navContact = document.querySelector(".nav--contact");

const toggleMenu = function () {
  navClass.classList.toggle("toggleHeight");
  navicon.classList.toggle("navicon--rotate");
};
navicon.addEventListener("click", function () {
  toggleMenu();
});

navAbout.addEventListener("click", function () {
  if (!navClass.classList.contains("toggleHeight")) {
    toggleMenu();
  }
});

navResearcher.addEventListener("click", function () {
  if (!navClass.classList.contains("toggleHeight")) {
    toggleMenu();
  }
});

navContact.addEventListener("click", function () {
  if (!navClass.classList.contains("toggleHeight")) {
    toggleMenu();
  }
});

const closeMenu_onScroll = function (entries) {
  const [entry] = entries;
  /* console.log(entry); */

  if (!entry.isIntersecting && !navClass.classList.contains("toggleHeight")) {
    toggleMenu();
    console.log("Read");
  }
};

const headerObserver = new IntersectionObserver(closeMenu_onScroll, {
  root: null,
  threshold: 0,
});

headerObserver.observe(header);
// Toggle Menu for mobile navigation Ends Here

// Show Arrow Up
const welcomeSection = document.querySelector(".welcome");
const footerSection = document.querySelector("footer");
const arrowContainer = document.querySelector(".arrowIcon");

const showArrowUp = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    arrowContainer.classList.remove("hideArrowUp");
  } else if (entry.isIntersecting) {
    arrowContainer.classList.add("hideArrowUp");
  }
};

const hideArrowUp = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    arrowContainer.classList.add("hideArrowUp");
  } else if (!entry.isIntersecting) {
    arrowContainer.classList.remove("hideArrowUp");
  }
};

const welcomeSectionObserver = new IntersectionObserver(showArrowUp, {
  root: null,
  threshold: 0,
});

const footerSectionObserver = new IntersectionObserver(hideArrowUp, {
  root: null,
  threshold: 0,
});

welcomeSectionObserver.observe(welcomeSection);
footerSectionObserver.observe(footerSection);

//Logout Button
navContact.addEventListener("click", function () {
  window.location.replace("login.html");
});
