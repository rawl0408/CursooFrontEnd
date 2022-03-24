function getAllDirectors(peliculas) {

    let result = [];

    result = peliculas.map(function director(movie) {
        return movie.director;
    })
    console.table(result);

    // let result = [];
    // result = peliculas.map(movie => {
    //     return movie.director;
    // });
    // console.table(result);
}


function getPelisFromDirector(pelis) {

    const films = movies.filter(titulo => titulo.director === pelis);

    return films;

}

function pelisAverage(director) {

    const filmsByDirector = movies.filter(ele => ele.director === director);
    console.log("Director: " + director);
    console.log(filmsByDirector);

    const scores = filmsByDirector.reduce((contador, filmsByDirector) => {
        console.log("**********************");
        console.log("Film: " + filmsByDirector.title + " Score: " + filmsByDirector.score);
        //console.log("**********************");
        return contador + filmsByDirector.score;
    }, 0).toFixed(2)

    //Calculem la mitja... deixem els decimals

    const mitja = parseFloat(scores / parseFloat(filmsByDirector.length)).toFixed(2)
    console.log("**********************");
    console.log("La suma de las scores es: " + scores + " y la media de las scores es: " + mitja);
    console.log("**********************");

}

function orderMovies(ordenacion) {
    ordenacion.sort((a, b) => a.tittle < b.tittle ? -1 : 1);

    const veintePrimers = ordenacion.slice(0, 20);
    
    console.table("Las 20 primeras peliculas son: " + veintePrimers);

    return veintePrimers;
}