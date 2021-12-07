import "./ProductsListBanner.css"
import logo from "../../assets/img/product-list-banner/logo.png"
import banner from "../../assets/img/product-list-banner/banner.jpg"

const ProductsListBanner = () => {
    return (
        <section id="productListBanner" style={{ backgroundImage: `url(${banner})` }}>
            <div className="container">
                <div className="img-container">
                    <img src={logo} className="img-fluid img-banner-product" alt="logo proximity network" />
                </div>
                <p>We find the best organic <span>products stores.</span> </p>
            </div>
        </section>
    )
}
export default ProductsListBanner;