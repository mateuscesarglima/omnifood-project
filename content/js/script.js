console.log("Hello world");

const myName = "Mateus";

// h1.addEventListener("click", () => {
//   h1.textContent = "myName";
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// });

// SET Current year
const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

btnNav.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);

    // scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if(href !== "#" && href.startsWith("#")) {
      const section = document.querySelector(href)
      section.scrollIntoView({behavior: 'smooth'})
    }

    // Close mobile navigation
    if(link.classList.contains('main-nav-link')){
      header.classList.toggle("nav-open")
    }
  });
});

// Sticky navigation
const sectionHero = document.querySelector(".section-hero")

const obs = new IntersectionObserver((entries) => {
  console.log(entries)
  const ent = entries[0];
  console.log(ent)
  if(ent.isIntersecting === false) {
    document.body.classList.add('sticky')
  }else {
    document.body.classList.remove('sticky')
  }
}, {
  // In the viewport
  root: null,
  threshold: 0,
  rootMargin: "-80px",
})
obs.observe(sectionHero)
///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
