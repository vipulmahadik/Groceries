/**
 * Created by admin on 6/25/18.
 */
import React, { Component } from 'react';
import Cart from './Cart';

class ItemList extends Component {
    constructor() {
        super();
        this.state = {
            items : [
                {'name': 'Book', 'rate': 12.49,'exempt': 1, 'imported': 0},
                {'name': 'Music CD', 'rate': 14.99,'exempt': 0, 'imported':0},
                {'name': 'chocolate Bar', 'rate': 0.85,'exempt': 1, 'imported':0},
                {'name': 'Imported Chocolates', 'rate': 10.00,'exempt': 1, 'imported':1},
                {'name': 'Imported Perfume 1', 'rate': 47.50,'exempt': 0, 'imported':1},
                {'name': 'Imported Perfume 2', 'rate': 27.99,'exempt': 0, 'imported':1},
                {'name': 'Perfume', 'rate': 18.99,'exempt': 0, 'imported':0},
                {'name': 'Headache Pills', 'rate': 9.75,'exempt': 1, 'imported':0},
                {'name': 'Imported Chocolates', 'rate': 11.25,'exempt': 0, 'imported':1}
            ],
            cart : []
        };
    }

    addItemToCart(key) {
        let cartItems = this.state.cart;
        cartItems.push(this.state.items[key]);
        this.setState({
            cart: cartItems
        });
        console.log(this.state.cart);
    }

    getItems() {
        let itemList = this.state.items.map((item, id) => {
            return (
                <div className="row" key={id}>
                    <div className="col-sm-6">{item.name}</div>
                    <div className="col-sm-3 text-left">
                        <strong className="">{item.rate}</strong>
                    </div>
                    {/*<div className="col-sm-1">*/}
                        {/*<select name={id} id={id}>*/}
                            {/*<option value="1">1</option>*/}
                            {/*<option value="2">2</option>*/}
                            {/*<option value="3">3</option>*/}
                            {/*<option value="4">4</option>*/}
                        {/*</select>*/}
                    {/*</div>*/}
                    <div className="col-sm-3">
                        <button className="btn btn-primary" onClick={this.addItemToCart.bind(this, id)}>Add to Cart</button>
                    </div>
                </div>
            );
        });
        return itemList;
    }

    render() {
        return(
            <div className="row">
                <div className="col-sm-8">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3>Available Groceries</h3>
                        </div>
                    </div>
                    <br/>
                    {this.getItems()}
                </div>
                <div className="col-sm-4">
                    <Cart cartList={this.state.cart}></Cart>
                </div>
            </div>
        )
    }
}

export default ItemList;