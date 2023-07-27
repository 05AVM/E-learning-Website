import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Auth0Provider
    domain="dev-vmx4eoyanueonh1x.us.auth0.com"
    clientId="Pn8suPr9tJwi97UhcpJUWTdir71tiT4s"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  ></Auth0Provider>
  </React.StrictMode>,
)
