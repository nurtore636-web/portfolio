// jQuery қажет: CDN беттерде қосулы
$(function () {
  // Navbar active link (href салыстырып бояймыз)
  const path = window.location.pathname.split("/").pop() || "index.html";
  $(".navbar .nav-link").each(function(){
    const href = $(this).attr("href");
    if(href === path){ $(this).addClass("active"); }
  });

  // Smooth scroll (anchor-ларға)
  $('a[href^="#"]').on('click', function(e){
    const target = $($(this).attr('href'));
    if(target.length){
      e.preventDefault();
      $('html, body').animate({scrollTop: target.offset().top - 70}, 500);
    }
  });

  // Fade-in on load
  $(".fade-on-load").hide().fadeIn(600);

  // Back to top button
  const $btn = $("#backToTop");
  $(window).on("scroll", function(){
    if($(this).scrollTop() > 300){ $btn.fadeIn(200); } else { $btn.fadeOut(200); }
  });
  $btn.on("click", function(){ $("html, body").animate({scrollTop:0}, 500); });

$("#contactForm").on("submit", function(e) {
    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const message = $("#message").val().trim();
    let ok = true;

    // Reset all invalid classes
    $(".is-invalid").removeClass("is-invalid");

    // Check name length
    if (name.length < 2) {
      $("#name").addClass("is-invalid");
      ok = false;
    }
    

    // Email validation regex
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)) {
      $("#email").addClass("is-invalid");
      ok = false;
    }

    // Check message length
    if (message.length < 10) {
      $("#message").addClass("is-invalid");
      ok = false;
    }

    // If validation fails, show alert and prevent form submission
    if (!ok) {
      e.preventDefault();
      $("#formAlert").removeClass("d-none").text("Please fill all required fields correctly.");
    } else {
      alert("Message sent! Thank you.");
    }
  });  

 

  // Projects: modal fill (data-* атрибуттардан)
  $("#projectModal").on("show.bs.modal", function(event){
    const btn = $(event.relatedTarget);
    $("#pmTitle").text(btn.data("title"));
    $("#pmImg").attr("src", btn.data("img"));
    $("#pmDesc").text(btn.data("desc"));
    $("#pmTags").text(btn.data("tags"));
  });

  

  
});
