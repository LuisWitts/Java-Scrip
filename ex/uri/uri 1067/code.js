var valor = prompt("Digite o valor :");
var htmlGerado = ""
var nlinha = 0;
var csslinha ;
for (i = 0; i <= valor ; i++) {
    if (i%2!=0) 
    {
        var csslinha = "linha_"+nlinha;

        htmlGerado += "<div class='row "+csslinha+"'>";
        htmlGerado+="<div class='col-sm-12'>"+i+"</div>";
        htmlGerado+="</div>";

        nlinha= (nlinha+1)%3;

    }
    


}            
document.getElementById("tabela").innerHTML= htmlGerado;
