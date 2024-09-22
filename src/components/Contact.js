import { useRef, useState } from "react";

import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 className="title" variants={variants}>Let’s work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>itamim12202@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Dhaka, Bangladesh</span>
        </motion.div>
        {/* <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+1 234 5678</span>
        </motion.div> */}
      </motion.div>
      <div className="formContainer">
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          action="https://formsubmit.co/itamim12202@gmail.com"
          method="POST"
          // transition={{ delay: 4, duration: 3 }}
        >
          <input type="text" required placeholder="Your Name" name="name" />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
          ></input>
          <textarea rows={8} placeholder="Message" name="message" />
          <input
            type="hidden"
            name="_next"
            value="https://imtiaz-tamim.vercel.app/thanks"
          ></input>
          <button type="submit">Send</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
