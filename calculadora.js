function Suma(){
    //1.- Referencia a los objetos del documento html
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    //Convertir a numeros num1 y num2
    let suma = Number(num1) + Number(num2);    
    alert("La suma es: "+suma);
}

function Resta(){
    //2.- Referencia a los objetos del documento html
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resta = num1 - num2;
    alert("La resta es: "+resta);
    
}
function Multi(){
    //3.- Referencia a los objetos del documento html
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let Multi = num1 * num2;
    alert("La multiplicacion es: "+Multi);

}

function Division(){
    //3.- Referencia a los objetos del documento html
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let division = num1 / num2;
    alert("La division es: "+division);
   
}