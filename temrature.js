const  c= document.getElementById("celsius");
const  f= document.getElementById("fahrenheit");
const  k= document.getElementById("kelvin");

function computeTemp(event) {
  const currentValue = +event.target.value;

  switch (event.target.name) {
    case "celsius":
      k.value = (currentValue + 273.32).toFixed(2);
      f.value = (currentValue * 1.8 + 32).toFixed(2);
      break;
    case "fahrenheit":
      c.value = ((currentValue - 32) / 1.8).toFixed(2);
      k.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
      break;
    case "kelvin":
      c.value = (currentValue - 273.32).toFixed(2);
      f.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
      break;
    default:
      break;
  }
}
