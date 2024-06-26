import axios from "axios";
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Accordion from "./Accordion";
import ScrollTop from "./ScrollTop";
import TermsAndConditions from "./TermsandConditions";
import { Link } from "react-router-dom";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState(null);

  const base_url = import.meta.env.VITE_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${base_url}/feedback`, {
        name,
        email,
        message,
      });
      if (response) {
        setFeedback(response.data);
        setTimeout(() => {
          setEmail("");
          setName("");
          setMessage("");
          setFeedback(null);
        }, 7000);
      }
    } catch (error) {
      setFeedback(error);
      console.error(error);
    }
  };

  return (
    <div
      id="about"
      className="relative w-full mx-auto overflow-hidden h-max bg-[#351b26]"
    >
      <div className="absolute -top-0.5 left-0 w-[100%] overflow-hidden leading-0 transform rotate-180">
        <svg
          className="relative block h-10  md:h-20 "
          style={{ width: "calc(100% + 1.3px)" }}
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-[#6B2323]"
          ></path>
        </svg>
      </div>

      <footer className="w-full z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-2">
          <div className="max-w-3xl mx-auto flex justify-center items-center flex-col">
            <div>
              <img
                src="/brandlogo.png"
                alt="brand logo"
                className="w-40 h-40 mt-10"
              />
            </div>
            <h1 className="text-center -mt-5 text-2xl text-yellow-50 font-serif">
              Drop Your Query Here
            </h1>
            <form
              onSubmit={handleSubmit}
              className="mt-4 pl-6 pr-6 md:pl-0 md:pr-0 w-96"
            >
              <div className="relative mb-6">
                <label className="flex  items-center mb-2 text-gray-300 text-sm font-medium">
                  Name{" "}
                  <svg
                    width="7"
                    height="7"
                    className="ml-1"
                    viewBox="0 0 7 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                      fill="#EF4444"
                    />
                  </svg>
                </label>
                <input
                  type="text"
                  value={name}
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full active:ring-2 h-11 px-7 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-200 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 "
                  placeholder="Name"
                  required
                />
              </div>
              <div className="relative mb-6">
                <label className="flex  items-center mb-2 text-gray-300 text-sm font-medium">
                  Email{" "}
                  <svg
                    width="7"
                    height="7"
                    className="ml-1"
                    viewBox="0 0 7 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                      fill="#EF4444"
                    />
                  </svg>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  className="block w-full focus:ring-2 h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-200 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 "
                  placeholder="yourname@email.com"
                  required
                />
              </div>
              <div className="relative mb-6">
                <label className="flex  items-center mb-2 text-gray-300 text-sm font-medium">
                  Message{" "}
                  <svg
                    width="7"
                    height="7"
                    className="ml-1"
                    viewBox="0 0 7 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                      fill="#EF4444"
                    ></path>
                  </svg>
                </label>
                <div className="flex">
                  <div className="relative w-full">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="block w-full h-30   px-4 py-2.5 text-base leading-7 font-normal shadow-xs text-gray-200 bg-transparent border border-gray-300 rounded-2xl placeholder-gray-400 focus:outline-2 resize-none"
                      placeholder="Write a message..."
                      name="textarea"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className=" w-full relative h-12 rounded-full bg-black/50 px-4 py-2 text-sm font-medium text-gray-200 hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
              >
                Send Message
              </button>
            </form>
            <Fade direction="right">
              {feedback ? (
                <dialog
                  className=" h-8 mt-3 relative bg-red-300 text-md p-1 rounded-lg"
                  open
                >
                  {feedback}
                </dialog>
              ) : (
                ""
              )}
            </Fade>
            <div className="-mt-8">
              <Accordion />
            </div>

            <div className="flex space-x-10 justify-center items-center mb-14 mt-6">
              <a
                href="#"
                className="block  text-gray-200 transition-all duration-300 hover:text-yellow-300 "
              >
                <svg
                  className="w-[1.688rem] h-[1.688rem]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="block  text-gray-200 transition-all duration-300 hover:text-yellow-300 "
              >
                <svg
                  className="w-[1.688rem] h-[1.688rem] "
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.76556 14.8811C9.76556 12.3243 11.8389 10.2511 14.3972 10.2511C16.9555 10.2511 19.03 12.3243 19.03 14.8811C19.03 17.4379 16.9555 19.5111 14.3972 19.5111C11.8389 19.5111 9.76556 17.4379 9.76556 14.8811ZM7.26117 14.8811C7.26117 18.82 10.456 22.0129 14.3972 22.0129C18.3385 22.0129 21.5333 18.82 21.5333 14.8811C21.5333 10.9422 18.3385 7.7493 14.3972 7.7493C10.456 7.7493 7.26117 10.9422 7.26117 14.8811ZM20.1481 7.46652C20.148 7.79616 20.2457 8.11843 20.4288 8.39258C20.6119 8.66674 20.8723 8.88046 21.177 9.00673C21.4817 9.133 21.8169 9.16614 22.1405 9.10196C22.464 9.03778 22.7612 8.87916 22.9945 8.64617C23.2278 8.41318 23.3868 8.11627 23.4513 7.79299C23.5157 7.46972 23.4829 7.13459 23.3568 6.83C23.2307 6.5254 23.017 6.26502 22.7428 6.08178C22.4687 5.89853 22.1463 5.80065 21.8164 5.80052H21.8158C21.3737 5.80073 20.9497 5.9763 20.637 6.28867C20.3243 6.60104 20.1485 7.02467 20.1481 7.46652ZM8.78274 26.1863C7.42782 26.1246 6.69138 25.8991 6.20197 25.7085C5.55314 25.4561 5.0902 25.1554 4.60346 24.6696C4.11672 24.1839 3.81543 23.7216 3.56395 23.0732C3.37317 22.5843 3.14748 21.8481 3.08588 20.494C3.01851 19.03 3.00506 18.5902 3.00506 14.8812C3.00506 11.1722 3.01962 10.7336 3.08588 9.26841C3.14759 7.9143 3.37495 7.17952 3.56395 6.68919C3.81654 6.04074 4.11739 5.57808 4.60346 5.09163C5.08953 4.60519 5.55203 4.30408 6.20197 4.05274C6.69116 3.86208 7.42782 3.63652 8.78274 3.57497C10.2476 3.50763 10.6877 3.49419 14.3972 3.49419C18.1068 3.49419 18.5473 3.50874 20.0134 3.57497C21.3683 3.63663 22.1035 3.86385 22.5941 4.05274C23.243 4.30408 23.7059 4.60585 24.1926 5.09163C24.6794 5.57741 24.9796 6.04074 25.2322 6.68919C25.4229 7.17808 25.6486 7.9143 25.7102 9.26841C25.7776 10.7336 25.7911 11.1722 25.7911 14.8812C25.7911 18.5902 25.7776 19.0287 25.7102 20.494C25.6485 21.8481 25.4217 22.5841 25.2322 23.0732C24.9796 23.7216 24.6787 24.1843 24.1926 24.6696C23.7066 25.155 23.243 25.4561 22.5941 25.7085C22.105 25.8992 21.3683 26.1247 20.0134 26.1863C18.5485 26.2536 18.1084 26.2671 14.3972 26.2671C10.686 26.2671 10.2472 26.2536 8.78274 26.1863ZM8.66768 1.0763C7.18823 1.14363 6.17729 1.37808 5.29443 1.72141C4.3801 2.07597 3.60608 2.55163 2.83262 3.32341C2.05916 4.09519 1.58443 4.86997 1.22966 5.78374C0.88612 6.66663 0.651535 7.67641 0.584162 9.15497C0.515676 10.6359 0.5 11.1093 0.5 14.8811C0.5 18.6529 0.515676 19.1263 0.584162 20.6072C0.651535 22.0859 0.88612 23.0955 1.22966 23.9784C1.58443 24.8916 2.05927 25.6673 2.83262 26.4387C3.60597 27.2102 4.3801 27.6852 5.29443 28.0407C6.17896 28.3841 7.18823 28.6185 8.66768 28.6859C10.1502 28.7532 10.6232 28.77 14.3972 28.77C18.1713 28.77 18.645 28.7543 20.1268 28.6859C21.6063 28.6185 22.6166 28.3841 23.5 28.0407C24.4138 27.6852 25.1884 27.2105 25.9618 26.4387C26.7353 25.667 27.209 24.8916 27.5648 23.9784C27.9083 23.0955 28.144 22.0857 28.2103 20.6072C28.2777 19.1252 28.2933 18.6529 28.2933 14.8811C28.2933 11.1093 28.2777 10.6359 28.2103 9.15497C28.1429 7.6763 27.9083 6.66608 27.5648 5.78374C27.209 4.87052 26.7341 4.09641 25.9618 3.32341C25.1896 2.55041 24.4138 2.07597 23.5011 1.72141C22.6166 1.37808 21.6062 1.14252 20.1279 1.0763C18.6461 1.00897 18.1724 0.992188 14.3983 0.992188C10.6243 0.992188 10.1502 1.00785 8.66768 1.0763Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="block  text-gray-200 transition-all duration-300 hover:text-yellow-300 "
              >
                <svg
                  className="w-[0.938rem] h-[1.625rem]"
                  viewBox="0 0 15 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.7926 14.4697L14.5174 9.86889H10.0528V6.87836C10.0528 5.62033 10.6761 4.39105 12.6692 4.39105H14.7275V0.473179C13.5289 0.282204 12.3177 0.178886 11.1037 0.164062C7.42917 0.164062 5.0302 2.37101 5.0302 6.36077V9.86889H0.957031V14.4697H5.0302V25.5979H10.0528V14.4697H13.7926Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="block  text-gray-200 transition-all duration-300 hover:text-yellow-300 "
              >
                <svg
                  className="w-[1.875rem] h-[1.375rem]"
                  viewBox="0 0 30 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M26.3106 1.27838C27.5782 1.62071 28.5745 2.61957 28.9113 3.88573C29.524 6.18356 29.524 10.9809 29.524 10.9809C29.524 10.9809 29.524 15.7782 28.9113 18.076C28.5698 19.3469 27.5735 20.3457 26.3106 20.6834C24.0186 21.2977 14.8226 21.2977 14.8226 21.2977C14.8226 21.2977 5.63122 21.2977 3.33456 20.6834C2.06695 20.3411 1.07063 19.3422 0.73385 18.076C0.121094 15.7782 0.121094 10.9809 0.121094 10.9809C0.121094 10.9809 0.121094 6.18356 0.73385 3.88573C1.07531 2.61488 2.07162 1.61602 3.33456 1.27838C5.63122 0.664062 14.8226 0.664062 14.8226 0.664062C14.8226 0.664062 24.0186 0.664062 26.3106 1.27838ZM19.5234 10.9809L11.885 15.403V6.55872L19.5234 10.9809Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
            <div className="grid md:flex lg:flex justify-center items-center gap-4">
              
              <Link to="/termsandconditions">
                <a className="text-sm text-yellow-100 text-center underline block mb-2">
                  Terms and Conditions
                </a>
              </Link>
              <Link to='refunds'>
              <a className="text-sm text-yellow-100 text-center underline block mb-2">
                Cancellation and Refund
              </a>
              </Link>
              <Link to='privacypolicy'>
              <p className="text-sm text-yellow-100 text-center underline block mb-2">
                Privacy Policy
              </p>
              </Link>
              <span className="text-sm text-yellow-100 text-center block mb-2">
                ©<a href="">ArtInsight</a> 2024, All rights
                reserved.
              </span>
            </div>
            <ScrollTop />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
