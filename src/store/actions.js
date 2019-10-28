import shop from '@/api/shop';
export default { //methods
    fetchProducts({
        commit
    }) {
        return new Promise((resolve) => {
            {
                //make the call
                //call setProducts mutation
                shop.getProducts(products => {
                    commit('setProducts', products)
                    resolve();
                })
            }
        })
    },

    // another action to add product to cart after checking invesntory
    addProductToCart({
        state,
        getters,
        commit
    }, product) {
        if (getters.productIsInStock(product)) {
            const cartItem = state.cart.find(item => item.id === product.id)
            if (!cartItem) {
                //    push product to cart
                commit('pushProductToCart', product.id)
            } else {
                //increment item quantity
                commit('incrementItemQuantity', cartItem)
            }
            commit('decrementProductInventory', product)
        }
    },
    checkout({
        state,
        commit
    }) {
        shop.buyProducts(
            state.cart,
            () => {
                commit('emptyCart')
                commit('setCheckoutStatus', 'success')
            },
            () => {
                commit('setCheckoutStatus', 'fail')
            })
    }
}