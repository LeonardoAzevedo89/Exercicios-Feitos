


var variaveltexto = "texto";
var variavelnumero = 10;

var nome = [];
var i=0;
var objeto ={}; /* declarando objeto */
    objeto.nome = "teste objeto";
    objeto.idade = 33;
    objeto.tipo = function(x){tipo(x)}

var entrada = "";
while(entrada != "0"){ /*adicionando no array elementos ate digitar 0*/

    var textodigitado = prompt("Digite um nome " );

    if(textodigitado != "0"){
        nome[i] = textodigitado;
    }
        
    entrada = textodigitado;
    i++;
}

i=0;
while(i<nome.length){
    console.log("nome [" + i + "] -> " + nome[i]); /* escrevendo o array no console*/
    document.write("nome [" + i + "] -> " + nome[i] + "<br>"); /*escrevendo array no navegador*/
    i++;
}


/*

for (var i=0; i< 10; i++){
    nome[i] = prompt("Digite um nome " + i);  inserindo no array por digitação d usuario
}

for (var i = 0; i<10; i++){  escrevendo o array
    console.log(nome[i]);
}
*/




/*
console.log("a Variavel numero e do tipo " + typeof(variavelnumero));

/* testando tipo de variavel */
function tipo(teste){
    if(typeof(teste) == "string"){
    console.log("a Variavel e do tipo " + typeof(teste));

    }
    else if (typeof(teste) == "number"){
    console.log("a Variavel e do tipo " + typeof(teste));
    }
}

/* testando o valor de uma variavel */ /*
if(variavelnumero == 10){
    console.log("Variavel igual a 10");
}
else if(variavelnumero > 5 &&  variavelnumero < 15)
{
    console.log("Variavel numero esta entre 5 e 15");
}
else{
    console.log("Variavel numero nao esta entre 5 e 15");
}

switch (variavelnumero){
    case 5: 
        console.log("variavel e 5");
        break;
    case 10:
        console.log("variavel e 10");
        break
}*/