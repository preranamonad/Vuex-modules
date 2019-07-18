import Vue from 'vue';
import Vuex from 'vuex';

import productModules from './productModules';



Vue.use(Vuex);

const store = new Vuex.Store({

    modules :
        {
           products: productModules
        },


    state: {
        message: "Hello, From Vuex",
        users: [
            {
                id:11,
                name: "Prerna",
                age : 41
            },
            {
                id:12,
                name: "Pragti",
                age : 43
            }
        ]

    },

    mutations: {

        updateMessage(state){
            state.message = "Vuex update from message"
        },

        addUser(state,payload){
            state
                .users
                .push(payload)
        }


    },

    actions: {
        updateMessage (context) {
            context.commit('updateMessage');
        }

    },


    getters: {

        getUser(state){
            return state
                .users
                .filter(user=>user.age>30);
        }
    }

})

export default store;

