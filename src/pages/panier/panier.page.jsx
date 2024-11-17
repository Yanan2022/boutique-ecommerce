

const Panier = () => {

    return (
        <>
            {/*main area*/}
            <main id="main" className="main-site">
                <div className="container">
                    <div className="wrap-breadcrumb">
                        <ul>
                            <li className="item-link">
                                <a href="#" className="link">
                                    home
                                </a>
                            </li>
                            <li className="item-link">
                                <span>login</span>
                            </li>
                        </ul>
                    </div>
                    <div className=" main-content-area">
                        <div className="wrap-iten-in-cart">
                            <h3 className="box-title">Products Name</h3>
                            <ul className="products-cart">
                                <li className="pr-cart-item">
                                    <div className="product-image">
                                        <figure>
                                            <img src="assets/images/products/digital_18.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="product-name">
                                        <a className="link-to-product" href="#">
                                            Radiant-360 R6 Wireless Omnidirectional Speaker [White]
                                        </a>
                                    </div>
                                    <div className="price-field produtc-price">
                                        <p className="price">$256.00</p>
                                    </div>
                                    <div className="quantity">
                                        <div className="quantity-input">
                                            <input
                                                type="text"
                                                name="product-quatity"
                                                defaultValue={1}
                                                data-max={120}
                                                pattern="[0-9]*"
                                            />
                                            <a className="btn btn-increase" href="#" />
                                            <a className="btn btn-reduce" href="#" />
                                        </div>
                                    </div>
                                    <div className="price-field sub-total">
                                        <p className="price">$256.00</p>
                                    </div>
                                    <div className="delete">
                                        <a href="#" className="btn btn-delete" title="">
                                            <span>Delete from your cart</span>
                                            <i className="fa fa-times-circle" aria-hidden="true" />
                                        </a>
                                    </div>
                                </li>
                                <li className="pr-cart-item">
                                    <div className="product-image">
                                        <figure>
                                            <img src="assets/images/products/digital_20.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="product-name">
                                        <a className="link-to-product" href="#">
                                            Radiant-360 R6 Wireless Omnidirectional Speaker [White]
                                        </a>
                                    </div>
                                    <div className="price-field produtc-price">
                                        <p className="price">$256.00</p>
                                    </div>
                                    <div className="quantity">
                                        <div className="quantity-input">
                                            <input
                                                type="text"
                                                name="product-quatity"
                                                defaultValue={1}
                                                data-max={120}
                                                pattern="[0-9]*"
                                            />
                                            <a className="btn btn-increase" href="#" />
                                            <a className="btn btn-reduce" href="#" />
                                        </div>
                                    </div>
                                    <div className="price-field sub-total">
                                        <p className="price">$256.00</p>
                                    </div>
                                    <div className="delete">
                                        <a href="#" className="btn btn-delete" title="">
                                            <span>Delete from your cart</span>
                                            <i className="fa fa-times-circle" aria-hidden="true" />
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="summary">
                            <div className="order-summary">
                                <h4 className="title-box">Order Summary</h4>
                                <p className="summary-info">
                                    <span className="title">Subtotal</span>
                                    <b className="index">$512.00</b>
                                </p>
                                <p className="summary-info">
                                    <span className="title">Shipping</span>
                                    <b className="index">Free Shipping</b>
                                </p>
                                <p className="summary-info total-info ">
                                    <span className="title">Total</span>
                                    <b className="index">$512.00</b>
                                </p>
                            </div>
                            <div className="checkout-info">
                                <label className="checkbox-field">
                                    <input
                                        className="frm-input "
                                        name="have-code"
                                        id="have-code"
                                        defaultValue=""
                                        type="checkbox"
                                    />
                                    <span>I have promo code</span>
                                </label>
                                <a className="btn btn-checkout" href="checkout.html">
                                    Check out
                                </a>
                                <a className="link-to-shop" href="shop.html">
                                    Continue Shopping
                                    <i className="fa fa-arrow-circle-right" aria-hidden="true" />
                                </a>
                            </div>
                            <div className="update-clear">
                                <a className="btn btn-clear" href="#">
                                    Clear Shopping Cart
                                </a>
                                <a className="btn btn-update" href="#">
                                    Update Shopping Cart
                                </a>
                            </div>
                        </div>
                        <div className="wrap-show-advance-info-box style-1 box-in-site">
                            <h3 className="title-box">Most Viewed Products</h3>
                            <div className="wrap-products">
                                <div
                                    className="products slide-carousel owl-carousel style-nav-1 equal-container"
                                    data-items={5}
                                    data-loop="false"
                                    data-nav="true"
                                    data-dots="false"
                                    data-responsive='{"0":{"items":"1"},"480":{"items":"2"},"768":{"items":"3"},"992":{"items":"3"},"1200":{"items":"5"}}'
                                >
                                    <div className="product product-style-2 equal-elem ">
                                        <div className="product-thumnail">
                                            <a
                                                href="#"
                                                title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                                            >
                                                <figure>
                                                    <img
                                                        src="assets/images/products/digital_04.jpg"
                                                        width={214}
                                                        height={214}
                                                        alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                                                    />
                                                </figure>
                                            </a>
                                            <div className="group-flash">
                                                <span className="flash-item new-label">new</span>
                                            </div>
                                            <div className="wrap-btn">
                                                <a href="#" className="function-link">
                                                    quick view
                                                </a>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <a href="#" className="product-name">
                                                <span>
                                                    Radiant-360 R6 Wireless Omnidirectional Speaker [White]
                                                </span>
                                            </a>
                                            <div className="wrap-price">
                                                <span className="product-price">$250.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product product-style-2 equal-elem ">
                                        <div className="product-thumnail">
                                            <a
                                                href="#"
                                                title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                                            >
                                                <figure>
                                                    <img
                                                        src="assets/images/products/digital_17.jpg"
                                                        width={214}
                                                        height={214}
                                                        alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                                                    />
                                                </figure>
                                            </a>
                                            <div className="group-flash">
                                                <span className="flash-item sale-label">sale</span>
                                            </div>
                                            <div className="wrap-btn">
                                                <a href="#" className="function-link">
                                                    quick view
                                                </a>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <a href="#" className="product-name">
                                                <span>
                                                    Radiant-360 R6 Wireless Omnidirectional Speaker [White]
                                                </span>
                                            </a>
                                            <div className="wrap-price">
                                                <ins>
                                                    <p className="product-price">$168.00</p>
                                                </ins>{" "}
                                                <del>
                                                    <p className="product-price">$250.00</p>
                                                </del>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product product-style-2 equal-elem ">
                                        <div className="product-thumnail">
                                            <a
                                                href="#"
                                                title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                                            >
                                                <figure>
                                                    <img
                                                        src="assets/images/products/digital_15.jpg"
                                                        width={214}
                                                        height={214}
                                                        alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                                                    />
                                                </figure>
                                            </a>
                                            <div className="group-flash">
                                                <span className="flash-item new-label">new</span>
                                                <span className="flash-item sale-label">sale</span>
                                            </div>
                                            <div className="wrap-btn">
                                                <a href="#" className="function-link">
                                                    quick view
                                                </a>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <a href="#" className="product-name">
                                                <span>
                                                    Radiant-360 R6 Wireless Omnidirectional Speaker [White]
                                                </span>
                                            </a>
                                            <div className="wrap-price">
                                                <ins>
                                                    <p className="product-price">$168.00</p>
                                                </ins>{" "}
                                                <del>
                                                    <p className="product-price">$250.00</p>
                                                </del>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product product-style-2 equal-elem ">
                                        <div className="product-thumnail">
                                            <a
                                                href="#"
                                                title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                                            >
                                                <figure>
                                                    <img
                                                        src="assets/images/products/digital_01.jpg"
                                                        width={214}
                                                        height={214}
                                                        alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                                                    />
                                                </figure>
                                            </a>
                                            <div className="group-flash">
                                                <span className="flash-item bestseller-label">
                                                    Bestseller
                                                </span>
                                            </div>
                                            <div className="wrap-btn">
                                                <a href="#" className="function-link">
                                                    quick view
                                                </a>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <a href="#" className="product-name">
                                                <span>
                                                    Radiant-360 R6 Wireless Omnidirectional Speaker [White]
                                                </span>
                                            </a>
                                            <div className="wrap-price">
                                                <span className="product-price">$250.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product product-style-2 equal-elem ">
                                        <div className="product-thumnail">
                                            <a
                                                href="#"
                                                title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                                            >
                                                <figure>
                                                    <img
                                                        src="assets/images/products/digital_21.jpg"
                                                        width={214}
                                                        height={214}
                                                        alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                                                    />
                                                </figure>
                                            </a>
                                            <div className="wrap-btn">
                                                <a href="#" className="function-link">
                                                    quick view
                                                </a>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <a href="#" className="product-name">
                                                <span>
                                                    Radiant-360 R6 Wireless Omnidirectional Speaker [White]
                                                </span>
                                            </a>
                                            <div className="wrap-price">
                                                <span className="product-price">$250.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product product-style-2 equal-elem ">
                                        <div className="product-thumnail">
                                            <a
                                                href="#"
                                                title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                                            >
                                                <figure>
                                                    <img
                                                        src="assets/images/products/digital_03.jpg"
                                                        width={214}
                                                        height={214}
                                                        alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                                                    />
                                                </figure>
                                            </a>
                                            <div className="group-flash">
                                                <span className="flash-item sale-label">sale</span>
                                            </div>
                                            <div className="wrap-btn">
                                                <a href="#" className="function-link">
                                                    quick view
                                                </a>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <a href="#" className="product-name">
                                                <span>
                                                    Radiant-360 R6 Wireless Omnidirectional Speaker [White]
                                                </span>
                                            </a>
                                            <div className="wrap-price">
                                                <ins>
                                                    <p className="product-price">$168.00</p>
                                                </ins>{" "}
                                                <del>
                                                    <p className="product-price">$250.00</p>
                                                </del>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product product-style-2 equal-elem ">
                                        <div className="product-thumnail">
                                            <a
                                                href="#"
                                                title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                                            >
                                                <figure>
                                                    <img
                                                        src="assets/images/products/digital_04.jpg"
                                                        width={214}
                                                        height={214}
                                                        alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                                                    />
                                                </figure>
                                            </a>
                                            <div className="group-flash">
                                                <span className="flash-item new-label">new</span>
                                            </div>
                                            <div className="wrap-btn">
                                                <a href="#" className="function-link">
                                                    quick view
                                                </a>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <a href="#" className="product-name">
                                                <span>
                                                    Radiant-360 R6 Wireless Omnidirectional Speaker [White]
                                                </span>
                                            </a>
                                            <div className="wrap-price">
                                                <span className="product-price">$250.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product product-style-2 equal-elem ">
                                        <div className="product-thumnail">
                                            <a
                                                href="#"
                                                title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                                            >
                                                <figure>
                                                    <img
                                                        src="assets/images/products/digital_05.jpg"
                                                        width={214}
                                                        height={214}
                                                        alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                                                    />
                                                </figure>
                                            </a>
                                            <div className="group-flash">
                                                <span className="flash-item bestseller-label">
                                                    Bestseller
                                                </span>
                                            </div>
                                            <div className="wrap-btn">
                                                <a href="#" className="function-link">
                                                    quick view
                                                </a>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <a href="#" className="product-name">
                                                <span>
                                                    Radiant-360 R6 Wireless Omnidirectional Speaker [White]
                                                </span>
                                            </a>
                                            <div className="wrap-price">
                                                <span className="product-price">$250.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*End wrap-products*/}
                        </div>
                    </div>
                    {/*end main content area*/}
                </div>
                {/*end container*/}
            </main>
            {/*main area*/}
        </>

    );
}
export default Panier;