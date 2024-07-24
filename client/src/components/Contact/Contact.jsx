import React from "react";
import "./Contact.css";
import { MdCall,MdVideoCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="flexCenter innerWidth paddings c-container">
        {/*left-side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Feel free to contact us</span>
          <span className="secondaryText">
            We are always ready to help by providing the best services to you.We
            beleive a <br />
            good place to live can make your life better.
          </span>
          <div className="flexColStart contactModes">
            {/*first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">022 123 456 78</span>
                  </div>
                </div>
                <div className="flexCenter button">
                    Call Now!
                </div>
              </div>
            {/*second mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">022 123 456 78</span>
                  </div>
                </div>
                <div className="flexCenter button">
                    Chat Now
                </div>
              </div>
              
            </div>
            {/*second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdVideoCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">022 123 456 78</span>
                  </div>
                </div>
                <div className="flexCenter button">
                    Video Call Now!
                </div>
              </div>
            {/*second mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">022 123 456 78</span>
                  </div>
                </div>
                <div className="flexCenter button">
                    Message Now
                </div>
              </div>
              
            </div>
          </div>
        </div>
        {/*right-side*/}
        <div className="flexEnd c-right">
          <div className="img-container">
            <img src="contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
