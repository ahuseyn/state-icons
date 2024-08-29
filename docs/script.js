// Copy the svg into clipboard
function copySVG(button) {
  const svg = button.querySelector("svg");

  if (!button.querySelector(".copyNotification")) {
    const copyNotification = document.createElement("div");
    copyNotification.setAttribute("class", "copyNotification");
    copyNotification.innerText = "Copied to clipboard";

    setTimeout(function () {
      copyNotification.remove();
    }, 1200);

    button.append(copyNotification);
  }

  navigator.clipboard.writeText(svg.outerHTML);
}

function animateMap() {
  const states = document.querySelectorAll("#continental path");
  const map = document.getElementById("continental");

  const margin = 20;

  const viewBox = [
    116.9 - margin,
    91.3 - margin,
    139 + margin * 2,
    86 + margin * 2,
  ];

  // Set map viewBox with margin
  map.setAttribute("viewBox", viewBox);

  // Center of the map
  const centerX = viewBox[0] + viewBox[2] / 2;
  const centerY = viewBox[1] + viewBox[3] / 2;

  // Easings for animation
  const easings = {
    calm: {
      break: "easeOutElastic(.1, .8)",
      shake: "easeInElastic(.1, .9)",
    },
    fun: {
      break: "easeOutElastic(.6, .2)",
      shake: "easeInElastic(.9, .1)",
    },
  };

  const duration = 1000;

  // Create timeline
  let timeline = anime.timeline({
    autoplay: true,
    duration,
    easing: easings.fun.break,
    loop: false,
    delay: 300,
  });

  // Add shaking animation to timeline
  timeline.add({
    targets: map,
    scale: 1.3,
    duration,
    easing: easings.fun.shake,
  });

  const divisor = -2;

  // Breakup animation
  states.forEach((state) => {
    // Center coordinates of states
    const bbox = state.getBBox();
    const stateCenterX = bbox.x + bbox.width * 0.5;
    const stateCenterY = bbox.y + bbox.height * 0.5;

    // Distance of state from the center
    const distanceX = centerX - stateCenterX;
    const distanceY = centerY - stateCenterY;

    // Add to timeline
    timeline.add(
      {
        targets: state,
        translateX: distanceX / divisor,
        translateY: distanceY / divisor,
      },
      duration
    );
  });
}

function renderIcons(searchText) {
  const container = document.getElementById("icons");

  container.innerHTML = "";

  statesArr
    ?.sort((a, b) => a.fips - b.fips)
    .filter((i) => i.name.toLowerCase().includes(searchText))
    .forEach((state) => {
      const wrapper = document.createElement("div");
      wrapper.setAttribute("class", "state-icon");

      const button = document.createElement("button");
      button.setAttribute("onclick", "copySVG(this)");

      // Create svg element for the state
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svg.setAttribute("viewBox", state.box);
      svg.setAttribute("width", "48px");
      svg.setAttribute("height", "48px");
      svg.setAttribute("fill", "currentColor");
      svg.setAttribute("data-name", state.name);
      svg.setAttribute("data-fips", state.fips);

      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      path.setAttribute("d", state.path);

      // Create name of the state
      const name = document.createElement("div");
      name.setAttribute("class", "state-name");
      name.innerText = state.name;

      // Combine elements and append to "main"
      svg.append(path);
      button.append(svg);
      wrapper.append(button);
      button.append(name);
      container.append(wrapper);
    });
}

addEventListener("DOMContentLoaded", function () {
  // Add search input listener
  document
    .getElementById("searchField")
    .addEventListener("input", function (e) {
      const text = e.target.value.toLowerCase();

      renderIcons(text || "");
    });

  renderIcons("");
  animateMap();
});
