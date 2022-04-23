import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    constructor () {
        super();
        this.state = {
            products: [
                {
                    id: 1,
                    price: 99,
                    title: 'Watch',
                    qty: 10,
                    img: ''
                },
                {
                    id: 2,
                    price: 999,
                    title: 'Mobile Phone',
                    qty: 4,
                    img: ''
                },
                {
                    id: 3,
                    price: 9999,
                    title: 'Laptop',
                    qty: 1,
                    img: ''
                }
            ]
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    render() {
        const { products } = this.state;
        return (
            <div className="cart">
                {/* <CartItem qty={1} price={99} title={"Watch"} img={''}></CartItem> */}
                {products.map((product) => {
                    return (
                        <CartItem 
                            product={product} 
                            key={product.id}
                            // func={() => console.log('function')}
                            // isloggedin={false}
                            // jsx={<h1>Test</h1>}
                        >
                        </CartItem>
                    );
                })}
                
            </div>
        );
    }
}



export default Cart;