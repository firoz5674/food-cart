import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setAllCards, upadateCards, updateCardFavourite, addToCart } from '../../state/action-creators';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
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

import img1 from "../../assets/images/food-images/automan-dinner1.jpg";
import img2 from "../../assets/images/food-images/automan-dinner2.jpg";
import img3 from "../../assets/images/food-images/automan-dinner3.jpg";
import img4 from "../../assets/images/food-images/automan-dinner4.jpg";
import img5 from "../../assets/images/food-images/winter-dinner1.jpg";
import img6 from "../../assets/images/food-images/winter-dinner2.jpg";

import img7 from "../../assets/images/food-images/spring-breakfast1.jpg";
import img8 from "../../assets/images/food-images/spring-breakfast2.jpg";
import img9 from "../../assets/images/food-images/spring-breakfast3.jpg";
import img10 from "../../assets/images/food-images/spring-breakfast4.jpg";
import img11 from "../../assets/images/food-images/spring-breakfast5.jpg";
import img12 from "../../assets/images/food-images/spring-breakfast6.jpg";

import img13 from "../../assets/images/food-images/winter-dinner1.jpg";
import img14 from "../../assets/images/food-images/winter-dinner2.jpg";
import img15 from "../../assets/images/food-images/winter-dinner3.jpg";
import img16 from "../../assets/images/food-images/winter-dinner4.jpg";
import img17 from "../../assets/images/food-images/winter-dinner5.jpg";
import img18 from "../../assets/images/food-images/winter-dinner6.jpg";

import img19 from "../../assets/images/food-images/egg-free1.jpg";
import img20 from "../../assets/images/food-images/egg-free2.jpg";
import img21 from "../../assets/images/food-images/egg-free3.jpg";
import img22 from "../../assets/images/food-images/egg-free4.jpg";
import img23 from "../../assets/images/food-images/egg-free5.jpg";
import img24 from "../../assets/images/food-images/egg-free6.jpg";

import img25 from "../../assets/images/food-images/fresh-spring-dinner.jpg";
import img26 from "../../assets/images/food-images/fresh-spring-dinner2.jpg";
import img27 from "../../assets/images/food-images/fresh-spring-dinner3.jpg";
import img28 from "../../assets/images/food-images/fresh-spring-dinner4.jpg";
import img29 from "../../assets/images/food-images/fresh-spring-dinner5.jpg";
import img30 from "../../assets/images/food-images/fresh-spring-dinner6.jpg";

import img31 from "../../assets/images/food-images/automn-eggfree1.jpg";
import img32 from "../../assets/images/food-images/automn-eggfree2.jpg";
import img33 from "../../assets/images/food-images/automn-eggfree3.jpg";
import img34 from "../../assets/images/food-images/automn-eggfree4.jpg";
import img35 from "../../assets/images/food-images/automn-eggfree5.jpg";
import img36 from "../../assets/images/food-images/automn-eggfree6.jpg";

import img37 from "../../assets/images/food-images/vibrant-dinner1.jpg";
import img38 from "../../assets/images/food-images/vibrant-dinner2.jpg";
import img39 from "../../assets/images/food-images/vibrant-dinner3.jpg";
import img40 from "../../assets/images/food-images/vibrant-dinner4.jpg";
import img41 from "../../assets/images/food-images/vibrant-dinner5.jpg";
import img42 from "../../assets/images/food-images/vibrant-dinner6.jpg";

import img43 from "../../assets/images/food-images/automn-breakfast-bowl.jpg";
import img44 from "../../assets/images/food-images/automn-breakfast-bowl2.jpg";
import img45 from "../../assets/images/food-images/automn-breakfast-bowl3.jpg";
import img46 from "../../assets/images/food-images/automn-breakfast-bowl4.jpg";
import img47 from "../../assets/images/food-images/automn-breakfast-bowl5.jpg";
import img48 from "../../assets/images/food-images/automn-breakfast-bowl6.jpg";

import img49 from "../../assets/images/food-images/cozy-winter-food1.jpg";
import img50 from "../../assets/images/food-images/cozy-winter-food2.jpg";
import img51 from "../../assets/images/food-images/cozy-winter-food3.jpg";
import img52 from "../../assets/images/food-images/cozy-winter-food4.jpg";
import img53 from "../../assets/images/food-images/cozy-winter-food5.jpg";
import img54 from "../../assets/images/food-images/cozy-winter-food6.jpg";

