let result = document.getElementById("result")
let searchBtn = document.getElementById("search-btn")
let cityRef = document.getElementById("city")
let getWeather = ()=>{
    let cityValue = cityRef.value;
    if(cityValue.length ==0){
        result.innerHTML = `<h3>Please, enter a city name</h3>`
    } else {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=52.5170365&lon=13.3888599&appid=${key}&units=metric`;
        fetch(url)
            .then((resp) => resp.json())
            .then(data => {
                console.log(data)
            })
            .catch(() =>{
                result.innerHTML = `<h3>City not found</h3>`
            })
        }
    }
window.addEventListener("load", getWeather)
//52.5170365   13.3888599