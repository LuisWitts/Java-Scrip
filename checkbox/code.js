var num = 0;
var novalinha=0

function novatarefa () {
    num++
        var nometarefa = document.getElementById("input").value;
        var novalinha = '<div class="row"><div class="col-md-2"><input type="checkbox" id="check" onclick="preencher();"></div><div class="col-md-8">**tituloDaTarefa**</div><div class="col-md-2">**numSequencia**</div></div>'; 
        novalinha = novalinha.replace("**numSequencia**",num);
        novalinha = novalinha.replace("**tituloDaTarefa**",nometarefa);
    console.log(novalinha);

document.getElementById("lista").innerHTML+=novalinha;


}
function preencher() {
    
    var novalinha = 'Este texto aparece riscado<div class="row"><div class="col-md-2"><input type="checkbox" id="check" onclick="preencher();"></div><div class="col-md-8" id="tarefa"><strike>**tituloDaTarefa**</strike></div><div class="col-md-2">**numSequencia**</div></div>';
    var nometarefa = document.getElementById("input").value;
    novalinha = novalinha.replace("**tituloDaTarefa**",nometarefa);
    
}