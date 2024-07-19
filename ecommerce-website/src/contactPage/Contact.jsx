import React from "react";
import GoogleMap from "../components/GoogleMap";
import PageHeader from "../components/PageHeader";

const subTitle = "Get in touch with us";
const title = "We're Always Eager To Hear From You!";
const conSubTitle = "Contact Us";
const conTitle =
  "Fill out the form below so we can get to know you and your needs better.";
const btnText = "Send Message";

const contactList = [
  {
    imgUrl: "/images/icon/01.png",
    imgAlt: "contact icon",
    title: "Office Address",
    desc: "Los Angeles, USA.",
  },
  {
    imgUrl: "/images/icon/02.png",
    imgAlt: "contact icon",
    title: "Phone number",
    desc: "+1 234 567 890",
  },
  {
    imgUrl: "/images/icon/03.png",
    imgAlt: "contact icon",
    title: "Send email",
    desc: "info@shopres.com",
  },
  {
    imgUrl: "/images/icon/04.png",
    imgAlt: "contact icon",
    title: "Our website",
    desc: "www.shopres.com",
  },
];

const Contact = () => {
  return (
    <div>
      <PageHeader title={subTitle} curPage={conSubTitle} />
      <div className="map-address-section padding-tb section-bg">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">{subTitle}</span>
            <h2 className="title">{title}</h2>
          </div>
          <div className="section-wrapper">
            <div className="row flex-row-reverse">
              <div className="col-xl-4 col-lg-5 col-12">
                <div className="contact-wrapper">
                  {contactList.map((val, i) => (
                    <div className="contact-item" key={i}>
                      <div className="contact-thumb">
                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                      </div>
                      <div className="contact-content">
                        <h6 className="title">{val.title}</h6>
                        <p>{val.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-xl-8 col-lg-7 col-12">
                <GoogleMap />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-section padding-tb">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">{conSubTitle}</span>
            <h2 className="title">{conTitle}</h2>
          </div>
          <div className="section-wrapper">
            <form className="contact-form">
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name *" />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email *" />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="number"
                  placeholder="Mobile Number *"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Your Subject *"
                />
              </div>
              <div className="form-group w-100">
                <textarea
                  rows="8"
                  name="message"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="form-group w-100 text-center">
                <button className="lab-btn" type="submit">
                  {btnText}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
