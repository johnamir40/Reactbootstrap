import "./Card.css";
import oppo from "./assets/oppo.png";

export default function Card() {
  return (
    <div className="col-lg-3 col-md-6 col-12">
      <div className="card h-100 p-2 text-center">
        <img className="img-fluid p-2" src={oppo} alt="phone" />

        <h6>Apple iPhone 14 Pro 512GB Gold (MQ233)</h6>
        <h6>$1437</h6>

        <button className="btn w-100 mb-2 bg-dark text-light">
          Add to cart
        </button>
      </div>
    </div>
  );
}
