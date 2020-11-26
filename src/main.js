import Vue from 'vue'
import App from './App.vue'
import router from "./router"
//import ElementUI, { PageHeader , Message} from 'element-ui'

import VueLazyLoad from 'vue-lazyload'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'



//Vue.use(ElementUI);
Vue.use(Vuetify);
Vue.use(VueLazyLoad,{
  //loading:'/imgs/loading-svg/loading-cubes.svg'
})
//Vue.prototype.$message = Message;
//Vue.config.productionTip = false
new Vue({
  router,
  vuetify: new Vuetify({
    //theme: { dark: true }
  }),
  render: h => h(App),
 // 'el-page-header':PageHeader
}).$mount('#app')
