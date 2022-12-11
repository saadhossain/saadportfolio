import React from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';

const Dealogic = () => {
    return (
        <div className='w-10/12 lg:w-lg mx-auto mt-32'>
            {/* Name and Short Description */}
            <h2 className='text-4xl text-secondary font-semibold font-bigshoulder hover:text-primary'>Dealogic</h2>
            <h4 className='my-5 text-lg font-chivo'>
                Computer Accessories Resale Market website.
            </h4>
            {/* Project Screenshots */}
            <div className='flex gap-5'>
                <div className='project-detailed dealogic w-full lg:w-2/4  rounded-lg'>
                </div>
                <div className='project-detailed dealogic-products w-full lg:w-2/4  rounded-lg'>
                </div>
                <div className='project-detailed dealogic-blogs w-full lg:w-2/4  rounded-lg'>
                </div>
            </div>
            {/* Project Details */}
            <div className='w-full my-10'>
                <div className='p-3 rounded-lg bg-[#081a3b]'>
                    <h4 className='text-primary text-2xl font-bigshoulder'>Features<span className='text-secondary font-chivo'>_</span></h4>
                    <ul className='font-chivo project-feature text-white flex flex-col gap-2'>
                        <li>
                        As a Registered Seller, he can post his product to the site for selling.
                        </li>
                        <li>
                        If a Seller wish to Promote his/her listed product to sell fast, he can advertise it by clicking the <span className='text-primary'>Promote</span> button from the Seller Dashboard.
                        </li>
                        <li>
                            Seller Can Mark any Specific Product posted by him as <span className='text-primary'>Sold</span>.
                        </li>
                        <li>
                            A Seller can <span className='text-primary'>delete</span> any of his/her added product from his dashboard, anytime, without admin permission.
                        </li>
                        <li>
                        Buyer can View any Product he wants, for this he have to join our website using <span className='text-primary'>registration</span> form, existing user can view products by <span className='text-primary'>Login.</span>
                        </li>
                        <li>
                            Buyer can <span className='text-primary'>Book</span> a Product he like to purchase, he just have to put his phone number and meeting location.
                        </li>
                        <li>
                            Buyer Can Confirm a Booked product by making the payment, buyer have to click on the <span className='text-primary'>Payment</span> button beside the each product at buyer dashboard.
                        </li>
                        <li>
                            From the Buyer Dashboard, if he changed decission he can <span className='text-primary'>cancel</span> any booking/order, before payment.
                        </li>
                        <li>
                        Website admin have all the privilege of the website
                        </li>
                        <li>
                            Admin Can See all the Products added by sellers
                        </li>
                        <li>
                            Admin Can <span className='text-primary'>delete</span> a product added by the seller, admin can mark any product as <span className='text-primary'>Sold</span> and admin can <span className='text-primary'>Promote</span> any product.
                        </li>
                        <li>
                            Admin himself can add any product for selling, admin also can post <span className='text-primary'>articles</span> from admin <span className='text-primary'>Dashboard</span>.
                        </li>
                        <li>
                            Admin, Seller and Buyer Can See their activity related <span className='text-primary'>Statistics</span> on their Admin Dashboard.
                        </li>
                    </ul>
                </div>
                {/* Technology Used */}
                <h4 className='text-primary text-2xl font-bigshoulder mt-5'>Technology Used<span className='text-secondary font-mono'>_</span></h4>
                <div className='flex gap-5 items-center mt-2 font-chivo'>
                    <p>
                        TAILWIND CSS | REACT | Firebase | Stripe <br /> MongoDB | Node.js | Express.js | JWT
                    </p>
                    <div className='flex gap-3'>
                        <a href='https://github.com/saadhossain/dealogic'><FaGithub className='w-6 h-6'></FaGithub></a>
                        <a href="https://dealogic-msh.web.app/"><FaGlobe className='w-6 h-6'></FaGlobe></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dealogic;