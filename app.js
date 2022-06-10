function checkResult() {
    var fname = document.getElementById("username");
    var value = username.value;
    var fname = document.getElementById("fathername");
    var fvalue = fathername.value;
    var fname = document.getElementById("rollnumber");
    var rvalue = rollnumber.value;
    // var rePlace = fname.replace(/\s\s+/g, " ");
    if(value === "" || value === "  "){
        document.getElementById("error").innerText = "Charactor not Allowed"
    }
    
    document.getElementById("uname").innerHTML = value;
    document.getElementById("fname").innerHTML = fvalue;
    document.getElementById("rnumber").innerHTML = rvalue;
}
