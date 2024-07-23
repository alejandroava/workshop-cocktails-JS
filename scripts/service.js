// Codigo de las peticiones
export async function FecthApi(url,options) {
    try {
        const resp = await fetch(url,options)
        return resp.json()
    } catch(error) {
        console.log("Error con la data",error)
    }
}