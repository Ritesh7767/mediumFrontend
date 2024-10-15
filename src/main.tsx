import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import LoginProvider from './context/LoginProvider.tsx'
import { EmailProvider } from './context/EmailProvider.tsx'
import { Provider } from 'react-redux'
import store from './redux/store/store.ts'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <LoginProvider>
        <EmailProvider>
          <App />
        </EmailProvider>
      </LoginProvider>
    </Provider>
  </BrowserRouter>
)
