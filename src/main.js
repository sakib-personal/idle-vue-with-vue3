import { createApp } from "vue";
import App from "./App.vue";
import IdleVue from "idle-vue";
import emitter from "tiny-emitter/instance";
const app = createApp(App);
app.use(IdleVue, {
  eventEmitter: {
    $on: (...args) => emitter.on(...args),
    $once: (...args) => emitter.once(...args),
    $off: (...args) => emitter.off(...args),
    $emit: (...args) => emitter.emit(...args)
  },
  idleTime: 1000
});
app.mount("#app");
