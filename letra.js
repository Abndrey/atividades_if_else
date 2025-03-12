function primLetra(str) {
    
    if (str.charAt(0) === str.charAt(0).toUpperCase()) {
        console.log("A primeira letra é maiúscula.");
    } else {
        console.log("A primeira letra não é maiúscula.");
    }
}

primLetra("Olá");
primLetra("olá");
