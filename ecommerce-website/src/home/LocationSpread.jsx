
import { Link } from "react-router-dom";

const title = <h2 className="title">Over <span className="yellow-color">60,000</span> Satisfied Customers</h2>;
const desc = "Shop effortlessly on any device with our app. Enjoy seamless shopping anytime, anywhere. Download, install, and start your shopping journey now.";

const clientsList = [
    {
        imgUrl: '/images/clients/avater.jpg',
        imgAlt: 'Customer avatar',
        text: 'Join Us Today',
    },
    {
        imgUrl: '/images/clients/avater.jpg',
        imgAlt: 'Customer avatar',
        text: 'Join Us Today',
    },
    {
        imgUrl: '/images/clients/avater.jpg',
        imgAlt: 'Customer avatar',
        text: 'Join Us Today',
    },
    {
        imgUrl: '/images/clients/avater.jpg',
        imgAlt: 'Customer avatar',
        text: 'Join Us Today',
    },
    {
        imgUrl: '/images/clients/avater.jpg',
        imgAlt: 'Customer avatar',
        text: 'Join Us Today',
    },
    {
        imgUrl: '/images/clients/avater.jpg',
        imgAlt: 'Customer avatar',
        text: 'Join Us Today',
    },
    {
        imgUrl: '/images/clients/avater.jpg',
        imgAlt: 'Customer avatar',
        text: 'Join Us Today',
    },
];


const LocationSpread = () => {
  return (
    <div className="clients-section style-2 padding-tb">
    <div className="container">
        <div className="section-header text-center">
            {title}
            <p>{desc}</p>
        </div>
        <div className="section-wrapper">
            <div className="clients">
                {clientsList.map((val, i) => (
                    <div className="client-list" key={i}>
                        <Link to="/signup" className="client-content"><span>{val.text}</span></Link>
                        <div className="client-thumb">
                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
</div>
  )
}

export default LocationSpread;