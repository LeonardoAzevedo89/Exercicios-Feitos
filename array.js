   //filtrando elementos que comecem com a letra A

   var listadecompras = [];
   var resultado=[];
   var i = 0;
   var sair;
  // resultado.push(); //colocando um elemento no final do array
  // resultado.pop(); //retirando um elemento no final do array
do{  
   sair = prompt("Insira um item na lista (Para sair Digite sair)");
   if(sair !== "sair")
   listadecompras[i++] = sair;
    
}while(sair !== "sair" )


  for(let item of listadecompras){
       if (item[0] === "A" || item[0] ==="a"){
           resultado.push(item);
           
       }
  }
   
  document.write(resultado);
   
 //  var i = 0;
  // while(i < listadecompras.length){
   //alert(listadecompras[i]);
   //i++;
   //}