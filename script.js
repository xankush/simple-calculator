var a = "";
var b = "";
var c = "";
var sign = "";

var mem = document.getElementById("memory");
var equal = document.getElementById("equals");
var p = document.getElementById("output");
var reset = document.getElementById("reset");
var decimaladded = false;
reset.addEventListener("click", function () {
    p.innerHTML = "";
    mem.innerHTML = "";
    a = "";
    b = "";
    sign = "";
    decimaladded = false;
    c = "";
    console.log("a = " + a);
    console.log("b =" + b);

})

equal.addEventListener("click", out);

function out() {
    console.log("this is sum function ");
    console.log(a);
    console.log(b);
    // c=a+b;
    console.log("c=" + c);
    c = calculation();
    console.log("c=" + c);
    a = c;
    b = "";
    mem.innerHTML += "=";
    console.log("a=" + a);
    
    p.innerHTML = c;
    decimaladded = false;
}

p.addEventListener("keydown", () => {
    console.log(event.key);
    // if(event.key=="*"||"/"||"-"||"+"){
    //     if(a!=""){
    //         sign  = event.key;
    //     }
    //     mem.innerHTML+=sign;
    
    // }
    if(event.key == "1" || event.key == "2"||event.key == "3"||event.key == "4"||event.key == "5"||event.key == "6"||event.key == "7"||event.key == "8"||event.key == "9"||event.key == "0" ){
        console.log("this is a number");
        if(a===""){
            console.log("this is a");
            a=parseFloat(event.key);
            console.log(a);
            mem.innerHTML+=a;
        }
        else if(a!=""&&sign ===""){
            console.log("a is not empty");
            a=a.toString();
            a=a+event.key;
            a=parseFloat(a);
            mem.innerHTML=a;

        }
        else if(b===""){
            b=parseFloat(event.key);
            console.log(b);
            mem.innerHTML+=b;
        }
        else{
            b=b.toString();
            b=b+event.key;
            b=parseFloat(b);
            mem.innerHTML=a+sign+b;
        }
    }
    switch(event.key){
        case "+":
            if(a!=""&&b===""){
                if(sign ===""){

                    sign = "+";
                    mem.innerHTML +=sign;
                }
                else{
                    sign = "+";
                    mem.innerHTML = a+sign;
                }
            }
            if(b!=""){
                console.log("hi");
                    a=calculation();
                    sign="+";
                    // p.innerHTML=a+sign;
                    mem.innerHTML+=sign;
            }
            break;
        case "-":
            if(a!=""){
                sign = "-";
                mem.innerHTML +=sign;
            }
            break;
        case "*":
            if(a!=""){
                sign = "*";
                mem.innerHTML +=sign;
            }
            break;
        case "/":
            if(a!=""){
                sign = "/";
                mem.innerHTML +=sign;
            }
            break;
      
    }
    console.log(sign);
    if (event.key == "Enter") {
        console.log("this is enter");
        out();
       
    
    }
    // console.log("sign="+sign);

    // if(a==""){
    //     a= event.key;
    //     a=parseFloat(a);

    // }
    // else if(a!=""&&sign==""){
    //     a=a.toString();
    //     a=parseFloat(a+event.key);
    // }
    // else 

})
function input_value(m) {
    if (a === "") {
        console.log("hi again");
        a = parseFloat(m);
        console.log(a);
        p.innerHTML = a;
        mem.innerHTML = a;
        // console.log(mem);
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
                mem.innerHTML = a;
                decimaladded = false;

            }
            else {

                a = parseFloat(a + m);
                p.innerHTML = a;
                mem.innerHTML = a;
                // console.log(mem);
            }
        }

    }
    else if (b === "") {
        b = parseFloat(m);
        p.innerHTML += b;
        mem.innerHTML += b;
    }
    else {
        if (m == ".") {
            decimaladded = true;
            p.innerHTML += ".";
            mem.innerHTML += ".";

        }
        else {
            if (decimaladded == true) {
                b = parseFloat(b + "." + m);
                p.innerHTML += m;
                mem.innerHTML += m;

                decimaladded = false;
            }
            else {
                b = parseFloat(b + m);

                p.innerHTML += m;
                mem.innerHTML += m;
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
        p.innerHTML = "";
        mem.innerHTML = a + sign;
        console.log(sign);
    }
    else {
        if (b != "") {


            mem.innerHTML += s;
           a= calculation();
        
            sign = s;
            b = "";
            p.innerHTML = "";
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
    console.log("sign=" + sign);
    switch (sign) {
        case "+":
            console.log("a="+a);
            console.log("b="+b);
            c = a + b;
            console.log("c="+c);
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
                mem.innerHTML = "sin" + a;
                a = Math.sin(a);
            }
            p.innerHTML = a;
            break;
        case "cos":
            if (a != "") {
                mem.innerHTML = "cos" + a;
                a = Math.cos(a);
            }
            p.innerHTML = a;
            break;
        case "tan":
            if (a != "") {
                mem.innerHTML = "tan" + a;

                a = Math.tan(a);
            }
            p.innerHTML = a;
            break;
        case "^":
            if (a != "") {
                sign = t;
                p.innerHTML = "";
                mem.innerHTML = a + "^";
            }
            break;
        case "root":
            if (a != "") {
                mem.innerHTML = "sqrt(" + a + ")";
                a = Math.sqrt(a);
            }
            p.innerHTML = a;
            break;
        case "ln(x)":
            if (a != "") {
                mem.innerHTML = "ln(" + a + ")";
                a = Math.log(a);
            }

            p.innerHTML = a;
            break;
        case "back":
            if (a === "") {
                p.innerHTML = "";
            }
            else if (a != "" && sign == "" && b == "") {
                a = a.toString();
                if (a.length == 1) {
                    a = 0;
                    p.innerHTML = "";
                    console.log(a);
                }
                else {
                    console.log(a);
                    a = parseFloat(a.slice(0, -1));
                }
                console.log(a);
                p.innerHTML = a;
                mem.innerHTML = a;
            }
            else if (b == "" && sign != "" && a != "") {
                console.log("done");
                sign = "";
                p.innerHTML = a;
                mem.innerHTML = a;
            }
            else {
                b = b.toString();
                b = b.slice(0, -1);
                p.innerHTML = a + sign + b;
                mem.innerHTML = a + sign + b;
            }
            break;
    }
}
