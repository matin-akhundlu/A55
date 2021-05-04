let userInfo = document.querySelectorAll(".user-info");
function myFunction(e) {
  let dataid = e.target.getAttribute("data-id");
  if (document.querySelector("ul.nav a.active") !== null) {
    document.querySelector("ul.nav a.active").classList.remove("active");
  }
  for (let user_info of userInfo) {
    console.log(user_info.getAttribute("data-id"));
    if (user_info.getAttribute("data-id") == dataid) {
      user_info.classList.remove("d-none");
    } else {
      user_info.classList.add("d-none");
    }
  }
  e.target.className = "nav-link active";
}
$("#featured-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});

$("#feedbacks-carousel").owlCarousel({
  loop: true,
  margin: 1,
  items: 3,
  autoplayHoverPause: false,
  animateOut: "slideOutUp",
  animateIn: "slideInUp",
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

$("#article-carousel").owlCarousel({
  loop: true,
  margin: 1,
  items: 3,
  autoplayHoverPause: false,
  animateOut: "slideOutUp",
  animateIn: "slideInUp",
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});

$("#adds-carousel").owlCarousel({
  loop: true,
  margin: 1,
  items: 3,
  responsive: true,
  autoplayHoverPause: false,
  animateOut: "slideOutUp",
  animateIn: "slideInUp",
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 6,
    },
  },
});
