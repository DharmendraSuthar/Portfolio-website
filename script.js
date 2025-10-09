// Typed cursor effect
document.addEventListener('DOMContentLoaded', function() {
  const typingElement = document.getElementById('typingElement');
  const texts = [
      "Hello...",
      "Welcome to My Portfolio...",
      "I'm a Web Developer...",
      "I'm a Coder...",
  ];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 80;
  
  // Initialize with cursor
  typingElement.innerHTML = '<span class="cursor">_</span>';

  function typeWriter() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typingElement.innerHTML = currentText.substring(0, charIndex - 1) + '<span class="cursor">_</span>';
        charIndex--;
        typingSpeed = 50;
    } else {
        typingElement.innerHTML = currentText.substring(0, charIndex + 1) + '<span class="cursor">_</span>';
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentText.length) {
      typingSpeed = 1500;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      typingSpeed = 500;
    }
    setTimeout(typeWriter, typingSpeed);
  }

  setTimeout(typeWriter, 1000);
});


// Filter functionality
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    // Remove active class from all buttons
    $(".filter-item").removeClass("active");
    // Add active class to clicked button
    $(this).addClass("active");
    if (value === "all") {
      $(".post").show("1000");
    } else {
      $(".post").not("." + value).hide("1000");
      $(".post").filter("." + value).show("1000");
    }
  });

  // Skills filter functionality
  $(".skills-filter-item").click(function () {
    const value = $(this).attr("data-filter");
    // Remove active class from all buttons
    $(".skills-filter-item").removeClass("active");
    // Add active class to clicked button
    $(this).addClass("active");
    $(".skill-card").not("." + value).hide("1000");
    $(".skill-card").filter("." + value).show("1000");
  });

  // Initial filter for skills (show languages by default)
  $(".skill-card").not(".language").hide();
  $(".skill-card").filter(".language").show();
});

// Sticky navbar functionality
document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.getElementById('navbar-top');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('fixed-top');
      document.body.style.paddingTop = navbar.offsetHeight + 'px';
    } else {
      navbar.classList.remove('fixed-top');
      document.body.style.paddingTop = '0';
    } 
  });
});

// Back to top button functionality
const mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  mybutton.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
    ? "block" 
    : "none";
};

mybutton.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


// Form validation functionality
function validateForm() {
  let isValid = true;

  // Clear previous errors
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('mobileError').textContent = '';
  document.getElementById('messageError').textContent = '';

  // Get form values
  const name = document.getElementById('nameInput').value.trim();
  const email = document.getElementById('emailInput').value.trim();
  const mobile = document.getElementById('mobileInput').value.trim();
  const message = document.getElementById('messageInput').value.trim();

  // Validate name
  if (name === '') {
    document.getElementById('nameError').textContent = 'Name is required.';
    isValid = false;
  } else if (!/^[a-zA-Z\s]+$/.test(name)) {
    document.getElementById('nameError').textContent = 'Name must contain only letters and spaces.';
    isValid = false;
  } else if (name.length < 2) {
    document.getElementById('nameError').textContent = 'Name must be at least 2 characters long.';
    isValid = false;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    document.getElementById('emailError').textContent = 'Email is required.';
    isValid = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById('emailError').textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  // Validate mobile
  if (mobile === '') {
    document.getElementById('mobileError').textContent = 'Mobile number is required.';
    isValid = false;
  } else if (!/^\d{10}$/.test(mobile)) {
    document.getElementById('mobileError').textContent = 'Mobile number must be exactly 10 digits.';
    isValid = false;
  }

  // Validate message
  if (message === '') {
    document.getElementById('messageError').textContent = 'Message is required.';
    isValid = false;
  } else if (message.length < 10) {
    document.getElementById('messageError').textContent = 'Message must be at least 10 characters long.';
    isValid = false;
  }

  return isValid;
}

// Clear errors on input
document.getElementById('nameInput').addEventListener('input', function() {
  document.getElementById('nameError').textContent = '';
});

document.getElementById('emailInput').addEventListener('input', function() {
  document.getElementById('emailError').textContent = '';
});

document.getElementById('mobileInput').addEventListener('input', function() {
  document.getElementById('mobileError').textContent = '';
});

document.getElementById('messageInput').addEventListener('input', function() {
  document.getElementById('messageError').textContent = '';
});

