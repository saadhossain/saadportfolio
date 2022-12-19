import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { toast } from 'react-hot-toast';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_abilm3s', 'template_1213t9q', form.current, '6Vzcu4yZvYep-DEvg')
            .then((result) => {
                e.target.reset()
                toast.success('Thank your for Your Message, we will contact you Soon...')
            }, (error) => {
                toast.error(error.text)
            });
    };

    return (
        <div className='lg:flex justify-between my-5 lg:my-20 gap-5' id='contact'>
            <div className='w-full lg:w-2/4 mb-5 lg:mb-0'>
                <h1 className='text-3xl lg:text-5xl font-semibold text-secondary mb-5 font-bigshoulder'>Get In Touch<span className='text-primary font-mono'>_</span></h1>
                <p className='text-white font-chivo'>
                    Currently, I’m looking for new opportunities, my inbox is always open. Whether you want to hire me or want to discuss any matter, I’ll try my best to get back to you!
                </p>
            </div>
            <div className='w-full lg:w-2/4'>
                <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-[#081A3B] text-white font-chivo">
                    <form ref={form} onSubmit={sendEmail} className="space-y-6 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-1 text-sm">
                            <label for="fullName" className="block">Your Name</label>
                            <input type="text" name="fullName" id="fullName" placeholder="Username" className="w-full px-4 py-3 rounded-md border border-white bg-transparent" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label for="email" className="block">Your Email</label>
                            <input type="email" name="email" id="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-md border border-white bg-transparent" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label for="message" className="block">Leave Your Message</label>
                            <textarea
                                name="message"
                                id="message"
                                cols="6"
                                placeholder="Whats on Your Mind?"
                                className='w-full px-4 py-3 rounded-md border border-white bg-transparent'
                            ></textarea>
                        </div>
                        <button
                            className="block w-full p-3 text-center rounded text-white bg-primary border border-primary hover:bg-[#c77276] duration-500 font-semibold"
                        >Submit Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;