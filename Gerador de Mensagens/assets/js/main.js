const frases = [
    "“Os problemas são oportunidades para se mostrar o que sabe.”",
    "“Nossos fracassos, às vezes, são mais frutíferos do que os êxitos.”",
    "“Tente de novo. Fracasse de novo. Mas fracasse melhor”.",
    "“É costume de um tolo, quando erra, queixar-se dos outros. É costume de um sábio queixar-se de si mesmo”.",
    "“O verdadeiro heroísmo consiste em persistir por mais um momento, quando tudo parece perdido”.",
    "“Seja corajoso. Mesmo que você não seja, finja ser. Ninguém nota a diferença”",
    "“Mesmo que já tenhas feito uma longa caminhada, há sempre um novo caminho a fazer”.",
    " “Nada acontece a menos que sonhemos antes”",


];

const credito = [
    " - Duke Ellington",
    " - Henry Ford",
    " - Samuel Beckett",
    " - Sócrates",
    " - W. F. Grenfel",
    " - H. Jackson Brown Jr.",
    " - Santo Agostinho",
    " - Carl Sandburg"
];

const frs = document.getElementById("frase");
const crd = document.getElementById("creditos");

function escolherFrase(){
    let numero = Math.floor(Math.random()*frases.length);

    frs.innerHTML = frases[numero];
    crd.innerHTML = credito[numero];
}
