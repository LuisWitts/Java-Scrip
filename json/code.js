function buscar() {
    var id =document.getElementById("input").value;
    console.log("O ID digitadi foi.."+id)


    var URL = "https://jsonplaceholder.typicode.com/users/"+id;
    console.log("Montei a URL...");
    console.log(URL);

    fetch(URL, { method:"GET" })
    .then(response => response.json() )
    .then(json => preencheHTML(json));

}

function preencheHTML(json){
    var result = document.getElementById("result");
    result.innerHTML += "<h3>Informções primárias &#9759; </h3> </br>";
    result.innerHTML += "Razão social: "+json.name + " &#10003; <br/>";
    result.innerHTML += "Nome de Usuário: "+json.username +"&#10003 ; <br/>";
    result.innerHTML += "Email do Usuário: "+json.email+"&#10003; <br/>";
    result.innerHTML += "Telefone do Usuário: "+json.phone+"&#9743; <br/>";
    result.innerHTML += "<h3>Endereço do Usuário &#9759; </h3> </br>";
    result.innerHTML += "Cidade do Usuário: "+json.address.city+"&#10003; <br>";
    result.innerHTML += "Rua do Usuário: "+json.address.street+"&#10003; <br>";
    result.innerHTML += "Nº da casa do Usuário: "+json.address.suite+"&#10003; <br>"
    result.innerHTML += "CEP do Usuário: "+json.address.zipcode+"&#10003; <br>"
    result.innerHTML += "<strong> <hr> </strong> "

    
 
 }