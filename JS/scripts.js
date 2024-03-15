// get the div element
const modo=document.querySelector('.switch');
const ModoOscuro=document.querySelector('body')
const barra=document.querySelector('.barra')
const resumen=document.querySelector('.Resumen')
const barraLenguajes=document.querySelector('.barra-lenguajes')
const interruptor=document.querySelector('.interruptor')
modo.addEventListener('click',e);

function e(){
    modo.classList.toggle('DarkMode')
    ModoOscuro.classList.toggle('DarkMode')
    barra.classList.toggle('DarkBarra')
    resumen.classList.toggle('DarkResumen')
    barraLenguajes.classList.toggle('DarkBarraLenguajes')
    interruptor.classList.toggle('DarkMode')
}


