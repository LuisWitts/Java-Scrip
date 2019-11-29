/*var lista = [];
var cont = 0
function coisar() {
    

    


while (nome.length > 0) {
    

var palavra = nome.slice(0,nome.indexOf(" "));
nome = nome.slice(nome.indexOf(" ")+1);

console.log("primeiro nome = "+palavra);
console.log("sobrou         = "+nome);
}

}
*/
function coisar() {
    var nome = document.getElementById("nome").value
    var lista = nome.split(" ");
    console.log(lista);
}
