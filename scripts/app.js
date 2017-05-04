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
      console.log(Geo.lat + "," + Geo.lng );
  }

//hit API
  var key = "c2197568420afa6b";
  var Weather = "http://api.wunderground.com/api/" + key + "forecast/geolookup/conditions/q/" + Geo.lat + "," + Geo.lng + ".json";
  console.log(Weather);

  $.ajax({
      url: Weather,
      dataType: "jsonp",
      success: function(data) {
        //Get all information
        console.log(data);
        // var location = data.location;
        // //setting the spans to the correct parameters
        // $('#location').html(location);
      }







  });






















});
