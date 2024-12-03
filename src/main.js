import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { i18n } from '@/plugins/i18n'

import App from './App.vue'
import router from './router'
// Import all of Bootstrap's JS
import 'bootstrap'

// Import our custom CSS
import '@/designs/style/scss/main.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
