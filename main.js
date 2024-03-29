function tocaSom(seletorAudio){
    
    const elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName === 'audio' ){
        
        elemento.play();
        
    }else{
        console.log('Elemento não encontrado ou seletor inválido')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//let contador = 0; --> utilizado para o laço de repetição while

for (let i = 0; i < listaDeTeclas.length; i++){

    const tecla = listaDeTeclas[i];

    const instrumento = tecla.classList[1];
    
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function (){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (event){
         
        if(event.code === 'Space' || event.code === 'Enter'){
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
    
    //contador = contador + 1; --> utilizado para o laço de repetição while

} 