export const dom = (obj) => {
  const weatherDataObj = obj;
  const forecastDivsArr = Array.from(
    document.querySelectorAll("[data-forecast]"),
  );

  const addToForecastDivs = (objArr) => {
    for (let i = 0; i < forecastDivsArr.length; i++) {
      const objArrIndex = objArr[i];
      const div = forecastDivsArr[i];

      const day = div.querySelector("[data-day]");
      const icon = div.querySelector("[data-icon]");
      const temp = div.querySelector("[data-temp]");

      day.textContent = objArrIndex.dayOfWeek;
      icon.textContent = objArrIndex.icon;
      temp.textContent = `${objArrIndex.tempmax} / ${objArrIndex.tempmin} `;
    }
  };

  for (const [key, value] of Object.entries(weatherDataObj)) {
    if (key !== "forecast") {
      const element = document.querySelector(`[data-${key}]`);
      element.textContent = `${value}`;
    } else {
      addToForecastDivs(value);
    }
  }
};
