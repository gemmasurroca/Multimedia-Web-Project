import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Multimedia from './components/Multimedia';
import ActivityList from './components/ActivityList';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (activity) => {
    setCart(prev => {
      const exists = prev.find((item) => item.id === activity.id);
      if (exists) {
        return prev.map(item =>
          item.id === activity.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prev, { ...activity, qty: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart(prev =>
      prev
        .map(item => item.id === id ? { ...item, qty: item.qty - 1 } : item)
        .filter(item => item.qty > 0)
    );
  };

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Multimedia />
        <div className="activities-and-cart">
          <ActivityList onAdd={addToCart} />
          <div className="cart">
            <Cart cart={cart} onRemoveOne={removeFromCart} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
