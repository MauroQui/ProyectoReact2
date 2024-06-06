import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./store";
import Layout from "./components/Layout";
import LoginView from "./views/LoginView";
import HomeView from "./views/HomeView";
import NotPage404 from "./views/NotPage404";
import LogoutView from "./views/LogoutView";
import "./App.css";

const appOptions = [
  {
    title: "Home",
    to: "",
  },

  {
    title: "Login",
    to: "login",
  },

  {
    title: "Logout",
    to: "logout",
  },
];

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout options={appOptions} />}>
              <Route path="" element={<HomeView />} />
              <Route path="login" element={<LoginView />} />
              <Route path="logout" element={<LogoutView />} />
              <Route path="perfil" element={<div>Perfil</div>} />
              <Route path="*" element={<NotPage404 />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
