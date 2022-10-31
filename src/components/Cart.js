import * as React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FinishPurchase from "./FinishPurchase";

class Cart extends React.Component {

	constructor(props) {
        super(props);
        this.state = {show: true, productsList: [], finishPurchaseForm: false}
    }

    //на загрузке
    componentDidMount() {
        this.handleDisplayProducts();
    }

    handleDisplayProducts = () => {
        let products = localStorage.getItem("products");
        if (products != null) {
            products = JSON.parse(products);
            this.setState({productsList: products})
        }
    }

    handleClose = () => {
        this.setState({show: false})
        this.props.closeModal();
    }

    clearCart = () => {
        localStorage.clear();
    }

    finishPurchase = () =>{
        this.setState({finishPurchaseForm: true})
    };

	render() {
	    if(this.state.finishPurchaseForm){
	        return <FinishPurchase/>
       	}else{
	        return (
        	<Modal show={this.state.show} onHide={this.handleCLose} animation={false}>
        	    <Modal.Header>
        			<Modal.Title>Your cart</Modal.Title>
        		</Modal.Header>
        		<Modal.Body>
        		    <table>
        		        <tbody>

                       <tr>
                           <th>Title</th>
                           <th>Price</th>
                       </tr>
                       {this.state.productsList.map(product => (
                       <React.Fragment key={product.id}>
                          <tr>
                             <td>{product.title}</td>
                             <td>{product.price}</td>
                          </tr>
                       </React.Fragment>
                       ))}
                       </tbody>
                    </table>
        	    </Modal.Body>
        		<Modal.Footer>
        			<Button variant="secondary" onClick={this.handleClose}>
        				Close
        			</Button>
                    <Button variant="secondary" onClick={this.clearCart}>
                        Clear cart
                    </Button>
                    <Button variant="primary" onClick={this.finishPurchase}>
                        Finish purchase
                    </Button>
       			</Modal.Footer>
       		</Modal>
     		);

       	}
    }
}
export default Cart;