import products from "../data/db";
import { createContext, useState} from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [data, setData] = useState(products);
    const [cartData, setCartData] = useState([]);
    const [cartQuantity, setCartQuantity] = useState([]);

    return (
        <>
        <DataContext.Provider value={{ data, setData, cartData, setCartData, cartQuantity, setCartQuantity }}>
            {children}
        </DataContext.Provider>
        </>
    )
}

export default DataContext;