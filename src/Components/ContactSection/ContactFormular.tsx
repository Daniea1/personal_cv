import React, {useState} from 'react';
import styles, {customColor} from '../../style';
import emailjs from '@emailjs/browser';
import {emailSchema} from "./EmailValidation";

const ContactFormular = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormSubmitted(true);

        // wait for 'validateMessage' to be validated
        const isValidMessage = await validateMessage();
        if (!isValidMessage) {
            console.log('Invalid message');
            return;
        }

        // parameters nedeed for submiting message to my mail
        const serviceId = 'service_r3wizdg';
        const templateId = 'template_lu2wlmh';
        const publicKey = '4emBEfuzcXPMu5crm';

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Danieal Johnbaskar',
            message: message,
        };

        // Submits the message to my mail
        emailjs
            .send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.log('Error sending email', error);
            });
    };

    //validates the message using 'emailSchema'
    const validateMessage = async () => {
        const emailData = {
            name,
            email,
            message
        };

        try {
            await emailSchema.validate(emailData);
            console.log('Email is valid');
            return true;
        } catch (error) {
            console.error('Email validation error:', error);
            return false;
        }
    };

    return (
        <section
            id = "Kontakt"
            className = {`${styles.flexCenter} ${styles.marginY} ${styles.padding}
             sm:flex-row flex-col  shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl`} >
            <div className = "flex-1 flex flex-col" >
                <h2 className = {styles.heading2} >Kontakt mig</h2 >
                <p className = {`${styles.paragraph} max-w-[470px] mt-5`} >
                    Du kan kontakte mig ved at sende en e-mail til:
                </p >
                <address className = "text-white dark:text-black text-center md:text-start" >danieal3@hotmail.com</address >
            </div >

            <form
                onSubmit = {handleSubmit}
                className = "sm:w-96 md:w-1/2 lg:w-2/4 xl:w-2/4 p-8 rounded mx-auto mt-8 sm:mt-0"
            >
                <div className = "mb-4" >
                    <label
                        htmlFor = "name"
                        className = "block text-sm font-medium text-white dark:text-black"
                    >
                        Navn:
                    </label >
                    <input
                        type = "text"
                        placeholder = "Navn..."
                        value = {name}
                        onChange = {(e) => setName(e.target.value)}
                        className = {`mt-1 p-2 w-full border rounded-md
                         ${formSubmitted && name === '' && 'border-red-500'}`} // Highlight border if form is submitted and name is empty
                    />
                    {formSubmitted && name === '' && (
                        <p className = "text-red-500 text-sm mt-1" >Navn er påkrævet</p >
                    )}
                </div >

                <div className = "mb-4" >
                    <label
                        htmlFor = "email"
                        className = "block text-sm font-medium text-white dark:text-black"
                    >
                        E-mail:
                    </label >
                    <input
                        type = "email"
                        placeholder = "e-mail..."
                        value = {email}
                        onChange = {(e) => setEmail(e.target.value)}
                        className = {`mt-1 p-2 w-full border rounded-md
                         ${formSubmitted && email === '' && 'border-red-500'}`} // Highlight border if form is submitted and email is empty
                    />
                    {formSubmitted && email === '' && (
                        <p className = "text-red-500 text-sm mt-1" >Email er påkrævet</p >
                    )}
                </div >

                <div className = "mb-4" >
                    <label
                        htmlFor = "message"
                        className = "block text-sm font-medium text-white dark:text-black"
                    >
                        Besked:
                    </label >
                    <textarea
                        placeholder = "Skriv din besked her..."
                        value = {message}
                        onChange = {(e) => setMessage(e.target.value)}
                        className = {`mt-1 p-2 w-full border rounded-md
                         ${formSubmitted && message === '' && 'border-red-500'}`} > // Highlight border if form is submitted and message is empty
                    </textarea >
                    {formSubmitted && message === '' && (
                        <p className = "text-red-500 text-sm mt-1" >Besked er påkrævet</p >
                    )}
                </div >

                <button
                    type = "submit"
                    className = {`block mx-auto ${customColor.buttonGradientBlue}
                     text-white p-2 rounded-md`} >
                    Submit
                </button >
            </form >
        </section >
    );
};

export default ContactFormular;
