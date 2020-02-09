// Example starter JavaScript from Bootstrap for disabling form submissions if there are invalid fields

    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            console.log("first validation")
          }
          console.log("now I'm at the next step");
          form.classList.add('was-validated');
        }, changeLocation());
      });
      function changeLocation(){
        if(validated){
          location.href= "thankYou.html";
        }
    })}

// serving the right link to the prototype depending on which radio button was clicked in the form
const seniorBtn = document.querySelector("#seniorBtn");
const familyBtn = document.querySelector("#familyBtn");
const caregiverBtn = document.querySelector("#caregiverBtn");

function btnSelected(){

}

function serveLink(e){
  console.log(e.target)
  if(e.target === seniorBtn){
    console.log(e.target)
    location.href= "link here";
  }

}
// remove column class from form so that it resizes to one column

const formCont = document.querySelector("#formCont");

window.addEventListener('resize', changeForm);

function changeForm() {
  if (window.innerWidth < 767) {
      formCont.classList.remove("col-8");
      formCont.classList.remove("pl-5");      
      formCont.classList.remove("pr-5");
  }
}