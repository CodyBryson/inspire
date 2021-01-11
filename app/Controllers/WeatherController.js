import { ProxyState } from "../AppState.js";
import weatherService from "../Services/WeatherService.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
function drawWeather() {
  console.log("THE WEATHER MAN SAYS:", ProxyState.weather);
  let template = ProxyState.weather.Template
  document.getElementById('weather').innerHTML = template
}


function drawClock() {
  var clock = new Date();
  document.getElementById("time").innerHTML = clock.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

}
drawClock();
setInterval(drawClock, 1000);

// function tempToggle(str) {
//   if (str = "F") {
//     document.getElementById("temptype").innerHTML = (`${ProxyState.weather.farenheit}`)
//   } else {
//     document.getElementById("temptype").innerHTML = (`${ProxyState.weather.celcius}`)
//   }
// }


export default class WeatherController {
  constructor() {
    ProxyState.on("weather", drawWeather);
    this.getWeather()
  }

  getWeather() {
    try {
      weatherService.getWeather()
    }
    catch (e) {
      console.error(e)
    }
  }
}
