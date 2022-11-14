const getCart = () => {
    let shoppingCart = {};
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}
const addToDb = (id) => {
    let shoppingCart = {};
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    shoppingCart[id] = 1;
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}
export {
    addToDb,
    getCart
};