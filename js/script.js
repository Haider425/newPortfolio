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
const mobileBreakpoint = 900; // Set this to match your CSS mobile breakpoint

function updateHeaderClass() {
  if (window.innerWidth <= mobileBreakpoint) {
    // Always add 'active' class in mobile mode
    header.classList.add("active");
  } else {
    // Apply scroll-based logic for larger screens
    if (window.scrollY > 25) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  }
}

// Initial call to set the correct state
updateHeaderClass();

// Update on scroll
window.addEventListener("scroll", updateHeaderClass);

// Update on resize (in case the user switches between mobile and desktop view)
window.addEventListener("resize", updateHeaderClass);

let hamburger = document.querySelector(".hamburger");
let navbar = document.querySelector(".menu");

hamburger.onclick = function() {
    navbar.classList.toggle('active');
    hamburger.classList.toggle('active');
};

var typed = new Typed('.autoTyper', {
  strings: ["Software Developer", "MERN Stack Developer", "Mobile App Developer", "Data Scientist"], //gimme few things to add here
  typeSpeed: 80,
  backSpeed: 50,
  backDelay: 2000,
  loop: true
});

window.addEventListener("scroll", function() {

  if (window.innerWidth <= mobileBreakpoint) {
    if(window.scrollY > 25) {
    navbar.classList.remove('active');
    hamburger.classList.remove('active');
    
    }
  }
});


const github = document.querySelector(".Github");
const linkedin = document.querySelector(".LinkedIn");
const gmail = document.querySelector(".Gmail");

github.onclick = function() {
  window.open("https://github.com/haider425");
}

linkedin.onclick = function() {
  window.open("https://www.linkedin.com/in/haider42");
}

gmail.onclick = function() {
  window.open("mailto:haider.saleem@ontariotechu.net");
}
