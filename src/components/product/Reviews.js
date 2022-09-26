import React from "react";
import { Avatar, Check, Point, ReviewReply } from "./StyledComponents";
import StarRatings from 'react-star-ratings';

function Reviews() {
  return (
    <div className="box">
      <div className="p-2 content">
        <h5 className="mb-2">Rating &amp; reviews</h5>
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
        <hr className="my-3" />
        <div className="rating-user">
          <article className="media">
            <figure className="media-left m-0 mr-3">
              <Avatar className="is-link button" style={{ width: "2.5rem" }}>
                M
                <Check>
                  <span className="icon">
                    <i name="check" className="fa fa-check"></i>
                  </span>
                </Check>
              </Avatar>
            </figure>
            <div className="media-content">
              <div className="content mb-0">
                <p>
                  <strong>
                    <small>Maliha raza</small>
                  </strong>
                  <br />
                  <small>
                  <StarRatings
                    rating={3}
                    starRatedColor="#3273dc"
                    numberOfStars={5}
                    name="rating"
                    starDimension="16px"
                    starSpacing="2px"
                  />
                    <i>Jul 15, 2022</i>
                  </small>
                </p>
              </div>
            </div>
          </article>
          <div className="mt-1">
            <p>Ok</p>
          </div>
          <ReviewReply>
            <Point></Point>
            <article className="media">
              <div className="media-content">
                <div className="content mb-0">
                  <p>
                    <strong>
                      <small>Le Frenchy</small>
                    </strong>{" "}
                    <small>
                      <i>Aug 17, 2022</i>
                    </small>
                  </p>
                </div>
              </div>
            </article>
            <div className="mt-1">
              <p>ok</p>
            </div>
          </ReviewReply>
          <hr className="my-4" />
        </div>
      </div>
    </div>
  );
}

export default Reviews;
