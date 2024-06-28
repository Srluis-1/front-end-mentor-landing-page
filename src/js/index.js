const campo = document.querySelectorAll('.campo')
const campoVazio = document.querySelectorAll('.campo-vazio')
const form = document.querySelector('.formulario')
const btn = document.querySelectorAll('.btn')

form.addEventListener("submit", function(event){
    event.preventDefault()

    campo.forEach((campo) =>{
        if( campo.value !== ""){
            campo.classList.remove('bordavermelha');
            campo.nextElementSibling.classList.remove('mostrar');
        }else{
            campo.classList.remove('.border')
            campo.classList.add('bordavermelha');
            campo.nextElementSibling.classList.add('mostrar');
        }
    })

})
