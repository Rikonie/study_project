let login = prompt('Login?','');
let message = (login == 'man') ? 'Hi':
(login == 'woman')? 'Hello':
'No';
alert(message);