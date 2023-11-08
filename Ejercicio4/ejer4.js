const url = "https://intranetjacaranda.es/Ejercicios/cargaProvinciasXML.php";
const selectProvincias = document.getElementById('provincias');

async function cargarProvincias(){
    const response = await fetch(url);
    const data = await response.json();
    let provincias = data.nombre;

    Array.from(provincias);

    provincias.forEach(provincia => {
        selectProvincias.innerHTML = provincia
    });

}