console.log("Load script.js");

// Instantiating the global app object
var app = {};
var getStartedModal = new bootstrap.Modal(document.getElementById("getStarted"), {});
var vacStationModal = new bootstrap.Modal(document.getElementById("stationModal"), {});
var vacBusesModal = new bootstrap.Modal(document.getElementById("busesModal"), {});
document.onreadystatechange = function () {
  //getStartedModal.show();
  //vacStationModal.show();
  vacBusesModal.show();
};