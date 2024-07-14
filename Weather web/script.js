const container = document.querySelector('.container');
const search = document.querySelector('.search button');
const weather = document.querySelector('.weather-container');
const weatherDetails = document.querySelector('.weather-det');
const error404 = document.querySelector('.not-found')

search.addEventListener('click', () => {


    const APIkey ='2ed467e5e27c0d2de7f0e24c73108bd9';
    const city = document.querySelector('.search input').value;

    if (city == '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`).then(response => response.json()).then(json => {

        if(json.cod == '404') {
            container.style.height = '400px';
            weather.classList.remove('active');
            weatherDetails.classList.remove('active');
            error404.classList.add('active');
            return;
        }

        container.style.height = '555px';
            weather.classList.add('active');
            weatherDetails.classList.add('active');
            error404.classList.remove('active');

        const image = document.querySelector('.weather-container img');
        const temperature = document.querySelector('.weather-container .temperature');
        const description = document.querySelector('.weather-container .description');
        const humidity = document.querySelector('.weather-det .humidity span ');
        const wind = document.querySelector('.weather-det .wind span ');

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'img/clear.png';
                break;

                case 'Rain':
                    image.src = 'img/rain.png';
                    break;
    
                    case 'Snow':
                        image.src = 'img/snow.png';
                        break;
        
                        case 'Clouds':
                            image.src = 'img/cloud.png';
                            break;

                            case 'Mist':
                                image.src = 'img/mist.png';
                                break;

                                case 'Haze':
                                    image.src = 'img/mist.png';
                                    break;
                                default:
                                    image.src ='img/cloud.png';
                
        }
        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C<span>`;
        description.innerHTML =  `${json.weather[0].description}`;
        humidity.innerHTML   =`${json.main.humidity}%`;
        wind.innerHTML  = `${parseInt(json.wind.speed)}km/h`;
});
});