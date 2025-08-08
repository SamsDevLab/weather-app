export const processWeatherData = () => {
  const extractRelevantData = (data) => {
    const daysArr = data.days;
    const newDaysArr = [];
    const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

    for (let i = 0; i < daysArr.length; i++) {
      if (i > 6) {
        break;
      } else {
        // Forecast Days
        const timestamp = daysArr[i].datetimeEpoch;
        const dateFromEpoch = new Date(timestamp * 1000); //
        const day = dateFromEpoch.getDay();

        // Icons

        const dayObj = {
          dayOfWeek: daysOfWeek[day],
          icon: daysArr[i].icon,
          tempmax: daysArr[i].tempmax,
          tempmin: daysArr[i].tempmin,
        };
        // console.log(dayObj);
        newDaysArr.push(dayObj);
      }
    }

    const extractedDataObj = {
      address: data.address,
      conditions: data.currentConditions.conditions,
      feelsLike: data.currentConditions.feelslike,
      forecast: newDaysArr,
      humidity: data.currentConditions.humidity,
      icon: data.currentConditions.icon,
      precipitation: data.currentConditions.precip,
      temperature: data.currentConditions.temp,
      windspeed: data.currentConditions.windspeed,
    };
    // console.log(extractedDataObj);
    return extractedDataObj;
  };

  return {
    extractRelevantData,
  };
};

// For Commit: added 'temperature', removed 'description' (as I already have 'conditions')
