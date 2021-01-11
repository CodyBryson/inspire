export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp
    this.icon = data.weather[0].icon
    this.description = data.weather[0].description
    this.farenheit = Math.floor(data.main.temp * 9 / 5 - 459.67)
    this.celcius = Math.floor(data.main.temp - 273.15)
  }

  get Template() {
    return `
    <div class="col text-center">
    <h2 class="text-strong">${this.city}</h2>
    <h2><span id="temptype">${this.farenheit}</span>&#176 <span id="templetter">F</span></h2>
    <h5 class= "text-strong"style="text-transform: uppercase">${this.description}</h5>
    <p class= "text-strong temptoggle" style="text-transform: uppercase"onclick="app.weatherController.getFar()">Farenheit <span>|</span></p><p class="text-strong temptoggle" style="text-transform: uppercase"onclick="app.weatherController.getCel() <span class="temptoggle" onclick="app.weatherController.getCel()">Celcius </span>
    </div>
    `

  }

}
