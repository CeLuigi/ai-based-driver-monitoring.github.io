document.addEventListener("DOMContentLoaded", function () {
 document.querySelectorAll("a").forEach(function (button) {
   button.addEventListener("click", function (event) {
     event.preventDefault();
     let latexDiv = button.nextElementSibling;
     if (latexDiv.style.display === "none") {
       latexDiv.style.display = "block";
     } else {
       latexDiv.style.display = "none";
     }
   });
 });
});
