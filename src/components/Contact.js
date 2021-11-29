import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { name, phone, email, subject, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log("Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
  };
  return (
    <div id="contact" className="contacts">
      <div className="text-center">
        <h1>contact me</h1>
        <p>
          Please fill out the form and describe your inquire and I will contact
          you as soon as posible
        </p>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <input
                id="name"
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                defaultValue={name}
                onBlur={handleChange}
              />
              <input
                id="phone"
                type="text"
                className="form-control"
                placeholder="Phone Number"
                name="phone"
                defaultValue={phone}
                onBlur={handleChange}
              />
              <input
                id="email"
                type="text"
                className="form-control"
                placeholder="Email"
                name="email"
                defaultValue={email}
                onBlur={handleChange}
              />
              <input
                id="subject"
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
                defaultValue={subject}
                onBlur={handleChange}
              />
            </div>
            <div className="col-md-6 col-xs-12">
              <textarea
                type="text"
                className="form-control"
                placeholder="Message"
                name="message"
                defaultValue={message}
                onBlur={handleChange}
              ></textarea>
              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
              <button className="btn-main-offer contact-btn" type="submit">
                SUBMIT
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
