import "./SectionOne.css";
import iphone from "./assets/iphone.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faShop,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";

export default function SectionOne() {
  return (
    <div className="container pt-3">
      <div className="row align-items-center">
        {/* Image */}
        <div className="col-6">
          <img className="img-fluid" src={iphone} alt="iphone" />
        </div>

        {/* Content */}
        <div className="col-6 d-flex flex-column justify-content-center gap-3">
          <h1 className="iphone">Apple iphone 14 pro max</h1>

          {/* Price */}
          <div className="d-flex gap-3 align-items-center">
            <h2 className="mb-0">$1399</h2>
            <h2 className="mb-0 text-black-50 text-decoration-line-through">
              $1499
            </h2>
          </div>

          {/* Description */}
          <p className="text-black-50">
            Enhanced capabilities thanks to an enlarged display of 6.7 inches
            and all-day battery life. Capture incredible photos in low and
            bright light with the new dual-camera system.
          </p>

          {/* Buttons */}
          <div className="d-flex gap-2">
            <button className="btn btn-light">Add To Wishlist</button>
            <button className="btn btn-dark">Add To Cart</button>
          </div>

          {/* Shipping */}
          <div className="d-flex p-4 mt-3 justify-content-between">
            <div className="newicon d-flex align-items-center gap-2">
              <FontAwesomeIcon icon={faTruck} />
              <span>Free Delivery</span>
            </div>

            <div className="newicon d-flex align-items-center gap-2">
              <FontAwesomeIcon icon={faShop} />
              <span>In Stock</span>
            </div>

            <div className="newicon d-flex align-items-center gap-2">
              <FontAwesomeIcon icon={faCertificate} />
              <span>1 Year Warranty</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
