export const calcTemp = (fahr) => {
    const temp = Math.round(fahr - 273.15);
    return temp;
}

export const calcAvg = (x, y) => {
    const avg = (x + y) / 2 ;
    return avg;
}

export const apiKey = '&appid=d999c28416a3ddfa9333ba6b67985a20';
export const openWeather = 'https://api.openweathermap.org/data/2.5/';