let menuToggle = document.querySelector('.navigation-toggle');
let rightTab = document.querySelector('.right-header-tab');
let darkBackground = document.querySelector('.dark-background');
let darkBackground2 = document.querySelector('.dark-background-2');

let headerLogo = document.querySelector('.header-logo');
let leftTab = document.querySelector('.left-header-tab');


headerLogo.addEventListener('click', () => {
    if (leftTab.classList.contains('active')) {
      leftTab.classList.remove('active');
      darkBackground.classList.remove('active');
      headerLogo.classList.remove('active');
      rightTab.classList.remove('active');
    } else {
      leftTab.classList.add('active');
      darkBackground.classList.add('active');
      headerLogo.classList.add('active');
    }
});
  
darkBackground.addEventListener('click', () => {
    leftTab.classList.remove('active');
    darkBackground.classList.remove('active');
    headerLogo.classList.remove('active');
    rightTab.classList.remove('active');
});
  
menuToggle.addEventListener('click', () => {
    rightTab.classList.add('active');
    darkBackground.classList.add('active');
});

const selectedAll = document.querySelectorAll(".option-selected");

selectedAll.forEach(selected => {
  const optionsContainer = selected.previousElementSibling;
  const optionsList = optionsContainer.querySelectorAll(".option");

  selected.addEventListener("click", () => {
    if (optionsContainer.classList.contains("active")) {
      optionsContainer.classList.remove("active");
    } else {
      let currentActive = document.querySelector(".options-box.active");

      if (currentActive) {
        currentActive.classList.remove("active");
      }

      optionsContainer.classList.add("active");
    }
  });

  optionsList.forEach(o => {
    o.addEventListener("click", () => {
      selected.innerHTML = o.querySelector("label").innerHTML;
      optionsContainer.classList.remove("active");
    });
  });
})

// selectedAll.forEach(selected => {
//   const optionsContainer = selected.previousElementSibling;
//   const optionsList = optionsContainer.querySelectorAll(".option");

//   selected.addEventListener("click", () => {
//     if (optionsContainer.classList.contains("active")) {
//       optionsContainer.classList.remove("active");
//     } else {
//       let currentActive = document.querySelector(".options-box.active");

//       if (currentActive) {
//         currentActive.classList.remove("active");
//       }

//       optionsContainer.classList.add("active");
//     }
//   });

//   optionsList.forEach(o => {
//     o.addEventListener("click", () => {
//       selected.innerHTML = o.querySelector("label").innerHTML;
//       optionsContainer.classList.remove("active");
//     });
//   });
// })