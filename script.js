const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+{};~?,./";

const passwordTxt = document.getElementById("password");
const length = document.getElementById("length");
const incNumbers = document.getElementById("numbers");
const incSymbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const upper = document.getElementById("uppercase");

generateBtn.addEventListener("click", () => {
  let char = lowerCase;
  incNumbers.checked ? (char += numbers) : "";
  incSymbols.checked ? (char += symbols) : "";
  upper.checked ? (char += upperCase) : "";
  passwordTxt.value = generatePass(length.value, char);
});

const generatePass = (length, char) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += char.charAt(Math.floor(Math.random() * char.length));
  }
  return password;
};
