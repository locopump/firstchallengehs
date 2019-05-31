/**
 * crear una estructura de datos (BD / Class)
 * class Autor dentro de cancion
 * Agregar cancion a disco
 * Agregar cancion a autor
 * listar canciones del disco
 * modulos, clases en varios archivos, factory pattern, clases es6, imports es6, modulos
 * Weird Parts
 * 
 * git@github.com:luchotess/Serverless-Training.git / contacto@hackspace.pe
 * 
 */
class Autor {
    constructor(nombre, pais) {
        this.nombre = nombre;
        this.pais = pais;
    }
}

class Cancion {
    constructor(titulo, duracion, autor) {
        this.titulo  = titulo;
        this.duracion  = duracion;
        this.autor  = new Autor(autor.nombre, autor.pais);
    }
}

class db {
    constructor(canciones) {
        this.canciones = canciones;
    }
}

 let SpotifyDB;

 function spotify () {
    return {
        init: function () {
            SpotifyDB = new db([]);
        },
        agregarCancion: function (titulo, duracion, autor) {
            SpotifyDB.canciones.push(new Cancion(titulo, duracion, autor));
        }
    }
 }

 let spotifyInstance = spotify();
spotifyInstance.init();
spotifyInstance.agregarCancion('Paranoid', 3.45, {nombre: 'Black Sabbath', pais: 'Inglaterra'});
spotifyInstance.agregarCancion('Hellowed by the name', 4.12, {nombre: 'Iron Maiden', pais: 'Inglaterra'});



//  let nuevaCancion = new cancion('paranoid', 3.45, 'Black Sabbath');
 console.log(SpotifyDB);
