import React from 'react';
import CartItem from './CartItem';

// class Cart extends React.Component {
const Cart = (props) => {    
    // render() {
        const { products } = props;
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
                            onIncreaseQuantity={props.onIncreaseQuantity}
                            onDecreaseQuantity={props.onDecreaseQuantity}
                            onDeleteProduct={props.onDeleteProduct}
                        >
                        </CartItem>
                    );
                })}
                
            </div>
        );
    // }
}



export default Cart;