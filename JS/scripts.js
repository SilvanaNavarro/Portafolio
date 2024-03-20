// get the div element
const modo=document.querySelector('.switch');
const ModoOscuro=document.querySelector('body')
const barra=document.querySelector('.barra')
const resumen=document.querySelector('.Resumen')
const barraLenguajes=document.querySelector('.barra-lenguajes')
const interruptor=document.querySelector('.interruptor')
const direccion_github=document.querySelector('.direccion-github')
const nombre=document.querySelector('#nombre')
const telefono=document.querySelector('#telefono')
const email=document.querySelector('#email')
const mensaje=document.querySelector('#mensaje')
const formulario=document.querySelector('.formulario')
const footer=document.querySelector('FOOTER')
const tipo_proyecto=document.querySelector('.tipo_proyecto')
const datos={
    nombre:'',
    telefono:'',
    email:'',
    mensaje:''
}

modo.addEventListener('click',modoOscuro)

nombre.addEventListener('input',leerfuncion);
telefono.addEventListener('input',leerfuncion);
email.addEventListener('input',leerfuncion);
mensaje.addEventListener('input',leerfuncion);
formulario.addEventListener('submit',validar)

function leerfuncion(e){
    datos[e.target.id]=e.target.value;
}

function modoOscuro(){
    modo.classList.toggle('DarkMode')
    ModoOscuro.classList.toggle('DarkMode')
    barra.classList.toggle('DarkBarra')
    resumen.classList.toggle('DarkResumen')
    barraLenguajes.classList.toggle('DarkBarraLenguajes')
    footer.classList.toggle('DarkBarra')
    tipo_proyecto.classList.toggle('DarkBarra')
};

function validar(e){
    e.preventDefault();
    const {nombre,telefono,email,mensaje}=datos;
    if(nombre===''||telefono===''||email===''||mensaje===''){
        mostrarAlerta('Llene todos los campos',e);
        return
    }
    mostrarAlerta('Enviado con éxito');
}

function mostrarAlerta(mensaje,error=null){
    const alerta=document.createElement('P');
    alerta.textContent=mensaje;
    
    if(error){
        alerta.classList.add('error');
    }
    else{
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    setTimeout(()=>{
        alerta.remove();
    },5000);
}


