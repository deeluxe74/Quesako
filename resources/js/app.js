require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './Index';
import router from './routes';

require('./bootstrap');

window.Vue = require('vue');

Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    router,
    components: {
        "index" : Index
    }
});
