import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './styles/globals.css'
import 'locomotive-scroll/dist/locomotive-scroll.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(vuetify)

app.mount('#app')
