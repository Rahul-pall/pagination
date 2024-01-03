import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState(2);
  const pegination = async () => {
    const api = await fetch("https://dummyjson.com/products");
    const data = await api.json();
    if (data && data.products) {
      setProducts(data.products);
    }
  };
  //   console.log(products);

  useEffect(() => {
    pegination();
  }, []);

  return (
    <>
      <div className="main">
        {products.length > 0 && (
          <div className="products_container">
            {products.slice(pagination * 6 - 6, pagination * 6).map((prod) => {
              return (
                <div className="products" key={prod.id}>
                  <img src={prod.thumbnail} alt="" />
                  <p>{prod.title}</p>
                </div>
              );
            })}
          </div>
        )}
        {products.length > 0 && (
          <div className="pagination">
            {/* <span>◀</span> */}
            {[...Array(products.length / 6)].map((_, i) => {
              return(
              <span
              className={pagination==i+1 ? "pagination_hover":"aaa"}
               onClick={()=>setPagination(i+1)}>
               {i + 1}
               </span>
              )
            })}

            {/* <span>▶</span> */}
          </div>
        )}
      </div>
    </>
  );
};

export default Pagination;
