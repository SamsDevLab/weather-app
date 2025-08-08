export const processWeatherData = () => {
  const extractRelevantData = (data) => {
    const daysArr = data.days;
    const newDaysArr = [];

    for (let i = 0; i < daysArr.length; i++) {
      if (i > 6) {
        break;
      } else {
        const dayObj = {
          datetime: daysArr[i].datetime,
          icon: daysArr[i].icon,
          tempmax: daysArr[i].tempmax,
          tempmin: daysArr[i].tempmin,
        };
        newDaysArr.push(dayObj);
      }
    }

    const extractedDataObj = {
      address: data.address,
      conditions: data.currentConditions.conditions,
      feelsLike: data.currentConditions.feelslike,
      forecast: newDaysArr,
      humidity: data.currentConditions.humidity,
      // icon: data.currentConditions.icon,
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
