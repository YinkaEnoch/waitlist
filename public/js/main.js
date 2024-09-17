// Close any open toast
const toastEl = document.querySelector(".toast.show");
console.log(toastEl);
if (toastEl) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastEl);
  setTimeout(() => {
    toastBootstrap.hide();
  }, 3000);
}

// Generate SVG dot
function generateSVG() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("fill", "#ffffff");
  svg.setAttribute("width", "16px");
  svg.setAttribute("height", "16px");
  svg.setAttribute("viewBox", "0 0 20 20");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "M7.8 10a2.2 2.2 0 0 0 4.4 0 2.2 2.2 0 0 0-4.4 0z");
  svg.appendChild(path);

  // Make it fixed
  svg.style.position = "fixed";
  svg.style.top = `${Math.floor(Math.random() * 100 + 1)}%`;
  svg.style.left = `${Math.floor(Math.random() * 100 + 1)}%`;
  svg.style.zIndex = "-100";

  // Randomized style
  const styles = ["left-anime", "right-anime", "top-anime", "bottom-anime"];
  const randomStyle = styles[Math.floor(Math.random() * 4)];

  svg.classList.add(randomStyle);

  return svg;
}

(function () {
  // Generate 500 dots
  const fragment = document.createDocumentFragment();

  for (let x = 0; x < 200; x++) {
    fragment.appendChild(generateSVG());
  }

  document.body.appendChild(fragment);

  // Animate dots
  anime({
    targets: ".left-anime",
    translateX: 100,
    easing: "easeInOutQuad",
    opacity: 0.4,
    loop: true,
    direction: "alternate",
    duration: 5000,
    autoplay: true,
  });

  anime({
    targets: ".right-anime",
    translateX: -100,
    easing: "easeInOutQuad",
    opacity: 0.4,
    loop: true,
    direction: "alternate",
    duration: 5000,
    autoplay: true,
  });

  anime({
    targets: ".top-anime",
    translateY: -100,
    easing: "easeInOutQuad",
    opacity: 0.4,
    loop: true,
    direction: "alternate",
    duration: 5000,
    autoplay: true,
  });

  anime({
    targets: ".bottom-anime",
    translateY: 100,
    easing: "easeInOutQuad",
    opacity: 0.4,
    loop: true,
    direction: "alternate",
    duration: 5000,
    autoplay: true,
  });
})();
