class TarjetaContacto {
    nombre;
    telefono;   // aca no va const ni let ya que esta dentro de una class
    email;
    constructor(nombre, telefono, email) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
    }

    render() {
        return`
        <div class= "tarjeta-contacto"> 
            <h2>${this.nombre}</h2>
            <p>Telefono: ${this.telefono}</p>
            <p>Email: ${this.email}</p>
            </div>`;
    }
}


let contactos = [
    new TarjetaContacto('Joaquin', 56020252063, 'sofia@correo.com'),
    new TarjetaContacto('Juan', 56020252763, 'juan@correo.com'),
    new TarjetaContacto('Juan', 56020252763, 'juan@correo.com'),
    new TarjetaContacto('Juan', 56020252763, 'juan@correo.com'),
    new TarjetaContacto('Juan', 56020252763, 'juan@correo.com'),
    new TarjetaContacto('Juan', 56020252763, 'juan@correo.com'),
    new TarjetaContacto('Juan', 56020252763, 'juan@correo.com'),
    new TarjetaContacto('Juan', 56020252763, 'juan@correo.com'),
    new TarjetaContacto('Juan', 56020252763, 'juan@correo.com'),
    new TarjetaContacto('Juan', 56020252763, 'juan@correo.com'),
];

const renderContactos = (contactos) => {
    const contenedor = document.createElement('div');
    contactos.forEach(contacto => {
        // contenedor.innerHTML = contenedor.innerHTML + contacto.render(); // de manera explicita
        contenedor.innerHTML += contacto.render(); // de manera resumida
    });
    return contenedor;
}

const app = document.querySelector('#app');
app.appendChild(renderContactos(contactos))

//* Estas son las instancias de class ------- se dejara comentado.
// const user = new TarjetaContacto('sofia', 56020252063, 'sofia@correo.com');
// const userJuan = new TarjetaContacto('Juan', 56020252063, 'juan@correo.com');
// const userAmanda = new TarjetaContacto('Amanda', 56020252063, 'amanda@correo.com');

// console.log(user)
// console.log(userJuan)
// console.log(userAmanda)
