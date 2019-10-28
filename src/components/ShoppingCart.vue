<template>
    <div>
        <h1>Shopping Cart</h1>
        <ul>
            <li v-for="product in products" :key="product.id">
                {{ product.title }} - {{product.price}} - {{product.quantity}}
            </li>
        </ul>
        <h2>Total: {{total}}</h2>
        <button @click="checkout">Check Out</button>
        <p v-if="checkoutStatus">{{checkoutStatus}}</p>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
    computed: {
        ...mapGetters({
            products: "cartProducts",
            total: "cartTotal"
        }),
        ...mapState({
            checkoutStatus: "checkoutStatus"
        })
    },
    methods: {
        ...mapActions(["checkout"])
    }
};
</script>

<style lang="scss" scoped>
</style>