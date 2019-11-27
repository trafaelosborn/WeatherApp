$(document).ready(function() {
  let date = $(".date");
  let now = moment().format("MMM Do YY");
  date.text(now);
});

var submit = document.getElementById("submit");

$("#isitraining").click(function() {
alert("Yeah bruh it's probably raining :(")
});


$("#submit").click(function() {
  var cityName = document.getElementById("cityName");
  var city = $("#cityName").val();

  getCityData(city);

});

function getCityData(city) {

        

  var APIKey = "777e0509611adb49bc6cc87270ee6a1f";
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +
  city +
  "&units=imperial&appid=" +
  APIKey;

  $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      console.log(response.main.temp)
    
      var lat = response.coord.lat;
      var lon = response.coord.lon;
      var queryURLUVI =
        "http://api.openweathermap.org/data/2.5/uvi?&appid=" +
        APIKey +
        "&lat=" +
        lat +
        "&lon=" +
        lon;
      $.ajax({
        url: queryURLUVI,
        method: "GET"
      }).then(function(UVI) {
        $("#uv").text("UV: " + UVI.value);
      });

    $("#cityTitle").text(city);
    $("#temp").text("Temperature: " + response.main.temp);
    $("#humidity").text("Humidity: " + response.main.humidity);
    $("#wind").text("Wind: " + response.wind.speed);

    
  // creates button//
  $('#cityList').append('<button class="cityButton" data-id="'+ city +'">' + city + '</button>');

  var queryURLFiveDay =
        "http://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        "&units=imperial&appid=" +
        APIKey;
      $.ajax({
        url: queryURLFiveDay,
        method: "GET"
      }).then(function(fiveDay) {
        console.log(fiveDay);

        $("#date1").text("date: " + fiveDay.list[3].dt_txt);
        $("#temp1").text("Temp " + fiveDay.list[3].main.temp + " ºF");
        $("#humidity1").text("Humidity " + fiveDay.list[3].main.humidity + "%");
        var icon = fiveDay.list[3].weather[0].icon;
        var image1 = document.createElement("IMG");
        image1.alt = "weather icon";
        image1.setAttribute("class", "photo1");
        image1.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        $(".icon1").html(image1);

        $("#date2").text("date: " + fiveDay.list[11].dt_txt);
        $("#temp2").text("Temp " + fiveDay.list[11].main.temp + " ºF");
        $("#humidity2").text("Humidity " + fiveDay.list[11].main.humidity + "%");
        var icon = fiveDay.list[11].weather[0].icon;
        var image2 = document.createElement("IMG");
        image2.alt = "weather icon";
        image1.setAttribute("class", "icon2");
        image1.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        $(".icon1").html(image1);

        $("#date3").text("date: " + fiveDay.list[19].dt_txt);
        $("#temp3").text("Temp " + fiveDay.list[19].main.temp + " ºF");
        $("#humidity3").text("Humidity " + fiveDay.list[19].main.humidity + "%");
        var icon = fiveDay.list[19].weather[0].icon;
        var image2 = document.createElement("IMG");
        image1.alt = "weather icon";
        image1.setAttribute("class", "photo1");
        image1.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        $(".icon1").html(image1);

        $("#date4").text("date: " + fiveDay.list[27].dt_txt);
        $("#temp4").text("Temp " + fiveDay.list[27].main.temp + " ºF");
        $("#humidity4").text("Humidity " + fiveDay.list[27].main.humidity + "%");
        var icon = fiveDay.list[27].weather[0].icon;
        var image1 = document.createElement("IMG");
        image1.alt = "weather icon";
        image1.setAttribute("class", "photo1");
        image1.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        $(".icon1").html(image1);

        $("#date5").text("date: " + fiveDay.list[35].dt_txt);
        $("#temp5").text("Temp " + fiveDay.list[35].main.temp + " ºF");
        $("#humidity5").text("Humidity " + fiveDay.list[35].main.humidity + "%");
        var icon = fiveDay.list[35].weather[0].icon;
        var image1 = document.createElement("IMG");
        image1.alt = "weather icon";
        image1.setAttribute("class", "photo1");
        image1.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        $(".icon1").html(image1);
      });
  });

}


$('#cityList').on('click', '.cityButton', function(){

  var button = this;
  console.log($(this).attr("data-id"));
  city = $(this).attr("data-id");
  getCityData(city);
});