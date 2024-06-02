// src/pages/TermsAndConditions.jsx
import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-5 text-center">Terms and Conditions</h1>

        <div className="space-y-4 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
            <p>
              Welcome to Razorpay! These terms and conditions outline the rules and regulations for the use of Razorpay's Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">2. Acceptance of Terms</h2>
            <p>
              By accessing this website we assume you accept these terms and conditions. Do not continue to use Razorpay if you do not agree to all of the terms and conditions stated on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">3. Services</h2>
            <p>
              Razorpay offers online payment services to merchants, allowing them to accept payments over the Internet through various payment methods.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">4. User Responsibilities</h2>
            <p>
              Users are responsible for maintaining the confidentiality of their account information and are fully responsible for all activities that occur under their account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">5. Limitation of Liability</h2>
            <p>
              In no event shall Razorpay, nor any of its officers, directors, and employees, be liable for anything arising out of or in any way connected with your use of this Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">6. Termination</h2>
            <p>
              We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">7. Changes to Terms</h2>
            <p>
              Razorpay reserves the right to revise these terms at any time as it sees fit, and by using this Website you are expected to review these terms on a regular basis.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
