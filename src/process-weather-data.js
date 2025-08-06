export const processWeatherData = () => {
  const extractRelevantData = (data) => {
    console.log(data);
    const mainDataObj = {
      conditions: data.currentConditions.conditions,
      description: data.description,
      feelsLike: data.currentConditions.feelslike,
      humidity: data.currentConditions.humidity,
      icon: data.currentConditions.icon,
      precipitation: data.currentConditions.precip,
      windspeed: data.currentConditions.windspeed,
    };
    console.log(mainDataObj);
  };

  return {
    extractRelevantData,
  };
};
