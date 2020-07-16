
import React, { Component } from 'react';
import PayItem from './PayItem';

class Pays extends Component {
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
                    <PayItem item={item} />)}
            </div>

            <h1> Total:  {this.total()} </h1>
            
            <button type="button" className="btn btn-danger">Pay</button>
            
        
        </div>
        

        );
    }
}
export default Pays;