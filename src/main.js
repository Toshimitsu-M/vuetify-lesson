import { createApp, h } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp({
  render: () => h(App)
})
app.use(router)
app.use(vuetify)
app.use(store)
app.mount('#app')
