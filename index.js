const button = document.querySelector(".submit-button");
const ratesForm = document.querySelector(".rates-form");
const ratings = document.getElementsByName("ratings");
const mainCard = document.querySelector("#main-card");
const hiddenCard = document.querySelector(".card");
const scoreSpan = document.querySelector("#score");

const toggleHidden = () =>{
    mainCard.classList.toggle("hidden");
    hiddenCard.classList.toggle("hidden");
}

ratesForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    let selected = Array.from(ratings).find(rating => rating.checked);
    scoreSpan.textContent = `You selected ${selected.value} out of 5`;
    toggleHidden();
    return ()=> ratesForm.submit();
});


