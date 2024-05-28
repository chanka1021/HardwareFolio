import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";
import ProductCard from "../components/UI/product-card/ProductCard";
import useGetProducts from "../Hooks/GetProducts";
import useGet1ProductById from "../Hooks/Get1ProductById";

const ItemDetails = () => {
  const [tab, setTab] = useState("desc");
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [reviewMsg, setReviewMsg] = useState("");
  const [previewImg, setPreviewImg] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useGetProducts();
  const product = useGet1ProductById(id);

  useEffect(() => {
    if (product && product.imageUrls) {
      setPreviewImg(product.imageUrls[0]);
    }
  }, [product]);

  // Ensure product is available before rendering
  if (!product) {
    return <div>Loading...</div>; 
  }

  const { title, price, category, desc, imageUrls } = product;

  const relatedProduct = products.filter((item) => category === item.category);

  const addItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01: imageUrls[0],
      })
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(enteredName, enteredEmail, reviewMsg);
  };

  return (
    <Helmet title="Product-details">
      <CommonSection title={title} />
      <section>
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-2/12 md:w-2/12">
              <div className="flex flex-col">
                {imageUrls && imageUrls.map((url, index) => (
                  <div
                    className="mb-3 cursor-pointer"
                    onClick={() => setPreviewImg(url)}
                    key={index}
                  >
                    <img src={url} alt="" className="w-1/2" />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-4/12 md:w-4/12">
              <div>
                <img src={previewImg} alt="" className="w-full" />
              </div>
            </div>
            <div className="w-full lg:w-6/12 md:w-6/12 pl-12">
              <div>
                <h2 className="mb-3 text-2xl">{title}</h2>
                <p className="flex items-center gap-4 mb-5 text-xl">
                  Price: <span>${price}</span>
                </p>
                <p className="font-semibold text-gray-800 flex items-center gap-4">
                  Category: <span className="bg-blue-100 text-gray-800 px-3 py-1 rounded">{category}</span>
                </p>
                <button onClick={addItem} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="w-full mt-8">
              <div className="flex gap-10 py-3 border-b border-gray-200">
                <h6
                  className={`cursor-pointer ${tab === "desc" ? "text-blue-500" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`cursor-pointer ${tab === "rev" ? "text-blue-500" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Review
                </h6>
              </div>
              {tab === "desc" ? (
                <div className="py-6">
                  <p className="text-gray-700 leading-7">{desc}</p>
                </div>
              ) : (
                <div className="mb-6">
                  {/* Review display and form */}
                  <form onSubmit={submitHandler}>
                    <div>
                      <label>Name</label>
                      <input
                        type="text"
                        value={enteredName}
                        onChange={(e) => setEnteredName(e.target.value)}
                      />
                    </div>
                    <div>
                      <label>Email</label>
                      <input
                        type="email"
                        value={enteredEmail}
                        onChange={(e) => setEnteredEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <label>Review</label>
                      <textarea
                        value={reviewMsg}
                        onChange={(e) => setReviewMsg(e.target.value)}
                      ></textarea>
                    </div>
                    <button type="submit">Submit</button>
                  </form>
                </div>
              )}
            </div>
            <div className="w-full mb-5 mt-10">
              <h2 className="text-xl">You might also like</h2>
            </div>
            {relatedProduct.map((item) => (
              <div className="w-full lg:w-3/12 md:w-4/12 sm:w-6/12 px-2 mb-6" key={item.id}>
                <ProductCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default ItemDetails;
