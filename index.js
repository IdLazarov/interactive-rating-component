const button = document.querySelector(".submit-button");
const ratesForm = document.querySelector(".rates-form");

ratesForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    console.log(ratesForm.innerHTML);

    return ()=> ratesForm.submit();
});


let spanText = `You selected ${3} out of 5`;