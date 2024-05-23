import React, { useState, useEffect, useRef } from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { BsCpuFill, BsGpuCard, BsKeyboardFill, BsMemory, BsRocketTakeoff } from "react-icons/bs";
import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";
import { Link } from "react-router-dom";
import Category from "../components/UI/category/Category.jsx";
import "../styles/home.css";
import ProductCard from "../components/UI/product-card/ProductCard.jsx";
import whyImg from "../assets/images/location.png";
import networkImg from "../assets/images/network.png";
import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";
import useGetProducts from "../Hooks/GetProducts.js";


const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState([]);

  
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  const FireBaseProducts =  useGetProducts();
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
      <section>
        <Container  >
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h5 className="mb-3">Easy way to Build your dream pc</h5>
                <h1 className="mb-4 hero__title">
                  <span>Shop PC parts</span> for building your own computer <br />  or upgrading your current
                  <span> system</span>
                </h1>

                <p>
                Whether you need a CPU, GPU or Motherboard, HardwareFolio is your trusted source of computer parts and accessories to take your build to the next level.
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="start__btn d-flex align-items-center justify-content-between" onClick={handleClick}>
                    Start now <i class="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all__parts-btn">
                    <Link to="/pcparts">See all Parts</Link>
                  </button>
                  <button className="PcBuilder-btn">
                    <Link to="/pcbuilder">Pc Builder <BsRocketTakeoff/> </Link>
                  </button>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                    No shipping charge
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="feature__title">Shop High Performance </h2>
              <h2 className="feature__title">
                 <span>Computer Parts</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
              Computer components like the CPU, GPU, and motherboard each play pivotal roles in creating a competent PC. The quality of ones PC parts directly impacts the capabilities of a computer, whether one decides to use it primarily for gaming or as a workstation.
              </p>
              <p className="feature__text">
              And with so many different computer components on the market today, selecting parts for your build can sometimes feel like a daunting task. When shopping for PC parts one needs to consider costs, compatibility between parts, resale value, and more. Lets go over some of the more major components, and what attributes you should look for when shopping.{" "}
              </p>
            </Col>

         
          </Row>
        </Container>
      </section>

      <section>
        <Container >
          <Row>
            <Col lg="12" className="text-center">
              <h2>Pc Parts</h2>
            </Col>

            <Col lg="12" >
              <div ref={ref} className="categorys d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "MyBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "gpu" ? "MyBtnActive" : ""
                  } `}
                  onClick={() => setCategory("gpu")}
                >
                  <BsGpuCard className="text-black"/>

                  GPU
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "cpu" ? "MyBtnActive" : ""
                  } `}
                  onClick={() => setCategory("cpu")}
                >
                  <BsCpuFill className="text-black"/>
                  CPU
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "ram" ? "MyBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ram")}
                >
                  <BsMemory className="text-black"/>
                  RAM
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "accessories" ? "MyBtnActive" : ""
                  } `}
                  onClick={() => setCategory("accessories")}
                >
                  <BsKeyboardFill className="text-black"/>
                  Accessories
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg}  className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why <span>HardwareFolio?</span>
                </h2>
                <p className="tasty__treat-desc">
                HardwareFolio stands out due to its wide selection of high-quality components, competitive pricing, and commitment to delivering exceptional customer service. We believe that by choosing our store, you'll have access to the best PC parts available, receive value for your money, and benefit from our knowledgeable and supportive staff who are always ready to assist you.
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Wide Selection of High-Quality PC Parts
                      
                    </p>
                    <p className="choose__us-desc">
                    At our PC parts store, we pride ourselves on offering a wide selection of high-quality components that cater to the diverse needs of our customers. 
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Competitive Pricing and Value for Money
                    </p>
                    <p className="choose__us-desc">
                    We understand that finding PC parts at affordable prices is essential for our customers. That's why we make it a priority to provide competitive pricing without compromising on the quality of the products we offer.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i>Exceptional Customer Service and Expert Advice{" "}
                    </p>
                    <p className="choose__us-desc">
                    We take great pride in offering exceptional customer service and expert advice to our valued customers.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span> are saying
                </h2>

                <TestimonialSlider />
              </div>
            </Col>

            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
