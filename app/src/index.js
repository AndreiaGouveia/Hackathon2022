import React from "react";
import ReactDOM from "react-dom";
import "./CSS/index.css";
import HomePage from "./Components/HomePage";
import Checkout from "./Components/Checkout";
import Layout from "./Components/Layout";
// import cartReducer from "./Components/reducers/cartReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { createBrowserHistory } from "history";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VendorsPage from "./Components/VendorsPage";

const customHistory = createBrowserHistory();
// const store = createStore(cartReducer);

ReactDOM.render(
  // <Provider store={store}>
    <Router history={customHistory}>
      <Layout>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/vendors/:id" element={<VendorsPage/>} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
      </Layout>
    </Router>,
  // </Provider>
  document.getElementById("root")
);
