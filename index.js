const ratingLables = document.querySelectorAll(".numbers");
let value


ratingLables.forEach((rating) => {
    rating.addEventListener("click", (event) => {
      value = event.target.textContent;
      ratingLables.forEach((ratingbtn) => {
        ratingbtn.removeAttribute("id", "selected");
      });
      rating.setAttribute("id", "selected");
    });
});