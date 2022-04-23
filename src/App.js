import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
class App extends React.Component {
  constructor () {
        super();
        this.state = {
            products: [
                {
                    id: 1,
                    price: 99,
                    title: 'Watch',
                    qty: 10,
                    img: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
                },
                {
                    id: 2,
                    price: 999,
                    title: 'Telephone',
                    qty: 4,
                    img: 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1119&q=80'
                },
                {
                    id: 3,
                    price: 9999,
                    title: 'Laptop',
                    qty: 1,
                    img: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80'
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
    getCartCount = () => {
      const { products } = this.state;
      
      let count = 0;

      products.forEach((product) => {
        count += product.qty;
      })

      return count;
    }
    getCartTotal = () => {
      const { products } = this.state;
      
      let cartTotal = 0;

      products.forEach((product) => {
        cartTotal = cartTotal + product.qty*product.price;
      })

      return cartTotal;
    }
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}></Navbar>
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        ></Cart>
        <div style={ {padding: 10, fontSize: 20} }>
          Total: Rs {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
