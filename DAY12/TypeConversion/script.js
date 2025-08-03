const inputField = document.querySelector("#input-field");
const conversionType = document.querySelector("#conversionType");
const outputField = document.querySelector("#output-field");

function convertValue() {
  const inputValue = inputField.value.trim();
  const type = conversionType.value;
  let result;

  if (type === "toNumber") {
    result = Number(inputValue);
  } else if (type === "toString") {
    result = String(inputValue);
  } else if (type === "toBoolean") {
    result = Boolean(inputValue);
  } else {
    outputField.value = "Select a conversion type!";
    return;
  }
  outputField.value = `${result} and Type is:(${typeof result})`;
}
//EventListener

inputField.addEventListener("input", convertValue);
conversionType.addEventListener("change", convertValue);
