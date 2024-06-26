particlesJS("particles-js", {
  particles: {
    number: {
      value: 160,
      density: {
        enable: true,
        value_area: 1800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 0,
    },
    size: {
      value: 1.5,
      random: true,
      anim: {
        enable: false,
        speed: 0,
        size_min: 0.3,
        sync: false,
      },
    },
    move: {
      enable: true,
      speed: 0,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
    },
  },
  opacity: {
    value: 1,
    random: true,
    anim: {
      enable: true,
      speed: 1,
      opacity_min: 0,
      sync: false,
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: false,
        mode: "repulse",
      },
      onclick: {
        enable: false,
        mode: "push",
      },
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: true,
  config_demo: {
    hide_card: false,
    background_color: "#b61924",
    background_image: "",
    background_position: "50% 50%",
    background_repeat: "no-repeat",
    background_size: "cover",
  },
});


document.addEventListener("DOMContentLoaded", function() {
  // Set the loader to be visible for a specified duration (e.g., 3 seconds)
  const loaderDuration = 1000; // 3000 milliseconds = 3 seconds

  // Function to hide the loader and display the content
  function hideLoader() {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");
    loader.style.display = "none";
    content.style.display = "block";
  }

  // Set a timeout to hide the loader after the specified duration
  setTimeout(hideLoader, loaderDuration);
});

const header = document.querySelector(".navbar");

window.addEventListener("scroll", function() {
  if (window.scrollY > 25) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});


document.addEventListener('DOMContentLoaded', (event) => {
  const menuToggle = document.querySelector('#menuToggle input');
  const menu = document.querySelector('#menu');
  

  menuToggle.addEventListener('change', () => {
      if (menuToggle.checked) {
          menu.classList.add('active');
      } else {
          menu.classList.remove('active');
      }
  });
});



