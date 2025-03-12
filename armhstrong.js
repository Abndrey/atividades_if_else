 var Armstrong = prompt("Verifique se um número é de Armstrong")
    
    var strNum = num.toString();
    var quantidadeDigitos = strNum.length;
    var soma = 0;

    
    for (var i = 0; i < quantidadeDigitos; i++) {
        
        soma += Math.pow(parseInt(strNum.charAt(i)), quantidadeDigitos);
    }

    
    if (soma === num) {
        console.log(num + " é um número de Armstrong.");
    } else {
        console.log(num + " não é um número de Armstrong.");
    }



Armstrong(153);  
Armstrong(9474); 
Armstrong(123);  