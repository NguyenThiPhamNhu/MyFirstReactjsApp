
import React, { Component } from 'react';
import ProductItem from './ProductItem';

class Products extends Component {


    constructor() {
        super();
        this.products = JSON.parse(localStorage.getItem("lsc-products"));
        if (!this.products) {
            this.products = [];
        }
       
    }
    // sortByPriceAsc() {
    //     this.setState(prevState => {
    //       this.state.products.sort((a, b) => (a.price - b.price))
    //   });
    //   }
    sortByPriceAsc = () => {

        let sortedProductsAsc;
        sortedProductsAsc = this.products.sort((a, b) => {
            return parseInt(a.price) - parseInt(b.price);
        })

        this.setState({
            products: sortedProductsAsc
        })
    }

    sortByPriceDsc = () => {

        let sortedProductsDsc;
        sortedProductsDsc = this.products.sort((a, b) => {
            return parseInt(b.price) - parseInt(a.price);
        })

        this.setState({
            products: sortedProductsDsc
        })
    }

    onItemClick(item) {
        console.log("a");
        return (event) => {
            let cart = JSON.parse(localStorage.getItem("cart"));
            if (!cart) {
                cart = [];
            }
            //KT xem item da ton tai trong cart hay chua
            let oldItem = cart.find((element) => element.title === item.title);
            if (oldItem) {
                oldItem.quatity += 1;
            } else {
                item.quatity = 1;
                cart.push(item);
            }
            localStorage.setItem("cart", JSON.stringify(cart));
            console.log(cart);
        }
    }
  

    render() {
        return (


            <div>

                <center>You wanna: <button type="button" class="btn btn-success" onClick={this.sortByPriceAsc} >Tang</button>
                    <button type="button" class="btn btn-danger" onClick={this.sortByPriceDsc}>Giam</button></center>
                
                {this.products.map((item, index) =>
                    <ProductItem onItemClick={this.onItemClick(item)} item={item} />)}

                <div>

                    <div class="panel panel-default">
                        <div class="panel-body">
                            <center><h5><b>VIT LOSHIP</b></h5></center>
                        </div>
                        <div class="panel-footer">
                            <center> <h5><b> COPYRIGHT BY VIT</b></h5> </center>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}
export default Products;