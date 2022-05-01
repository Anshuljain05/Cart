import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


class App extends React.Component {
  constructor () {
    super();
    this.state = {
      products: [],
      loading: true
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    this.db = firebase.firestore();
  }

  componentDidMount() {
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot) => {
    //     // console.log(snapshot);
        
    //     // snapshot.docs.map((doc) => {
    //     //   console.log(doc.data());
    //     // })

    //     const products = snapshot.docs.map((doc) => {
    //       const data = doc.data();
    //       data['id'] = doc.id;
    //       return data;
    //     })

    //     this.setState({
    //       products,
    //       loading: false
    //     })
    //   })

    this.db
      .collection('products')
      .onSnapshot((snapshot) => {
        // console.log(snapshot);
        
        // snapshot.docs.map((doc) => {
        //   console.log(doc.data());
        // })

        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data['id'] = doc.id;
          return data;
        })

        this.setState({
          products,
          loading: false
        })
      })
  }

  handleIncreaseQuantity = (product) => {
      // console.log('Hey please incr qty', product);
      const { products } = this.state;
      const index = products.indexOf(product);

      // products[index].qty += 1;

      // this.setState({
      //     // products: products
      //     // OR
      //     products
      // })

      const docRef = this.db.collection('products').doc(products[index].id);

      docRef
        .update({
          qty: products[index].qty + 1
        })
        .then(() => {
          console.log('Update Successfully');
        })
        .catch((error) => {
          console.log('Error: ', error);
        })
  }

  handleDecreaseQuantity = (product) => {
    // console.log('Hey please incr qty', product);
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 1){
        return;
    }
    
    // this.setState({
    //     // products: products
    //     // OR
    //     products
    // })

    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
      .update({
        qty: products[index].qty - 1
      })
      .then(() => {
        console.log('Update Successfully');
      })
      .catch((error) => {
        console.log('Error: ', error);
      })
  }

  handleDeleteProduct = (id) => {
    // const { products } = this.state;

    // const items = products.filter((item) => item.id !== id); //returns [] with all items exept id one

    // this.setState({
    //     products: items
    // })

    const docRef = this.db.collection('products').doc(id);

    docRef
      .delete()
      .then(() => {
        console.log('Deleted Successfully');
      })
      .catch((error) => {
        console.log('Error: ', error);
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

  // addProduct = () => {
  //   this.db
  //     .collection('products')
  //     .add({
  //       img: 'https://icdn.digitaltrends.com/image/digitaltrends/macbook-pro-2021-16.jpg',
  //       price: 9999,
  //       qty: 2,
  //       title: 'Laptop'
  //     })
  //     .then((docRef) => {
  //       console.log('Product has been added', docRef);
  //     })
  //     .catch((error) => {
  //       console.log('Error: ', error);
  //     })
  // }

  render() {
    const { products, loading} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}></Navbar>
        {/* <button onClick={this.addProduct} style={{ padding: 20, fontSize: 20 }}>Add a Product</button> */}
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        ></Cart>
        {loading && <h1>Loading Products ...</h1>}
        <div style={ {padding: 10, fontSize: 20} }>
          Total: Rs {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
