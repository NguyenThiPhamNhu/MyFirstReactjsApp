
import React, { Component } from 'react';


class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            show: true,
            max: 5,
            min: 0
        };
    }
   
    IncrementItem = () => {
        this.setState(prevState => {
            if (prevState.quantity < 100) {
                return {
                    quantity: prevState.quantity + 1
                }
            } else {
                return null;
            }
        });
    }
    DecreaseItem = () => {
        this.setState(prevState => {
            if (prevState.quantity > 0) {
                return {
                    quantity: prevState.quantity - 1
                }
            } else {
                return null;
            }
        });
    }
    ToggleClick = () => {
        this.setState({
            show: !this.state.show
        });
    }
    handleChange = (event) => {
        this.setState({ quantity: event.target.value });
    }
    removeCart(event) {
        event.preventDefault();
        let title = event.target["title"];
        let price = event.target["price"];
        let cate = event.target["cate"];
        let image = event.target["image"];

        let cart = {
            title: title,
            price: price,
            cate: cate,
            image: image
        }
        let carts = JSON.parse(localStorage.getItem("cart"));
        if (!carts) {
            carts = [];
        }
        carts.splice(cart, 1);
        localStorage.setItem("cart", JSON.stringify(carts));
        console.log(carts);
    }

    render() {
       


        return (

            <div >


                <link rel="stylesheet" media="screen" href="//netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" />
                <script src="//code.jquery.com/jquery.js"></script>
                <script src="//netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>


               


                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className="thumbnail">
                        <img src={"Image/" + this.props.item.image} />
                        <div className="caption">
                            <h3>{this.props.item.title}</h3>
                            <p>
                                {this.props.item.price} Vnđ
                            </p>
                            <p>
                                {this.props.item.cate}
                            </p>
                            <p>
                                <h3>Quantity:{this.props.item.quatity}</h3>
                                <h3>Old price:{this.props.item.quatity * this.props.item.price} Vnđ</h3>
                                <h3>New price:{this.state.quantity * this.props.item.price} Vnđ</h3>
                            </p>
                            <p>

                                <a onClick={this.removeCart} class="btn btn-danger">Remove</a>
                            </p>
                            <p>
                                <div>
                                    <button className="btn btn-info" onClick={this.IncrementItem}>+</button>
                                    <input className="inputne" value={this.state.quantity} onChange={this.handleChange} />
                                    <button className="btn btn-info" onClick={this.DecreaseItem}>-</button>
                                </div>
                            </p>


                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default CartItem;