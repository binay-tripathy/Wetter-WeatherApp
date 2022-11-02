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
      //fetching weather api
      fetch(`https://api.weatherapi.com/v1/current.json?key=0bab7dd1bacc418689b143833220304&q=${cityName}`)
        .then((res) => res.json()) 
        .then((data) => {

          document.getElementById("city").innerHTML = data.location.name
          document.getElementById("temp").innerHTML = data.current.temp_c + '\xB0' + 'C'
          document.getElementById("condition").innerHTML = data.current.condition.text
          document.getElementById("wind").innerHTML = data.current.wind_kph + ' km/h'
          document.getElementById("pressure").innerHTML = data.current.pressure_mb + ' mb'

          //FETCHING CONDITIONS.JSON FILE
          fetch('./conditions.json')
            .then((response) => response.json())
            .then((data1) => {

              if (data.current.is_day == 1) { //IF ITS DAY THEN THIS WILL EXECUTE
                for (var i = 0; i < data1.length; i++) {
                  if (data1[i].code == data.current.condition.code) {
                    var scan = document.createElement("img");
                    scan.src = `day/${data1[i].icon}.png`;
                    const list = document.getElementById("weaticon");
                    while (list.hasChildNodes())
                      list.removeChild(list.firstChild);
                    var picsrc = document.getElementById("weaticon");
                    picsrc.appendChild(scan);
                  }
                }
              }
              else {  //IF ITS NIGHT THEN THIS WILL EXECUTE
                for (var i = 0; i < data1.length; i++) {
                  if (data1[i].code == data.current.condition.code) {
                    var scan = document.createElement("img");
                    scan.src = `night/${data1[i].icon}.png`;
                    const list = document.getElementById("weaticon");
                    while (list.hasChildNodes())
                      list.removeChild(list.firstChild);
                    var picsrc = document.getElementById("weaticon");
                    picsrc.appendChild(scan);
                  }
                }

              }
            })
        })


      error.innerText = "";
    }
    catch {
      // error.innerText = " ** Please Enter Valid City Name ";
      content.innerHTML = "";
    }
  }
}

//TIME FUNCTION
setInterval(date, 1000);

function date() {
  let d = new Date();
  document.getElementById("time").innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}

searchButton.addEventListener("click", getData);