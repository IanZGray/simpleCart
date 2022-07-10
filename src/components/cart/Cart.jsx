import {Accordion} from "react-bootstrap";
import React from 'react';
import useDataContext from '../../hooks/useDataContext';


const Cart = ({data}) => {
  const {cartData, setCartData} = useDataContext();
    const [items, setItems] = React.useState(data);
    const [cart, setCart] = React.useState([]);

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
            <Accordion.Header>{prod.name} ${prod.cost}</Accordion.Header>
              <Accordion.Body>
                Country: {prod.country} - Stock: <button onClick={() => deleteCartItem(prod)}>Delete</button>
              </Accordion.Body>

          </Accordion.Item>


        )

    })
    return (
      <>
      <Accordion defaultActiveKey="0">{accordionItems}</Accordion>
      </>
    );
  };

  export default Cart;