import dateFormat from "dateformat";
import React from 'react';
import { Link } from "react-router-dom";

const DisplayBlogs = ({ blog }) => {
    const { _id, blogTitle, blogImage, description, authorImage, authorName, publishedOn } = blog;
    return (
        <div className="text-white">
            <div className="card card-compact w-full bg-base-100 shadow-lg hover:shadow-2xl duration-500 cursor-pointer">
                <figure><img src={blogImage} alt={blogTitle} className='w-full h-48 rounded-t' /></figure>
                <div className="card-body font-semibold">
                    <h2 className="text-lg font-semibold font-chivo">{blogTitle}</h2>
                    <hr className="border-1 border-gray-400" />
                    <div
                        dangerouslySetInnerHTML={{ __html: description.slice(0, 150) }}
                    >

                    </div>
                    <hr className="border-1 border-gray-400" />
                    <div className='flex items-center justify-between'>
                        <div className="flex items-center gap-2">
                            <img src={authorImage} alt={authorName} className='w-12 rounded-full' />
                            <div>
                                <p>{authorName}</p>
                                <p>On: {dateFormat(publishedOn, "mmm dS, yyyy")}</p>
                            </div>
                        </div>
                        <Link to={`/blogs/${_id}`}><button className='p-2 bg-transparent duration-500 ease-in-out border-2 border-primary hover:bg-primary rounded text-white font-semibold text-center'>Read Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayBlogs;