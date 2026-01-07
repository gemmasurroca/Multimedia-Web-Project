import React from 'react';

function Cart({ cart, onRemoveOne }) {

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    return (
        <section>
            <h2 className="cart-title">Your Plan</h2>

            {cart.length === 0 ? (
                <p className="cart-empty">You haven't added any activities yet.</p>
            ) : (

                <ul>
                    {cart.map((item) => (
                        <li key={item.id} className="cart-item">
                            <div>
                                <div className="cart-item-name">
                                    {item.name} x{item.qty}
                                </div>
                                <div className="cart-item-price">{item.price}€</div>
                            </div>
                            <button className="btn-remove" onClick={() => onRemoveOne(item.id)}>
                                Remove one
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            <p><strong>Total:</strong> {total} €</p>
        </section>
    );
}

export default Cart;
