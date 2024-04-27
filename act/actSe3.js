const Libro = {
    Titulo: 'El Señor de los Anillos',
    Autor: 'J.R.R. Tolkien',
    Genero: 'Fantasia',
    Año: 1954,
    Editorial: 'Minotauro',
    Imprimir: function() {
        console.log(`${this.Titulo} es una novela de genero ${this.Genero} escrita por ${this.Autor} en el año ${this.Año}`);
    }
}

Libro.Imprimir();