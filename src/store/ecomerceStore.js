import { createStore } from "vuex";
import auth from "./modules/auth";
import cart from "./modules/cart";
import products from "./modules/products";
import orders from "./modules/orders";

const ecommerceStore = createStore({
    modules: {
        auth,
        cart,
        products,
        orders
    }
});

export default ecommerceStore;