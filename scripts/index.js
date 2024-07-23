import { FecthApi } from "./service.js";
import {NavigateTo} from "./hook.js"
import { Router } from "./hook.js";
// Aquí puedes agregar la lógica para procesar el registro

    document.getElementById("register-form").addEventListener("submit", async (e)=>{
        e.preventDefault();
        const password = document.getElementById("password").value
        const email = document.getElementById("email").value
        const nombre = document.getElementById("nombre").value
        document.querySelector(".sign-up-container").classList.add("hidden");
        document.querySelector(".sign-in-container").classList.remove("hidden");

         await fetch("http://localhost:3000/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password,
                nombre,
                email
            })
         })
        
    })


// Aquí puedes agregar la lógica para procesar el inicio de sesión
document.getElementById("login-form").addEventListener("submit", async(e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value
    const password = document.getElementById("login-password").value
    const users = await FecthApi('http://localhost:3000/users')
    
    const validateUser = users.find(user => user.email === email && user.password === password)
    if (validateUser) {
        localStorage.setItem('email', email)
        NavigateTo('/workshop-cocktails/view/home.html')
    } else {
        alert("credenciales incorrectas")
    }
})

// Codigo home
document.getElementById("logout").addEventListener("click", (e)=> {
    e.preventDefault();
    localStorage.removeItem('email')
    NavigateTo('/workshop-cocktails/index.html')
})
