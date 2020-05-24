import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Order from "../Product/Order";
import Product from "../Product/Product";
import Cart from "../Product/Cart";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Navigation />
        <hr />
        <Route path="/" component={HomePage} />
        <Route path="/cart" component={Cart} />
        <Route path="/order" component={Order} />
        <Route path="/product" component={Product} />
        <Footer />
      </>
    );
  }
}
