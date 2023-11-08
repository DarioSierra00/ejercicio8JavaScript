const url = "https://intranetjacaranda.es/Ejercicios/compruebaDisponibilidad.php";
const urlAlternativas = "https://intranetjacaranda.es/Ejercicios/compruebaDisponibilidadJSON.php";
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
        //console.log(response.json())
        const data = await response.json();

        let alternativas = data.alternativas;
        Array.from(alternativas);
        if (data === 'si') {
            div.textContent = 'Disponible'
        }
        else {
            div.textContent = 'Alternativas'
            let ul = document.createElement('ul');
            alternativas.forEach(element => {
                let li = document.createElement('li');
                let info = document.createTextNode(element);
                li.appendChild(info);
                ul.appendChild(li)
            });
            div.appendChild(ul);
        }
    } catch (error) {
        console.log(error)
    }
}
