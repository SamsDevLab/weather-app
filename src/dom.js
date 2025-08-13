export const dom = (obj) => {
  const weatherDataObj = obj;
  const forecastDivsArr = Array.from(
    document.querySelectorAll("[data-forecast]"),
  );

  const addToForecastDivs = (objArr) => {
    console.log(objArr);
    for (let i = 0; i < forecastDivsArr.length; i++) {
      const objArrIndex = objArr[i];
      const div = forecastDivsArr[i];

      const day = div.querySelector("[data-day]");
      const icon = div.querySelector("[data-forecast-icon]");
      const temp = div.querySelector("[data-temp]");

      day.textContent = objArrIndex.dayOfWeek;
      icon.alt = objArrIndex.conditions;
      icon.src = objArrIndex.forecastIcon;
      temp.textContent = `${objArrIndex.tempmax} / ${objArrIndex.tempmin} `;
    }
  };

  for (const [key, value] of Object.entries(weatherDataObj)) {
    if (key !== "forecast" && key !== "icon") {
      const element = document.querySelector(`[data-${key}]`);
      element.textContent = `${value}`;
    } else if (key === "icon") {
      // const mainIcon = document.createElement
      const mainIcon = document.querySelector("[data-icon]");
      mainIcon.src = value;
      mainIcon.alt = weatherDataObj.conditions;
    } else {
      addToForecastDivs(value);
    }
  }
};

/* 
Icons are working!
When you return from lunch:
• Add alt tags to images
• Set images for conditional categories if possible e.g. humidity, etc.
• Put try/catch on asyncs and add errors where needed
• Style
• Add loading screen


Completed:
✅ • Work on getting extracted Obj returned to fetch-weather-data.js
*/
