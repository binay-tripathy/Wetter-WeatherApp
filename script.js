const d = new Date();
fetch(`https://api.weatherapi.com/v1/current.json?key=0bab7dd1bacc418689b143833220304&q=Bhubaneswar`)
.then ((res) => res.json())
.then((data) => {
    document.getElementById("city").innerHTML = data.location.name
    document.getElementById("temp").innerHTML = data.current.temp_c
    document.getElementById("condition").innerHTML = data.current.condition.text
     
})  
setInterval(date, 1000);

function date() {
  let d = new Date();
  document.getElementById("time").innerHTML= d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}