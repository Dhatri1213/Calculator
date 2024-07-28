let num=true;
let num1=0;
let num2=0;
let op=0;
let arr=[0,1,2,3,4,5,6,7,8,9];
let o=["+","-","x","/"];
let r=0;


function show(a){
    if(num==true){
        num1=num1*10+arr[a];
        document.getElementById("ans").innerText=num1;
    }
    else{
        num2=num2*10+arr[a];
        document.getElementById("ans").innerText=num1+o[op-1]+num2;
    }

}

function operator(b){
        op=b;
        document.getElementById("ans").innerText=num1 + o[b-1];
        num=false;
}


function equal(){
    if (op==1){
        num1=num1+num2;
        num2=0;
        document.getElementById("ans").innerText=num1;
    }
    else if(op==2){
        num1=num1-num2;
        num2=0;
        document.getElementById("ans").innerText=num1;
    }
    else if(op==3){
        num1=num1*num2;
        num2=0;
        document.getElementById("ans").innerText=num1;
    }
    else{
        if (num2!=0){
        num1=num1/num2;
        num2=0;
        document.getElementById("ans").innerHTML=num1;}
        else{
            document.getElementById("ans").innerText="Error";
        }
    }
    
}


function cle(){
    document.getElementById("ans").innerText=0;
    num1=0;
    num2=0;
    num=true;
    op=0;
    
    
}


function del(){
    if(num==true){
        r=num1%10;
        num1=(num1-r)/10;
        document.getElementById("ans").innerText=num1;
    }
    else{
        r=num2%10;
        num2=(num2-r)/10;
        document.getElementById.innerText=num2;
    }
}

