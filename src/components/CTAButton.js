"use client"
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const CTAButton = ({ className }) => {
  const [isShaking, setIsShaking] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 200);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false); 

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

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
        setIsModalOpen(false)
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
    <>
      <button
        onClick={handleOpenModal}
        className={`cta_button z-50 fixed bottom-4 right-4 px-6 py-3 rounded-full bg-orange-500 text-white font-semibold shadow-lg hover:bg-orange-700 transition duration-300 ${
          isShaking ? "animate-shake" : ""
        } ${className}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.5"
            d="M14 2s2.2.2 5 3s3 5 3 5m-7.793-4.464s.99.282 2.475 1.767s1.768 2.475 1.768 2.475M4.007 7.933c-.073 1.908.41 5.149 3.66 8.4a14 14 0 0 0 2.333 1.9M5.538 4.937c1.393-1.393 3.615-1.206 4.5.38l.649 1.162c.585 1.05.35 2.426-.572 3.349q0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91q0 0 0 0c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53A9.8 9.8 0 0 1 13 19.611"
          />
        </svg>
      </button>

      {/* Main Modal */}
      {isModalOpen && (
        <div
          id="default-modal"
          tabIndex={-1}
          aria-hidden="true"
          className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow ">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                <h1 className="text-gray-900 2xl:font-semibold xl:font-semibold lg:font-semibold md:font-medium sm:font-normal 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-lg">
                  Subscribe To{" "}
                  <span className="opacity-100 sm:opacity-0">
                    <br />
                  </span>
                  <span className="text-orange-500 text-2xl font-bold">
                    The PM Newsletter!
                  </span>
                </h1>

                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center  dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4">
                <form
                  onSubmit={handleSubmit}
                  className="submit_form flex items-center rounded-l-lg mt-4"
                >
                  <div className="relative flex-grow border-2 border-yellow-600">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-orange-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-mail"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </span>
                    <input
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      className="input_fields_form_email block w-full py-2 text-[14px] pl-12 pr-10 leading-5 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Your Email Address"
                      required
                    />
                  </div>
                  <div className="submit_form_button ml-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-8 py-2 text-white bg-orange-500 hover:bg-orange-600"
                    >
                      {loading ? "Submitting..." : "Subscribe"}
                    </button>
                  </div>
                </form>
                {emailError && (
                  <p className="text-red-500 mt-2 text-sm">{emailError}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

CTAButton.propTypes = {
  className: PropTypes.string,
};

export default CTAButton;
