import { useState, useEffect } from "react";
import Products from "api/products.json";
import ProductItem from "components/ui/ProductItem";

function Favorites() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Products);
  }, []);

  return (
    <div className="bg-white py-4 ">
      <div className="container mx-auto">
        <h3 className="font-semibold text-sm mb-3">Favoriler</h3>
        <div className="overflow-hidden rounded-lg grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-9 gap-0.1">
          {products &&
            products.map((product) => <ProductItem product={product} />)}
        </div>
      </div>
    </div>
  );
}

export default Favorites;
