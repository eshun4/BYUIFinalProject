/* eslint-disable react/jsx-no-target-blank */

import { Link } from "react-router-dom";

const title = "About ShopRes";
const desc = "ShopRes is the number one world-class ecommerce platform. Thousands of customers are shopping with us every day, enjoying a seamless and satisfying shopping experience.";
const ItemTitle = "Categories";
const quickTitle = "Quick Links";
const tweetTitle = "Recent Tweets";


const addressList = [
    {
        iconName: 'icofont-google-map',
        text: 'Los Angeles, USA.',
    },
    {
        iconName: 'icofont-phone',
        text: '+1 234 567 890',
    },
    {
        iconName: 'icofont-envelope',
        text: 'info@shopres.com',
    },
];

const socialList = [
    {
        iconName: 'icofont-facebook',
        siteLink: '#',
        className: 'facebook',
    },
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
        className: 'twitter',
    },
    {
        iconName: 'icofont-linkedin',
        siteLink: '#',
        className: 'linkedin',
    },
    {
        iconName: 'icofont-instagram',
        siteLink: '#',
        className: 'instagram',
    },
    {
        iconName: 'icofont-pinterest',
        siteLink: '#',
        className: 'pinterest',
    },
];


const ItemList = [
    {
        text: 'All Products',
        link: '/shop',
    },
    {
        text: 'Shop',
        link: '/shop',
    },
    {
        text: 'Blog',
        link: '/blog',
    },
    {
        text: 'About',
        link: '/about',
    },
    {
        text: 'Policy',
        link: '#',
    },
    {
        text: 'FAQs',
        link: '/about',
    }
]

const quickList = [
    {
        text: 'Summer Sessions',
        link: '#',
    },
    {
        text: 'Events',
        link: '#',
    },
    {
        text: 'Gallery',
        link: '#',
    },
    {
        text: 'Forums',
        link: '#',
    },
    {
        text: 'Privacy Policy',
        link: '#',
    },
    {
        text: 'Terms of Use',
        link: '#',
    },
]

const tweetList = [
    {
        iconName: 'icofont-twitter',
        desc: <p>Kofi Junior Eshun <a href="#">@ShopRes Greetings! #ShopResDeals</a> Discover our latest offers, up to 50% off on selected items!</p>,
    },
    {
        iconName: 'icofont-twitter',
        desc: <p>Kofi Junior Eshun <a href="#">@ShopRes Hey! #ShopResSpecial</a> Explore our products with a 50% discount! Don't miss out!</p>,
    },
];



const footerbottomList = [
    {
        text: 'Faculty',
        link: '#',
    },
    {
        text: 'Staff',
        link: '#',
    },
    {
        text: 'Students',
        link: '#',
    },
    {
        text: 'Alumni',
        link: '#',
    },
]

const Footer = () => {
  return (
    <footer className="style-2">
    <div className="footer-top dark-view padding-tb">
        <div className="container">
            <div className="row g-4 row-cols-xl-4 row-cols-sm-2 row-cols-1 justify-content-center">
                <div className="col">
                    <div className="footer-item our-address">
                        <div className="footer-inner">
                            <div className="footer-content">
                                <div className="title">
                                    <h4>{title}</h4>
                                </div>
                                <div className="content">
                                    <p>{desc}</p>
                                    <ul className="lab-ul office-address">
                                        {addressList.map((val, i) => (
                                            <li key={i}><i className={val.iconName}></i>{val.text}</li>
                                        ))}
                                    </ul>
                                    <ul className="lab-ul social-icons">
                                        {socialList.map((val, i) => (
                                            <li key={i}>
                                                <a href={val.siteLink} className={val.className}><i className={val.iconName}></i></a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="footer-item">
                        <div className="footer-inner">
                            <div className="footer-content">
                                <div className="title">
                                    <h4>{ItemTitle}</h4>
                                </div>
                                <div className="content">
                                    <ul className="lab-ul">
                                        {ItemList.map((val, i) => (
                                            <li key={i}><a href={val.link}>{val.text}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="footer-item">
                        <div className="footer-inner">
                            <div className="footer-content">
                                <div className="title">
                                    <h4>{quickTitle}</h4>
                                </div>
                                <div className="content">
                                    <ul className="lab-ul">
                                        {quickList.map((val, i) => (
                                            <li key={i}><a href={val.link}>{val.text}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="footer-item twitter-post">
                        <div className="footer-inner">
                            <div className="footer-content">
                                <div className="title">
                                    <h4>{tweetTitle}</h4>
                                </div>
                                <div className="content">
                                    <ul className="lab-ul">
                                        {tweetList.map((val, i) => (
                                            <li key={i}>
                                                <i className={val.iconName}></i>
                                                {val.desc}
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
    </div>
    <div className="footer-bottom">
        <div className="container">
            <div className="section-wrapper">
                <p>&copy; 2024 <Link to="/">shopRes</Link> Designed by <a href="#" target="_blank">Kofi Junior Eshun</a> </p>
                <div className="footer-bottom-list">
                    {footerbottomList.map((val, i) => (
                        <a href={val.link} key={i}>{val.text}</a>
                    ))}
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer