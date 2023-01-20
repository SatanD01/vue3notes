import {createApp} from 'vue'
import routes from './routes'
import {store} from './store/index'
import App from './App.vue'

import './assets/scss/main.scss'

const app = createApp(App)

app.use(routes)
app.use(store)

app.mount('#app')
