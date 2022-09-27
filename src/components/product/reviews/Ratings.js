import React from 'react'
import StarRatings from 'react-star-ratings';

function Ratings() {
  return (
    <div>
        <div
          className="is-flex is-justify-content-space-between"
          style={{ color: "rgb(26, 17, 186)" }}
        >
          <StarRatings
            rating={3.6}
            starRatedColor="#3273dc"
            numberOfStars={5}
            name="rating"
            starDimension="16px"
            starSpacing="2px"
          />
          <span>6</span>
        </div>
        <br />
        <div
          className="is-flex is-justify-content-space-between"
          style={{ color: "rgb(26, 17, 186)" }}
        >
          <StarRatings
            rating={5}
            starRatedColor="#3273dc"
            numberOfStars={5}
            name="rating"
            starDimension="16px"
            starSpacing="2px"
          />
          <span>1</span>
        </div>
        <div
          className="is-flex is-justify-content-space-between"
          style={{ color: "rgb(26, 17, 186)" }}
        >
          <StarRatings
            rating={4}
            starRatedColor="#3273dc"
            numberOfStars={5}
            name="rating"
            starDimension="16px"
            starSpacing="2px"
          />
          <span>2</span>
        </div>
        <div
          className="is-flex is-justify-content-space-between"
          style={{ color: "rgb(26, 17, 186)" }}
        >
          <StarRatings
            rating={3}
            starRatedColor="#3273dc"
            numberOfStars={5}
            name="rating"
            starDimension="16px"
            starSpacing="2px"
          />
          <span>2</span>
        </div>
        <div
          className="is-flex is-justify-content-space-between"
          style={{ color: "rgb(26, 17, 186)" }}
        >
          <StarRatings
            rating={2}
            starRatedColor="#3273dc"
            numberOfStars={5}
            name="rating"
            starDimension="16px"
            starSpacing="2px"
          />
          <span>1</span>
        </div>
        <div
          className="is-flex is-justify-content-space-between"
          style={{ color: "rgb(26, 17, 186)" }}
        >
          <StarRatings
            rating={1}
            starRatedColor="#3273dc"
            numberOfStars={5}
            name="rating"
            starDimension="16px"
            starSpacing="2px"
          />
          <span>0</span>
        </div>
    </div>
  )
}

export default Ratings