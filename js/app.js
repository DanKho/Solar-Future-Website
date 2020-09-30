// ============================Gloabal Variables================================
var whiteContrastSlideIndexes;
var backgroundConstrastSlideIndexes;


// =================================Main========================================
setContrastPageIndexes();

/*Change the color of the top navigation links & sideNav button based on the carousel image
currently being presented*/
$('#myCarousel').on('slide.bs.carousel',function(e){
  // Index of next carousel image
  var slideTo = $(e.relatedTarget).index();
  // top Nav elements
  var topNavLinks = document.getElementsByClassName("topNavButton");
  var sideNavBtn = document.getElementById("sideNavBtn");
  // Change color of top nav elements
  setNavBarColor(slideTo);
  setNavBarBackground(slideTo);
});

// Expand the side navigation bar
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
}

// Collapse the side navigation bar
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}

// Create a smooth light color transition for the elements specified
function carouselSwitchColorLight(element){
  element.style.color = 'white';
  // Color transition effect
  element.style.transition = 'all 0.6s';
  /* 1 pixel black shadow to left, top, right and bottom */
  element.style.textShadow = '-0.7px 0 black, 0 0.7px black, 0.7px 0 black, 0 -0.7px black';
}

// Create a smooth dark color transition for the elements specified
function carouselSwitchColorDark(element){
  element.style.color = 'black';
  element.style.transition = 'all 0.6s';
  element.style.textShadow = '';
}

/*Check whether the user has scrolled down from the landing page containing an
image carousel down to a content section*/
function checkUserSectionScroll(){
  var target = $(".contentSection").offset().top;
  if ($(window).scrollTop() >= target){
    return true;
  }
  else{
    return false;
  }
}

/* Set the global variables for contrast slide indexes based on the values present
in the local storage */
function setContrastPageIndexes(){
  whiteContrastSlideIndexes = Object.values(JSON.parse(localStorage.getItem("whiteContrastSlideIndexes")));
  backgroundConstrastSlideIndexes = Object.values(JSON.parse(localStorage.getItem("backgroundConstrastSlideIndexes")));
}

// Set color for top navigation elements
function setNavBarColor(slideToIndex){
  // Get top nav elements
  var topNavLinks = document.getElementsByClassName("topNavButton");
  var sideNavBtn = document.getElementById("sideNavBtn");
  var pageTitle = document.getElementById("title");
  if (whiteContrastSlideIndexes.includes(slideToIndex)){
    for (var i = 0; i < topNavLinks.length; i++){
      var element = topNavLinks[i];
      // Change color of the current topnav element to light
      carouselSwitchColorLight(element);
    }
    // Change color of the sidenav button to light
    carouselSwitchColorLight(sideNavBtn);
    carouselSwitchColorLight(pageTitle);
  }
  else {
    for (var i = 0; i < topNavLinks.length; i++){
      var element = topNavLinks[i];
      // Change color of the current topnav element to dark
      carouselSwitchColorDark(element);
    }
    // Change color of the sidenav button to dark
    carouselSwitchColorDark(sideNavBtn);
    carouselSwitchColorDark(pageTitle);
  }
}

// Add contrasted background to topNav elemenets
function setNavBarBackground(slideToIndex){
  // Get topNav elements
  var topNavLinks = document.getElementsByClassName("topNavButton");
  var sideNavBtn = document.getElementById("sideNavBtn");
  var pageTitle = document.getElementById("title");
  if (backgroundConstrastSlideIndexes.includes(slideToIndex)){
    for (var i = 0; i < topNavLinks.length; i++){
      var element = topNavLinks[i];
      // Change color of the current topnav element to light
      element.style.background = 'rgba(255, 255, 255, 0.7)';
    }
    // Change color of the sidenav button to light
    pageTitle.style.background = 'rgba(255, 255, 255, 0.7)';
    sideNavBtn.style.background = 'rgba(255, 255, 255, 0.7)';
  }
  else {
    for (var i = 0; i < topNavLinks.length; i++){
      var element = topNavLinks[i];
      // Change color of the current topnav element to dark
      element.style.background = '';
    }
    // Change color of the sidenav button to dark
    pageTitle.style.background = '';
    sideNavBtn.style.background = '';
  }
}
