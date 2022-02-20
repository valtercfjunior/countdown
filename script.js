var countdownDays = document.getElementById('days');
var countdownHours = document.getElementById('hours');
var countdownMinutes = document.getElementById('minutes');
var countdownSeconds = document.getElementById('seconds');


var countDownDate = new Date("July 16, 2100 17:17:17").getTime();


var x = setInterval(function() {


  var now = new Date().getTime();


  var distance = countDownDate - now;

 
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

 countdownDays.innerHTML = days;
 countdownHours.innerHTML = hours;
 countdownMinutes.innerHTML = minutes;
 countdownSeconds.innerHTML = seconds;
 
 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);


/* OPENMODAL/CLOSEMODAL */

function openModal(){
  
  const modal = document.getElementById('modal')
  const content = document.getElementById('content')
  const rocketImage = document.getElementById('rocket-image')

  content.classList.toggle('blured')
  rocketImage.classList.toggle('blured')
  modal.classList.toggle('hidden')

}

const clearModal = ()=>{
  const modalText = document.getElementById('name')
  const modalMsg = document.getElementById('msg')
  const modalEmail = document.getElementById('email')

  modalText.value= ""
  modalMsg.value= ""
  modalEmail.value = ""

}

function closeModal(){
 clearModal()
 openModal()
 
}

/* SUBMIT MSG */

function submitEmail(){
  

  alert('E-mail enviado com suceeso. Obrigado!')
  clearModal()
  closeModal()
}

function openCode(){
  window.scrollTo(0, 100000000000);
  
  

  
}


