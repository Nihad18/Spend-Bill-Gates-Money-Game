import React from "react";

function Basket({ basket, total, resetBasket }) {
  return (
    <>
      {basket.find((item) => item.count > 0) && (
        <div className="basket">
          <h1>Your Receipt</h1>
          {basket.map((item) => (
            <div key={item.id}>
              {item.count > 0 && (
                <h4 className="basketItems">
                  <span className="itemTitle">{item.title}</span> <span className="count">x{item.count}</span>{" "}
                <span className="basketTotal"> ${(item.price * item.count).toLocaleString()}</span>
                </h4>
              )}
            </div>
          ))}
          <div className="TotalDiv">
          {total > 0 && (
            <h2>
              Total: <span className="total" id='total'>${total.toLocaleString()}</span>
            </h2>
          )}
          </div>
          <button className="resetBasket" onClick={resetBasket}>Reset Basket</button>
        </div>
      )}
    </>
  );
}

export default Basket;
