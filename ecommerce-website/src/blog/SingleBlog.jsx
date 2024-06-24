/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import Tags from "../shop/Tags";
import PageHeader from "../components/PageHeader";
import { useParams } from "react-router-dom";
import blogList from "../utilis/blogdata.js";
import MostPopularPost from "../shop/MostPopularPost";

const socialList = [
  {
    link: "#",
    iconName: "icofont-facebook",
    className: "facebook",
  },
  {
    link: "#",
    iconName: "icofont-twitter",
    className: "twitter",
  },
  {
    link: "#",
    iconName: "icofont-linkedin",
    className: "linkedin",
  },
  {
    link: "#",
    iconName: "icofont-instagram",
    className: "instagram",
  },
  {
    link: "#",
    iconName: "icofont-pinterest",
    className: "pinterest",
  },
];

const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();
  const result = blog.filter((p) => p.id === Number(id));

  return (
    <div>
      <PageHeader title={"Single Blog Page"} curPage={"Blog / Blog Details"} />
      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt={item.imgAlt}
                                  className="w-100"
                                />
                              </div>
                              <div className="post-content">
                                <h2>{item.title}</h2>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    <li>
                                      <a href="#">
                                        <i className="icofont-calendar"></i>
                                        {item.metaList[1].text}
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="icofont-ui-user"></i>
                                        {item.metaList[0].text}
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="icofont-speech-comments"></i>
                                        {item.commentCount} Comments
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <p>
                                  In today's digital age, businesses need to
                                  adapt to new technologies to stay competitive.
                                  This blog explores the latest trends and
                                  strategies in ecommerce, helping you to stay
                                  ahead in the market. From optimizing your
                                  online store to enhancing customer experience,
                                  we cover it all.
                                </p>

                                <blockquote>
                                  <p>
                                    "Adopting a customer-centric approach is
                                    crucial for ecommerce success. It not only
                                    enhances customer satisfaction but also
                                    boosts brand loyalty and sales."
                                  </p>
                                  <cite>
                                    <a href="#">- Melissa Hunter</a>
                                  </cite>
                                </blockquote>

                                <p>
                                  Ensuring a seamless user experience across
                                  your ecommerce platform can significantly
                                  impact your conversion rates. Focus on
                                  intuitive navigation, fast loading times, and
                                  responsive design to keep your customers
                                  engaged and coming back for more.
                                </p>

                                <img
                                  src="/src/assets/images/blog/single/01.jpg"
                                  alt="Blog Post"
                                />

                                <p>
                                  Leveraging data analytics allows you to make
                                  informed decisions about your product offerings
                                  and marketing strategies. By understanding
                                  customer behavior and preferences, you can
                                  tailor your approach to meet their needs more
                                  effectively.
                                </p>

                                <div className="video-thumb">
                                  <img
                                    src="/src/assets/images/blog/single/02.jpg"
                                    alt="Video"
                                  />
                                  <a
                                    href="https://youtu.be/2qWo6W5Wn8Q"
                                    className="video-button popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>

                                <p>
                                  Stay updated with the latest trends and best
                                  practices in the ecommerce industry by
                                  following our blog. Whether you are a seasoned
                                  business owner or just starting, our insights
                                  and tips can help you achieve your business
                                  goals.
                                </p>

                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">Ecommerce</a>
                                    </li>
                                    <li>
                                      <a href="#">Marketing</a>
                                    </li>
                                    <li>
                                      <a href="#">Business</a>
                                    </li>
                                  </ul>
                                  <ul className="lab-ul social-icons">
                                    {socialList.map((val, i) => (
                                      <li key={i}>
                                        <a
                                          href={val.link}
                                          className={val.className}
                                        >
                                          <i className={val.iconName}></i>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="navigations-part">
                        <div className="left">
                          <a href="#" className="prev">
                            <i className="icofont-double-left"></i>Previous
                            Article
                          </a>
                          <a href="#" className="title">
                            Elevate Your Business with Advanced Marketing
                            Strategies
                          </a>
                        </div>
                        <div className="right">
                          <a href="#" className="prev">
                            Next Article<i className="icofont-double-right"></i>
                          </a>
                          <a href="#" className="title">
                            The Future of Ecommerce: Trends to Watch
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Tags />
                <MostPopularPost />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
