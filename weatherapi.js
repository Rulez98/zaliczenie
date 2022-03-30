myStorage = localStorage;

$.ajax('https://ip-api.com/json').done(function (cityResponse) {
    cityData = cityResponse;
    localStorage.setItem('city', cityData["city"]);
    var guestCity =myStorage.getItem('city');

    $.ajax('https://api.openweathermap.org/data/2.5/weather?q='+guestCity +'&units=metric&appid=cf833ea4d9b83ed6d740d22700d79d1b').done(function (weatherResponse) {
        weatherData = weatherResponse;
        localStorage.setItem('temp', weatherData.main["temp"]);
        var guestTemp =myStorage.getItem('temp');


        $("#yourTemp").html(guestCity + ': '+ guestTemp +'&deg;C');
    });
});
