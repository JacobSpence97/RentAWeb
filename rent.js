// to find the total
function total(price, repval) {
    var tax = (price + repval) * 0.7
    return price + repval + tax;  
}
if($("#dr_strange").is(':checked')){
    var price = 8.00;
    var repval = 25.00;
}else if($("#avatar").is(':checked')){
    var price = 10.00;
    var repval = 30.00;
}else if($("#bee").is(':checked')){
    var price = 5.00;
    var repval = 20.00;
}else if($("#cap").is(':checked')){
    var price = 8.00;
    var repval = 25.00;
}else if($("#bat").is(':checked')){
    var price = 10.00;
    var repval = 30.00;
}else if($("#wade").is(':checked')){
    var price = 5.00;
    var repval = 20.00;
}else if($("#hellboy").is(':checked')){
    var price = 10.00;
    var repval = 30.00;
}else if($("#billbo").is(':checked')){
    var price = 10.00;
    var repval = 30.00;
}else if($("#hulk").is(':checked')){
    var price = 2.00;
    var repval = 5.00;
}else if($("#tony").is(':checked')){
    var price = 5.00;
    var repval = 20.00;
}else if($("#it").is(':checked')){
    var price = 2.00;
    var repval = 5.00;
}else if($("#joke").is(':checked')){
    var price = 10.00;
    var repval = 30.00;
}else if($("#gandalf").is(':checked')){
    var price = 2.00;
    var repval = 5.00;
}else if($("#pi").is(':checked')){
    var price = 2.00;
    var repval = 5.00;
}else if($("#spidy").is(':checked')){
    var price = 10.00;
    var repval = 30.00;
}else if($("#x2").is(':checked')){
    var price = 5.00;
    var repval = 20.00;
}
//  Carousel
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}