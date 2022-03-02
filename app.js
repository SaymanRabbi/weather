//Api Key
const apiKey = `9458012c0886280520de5c4e9e94d475`
//Update Temperature
const updateTemperature = async() => {
    // Got Input Value
    const input = document.getElementById('input-value');
    const inputText = input.value;
    input.value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=${apiKey}&units=metric`;
        const res = await fetch(url)
        const data = await res.json();
        displayData(data);  
    
       
}
// changes innerText
const changesInnerText = (id,innerText) => {
    document.getElementById(id).innerText = innerText;
}
//Auto Load
const autoLoad = async()=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=rangpur&appid=${apiKey}&units=metric`;
    const res = await fetch(url)
        const data = await res.json();
        autoLoadData(data); 
}
autoLoad();
const autoLoadData = (data) => {
    changesInnerText('location-name', data.name);
    changesInnerText('degree',data.main.temp)
    changesInnerText('clouds', data.weather[0].main)
    // img url 
    const imgUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
   
    document.getElementById('img').setAttribute("src",imgUrl)
}
const displayData = (Temperature) => {
    if (Temperature.cod === '404') {
        alert('Please Input A Valid City Name');
    }
   
    else {
        changesInnerText('location-name', Temperature.name);
    changesInnerText('degree',Temperature.main.temp)
    changesInnerText('clouds', Temperature.weather[0].main)
    // img url 
    const imgUrl = `http://openweathermap.org/img/wn/${Temperature.weather[0].icon}.png`
   
    document.getElementById('img').setAttribute("src",imgUrl)
    }
   
}