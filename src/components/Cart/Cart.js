import React from 'react';

const Cart = ({cart, handleRemoveItem}) => {
    return (
        <div>
            this is a cart
            <h3>order = {cart.length}</h3>
            {
                cart.map(tshirt => <p
                key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() =>handleRemoveItem(tshirt)}>x</button>
                    
                </p>)
            }
        </div>
    );
};

export default Cart;



/*

Conditional Rendering 
1.use element in a variable and then use if-else to set value 
2.ternary operation condition ? true :False
3.&& operator
4. || operator 

*/