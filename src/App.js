import React, { Component } from 'react';
import SearchBar from "./components/SearchBar";
import Groceries from "./components/Groceries";
import CartModal from "./components/Modal";
import axios from "axios";

class App extends Component {

  constructor() {
    super();

    this.state = {
      // allGroceries: [],
      allGroceries: [
        {
          id: 1,
          image: "https://via.placeholder.com/150x150",
          name: "Image One",
          title: "Image One Title"
        },
        {
          id: 2,
          image: "https://via.placeholder.com/170x170",
          name: "Image Two",
          title: "Image Two Title"
        }
      ],
      search: "",
      quantity: 0,
      totalCartQuantity: 0,
      cart: [],
      show: Boolean
    }

    // this.getAPI = this.getAPI.bind(this);
    this.handleFormSearch = this.handleFormSearch.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.newQuantity = this.newQuantity.bind(this);
    this.addNewProductToCart = this.addNewProductToCart.bind(this);
    this.addToTotal = this.addToTotal.bind(this);
  }


  // componentDidMount() {

  //   if (this.state.search === "") {
  //     this.setState({
  //       search: "yogurt"
  //     }, () => this.getAPI())
  //   } else {
  //     this.setState({
  //       search: this.state.search
  //     }, () => this.getAPI())
  //   }
  // }

  // getAPI() {
  //   axios.get("https://api.spoonacular.com/food/products/search?query=" + this.state.search + "&apiKey=3fcefe97ed5842738ec5812e8aa60523")
  //     .then(response => {
  //       console.log(response)
  //       this.setState({
  //         allGroceries: response.data.products,
  //         search: ""
  //       })
  //     })
  // }

  componentDidMount () {
    this.setState({
      show: false
    })
  }
  handleInputChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log({ [name]: value });
  };

  handleFormSearch = (event) => {
    event.preventDefault();
    const { search } = this.state;

    event.preventDefault();
    this.setState({ search: search });
    console.log("Search:" + this.state.search);
    // this.getAPI()
  };

  newQuantity(quantityFromCounter) {
    this.setState({
      quantity: quantityFromCounter
    }, () => {
      console.log("Quantity in App.js from Counter: " + this.state.quantity)
    })
  }

  addNewProductToCart(newProduct) {
    let copyOfCart = this.state.cart;
    const found = copyOfCart.some(item => item.id === newProduct.id);

    if (!found) copyOfCart.push(newProduct);

    else if (found) {
      copyOfCart.forEach((element, index) => {
        if (element.id === newProduct.id) {
          copyOfCart[index] = newProduct
        }
      })
    }

    this.setState({
      cart: copyOfCart
    }, console.log("This is the new cart: " + JSON.stringify(this.state.cart)))

    this.addToTotal();
  }

  addToTotal() {
    let totalQuantity = 0;
    let copyOfCart = this.state.cart;

    for (var i = 0; i < copyOfCart.length; i++) {
      totalQuantity += copyOfCart[i].quantity
      console.log("Total Quantity in loop: " + totalQuantity)
    }

    this.setState({
      totalCartQuantity: totalQuantity
    }, console.log("Total Quantity in set state: " + this.state.totalCartQuantity))
  }

  close = () => {
    this.setState({
      show: false
    })
  }

  open = () => {
    this.setState({
      show: true
    })
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Hello World</h1>
            <p className="lead">Grocery Store App.</p>
            <SearchBar
              search={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSearch={this.handleFormSearch}
            />
            <p>Total Products: {this.state.totalCartQuantity}</p>
            <button onClick={this.open}>Open Modal</button>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <Groceries
              allItems={this.state.allGroceries}
              quantity={this.state.quantity}
              newQuantity={this.newQuantity}
              addNewProductToCart={this.addNewProductToCart}
            />
          </div>
        </div>
        <CartModal
          show={this.state.show}
          open={this.open}
          close={this.close}
        />
      </div>
    )
  }
}

export default App;
