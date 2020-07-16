
import React, { Component } from 'react';


class AddProduct extends Component {

    onAddProduct(event) {
        event.preventDefault();
        let title = event.target["title"].value;
        let price = event.target["price"].value;
        let cate = event.target["cate"].value;
        let image = event.target["image"].files.item(0).name;

        let product = {
            title: title,
            price: price,
            cate: cate,
            image: image
        }
        let products = JSON.parse(localStorage.getItem("lsc-products"));
        if (!products) {
            products = [];
        }
        products.push(product);
        localStorage.setItem("lsc-products", JSON.stringify(products));
        console.log(products);
    }
    render() {
        return (

            <div>
                <link rel="stylesheet" media="screen" href="//netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" />
                <script src="//code.jquery.com/jquery.js"></script>
                <script src="//netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>

                <form className="AddProduct" onSubmit={this.onAddProduct}>
                    <label for="sel1">Entry Title:</label>
                    <input width="300px" className="form-control mr-sm-2" type="text" name="title" placeholder="title" />

                    <label for="sel1">Entry Price:</label>
                    <input className="form-control mr-sm-2" type="text" name="price" placeholder="price" />

                    <label for="sel1">Select categories (select one):</label>
                    <select width="200px" class="form-control" name="cate" id="sel1">
                        <option>Guitar</option>
                        <option>Ukulele</option>
                        <option>Cajon</option>
                        <option>Piano</option>
                    </select>

                    
                        <label for="inputAddress">Image</label>
                        <input type="file" class="form-control"id="myAddress" name="image" />
                        <button className="btn btn-success " type="submit">Add</button>
                </form>

            </div>

        );
    }
}
export default AddProduct;