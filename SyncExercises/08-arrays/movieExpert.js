const { movies, moviesAnimated, asiaScores, euroScores } = require('./data');

const upperTitle = (movies) => movies.map((movie) => movie.toUpperCase());
const mergeMovies = (movieSet1, movieSet2) =>
  upperTitle([...movieSet1, ...movieSet2]);
const removeLastMovie = (movies) => [movies.pop(), movies];
const moviesReviews = (movies, reviews) => {
  const moviesDetails = {};
  for (let i = 0; i < movies.length; i++) {
    moviesDetails[movies[i]] = {
      asia: reviews[0][i],
      europe: reviews[1][i],
      same: reviews[0][i] === reviews[1][i],
    };
  }
  return moviesDetails;
};

//------------------------Ejecución------------------------
//--1 Pasa a mayusculas
const moviesUpper = upperTitle(movies);
console.log(`Pasa a Mayus\n${moviesUpper}\n----------------`);
//--2 Combina peliculas y pasa a mayusculas
const moviesMerged = mergeMovies(movies, moviesAnimated);
console.log(`Combina y pasa a Mayus: \n${moviesMerged}\n----------------`);
//--3 Elimina el ultimo elemento de la lista
const moviesRemoved = removeLastMovie(moviesMerged);
console.log(
  `Películas: ${moviesRemoved[1]}
  Elemento Eliminado: ${moviesRemoved[0]}\n----------------`,
);
//--4 Muestra las calificaciones de las peliculas
const moviesReviewsResult = moviesReviews(moviesRemoved[1], [
  asiaScores,
  euroScores,
]);
console.log('reviews: ', moviesReviewsResult);
