// SCROLL BUTTON
function scrollToSection() {
  document.getElementById("products").scrollIntoView({behavior:"smooth"});
}

// FORM VALIDATION
document.getElementById("form").onsubmit = function(e){
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if(name==="" || email===""){
    alert("Fill all fields");
    e.preventDefault();
  } else {
    alert("Submitted successfully!");
  }
};

// SCROLL ANIMATION
window.addEventListener("scroll", () => {
  document.querySelectorAll(".fade").forEach(el => {
    if(el.getBoundingClientRect().top < window.innerHeight){
      el.classList.add("show");
    }
  });
});