//NavBare 
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', event => {
  navbar.classList.toggle('open-menu');
  menu.classList.toggle('move');
});

window.onscroll = () => {
  navbar.classList.remove('open-menu');
  menu.classList.remove('move');
}

//Header Backroud chage : 
let header = document.querySelector('header');
window.addEventListener('scroll' , () => {
  header.classList.toggle('header-active', window.scrollY > 0);
})


//Review Swiper
var swiper = new Swiper(".reviews-content", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Eamil
const Validate = () => {
  let name = document.querySelector('.name');
  let email = document.querySelector('.email');
  let message = document.querySelector('.message');
  let sendBtn = document.querySelector('.send-btn');

  sendBtn.addEventListener('click' , (e) => {
    e.preventDefault();
    if (name.value == "" || email.value == "" || message.value == "") {
      emptyerror();
    }
    else {
      sendmail(name.value, email.value, message.value);
      success();
    }
  })
}
Validate();

function sendmail(name,email,message) {
  emailjs.send("service_nmgmlun","template_717b1qa",{
    from_name: name,
    to_name: email,
    message: message,
  });
}

const emptyerror = () => {
  swal({
    title: "Oh No....",
    text: "Fields cannot be empty",
    icon: "error",
  });
}

const success = () => {
  swal({
    title: "Email send successfly",
    text: "We try to reply in 24 hours",
    icon: "success",
  });
}

// Scroll Top
let scrollTop = document.querySelector('.scroll-top');
window.addEventListener('scroll' , () => {
  scrollTop.classList.toggle('scroll-active', window.scrollY > 0);
})
