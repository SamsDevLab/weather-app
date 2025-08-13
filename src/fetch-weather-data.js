import { extractRelevantData } from "./index.js";
import { dom } from "./index.js";

export const fetchWeatherData = () => {
  const submitButton = document.querySelector(
    "[data-element = 'submit-button']",
  );

  submitButton.addEventListener("click", () => {
    const searchBar = document.querySelector("[data-element = 'search-bar']");
    const currentSearchValue = searchBar.value;
    queryWeatherAPI(currentSearchValue);
  });

  async function queryWeatherAPI(currentSearchValue) {
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${currentSearchValue}/?key=3B8FBG4CPX75RAUWW5MAZMZCF`,
      );
      const data = await response.json();
      extractRelevantData(data);
    } catch (error) {
      console.log("You suck, bruh!", error);
    }
  }
};
fetchWeatherData();
