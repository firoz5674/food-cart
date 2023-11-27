import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../state/action-creators';
import removeIcon from "../../assets/images/remove.png";
import checkIcon from "../../assets/images/check.png";


const Cart = () => {
  const cart = useSelector(state => state.reducer.cart);
  const dispatch = useDispatch();


  const handleRemoveFromCart = (cardId) => {
    const cartItemIndex = cart.findIndex((item) => item.id === cardId);
    if (cartItemIndex !== -1) {

      dispatch(removeFromCart(cartItemIndex)); // Pass the index to the action
    }
  };

  return (
    // <section className='order-placed'>
    //   <div className='container'>
    //     <div className='row'>
    //       <div className='col-md-12 col-lg-12 text-center'>
    //         <img src={checkIcon} className='img-fluid checkIcon' alt='' />
    //         <h3>Your order has been placed successfully! You can click below to explore more food items.</h3>
    //         <button className='home-btn'>Back to Home</button>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className='cart-main'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-10 col-lg-10'>
            <div className='row'>
              {cart && cart.map((card) => {
                return (
                  <div className='col-md-6 col-lg-6'>
                    <div className='cart'>
                      <div className='img'>
                        <img src={card.img} className='img-fluid' alt='' />
                      </div>
                      <div className='cart-content'>
                        <h2 className='title'>{card.title}</h2>
                        <div className='cart-btns'>
                          <img src={removeIcon} onClick={() => handleRemoveFromCart(card.id)} className='img-fluid removeIcon' alt='' />
                          <button className='place-btn'>Place Order</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart
