const subTitle = "Seize the Opportunity";
const title = (
  <h2 className="title">
    Join Our Exclusive Day-Long Free Workshop for <b>Advanced</b>{" "}
    <span className="yellow-color">Mastery</span> in <b>Sales</b>
  </h2>
);
const desc = "Limited Time Offer! Don't Miss Out";
const regTitle = "Sign Up Today";
const btnText = "Sign Up Now";


const Register = () => {
  return (
    <section className="register-section padding-tb pb-0">
      <div className="container">
        <div className="row g-4 row-cols-lg-2 row-cols-1 align-items-center">
          <div className="col">
            <div className="section-header">
              <span className="subtitle">{subTitle}</span>
              {title}
              <p>{desc}</p>
            </div>
          </div>
          <div className="col">
            <div className="section-wrapper">
              <h4>{regTitle}</h4>
              <form className="register-form">
                <input
                  type="text"
                  name="name"
                  placeholder="Username"
                  className="reg-input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="reg-input"
                />
                <input
                  type="text"
                  name="number"
                  placeholder="Phone"
                  className="reg-input"
                />
                <button type="submit" className="lab-btn">
                  <span>{btnText}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
