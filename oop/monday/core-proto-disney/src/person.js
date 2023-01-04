/**
 * Человек.
 * @param {string} name
 */
function Person(name, watchedMovies) {
  this.name = name;
  this.watchedMovies = watchedMovies;
  this.watchedMovies.toString = function () {
    let res = '';
  for (let i = 0; i < watchedMovies.length; i++)
    res += `${i + 1} ${watchedMovies[i].title}`;
  return res;
  }
}

Person.prototype.watchMovie = function (movie) {
  movie.play();
  if (!this.watchedMovies.includes(movie))
    this.watchedMovies.push(movie);
  return this.movie = movie;
};

module.exports = { Person };
