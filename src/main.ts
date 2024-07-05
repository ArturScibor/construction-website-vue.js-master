import { createApp } from "vue";
import App from "./App.vue";
import routers from "../src/routers";
import store from './storage/index'

const app = createApp(App);
app.use(routers);
app.use(store)
app.mount("#app");
