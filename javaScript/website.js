"use strict";

const allSectionAnimation = document.querySelectorAll(".sec-anim");

const revealSection = function (entries, observe) {
  const [ent] = entries;
  if (!ent.isIntersecting) return;
  ent.target.classList.remove("section--hidden");
  sectionObserve.unobserve(ent.target);
};
const sectionObserve = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSectionAnimation.forEach((sec) => {
  sectionObserve.observe(sec);
  sec.classList.add("section--hidden");
});

// let x = 5;

// const fn = function () {
//   const x = 2;
// };

// fn();
// console.log(x);
