import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState, Suspense } from 'react';
import * as Movie from 'service/movie';
import Button from '@mui/material/Button';
import css from '../pages/MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    async function apiMovie() {
      try {
        const { data } = await Movie.getMovies(movieId);
        setMovie(data);
      } catch (error) {
        console.log('Error');
      }
    }

    apiMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={css.movie}>
      <Link to={backLinkLocRef.current} className={css.button}>
        <Button type="submit" variant="text">
          Go back
        </Button>
      </Link>
      <div className={css.container}>
        <div className={css.img}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : ''
            }
            alt={`${movie.title || movie.name}`}
            width={350}
          />
        </div>
        <div className={css.listAdInf}>
          <ul className={css.list}>
            <li className={css.title}>{movie.title}</li>
            <li className={css.text}>
              <strong>Overview:</strong>
              {movie.overview}
            </li>
            <li className={css.text}>
              <strong>Genres:</strong>
              {movie.genres && movie.genres.map(genre => genre.name).join(', ')}
            </li>
          </ul>
        </div>
      </div>
      <ul className={css.list}>
        <p className={css.titleAd}>Additional information</p>
        <li className={css.link}>
          <Link  to={`/movies/${movieId}/cast`}>
            Cast
          </Link>
        </li>
        <li className={css.link}>
          <Link  to={`/movies/${movieId}/reviews`}>
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;

