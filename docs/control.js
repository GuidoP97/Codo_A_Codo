const usuario = document.getElementById('user')
const contraseña = document.getElementById('pass')
const boton = document.getElementById('btn')

boton.addEventListener('click', (e) => {
    if (!usuario.value) {
      alert('No se a ingresado un nombre de usuario')
    }else if (usuario.value.indexOf("@") == -1) {
      alert('El nombre de usuario no contiene Arroba')
    }else if (!contraseña.value) {
      alert('No se a ingresado una contraseña')
    }else if(usuario.value && usuario.value.indexOf("@") != -1){
      alert("Usted ingreso al sistema correctamente")
      e.reset()
    }

    e.preventDefault()
})
