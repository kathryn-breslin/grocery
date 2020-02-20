import React, { Component } from 'react';
import SearchBar from "./components/SearchBar";
import Groceries from "./components/Groceries";
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
      cart: []
    }

    // this.getAPI = this.getAPI.bind(this);
    this.handleFormSearch = this.handleFormSearch.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.newQuantity = this.newQuantity.bind(this);
    this.addNewProductToCart = this.addNewProductToCart.bind(this);
    // this.checkForId = this.checkForId.bind(this);
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

  // function add(arr, name) {
  //   const { length } = arr;
  //   const id = length + 1;
  //   const found = arr.some(el => el.username === name);
  //   if (!found) arr.push({ id, username: name });
  //   return arr;
  // }
  
  // console.log(add(arr, 'ted'));

  // checkForId(productId) {
  //   let cart = this.state.cart;
  //   return cart.some(function (item) {
  //     return item.id === productId
  //   })
  // }

  addNewProductToCart(newProduct) {
    let copyOfCart = this.state.cart;
    const found = copyOfCart.some(item => item.id === newProduct.id);

    if ( !found ) copyOfCart.push(newProduct);

    else if ( found ) {
      copyOfCart.forEach((element, index) => {
        if (element.id === newProduct.id) {
          copyOfCart[index] = newProduct
        }
      })
    }

    this.setState({
      cart: copyOfCart
    }, console.log("This is the new cart: " + JSON.stringify(this.state.cart)))
    
    // console.log("New product has been added, triggerd in App.js: " + JSON.stringify(newProduct))
    // let copyOfCart = this.state.cart;

    // let itemID = newProduct.id
    // console.log("New Product in App.js: ID ----- " + itemID)
    // console.log("Copy of Cart: " + JSON.stringify(copyOfCart))

    // if (this.checkForId(itemID)){
    //   console.log("Product Id exists!");
    // }
    // copyOfCart.push(newProduct)
    // console.log("Adding new product to cart!")
    // return true;
    // if (copyOfCart.includes(newProduct.id)) {
    //   console.log("Id exists")
    //   console.log("new product id: " + newProduct.id)
    // }
    // else {
    //   console.log("Id does not exists!")
    //   copyOfCart.push(newProduct);

    //   console.log("Adding object to cart: " + JSON.stringify(copyOfCart))
    //   console.log("new product id: " + newProduct.id)
    // }
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
      </div>
    )
  }
}

export default App;
