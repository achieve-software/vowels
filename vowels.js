// 4- Belirli bir string ifadenin içindeki sesli harfleri bulan fonksiyonu yazınız?
// console.log(findVowels('hello world')) // output: eoo

const str = "hello world";
function findVowels(str) {
  let vowels = "";

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "ı" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "ö" ||
      str[i] == "u" ||
      str[i] == "ü"
    ) {
      vowels += str[i];
    }
  }
  return vowels;
}
console.log(findVowels("helloworld"));
