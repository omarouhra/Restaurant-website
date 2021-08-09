const ration = 0.2;
let options = {
  root: null,
  rootMargin: "0px",
  threshold: ration,
};

const handleIntersect = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > ration) {
      console.log(entry.target);
      entry.target.classList.add("reveal-visible");
      observer.unobserve(entry.target);
    }
  });
};

let observer = new IntersectionObserver(handleIntersect, options);

observer.observe(document.querySelectorAll('[class*="reveal-"]').forEach((r) => {
    observer.observe(r)
}));
