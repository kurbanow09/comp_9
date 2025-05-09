function validate() {
    let uname = document.getElementById('name').value;
    let pass = document.getElementById('pass').value;
    let age = document.getElementById('age').value;
    let mob = document.getElementById('mob').value;

    if (uname.trim() == "" || pass.trim() == "" || age.trim() == "" || mob.trim() == "") {
        alert('Missing credentials');
        return false;

    } else if (uname == 'Anna' && pass == '12345' && age == 15 && mob == "65616263") {

        alert('sign-up succesful');
        return true;

    } else if (mob != "865616263") {

        alert('warning mobil number');
        return false;
    } else {
        alert('wrong id and password');
        return false;
    }



}
trim()