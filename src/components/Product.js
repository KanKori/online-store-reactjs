import * as React from "react";

class Product extends React.Component {

    constructor(props) {
    super(props);
    }

    addToCart = (product) => {
    console.log("adding to the cart")
    let productList = [];
    let products = localStorage.getItem("products", product);
    if(products==null){
        productList.push(product);
        }else{
        productList = JSON.parse(products);
        productList.push(product);
    }
    localStorage.setItem("products", JSON.stringify(productList));
    }

    render() {
        return <div className="large-3 small-6 columns">
            <img src=""/>
            <div className="panel">
                <h5>{this.props.product.title}</h5>
                <h6 className="subheader">{this.props.product.price}</h6>
                <button onClick={() => this.addToCart(this.props.product)}>Add to cart</button>
            </div>
        </div>
    }

}

export default Product;