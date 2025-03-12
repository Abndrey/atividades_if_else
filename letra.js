function primLetra(str) {
    // Verifica se a primeira letra é maiúscula
    if (str.charAt(0) === str.charAt(0).toUpperCase()) {
        console.log("A primeira letra é maiúscula.");
    } else {
        console.log("A primeira letra não é maiúscula.");
    }
}

// Exemplo de uso:
primLetra("Olá");
primLetra("olá");