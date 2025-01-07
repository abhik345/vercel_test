"use client"
import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
// import Footer from '@/components/Footer'
import { fetchData } from '@/lib/api'
import { usePathname } from 'next/navigation'


const BlogDetails = () => {
    const [blogDetails,setblogDetails] = useState(null)
    const pathname= usePathname()
    const id = pathname.split("/").pop()

    const fetchblogDetails = async () => {
        try {
            const data = fetchData(`${baseUrl}/blogs/${id}`)
            if (data) {
                setblogDetails(data)
            } else {
                console.log("failed to fetch blog details")
            }
        } catch (error) {
            console.log(error)
        }
        fetchblogDetails()
    }
  return (
    <>
      {/* <Navbar /> */}
      <div className="img_box_blog">
        <img
          src={blogDetails?.blog_details?.thumbnail}
          alt="image"
          className="w-full h-60 sm:h-72 md:h-80 lg:h-[500px] rounded-xl object-cover"
        />
      </div>
    </>
  );
}

export default BlogDetails