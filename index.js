import { Usuario } from './Class/Usuario.js';

const mascotas =['Perro', 'Gato'];

//Creamos el objeto usuario
const usuario = new Usuario('Elon', 'Musk', [{ nombre: 'Cien años de soledad', autor: 'Gabriel García Marquez'}], mascotas);

// Invocamos los métodos de Usuario
const metodosUsuario = () => {

    console.log(usuario.getFullName());

    usuario.addMascota('Conejo');

    console.log(usuario.countMascotas());

    usuario.addBook('El señor de las moscas', 'William Golding');

    console.log(usuario.getBookNames());
    
}

metodosUsuario();
    