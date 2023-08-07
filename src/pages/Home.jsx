import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as TrendingMovies from 'service/trending-movies';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import css from '../pages/Home.module.css';
import img from '../img/default.jpg'

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function apiTrend() {
      try {
        const {
          data: { results },
        } = await TrendingMovies.getTrendingMovies();
        setTrendingMovies(results);
      } catch (error) {
        console.log('Error');
      }
    }

    apiTrend();
  }, []);

  return (
    <>
      <p className={css.header}>Trending Movies</p>
      <ul className={css.list}>
        {trendingMovies.map(({ id, title, name, backdrop_path }) => {
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
    </>
  );
};

export default Home;
