function limparcampos()
{
  document.getElementById('nome').value ="";
  document.getElementById('end').value ="";
  document.getElementById('celular').value ="";
}

function checar()
{

  var cliente = document.getElementById('nome').value;
  var cel = document.getElementById('celular').value;
  var endereco = document.getElementById('end').value;
  
 
  if (cliente==""){
    document.getElementById('erro').innerHTML = 'campo cliente está vazio';   
    document.getElementById('erro').style.display="block";  
  }
  
  else{
    document.getElementById('erro').style.display="none";  
    
  }
  
  if (cel==""){
    document.getElementById('telerro').innerHTML = 'campo telefone está vazio';
    document.getElementById('telerro').style.display="block";  
  }

  else{
    document.getElementById('telerro').style.display="none";  
  }
  if (endereco==""){
    document.getElementById('enderro').innerHTML = 'campo endereço está vazio';
    document.getElementById('enderro').style.display="block";  
  }

  else{
    document.getElementById('enderro').style.display="none"  ;
  }
}
