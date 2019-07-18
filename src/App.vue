<template>
    <div id="hello">


        <button v-on:click="updateMessage"> Update Message</button>

        <button v-on:click="addUser({ id:13, name:'Tanya', age:45})">Add user</button>

        <button v-on:click="addProduct ()">Add Product</button>

        <h1>{{ message }} - {{ countProducts }}</h1>

        <ul>
            <li v-for="user in getUser" v-bind:key="user.id" >
                {{ user.name}}
            </li>
            <li v-for="products in getProducts" v-bind:key="products.id" class="product">
                {{ products.name}}- {{ products.price}}
            </li>
        </ul>



    </div>
</template>

<script>

    import { mapState, mapGetters, mapActions, mapMutations } from "vuex"

    export default {
        name: "Helloworld",

        computed: {

            ...mapState(["message", "users"]),
            ...mapGetters(["getUser","countProducts","getProducts"])

        },

        methods: {

            ...mapActions(["updateMessage","addProduct"]),
            ...mapMutations(["addUser"])
        }

    }




</script>
<style>


    .product
    {
        margin-left: 100px;
    }


</style>