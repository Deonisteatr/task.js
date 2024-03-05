let userAge = prompt('Укажите свой возраст');
const minAge = 18;
const maxAge = 65;
if(userAge < minAge || userAge > maxAge) {
    alert("К сожалению мы не можем выдать вам кредит.");
}
else if(userAge >= minAge && userAge <= 21) {
    let amountCredit = prompt('Мы можем вам выдать максимум 50000. \n Введите сумму кратную 1000.');
    if(amountCredit >= 1000 && amountCredit <= 50000) {
        if (amountCredit % 1000 === 0) {
            let confirmation = confirm(`Подтвердите сумму кредита: ${amountCredit}`);
            if (confirmation) {
                alert("Кредит подтверждён!");
            } else {
                alert("Вы отменили подтверждение. Введите сумму заново.")
            }
        }
        else if(amountCredit % 1000 != 0) {
                confirmation = confirm(`Вы ввели значение не кратное 1000. Мы можем выдать ${amountCredit - (amountCredit % 1000)}`);
                if (confirmation) {
                    alert("Кредит подтверждён!");
                } else {
                    alert("Вы отменили подтверждение. Введите сумму заново.")
                }
        }
    }
    else {
        alert("Видимо вам кредит не нужен. Всего доброго!");
    }
}
else if(userAge >= 22 && userAge <= 35) {
    amountCredit = prompt('Мы можем вам выдать максимум 400000. \n Введите сумму кратную 1000.');
    if(amountCredit >= 1000 && amountCredit <= 400000) {
        if (amountCredit % 1000 === 0) {
            confirmation = confirm(`Подтвердите сумму кредита: ${amountCredit}`);
            if (confirmation) {
                alert("Кредит подтверждён!");
            } else {
                alert("Вы отменили подтверждение. Введите сумму заново.")
            }  
        }
        else if(amountCredit % 1000 != 0) {
            confirmation = confirm(`Вы ввели значение не кратное 1000. Мы можем выдать ${amountCredit - (amountCredit % 1000)}`);
            if (confirmation) {
                alert("Кредит подтверждён!");
            } else {
                alert("Вы отменили подтверждение. Введите сумму заново.")
            }
        }
    }
    else {
            alert("Видимо вам кредит не нужен. Всего доброго!");
    }
}
else if(userAge >= 36 && userAge <= maxAge) {
    amountCredit = prompt('Мы можем вам выдать максимум 1000000. \n Введите сумму кратную 1000.');
    if(amountCredit >= 1000 && amountCredit <= 1000000) {
        if (amountCredit % 1000 === 0) {
            confirmation = confirm(`Подтвердите сумму кредита: ${amountCredit}`);
            if (confirmation) {
                alert("Кредит подтверждён!");
            } else {
                alert("Вы отменили подтверждение. Введите сумму заново.")
            }  
        }
        else if(amountCredit % 1000 != 0) {
            confirmation = confirm(`Вы ввели значение не кратное 1000. Мы можем выдать ${amountCredit - (amountCredit % 1000)}`);
            if (confirmation) {
                alert("Кредит подтверждён!");
            } else {
                alert("Вы отменили подтверждение. Введите сумму заново.")
            }
        }
    }
    else {
        alert("Видимо вам кредит не нужен. Всего доброго!");
    } 
}

