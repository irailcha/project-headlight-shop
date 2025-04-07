import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/global.scss';
import {store} from './redux/store.js';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <ErrorBoundary>
      <HashRouter>
        <App />
      </HashRouter>
</ErrorBoundary>
    </Provider>
  </StrictMode>

)
