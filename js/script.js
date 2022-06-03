const canvas = document.getElementById("canvas");
const button = document.getElementById("button");
const input = document.getElementById("input");
const errorText = document.getElementById("error");

button.addEventListener("click", () => {
  QRCode.toCanvas(canvas, input.value, (error) => {
    if (error) {
      errorText.innerText = error;
      canvas.height = 0;
    } else {
      errorText.innerText = null;
    }
  });
});
