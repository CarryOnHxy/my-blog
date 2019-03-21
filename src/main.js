import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import {
  bus
} from './lib/bus';
import VueQuillEditor from 'vue-quill-editor'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
//eslint-disable-next-line
import Mock from './mock'
// require styles 引入样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(ElementUI, {
  size: 'small',
  zIndex: 3000
})
Vue.use(VueQuillEditor)
Vue.prototype.$bus = bus;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')