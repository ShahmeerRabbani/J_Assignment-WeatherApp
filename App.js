const userInput = document.getElementById("userInput");
const countryName = document.getElementById("countryName");
const newDate = document.getElementById("date");
const temperature = document.getElementById("temperature");
const sky = document.getElementById("sky");
const temp_level = document.getElementById("temp_level");
const bg_img = document.getElementById("bg_img");




const d = new Date();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];




const fetchData = async () => {
  await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${userInput.value}&appid=f323670ef9e2f4d8047a40653b15312e`
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      countryName.innerHTML = `${response.name}, ${response.sys.country}`;

      newDate.innerHTML = `Date: ${days[d.getDay()]} ${d.getDate()}

      ${months[d.getMonth()]} ${d.getFullYear()}`;

      temperature.innerHTML = `Temperature: ${Math.round(response.main.temp - 273.15)}°C`;

      sky.innerHTML = `${response.weather[0].main}`

      temp_level.innerHTML = `${Math.round(response.main.temp_min - 273.15)}°C/${Math.round(response.main.temp_max - 273.15)}°C`

      const weatherCondition = response.weather[0].main.toLowerCase();

      if(weatherCondition === 'clear'){
        bg_img.src = 'clear.jpg'
        } else if(weatherCondition === 'clouds'){
          bg_img.src = 'cloudy.jpg'
          } else if(weatherCondition === 'rain'){
            bg_img.src = 'rain.jpeg'
            } else if(weatherCondition === 'smoky'){
              bg_img.src = 'haze.jpg'
              } else {
                bg_img.src = 'default.jpg'
                
      }
    })
    .catch((error) => console.log(error));
};

userInput.addEventListener('keypress', (event)=>{
  if (event.key === 'Enter') {
    fetchData();
}
})