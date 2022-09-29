function simpleInterest(){
    var p = parseInt(document.getElementById("principle").value);
    var r = parseInt(document.getElementById("rate").value);
    var t = parseInt(document.getElementById("time").value);
    var fnc1 = () =>{       //using arrow function
        return si = (p*r*t)/100;
    }
    function func2(){       // using normal function
        return si = (p*r*t)/100;
    }
    var si = fnc1();
    var a = p + si;
    console.log(a, si);
    document.getElementById("amt").innerHTML= "Amount : " + a ;
    document.getElementById("si").innerHTML="Simple Interest: " + si;
}