import {Accordion} from "react-bootstrap";
import React from 'react';
import useDataContext from '../../hooks/useDataContext';
import './cart.css';
// TODO - Instead of creating a new object property in the data to store cart quantity, 
// create a new state called cartQuantity and pass it through Context so that it updates the display in cart 
// AND the display and total price in the checkout. 
// make cartQuantity start at 1 per item and make the delete option reverse the cartQuantity counter
// and if its at '1' when you click remove, delete it as normal. 
// checkout should display cartQuantity and price, and calculate and display cartQuantity * price, then calculate grand total
// cartQuantity should be an object with a property of quantity, so it can be passed through every iteration of the cart


const Cart = ({data}) => {
  const {cartData, setCartData} = useDataContext();
  const [items, setItems] = React.useState(data);
  const [cart, setCart] = React.useState([]);
  const {cartQuantity, setCartQuantity} = useDataContext();


  // const cartItem = 0;
  // const updateCartQuantity = cartQuantity.map((cartItem) => {
  //   if(data.instock === cartItem.instock){
  //     cartItem.instock ++;
  //     console.log(cartItem);
  //   }
  //   return cartItem;  
  // });


  const deleteCartItem = (product) => {
    // this is the index in the cart not in the Product List
    const updatedData = cartData.filter((item) => item.id !== product.id);
    setCartData(updatedData);
    // let newCart = cart.filter((item, i) => delIndex !== i);
    // let target = cart.filter((item, index) => delIndex === index);
    // let newItems = items.map((item, index) => {
    //   if (item.name === target[0].name) item.instock = item.instock + 1;
    //   return item;
    // });
    // setCart(newCart);
    // setItems(newItems);
  };


  const accordionItems = cartData.map((prod, index) => {
    return (
      <Accordion.Item key={index} eventKey={index}>
        <Accordion.Header >{prod.name} ${prod.cost} {cartQuantity}</Accordion.Header>
          <Accordion.Body >
            Country: {prod.country} - Stock: <button onClick={() => deleteCartItem(prod)}>Delete</button>
          </Accordion.Body>

        </Accordion.Item>


    )

  })

  return (
    <div className="col-4 cartAlign">
      <h2>Cart</h2>
    <Accordion defaultActiveKey="0">{accordionItems}</Accordion>
    </div>
  );
};

  export default Cart;