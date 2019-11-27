function calcimposto() {
    var salario = document.getElementById("salario").value;
    var imposto;
    
    if(salario < 1000){
        imposto = 0;
    }else if (salario <= 2500){
            imposto = salario * 0.125;
    }else if (salario <= 5000){
        imposto = salario * 0.25;
    }else if (salario > 5000) {
        imposto = 1300;        
    }
    return(imposto);
}   
function totalizar_exibir() {
    var salario = document.getElementById("salario").value;
    var imposto = calcimposto();
    var salariototal = salario - imposto;
    document.getElementById("resultado").innerHTML="Imposto: "+imposto+"<br>  Salario liquido :"+salariototal;
}




       
  
  