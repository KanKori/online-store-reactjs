import * as React from "react";
import ProductsPage from "./ProductsPage";

class MainPage extends React.Component {

    render() {
        return <div className="row">
            <div className="large-12 columns">
                <div class="logo-holder logo-8">
                        <a href="">
                          <h3>Orpheus <span>Orpheus</span></h3>
                        </a>
                      </div>

                <div className="row">
                    <div className="large-12 columns">

                        <nav className="top-bar data-topbar">
                            <ul className="title-area">
                                <li className="name">
                                    <h1>
                                        <a href="#">
                                            Welcome to our guitar world
                                        </a>
                                    </h1>
                                </li>
                                <li className="toggle-topbar menu-icon"><a href="#"><span>menu</span></a></li>
                            </ul>

                            <section className="top-bar-section">
                                <ul className="right">
                                    <li className="divider"></li>
                                    <li className="has-dropdown">
                                        <a href="#">Login</a>
                                    </li>
                                    <li className="divider"></li>
                                    <li className="has-dropdown">
                                        <a data-toggle="modal" data-target="#cart" href="#"> Cart </a>
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