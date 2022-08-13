var language = ["JavaScript", "Python", "C", "C++"];

language.fill("JavaScript", 1, 3);
console.log(language);

language.fill(15, NaN, NaN);
console.log(language);