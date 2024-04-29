/* The following javascript file contains elements of AI generated code to create 
a fade in effect when scrolling down the webpage. The code has been edited to fit the 
use of the website being made.*/

/* The AI tool used for creating these scripts was Open Ai's  Chat GPT-3 */

/* The following was inspired by multiple sources including W3Schools and ChatGPT */

/* When the page will be loaded the only tab open will be "#recent"
and all other tabs are hidden until a button is clicked revealing the 
new tab---------------------------------------------------------------*/




/* The window.onload function makes 'recent' work appear as a default setting when
users enter or reload the page --------------------------------------------------*/
window.onload = function(){
    document.getElementById("recent").style.display = "flex";
    document.getElementById("studentWork").style.display = "none";
    document.getElementById("filmmaking").style.display = "none";
    document.getElementById("photography").style.display = "none";
    document.getElementById("animation").style.display = "none";
    document.getElementById("design").style.display = "none";
}

/* These functions allow users to click on a button and reveal the 
contents that are assigned to that button

These functions are repeated for each button and each div*/

function showRecent() {
  document.getElementById("recent").style.display = "flex";
  document.getElementById("studentWork").style.display = "none"; /* None is used to hide the other divs */
  document.getElementById("filmmaking").style.display = "none";
  document.getElementById("photography").style.display = "none";
  document.getElementById("animation").style.display = "none";
  document.getElementById("design").style.display = "none";
}

function showStudentWork() {
  document.getElementById("recent").style.display = "none";
  document.getElementById("studentWork").style.display = "flex";
  document.getElementById("filmmaking").style.display = "none";
  document.getElementById("photography").style.display = "none";
  document.getElementById("animation").style.display = "none";
  document.getElementById("design").style.display = "none";
}

function showFilmmaking() {
  document.getElementById("recent").style.display = "none";
  document.getElementById("studentWork").style.display = "none";
  document.getElementById("filmmaking").style.display = "flex";
  document.getElementById("photography").style.display = "none";
  document.getElementById("animation").style.display = "none";
  document.getElementById("design").style.display = "none";
}

function showPhotography() {
  document.getElementById("recent").style.display = "none";
  document.getElementById("studentWork").style.display = "none";
  document.getElementById("filmmaking").style.display = "none";
  document.getElementById("photography").style.display = "flex";
  document.getElementById("animation").style.display = "none";
  document.getElementById("design").style.display = "none";
}

function showAnimation() {
  document.getElementById("recent").style.display = "none";
  document.getElementById("studentWork").style.display = "none";
  document.getElementById("filmmaking").style.display = "none";
  document.getElementById("photography").style.display = "none";
  document.getElementById("animation").style.display = "flex";
  document.getElementById("design").style.display = "none";
}

function showDesign() {
  document.getElementById("recent").style.display = "none";
  document.getElementById("studentWork").style.display = "none";
  document.getElementById("filmmaking").style.display = "none";
  document.getElementById("photography").style.display = "none";
  document.getElementById("animation").style.display = "none";
  document.getElementById("design").style.display = "flex";
}


function toggleDropdown(id, iconId) {
  var content = document.getElementById(id);
  var icon = document.getElementById(iconId);

  if (content.style.display === "block") {
      content.style.display = "none";
      icon.classList.remove('active');
  } else {
      content.style.display = "block";
      icon.classList.add('active');
  }
}


//===============================Video Scroll Animation================================================//

document.addEventListener("DOMContentLoaded", function() {
  const servicesSection = document.getElementById("services");

  // Function to handle scroll event
  function handleScroll() {
    const scrollPosition = window.scrollY;
    const sectionTop = servicesSection.offsetTop - window.innerHeight / 2;
    const sectionBottom = sectionTop + servicesSection.offsetHeight;

    // Check if the top of the section is halfway across the screen
    if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
        servicesSection.classList.add("active");
    } else {
        servicesSection.classList.remove("active");
    }
}

  // Listen for scroll event
  window.addEventListener("scroll", handleScroll);

  // Initially check if the section is in viewport on page load
  handleScroll();
});




//================================H1 scroll================================================//


document.addEventListener('DOMContentLoaded', function() {
  const vid = document.getElementById('video1');
  const vid2 = document.getElementById('video2');
  const heading = document.getElementById('heading');
  

  // Pause video on load
  vid.pause();

  // Pause video on document scroll (stops autoplay once scroll started)
  window.onscroll = function() {
      vid.pause();
      updateHeadingPosition();
  };

  // Refresh video frames on interval for smoother playback
  setInterval(function() {
      vid.currentTime = window.scrollY / 1000;
  }, 40);

  function updateHeadingPosition() {
      const scrollPercentage = window.scrollY / (document.body.clientHeight - window.innerHeight);
      const maxScroll = 0.5; // Adjust as needed (percentage of total scroll)
      
      if (scrollPercentage > maxScroll) {
          heading.classList.add('hide-heading');
      } else {
          heading.classList.remove('hide-heading');
      }
  }
});



//================================WORD ANIMATION================================================//

document.addEventListener('DOMContentLoaded', function() {
  const dynamicWord = document.querySelector('.dynamic-word');
  const words = ['science', 'technology', 'humanity', 'innovators', 'dreamers'];
  let index = 0;
  let lastScrollPosition = 0;

  function updateHeadingText() {
      // Update the dynamic word with the next word
      dynamicWord.textContent = words[index];

      // Move to the next word in the array
      index = (index + 1) % words.length;
  }

  function onScroll() {
      // Check if the scroll position has changed significantly
      if (Math.abs(window.scrollY - lastScrollPosition) > window.innerHeight / 3) {
          updateHeadingText();
          lastScrollPosition = window.scrollY;
      }
  }

  window.addEventListener('scroll', onScroll);
});


//================================Buttons================================================//

function scrollToContact() {
  var contactSection = document.getElementById('contact');
  contactSection.scrollIntoView({ behavior: 'smooth' });
}
