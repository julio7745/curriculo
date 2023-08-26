
const expansivosBotton = document.querySelectorAll(".expBotton")
for (let i = 0; i < expansivosBotton.length; i++) {
    expansivosBotton[i].addEventListener("click", expande);
}

function expande(e) {

    let alvo = e.target
    const alvoname= e.target.tagName.toLowerCase();

    if (alvoname == "span" || alvoname == "abbr") {
        alvo = e.target.parentNode;  
    }

    const pai = alvo.parentNode;

    const filhosDiretos = pai.children;
    const filhosDiretosExpansivos = Array.from(filhosDiretos).filter(elemento => elemento.classList.contains("exp"));

    const iconMore = pai.querySelectorAll(".more");
    const iconLess = pai.querySelectorAll(".less");

    if (filhosDiretosExpansivos[0].style.display == "block") {
        
        const filhosExpansivos = pai.querySelectorAll(".exp");
        
        for (let i = 0; i < iconMore.length; i++) {
            iconMore[i].style.display = "inline-block";
            iconLess[i].style.display = "none";
        }
        for (let i = 0; i < filhosExpansivos.length; i++) {
            filhosExpansivos[i].style.display = "none";
        }

    } else {
        
        iconMore[0].style.display = "none";
        iconLess[0].style.display = "inline-block";

        for (let i = 0; i < filhosDiretosExpansivos.length; i++) {
            filhosDiretosExpansivos[i].style.display = "block";
        }
    }
}



function carregaData() {

    const data = new Date()
    const format = (n) => n > 9 ? n : `0${n}`

    const p = document.querySelector("aside p")
    p.innerHTML += `${format(data.getDate())}/${format(data.getMonth()+1)}/${format(data.getFullYear())}`
    
}