import { Fragment, useState, Suspense } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useUser } from "../userContext/UserContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import LoadingDots from "../components/LoadingDots";

const Payment = () => {
  const [open, setOpen] = useState(true);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [order, setOrder] = useState('')
  const [paymentID, setPaymentID] = useState('')
  const [amountToPay, setAmountToPay] = useState(100)
  const navigate = useNavigate();

  const base_url = import.meta.env.VITE_BASE_URL

  const { userData } = useUser();
  console.log(userData);

  const handlePayment = async (e) => {
    const amount = amountToPay;
    const currency = "INR";
    const receiptId = "receipt-1";

    const response = await axios.post(`${base_url}/order`, {
      amount,
      currency,
      receipt: receiptId,
    });

    const { order } = response.data;
    console.log(order);

    const option = {
      key: "rzp_test_in0Ik9ppHr9Jvx",
      amount,
      currency,
      name: "Ahana Jain",
      description: "test",
      image: "./my-image2.jpg",
      order_id: order.id,
      handler: async function (response) {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
          response;

        const validateResponse = await axios.post(
          `${base_url}/validate`,
          {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            id: userData.id
          }
        );
        console.log(validateResponse.data);
        setPaymentSuccess(true);
        setOrder(razorpay_order_id)
        setPaymentID(razorpay_payment_id)
      },
      prefill: {
        name: userData.name,
        email: userData.email,
        contact: userData.contact ? userData.contact : "",
      },
      notes: {
        address: "Gadhsisa",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var razrpay = new Razorpay(option);
    razrpay.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    razrpay.open();
    e.preventDefault();
  };

  return (
    <Suspense fallback={<LoadingDots />}>
      {userData ? (
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={() => setOpen(true)}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-sky-100 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed mt-32  z-10 w-screen">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    {paymentSuccess ? ( // Render receipt section if payment is successful
                      <div className="bg-black px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                          <div className="mx-auto flex h-12 w-12  flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                            <CheckBadgeIcon
                              className="h-8 w-8 text-red-600"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="mt-3 flex flex-col justify-center items-center sm:ml-4 sm:mt-0 sm:text-left">
                            <Dialog.Title
                              as="h1"
                              className=" text-xl font-semibold leading-6 text-gray-200"
                            >
                              Payment Successful
                            </Dialog.Title>
                            <div className="mt-2 grid mx-12 items-center justify-center ">
                              
                              <h1 className="text-md text-center underline mt-2  text-gray-200">
                                Order Detail
                              </h1>
                              <h1 className="text-md text-left mt-3 ml-0 text-gray-200">
                                Name : {userData.name}
                              </h1>
                              <h1 className="text-md text-left mt-3 ml-0 text-gray-200">
                                Workshop : {userData.workshop}
                              </h1>
                              <h1 className="text-md text-left mt-3 ml-0 text-gray-200">
                                Amount Paid : {amountToPay/100}/-
                              </h1>
                              <h1 className="text-md text-left mt-3 ml-0 text-gray-200">
                                OrderID : {order}
                              </h1>
                              <h1 className="text-md text-left mt-3 ml-0 text-gray-200">
                                PaymentID : {paymentID}
                              </h1>
                            </div>
                            <Link to={'/'}>
                            <button className="text-gray-300 mt-2 border p-2 rounded-md hover:bg-slate-800">Back to Home</button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ) : ( // Render payment button if payment is not successful
                      <div className="bg-black px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                          <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                            <CheckBadgeIcon
                              className="h-6 w-6 text-red-600"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                            <Dialog.Title
                              as="h1"
                              className="text-base font-semibold leading-6 text-gray-200"
                            >
                              Hello, {userData.name}
                            </Dialog.Title>
                            <div className="mt-2">
                              <p className="text-sm text-gray-200">
                                Thank for registering with us!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {!paymentSuccess && ( // Render payment button if payment is not successful
                      <div className="bg-gray-300 py-3 flex w-full justify-center ">
                        <button
                          type="button"
                          className=" justify-center rounded-md bg-red-800 px-3 py-2 text-sm font-semibold text-gray-200 shadow-sm hover:bg-gray-700 hover:text-gray-200 "
                          onClick={handlePayment}
                        >
                          Continue to Payment
                        </button>
                      </div>
                    )}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      ) : (
        <div className="text-center bg-blue-50 h-screen">
          <p className="pt-6">Please register to access this page</p>
          <button
            onClick={() => navigate("/buyworkshop")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Register for the workshop
          </button>
        </div>
      )}
    </Suspense>
  );
};

export default Payment;
