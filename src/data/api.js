class Api {
  static searchMovies(keyword) {
    return fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=557f57c2980e54325fa023e0af765cc9&language=en-US&query=${keyword}&include_adult=true`,
    )
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        }
        return Promise.reject(`${keyword} is not found`);
      });
  }

  static informationMovie() {
    return fetch(
      'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=557f57c2980e54325fa023e0af765cc9',
    )
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson) {
          return Promise.resolve(responseJson.results);
        }
        return Promise.reject('Movies not found');
      });
  }

  static PopularMovie() {
    return fetch(
      'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=557f57c2980e54325fa023e0af765cc9',
    )
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson) {
          return Promise.resolve(responseJson.results);
        }
        return Promise.reject('Movies not found');
      });
  }
}

export default Api;
