// "use client"
import About from "@/components/About";
import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import Journey from "@/components/Journey";
import NewProject from "@/components/NewProject";
import Posts from "@/components/Posts";
import Loading from "@/components/Loading";
// import { useState,useEffect } from "react";
import Brand from "@/components/Brand"
import Newsletter from "@/components/Newsletter";
import Awards from "../components/Awards";
import CTAButton from "../components/CTAButton";
const AllComponent = () => {

    // const [loading,setloading] = useState(true)
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //       setloading(false);
    //     }, 3000);
    //     return () => clearTimeout(timer);
    //   }, []);
  return (
    <>
      
        <>
          <Banner />
          <About />
          <Journey />
          <NewProject />
          <Brand/>
          <Blog />
          <Posts />
          <Awards/>
          <Newsletter/>
          <CTAButton/>
        </>
      
    </>
  );
}

export default AllComponent