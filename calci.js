let num=true;
let num1=0n;
let num2=0n;
let op=0;
let arr=[0,1,2,3,4,5,6,7,8,9];
let o=["+","-","x","/"];
let r=0n;
var x;
var a="";

function show(i){
    x=a.length;
    if (x<20){
    if(num==true){
        num1=num1*10n+BigInt(arr[i]);
        a=num1.toString();
        document.getElementById("ans").innerText=a;
        }
    else{
        num2=num2*10n+BigInt(arr[i]);
        a=num1.toString()+o[op-1]+num2.toString();
        document.getElementById("ans").innerText=a;
        }
    }
    else{
        if(num==true){
            a=num1.toString();
            document.getElementById("ans").innerText=num1;
        }
        else{
            a=num1.toString()+o[op-1]+num2.toString();
            document.getElementById("ans").innerText=a;
        }
    }

}

function operator(b){
        if(x<20){
        op=b;
        a+=o[b-1]
        document.getElementById("ans").innerText=a;
        num=false;}
        else{
            document.getElementById("ans").innerText=a;
        }
}


function equal(){
    switch(op){
    case 1:
        num1=num1+num2;
        num2=0n;
        document.getElementById("ans").innerText=num1;
        break;

    case 2:
        num1=num1-num2;
        num2=0n;
        document.getElementById("ans").innerText=num1;
        break;
    
    case 3:
        num1=num1*num2;
        num2=0n;
        document.getElementById("ans").innerText=num1;
        break;
    
    case 4:
        if (num2!=0){
        num1=num1/num2;
        num2=0n;
        document.getElementById("ans").innerHTML=num1;}
        else{
            document.getElementById("ans").innerText="Error";
        }
        break;
}
    op=0;
    a=num1.toString();
    console.log(op);
    
}


function cle(){
    document.getElementById("ans").innerText=0;
    num1=0n;
    num2=0n;
    num=true;
    op=0;
    
    
}


function del(){
    if(num==true){
        console.log(num1);
        r=num1%10n;
        num1=(num1-r)/10n;
        a=num1.toString()
        document.getElementById("ans").innerText=a;
    }
    else{
        console.log(num2);
        r=num2%10n;
        num2=(num2-r)/10n;
        a=num1.toString()+o[op-1]+num2.toString();
        console.log(a);
        console.log(num2);
        document.getElementById("ans").innerText=a;
    }
}


