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
    handleIncreaseQuantity = (product) => {
        // console.log('Hey please incr qty', product);
        const { products } = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;

        this.setState({
            // products: products
            // OR
            products
        })
    }
    handleDecreaseQuantity = (product) => {
        // console.log('Hey please incr qty', product);
        const { products } = this.state;
        const index = products.indexOf(product);
        if (products[index].qty > 1){
            products[index].qty -= 1;
        }
        
        this.setState({
            // products: products
            // OR
            products
        })
    }
    handleDeleteProduct = (id) => {
        const { products } = this.state;

        const items = products.filter((item) => item.id !== id); //returns [] with all items exept id one

        this.setState({
            products: items
        })
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
                            onIncreaseQuantity={this.handleIncreaseQuantity}
                            onDecreaseQuantity={this.handleDecreaseQuantity}
                            onDeleteProduct={this.handleDeleteProduct}
                        >
                        </CartItem>
                    );
                })}
                
            </div>
        );
    }
}



export default Cart;