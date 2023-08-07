import { useEffect, useState } from 'react';
import * as Credit from 'service/credits';
import { useParams } from 'react-router-dom';
import img from 'img/default.jpg';
import ListItem from '@mui/material/ListItem';
import css from '../Cast/Cast.module.css'

const Cast = () => {
  const [credit, setCredit] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function apiCredit() {
      try {
        const {
          data: { cast },
        } = await Credit.getCredit(movieId);
        setCredit(cast);
      } catch (error) {
        console.log('Error');
      }
    }

    apiCredit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <ul className={css.list}>
        {credit.length > 0 ? (
          credit.map(({ id, profile_path, name, character }) => {
            return (
              <ListItem className={css.item} key={id} component="div" disablePadding>
                <img
                  className={css.img}
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : img
                  }
                  alt={name}
                  width={100}
                />
                {name} as {character ? character : 'no information'}
              </ListItem>
            );
          })
        ) : (
          <p>Sorry, there are no reviews available.</p>
        )}
      </ul>
    </div>
  );
};

export default Cast;
