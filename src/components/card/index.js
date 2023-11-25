import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setAllCards, upadateCards, updateCardFavourite, addToCart } from '../../state/action-creators';
import dinner from '../../assets/images/food-items/dinner.jpg'
import breakfast from '../../assets/images/food-items/breakfast.jpg'
import dinner2 from '../../assets/images/food-items/dinner2.jpg';
import breakfast2 from '../../assets/images/food-items/breakfast2.jpg';
import dinner3 from '../../assets/images/food-items/dinner3.jpg';
import breakfast3 from '../../assets/images/food-items/breakfast3.jpg';
import dinner4 from '../../assets/images/food-items/dinner4.jpg';
import breakfast4 from '../../assets/images/food-items/breakfast4.jpg'
import lunch from '../../assets/images/food-items/lunch.jpg';
import lunch2 from '../../assets/images/food-items/lunch2.jpg';
import dinner5 from '../../assets/images/food-items/dinner5.jpg';
import fruits from '../../assets/images/food-items/fruits.jpg';
import veg from '../../assets/images/food-items/veg.jpg';
import fruitSalad from '../../assets/images/food-items/fruit-salad.jpg';
import soup from '../../assets/images/food-items/soup.jpg';
import eggs from '../../assets/images/food-items/eggs.jpg';
import grillVeg from '../../assets/images/food-items/grill-veg.jpg';
import summerDrink from '../../assets/images/food-items/summer.jpg';
import cartIcon from "../../assets/images/cart-black.png";
import favoriteIcon from "../../assets/images/favorite-black.png";


const cardData = [
  {
    "id": 1,
    "img": dinner,
    "title": "Delicious Autumn Dinner",
    "tags": ["Autumn", "Healthy", "Dinner"],
    "favourite": false
  },
  {
    "id": 2,
    "img": breakfast,

    "title": "Scrumptious Spring Breakfast",
    "tags": ["Spring", "Egg free", "Breakfast"],
    "favourite": false
  },
  {
    "id": 3,
    "img": dinner2,
    "title": "Warm Winter Healthy Dinner",
    "tags": ["Winter", "Healthy", "Dinner"],
    "favourite": false
  },
  {
    "id": 4,
    "img": breakfast2,
    "title": "Cozy Winter Egg-free Breakfast",
    "tags": ["Winter", "Egg free", "Breakfast"],
    "favourite": false
  },
  {
    "id": 5,
    "img": dinner3,
    "title": "Fresh Spring Healthy Dinner",
    "tags": ["Spring", "Healthy", "Dinner"],
    "favourite": false
  },
  {
    "id": 6,
    "img": breakfast3,
    "title": "Autumn-inspired Egg-free Breakfast",
    "tags": ["Autumn", "Egg free", "Breakfast"],
    "favourite": false
  },
  {
    "id": 7,
    "img": dinner4,
    "title": "Vibrant Spring Dinner Delight",
    "tags": ["Spring", "Healthy", "Dinner"],
    "favourite": false
  },
  {
    "id": 8,
    "img": breakfast4,
    "title": "Autumn Harvest Breakfast Bowl",
    "tags": ["Autumn", "Egg free", "Breakfast"],
    "favourite": false
  },
  {
    "id": 9,
    "img": lunch,
    "title": "Cozy Winter Comfort Food",
    "tags": ["Winter", "Healthy", "Dinner"],
    "favourite": false
  },
  {
    "id": 10,
    "img": lunch2,
    "title": "Refreshing Spring Smoothie",
    "tags": ["Spring", "Egg free", "Breakfast"],
    "favourite": false
  },
  {
    "id": 11,
    "img": dinner5,
    "title": "Light and Healthy Summer Dinner",
    "tags": ["Summer", "Healthy", "Dinner"],
    "favourite": false
  },
  {
    "id": 12,
    "img": fruits,
    "title": "Summer Fruits Granola Bowl",
    "tags": ["Summer", "Egg free", "Breakfast"],
    "favourite": false
  },
  {
    "id": 13,
    "img": veg,
    "title": "Autumn Roasted Vegetables",
    "tags": ["Autumn", "Healthy", "Dinner"],
    "favourite": false
  },
  {
    "id": 14,
    "img": fruitSalad,
    "title": "Spring Fresh Fruit Salad",
    "tags": ["Spring", "Egg free", "Breakfast"],
    "favourite": false
  },
  {
    "id": 15,
    "img": soup,
    "title": "Hearty Winter Soup",
    "tags": ["Winter", "Healthy", "Dinner"],
    "favourite": false
  },
  {
    "id": 16,
    "img": eggs,
    "title": "Eggs Benedict Breakfast",
    "tags": ["Spring", "Egg free", "Breakfast"],
    "favourite": false
  },
  {
    "id": 17,
    "img": grillVeg,
    "title": "Grilled Summer Vegetables",
    "tags": ["Summer", "Healthy", "Dinner"],
    "favourite": false
  },
  {
    "id": 18,
    "img": summerDrink,
    "title": "Refreshing Summer Smoothie",
    "tags": ["Summer", "Egg free", "Breakfast"],
    "favourite": false
  }

];


const Card = () => {
  const reducer_redux = useSelector(state => state.reducer);

  console.log(reducer_redux, "reducer====>");

  const cardItems = useSelector(state => state.reducer.cardItems);
  const cart = useSelector(state => state.reducer.cart);


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAllCards(cardData));
    dispatch(upadateCards(cardData))
    // dispatch(settingEmptyCart([]))

  }, [])
  const handleAddToCart = (cardId) => {
    const cartItem = cardItems?.find((card) => card.id === cardId);
    if (cartItem && !cart?.includes(cardId)) {
      dispatch(addToCart(cardId));
    }
  };


  const handleFavoriteClick = (cardId) => {
    dispatch(updateCardFavourite(cardId));
  }; return (

    <>
      <div className='col-md-9 col-lg-9'>
        <div className='row'>
          {cardItems?.map((card) => {
            const itemCountInCart = cart.filter((cartItem) => cartItem.id === card.id).length;
            return (
              <div className='col-md-6 col-lg-6 col-xl-4 product-col'>
                <div className='product-card' key={card.id}>
                  <img src={card.img} alt="" />
                  <div className='product-card__body'>
                    <h3 className='title'>{card.title}</h3>
                    <div className='button-container'>
                      <button
                        className={card.favourite ? 'favourite-button favourited' : 'favourite-button'}
                        disabled={card.favourite}
                        onClick={() => handleFavoriteClick(card.id)}
                      >
                        <img src={favoriteIcon} className='img-fluid icon' alt="" />{card.favourite ? 'Favourited' : 'Favourite'}
                      </button>
                      <button className='cart-button' onClick={() => handleAddToCart(card.id)}>
                        <img src={cartIcon} className='img-fluid icon' alt="" />Add
                        <span className='cart-item-count'>{itemCountInCart}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className='card-wrapper'>
        {cardItems?.map((card) => {
          const itemCountInCart = cart.filter((cartItem) => cartItem.id === card.id).length;
          return (
            <div className='card' key={card.id}>
              <img src={card.img} alt="" />
              <h3>{card.title}</h3>
              <div className='button-container'>
                <button
                  className={card.favourite ? 'favourite-button favourited' : 'favourite-button'}
                  disabled={card.favourite}
                  onClick={() => handleFavoriteClick(card.id)}
                >
                  {card.favourite ? 'Favourited' : 'Favourite'}
                </button>
                <button className='cart-button' onClick={() => handleAddToCart(card.id)}>
                  Add To Cart
                  <span className='cart-item-count'>{itemCountInCart}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div> */}
    </>
  )
}

export default Card
