$(document).ready(function () {
  //command that will change the background once the page has loaded.
  $("body").css("background-color", "beige");

  //an alert once the page has loaded;
  alert("The page has loaded");

  //changes only a single paragraph’s styling
  $("#story").css("color", "red");

  //accordion animation style when each section is hovered over
  $("#menu").hover(
    function () {
      $(this).find(".submenu").stop(true, true).slideDown();
    },
    function () {
      $(this).find(".submenu").stop(true, true).slideUp();
    }
  );

  //chained effect to slide all the elements of your page around repeatedly whilst changing the background
  function animateElements() {
    $("body")
      .css("background-color", getRandomColor())
      .animate({ marginLeft: "+=50px" }, 500)
      .animate({ marginLeft: "-=50px" }, 500, animateElements);
  }
  function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
  animateElements();

  //fades a picture in and out over a period of 3 seconds each when the respective buttons are clicked.
  let isAnimating = false;
  let animation;

  function fadeEffect() {
    if (!isAnimating) return; // Stop if animation is halted
    animation = $("#myImage").fadeIn(3000).fadeOut(3000, fadeEffect);
  }

  $("#start").click(function () {
    if (!isAnimating) {
      isAnimating = true;
      fadeEffect();
    }
  });

  $("#stop").click(function () {
    isAnimating = false;
    $("#myImage").stop(true, true).hide(); // Stop animation immediately
  });
});

//fades out ANY object that is clicked on.
$(document).on("click", "*", function (event) {
  event.stopPropagation(); // Prevent event bubbling
  $(this).fadeOut();
});
