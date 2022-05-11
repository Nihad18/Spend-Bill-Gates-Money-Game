import { useState, useEffect } from "react";
import products from "./products.json";
import Product from "./components/Product";
import Header from "./components/Header";
import Basket from "./components/Basket";

function App() {
  const [money, setMoney] = useState(100000000000);

  const [total, setTotal] = useState(0);

  const [basket, setBasket] = useState([]);

  const resetBasket = () => {
    setBasket([]);
    setMoney(100000000000);
  };
  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return acc + item.price * item.count;
      }, 0)
    );
  }, [basket]);
  return (
    <>
      <Header money={money} total={total} />
      <div className='products'>
        {products.map((product) => (
          <Product
            key={product.id}
            total={total}
            setTotal={setTotal}
            product={product}
            basket={basket}
            setBasket={setBasket}
            money={money}
            setMoney={setMoney}
          />
        ))}
      </div>
      <Basket
        basket={basket}
        setBasket={setBasket}
        total={total}
        resetBasket={resetBasket}
      />
    </>
  );
}

export default App;
