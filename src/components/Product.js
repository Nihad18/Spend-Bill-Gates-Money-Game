import React from "react";

function Product({
  product,
  basket,
  setBasket,
  money,
  setMoney,
  total,
  setTotal,
}) {
  const basketItem = basket.find((item) => item.id === product.id);

  const addToBasket = () => {
    if (basketItem) {
      setBasket(
        basket.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        )
      );
    } else {
      setBasket([...basket, { ...product, count: 1 }]);
      setTotal(total + product.price);
    }
    setMoney(money - product.price);
  };

  const removeFromBasket = () => {
    if (basketItem) {
      setBasket(
        basket.map((item) =>
          item.id === product.id ? { ...item, count: item.count - 1 } : item
        )
      );
    }
    setMoney(money + product.price);
  };
  return (
    <div className='product'>
      <img src={product.img} alt='product img' />
      <h3 className='product-title'>{product.title}</h3>
      <h4 className='product-price'>${product.price.toLocaleString()}</h4>
      <div className='action'>
        <button
          className='sell'
          disabled={!basketItem || basketItem.count === 0}
          onClick={removeFromBasket}
        >
          Sell
        </button>
        <span className='amount'>{(basketItem && basketItem.count) || 0}</span>
        <button
          className='buy'
          disabled={money - product.price < 0}
          onClick={addToBasket}
        >
          Buy
        </button>
      </div>
    </div>
  );
}

export default Product;
