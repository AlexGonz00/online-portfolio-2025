function userScroll() {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      //navbar.classList.add('bg-dark');
      navbar.classList.add('navbar-sticky');
    } else {
      //navbar.classList.remove('bg-dark');
      navbar.classList.remove('navbar-sticky');
    }
  });
}

document.addEventListener('DOMContentLoaded', userScroll);

document.addEventListener("DOMContentLoaded", function () {
  const carouselEl = document.getElementById("heroVideoCarousel");
  const carousel = new bootstrap.Carousel(carouselEl, {
    interval: false,
    pause: false,
    ride: false
  });

  const items = carouselEl.querySelectorAll(".carousel-item");

  // Play the video in the active slide immediately
  const firstVideo = items[0].querySelector("video");
  if (firstVideo) firstVideo.play();

  items.forEach((item, index) => {
    const video = item.querySelector("video");

    if (!video) return;

    // Make sure hidden videos don't preload ahead
    video.preload = "metadata";

    // When a video finishes → go to next slide
    video.addEventListener("ended", () => {
      carousel.next();
    });
  });

  // When the slide changes → start the video in the new slide
  carouselEl.addEventListener("slid.bs.carousel", () => {
    const active = carouselEl.querySelector(".carousel-item.active video");
    if (active) {
      active.currentTime = 0;  // reset in case it froze
      active.play();
    }
  });

  // Prevent Bootstrap's ride from auto-playing at start
  carouselEl.addEventListener("slide.bs.carousel", (e) => {
    const video = e.relatedTarget.querySelector("video");
    if (video) video.pause();
  });
});

// Video Modal
const videoBtn = document.querySelector('.video-btn');
const videoModal = document.querySelector('#videoModal');
const video = document.querySelector('#video');
let videoSrc;

if (videoBtn !== null) {
  videoBtn.addEventListener('click', () => {
    videoSrc = videoBtn.getAttribute('data-bs-src');
  });
}

if (videoModal !== null) {
  videoModal.addEventListener('shown.bs.modal', () => {
    video.setAttribute(
      'src',
      videoSrc + '?autoplay=1;modestbranding=1;showInfo=0'
    );
  });

  videoModal.addEventListener('hide.bs.modal', () => {
    video.setAttribute('src', videoSrc);
  });
}

// Replace Text In Header
const checkReplace = document.querySelector('.replace-me');

if (checkReplace !== null) {
  const replace = new ReplaceMe(checkReplace, {
    animation: 'animated fadeIn',
    speed: 2000,
    separator: ',',
    loopCount: 'infinite',
    autoRun: true,
  });
}

// Fade in on scroll
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fadeInTop");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.3 // 30% is visible
  }
);

document.querySelectorAll(".fadeIn-animated").forEach(el => {
  observer.observe(el);
});

// loader animation
$(window).on("load",function(){
     $(".loader-wrapper").fadeOut("slow");
});