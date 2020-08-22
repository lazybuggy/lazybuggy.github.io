window.onload = function () {
  var example = [
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
    if (example.length > i) {
      setTimeout(function () {
        root.innerHTML = example[i];
        textSequence(++i);
      }, 2200);
    } else {
      textSequence(0);
    }
  }
};
