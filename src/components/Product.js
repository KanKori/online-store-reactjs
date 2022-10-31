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
    alert("You successfully added product to the cart!");
    }

    render() {
        return <div className="large-3 small-6 columns">
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.takamine.com%2Fg-series&psig=AOvVaw3tcvbBj19-Gm-pFrl7cbqw&ust=1667264070840000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIi0qOegifsCFQAAAAAdAAAAABAE"/>
            <div className="panel">
                <h5>{this.props.product.title}</h5>
                <h6 className="subheader">{this.props.product.price}</h6>
                <button onClick={() => this.addToCart(this.props.product)}>Add to cart</button>
            </div>
        </div>
    }
}

export default Product;