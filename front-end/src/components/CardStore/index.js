import "./CardStore.css"
import imgPrueba from "../../assets/img/stores-list-banner/img-prueba-card.jpg"
import icon from "../../assets/img/stores-list-banner/icon-direction.png"

const CardStore = () => {
    return (

        <div className="row align-items-center mb-5">
            <div className="col-6">
                <div class="img-container">
                    <img src={imgPrueba} className="img-fluid card-img" alt="picture store" />
                </div>
            </div>
            <div className="col-6 card-store-text">
                <h1>Store Bioproduct </h1>
                <p>Organic supermarket</p>
                <div className="card-direction">
                    <a href="https://www.google.es/maps/?hl=es" target="_blank"><img src={icon} className="img-fluid icon-direction" alt="icon" /></a>
                    <p>Carrer de sant Quinti, 89<span className="d-block">08041 barcelona</span></p>
                </div>
                <a class="btn btn-primary btn-card-store" href="#" role="button">view profile</a>
            </div>
        </div>

    )
}

export default CardStore;