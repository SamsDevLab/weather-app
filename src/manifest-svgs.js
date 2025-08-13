export async function getSvg(iconDescription) {
  try {
    const module = await import(
      `./../../weather-app/src/weather-svgs/${iconDescription}.svg`
    );
    return module.default;
  } catch (error) {
    console.log("No icon description with that name!", error);
  }
}
