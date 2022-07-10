import './restock.css';

const Restock = () => {

    const api = "http://localhost:1337/products"
    doFetch(api);
    let newItems = data.map((item) => {
        let { id, name, country, cost, instock, cartQuantity } = item;
        return { id, name, country, cost, instock, cartQuantity }
    })

    return (
        <button >Restock Shelves</button>
    )

}

export default Restock;