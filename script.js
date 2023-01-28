var conteudo = window.document.getElementsByClassName('exp')  
var more = window.document.getElementsByClassName('more')
var less = window.document.getElementsByClassName('less')
function expancao(aux){
    if(conteudo[aux].style.display == 'none'){
        fechatodos(0);
        fechatodos(1);
        conteudo[aux].style.display = 'block'
        more[aux].style.display = 'none'
        less[aux].style.display = 'inline-block'
    }else{
        conteudo[aux].style.display = 'none'
        more[aux].style.display = 'inline-block'
        less[aux].style.display = 'none'
    }
}

var conteudo2 = window.document.getElementsByClassName('exp2')  
var more2 = window.document.getElementsByClassName('more2')
var less2 = window.document.getElementsByClassName('less2')
function expancao2(aux){
    if(conteudo2[aux].style.display == 'none'){
        fechatodos(1)
        conteudo2[aux].style.display = 'block'
        more2[aux].style.display = 'none'
        less2[aux].style.display = 'inline-block'
    }else{
        conteudo2[aux].style.display = 'none'
        more2[aux].style.display = 'inline-block'
        less2[aux].style.display = 'none'
    }
}


function fechatodos(aux1){
    if (aux1 == 0){
        for(var aux2 = 0; aux2 < conteudo.length; aux2++ ){
            conteudo[aux2].style.display = 'none';
            more[aux2].style.display = 'inline-block'
            less[aux2].style.display = 'none'
        }
    }else if (aux1 == 1){
        for(var aux2 = 0; aux2 < conteudo2.length; aux2++ ){
            conteudo2[aux2].style.display = 'none';
            more2[aux2].style.display = 'inline-block'
            less2[aux2].style.display = 'none'
        }
    }
    
}