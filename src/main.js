import { createApp, h, provide } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import { apolloClient, DefaultApolloClient } from './plugins/apollo'

const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App)
})
app.use(router)
app.use(vuetify)
app.use(store)
app.mount('#app')
