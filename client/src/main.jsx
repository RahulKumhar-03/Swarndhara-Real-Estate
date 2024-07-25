import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-cen1wxneyookra1n.us.auth0.com"
     clientId="gs4Us64Ilk8Dn6PHYVOV7FUAMrr6RsCQ"
     authorizationParams={{
      redirect_uri:"https://swarndhara-real-estate-two.vercel.app"
     }}
     audience="http://localhost:8080"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
