const ratingLables = document.querySelectorAll(".numbers");
let value


ratings.forEach((rating) => {
    rating.addEventListener("click", (event) => {
      value = event.target.textContent;
      ratings.forEach((ratingbtn) => {
        ratingbtn.removeAttribute("id", "selected");
      });
      rating.setAttribute("id", "selected");
    });
});