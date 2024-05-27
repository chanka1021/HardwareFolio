import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";
import "../styles/pagination.css";

import useGetProducts from "../Hooks/GetProducts";

const Pcparts = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [pageNumber, setPageNumber] = useState(0);
  const [products, setProducts] = useState([]);

  const FireBaseProducts = useGetProducts();
  useEffect(() => {
    setProducts(FireBaseProducts);
  }, [FireBaseProducts]);

  const searchedProduct = products.filter((item) => {
    if (searchTerm.value === "") {
      return item;
    }
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    } else {
      return console.log("not found");
    }
  });

  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Helmet title="Pc Parts">
      <CommonSection title="Pc Parts" />

      <section>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex items-center justify-between mb-5 lg:mb-0">
              <input
                type="text"
                placeholder="I'm looking for...."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="py-2 px-4 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span>
                <i className="ri-search-line"></i>
              </span>
            </div>
            <div className="text-end">
              <select className="w-full py-2 px-4 border border-gray-300 rounded-md">
                <option>Default</option>
                <option value="ascending">Alphabetically, A-Z</option>
                <option value="descending">Alphabetically, Z-A</option>
                <option value="high-price">High Price</option>
                <option value="low-price">Low Price</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {displayPage.map((item) => (
              <div key={item.id}>
                <ProductCard item={item} />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <ReactPaginate
              pageCount={pageCount}
              onPageChange={changePage}
              previousLabel={"Prev"}
              nextLabel={"Next"}
              containerClassName="paginationBttns"
            />
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Pcparts;
