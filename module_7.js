//Задание 7.6.1
const palindrome = prompt("Введите слово");
let newPalindrome = Array.from(palindrome.replaceAll(' ', ''));
let backNewPalindrome = Array.from(palindrome.replaceAll(' ', ''));
backNewPalindrome = backNewPalindrome.reverse();
if (backNewPalindrome.join("") === newPalindrome.join("")) {
    console.log(`Слово ${palindrome} является палиндромом`);
}else {
    console.log(`Слово ${palindrome} не является палиндромом`);
}

//Задание 7. 6. 2
const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ];
const arrSet = new Set(arr);
const newArr = Array.from(arrSet);
console.log(newArr);

//Задание 7.6.3
let num = prompt('Введите число');
num = Number(num);
let myNum = [];
for (let i = 0; i <= num; i += 1) {
    myNum.push(i);
}
console.log(myNum);

//Задание 7.6.4
const play = ["x", "o", "x", "o", "x", "o", "x", "o", "x"];
const lineArray = [];
let index = 0;
for (let i = 0; i < 3; i += 1) {
    lineArray[i] = [];
    for (let j = 0; j < 3; j += 1) {
        lineArray[i][j] = play[index];
        index += 1;
    }
}
let str = "";
for (let i = 0; i < lineArray.length; i += 1) {
    for (let j = 0; j < lineArray[i].length; j += 1) {
    str += `${lineArray[i][j]}`;
    }
    str += "\n";
}
console.log(str);

//Задание 7.6.5
const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'trere'
};
let arrValues = [];
for (let key in obj) {
    if (Array.isArray(obj[key])) {
        obj[key].forEach (item => {
            arrValues.push(item);
        })
    }else {
    arrValues.push(obj[key]);
    }
}
console.log(arrValues);


