import GeneralBG from "../component/generalBG/GeneralBG";
import GeneralHeading from "../component/generalHeading/GeneralHeading";
import SocialList from "../component/socialList/SocialList";
import "./contact.scss";
export default function ContactPage() {
  return (
    <main id="page_contact">
      <GeneralBG />
      <section id="top-section">
        <GeneralHeading
          sub="REACH OUT"
          h="CONTACT US"
          d="(Placeholeder C1)VFleet is a Vtuber Company that prioritizes the needs of  talents as well as works towards spreading awareness, engagement, and  connection with Naval Museums around the world."
        />
        <a href=""></a>
        <SocialList />
      </section>

      <form action="#" id="contact-section">
        <div className="panel">
          <div className="confine">
            <div className="form-group">
              <div className="fi">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Your Name" />
              </div>
              <div className="fi">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@gmail.com"
                />
              </div>
            </div>

            <div className="fi">
              <label htmlFor="message">MESSAGES:</label>

              <textarea
                name="message"
                id="message"
                placeholder="Write your message here!"
              ></textarea>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-special">
          SUBMIT
        </button>
      </form>
    </main>
  );
}
