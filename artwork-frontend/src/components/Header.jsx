import { Slide, Fade, Zoom } from 'react-awesome-reveal';

const Header = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt="background-image"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="absolute  mt-2 md:right-48">
        <Zoom duration={2000}>
        <img
          className="w-16 h-16 ml-2 md:w-52 md:h-52 border-2 border-blue-900 hover:border-gray-500 md:border-4 rounded-full"
          src="./my-image.jpg"
        /></Zoom>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl ml-14 md:ml-0 md:text-6xl font-bold tracking-tight text-white">
            
            <span className=" animate-pulse duration-200 text-3xl md:text-6xl">
            <Fade cascade duration={300}> ArtInsight</Fade>
            </span>{" "}
            BY{" "}
            <span className="tracking-tight text-white text-3xl md:text-6xl mx-1 font-bold  relative inline-block stroke-current">
              URJA KARIA
              <svg
                class="absolute -bottom-0.5 w-full max-h-1.5"
                viewBox="0 0 55 5"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                  stroke-width="2"
                ></path>
              </svg>
            </span>
            
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            <em>"Dive</em> into a world of imagination and skill refinement as you join
            our intimate art workshops, meticulously crafted and led by me."
          </p>
          
        <div className='flex flex-col gap-4 mt-5'>
        <Slide cascade damping={0.2}>
  <h2 className="hover:drop-shadow-lg text-center w-[80%] md:w-1/2 lg:w-1/2 rounded-full border border-[#0c550c] bg-[#2c3e50] px-7 py-2.5  font-semibold text-gray-300 text-xl ring-blue-500 ring-offset-2 ring-offset-blue-700">
    Leading Art Workshops
  </h2>
  
  <h2 className="hover:drop-shadow-lg md:ml-4 text-center w-[90%] md:w-1/2 lg:w-1/2 rounded-full border border-[#0c550c] bg-[#2c3e50] px-7 py-2.5 text-xl font-semibold text-gray-300 ring-blue-500 ring-offset-2 ring-offset-blue-700">
    Corporate & Private Events
  </h2>
  
  <h2 className="hover:drop-shadow-lg md:ml-8 text-center w-[95%] md:w-1/2 lg:w-1/2 rounded-full border border-[#0c550c] bg-[#2c3e50] px-7 py-2.5 text-xl font-semibold text-gray-300 ring-blue-500 ring-offset-2 ring-offset-blue-700">
    Art Parties
  </h2>
  
  <h2 className="hover:drop-shadow-lg md:ml-12 text-center w-full md:w-1/2 lg:w-1/2 rounded-full border border-[#0c550c] bg-[#2c3e50] px-7 py-2.5 text-xl font-semibold text-gray-300 ring-blue-500 ring-offset-2 ring-offset-blue-700">
    1 : 1 Sessions
  </h2>
  </Slide>
</div>

       
        </div>
        
      </div>
    </div>
  );
};

export default Header;
