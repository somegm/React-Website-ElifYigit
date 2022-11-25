import React, {useRef} from "react";
import "../Contact/style.css";
import app from "../Contact/app.js";
import email from "../../images/contact-email.png";
import location from "../../images/location.png";
import emailjs from 'emailjs-com';
import { useTranslation } from "react-i18next";
const Contact = () => {
  const {t} = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q3gjzaw', 'template_zwlhqpi', form.current, 'xQtZNELwkOEu2my1A')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }
  
  
  return (
    <>
      <html lang="en" id="contact">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Contact Form</title>
          <link rel="stylesheet" href="style.css" />
          <script
            src="https://kit.fontawesome.com/64d58efce2.js"
            crossorigin="anonymous"
          ></script>
        </head>
        <body>
          <div class="container">
            <span class="big-circle"></span>
            <div class="form">
              <div class="contact-info">
                <h3 class="title">{t('Contact1')}</h3>
                <p class="text"></p>

                <div class="info">
                  <div class="information">
                    <img src={location} class="icon" alt="" />
                    <p>Mimar Sinan Mahallesi Alsancak/İZMİR</p>
                  </div>
                  <div class="information">
                    <img src={email} class="icon" alt="" />
                    <p>elifyigitofficial@gmail.com</p>
                  </div>
                </div>

                
              </div>
              <div class="contact-form">
               

                <form action="index.html" autocomplete="off" ref={form} onSubmit={sendEmail}>
                  <div class="input-container">
                    <input type="text" name="name" placeholder={t('Contact2')} class="input" />
                  
                    <span>Username</span>
                  </div>
                  <div class="input-container">
                    <input type="email" name="email" placeholder={t('Contact3')} class="input" />
                  
                    <span>Email</span>
                  </div>
                  <div class="input-container">
                    <input type="tel" name="phone" placeholder={t('Contact4')} class="input" />
                    
                    <span>Phone</span>
                  </div>
                  <div class="input-container textarea">
                    <textarea name="message" placeholder={t('Contact5')} class="input"></textarea>
                    
                    <span>Message</span>
                  </div>
                  <input type="submit" value={t('Contact6')} class="btn" onSubmit={sendEmail} />
                </form>
              </div>
            </div>
          </div>

          <script src={app}></script>
        </body>
      </html>
    </>
  );
};

export default Contact;
