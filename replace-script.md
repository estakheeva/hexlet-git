let s = "abcdef";
let result = "";

for (let i = 0; i < s.length; i += 2) {
    if (i + 1 < s.length) {
        result += s[i + 1] + s[i]; // меняем местами два символа
    } else {
        result += s[i]; // если остался один символ
    }
}

console.log(result); // Выведет: "badcfe"
