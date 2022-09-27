import React from 'react'
import { Avatar, Check, Point, ReviewReply } from "../StyledComponents";
import StarRatings from 'react-star-ratings';

function Review({review}) {
    const { name, date, rating, review: reviewText, reply, replyDate, check } = review
  return (
    <div className="rating-user">
    <article className="media">
      <figure className="media-left m-0 mr-3">
        <Avatar className="is-link button" style={{ width: "2.5rem" }}>
          M
          {check && <Check>
            <span className="icon">
              <i name="check" className="fa fa-check"></i>
            </span>
          </Check>}
        </Avatar>
      </figure>
      <div className="media-content">
        <div className="content mb-0">
          <div>
            <strong>
              <small>{name}</small>
            </strong>
            <br />
            <small>
            <StarRatings
              rating={rating}
              starRatedColor="#3273dc"
              numberOfStars={5}
              name="rating"
              starDimension="16px"
              starSpacing="2px"
            />
              <i>{date}</i>
            </small>
          </div>
        </div>
      </div>
    </article>
    <div className="mt-1">
      <p>{reviewText}</p>
    </div>
    {reply && <ReviewReply>
      <Point></Point>
      <article className="media">
        <div className="media-content">
          <div className="content mb-0">
            <p>
              <strong>
                <small>Le Frenchy</small>
              </strong>{" "}
              <small>
                <i>{replyDate}</i>
              </small>
            </p>
          </div>
        </div>
      </article>
      <div className="mt-1">
        <p>{reply}</p>
      </div>
    </ReviewReply>}
    <hr className="my-4" />
  </div>
  )
}

export default Review