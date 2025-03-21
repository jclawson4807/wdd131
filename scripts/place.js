let temperature = 28.33;
let wind_speed = 20.92;

let temperature_unit = "C";
let wind_speed_unit = "kmh";

let wind_speed_description = "Gusts up to ";

// Check if conditions are appropriate for wind chill calculation
if (temperature > 10 || wind_speed < 4.8) {
    set_windchill_text("N/A");
}
else {
    set_windchill_text(calculateWindChill(temperature, wind_speed));
}

function calculateWindChill(temperature, wind_speed) {
    const wind_chill_str = (13.12 + 0.6215 * temperature - 11.37 * Math.pow(wind_speed, 0.16) + 0.3965 * temperature * Math.pow(wind_speed, 0.16)).toFixed(2);
    return wind_chill_str;
}

function set_windchill_text(windchill_text) {
    const wind_chill_span = document.querySelector("#wind-chill");
    wind_chill_span.textContent = windchill_text;
}

function set_temperature_text(temperature, temperature_unit) {
    const temperature_span = document.querySelector("#temperature");
    temperature_span.textContent = `${temperature}° ${temperature_unit}`;
}

function set_wind_speed_text(wind_speed, wind_speed_unit, wind_speed_description) {
    const wind_speed_span = document.querySelector("#wind-speed");
    wind_speed_span.textContent = `${wind_speed_description}$${wind_speed}${tewind_speed_unitmperature_unit}`;
}