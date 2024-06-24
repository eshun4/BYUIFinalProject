import React, { useState } from 'react';
import Rating from '../components/Rating';

const reviewTitle = "Add a Review";
let reviewList = [
  {
    imgUrl: "/src/assets/images/instructor/01.jpg",
    imgAlt: "Client thumbnail",
    name: "Ganelon Boileau",
    date: "Posted on Jun 20, 2024 at 2:15 pm",
    desc: "I absolutely love this product! It has exceeded my expectations in every way. The quality is top-notch and the customer service was excellent.",
  },
  {
    imgUrl: "/src/assets/images/instructor/02.jpg",
    imgAlt: "Client thumbnail",
    name: "Morgana Cailot",
    date: "Posted on Jun 19, 2024 at 9:30 am",
    desc: "A fantastic experience from start to finish. The product arrived on time and was exactly as described. Highly recommended!",
  },
  {
    imgUrl: "/src/assets/images/instructor/03.jpg",
    imgAlt: "Client thumbnail",
    name: "Telford Bois",
    date: "Posted on Jun 18, 2024 at 1:45 pm",
    desc: "The quality of the product is outstanding. I've been using it for a few months now and it still works perfectly. Great value for money.",
  },
  {
    imgUrl: "/src/assets/images/instructor/04.jpg",
    imgAlt: "Client thumbnail",
    name: "Cher Daviau",
    date: "Posted on Jun 17, 2024 at 11:00 am",
    desc: "This product has made a significant difference in my daily routine. It's easy to use and very efficient. I would definitely buy from this store again.",
  },
];

const Review = () => {
  const [reviewShow, setReviewShow] = useState(true);
  return (
    <>
      <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
        <li onClick={() => setReviewShow(!reviewShow)} className="desc">
          Description
        </li>
        <li onClick={() => setReviewShow(!reviewShow)} className="rev">
          Reviews ({reviewList.length})
        </li>
      </ul>

      <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
        <div className="review-showing">
          <ul className="content lab-ul">
            {reviewList.map((review, i) => (
              <li key={i}>
                <div className="post-thumb">
                  <img src={review.imgUrl} alt={review.imgAlt} />
                </div>
                <div className="post-content">
                  <div className="entry-meta">
                    <div className="posted-on">
                      <a href="#">{review.name}</a>
                      <p>{review.date}</p>
                    </div>
                    <Rating />
                  </div>
                  <div className="entry-content">
                    <p>{review.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="client-review">
            <div className="review-form">
              <div className="review-title">
                <h5>{reviewTitle}</h5>
              </div>
              <form action="action" className="row">
                <div className="col-md-4 col-12">
                  <input type="text" name="name" placeholder="Full Name *" />
                </div>
                <div className="col-md-4 col-12">
                  <input type="email" name="email" placeholder="Your Email *" />
                </div>
                <div className="col-md-4 col-12">
                  <div className="rating">
                    <span className="rating-title">Your Rating: </span>
                    <Rating />
                  </div>
                </div>
                <div className="col-md-12 col-12">
                  <textarea
                    rows="8"
                    name="message"
                    placeholder="Type Your Message Here"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button className="default-button" type="submit">
                    <span>Submit Review</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="description">
          <p>
            Welcome to our store! Here, you'll find a wide range of high-quality products designed to meet your needs and preferences. Our commitment to excellence is reflected in the meticulous attention to detail and craftsmanship that goes into each product.
          </p>
          <div className="post-item">
            <div className="post-thumb">
              <img src="/src/assets/images/shop/01.jpg" alt="shop" />
            </div>
            <div className="post-content">
              <ul className="lab-ul">
                <li>Our products are made from the finest materials.</li>
                <li>We ensure durability and longevity with each item.</li>
                <li>Customer satisfaction is our top priority.</li>
                <li>Explore our extensive collection today.</li>
                <li>Enjoy unbeatable prices and great deals.</li>
                <li>Experience the best in quality and service.</li>
                <li>Shop with confidence knowing we stand behind our products.</li>
              </ul>
            </div>
          </div>
          <p>
            Thank you for choosing our store. We are dedicated to providing you with exceptional products and unmatched customer service. If you have any questions or need assistance, please don't hesitate to contact us. Happy shopping!
          </p>
        </div>
      </div>
    </>
  );
};

export default Review;
