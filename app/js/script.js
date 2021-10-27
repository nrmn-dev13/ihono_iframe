console.log("Load script.js");

// Instantiating the global app object
var app = {};
var getStartedModal = new bootstrap.Modal(document.getElementById("getStarted"), {});
var vacStationModal = new bootstrap.Modal(document.getElementById("stationModal"), {});
var vacBusesModal = new bootstrap.Modal(document.getElementById("busesModal"), {});
var locInterestModal = new bootstrap.Modal(document.getElementById("locationInterestModal"), {});
document.onreadystatechange = function () {
  //getStartedModal.show();
  //vacStationModal.show();
  //vacBusesModal.show();
  locInterestModal.show();  
};
// Checkbox function
const checkboxLocation = document.querySelector('#tick-checkbox');
const inputLocation = document.querySelector('.form-group--location');
checkboxLocation.addEventListener('change', () => {
  if (checkboxLocation.checked) {
    inputLocation.classList.add('active')
  } else {
    inputLocation.classList.remove('active')
  }
});
// Radio function
const emailInput = document.querySelector('.form-group--email');
const phoneInput = document.querySelector('.form-group--phone');
const radioButton = document.querySelectorAll('.form-control--radio');
for (var i = 0; i < radioButton.length; i++) {
  (function (index) {
    radioButton[index].addEventListener("change", function () {
      if (this.value == 'email') {
        emailInput.classList.add('active')
        phoneInput.classList.remove('active')
      }
      else if (this.value == 'phone') {
        phoneInput.classList.add('active')
        emailInput.classList.remove('active')
      }
    })
  })(i);
};