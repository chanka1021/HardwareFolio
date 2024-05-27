import React, { useState, useEffect, useRef } from "react";

// Importing Helmet for meta tags
import Helmet from "../components/Helmet/Helmet.js";

import { Link } from "react-router-dom";
import Category from "../components/UI/category/Category.jsx";

// Importing icons from React Icons
import { BsCpuFill, BsGpuCard, BsKeyboardFill, BsMemory, BsRocketTakeoff } from "react-icons/bs";

// Importing images
import heroImg from "../assets/images/hero.png";
import whyImg from "../assets/images/location.png";
import networkImg from "../assets/images/network.png";

// Importing custom components
import ProductCard from "../components/UI/product-card/ProductCard.jsx";
import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

// Importing custom hook
import useGetProducts from "../Hooks/GetProducts.js";

const Home = () => {
  // State for category and products
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState([]);

  // Ref for scrolling
  const ref = useRef(null);

  // Function to handle smooth scroll
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Fetching products using custom hook
  const FireBaseProducts = useGetProducts();

  // Filtering products based on category
  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(FireBaseProducts);
    } else {
      const filteredProducts = FireBaseProducts.filter(item => item.category === category.toLowerCase());
      setAllProducts(filteredProducts);
    }
  }, [category, FireBaseProducts]);

  return (
    <Helmet title="Home">
      {/* Hero Section */}
      <section className="py-8 lg:py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h5 className="mb-3 text-lg">Easy way to Build your dream pc</h5>
              <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-blue-500">Shop PC parts</span> for building your own computer <br /> or upgrading your current
                <span className="text-blue-500"> system</span>
              </h1>
              <p className="text-base md:text-lg text-gray-600 leading-7 md:leading-8">
                Whether you need a CPU, GPU or Motherboard, HardwareFolio is your trusted source of computer parts and accessories to take your build to the next level.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 mt-4">
                <button
                  className="flex items-center justify-between bg-blue-500 text-white px-4 py-2 rounded transition hover:bg-gray-800"
                  onClick={handleClick}
                >
                  Start now <BsRocketTakeoff />
                </button>
                <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded">
                  <Link to="/pcparts">See all Parts</Link>
                </button>
                <button className="border bg-blue-950 w-fit items-center border-blue-500 text-blue-400 px-8 py-2 rounded">
                  <Link to="/pcbuilder">Pc Builder <BsRocketTakeoff /></Link>
                </button>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 mt-5">
                <p className="flex items-center gap-2 text-sm md:text-lg font-semibold text-gray-800">
                  <span className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full">
                    <i className="ri-car-line"></i>
                  </span>{" "}
                  No shipping charge
                </p>
                <p className="flex items-center gap-2 text-sm md:text-lg font-semibold text-gray-800">
                  <span className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full">
                    <i className="ri-shield-check-line"></i>
                  </span>{" "}
                  100% secure checkout
                </p>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src={heroImg} alt="hero-img" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section>
        <Category />
      </section>

      {/* Shop High Performance Computer Parts Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">
              Shop High Performance
            </h2>
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-blue-600">Computer Parts</span>
            </h2>
            <p className="mb-4 mt-4 text-gray-600">
              Computer components like the CPU, GPU, and motherboard each play pivotal roles in creating a competent PC. The quality of one's PC parts directly impacts the capabilities of a computer, whether one decides to use it primarily for gaming or as a workstation.
            </p>
            <p className="text-gray-600">
              And with so many different computer components on the market today, selecting parts for your build can sometimes feel like a daunting task. When shopping for PC parts one needs to consider costs, compatibility between parts, resale value, and more. Let's go over some of the more major components, and what attributes you should look for when shopping.
            </p>
          </div>
        </div>
      </section>

      {/* Filtered Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">PC Parts</h2>
          </div>
          <div ref={ref} className="flex flex-wrap justify-center gap-4 mb-8">
            {/* Category buttons */}
            <button
              className={`py-2 px-4 rounded-lg ${category === "ALL" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
              onClick={() => setCategory("ALL")}
            >
              All
            </button>
            <button
              className={`flex items-center gap-2 py-2 px-4 rounded-lg ${category === "gpu" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
              onClick={() => setCategory("gpu")}
            >
              <BsGpuCard className="text-black" />
              GPU
            </button>
            <button
              className ={`flex items-center gap-2 py-2 px-4 rounded-lg ${category === "cpu" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
              onClick={() => setCategory("cpu")}
            >
              <BsCpuFill className="text-black" />
              CPU
            </button>
            <button
              className={`flex items-center gap-2 py-2 px-4 rounded-lg ${category === "ram" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
              onClick={() => setCategory("ram")}
            >
              <BsMemory className="text-black" />
              RAM
            </button>
            <button
              className={`flex items-center gap-2 py-2 px-4 rounded-lg ${category === "accessories" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
              onClick={() => setCategory("accessories")}
            >
              <BsKeyboardFill className="text-black" />
              Accessories
            </button>
          </div>

          {/* Displaying filtered products */}
          <div className="flex flex-wrap -mx-4">
            {allProducts.map((item) => (
              <div key={item.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
                <ProductCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why__choose-us py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
              <img src={whyImg} alt="Why choose us" className="w-full rounded-lg" />
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title text-2xl font-bold mb-4">
                  Why <span className="text-blue-600">HardwareFolio?</span>
                </h2>
                <p className="tasty__treat-desc text-gray-600 mb-4">
                  HardwareFolio stands out due to its wide selection of high-quality components, competitive pricing, and commitment to delivering exceptional customer service. We believe that by choosing our store, you'll have access to the best PC parts available, receive value for your money, and benefit from our knowledgeable and supportive staff who are always ready to assist you.
                </p>
                <ul className="list-none mt-4 space-y-4">
                  <li className="border-0 pl-0">
                    <p className="choose__us-title flex items-center gap-2 text-lg font-semibold">
                      <i className="ri-checkbox-circle-line text-blue-600"></i> Wide Selection of High-Quality PC Parts
                    </p>
                    <p className="choose__us-desc text-gray-600">
                      At our PC parts store, we pride ourselves on offering a wide selection of high-quality components that cater to the diverse needs of our customers.
                    </p>
                  </li>
                  <li className="border-0 pl-0">
                    <p className="choose__us-title flex items-center gap-2 text-lg font-semibold">
                      <i className="ri-checkbox-circle-line text-blue-600"></i> Competitive Pricing and Value for Money
                    </p>
                    <p className="choose__us-desc text-gray-600">
                      We understand that finding PC parts at affordable prices is essential for our customers. That's why we make it a priority to provide competitive pricing without compromising on the quality of the products we offer.
                    </p>
                  </li>
                  <li className="border-0 pl-0">
                    <p className="choose__us-title flex items-center gap-2 text-lg font-semibold">
                      <i className="ri-checkbox-circle-line text-blue-600"></i> Exceptional Customer Service and Expert Advice
                    </p>
                    <p className="choose__us-desc text-gray-600">
                      We take great pride in offering exceptional customer service and expert advice to our valued customers.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <div className="testimonial">
                <h5 className="testimonial__subtitle mb-4 text-xl font-semibold text-center lg:text-left">Testimonial</h5>
                <h2 className="testimonial__title mb-4 text-3xl font-bold text-center lg:text-left">
                  What our <span className="text-blue-600">customers</span> are saying
                </h2>
                <TestimonialSlider />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <img src={networkImg} alt="testimonial-img" className="w-full rounded-lg" />
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Home;
