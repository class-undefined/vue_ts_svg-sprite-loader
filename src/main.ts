import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import installElementPlus from './plugins/element'
import '@/svg'

const app = createApp(App)
installElementPlus(app)

app.use(store)
  .mount('#app')
