import './App.css';
import Header from './components/Header';
import Guitar from './components/Guitar';
import { useState } from 'react';
import { db } from './data/db';

function App() {

    const [data, setData] = useState(db);
    const [cart, setCart] = useState([]);

    function addToCart(item) {
        const itemExists = cart.findIndex((guitar) => item.id === guitar.id);
        console.log(itemExists);

        if (itemExists >= 0) { // update quantity
            console.log('Already exists');
            const updatedCart = [...cart];
            updatedCart[itemExists].quantity++;
            setCart(updatedCart);
        } else { // add to cart
            console.log('Adding...');
            item.quantity = 1;
            setCart((prevState) => [...prevState, item]);
        }

    }

    return (
        <>
            <Header
                cart={cart} />
            <main className="container-xl mt-5">
                <h2 className="text-center">Our Collection</h2>

                <div className="row mt-5">
                    {
                        data.map((guitar) => (
                            <Guitar
                                key={guitar.id}
                                guitar={guitar}
                                cart={cart}
                                setCart={setCart}
                                addToCart={addToCart} />
                        ))
                    }
                </div>
            </main>


            <footer className="bg-dark mt-5 py-5">
                <div className="container-xl">
                    <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - All rights reserved</p>
                </div>
            </footer>
        </>
    )
}

export default App;



// // state
// useEffect(() => {
//     console.log('Listening auth');
// }, [auth]) // if empty, just once is executed

// setTimeout(() => {
//     setAuth(true)
// }, 3000);
