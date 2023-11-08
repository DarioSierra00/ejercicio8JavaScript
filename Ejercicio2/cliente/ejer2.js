const url = "https://intranetjacaranda.es/Ejercicios/compruebaDisponibilidad.php";
const urlAlternativas = "https://intranetjacaranda.es/Ejercicios/compruebaDisponibilidadXML.php";
const comprobar = document.getElementById('comprobar');
let div = document.getElementById('disponibilidad');

comprobar.addEventListener('click', function () {
    let name = document.getElementById('login').value;

    if (name) {
        comprobarName(name)
    }
})

async function comprobarName(name) {
    const formData = new FormData();
    try {
        formData.append('login', name);

        const response = await fetch(urlAlternativas, {
            method: 'POST',
            body: formData,
        })
        const data = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, "application/xml");

        let disponible = xml.getElementsByTagName('disponible')[0].textContent;

        if (disponible === 'si') {
            div.textContent = 'Disponible'
        }
        else {

            let login = Array.from(xml.getElementsByTagName('login'));
            div.textContent = 'Alternativas'
            let ul = document.createElement('ul');
            login.forEach(element => {
                let li = document.createElement('li');
                let info = document.createTextNode(element.textContent);
                li.appendChild(info);
                ul.appendChild(li)
            });
            div.appendChild(ul);
        }
    }
    catch (error) {
        console.log(error)
    }
}
