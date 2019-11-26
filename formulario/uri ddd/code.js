
var ddd = prompt("digite seu ddd: ");
if (ddd == 61){
    document.getElementById("resultado").innerHTML="Brasilia";
}
else
{
    if(ddd == 71)
    {
        document.getElementById("resultado").innerHTML="Salvador";
    }
    else
    {
        if(ddd == 21)
        {
            document.getElementById("resultado").innerHTML="Rio de Janeiro";
        }
        else
        {
            if(ddd == 32)
        {
                document.getElementById("resultado").innerHTML="Juiz de Fora ";   
        }
            else
            {
                if (ddd == 19)
            {
                    document.getElementById("resultado").innerHTML="Campinas";
                }
                else
                {
                    if (ddd ==27) 
                    {
                        document.getElementById("resultado").innerHTML="Vitória";                  
                    }
                    else
                    {
                        if (ddd == 31)
                        { 
                            document.getElementById("resultado").innerHTML="Belo Horizonte";    
                        }
else{
    document.getElementById("resultado").innerHTML="invalido";
                        }                        
                    }
                }
            }
        }
    }
}
