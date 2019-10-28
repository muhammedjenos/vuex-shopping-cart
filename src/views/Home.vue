<template>
    <div class="home">
        <ProductList></ProductList>
        <hr>
        <ShoppingCart></ShoppingCart>
    </div>
</template>

<script>
// @ <script>
import ProductList from "@/components/ProductList";
import ShoppingCart from "@/components/ShoppingCart";

export default {
    name: "home",
    components: {
        ProductList,
        ShoppingCart
    }
};
</script>
