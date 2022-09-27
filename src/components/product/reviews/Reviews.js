import React from "react";
import Ratings from "./Ratings";
import Review from "./Review";

function Reviews() {
  const reviews = [
    {
      name: "Maliha raza",
      date: "Jul 15, 2022",
      rating: 3,
      review: "ok",
      reply: "ok",
      replyDate: "Aug 17, 2022",
      check: true
    },
    {
      name: "SafelyQ Developer",
      date: "Feb 01, 2022",
      rating: 2,
      review: "Not good for friends gathering.",
      reply: "Fair enough😀",
      replyDate: "Jun 16, 2022",
      check: false
    },
    {
      name: "Zubair Ashraf",
      date: "Feb 01, 2022",
      rating: 3,
      review: "Its Ok. But, I believe it requires improvements.",
      reply: "Alright Alright",
      replyDate: "Jun 17, 2022",
      check: true
    },
    {
      name: "sohaib",
      date: "Feb 01, 2022",
      rating: 4,
      review: "Its a good experience. Good for family events.",
      reply: "Thanks for the feedback😀",
      replyDate: "Jun 17, 2022",
      check: false
    },
    {
      name: "Taimoor Hassan",
      date: "Feb 01, 2022",
      rating: 4,
      review: "Its really a an awesome palace to visit.",
      reply: "",
      replyDate: "Aug 17, 2022",
      check: true
    },
    {
      name: "Faisal Shehzad",
      date: "Jan 04, 2022",
      rating: 5,
      review: "Its a great place to enjoy.",
      reply: "Yes",
      replyDate: "Jan 22, 2022",
      check: true
    }
  ]
  return (
    <div className="box">
      <div className="p-2 content">
        <h5 className="mb-2">Rating &amp; reviews</h5>
        <Ratings />
        <hr className="my-3" />
        {reviews.map((review,index) => (
          <Review review={review} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Reviews;
