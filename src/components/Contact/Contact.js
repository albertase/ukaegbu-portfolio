import { useRef, useState } from "react";

import Card from "../ui/Card";
import classes from "./Contact.module.css";
import { useForm, ValidationError } from "@formspree/react";

function Contact(props) {
  const [state, handleSubmit] = useForm("xvoyzbrg");
  if (state.succeeded) {
    return <p style={{color: 'green', textAlign: 'center', fontSize: '20px'}}>Thanks for messaging me!</p>;
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={handleSubmit} id="contact">
        <div className={classes.control}>
          <label htmlFor="title">Full Name</label>
          <input type="text" name="fullName" required id="title" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Your Message</label>
          <textarea
            id="description"
            name="message"
            required
            rows="5"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </Card>
  );
}

export default Contact;
