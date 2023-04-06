import React from 'react'
import './contact.css'
import {MdOutlineEmail} from "react-icons/md";
import {RiMessengerLine} from "react-icons/ri";
import {BsWhatsapp} from "react-icons/bs";
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import {useTranslation} from "react-i18next";

const Contact = () => {

    const { t } = useTranslation()

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        ).then((result) => {
            // console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()
    };

    return (
        <section id='contact'>
            <h5>{t('contact.message')}</h5>
            <h2>{t('contact.title')}</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>{t('contact.email')}</h4>
                        <h5>nsanv.dev@gmail.com</h5>
                        <a href='mailto:nsanv.dev@gmail.com' target='_blank'>{t('contact.email_message')}</a>
                    </article>
                    {/*<article className='contact__option'>
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5>NsanV</h5>
                        <a href='#' target='_blank'>Send a message</a>
                    </article>*/}
                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>{t('contact.whatsapp')}</h4>
                        <h5>Nicolas</h5>
                        <a href='https://wa.me/+33659333550' target='_blank'>{t('contact.whatsapp_message')}</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder={t('contact.form_placeholder_name')} required />
                    <input type='email' name='email' placeholder={t('contact.form_placeholder_email')} required />
                    <textarea name='message' rows='7' placeholder={t('contact.form_placeholder_message')} required ></textarea>
                    <button type='submit' className='btn btn-primary'>{t('contact.form_placeholder_button')}</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
