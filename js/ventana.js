let modal = document.getElementById('miModal')
let flex = document.getElementById('flex')
let abrir = document.getElementById('abrir')
let cerrar = document.getElementById('close')

abrir.addEventListener('click', function(){
    document.getElementById('imagenExploit').src = 'Imagenes/Under_contruction.jpeg'
    modal.style.display = 'block';
})

cerrar.addEventListener('click', function(){
    modal.style.display = 'none';
})

window.addEventListener('click', function(e){
    if(e.target == flex){
        modal.style.display = 'none';
    }
})
