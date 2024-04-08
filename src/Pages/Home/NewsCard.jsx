import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const NewsCard = ({ news }) => {
  const { title, image_url, details, _id, rating } = news;

  //   console.log(title);
  return (
    <div className="card  bg-base-100 shadow-xl mb-16 p-4">
      <div></div>
      <h2 className="card-title">{title}</h2>
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="">
        {details.length > 200 ? (
          <p>
            {details.slice(0, 200)}{" "}
            <Link to={`/news/${_id}`} className="text-blue-600 font-bold">
              Read more .....
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>
      <div className="border-b my-6"></div>
      {/* rating */}
      <div>
        <div className="rating rating-md ">
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
          />
          <p className="ml-3">{rating.number}</p>
        </div>
      </div>
    </div>
  );
};

NewsCard.proptyped = {
  news: PropTypes.object.isRequired,
};
export default NewsCard;
