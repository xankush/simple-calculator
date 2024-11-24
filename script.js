var a = "";
var b = "";
var c = "";
var sign = "";

var equal = document.getElementById("equals");
var p = document.getElementById("output");
var reset = document.getElementById("reset");
var decimaladded = false;
reset.addEventListener("click", function () {
    p.innerHTML = "";
    a = "";
    b = "";
    sign = "";
    decimaladded = false;
    c = "";
    console.log("a = " + a);
    console.log("b =" + b);

})

equal.addEventListener("click", function () {
    c = calculation();
    a = c;
    b = "";
    p.innerHTML = c;
    decimaladded = false;
});

function input_value(m) {
    if (a == "") {
        a = parseFloat(m);
        p.innerHTML = a;
    }
    else if (sign == "") {
        if (m == ".") {
            p.innerHTML = a + ".";
            decimaladded = true;
            console.log(decimaladded);
        }
        else {
            console.log(decimaladded);

            if (decimaladded == true) {
                a = parseFloat(a + "." + m);
                p.innerHTML = a;
                decimaladded = false;

            }
            else {

                a = parseFloat(a + m);
                p.innerHTML = a;
            }
        }

    }
    else if (b == "") {
        b = parseFloat(m);
        p.innerHTML += b;
    }
    else {
        if (m == ".") {
            decimaladded = true;
            p.innerHTML += ".";
        }
        else {
            if (decimaladded == true) {
                b = parseFloat(b + "." + m);
                p.innerHTML += m
                decimaladded = false;
            }
            else {
                b = parseFloat(b + m);
                p.innerHTML += m;
            }
        }
    }
    console.log("a = " + a);
    console.log("b =" + b);
}

// if a operator is click then this function will be run   
function operator(s) {
    if (sign == "" && a != "") {
        sign = s;
        p.innerHTML += sign;
        console.log(sign);
    }
    else {
        if (b != "") {
            a = calculation();
            sign = s;
            b = "";
            p.innerHTML = a + s;
            console.log("a = " + a);
            console.log("b =" + b);
            console.log("sign =" + sign);
        }
        else {
            sign = s;
            p.innerHTML = a + s;
            console.log("sign =" + sign);

        }

    }
}

function calculation() {
    switch (sign) {
        case "+":
            c = a + b;
            sign = "";
            break;
        case "*":
            c = a * b;
            sign = "";
            break;
        case "/":
            c = a / b;
            sign = "";
            break;
        case "-":
            c = a - b;
            sign = "";
            break;
        case "sin":
            c = Math.sin(a);
            sign = "";
            break;
        case "cos":
            c = Math.cos(a);
            sign = "";
            break;
        case "tan":
            c = Math.tan(a);
            sign = "";
            break;
        case "^":
            c = Math.pow(a, b);
            sign = "";
            break;


    }
    console.log(c);
    // p.innerHTML = c;
    return c;
}

function special(t) {
    switch (t) {
        case "sin":
            if (a != "") {
                a = Math.sin(a);
            }
            p.innerHTML = a;
            break;
        case "cos":
            if (a != "") {
                a = Math.cos(a);
            }
            p.innerHTML = a;
            break;
        case "tan":
            if (a != "") {
                a = Math.tan(a);
            }
            p.innerHTML = a;
            break;
        case "^":
            if (a != "") {
                sign = t;
                p.innerHTML = "";
            }
            break;
        case "root":
            if (a != "") {
                a = Math.sqrt(a);
            }
            p.innerHTML = a;
            break;
        case "ln(x)":
            if (a != "") {
                a = Math.log(a);
            }
            p.innerHTML = a;
            break;
        case "back":
            if(a==""){
                p.innerHTML="";
            }
            else if(a!=""&&sign==""&&b==""){
                a=a.toString();
                a=parseFloat(a.slice(0,-1));
                p.innerHTML=a;
            }
            else if(b==""&&sign!=""&&a!=""){
                console.log("done");
                sign ="";
                p.innerHTML=a;
            }
            else{
                b=b.toString();
                b=b.slice(0,-1);
                p.innerHTML=a+sign+b;
            }
            break;
    }
}