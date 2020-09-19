import React from 'react';
import { MovieCard, Jumbotron, Carousel } from '../components';

const Home = ({ movieJumbotron, favoriteList, onAddListPressed, movies }) => (
  <div className="home-container">
    <Jumbotron
      movie={movieJumbotron}
      favoriteList={favoriteList}
      onAddListPressed={movie => onAddListPressed(movie)}
    />

    <Carousel title="At Cinema right now">
      {movies.lastestMovies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          favoriteList={favoriteList}
          onAddListPressed={movie => onAddListPressed(movie)}
        />
      ))}
    </Carousel>

    <Carousel title="The best of Horror">
      {movies.horrorMovies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          favoriteList={favoriteList}
          onAddListPressed={movie => onAddListPressed(movie)}
        />
      ))}
    </Carousel>

    <Carousel title="ROFL">
      {movies.comedyMovies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          favoriteList={favoriteList}
          onAddListPressed={movie => onAddListPressed(movie)}
        />
      ))}
    </Carousel>

    <Carousel title="Movies that can take you on spin">
      {movies.scifiMovies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          favoriteList={favoriteList}
          onAddListPressed={movie => onAddListPressed(movie)}
        />
      ))}
    </Carousel>

    <Carousel title="Animations to chillax">
      {movies.animationMovies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          favoriteList={favoriteList}
          onAddListPressed={movie => onAddListPressed(movie)}
        />
      ))}
    </Carousel>
  </div>
);

export default Home;
