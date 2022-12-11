import React from 'react';

const Contact = () => {
    return (
        <div className='lg:flex justify-between my-5 lg:my-20 gap-5' id='contact'>
            <div className='w-full lg:w-2/4 mb-5 lg:mb-0'>
                <h1 className='text-3xl lg:text-5xl font-semibold text-secondary mb-5 font-bigshoulder'>Get In Touch<span className='text-primary font-mono'>_</span></h1>
                <p className='text-white font-chivo'>
                Currently, I’m looking for new opportunities, my inbox is always open. Whether you want to hire me or want to discuss any matter, I’ll try my best to get back to you!
                </p>
            </div>
            <div className='w-full lg:w-2/4'>
                <iframe src="https://www.cognitoforms.com/f/0XhFLchcDkO5LRzKrfQIzw/1" title='contact form' className='w-full h-[620px] lg:h-[550px] rounded-lg'></iframe>
                <script src="https://www.cognitoforms.com/f/iframe.js"></script>
            </div>
        </div>
    );
};

export default Contact;