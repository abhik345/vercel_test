"use client"

import { fetchData } from "@/lib/api"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const Footer = () => {

  const pathname = usePathname();


    const [footerDetails,setfooterDetails]= useState(null)
    const [socialIconsData,setsocialIconsData] = useState([])
    
    useEffect(()=>{
        const fetchFooterDetails = async () => {
            try {
                const data = await fetchData('/acf-options/footer')
                if (data) {
                    setfooterDetails(data?.footer)
                } else {
                   console.log("failed to fetch footer details") 
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchFooterDetails()
    },[])

    useEffect(() => {
        const fetchsocialIconsData = async () => {
            try {
                const data = await fetchData('/acf-options/social-media')
                if (data) {
                    setsocialIconsData(data)
                } else {
                    console.log("failed to fetch socialmedia icon data")
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchsocialIconsData()
    }, [])

    if (pathname === "/the-pm-newsletter" || pathname === "/srk") {
      return null;
    }

  return (
    <>
     <footer className="bg-[#272727] h-full">
          <div className="container mx-auto px-6 h-full">
            <div className="flex flex-row items-center justify-between py-4 md:mx-8">
              <div>
                <img
                  src={footerDetails?.signature_image?.signature}
                  alt="Signature"
                  className="h-[50%] w-[50%]"
                />
              </div>
              <div className="flex flex-row gap-3">
                {socialIconsData?.social_media?.length > 0 &&
                  socialIconsData.social_media.map((icon, index) => (
                    <div
                      key={index}
                      className="bg-[#D9D9D9] social_icon_logo rounded-full"
                    >
                      <a href={icon.link} target="blank">
                        <Image
                          className="inline-block h-6 w-6"
                          src={icon.social_media_icon}
                          alt={icon.social_media_name}
                          width={10}
                          height={10}
                        />
                      </a>
                    </div>
                  ))}
              </div>
            </div>
            <div className="py-6 px-6">
              <hr className="border-gray-400" />
              <p className="footer_para text-center text-gray-400 mt-4 sm:text-base">
                {footerDetails?.footer_text}
              </p>
            </div>
          </div>
        </footer>
    </>
  )
}

export default Footer