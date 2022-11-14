
function calcularimc(){
       
        
   
        var altura = document.getElementById('altura').value;
        var peso = document.getElementById('peso').value;
        
            var valid = false;

            while (!valid) {
                peso1= parseInt(peso);
                altura1 = parseInt(altura);
                valid = !isNaN(peso1) && !isNaN(altura1);
                if (!valid) {
                    alert("Voce não digitou um número!")
                   break
                }
                else{
                    calcular = peso/(altura*altura)
                    if(calcular<18.5){
                        window.alert("Voce está abaixo do peso com "+ calcular.toFixed(2)+" IMC")
                    }
                    else if(calcular<=24.9){
                        window.alert("Voce está no peso ideal com "+calcular.toFixed(2)+" IMC")
                    }
                    else if(calcular<=29.9){
                        window.alert("Voce está com sobrepeso com "+calcular.toFixed(2)+"IMC")
                    
                    }
                    else if(calcular <=39.9){
                        window.alert("Voce está obeso com"+calcular.toFixed(2)+" Kilos")
                    }
                    
                    else{
                        window.alert("VOce está com obesidade grave, com "+calcular.toFixed(2)+" IMC")
        }
                }
            }
       
            
    }
    

