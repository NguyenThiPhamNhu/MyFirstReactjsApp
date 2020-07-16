
import React, { Component } from 'react';
import './AddProduct.css';

class ProductItem extends Component {
    
      onItemClick(item){
        console.log("a");
        return(event) =>{
            let cart = JSON.parse(localStorage.getItem("cart"));
            if(!cart){
                cart =[];
            }
              //KT xem item da ton tai trong cart hay chua
            let oldItem = cart.find((element) => element.title === item.title);
            if(oldItem){
                oldItem.quatity +=1;
            }else{
                item.quatity = 1;
                cart.push(item);
            }
            localStorage.setItem("cart",JSON.stringify(cart));
            console.log(cart);
        }  
    }
    
    render() {
        return (
            <div >
                <link rel="stylesheet" media="screen" href="//netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" />
                <script src="//code.jquery.com/jquery.js"></script>
                <script src="//netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
                
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div  className="thumbnail">
                        <img src={"Image/"+this.props.item.image} />
                        <div className="caption">
                        <form className="AddProduct" >
                            <h3 className="title">{this.props.item.title}</h3>
                            
                            <p className="price">
                            <h4>
                            {this.props.item.price} Vnđ
                            </h4>
                            </p>
                            <p className="cate">
                            <h4>
                            {this.props.item.cate} 
                            </h4>
                            </p>
                            <p>
                                <button className="btn btn-info "  type="submit" onClick = {this.props.onItemClick}>Add</button>
                                
                                <a href="#" className="btn btn-default"  >Detail</a>
                            </p>
                            </form>
                        </div>
                        
                    </div>

                </div>
                
               
                
            </div>

        )
    }
}

export default ProductItem;