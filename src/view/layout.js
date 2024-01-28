import '../component/movies-list';
import '../component/nav-bar';
import Api from '../data/api';

const layout = () => {
  const searchElement = document.querySelector('nav-bar');
  const moviesListElement = document.querySelector('movies-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await Api.searchMovies(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const infoMovie = async () => {
    try {
      const result = await Api.informationMovie();
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    moviesListElement.movies = results;
  };

  const fallbackResult = (message) => {
    moviesListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
  infoMovie();
};

export default layout;
