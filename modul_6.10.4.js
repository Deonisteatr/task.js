//задание 6.10.4
let userName = prompt ("Введите Ваше имя");
let yearBirth = prompt ("Укажите год своего рождения");
let userAge = 2024 - yearBirth;
let userExactAge = userAge % 10;
if(userExactAge === 1) {
    alert(`${userName}: ${userAge} год`);
}else if(userExactAge > 1 && userExactAge < 5) {
    alert(`${userName}: ${userAge} года`);
}else {
    alert(`${userName}: ${userAge} лет`);
};



