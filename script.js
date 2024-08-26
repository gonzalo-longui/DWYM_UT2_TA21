const input1 = document.getElementById("texto1");
const input2 = document.getElementById("texto2");

const fontFamilyOriginal1 = input1.style.fontFamily;
const backgroundColorOriginal1 = input1.style.backgroundColor;

const fontFamilyOriginal2 = input2.style.fontFamily;
const backgroundColorOriginal2 = input2.style.backgroundColor;

input1.addEventListener("focus", () => {
  input1.style.fontFamily = 'Times New Roman';
  input1.style.backgroundColor = 'lightblue';
})

input1.addEventListener("blur", () => {
  input1.style.fontFamily = fontFamilyOriginal1;
  input1.style.backgroundColor = backgroundColorOriginal1;
})

input2.addEventListener("focus", () => {
  input2.style.fontFamily = 'Georgia';
  input2.style.backgroundColor = 'hotpink';
})

input2.addEventListener("blur", () => {
  input2.style.fontFamily = fontFamilyOriginal2;
  input2.style.backgroundColor = backgroundColorOriginal2;
})