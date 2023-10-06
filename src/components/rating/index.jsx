import './style.scss';
import FullStar from './fullStar.svg';
import EmptyStar from './emptyStar.svg';

export default function Rating({ rating }) {
  return (
    <div className="rating">
      {[...Array(5)].map((_, i) => {
        return (
          <div key={i}>
            {5 - i + 1 > rating ? (
              <img
                src={FullStar}
                alt=""
                className="rating__star"
              />
            ) : (
              <img
                src={EmptyStar}
                alt=""
                className="rating__star"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
