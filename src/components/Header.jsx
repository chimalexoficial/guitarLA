

function Header({ cart }) {

    return (
        <header className="py-5 header">
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">
                    <div className="col-8 col-md-3">
                        <a href="index.html">
                            <img className="img-fluid" src="./public/img/logo.svg" alt=" logo" />
                        </a>
                    </div>
                    <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                        <div
                            className="cart"
                        >
                            <img className="img-fluid" src="./public/img/cart.png" alt="cart image" />

                            <div id="cart" className="bg-white p-3">
                                <p className="text-center">Cart is empty</p>
                                <table className="w-100 table">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cart.map((guitar) => (
                                        <tr>
                                            <td>
                                                <img className="img-fluid" src={`/img/${guitar.image}.jpg`} alt="guitar image" />
                                            </td>
                                            <td>{guitar.name}</td>
                                            <td className="fw-bold">
                                                ${guitar.price}
                                            </td>
                                            <td className="flex align-items-start gap-4">
                                                <button
                                                    type="button"
                                                    className="btn btn-dark"
                                                >
                                                    -
                                                </button>
                                                {guitar.quantity}
                                                <button
                                                    type="button"
                                                    className="btn btn-dark"
                                                >
                                                    +
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-danger"
                                                    type="button"
                                                >
                                                    X
                                                </button>
                                            </td>
                                        </tr>
                                        ))
                                    }
                                    </tbody>
                                </table>

                                <p className="text-end">Total: <span className="fw-bold">$899</span></p>
                                <button className="btn btn-dark w-100 mt-3 p-2">Remove all</button>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;