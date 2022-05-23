import { createSSRApp } from 'vue'
import App from './App.vue'
import "./assets/tailwind.css";

createSSRApp(App).mount('#app')