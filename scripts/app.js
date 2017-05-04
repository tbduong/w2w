$(document).ready(function() {
  console.log( "Up and running!" );

  //placeholder for longitude, latitude coordinates
  var Geo={};

  //Create success, error functions to check if browser can support geolocation
  if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(success, error);
  } else {
      alert("Geolocation is not supported on this browser.");
  }
  //error function
  function error(){
      alert("Uh oh! We could not find you.");
  }
  //success function
  function success(position){
      Geo.lat = position.coords.latitude;
      Geo.lng = position.coords.longitude;
  }









});
