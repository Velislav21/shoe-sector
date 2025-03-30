export function calculateCartPrice(cart) {

    const data = cart.reduce((cartData, currShoe) => {

        cartData.totalCartPrice += (currShoe.shoeId.price * currShoe.quantity);
        cartData.totalCartItemsCount += currShoe.quantity;
        return cartData;

    }, { totalCartPrice: 0, totalCartItemsCount: 0 })

    return { totalCartPrice: +data.totalCartPrice.toFixed(2), totalCartItemsCount: data.totalCartItemsCount }
}