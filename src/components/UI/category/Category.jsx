import React from "react";

import categoryImg01 from "../../../assets/images/category-01.png";
import categoryImg02 from "../../../assets/images/category-02.png";
import categoryImg03 from "../../../assets/images/category-03.png";
import categoryImg04 from "../../../assets/images/category-04.png";

const categoryData = [
  {
    display: "Completed Builds",
    imgUrl: categoryImg01,
  },
  {
    display: "PC Parts",
    imgUrl: categoryImg02,
  },
  {
    display: "Accessories",
    imgUrl: categoryImg03,
  },
  {
    display: "Displays",
    imgUrl: categoryImg04,
  },
];

const Category = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-wrap -mx-4">
        {categoryData.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className="bg-blue-100 p-3 rounded-lg cursor-pointer transform transition-transform hover:-translate-y-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center">
                  <img src={item.imgUrl} alt="category item" className="w-10 h-10 p-1" />
                </div>
                <h6 className="text-base font-semibold">{item.display}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
