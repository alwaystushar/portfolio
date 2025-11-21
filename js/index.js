document.body.style.overflowX = "hidden";


// drop down  see more options


function toggleContent(id) {
    const content = document.getElementById(`content-${id}`);
    content.classList.toggle("visible-content");
    const svg = document.getElementById(`svg-${id}`);
    svg.classList.toggle("rotate-180")
  }


const overlay = document.querySelector(".overlay");

// Update the CSS variables for clip-path based on mouse movement
window.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  const scrollY = window.scrollY; // Get current vertical scroll position
  
  // Set CSS custom properties for the X and Y coordinates of the mouse position
  overlay.style.setProperty("--x", `${clientX}px`);
  overlay.style.setProperty("--y", `${clientY + scrollY}px`); // Add scroll offset to Y
});



  // Add `active` class to overlay on `mouseenter` for elements with class `hover-text`
  document.querySelectorAll(".hover-text").forEach((element) => {
    element.addEventListener("mouseenter", () => {
      overlay.classList.add("active");
    });
  });

  document.querySelectorAll(".hover-text").forEach((element) => {
    element.addEventListener("mouseleave", () => {
      overlay.classList.remove("active");
    });
  });




  const div = document.querySelector('.my-div'); // Select your div element

// Function to adjust the div height
function adjustDivHeight() {
  const bodyHeight = document.body.scrollHeight; // Get the height of the body
  const divHeight = div.offsetHeight; // Get the current height of the div
  
  // Set the height of the div to be its own height + the height of the body
  div.style.height = `${bodyHeight}px`;
}

// Call the function when the window is loaded or resized
window.addEventListener('load', adjustDivHeight); 
window.addEventListener('resize', adjustDivHeight);







    // Check if the device is using a touchscreen
    (function () {
        // Function to check if the device is using a touchscreen
        function isTouchscreenDevice() {
          return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
        }
      
        // Select the target div safely
        const targetDiv = document.querySelector('.overlay');
      
        // If the target div exists and the device is touchscreen, apply the changes
        if (targetDiv && isTouchscreenDevice()) {
          targetDiv.classList.add('noOverlay');
        }
      })();



    // Get all buttons and circles
    const navOptionsBlack = document.querySelectorAll(".nav-optn-black");
    const navOptionsWhite = document.querySelectorAll(".nav-optn-white");

    // Function to add hover state
    function handleHover(index) {
      navOptionsBlack[index].classList.add("hover");
      navOptionsWhite[index].classList.add("hover");
    }

    // Function to remove hover state
    function removeHover(index) {
      navOptionsBlack[index].classList.remove("hover");
      navOptionsWhite[index].classList.remove("hover");
    }

    // Add event listeners for hover on nav-optn-black
    navOptionsBlack.forEach((navOptionBlack, index) => {
      navOptionBlack.addEventListener("mouseenter", () => handleHover(index));
      navOptionBlack.addEventListener("mouseleave", () => removeHover(index));
    });

    // Add event listeners for hover on nav-optn-white
    navOptionsWhite.forEach((navOptionWhite, index) => {
      navOptionWhite.addEventListener("mouseenter", () => handleHover(index));
      navOptionWhite.addEventListener("mouseleave", () => removeHover(index));
    });


      

    //   typewirter

    
      function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    
    const phrases = ["PRODUCT DESIGNER", "UI/UX DESIGNER", "FRONTEND DEVELOPER"];
    const el1 = document.getElementById("typed");
    const el2 = document.getElementById("white-typed");
    
    let intervalTime = 100;
    
    let currentPhraseIndex = 0;
    
    const typeEffect = async () => {
        while (true) {
            let currentWord = phrases[currentPhraseIndex];
    
            for (let i = 0; i < currentWord.length; i++) {
                el1.innerText = currentWord.substring(0, i + 1);
                el2.innerText = currentWord.substring(0, i + 1);
                await delay(intervalTime);
            }
    
            await delay(intervalTime * 10);
    
            for (let i = currentWord.length; i > 0; i--) {
                el1.innerText = currentWord.substring(0, i - 1);
                el2.innerText = currentWord.substring(0, i - 1);
                await delay(intervalTime);
            }
    
            await delay(intervalTime * 5);
    
            if (currentPhraseIndex === phrases.length - 1) {
                currentPhraseIndex = 0;
            } else {
                currentPhraseIndex++;
            }
        }
    };
    
    typeEffect();
    



    // Email


// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     emailjs.sendForm('service_65eojrt', 'template_4nbsjp4', this)
//       .then(function() {
//         alert('Email sent successfully!');
//       }, function(error) {
//         alert('Failed to send email: ' + error);
//       });
// });


// document.getElementById(`submit`).addEventListener('click',()=>{
//   alert("click");
// })



// document.getElementById('contact-form').addEventListener('submit', function (event) {
//   event.preventDefault(); // Prevent the form from reloading the page

