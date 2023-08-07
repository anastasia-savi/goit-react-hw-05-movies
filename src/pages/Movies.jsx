import { useState, useEffect } from 'react';
import * as SearchingMovie from 'service/searchingMovie';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { Input } from '@mui/material';
import Button from '@mui/material/Button';
import css from '../pages/Movies.module.css';
import img from '../img/default.jpg';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const ariaLabel = { 'aria-label': 'description' };

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [movie, setMovie] = useState([]);
  const location = useLocation();

  const handlerOnSubmit = event => {
    event.preventDefault();
    const inputValue = event.target.elements.searchInput.value;
    if (inputValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: inputValue });
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function apiFindingMovie() {
      try {
        const {
          data: { results },
        } = await SearchingMovie.getMovie(query);
        setMovie(results);
      } catch (error) {
        console.log('Error');
      }
    }

    apiFindingMovie();
  }, [query]);

  return (
    <div>
      <form onSubmit={handlerOnSubmit} className={css.form}>
        <Input type="text" name="searchInput" inputProps={ariaLabel} />
        <Button type="submit" variant="text">
          Search
        </Button>
      </form>
      <ul>
        {movie.map(({ id, title, name, backdrop_path }) => {
          return (
              <ListItem
              className={css.item}
              key={id}
              component="div"
              disablePadding
            >
              <ListItemAvatar>
                <Avatar
                  alt={`${title || name}`}
                  src={
                    backdrop_path
                      ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
                      : img
                  }
                  width={100}
                />
              </ListItemAvatar>
              <ListItemButton>
                 <Link to={`/movies/${id}`} state={{ from: location }}>
                {title || name}
              </Link>
              </ListItemButton>
            </ListItem>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
