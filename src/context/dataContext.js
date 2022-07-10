import products from "../data/db";
import { createContext, useState} from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [data, setData] = useState(products);
    const [cartData, setCartData] = useState([]);

    return (
        <>
        <DataContext.Provider value={{ data, setData, cartData, setCartData }}>
            {children}
        </DataContext.Provider>
        </>
    )
}

export default DataContext;