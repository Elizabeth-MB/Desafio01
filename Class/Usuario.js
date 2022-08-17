/* Declarar clase Usuario */
export class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    /* Atrbutos de Usuario */
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  /* Métodos de la clase Usuario */

  // Retorna el nombre completo del usuario
  getFullName() {
    return `${this.nombre} ${this.apellido}`;
  }

  //Agrega una mascota al array
  addMascota(mascota) {
    return (this.mascotas = [...this.mascotas, mascota]);
  }

  //Retorna la cantidad de mascotas que tiene el usuario
  countMascotas() {
    return this.mascotas.length;
  }

  //Agrega un objeto al array de libros
  addBook(nombre, autor) {
    this.libros = [
      ...this.libros,
      {
        nombre: nombre,
        autor: autor,
      },
    ];
  }

  //Retorna array con solo los nomvres del arrat de libros del usuario
  getBookNames() {
    return this.libros.map((res) => res.nombre);
  }
}
