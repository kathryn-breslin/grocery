import React, { Component } from 'react';
import SearchBar from "./components/SearchBar";
import axios from "axios";

class App extends Component {

  constructor() {
    super();

    this.state = {
      allGroceries: [], 
      search: ""
    }
  }

  componentDidMount() {

    if(this.state.search === ""){
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
          allGroceries: response.data.products
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
            {this.state.allGroceries.map(item => (
              <div className="card sm-4">
                <div className="row no-gutters">
                  <div className="col-sm-4">
                    <img
                      src={item.image ? (item.image) : ("http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder.png")}
                      className="card-img"
                      alt={item.title}
                    />
                  </div>
                  <div className="col-sm-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        {item.title}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
