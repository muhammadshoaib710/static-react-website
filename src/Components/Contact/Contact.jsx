import React from "react";
import "./Contact.css";
import message_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "92f27f32-6d9c-4d0e-ba4c-9f911ad72f41");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Get in Touch <img src={message_icon} alt="" />
        </h3>
        <p>Feel free to contact us for any query</p>
        <ul>
          <li>
            {" "}
            <img src={phone_icon} alt="" />
            Phone: 123-456-7890
          </li>
          <li>
            {" "}
            <img src={mail_icon} alt="" />
            Email: test@gmail.com
          </li>
          <li>
            {" "}
            <img src={location_icon} alt="" />
            Address: 123, Lorem Ipsum, USA
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name="name" required />
          <label>Your Email</label>
          <input type="email" name="email" required />
          <label>Your Message</label>
          <textarea name="message" required></textarea>
          <button type="submit" className="btn dark-btn">
            Send Message <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
