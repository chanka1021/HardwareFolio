import React, { useState } from "react";
import { useSelector } from "react-redux";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";

const Checkout = () => {
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;

  const totalAmount = cartTotalAmount + Number(shippingCost);

  const submitHandler = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      postalCode: postalCode,
    };

    console.log(userShippingAddress);
  };

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-4">
              <h6 className="text-xl font-semibold mb-4">Shipping Address</h6>
              <form onSubmit={submitHandler}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="input-field"
                    style={{ borderColor: enterName ? '#48BB78' : '#E2E8F0' }} // Green border if filled
                    value={enterName}
                    onChange={(e) => setEnterName(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="input-field"
                    style={{ borderColor: enterEmail ? '#48BB78' : '#E2E8F0' }} // Green border if filled
                    value={enterEmail}
                    onChange={(e) => setEnterEmail(e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="Phone number"
                    required
                    className="input-field"
                    style={{ borderColor: enterNumber ? '#48BB78' : '#E2E8F0' }} // Green border if filled
                    value={enterNumber}
                    onChange={(e) => setEnterNumber(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Country"
                    required
                    className="input-field"
                    style={{ borderColor: enterCountry ? '#48BB78' : '#E2E8F0' }} // Green border if filled
                    value={enterCountry}
                    onChange={(e) => setEnterCountry(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="City"
                    required
                    className="input-field"
                    style={{ borderColor: enterCity ? '#48BB78' : '#E2E8F0' }} // Green border if filled
                    value={enterCity}
                    onChange={(e) => setEnterCity(e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="Postal code"
                    required
                    className="input-field"
                    style={{ borderColor: postalCode ? '#48BB78' : '#E2E8F0' }} // Green border if filled
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn-primary mt-4 bg-blue-600 px-3 py-2 hover:shadow-md hover:shadow-blue-600 rounded-lg text-white">
                  Proceed to Payment
                </button>
              </form>
            </div>

            <div className="w-full md:w-1/2 px-4 mb-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h6 className="text-xl font-semibold mb-4">Order Summary</h6>
                <div className="flex justify-between mb-2">
                  <span>Subtotal:</span>
                  <span>${cartTotalAmount}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping:</span>
                  <span>${shippingCost}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total:</span>
                  <span className="font-semibold">${totalAmount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Checkout;
