import * as React from "react";
import ProductsPage from "./ProductsPage";
import Cart from "./Cart"

class MainPage extends React.Component {

    constructor() {
        super();
        this.state = {openCart: false}
    }

    openCart = () =>{
        this.setState({openCart: true})
    }

    closeCart = () => {
        this.setState({openCart: false})
    }

    render() {
        return <div className="row">
        {this.state.openCart ? <Cart closeModal={this.closeCart}/> : "" /*empty string*/}
            <div className="large-12 columns">
                <div className="logo-holder logo-8">
                        <a href="http://localhost:3000">
                          <h3>Orpheus <span>Orpheus</span></h3>
                        </a>
                      </div>
                <div className="row">
                    <div className="large-12 columns">

                        <nav className="top-bar data-topbar">
                            <ul className="title-area">
                                <li className="name">
                                    <h1>
                                        <a href="http://localhost:3000">
                                            Welcome to our guitar world
                                        </a>
                                    </h1>
                                </li>
                                <li className="toggle-topbar menu-icon"><a href="http://localhost:3000"><span>menu</span></a></li>
                            </ul>

                            <section className="top-bar-section">
                                <ul className="right">
                                    <li className="divider"></li>
                                    <li className="has-dropdown">
                                        <a href="http://localhost:3000">Login</a>
                                    </li>
                                    <li className="divider"></li>
                                    <li className="has-dropdown">
                                         <a data-toggle="modal" data-target="#cart" href="http://localhost:3000/#" onClick={() => this.openCart()}>Cart </a>
                                    </li>
                                </ul>
                            </section>
                        </nav>
                    </div>
                </div>
                <ProductsPage/>
            </div>
        </div>
    }

}

export default MainPage;