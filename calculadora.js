var num1 = 0;
var num2 = 0;

function Limparcampos(){
    document.getElementById('num1').value ="";
    document.getElementById('num2').value ="";
}
function somar(){
var num1 = document.getElementById('num1').value;
var num2 = document.getElementById('num2').value;

result = parseInt(num1) + parseInt(num2);

document.getElementById('Resultado').innerHTML = ("O resultado é " + result);
}
function subtrair(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    
    result = num1 - num2;
    
    document.getElementById('Resultado').innerHTML = ("O resultado é " + result);
}
function dividir(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    
    result = num1 / num2;
    
    document.getElementById('Resultado').innerHTML = ("O resultado é " + result);
}
function multiplicar(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    
    result = num1 * num2;
    
    document.getElementById('Resultado').innerHTML = ("O resultado é " + result);
    }