import { dom } from "./index.js";

export const extractRelevantData = (data) => {
  // console.log(data);
  const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  const daysArr = data.days;
  daysArr.splice(7, 8);

  const forecastArr = [];
  let currentWeatherIcon = "";

  const getDayOfWeek = (date) => {
    const timestamp = date.datetimeEpoch;
    const dateFromEpoch = new Date(timestamp * 1000); //
    const day = dateFromEpoch.getDay();
    const dayOfWeek = daysOfWeek[day];

    return dayOfWeek;
  };

  const getTempMax = (date) => {
    const tempMax = date.tempmax;
    const roundedTempMax = Math.round(tempMax);

    return roundedTempMax;
  };

  const getTempMin = (date) => {
    const tempMin = date.tempmin;
    const roundedTempMin = Math.round(tempMin);

    return roundedTempMin;
  };

  async function getSvgModule() {
    const module = import(`./manifest-svgs`);

    return module;
  }

  async function buildForecastObjs() {
    const imgPath = await getSvgModule();

    for (let i = 0; i < daysArr.length; i++) {
      const dayOfWeek = getDayOfWeek(daysArr[i]);
      const forecastIcon = await imgPath.getSvg(daysArr[i].icon);
      const tempmax = getTempMax(daysArr[i]);
      const tempmin = getTempMin(daysArr[i]);

      const dayObj = {
        dayOfWeek,
        forecastIcon,
        tempmax,
        tempmin,
      };

      forecastArr.push(dayObj);
    }
  }

  async function getIconImage() {
    const imgPath = await getSvgModule();
    currentWeatherIcon = await imgPath.getSvg(data.currentConditions.icon);
  }

  const getDataObj = () => {
    const dataObj = {
      address: data.address,
      conditions: data.currentConditions.conditions,
      feelsLike: data.currentConditions.feelslike,
      forecast: forecastArr,
      humidity: data.currentConditions.humidity,
      icon: currentWeatherIcon,
      precipitation: data.currentConditions.precip,
      temperature: data.currentConditions.temp,
      windspeed: data.currentConditions.windspeed,
    };

    return dataObj;
  };

  async function extractDataObj() {
    try {
      await buildForecastObjs();
      await getIconImage();
      const dataObj = getDataObj();
      return dataObj;
    } catch (error) {
      console.log("Cannot complete dataObj", error);
    }
  }

  const extractedObj = extractDataObj(); //.then((obj) => )

  return extractedObj;
};

// For Commit: added 'temperature', removed 'description' (as I already have 'conditions')