//   // Collect form data
//   const formData = {
//     name: document.getElementById('name').value,
//     email: document.getElementById('email').value,
//     phone: document.getElementById('phone').value,
//     message: document.getElementById('message').value,
//   };

//   // Send email using EmailJS
//   emailjs.send('service_65eojrt', 'template_mlmpvgd', formData )
//     .then(function (response) {
//       alert('SUCCESS! Email sent: ' + response.status);
//     })
//     .catch(function (error) {
//       alert('FAILED... ' + JSON.stringify(error));
//     });
// });


// (function () {
//   emailjs.init("CoIA1Q9_aNTVfYa_f"); // Replace with your EmailJS User ID

//   // Handle form submission
//   document
//     .getElementById("contact-form")
//     .addEventListener("submit", function (event) {
//       event.preventDefault(); // Prevent page reload on submit

//       // Get form data
//       const formData = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         phone: document.getElementById("phone").value,
//         message: document.getElementById("message").value,
//       };

//       // Send form data via EmailJS
//       emailjs.send("service_65eojrt", "template_mlmpvgd", formData).then(
//         function (response) {
//           console.log("Success:", response);
//           alert("Your message has been sent successfully!");
//         },
//         function (error) {
//           console.error("Error:", error);
//           alert("Failed to send your message. Please try again.");
//         }
//       );
//     });
// })();




(function () {
  emailjs.init("CoIA1Q9_aNTVfYa_f"); // Replace with your EmailJS User ID

  // Handle form submission
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent page reload on submit

      // Get form data
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
      };
    
      // Send form data via EmailJS
      emailjs.send("service_65eojrt", "template_mlmpvgd", formData).then(
        (response) => {
          showNotification("success", "Your message has been sent successfully!");
    
          // Clear the form fields after success
          document.getElementById("contact-form").reset();
        },
        (error) => {
          showNotification("error", "Failed to send your message. Please try again.");
          
          // Optionally clear the form even on error (can be removed if not desired)
          document.getElementById("contact-form").reset();
        }
      );
    });



    
  // Function to display notification
  function showNotification(type, message) {
    const container = document.getElementById("notification-container");

    // Create notification element
    const notification = document.createElement("div");
    notification.className = `notification ${type}`;
    notification.textContent = message;

    container.appendChild(notification);

    // Display the notification
    notification.style.display = "block";

    // Remove the notification after 3 seconds
    setTimeout(() => {
      notification.remove();
    }, 3000);
  }
})();








function handleButtonClick() {
  const textToCopy = "tusharnegi.11.tn@gmail.com";
  const recipient = "tusharnegi.11.tn@gmail.com"; // Replace with your email
  const subject = "*Subject Here*"; // Customize subject
  const body = encodeURIComponent("Hello, this is the email body."); // Customize body

  // Attempt to copy text to clipboard
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        shownotify("success", "E-mail, copied to clipboard!");
      })
      .catch(err => {
        shownotify("error", "Could not copy. Try Contact page.");
        console.error("Error copying text:", err);
      });
  } else {
    shownotify("error", "Could not copy. Try Contact page.");
  }

  // Open the default email application
  setTimeout(() => {
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  }, 500); // Small delay for notify visibility
}





function shownotify(type, message) {
  const notify = document.getElementById("notify");
  notify.textContent = message;

  // Set notify style based on type
  notify.className = `notify ${type}`;
  notify.style.display = "block";
  notify.style.opacity = "1";

  // Hide notify after 3 seconds
  setTimeout(() => {
    notify.style.opacity = "0";
    setTimeout(() => {
      notify.style.display = "none";
    }, 300); // Wait for opacity transition
  }, 3000);
}




function openWhatsApp() {
  const phoneNumber = "918171839997"; // Replace with your WhatsApp number (with country code, e.g., 911234567890 for India)
  const message = "{Hello! I would like to get in touch.}"; // Customize your default message
  const encodedMessage = encodeURIComponent(message);

  // Open WhatsApp with prefilled message
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
}


// document.querySelectorAll('.info').forEach(info => {
//   const tooltipText = info.getAttribute('data-tooltip');

//   // Create tooltip div
//   const tooltip = document.createElement('div');
//   tooltip.classList.add('tooltip');
//   tooltip.textContent = tooltipText;

//   // Append tooltip to the info div
//   info.appendChild(tooltip);
// });

function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

if (!isTouchDevice()) { // Run only on non-touch devices
  document.querySelectorAll('.info').forEach(info => {
      info.addEventListener("mouseenter", () => {
          if (!info.querySelector('.tooltip')) { // Prevent multiple tooltips
              const tooltipText = info.getAttribute('data-tooltip');
              const tooltip = document.createElement('div');
              tooltip.classList.add('tooltip');
              tooltip.textContent = tooltipText;
              info.appendChild(tooltip);
          }
      });

      info.addEventListener("mouseleave", () => {
          const tooltip = info.querySelector('.tooltip');
          if (tooltip) tooltip.remove();
      });
  });
}

