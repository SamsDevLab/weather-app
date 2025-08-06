export const fetchAPIs = () => {
  const submitButton = document.querySelector(
    "[data-element = 'submit-button']",
  );

  submitButton.addEventListener("click", () => {
    const searchBar = document.querySelector("[data-element = 'search-bar']");
    const currentSearchValue = searchBar.value;
    queryWeatherAPI(currentSearchValue);
  });

  const queryWeatherAPI = (currentSearchValue) => {
    const response = fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${currentSearchValue}/?key=3B8FBG4CPX75RAUWW5MAZMZCF`,
    )
      .then((response) => response.json())
      .then((response) => console.log(response));
  };
};

fetchAPIs();
