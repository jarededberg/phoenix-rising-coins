// Phoenix Rising Coin Co. — shared behavior

document.addEventListener("DOMContentLoaded", function () {
  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
  }

  // Mark active nav link
  var current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (href === current) a.classList.add("active");
  });

  // Contact form: let the browser submit this natively to FormSubmit.co.
  // (FormSubmit's file-upload support is only documented for standard
  // multipart form posts, not their AJAX endpoint, so we don't intercept
  // this one — it redirects to thanks.html via the _next hidden field.)
  var form = document.getElementById("coin-contact-form");
  if (form) {
    form.addEventListener("submit", function () {
      var submitBtn = form.querySelector("button[type=submit]");
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";
    });
  }
});
