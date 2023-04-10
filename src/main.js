import { createApp } from 'vue';
import App from './App.vue';

// import './assets/index.scss';
import './assets/css/style.css';
import router from './router';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import '@fortawesome/fontawesome-free';

library.add(fas);

createApp(App).use(router).component('fa', FontAwesomeIcon).mount('#app');