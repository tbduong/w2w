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

      var key = "c2197568420afa6b";
      // var Weather = "http://api.wunderground.com/api/" + key + "forecast/geolookup/q/" + Geo.lat + "," + Geo.lng + ".json";
      //Use San Francisco location for Now
      var Weather = "http://api.wunderground.com/api/c2197568420afa6b/conditions/q/CA/San_Francisco.json";
      console.log(Weather);

      $.ajax({
          url: Weather,
          dataType: "jsonp",
          success: function(data) {
            //Get all information
            console.log(data);

          var location = data.current_observation.display_location.city;
          console.log(location);
          var temp = data.current_observation.temp_f;
          console.log(temp);
          var wind = data.current_observation.wind_string;
          console.log(wind);
          
          $('#location').html(location);
          }







  });

  }

});
