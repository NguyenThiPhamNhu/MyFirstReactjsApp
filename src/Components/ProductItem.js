
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
                            <b><h2 className="typeroom">{this.props.item.typeroom}</h2></b>
                            
                            <p className="name">
                            <h4>
                            Room : {this.props.item.name} 
                            </h4>
                            </p>
                            <p className="number">
                            <h4>
                            Number : {this.props.item.number} 
                            </h4>
                            </p>
                            <p className="area">
                            <h4>
                            Size : {this.props.item.area} 
                            </h4>
                            </p>
                            <p className="price">
                            <h4>
                            Price: {this.props.item.price} 
                            </h4>
                            </p>
                            <p >
                            <h4>
                            <a href="#" className="btn btn-default"  >View</a>:  
                            </h4>
                            </p>
                            <p>
                                <button className="btn btn-info "  type="submit" onClick = {this.props.onItemClick}>Add</button>
                                
                                {/* <a href="#" className="btn btn-default"  >Detail</a> */}
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