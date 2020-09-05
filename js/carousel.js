class roundRect {
  constructor(rectX, rectY, radius, stroke, fill, c) {
    c.beginPath();
    c.strokeStyle = stroke;
    c.fillStyle = fill;
    c.moveTo(rectX, rectY);
    c.arc(rectX, rectY, radius, 0, 2 * Math.PI);
    c.closePath();
    c.fill();
    c.stroke();
  }
}

window.onload = function () {
  var canvas = document.getElementsByClassName("lucia-canvas")[0];
  var canvasInfo = canvas.getBoundingClientRect();

  var width = canvasInfo.width;
  var height = canvasInfo.height;

  canvas.width = width;
  canvas.height = height;

  var context = canvas.getContext("2d");

  //TO DO
  // DEBOUNCE RESIZING

  var starsArray = [];

  var i = 0;
  while (i < 60) {
    i++;
    const star = new Object();
    star.x = Math.random() * width;
    star.y = Math.random() * height;
    star.radius = 0.2 + Math.random() * (1 - 0.2);
    star.maxRadius = 1.5 + Math.random() * (3 - 1.5);
    star.speed = 0.01 + Math.random() * (0.05 - 0.01);
    star.stroke = "#edec9a";
    star.fill = "#fcfcd2";
    starsArray.push(star);
  }
  context.strokeStyle = "#eee";
  context.stroke();

  var resized = false;
  var isDesktop = false;
  function animate() {
    if (isDesktop) {
      if (canvas.width !== innerWidth || canvas.height !== innerHeight) {
        canvas.width = innerWidth; // resize canvas
        canvas.height = innerHeight; // also clears the canvas
        resized = true;
      } else {
        context.clearRect(0, 0, canvas.width, canvas.height);
      }

      for (i = 0; i < starsArray.length; i++) {
        var currentStar = starsArray[i];
        if (resized) {
          currentStar.x = Math.random() * canvas.width;
          currentStar.y = Math.random() * canvas.height;
        }
        new roundRect(
          currentStar.x,
          currentStar.y,
          currentStar.radius,
          currentStar.stroke,
          currentStar.fill,
          context
        );

        currentStar.radius += currentStar.speed;

        if (
          currentStar.radius <= 1 ||
          currentStar.radius >= currentStar.maxRadius
        ) {
          currentStar.speed = -currentStar.speed;
        }
      }
    }
    resized = false;
    if (window.innerWidth > 768) {
      isDesktop = true;
    } else {
      isDesktop = false;
    }
    requestAnimationFrame(animate);
  }

  animate();

  var sequenceText = [
    "A LOVER OF TRAVEL",
    "ADDICTED TO YA BOOKS",
    "A UOTTAWA SOFTWARE ENGINEERING ALUMNI",
    "A SUCKER FOR AFFIRMATIONS & GOOD VIBES",
    "IN LOVE WITH SPACE & THE UNKNOWN",
    "AN ANIME LOVER",
  ];
  var root = document.getElementsByClassName("seq")[0];
  textSequence(0);
  function textSequence(i) {
    if (sequenceText.length > i) {
      setTimeout(function () {
        root.innerHTML = sequenceText[i];
        textSequence(++i);
      }, 2500);
    } else {
      textSequence(0);
    }
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
};
