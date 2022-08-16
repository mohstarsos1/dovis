import axios from "axios";

function Weather() {
  async function getWeather() {
    try {
      const res = await axios.get(
        "http://api.weatherapi.com/v1/current.json?key=8254965796544b2cad840308211703&q=Iran/Kerman&aqi=no"
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="pt-[80px]">
      <button onClick={() => getWeather()}>get</button>
    </div>
  );
}

export default Weather;
