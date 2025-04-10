//your JS code here. If required.
const input = document.getElementById("ip");
const button = document.getElementById("btn");
const output = document.getElementById("output");

function delayedOperation(value, delay, operation, label = "Result") {
  return new Promise(resolve => {
    setTimeout(() => {
      const result = operation(value);
      output.textContent = `${label}: ${result}`;
      resolve(result);
    }, delay);
  });
}

button.onclick = function () {
  const inputValue = Number(input.value);

  if (isNaN(inputValue)) {
    output.textContent = "Please enter a valid number.";
    return;
  }

  output.textContent = "";

  new Promise(resolve => {
    setTimeout(() => {
      output.textContent = `Result: ${inputValue}`;
      resolve(inputValue);
    }, 2000);
  })
    .then(result => delayedOperation(result, 1000, n => n * 2))
    .then(result => delayedOperation(result, 1000, n => n - 3))
    .then(result => delayedOperation(result, 1000, n => n / 2))
    .then(result => delayedOperation(result, 1000, n => n + 10, "Final Result"))
    .catch(err => {
      console.error("Error occurred:", err);
      output.textContent = "An error occurred during processing.";
    });
};