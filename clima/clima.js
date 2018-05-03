
const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=9abe7d539d1c99c8d4ca62e0e71d70be`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}