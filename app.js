const tl = gsap.timeline({
  defaults: {
    ease: 'power1.out'
  }
});
const tlTwo = gsap.timeline({
  defaults: {
    ease: 'power2.out'
  }
});
const tlSlowMo = gsap.timeline({
  defaults: {
    ease: 'SlowMo.out'
  }
});
const tlExpo = gsap.timeline({
  defaults: {
    ease: 'expo.out'
  }
});

tl.to(".g-sap", {
  x: "0%",
  duration: 1,
  opacity: 1
});

tl.to(".g-sap-btn", {
  y: "0%",
  duration: 0.3,
  opacity: 1
})

tlSlowMo.to("#about-title", {
  y: "0%",
  duration: 0.5,
  opacity: 1
})

tlSlowMo.to(".about-content", {
  x: "0%",
  duration: 0.5,
  opacity: 1
})

tlSlowMo.to(".header-img", {
  x: "0%",
  duration: 1,
  opacity: 1
})


tlTwo.to(".project-box img, .project-box h2, .project-box p", {
  x: "0%",
  duration: 1,
  opacity: 1
})

tlExpo.to(".left-col, .right-col", {
  x: "0%",
  duration: 2.4,
  opacity: 1
})
