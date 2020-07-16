import React, { Component } from 'react';

import AddProducts from './Components/AddProducts';
import Products from './Components/Products';
import Cart from './Components/Cart';
import Pay from './Components/Pay';
class App extends Component {
    constructor() {
        super();
        this.state = {
            menu: "products"
        }
        this.onProductsClicked = this.onProductsClicked.bind(this);
        this.onAddProductsClicked = this.onAddProductsClicked.bind(this);
        this.onCartClicked = this.onCartClicked.bind(this);
        this.onPayClicked = this.onPayClicked.bind(this);
        this.handleChange = this.handleChange.bind(this);


    }

    handleChange(e) {
        console.log(e.target.value); 
        let object = document.getElementById("title");
        console.log(object); 

        let searchBarText = e.target.value;
        let divText = object;
        
            console.log("the div text contains your search text");
       
    }
    onProductsClicked() {
        this.setState({
            menu: "products"
        })
    }

    onAddProductsClicked() {
        this.setState({
            menu: "add-product"
        })
    }
    onCartClicked() {
        this.setState({
            menu: "cart"
        })
    }

    onPayClicked() {
        this.setState({
            menu: "cart"
        })
    }

    render() {
      
       
        return (

            <div>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossorigin="anonymous"

                />
                <link rel="stylesheet" media="screen" href="//netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css"></link>
                <script src="//code.jquery.com/jquery.js"></script>
                <script src="//netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>

                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" onClick={this.onProductsClicked}>Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#">Disabled</a>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                            <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
                                <button className="btn btn-outline-success my-2 my-sm-0"   onChange={this.handleChange} type="submit">Search</button>
                                <button className="bt" class="btn btn-info" onClick={this.onCartClicked}>Cart</button>
                            </form>
                        </div>
                    </nav>
                </div>
                <center><h1>Welcome To VIT Guitar Shop</h1></center>
                <center><div className="Menu">
                    <button className="bt" class="btn btn-success" onClick={this.onProductsClicked}>Product</button>
                    <button className="bt" class="btn btn-danger" onClick={this.onAddProductsClicked}>Add Product</button>
                    <button className="bt" class="btn btn-info" onClick={this.onCartClicked}>Cart</button>
                    <button className="bt" class="btn btn-warning" onClick={this.onPayClicked}>Pay</button>

                   

                </div>

                </center>


                <br />
                <hr />

                <br />
                {this.state.menu === "products" ? <Products /> : null}
                {this.state.menu === "add-product" ? <AddProducts /> : null}
                {this.state.menu === "cart" ? <Cart /> : null}

            </div>
        );
    }
}

export default App;