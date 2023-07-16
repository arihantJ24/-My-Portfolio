
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// making navbar component active on clincking the link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('eader nav a');
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + " ]")
          .classList.add("active");
      });
    }
  });
  // making navbar sticky
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

// remove
    
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");

};

// scrooll

ScrollReveal({
    // reset: true,
    distance:'80px',
    duration: 2000,
    delay  :  200
});


ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .coding-container , .project-box , .contact form', { origin: "bottom" });

ScrollReveal().reveal(".home-content h1 , .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });


// typed js

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Coder', 'Problem Solver'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop : true
})


// tab bar for about section 
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-links");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-links");
  document.getElementById(tabname).classList.add("active-tab");
}


// add form in contact

 const scriptURL =
   "https://script.google.com/macros/s/AKfycbwQdwndWr85CeOKm4w1uAutFN5fnTHdIi-hbe3OmEQDqppah063LTZjGnwlydTFNAtQ3w/exec";
 const form = document.forms["submit-to-google-sheet"];
 const msg = document.getElementById("msg");
 form.addEventListener("submit", (e) => {
   e.preventDefault();
   fetch(scriptURL, { method: "POST", body: new FormData(form) })
     .then((response) => {
       msg.innerHTML = "Message Sent Successfully";
       setTimeout(function () {
         msg.innerHTML = "";
       }, 5000);
       form.reset();
     })
     .catch((error) => console.error("Error!", error.message));
 });
