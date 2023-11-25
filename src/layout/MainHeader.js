

import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import logo from "../assets/images/circle.png"
import favIcon from "../assets/images/favorite-black.png"
import cartIcon from "../assets/images/cart-black.png"
import { upadateCards } from "../state/action-creators"

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();
  const cardItems = useSelector(state => state.reducer?.cardItems)
  const [filteredCards, setFilteredCards] = useState(cardItems);

  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleFavourites = () => {
    const favorites = cardItems.filter((card) => card.favourite);
    dispatch(upadateCards(favorites));

  }


  // Function to handle the search query
  const handleSearch = () => {
    const filtered = cardItems.filter((card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    // setFilteredCards(filtered);
    dispatch(upadateCards(filtered))
  };
  return (
    <>
      <div className='main-header'>
        <Container>
          <Navbar expand="md">
            <NavbarBrand href="/">
              <img src={logo} className='img-fluid logo' alt='' />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar id='mobile-navbar'>
              <Nav className="ml-auto" navbar>
                <div className="search">
                  <input type="text"
                    value={searchQuery}
                    onChange={handleChange}
                    placeholder="Search by title..." className="searchTerm" />
                  <button onClick={handleSearch} type="submit" className="search-btn">
                    search
                  </button>
                </div>
                <ul className='cart-button'>
                  <li onClick={handleFavourites}><Link to="">
                    <img src={favIcon} className='img-fluid icon' alt='' />
                  </Link></li>
                  <li><Link to="/cart"><img src={cartIcon} className='img-fluid icon me-0' alt='' /> </Link></li>
                </ul>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>

      {/* old */}
      {/* <div className='main-header'>
        <div className='container'>
          <div className='main-header__menu'>
            <div className='img'>
              <img src={logo} className='img-fluid logo' alt='' />
            </div>
            <div className='main-header__right'>
              <div className="search">
                <input type="text"
                  value={searchQuery}
                  onChange={handleChange}
                  placeholder="Search by title..." className="searchTerm" />
                <button onClick={handleSearch} type="submit" className="search-btn">
                  search
                </button>
              </div>
              <ul className='cart-button'>
                <li onClick={handleFavourites}><Link to="">
                  <img src={favIcon} className='img-fluid icon' alt='' />
                </Link></li>
                <li><Link to="/cart"><img src={cartIcon} className='img-fluid icon me-0' alt='' /> </Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default MainHeader
