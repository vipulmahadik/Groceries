/**
 * Created by admin on 6/25/18.
 */
import React, { Component } from 'react';

class Cart extends Component {
    constructor() {
        super();
        this.state = {
            cart: [],
            price: 0
        }
    }

    updateCart(newProps) {
        let cartList = newProps.cartList;
        let totalPrice = 0;
        let output = cartList.map((item, id)=>{
            let itemPrice = 0;
            if (item.exempt && item.imported) {
                itemPrice = item.rate * 1.05;
            } else if (!item.exempt && item.imported) {
                let salesTax = item.rate * 0.1;
                salesTax = parseFloat((Math.ceil(salesTax*20)/20).toFixed(2));
                itemPrice += item.rate + salesTax;
                itemPrice += item.rate * 0.05;
            } else if (item.exempt && !item.imported) {
                itemPrice = item.rate;
            } else {
                itemPrice = item.rate * 1.1;
                itemPrice = parseFloat((Math.ceil(itemPrice*20)/20).toFixed(2));
            }
            totalPrice += itemPrice;
            return (
                <div key={id}>
                    <div className="col-sm-9 text-left">
                        {item.name}
                    </div>
                    <div className="col-sm-3 text-right">
                        {itemPrice}
                    </div>
                </div>
            )
        });
        this.setState({
            cart: cartList,
            output: output,
            price: totalPrice
        })
    }

    componentWillReceiveProps(){
        this.updateCart(this.props);
    }

    componentWillReceiveProps(newProps){
        this.updateCart(newProps);
    }

    componentWillMount() {
        this.updateCart(this.props);
    }

    render() {
        return(
            <div className="row">
                <div className="col-sm-12">
                    <h3>Cart</h3>
                </div>
                {this.state.cart.length ? this.state.output : (<p>Empty Cart</p>)}
                <div className="col-sm-12">
                    <span>Total: </span><strong>{this.state.price}</strong>
                </div>
            </div>
        )
    }
}

export default Cart;