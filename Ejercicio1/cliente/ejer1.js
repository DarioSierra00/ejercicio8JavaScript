const url = "https://intranetjacaranda.es/Ejercicios/compruebaDisponibilidad.php";
const comprobar = document.getElementById('comprobar');
let div = document.getElementById('disponibilidad');

comprobar.addEventListener('click', async function(){
    let name = document.getElementById('login').value;

    if(await comprobarName(name)){
        div.textContent = "Disponible"
    }
    else{
        div.textContent = "No disponible"
    }
})

async function comprobarName(name){
    let boolean = false;
    try {
        const response = await fetch(url + "?login=" + name);
        const data = await response.text();

        if(response.ok){
            if(data === "si"){
                boolean = true;
            }
            else{
                boolean = false;
            }
        }

    } catch (error) {
        console.log(error)
    }
    return boolean;
}
