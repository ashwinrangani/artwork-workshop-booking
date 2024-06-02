// src/pages/CancellationAndRefund.jsx
import React from 'react';

const Refunds = () => {
  return (
    <div className=" bg-gray-100 py-10 px-5">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-5 text-center">Cancellation and Refund Policy</h1>

        <div className="space-y-4 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-2">1. Cancellation Policy</h2>
            <p>
              We understand that there may be situations where you need to cancel your order. Our cancellation policy is designed to provide you with a hassle-free experience.
            </p>
            <ul className="list-disc ml-5 mt-2">
              <li>You can cancel your order within 24 hours of placing it.</li>
              <li>If your order has already been processed or shipped, cancellation is not possible.</li>
              <li>To cancel your order, please contact our customer support team with your order details.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">2. Refund Policy</h2>
            <p>
              We aim to ensure customer satisfaction. If you are not satisfied with your purchase, you may be eligible for a refund based on the following conditions:
            </p>
            <ul className="list-disc ml-5 mt-2">
              <li>Refund requests must be made within 7 days of receiving the product.</li>
              <li>The product must be unused and in its original packaging.</li>
              <li>Refunds will be processed to the original method of payment within 10 business days.</li>
              <li>Shipping charges are non-refundable.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">3. How to Request a Refund</h2>
            <p>
              To request a refund, please follow these steps:
            </p>
            <ol className="list-decimal ml-5 mt-2">
              <li>Contact our customer support team via email or phone.</li>
              <li>Provide your order number and reason for the refund request.</li>
              <li>Our team will review your request and provide instructions for returning the product, if applicable.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">4. Contact Us</h2>
            <p>
              If you have any questions or concerns regarding our cancellation and refund policy, please contact us:
            </p>
            <p>Email: support@example.com</p>
            <p>Phone: (+91) 98792 03750</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Refunds;
