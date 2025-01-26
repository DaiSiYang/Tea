import {createApp} from 'vue';
import {createPinia} from 'pinia';
import App from './App.vue';
import router from './router';
import 'element-plus/dist/index.css';
import piniaPersistedstate from 'pinia-plugin-persistedstate';

const app = createApp(App);

// 创建 Pinia 实例
const pinia = createPinia();

// 使用 Pinia 插件
pinia.use(piniaPersistedstate);

app.use(pinia);  // 注册 Pinia
app.use(router);  // 注册 Vue Router

app.mount('#app');
