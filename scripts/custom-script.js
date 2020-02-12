// Adding a back to top button inspired by https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
//Get the button:
mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.style.scrollBehavior = "smooth";
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// make the search area function listen for the user input
function getInput(event){
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

    let newArea = localStorage.getItem('searchArea');

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

/* Making the Modal on the event search result page display the right card clicked */

let viewBtn1 = document.querySelector("#view1");
let viewBtn2 = document.querySelector("#view2");
let viewBtn3 = document.querySelector("#view3");
let viewBtn4 = document.querySelector("#view4");
let viewBtn5 = document.querySelector("#view5");
let viewBtn6 = document.querySelector("#view6");
let viewBtn7 = document.querySelector("#view7");

const modalTitle = document.querySelector('#modalTitle');
const modalImg = document.querySelector('#modalImg');
const modalText = document.querySelector('#modalText');
const modalOrgan = document.querySelector('#modalOrganizer');

viewBtn1.addEventListener("click", fetchData);
viewBtn2.addEventListener("click", fetchData);
viewBtn3.addEventListener("click", fetchData);
viewBtn4.addEventListener("click", fetchData);
viewBtn5.addEventListener("click", fetchData);
viewBtn6.addEventListener("click", fetchData);
viewBtn7.addEventListener("click", fetchData);

function fetchData(e){
  if (e.target === viewBtn1){
    modalTitle.textContent = "Cycling trip";
    modalImg.src = "images/photos/cycling-ride.png";
    modalText.textContent = "Connecting the youth with seniors. Through the trishaw rides youth have opportunities to engage with young people in an active setting, allowing you to have meaningful dialogues and them to learn about your past."
    modalOrgan.textContent = "Cycling Without Age is a volunteer organisation founded in 2012, based in Copenhagen";
  }
  else if(e.target === viewBtn2){
    modalTitle.textContent = "Board Games afternoon";
    modalImg.src = "images/senioren-spielen.jpg";
    modalText.textContent = "Connecting people who enjoy playing board games every second Saturday of the month. We have hundreds of games you can choose from and everyone is welcome to join."
    modalOrgan.textContent = "Multigeneration house is a public house that brings together people of all ages";
  } 
    else if(e.target === viewBtn3){
      modalTitle.textContent = "Computer for beginners";
      modalImg.src = "images/photos/granny-pc.png";
      modalText.textContent = "We believe that you're never too old to learn new things! This month we facilitate a small workshop for everyone who is interested in learning about how to use a computer. Don't feel afraid, our teachers are helpful and patient and will start from scratch."
      modalOrgan.textContent = "The Senior Association was founded in 1976 and has 18.960 members.";
    }
   else if(e.target === viewBtn4){
    modalTitle.textContent = "Gardening together";
    modalImg.src = "images/gardening.jpg";
    modalText.textContent = "We usually meet in one of our members garden and work together. We all bring some snacks and the host offers drinks if we get thursty. You should bring practical clothes and shoes that can get dirty."
    modalOrgan.textContent = "The nature lovers is a bunch of private people who love to be outside and garden in company";
  }  
   else if(e.target === viewBtn5){
    modalTitle.textContent = "Painting class";
    modalImg.src = "images/photos/senior-painting.png";
    modalText.textContent = "We are a group of artists and amateurs who just love to paint together. This time we have a portrait class with a real model. Bring your favourite colours and brushes, we have papers that you can use."
    modalOrgan.textContent = "The school for applied arts is a traditional institution that wants to offer an environment of creativity and atrs to people of all ages and backgrounds.";
  }  
    else if(e.target === viewBtn6){
      modalTitle.textContent = "Sunday hike light";
      modalImg.src = "images/photos/hiking-goup.png";
      modalText.textContent = "Do you enjoy taking in fresh air and nature? Then is Sunday hike is for you! We meet in a small group and you don't have to be worries about pace or difficulty. Bring your hiking shoes and comfy clothes."
      modalOrgan.textContent = "Active Seniors Group is a private association of seniors who enjoy outdoor activities. We started to meet up 4 years ago and made many memories together since.";
    }  
    else if(e.target === viewBtn7){
      modalTitle.textContent = "Baking together";
      modalImg.src = "images/photos/woman-baking.png";
      modalText.textContent = "We are a group of ladies that love to bake and meet up to try and test out new recipes. No matter if you are an experienced baker or you just love exploring, we are happy to welcome new members."
      modalOrgan.textContent = "Our group is just a small circle of ladies who love to chat whilst trying new recipes.";
    }  
}

