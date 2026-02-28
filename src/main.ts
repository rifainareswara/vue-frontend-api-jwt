//import createApp from Vue
import { createApp } from 'vue';

//import component App
import App from './App.vue';

//import VueQueryPlugin
import { VueQueryPlugin } from '@tanstack/vue-query'

//create App Vue
const app = createApp(App);

//use VueQueryPlugin
app.use(VueQueryPlugin);

app.mount('#app');
