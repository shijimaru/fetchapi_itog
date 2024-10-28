const weathere = document.getElementById('weather')

async function getWeather() {
    const latitude = 55.7558;
    const longitude = 37.6173;
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
    const data = await response.json();
    const weather = data.current_weather;

    weathere.innerHTML = `
        <h2>Текущая погода в Москве</h2>
        <p>Температура: ${weather.temperature}°C</p>
        <p>Скорость ветра: ${weather.windspeed} м/с</p>
        <p>Направление ветра: ${weather.winddirection}°</p>
    `;
}

window.onload = getWeather;
