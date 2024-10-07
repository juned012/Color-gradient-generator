let btn1 = document.getElementById("color-button-1");
let btn2 = document.getElementById("color-button-2");
let gradientCode = document.getElementById("gradient-code");
let hexa1 = "#f0aea4";
let hexa2 = "#d6a2f4";

const generateHexColor = () => {
  let hexaChar = "0123456789abcdef";
  let colorHexa = "#";
  for (let i = 0; i < 6; i++) {
    colorHexa += hexaChar[Math.floor(Math.random() * 16)];
  }
  return colorHexa;
};

const updateBackground = () => {
  document.body.style.background = `linear-gradient(to right, ${hexa1}, ${hexa2})`;
  gradientCode.textContent = `background: linear-gradient(to right, ${hexa1}, ${hexa2});`;
};

const generateCode1 = () => {
  hexa1 = generateHexColor();
  btn1.textContent = hexa1;
  updateBackground();
};

const generateCode2 = () => {
  hexa2 = generateHexColor();
  btn2.textContent = hexa2;
  updateBackground();
};

const copyColorCode = () => {
  const codeToCopy = gradientCode.textContent;
  navigator.clipboard
    .writeText(codeToCopy)
    .then(() => {
      alert("Color code copied to clipboard!");
    })
    .catch((err) => {
      console.error("Could not copy text: ", err);
    });
};

updateBackground();

btn1.addEventListener("click", generateCode1);
btn2.addEventListener("click", generateCode2);
gradientCode.addEventListener("click", copyColorCode);
