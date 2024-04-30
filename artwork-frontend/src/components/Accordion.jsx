import React from 'react';

const Accordion = () => {
  return (
    <div className="mx-auto max-w-lg mt-24">
      <div className="divide-y divide-gray-100">
        <details className="group w-96 transition ease-in-out duration-100">
          <summary className="flex w-96 cursor-pointer transition ease-in-out duration-100  list-none items-center justify-between py-4 text-lg font-medium text-gray-200 group-open:text-gray-400">
          What is Resin Art?
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
              </svg>
            </div>
          </summary>
          <div className="pb-4 text-gray-300">Resin is a chemical which comes in two components, resin and hardener, when mixed together hardens to create a glass finish on the surface . It creates waterproof, beautiful epoxy glass like surface.</div>
        </details>
        <details className="group w-96">
          <summary className="flex w-96 cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-gray-200 group-open:text-gray-400">
          Usage of this Art form? 
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
              </svg>
            </div>
          </summary>
          <div className="pb-4 text-gray-300">Resin can be used simply to make a transparent clear film over any painting, wood decor, furniture, to make it shiny and waterproof or by mixing pigments of variety of colours it can create abstract paintings, trays and jewellery.  </div>
        </details>
        <details className="group w-96">
          <summary className="flex w-96 cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-gray-200 group-open:text-gray-400">
          How ArtInsight can help to teach and master it? 
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
              </svg>
            </div>
          </summary>
          <div className="pb-4 text-gray-300">In this workshop one is taught about the nature of chemical, how to mix in the right proportion, what surfaces to use, from where to procure materials and most importantly how to use it safely. Resin on Tray and Coaster will taught.</div>
        </details>
      </div>
    </div>
  );
};

export default Accordion;
