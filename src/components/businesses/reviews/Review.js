import React from 'react'
import styled from 'styled-components';
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

const Check = styled.div`
width: 20px;
height: 20px;
border-radius: 100%;
border: 2px solid rgb(255, 255, 255);
position: absolute;
right: 0px;
bottom: 0px;
background: green;
color: rgb(255, 255, 255);
font-size: 10px;
margin-bottom: -3px;
margin-right: -7px;
`

const Avatar = styled.button`
width: 30px;
height: 30px;
border-radius: 100%;
`

const ReviewReply = styled.div`
padding: 15px;
background: rgb(229, 229, 229);
position: relative;
margin-top: 15px;
`
const Point = styled.div`
width: 0px;
height: 0px;
border-width: 0px 10px 20px;
border-right-style: solid;
border-left-style: solid;
border-right-color: transparent;
border-left-color: transparent;
border-image: initial;
border-top-style: initial;
border-top-color: initial;
border-bottom-style: solid;
border-bottom-color: rgb(229, 229, 229);
position: absolute;
margin-top: -13px;
margin-left: 10px;
top: 0px;
left: 0px;
z-index: 1;
`

export default Review