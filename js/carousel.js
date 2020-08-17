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
  var root = document.getElementsByClassName("carousel-root")[0];
  // var hmm = root[0];
  console.log("root", root);
  // console.log('meep', document.getElementsByClassName("carousel-root")[0]);
  // console.log('yoyo',root.firstChild); // or
  // console.log('meep',root.childNodes[0]);
  var items = root.getElementsByClassName("carousel-item");
  console.log("items", items);
  var html = document.getElementsByClassName("html")[0];
  console.log("html", html);

  var canvas = document.getElementsByClassName("lucia-canvas")[0];
  var canvasInfo = canvas.getBoundingClientRect();

  var width = canvasInfo.width;
  var height = canvasInfo.height;
  this.console.log("canvas", canvas, width, height);
  canvas.width = width;
  canvas.height = height;
  console.log("errmrmm", canvas.width, canvas.height);
  var context = canvas.getContext("2d");

  // window.addEventListener("resize", resizeCanvas);

  // for (var x = 0.5; x < width; x += 100) {
  //   for (var y = 0.5; y < height; y += 100) {
  //     context.moveTo(x, y);
  //     // context.lineTo(500, x);
  //     context.arc(x, y, 10, 0, 2 * Math.PI);
  //   }
  // }

  //TO DO
  // DEBOUNCE RESIZING

  var starz = [];

  var i = 0;
  while (i < 60) {
    i++;
    var x = Math.random() * width;
    var y = Math.random() * height;
    // context.moveTo(x, y);
    // context.arc(x, y, 2, 0, 2 * Math.PI);
    const hi = new Object();
    hi.x = Math.random() * width;
    hi.y = Math.random() * height;
    hi.radius = 0.2 + Math.random() * (2 - 0.2);
    hi.maxRadius = 2 + Math.random() * (3 - 2);
    hi.speed = 0.01 + Math.random() * (0.05 - 0.01);
    hi.stroke = "#edec9a";
    hi.fill = "#fcfcd2";
    starz.push(hi);
  }
  console.log("stARZ...", starz);
  context.strokeStyle = "#eee";
  context.stroke();

  var resized = false;
  function animate() {
    // context.clearRect(0, 0, canvas.width, canvas.height);
    if (canvas.width !== innerWidth || canvas.height !== innerHeight) {
      canvas.width = innerWidth; // resize canvas
      canvas.height = innerHeight; // also clears the canvas
      resized = true;
    } else {
      context.clearRect(0, 0, canvas.width, canvas.height);
      // console.log("oerm'");

      // clear if not resized
    }

    for (i = 0; i < starz.length; i++) {
      var o = starz[i];
      if (resized) {
        o.x = Math.random() * canvas.width;
        o.y = Math.random() * canvas.height;
      }
      new roundRect(o.x, o.y, o.radius, o.stroke, o.fill, context);
      // o.radius += 0.2; //o.speed.x;

      o.radius += o.speed;

      if (o.radius <= 1 || o.radius >= o.maxRadius) {
        o.speed = -o.speed;
      }

      // o.h += 0.3; //o.speed.y;
    }
    resized = false;
    requestAnimationFrame(animate);
  }

  //////
  // var x = 0;
  // var y = 15;
  // var speed = 5;

  // function animate() {
  //   reqAnimFrame =
  //     window.mozRequestAnimationFrame ||
  //     window.webkitRequestAnimationFrame ||
  //     window.msRequestAnimationFrame ||
  //     window.oRequestAnimationFrame;

  //   reqAnimFrame(animate);

  //   x += speed;

  //   if (x <= 0 || x >= 475) {
  //     speed = -speed;
  //   }

  //   draw();
  // }

  // function draw() {
  //   // var canvas = document.getElementById("ex1");
  //   // var context = canvas.getContext("2d");

  //   context.clearRect(0, 0, 500, 170);
  //   context.fillStyle = "#ff00ff";
  //   context.fillRect(x, y, 25, 25);
  // }

  /////

  animate();

  // context.arc(75, 275, 570, 0, Math.PI * 2, true);
  // context.arc(100, 35, 25, 0, 2 * Math.PI);
  // context.strok e();
  // context.fillStyle = "#111";
  // context.fill();
};
