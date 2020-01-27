

function getInput(event){
    console.log(event);
    localStorage.setItem('searchArea', event);
}
 
function searchEvents(){
      location.href= "searchresult.html";
}

function updateArea(){
    const newAreaField = document.querySelector("#newAreaField");
    const newLocationOnCard = document.querySelector(".newLocation span");
    const newLocationOnCard2 = document.querySelector(".newLocation2 span");
    const newLocationOnCard3 = document.querySelector(".newLocation3 span");
    const newLocationOnCard4 = document.querySelector(".newLocation4 span");
    const newLocationOnCard5 = document.querySelector(".newLocation5 span");
    const newLocationOnCard6 = document.querySelector(".newLocation6 span");
    const newLocationOnCard7 = document.querySelector(".newLocation7 span");
    console.log(newLocationOnCard);
 //   console.log(newAreaField);
    let newArea = localStorage.getItem('searchArea');
 //   console.log(newArea);
    newAreaField.textContent = newArea;
    newLocationOnCard.textContent = newArea;
    newLocationOnCard2.textContent = newArea;
    newLocationOnCard3.textContent = newArea;
    newLocationOnCard4.textContent = newArea;
    newLocationOnCard5.textContent = newArea;
    newLocationOnCard6.textContent = newArea;
    newLocationOnCard7.textContent = newArea;

}
updateArea()

/* let clickedCard = document.querySelector(".cardModal");

clickedCard.addEventListener("click", openModal); */

function openModal(){
    alert("You have to be signed in to book this event!");
}