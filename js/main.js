//when signin button is clicked, we grab the class modal and alter the display: block

//Variables
let signAction = document.querySelector('.modal');
let onSignAction = document.getElementById('signin');
let closeSign = document.getElementById('close');


let userError = document.getElementById('user');
let passError = document.getElementById('pass');

let $form = document.getElementById('getstarted');




//fuctions

//click sign   in to open - username and password
onSignAction.addEventListener ('click', event => {
 
  signAction.style.display = 'block';
})

//click close to go back to sign in
closeSign.addEventListener('click', event => {
  signAction.style.display = 'none';
})


userError.addEventListener('focus', event => {
  userError.classList.remove(`error`);
})

passError.addEventListener('focus', event => {
  passError.classList.remove(`error`);
})

$form.addEventListener('submit', event => {
  event.preventDefault();
  if(passError.value == ""){
    passError.classList.add(`error`);
    console.log("pass is working!");
  } 
  if(userError.value == ""){
    userError.classList.add(`error`);
    console.log("user is working!");
  }


  
  /*if ("valid" == "valid"){
    passError.classList.remove(`error`);
    userError.classList.remove(`error`);
   signAction.classList.remove(`modal`);
   console.log('removing');
 }*/

})
