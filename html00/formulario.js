console.log("inicio") 

function muestra() {
    let user= document.getElementsById("user")
    let password= document.getElementById("password")

    console.log(user.value)
    console.log(password.value)
}

//ejemplo de funcion de callback
const boton = document.getElementById("boton")
//boton.addEventListener("click")

//ejemplo de funcion anonima de tipo arrow
boton.addEventListener("click",
    () => {
        let user= document.getElementsById("user")
    let password= document.getElementById("password")

    console.log(user.value)
    console.log(password.value)
    }
)