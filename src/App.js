import React, { useMemo, useState } from "react";
import "./Style/base.css"
import "./Style/restyle.css"
import MarketServise from "./Api/api";
import { useFetching } from "./Hooks/useFetching";
import ProductGrid from "./Components/ProductGrid/ProductGrid";
import { getCategories } from "./Utils/getCategories";
import NavBar from "./Components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import { productFilter } from "./Utils/getCorrectProduct";
import Loader from "./UI/Loader/Loader";
import CardGrid from "./Components/CardGrid/CardGrid";

const App = () => {
  const [product, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([]);

  const [fetching, load, error] = useFetching(async () => {
    const response = await MarketServise.getMarket();
    setProduct(response.data.products);
    setCategories([...categories, "all", ...getCategories(response.data.products)])
  });

  const addToCart = (id) => {
    let item = product.filter(el => el.id === id);
    for (let e of item) {
      setCart([...cart, e])
    }
  }



  let routes = categories.map(el => {
    return <Route
      key={el}
      path={`/${el}`}
      element={<ProductGrid addToCart={addToCart}
        products={productFilter(product, el)}
      />}>
    </Route>

  })

  useMemo(() => {
    fetching()
  }, [])

  return <div className="wrap">
    {load ? <Loader /> :
      <>
        <NavBar categories={categories} />
        <Routes>
          <Route path="/cart" element={<CardGrid product={cart} />}></Route>
          {routes}
        </Routes>
      </>
    }

  </div>
}

export default App