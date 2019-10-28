<template>
    <div>
        <h1>Product List</h1>
        <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif">
        <ul>

            <li v-for="product in products" :key="product.id">{{product.title}} - {{product.price}} - {{product.inventory}}
                <button @click="addProductToCart(product)" :disabled="!productIsInStock(product)">Add to cart</button>

            </li>
        </ul>

    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
    data() {
        return {
            loading: false
        };
    },
    computed: {
        ...mapState({
            products: state => state.products
        }),
        ...mapGetters({
            productIsInStock: "productIsInStock"
        })
    },

    created() {
        this.loading = true;
        this.fetchProducts().then(() => {
            this.loading = false;
        });
    },
    methods: {
        ...mapActions({
            fetchProducts: "fetchProducts",
            addProductToCart: "addProductToCart"
        })
    }
};
</script>

<style lang="scss" scoped>
</style>