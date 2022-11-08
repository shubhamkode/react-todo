import ReactDOM from 'react-dom/client'
import HomePage from './pages/'
import './index.css'

import { Provider } from "react-redux"
import store from "./store";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <HomePage />
  </Provider>
)
