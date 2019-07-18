
 export default{
    state:{
        message: 'Welcome to product page',
        products: [
            {
                id:1,
                name: "iphone x",
                price: 800
            },
            {
                id:2,
                name: "iphone 5",
                price: 700
            },
            {
                id:3,
                name: "iphone 4",
                price: 600
            },
            {
                id:4,
                name: "iphone 6",
                price: 500
            },
        ]
    },

     mutations: {
         addProduct(state, payload) {

         state
             .products
             .push(payload)
         }
     },

     actions : {
        addProduct({ commit }) {

            commit('addProduct',{
                id:5,
                name: 'samsung',
                price: 200
            });
        }
     },

     getters: {
        countProducts(state) {
            return state.products.length;
        },
         getProducts(state){
            return state.products;
         }

     }



 }
