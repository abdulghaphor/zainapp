import { action, makeObservable, observable } from "mobx";
import movies from "./movies";

class MovieStore {
  movies = movies.map((cv) => ({ ...cv, status: false }));

  switchFn = (id) => {
    this.movies = this.movies.map((cv) => {
      if (cv.id === id) {
        return { ...cv, status: !cv.status };
      } else return cv;
    });
  };

  constructor() {
    makeObservable(this, {
      movies: observable,
      switchFn: action,
    });
  }
}

const movieStore = new MovieStore();
export default movieStore;
