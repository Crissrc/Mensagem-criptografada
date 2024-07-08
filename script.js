// Função para criptografar o texto
function criptografar() {
    // Obtém o texto do campo de entrada
    let texto = document.getElementById("inputText").value;

    // Realiza a substituição das letras conforme as regras
    let textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    // Exibe o texto criptografado no campo de saída
    document.getElementById("outputText").value = textoCriptografado;
}

// Função para descriptografar o texto
function descriptografar() {
    // Obtém o texto do campo de entrada
    let texto = document.getElementById("inputText").value;

    // Realiza a substituição das chaves para retornar ao texto original
    let textoDescriptografado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    // Exibe o texto descriptografado no campo de saída
    document.getElementById("outputText").value = textoDescriptografado;
}

// Função para copiar o texto do campo de saída para a área de transferência
function copiarTexto() {
    // Seleciona o texto do campo de saída
    let texto = document.getElementById("outputText");
    texto.select();
    texto.setSelectionRange(0, 99999); // Para dispositivos móveis

    // Copia o texto selecionado
    document.execCommand("copy");

    // Alerta o usuário que o texto foi copiado
    alert("Texto copiado para a área de transferência!");
}
