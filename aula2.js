var tentativa=0;

function iniciarjogo(){
  document.getElementById('num11').value = Math.floor(Math.random()*10);
  document.getElementById('num22').value = Math.floor(Math.random()*10);
  document.getElementById('num33').value = Math.floor(Math.random()*10);

}

function verificarsenha(){
  var num1 = document.getElementById('num1').value;
  var num11 = document.getElementById('num11').value;
  var num2 = document.getElementById('num2').value;
  var num22 = document.getElementById('num22').value;
  var num3 = document.getElementById('num3').value;
  var num33 = document.getElementById('num33').value;
  var acerto=0;

  if(num1 == num11){
    acerto == acerto++;  //mesma coisa que (acerto = acerto+1;)

  }
  if(num2 == num22){
    acerto == acerto++;  //mesma coisa que (acerto = acerto+1;)

  }
  if(num3 == num33){
    acerto == acerto++;  //mesma coisa que (acerto = acerto+1;)

  }
  if(acerto == 3){
    document.getElementById('Resultado').style.display="block";
    document.getElementById('Resultado').innerHTML = ("Parabéns Você Venceu e tentou " + tentativa + " vezes");
  }
  else{
    document.getElementById('Resultado').style.display="block";
    document.getElementById('Resultado').innerHTML = ("Tente de Novo, Você Acertou " + acerto + " número(s)")
    tentativa ++;
  }
  
  
}

function Limparcampos(){
  document.getElementById('num1').value ="";
  document.getElementById('num2').value ="";
  document.getElementById('num3').value ="";

}

function validar()
    {
      var usuario = document.getElementById('user').value;
      var senha = document.getElementById('senha').value;
      
      if (usuario==""){
        document.getElementById('usererro').innerHTML = 'campo usuário está vazio';   
        document.getElementById('usererro').style.display="block";  
      }
      
      else{
        document.getElementById('usererro').style.display="none";  
      }
      
      if (senha==""){
        document.getElementById('senhaerro').innerHTML = 'campo senha está vazio';
        document.getElementById('senhaerro').style.display="block";  
      }

      else{
        document.getElementById('usererro').style.display="none";  
      }

      
    }