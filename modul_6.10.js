//задание 6.10.1
let firstLine = +prompt ('Введите какое нибудь число');
alert(firstLine);
let secondLine = firstLine ** 2;
alert(secondLine);
let thirdLine = firstLine ** 3;
alert(thirdLine);
console.log(`Введённое число - ${firstLine} \nКвадрат числа - ${secondLine} \nКуб числа - ${thirdLine}`);

//задание 6.10.2
let promoCode = prompt ("Введите промокод");
if (promoCode == "скидка" || promoCode == "скиДка" || promoCode == "Скидка" || promoCode == "СКИДКА" ) {
    alert("Промокод применён");
} else {
    alert("Промокод не работает");
};

//задание 6.10.3
let userName = prompt ("Введите Ваше имя");
let yearBirth = prompt ("Укажите год своего рождения");
let userAge = 2024 - yearBirth;
alert(`${userName}: ${userAge}`);

/*задания 6.10.4 и 6.10.5
в отдельных файлах: modul_6.10.4.js; index.html и modul_6.10.(5).js*/






