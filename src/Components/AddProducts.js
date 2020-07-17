
import React, { Component } from 'react';


class AddProduct extends Component {

    onAddProduct(event) {
        event.preventDefault();
        let name = event.target["name"].value;
        let number = event.target["number"].value;
        let area = event.target["area"].value;
        let price = event.target["price"].value;
        let oldprice = event.target["oldprice"].value;
        let typeroom = event.target["typeroom"].value;
        let image = event.target["image"].files.item(0).name;

        let product = {
            name: name,
            number: number,
            area: area,
            price:price,
            oldprice:oldprice,
            typeroom: typeroom,
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
                    <label for="sel1">Entry Name:</label>
                    <input width="300px" className="form-control mr-sm-2" type="text" name="name" placeholder="name" />

                    <label for="sel1">Entry Number:</label>
                    <input className="form-control mr-sm-2" type="text" name="number" placeholder="number" />

                    <label for="sel1">Entry Size:</label>
                    <input className="form-control mr-sm-2" type="text" name="area" placeholder="area" />

                    <label for="sel1">Entry Price:</label>
                    <input className="form-control mr-sm-2" type="text" name="price" placeholder="price" />

                    <label for="sel1">Entry Old Price:</label>
                    <input className="form-control mr-sm-2" type="text" name="oldprice" placeholder="oldprice" />

                    <label for="sel1">Select typeroom (select one):</label>
                    <select width="200px" class="form-control" name="typeroom" id="sel1">
                        <option>Family</option>
                        <option>Luxury Double</option>
                        <option>Luxury Triple</option>
                        <option>Super vip</option>
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