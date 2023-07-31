const search = document.getElementById("search");
const searchButton = document.getElementById("subbutton");
let error = document.querySelector("#error");

// https://weatherapi-com.p.rapidapi.com/current.json?rapidapi-key=7d0ceb0d4cmsh0de16948158e93cp10b602jsn70b39d682e0e&q=London

const getData = async (e) => {
  e.preventDefault();
  let cityName = search.value;
  if (cityName == "") {
    error.innerText = "** Please enter a city name";
  }

  else {
    try {
      //FETCHING WEATHER API
      await fetch (`https://weatherapi-com.p.rapidapi.com/current.json?rapidapi-key=7d0ceb0d4cmsh0de16948158e93cp10b602jsn70b39d682e0e&q=${cityName}`)
        .then((res) => {
          if(res.ok){
            return res.json()
          }
          else{
            throw ("** Please Enter Valid City Name");
          }
        })
        .then((data) => {
          function element(id, api_data){
            document.getElementById(id).innerHTML = api_data;
          }

          element("city", data.location.name);
          element("temp", data.current.temp_c + '\xB0' + 'C');
          element("condition", data.current.condition.text);
          element("wind", data.current.wind_kph + ' km/h');
          element("pressure", data.current.pressure_mb + ' mb');

          //FETCHING CONDITIONS.JSON FILE
          fetch('./conditions.json')
            .then((response) => response.json())
            .then((data1) => {

              function weatherimage(dan){
                var scan = document.createElement("img");
                scan.src = `${dan}/${data1[i].icon}.png`;
                const list = document.getElementById("weaticon");
                while (list.hasChildNodes())
                  list.removeChild(list.firstChild);
                var picsrc = document.getElementById("weaticon");
                picsrc.appendChild(scan);
              }

              if (data.current.is_day == 1) { //IF ITS DAY THEN THIS WILL EXECUTE
                for (var i = 0; i < data1.length; i++) {
                  if (data1[i].code == data.current.condition.code)
                    weatherimage("day");
                }
              }
              else {  //IF ITS NIGHT THEN THIS WILL EXECUTE
                for (var i = 0; i < data1.length; i++) {
                  if (data1[i].code == data.current.condition.code)
                    weatherimage("night");
                }

              }
            })
        })
      error.innerText = "";
    }
    catch(err) {
      error.innerText = err;
    }
  }
}

//TIME FUNCTION
setInterval(date, 1000);

function date() {
  let d = new Date();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();
  // function time(time){
  //   if(time < 10){
  //     time = "0" + time;
  //   }
  // }
  if(minutes < 10){
		minutes = "0" + minutes;
	}
  if(seconds < 10){
		seconds = "0" + seconds;
	}
  if(hours < 10){
		hours = "0" + hours;
	}
  document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;
}

searchButton.addEventListener("click", getData);