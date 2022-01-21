var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000);
}

var d = document.getElementById("dot1");
var dd = document.getElementById("dot2");
var ddd = document.getElementById("dot3");
var dddd = document.getElementById("dot4");
var ddddd = document.getElementById("dot5");

// if (d = document.getElementsByClassName(" active", "")) {
//   document.getElementById("h1").textContent = "THE BLACKLIST";
// }
// else {
  
// }
// if (dd = document.getElementsByClassName(" active", "")) {
//   document.getElementById("h1").textContent = "BREAKING BAD";
// }
// else {
//   display = 'table-column-group';
// }
// if (ddd = document.getElementsByClassName(" active", "")) {
//   document.getElementById("h1").textContent = "Paragraph changed!";
// }
// else {
//   display = 'table-column-group';
// }
// if (dddd = document.getElementsByClassName(" active", "")) {
//   document.getElementById("h1").textContent = "Paragraph changed!";
// }
// else {
//   display = 'table-column-group';
// }
// if (ddddd = document.getElementsByClassName(" active", "")) {
//   document.getElementById("h1").textContent = "Paragraph changed!";
// }
// else {
//   display = 'table-column-group';
// }


var MiniIndex = 0;
MiniSlides();

function MiniSlides() {
  var i;
  var slides = document.getElementsByClassName("minislides");
  var dotss = document.getElementsByClassName("dot2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  MiniIndex++;
  if (MiniIndex > slides.length) {MiniIndex = 1}    
  for (i = 0; i < dotss.length; i++) {
    dotss[i].className = dotss[i].className.replace(" active2", "");
  }
  slides[MiniIndex-1].style.display = "block";  
  dotss[MiniIndex-1].className += " active2";
  setTimeout(MiniSlides, 3000);
}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("recSlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000);
}

function myFunction() {
  var x = document.getElementById("myDIV");
  var y = document.getElementById("menu-bar");
  var b = document.getElementById("bur");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = 'none'
    b.className = "burger";
  } else {
    x.style.display = "none";
    y.style.display = 'block'
    b.className = "burger2";
  }
}

















// var content1 = document.getElementById("dot");
// var content2 = document.getElementById("dot");
// var content3 = document.getElementById("dot");
// var content4 = document.getElementById("dot");
// var content5 = document.getElementById("dot");

//  if (content2 = document.getElementsByClassName("active")) {
//     	document.getElementById("h1").innerHTML = "New text!";
//     	document.getElementById("year1").innerHTML = "New text!";
//     	document.getElementById("description1").innerHTML = "New text!";
//     	document.getElementById("imdb1").innerHTML = "New text!";
//     	document.getElementById("stars1").innerHTML = "New text!";
//     	document.getElementById("creators").innerHTML = "New text!";
//     } else{
//     	console.log('dadas');
//     }