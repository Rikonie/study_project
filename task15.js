function readNumber () {
    let a = +prompt ('Введите число а', '');
    let value = parseInt (a);
    if (isNaN(value)) {
        alert ('Отмена');
    } else {
        alert (value);
    }
}
readNumber ();