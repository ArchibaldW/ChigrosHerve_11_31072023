import './style.scss';
import FullStar from './fullStar.svg';
import EmptyStar from './emptyStar.svg';

export default function Rating({ rating }) {
  return (
    <div className="rating">
      {[...Array(5)].map((_, i) => {
        return (
          <div>
            {5 - i + 1 > rating ? (
              <img
                src={FullStar}
                alt=""
              />
            ) : (
              <img
                src={EmptyStar}
                alt=""
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
