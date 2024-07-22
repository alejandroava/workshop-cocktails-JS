// Codigo de las peticiones
async function FecthApi(url,options) {
    try {
        const resp = await fetch(url,options)
        const data = resp.json()
        console.log(data)
    } catch {
        console.log("Error con la data")
    }
}