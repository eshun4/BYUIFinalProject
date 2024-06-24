import React from 'react';
import PageHeader from '../components/PageHeader';

const subTitle = "About Our Brand";
const title = "Quality Services and Exceptional Experiences";
const desc = "We are committed to providing seamless access to multifunctional solutions. Our transparent processes encourage efficient functionalities, prioritizing user-centric experiences over extensible architectures. We communicate through leveraged services across platforms.";

const year = "30+";
const experience = "Years of Experience";

const aboutList = [
    {
        imgUrl: '/src/assets/images/about/icon/01.jpg',
        imgAlt: 'Skilled Instructors Icon',
        title: 'Skilled Instructors',
        desc: 'Our expert instructors bring years of industry experience, ensuring comprehensive learning outcomes.',
    },
    {
        imgUrl: '/src/assets/images/about/icon/02.jpg',
        imgAlt: 'Certificate Icon',
        title: 'Certification Programs',
        desc: 'Earn accredited certificates that validate your skills and enhance your professional profile.',
    },
    {
        imgUrl: '/src/assets/images/about/icon/03.jpg',
        imgAlt: 'Online Classes Icon',
        title: 'Interactive Online Classes',
        desc: 'Engage in dynamic virtual classrooms designed to deliver personalized learning experiences.',
    },
];

const About = () => {
    return (
        <div>
            <PageHeader title={subTitle} curPage={'About'} />
            <div className="about-section style-3 padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-center">
                        <div className="col">
                            <div className="about-left">
                                <div className="about-thumb">
                                    <img src="/src/assets/images/about/01.jpg" alt="About Us Image" />
                                </div>
                                <div className="abs-thumb">
                                    <img src="/src/assets/images/about/02.jpg" alt="About Us Image" />
                                </div>
                                <div className="about-left-content">
                                    <h3>{year}</h3>
                                    <p>{experience}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="about-right">
                                <div className="section-header">
                                    <span className="subtitle">{subTitle}</span>
                                    <h2 className="title">{title}</h2>
                                    <p>{desc}</p>
                                </div>
                                <div className="section-wrapper">
                                    <ul className="lab-ul">
                                        {aboutList.map((val, i) => (
                                            <li key={i}>
                                                <div className="sr-left">
                                                    <img src={val.imgUrl} alt={val.imgAlt} />
                                                </div>
                                                <div className="sr-right">
                                                    <h5>{val.title}</h5>
                                                    <p>{val.desc}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
