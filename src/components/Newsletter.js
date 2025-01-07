"use client"

import { fetchData } from "@/lib/api"
import Link from "next/link"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"

const Newsletter = () => {
  const [contactDetails, setContactDetails] = useState(null)
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [loading, setLoading] = useState(false)

  // Fetch contact details
  useEffect(() => {
    const fetchContact = async () => {
      try {
        const data = await fetchData('/pages/10?_fields=acf.contact_options&acf_format=standard')
        if (data) {
          setContactDetails(data?.acf?.contact_options)
        } else {
          console.log("Failed to fetch data from API")
        }
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchContact()
  }, [])

  // Email validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    setEmailError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
  
    setLoading(true);
    const formData = new FormData();
    formData.append('_wpcf7', '479');
    formData.append('_wpcf7_version', '5.9.8');
    formData.append('_wpcf7_locale', 'en_US');
    formData.append('_wpcf7_unit_tag', 'wpcf7-f479-o1');
    formData.append('_wpcf7_container_post', '0');
    formData.append('subscribe', email);
  
    try {
      const response = await fetch('https://api.pramodmaloo.com/wp-json/contact-form-7/v1/contact-forms/479/feedback', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Subscribed!",
          text: "You have successfully subscribed to the PM Newsletter.",
          confirmButtonColor: '#F97316',
        });
        setEmail('');
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="news_letter_part bg-[#272727] text-white pb-10 mx-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-4 lg:px-6">
        <div className="mt-10">
          <div className="bg-[#363636] padding_part_footer w-full h-[400px] md:w-[100%] lg:w-[100%] mt-2 rounded-xl p-8 sm:p-10 mx-auto">
            <div className="text-white mt-4">
              <h2 className="text-4xl font-bold mb-2">Subscribe To</h2>
              <Link href="/the-pm-newsletter">
                <h2 className="text-3xl font-bold mb-10 underline text-orange-500 blink">
                  The PM Newsletter!
                </h2>
              </Link>
              <p className="text-gray-300 text-sm sm:text-base mb-8">
                {contactDetails?.contact_form_section?.texts}
              </p>
            </div>
            <form onSubmit={handleSubmit} className="submit_form flex items-center">
              <div className="relative flex-grow">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-orange-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  placeholder="Enter Your Email Address"
                  className="w-full px-4 py-3 pl-10 pr-4 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`px-4 py-3 bg-orange-500 text-white font-semibold rounded-r-lg transition duration-300 ${loading ? 'bg-orange-300 cursor-not-allowed' : 'hover:bg-orange-600'}`}
              >
                {loading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {emailError && <p className="text-red-500">{emailError}</p>}
          </div>
          <div className="bg-[#363636] w-full 2xl:w-[100%] xl:w-[100%] lg:w-[80%] md:w-[90%] items-center justify-around lg:h-[150px] sm:h-[200px] md:h-[150px] rounded-xl p-4 mt-8 mx-auto flex flex-col sm:flex-row gap-4 lg:flex-row">
            <div className="text-center">
              <h2 className="text-[#B6B6B6] text-[20px] font-bold mb-2">
                {contactDetails?.contacts?.support_email?.title}
              </h2>
              <p className="text-white">{contactDetails?.contacts?.support_email?.email}</p>
            </div>
            <div className="text-center">
              <h2 className="text-[#B6B6B6] text-[20px] font-bold mb-2">
                {contactDetails?.contacts?.work_email?.title}
              </h2>
              <p className="text-white">{contactDetails?.contacts?.work_email?.email}</p>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <img
            className="w-full h-[300px] md:h-[550px] lg:h-[570px] rounded-xl object-cover"
            src={contactDetails?.image?.image}
            alt="Contact"
          />
        </div>
      </div>
    </div>
  )
}

export default Newsletter
