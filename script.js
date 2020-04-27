function divide(num1, num2){
    let result = num1/num2;
    return result/2;
}
function multiply(num1, num2){
    console.log("The Product of "+num1+" and "+num2+" is: "+num1*num2);
}
function random(name, age){
    let result = name.length * age;
    console.log("Name: "+name+" \nAge: "+age+"\nNumber of characters in your name: "+name.length+" \nName * Age:"+result);
}
//console.log(divide(5,10));
//multiply(5,6);
random("Harjot",21);
