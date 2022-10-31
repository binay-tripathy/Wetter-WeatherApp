const search = document.getElementById("search");
const searchButton = document.getElementById("subbutton");
let error = document.querySelector(".error");

const getData = async (e) => {
  e.preventDefault();
  let cityName = search.value;
  let content = document.getElementById("city").innerHTML;
  if (cityName == "") {
    error.innerText = " ** Please enter city Name ";
  }
  else {
    try {
      const d = new Date();
      fetch(`https://api.weatherapi.com/v1/current.json?key=0bab7dd1bacc418689b143833220304&q=${cityName}`)
        .then((res) => res.json())
        .then((data) => {
          document.getElementById("city").innerHTML = data.location.name
          document.getElementById("temp").innerHTML = data.current.temp_c + '\xB0' + 'C'
          document.getElementById("condition").innerHTML = data.current.condition.text
          document.getElementById("wind").innerHTML = data.current.wind_kph + ' km/h'
          document.getElementById("pressure").innerHTML = data.current.pressure_mb + ' mb'
          document.getElementById("weaticon").innerHTML = data.current.condition.icon
        })
      error.innerText = "";
    }
    catch {
      error.innerText = " ** Please Enter Valid City Name ";
      content.innerHTML = "";
    }
  }
}
setInterval(date, 1000);

function date() {
  let d = new Date();
  document.getElementById("time").innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}

searchButton.addEventListener("click", getData);