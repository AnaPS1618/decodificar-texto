
//document.querySelector("#descrpt").addEventListener('click', descriptografar)

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('#caixa_texto').value = ''
    document.getElementById('res').value = ''
});

let resposta = document.querySelector('#res')
let textoInicialCaixa = document.querySelector('#texto_Inicial_Caixa')

const key = "chave-secreta";

function encrypt(text) {
    const encrypted = CryptoJS.AES.encrypt(text, key);
    return encrypted.toString();
};

function decrypt(ciphertext) {
    try {
        const decrypted = CryptoJS.AES.decrypt(ciphertext, key);
        return decrypted.toString(CryptoJS.enc.Utf8);
    } catch (error) {
        console.error("Erro ao descriptografar:", error);
        return "";  
    };
};

document.querySelector("#encrpt").addEventListener('click', function(){
    let textoOriginal = document.querySelector('#caixa_texto').value;

    let textoCriptogrado = encrypt(textoOriginal);

    if(textoOriginal === ''){
        alert('Texto não inserido para criptografia')
    }

    textoInicialCaixa.style.display = 'none';
    resposta.style.display = 'block'
    resposta.innerHTML = textoCriptogrado;

    document.querySelector('#caixa_texto').value = '';
});

document.querySelector("#descrpt").addEventListener('click', function(){
    let textoOriginal = document.querySelector('#caixa_texto').value;

    let textoDescriptografado = decrypt(textoOriginal)

    if(textoOriginal === ''){
        alert('Texto não inserido para descriptografia')
    }

    resposta.innerHTML = textoDescriptografado;

    document.querySelector('#caixa_texto').value = '';
})

document.querySelector('#copia').addEventListener('click', copiarTexto)

function copiarTexto(){
    let textoParaCopia = document.getElementById('res').innerText

    navigator.clipboard.writeText(textoParaCopia).then(function() {
        exibirMensagemFlutuante();
    }).catch(function(err) {
        console.error("Erro ao copiar texto:", err);
    });
}

function exibirMensagemFlutuante() {
    var mensagemFlutuante = document.getElementById("mensagem-flutuante");
    mensagemFlutuante.style.display = "block";

    // Oculta a mensagem após alguns segundos (opcional)
    setTimeout(function() {
        mensagemFlutuante.style.display = "none";
    }, 500); // Exibe por 3 segundos, ajuste conforme necessário
}