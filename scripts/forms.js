// Example starter JavaScript from Bootstrap for disabling form submissions if there are invalid fields

    'use strict';
    
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
/*       const forms = document.getElementsByClassName('needs-validation');
      const submitBtn = document.querySelector('.submitBtn');

      submitBtn.addEventListener('click', function validateForm() {
        location.href= "thankYou.html";
      }) */
      //prevent submission
      //  submitBtn.addEventListener('click', validateForm);
/*         
        function validateForm(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
          changeLocation()
        }

      function changeLocation(){
        if(validated){
          location.href= "thankYou.html";
        }
    } */

// serving the right link to the prototype depending on which radio button was clicked in the form
const seniorBtn = document.querySelector("#seniorBtn");
const familyBtn = document.querySelector("#familyBtn");
const caregiverBtn = document.querySelector("#caregiverBtn");

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