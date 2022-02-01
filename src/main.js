import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import 'normalize.css';
import { store } from './store/main.store';
import { LazyLoading } from './directives/lazy-loading';
import './main.css';

const app = createApp(App);
app.use(store);
app.use(router);
app.directive(LazyLoading.name, LazyLoading);

app.mount('#app');
