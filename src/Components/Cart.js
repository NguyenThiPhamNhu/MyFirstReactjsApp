
import React, { Component } from 'react';
import CartItem from './CartItem';

class Carts extends Component {
    constructor() {
        super();
        this.state = {
            cart: JSON.parse(localStorage.getItem("cart"))   
        }
    }
    total() {
        let sum = 0;
        let length = 0;
        let { cart } = this.state;
        for (let i = 0; i < cart.length; i++) {
            sum += cart[i].quatity * cart[i].price;
        }
        return sum;
    }

    render() {
        
        return (
            <div>

            <div>
               {this.state.cart.map((item, index) =>
                    <CartItem item={item} />)}
            </div>

            
            
            <button type="button" className="btn btn-danger">Pay</button>

            <div>
            <link rel="stylesheet" media="screen" href="//netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" />
                <script src="//code.jquery.com/jquery.js"></script>
                <script src="//netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>

                <form className="AddProduct" onSubmit={this.onAddProduct}>
                    <label for="sel1">Entry Name:</label>
                    <input width="300px" className="form-control mr-sm-2" type="text" name="title" placeholder="title" />

                    <label for="sel1">Phone:</label>
                    <input className="form-control mr-sm-2" type="text" name="price" placeholder="price" />

                    <label for="sel1">Select City (select one):</label>
                    <select width="200px" class="form-control" name="cate" id="sel1">
                        <option>Quảng Nam</option>
                        <option>Đà Nẵng</option>
                        <option>Quận Cam</option>
                        <option>Quân Bình Thạnh</option>
                    </select>

                    <label for="sel1">Cash or credit (select one):</label>
                    <select width="200px" class="form-control" name="cate" id="sel1">
                        <option>Momo</option>
                        <option>Airpay</option>
                        <option>Vietcombank</option>
                        <option>Cash</option>
                        <option>COD</option>
                    </select>

                    
                        <label for="inputAddress">Avatar</label>
                        <input type="file" class="form-control"id="myAddress" name="image" />
                        <button className="btn btn-success " type="submit">Buy</button>
                </form>
                <h1> Total:  {this.total()} </h1>
            
            </div>
        
        </div>
        

        );
    }
}
export default Carts;