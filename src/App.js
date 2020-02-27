import React, { Component } from 'react';
import SearchBar from "./components/SearchBar";
import Groceries from "./components/Groceries";
import CartModal from "./components/CartModal";
import Jumbo from "./components/Jumbo";
import CartNav from "./components/CartNav";
import ToastComponent from "./components/Toast";
import axios from "axios";
import "./App.css"

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
      show: false,
      showToast: false,
      closeToast: false, 
      toastImage: "", 
      toastTitle: "", 
      toastQuantity: ""
    }

    // this.getAPI = this.getAPI.bind(this);
    this.handleFormSearch = this.handleFormSearch.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.newQuantity = this.newQuantity.bind(this);
    this.addNewProductToCart = this.addNewProductToCart.bind(this);
    this.addToTotal = this.addToTotal.bind(this);
  }


  componentDidMount() {

    // if (this.state.search === "") {
    //   this.setState({
    //     search: "yogurt"
    //   }, () => this.getAPI())
    // } else {
    //   this.setState({
    //     search: this.state.search
    //   }, () => this.getAPI())
    // }
    this.setState({
      show: false
    })
  }

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

  // componentDidMount() {
  //   this.setState({
  //     show: false
  //   })
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

  addNewProductToCart(newProduct) {
    let copyOfCart = this.state.cart;
    const found = copyOfCart.some(item => item.id === newProduct.id);

    if (!found) {
      copyOfCart.push(newProduct);
      this.setState({
        toastImage: newProduct.image,
        toastTitle: newProduct.title,
        toastQuantity: newProduct.quantity, 
        showToast: true
      })
    }
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

  // closeToastFunction () {
  //   this.setState({
  //     closeToast: true, 
  //     showToast: false
  //   })
  // }
  launchToast = () => {
    if (this.state.showToast){
      return (
        <ToastComponent
        image={this.state.toastImage}
        title={this.state.toastTitle}
        quantity={this.state.toastQuantity}
        />
      )
    }
  }


  removeFromCart = (removedProduct) => {
    // console.log("Remove from cart in App.js")
    // console.log("Item to remove: " + JSON.stringify(removedProduct))

    this.setState(prevState => ({
      cart: prevState.cart.filter(item => item.id !== removedProduct.id)
    }))
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

  checkCartOut = () => {
    console.log("Check out cart")
  }

  render() {
    return (
      <div className="container">
        <CartNav
          totalCartQuantity={this.state.totalCartQuantity}
          openClick={this.open}
          searchBar={
            <SearchBar
              search={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSearch={this.handleFormSearch}
            />
          }
        />
        <Jumbo />
        <div className="container">
          {this.launchToast()}
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
          editCart={this.editCart}
          removeFromCart={this.removeFromCart}
          checkout={this.checkCartOut}
          cart={this.state.cart}
          quantity={this.state.quantity}
          newQuantity={this.newQuantity}
          addNewProductToCart={this.addNewProductToCart}
          addToTotal={this.addToTotal}
        />
      </div>
    )
  }
}

export default App;