import img55 from "../../assets/images/food-images/refreshing-smoothie1.jpg";
import img56 from "../../assets/images/food-images/refreshing-smoothie2.jpg";
import img57 from "../../assets/images/food-images/refreshing-smoothie3.jpg";
import img58 from "../../assets/images/food-images/refreshing-smoothie4.jpg";
import img59 from "../../assets/images/food-images/refreshing-smoothie5.jpg";
import img60 from "../../assets/images/food-images/refreshing-smoothie6.jpg";

import img61 from "../../assets/images/food-images/light-summer-dinner1.jpg";
import img62 from "../../assets/images/food-images/light-summer-dinner2.jpg";
import img63 from "../../assets/images/food-images/light-summer-dinner3.jpg";
import img64 from "../../assets/images/food-images/light-summer-dinner4.jpg";
import img65 from "../../assets/images/food-images/light-summer-dinner5.jpg";
import img66 from "../../assets/images/food-images/light-summer-dinner6.jpg";

import img67 from "../../assets/images/food-images/summer-fruits-bowl1.jpg";
import img68 from "../../assets/images/food-images/summer-fruits-bowl2.jpg";
import img69 from "../../assets/images/food-images/summer-fruits-bowl3.jpg";
import img70 from "../../assets/images/food-images/summer-fruits-bowl4.jpg";
import img71 from "../../assets/images/food-images/summer-fruits-bowl5.jpg";
import img72 from "../../assets/images/food-images/summer-fruits-bowl6.jpg";

import offer2 from "../../assets/images/offer2.jpg";
import offer5 from "../../assets/images/food5.jpg";
import offer4 from "../../assets/images/food4.jpg";
import ProductSlider from '../product-slider/ProductSlider';
import Filter from '../filter';


