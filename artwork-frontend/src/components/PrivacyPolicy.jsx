// PrivacyPolicy.jsx
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-5 text-center">Privacy Policy</h1>

        <div className="space-y-4 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-2">1. Information Collection and Use</h2>
            <p>
              We respect your privacy and are committed to protecting any information you provide us. This Privacy Policy outlines how we collect, use, and safeguard your personal data.
            </p>
            <p>
              We collect and store information you voluntarily provide us, including but not limited to your name, email address, phone number, and mailing address. We use this information to process your orders, provide customer support, and improve our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">2. Information Sharing and Disclosure</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent. Your data may be shared with trusted third parties who assist us in operating our website, conducting business, or servicing you, provided they agree to keep this information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">3. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">4. Your Rights</h2>
            <p>
              You have the right to access, correct, update, or delete your personal information at any time. If you would like to exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">5. Contact Us</h2>
            <p>
              If you have any questions or concerns regarding our Privacy Policy, please contact us:
            </p>
            <p>Email: privacy@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
