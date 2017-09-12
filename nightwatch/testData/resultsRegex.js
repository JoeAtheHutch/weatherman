module.exports = {
    temperature : /-?\d+\.?\d*°/, //i.e. 89.34°, 6.4°, -5°
    maxTemp : /Max: -?\d+\.?\d*°/, //i.e Max: -68.2°
    minTemp : /Min: -?\d+\.?\d*°/, //i.e Min: 65°
    windSpeed : /Wind: \d+\.?\d* MPH/, 
    humidity : /Humidity: \d+%/
}