const cardData = [
  {
    "id": 1,
    "img": dinner,
    "title": "Delicious Autumn Dinner",
    "tags": ["Autumn", "Healthy", "Dinner"],
    "favourite": false,
    "imgesArray":[img1,img2,img3,img4,img5,img6]

  },
  {
    "id": 2,
    "img": breakfast,

    "title": "Scrumptious Spring Breakfast",
    "tags": ["Spring", "Egg free", "Breakfast"],
    "favourite": false,
    "imgesArray":[img7,img8,img9,img10,img11,img12]

  },
  {
    "id": 3,
    "img": dinner2,
    "title": "Warm Winter Healthy Dinner",
    "tags": ["Winter", "Healthy", "Dinner"],
    "favourite": false,
    "imgesArray":[img13,img14,img15,img16,img17,img18]

  },
  {
    "id": 4,
    "img": breakfast2,
    "title": "Cozy Winter Egg-free Breakfast",
    "tags": ["Winter", "Egg free", "Breakfast"],
    "favourite": false,
    "imgesArray":[img19,img20,img21,img22,img23,img24]

  },
  {
    "id": 5,
    "img": dinner3,
    "title": "Fresh Spring Healthy Dinner",
    "tags": ["Spring", "Healthy", "Dinner"],
    "favourite": false,
    "imgesArray":[img25,img26,img27,img28,img29,img30]

  },
  {
    "id": 6,
    "img": breakfast3,
    "title": "Autumn-inspired Egg-free Breakfast",
    "tags": ["Autumn", "Egg free", "Breakfast"],
    "favourite": false,
    "imgesArray":[img31,img32,img33,img34,img35,img36]

  },
  {
    "id": 7,
    "img": dinner4,
    "title": "Vibrant Spring Dinner Delight",
    "tags": ["Spring", "Healthy", "Dinner"],
    "favourite": false,
    "imgesArray":[img37,img38,img39,img40,img41,img42]

  },
  {
    "id": 8,
    "img": breakfast4,
    "title": "Autumn Harvest Breakfast Bowl",
    "tags": ["Autumn", "Egg free", "Breakfast"],
    "favourite": false,
    "imgesArray":[img43,img44,img45,img46,img47,img48]

  },
  {
    "id": 9,
    "img": lunch,
    "title": "Cozy Winter Comfort Food",
    "tags": ["Winter", "Healthy", "Dinner"],
    "favourite": false,
    "imgesArray":[img49,img50,img51,img52,img53,img54]

  },
  {
    "id": 10,
    "img": lunch2,
    "title": "Refreshing Spring Smoothie",
    "tags": ["Spring", "Egg free", "Breakfast"],
    "favourite": false,
    "imgesArray":[img55,img56,img57,img58,img59,img60]

  },
  {
    "id": 11,
    "img": dinner5,
    "title": "Light and Healthy Summer Dinner",
    "tags": ["Summer", "Healthy", "Dinner"],
    "favourite": false,
    "imgesArray":[img61,img62,img63,img64,img65,img66]

  },
  {
    "id": 12,
    "img": fruits ,
    "title": "Summer Fruits Granola Bowl",
    "tags": ["Summer", "Egg free", "Breakfast"],
    "favourite": false,
    "imgesArray":[img67,img68,img69,img70,img71,img72]

  },
  {
    "id": 13,
    "img": veg,
    "title": "Autumn Roasted Vegetables",
    "tags": ["Autumn", "Healthy", "Dinner"],
    "favourite": false,
    "imgesArray":[img1,img2,img3,img4,img5,img6]

  },
  {
    "id": 14,
    "img": fruitSalad,
    "title": "Spring Fresh Fruit Salad",
    "tags": ["Spring", "Egg free", "Breakfast"],
    "favourite": false,
    "imgesArray":[img1,img2,img3,img4,img5,img6]

  },
  {
    "id": 15,
    "img": soup,
    "title": "Hearty Winter Soup",
    "tags": ["Winter", "Healthy", "Dinner"],
    "favourite": false,
    "imgesArray":[img1,img2,img3,img4,img5,img6]

  },
  {
    "id": 16,
    "img": eggs,
    "title": "Eggs Benedict Breakfast",
    "tags": ["Spring", "Egg free", "Breakfast"],
    "favourite": false,
    "imgesArray":[img1,img2,img3,img4,img5,img6]

  },
  {
    "id": 17,
    "img": grillVeg,
    "title": "Grilled Summer Vegetables",
    "tags": ["Summer", "Healthy", "Dinner"],
    "favourite": false,
    "imgesArray":[img1,img2,img3,img4,img5,img6]

  },
  {
    "id": 18,
    "img": summerDrink,
    "title": "Refreshing Summer Smoothie",
    "tags": ["Summer", "Egg free", "Breakfast"],
    "favourite": false,
    "imgesArray":[img1,img2,img3,img4,img5,img6]

  }

];



const Card = () => {

  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const toggle = () => setModal(!modal);
  const reducer_redux = useSelector(state => state.reducer);

  console.log(reducer_redux, "reducer====>");

  const cardItems = useSelector(state => state.reducer.cardItems);
  const cart = useSelector(state => state.reducer.cart);



  const showModalData = (description) => {
    setModalData(description);

    setModal(!modal)


  } 

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
      {/* product modal */}
      <Modal isOpen={modal} toggle={toggle} centered className='product-modal'>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
          <div className='images-wrapper'>
            
            {
            modalData?.imgesArray?.map((element)=> {
            return(<div className='image'>
              <img src={element} className='img-fluid' alt="" />
              
            </div>)
           })}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>

      <main className='main-content'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 col-lg-3'>
            <div className='filter-section'>
              <Filter />
            </div>
            <ProductSlider />
            <div className='offer-image'>
              <img src={offer4} className='img-fluid' alt="offer1" />
              <img src={offer2} className='img-fluid' alt="offer2" />
              <img src={offer5} className='img-fluid' alt="offer3" />
            </div>
          </div>
          <div className='col-md-9 col-lg-9'>
            <div className='row'>
              {cardItems?.map((card) => {

                const itemCountInCart = cart.filter((cartItem) => cartItem.id === card.id).length;
                return (
                  <div className='col-md-6 col-lg-6 col-xl-4 product-col'>
                    <div className='product-card' key={card.id} >
                      <img src={card.img} onClick={()=>showModalData(card)} className='img-fluid' alt="" />
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
        </div>
      </div>
      </main>
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