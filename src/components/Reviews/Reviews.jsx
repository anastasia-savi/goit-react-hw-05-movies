import { useEffect, useState } from 'react';
import * as ReviewsInf from 'service/reviews';
import { useParams } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import css from './Reviews.module.css'

const Reviews = () => {
  const [review, setReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function apiReview() {
      try {
        const {
          data: { results },
        } = await ReviewsInf.getReview(movieId);
        setReview(results);
      } catch (error) {
        console.log('Error');
      }
    }

    apiReview();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <ul className={css.list}>
        {review.length > 0 ? (
          review.map(({ id, author, content }) => (
            <ListItem
              key={id}
              component="div"
              disablePadding
            >
              <div className={css.text}>
                <p><strong>{author}</strong></p>
                <p className={css.content}>{content}</p>
              </div>
            </ListItem>
          ))
        ) : (
          <p>Sorry, there are no reviews available.</p>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
