const aPI_KEY = `3265874a2c77ae4a04bb96236a642d2f`
// const API = `https://api.openweathermap.org/data/2.5/weather?
    // q=${city}&appid=${API_KEY}&units=metric`
    // const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
const form=document.querySelector('form')
const weather=document.querySelector('.mt')
const search=document.querySelector('#inp')
let getWeather=async(city)=>{
   let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${aPI_KEY}&units=metric`
   let response=await fetch(url)
   let data=await response.json()
   console.log(data)
   showWeather(data)
}
let showWeather=(data)=>{
    weather.innerHTML=`
    <img id="img" src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png' alt="">
    <h1>${data.main.temp} °C</h1>
    <h1>${data.weather[0].main}</h1>
   </div>`
}
form.addEventListener('submit',(e)=>{
    getWeather(search.value)
    e.preventDefault()
})