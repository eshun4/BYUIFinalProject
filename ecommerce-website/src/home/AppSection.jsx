import { Link } from "react-router-dom";

const btnText = "Sign Up for Free";
const title = "Learn Anytime, Anywhere";
const desc = "Take courses on any device with our app and learn whatever you want, whenever you want. Just download, install, and start learning today!";


const AppSection = () => {
  return (
    <div className="app-section padding-tb">
    <div className="container">
        <div className="section-header text-center">
            <Link to="/" className="lab-btn mb-4"><span>{btnText}</span></Link>
            <h2 className="title">{title}</h2>
            <p>{desc}</p>
        </div>
        <div className="section-wrapper">
            <ul className="lab-ul">
                <li><a href="#"><img src="/images/app/01.jpg" alt="education" /></a></li>
                <li><a href="#"><img src="/images/app/02.jpg" alt="education" /></a></li>
            </ul>
        </div>
    </div>
</div>
  )
}

export default AppSection;