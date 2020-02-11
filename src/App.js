import React, { Component } from 'react';
import SearchBar from "./components/SearchBar";
import Groceries from "./components/Groceries";
import axios from "axios";

class App extends Component {

  constructor() {
    super();

    this.state = {
      allGroceries: [],
      search: "",
      quantity: 0
    }

    this.getAPI = this.getAPI.bind(this);
    this.handleFormSearch = this.handleFormSearch.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.newQuantity = this.newQuantity.bind(this);
  }

  componentDidMount() {

    if (this.state.search === "") {
      this.setState({
        search: "yogurt"
      }, () => this.getAPI())
    } else {
      this.setState({
        search: this.state.search
      }, () => this.getAPI())
    }
  }

  getAPI() {
    axios.get("https://api.spoonacular.com/food/products/search?query=" + this.state.search + "&apiKey=3fcefe97ed5842738ec5812e8aa60523")
      .then(response => {
        console.log(response)
        this.setState({
          allGroceries: response.data.products,
          search: ""
        })
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
    this.getAPI()
  };

  newQuantity() {
    console.log("This is in App.js, trying to update the quantity!")
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
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
