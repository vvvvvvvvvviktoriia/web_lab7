import { createApp } from 'vue';
import App from './App.vue';
import VueTheMask from 'vue-the-mask'; // Импортируйте VueTheMask до создания экземпляра Vue.

const app = createApp(App);

app.use(VueTheMask); // Вызовите Vue.use(VueTheMask) здесь.

app.mount('#app');
