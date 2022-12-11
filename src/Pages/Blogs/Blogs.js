import { useQuery } from '@tanstack/react-query';
import React from 'react';
import DisplayBlogs from '../../Components/Blogs/DisplayBlogs';
import Loader from '../../Components/Loader/Loader';

const Blogs = () => {
    const { data: blogs = [], isLoading } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch('https://dealogic.vercel.app/blogs');
            const data = await res.json()
            return data;
        }
    })
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className='w-10/12 lg:w-lg mx-auto mt-20 lg:mt-28'>
            <h1 className='text-3xl lg:text-5xl text-secondary font-bold font-bigshoulder'>Blogs<span className='text-primary font-mono'>_</span></h1>
            {/* //Show All blogs */}
            <div className='grid lg:grid-cols-3 gap-5 my-10'>
                {
                    blogs.map(blog => <DisplayBlogs
                        key={blog._id}
                        blog={blog}
                    ></DisplayBlogs>)
                }
            </div>
        </div>
    );
};

export default Blogs;