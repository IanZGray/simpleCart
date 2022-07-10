import { useState } from 'react';
import './list.css';
import useDataContext from '../../hooks/useDataContext';


const List = () => {
    
    // const [items, setItems] = useState([]);
    const {data, setData, setCartData} = useDataContext();

    // useEffect(() => {
    //     setItems(data);
    // }, [data]);


    const addToCart = (prod) => {
        if (prod.instock === 0) 
        return alert("No more products available. Please reastock.");

        const updatedData = data.map((item) => {
            if(item.id === prod.id) {
                item.instock --;
                item.cartQuantity++;
            }
            return item;
        });

        setData(updatedData);
        setCartData((prevData) => [...prevData, prod]);
        
    };

        // const [cart, setCart] = React.useState({});
        const itemList = data.map((prod, index) => {
            let n = index + 1049;
            let uhit = "https://picsum.photos/" + n;


            return (
                <div key={index}>
                    <h5><img 
                    src={uhit} 
                    width={70} 
                    className="imageCircle" 
                    alt="productImage"
                    ></img> 
                    {prod.name} ${prod.cost} Stock:{prod.instock}<button onClick={() => addToCart(prod)} >Add To Cart</button></h5>
                        <p className="itemDetails">
                            Country: {prod.country} 
                        </p> 
                </div>
                
            )
        })

        return (
            <div className="listStyle">
            <h1>Items</h1>
                <ul>
                    {itemList}
                </ul>
            </div>
        )

}


export default List;