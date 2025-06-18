const name = document.getElementById("name")
const password = document.getElementById("password")
const form = document.getElementById("form")
const errorElement = document.getElementById("error")
const cpassword = document.getElementById("cpassword")


form.addEventListener('submit', (e) => {
    let messages = []
    if(name.value === "" || name.value == null){
        messages.push("Name required!")
    }

    else if(password.value === "" || password.value == null){
        messages.push("Password field requireq!")
    }

    else if(password.value.length <=6){
        messages.push("Weak password!")
    }

    else if(password.value === "password"){
        messages.push("Password cannot be password!")
    }
    else if(password.value != cpassword){
        messages.push("Password did'nt match")
    }

    if(messages.length > 0){
        e.preventDefault
        errorElement.innerText = messages.join(' ,')

    }

  
})
