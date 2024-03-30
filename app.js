// OBJETOS

// Paginas que generan ID unicas: shortId, LongId (Librerias)

let docente = {
    nombre: "Ismael",
    apellido: "Developer",
    legajo: "58865",
    edad: 19,
    hobbies: ["programar", "jugar", "dormir"],
    Saludar:() => {
        console.log("hola!")
    },
    mascotas: [{nombreAnimal: "Doki", edadAnimal: 14, vivo: true, tipo: "🐕"},
               {nombreAnimal: "Blanca", edadAnimal: 8, vivo: true, tipo: "🐕"},
               {nombreAnimal: "Ricky", edadAnimal: 4, vivo: false, tipo: "🐈"},
    ],
};


const mostrarDocente = (array) => {

    for (let i = 0; i < docente.length; i++) {
        console.log(`el alumno ${array[i].nombre} tiene ${array[i].edad} años`)

    }

}

mostrarDocente(docente);