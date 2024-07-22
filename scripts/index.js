// Aquí puedes agregar la lógica para procesar el registro

document.getElementById("register-form").addEventListener("submit", async (e) => {
    e.preventDefault()
    const password = document.getElementById("password").value
    const email = document.getElementById("email").value
    const nombre = document.getElementById("nombre").value

    const enviarDatos = await fetch("http://localhost:3000/users", {
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