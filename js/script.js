var keylist = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&";
var password = "";


function generatePassword(){
    var input = document.getElementById("passwordLengthInput").value;
    for (i=0; i < input; i++){
        password += keylist.charAt(Math.floor(Math.random()*keylist.length))
    }
    alert("Generated password: " + password);
    location.reload();
}





// str.charAt(index) : returns the character at the given index value
// Math.random : returns an index value between 0 and 1
//  Math.floor() : a float number is rounded up to the lower integer value 