const drumEl = document.querySelectorAll(".drum");

// Methods are just an functions that associated with an object
for (let i = 0; i < drumEl.length; i++) {
  // Detecting Button Press
  drumEl[i].addEventListener("click", function () {
    let clickedKey = this.innerHTML;
    makeSound(clickedKey);
    buttonAnimation(clickedKey);
  });
}

// Detecting Keyboared Press
document.addEventListener("keydown", function (keypress) {
  makeSound(keypress.key);

  buttonAnimation(keypress.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();

    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();

    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();

    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();

    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();

    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();

    case "l":
      let kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
