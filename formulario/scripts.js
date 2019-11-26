var salmin = prompt("Digite o valor do salario minimo ");
var qtdekw = prompt("Digite a qauntidade de kw");

var valor1kw = salmin/700;
var valortotal = valor1kw * qtdekw;
var valordesc = valortotal * 0.9;



document.write("Valor de 1 kw : R$ "+valor1kw+"</br>");
document.write("valor total da conta : R$ "+valortotal+"</br>");
document.write("Valor com 10% de desconto : R$ "+valordesc+"</br>");

console.log("Valor de 1 kw : R$ "+valor1kw);
console.log("valor total da conta : R$ "+valortotal);
console.log("Valor com 10% de desconto : R$"*valordesc);

alert("Valor de 1 kw : R$ "+valor1kw);
alert("valor total da conta : R$ "+valortotal);
alert("Valor com 10% de desconto : R$ "+valordesc);