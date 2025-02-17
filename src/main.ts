import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'


import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
    BiSpotify,
    CoLinkedinIn,
    BiFacebook,
    BiInstagram,
    BiCalendarFill,
    BiClockFill,
    IoLocationSharp
} from "oh-vue-icons/icons";
addIcons(
    BiSpotify,
    CoLinkedinIn,
    BiFacebook,
    BiInstagram,
    BiCalendarFill,
    BiClockFill,
    IoLocationSharp
);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(router);
app.mount('#app');
