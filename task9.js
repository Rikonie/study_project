let browser = prompt('Браузер какой?','');
if (browser === 'Edge') {
    alert ("You've got the Edge!");
} else if (browser === 'Chrome' 
|| browser === 'Firefox'
|| browser === 'Safari' 
|| browser === 'Opera') {
    alert (" Okay we support there browsert too");
} else {
    alert ("We hope that this page looks ok!");
}