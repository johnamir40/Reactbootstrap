import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export default function SectionThree() {
  return (
    <div className="container-fluid bg-dark py-5">
      <div className="row">
        <div className="col-4 text-white d-flex flex-column gap-3 px-5 ">
          <h2>cyber</h2>

          <p className="mb-0">
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
          <div className="d-flex gap-4">
            <div className="mt-5">
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div className="mt-5">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className="mt-5">
              <FontAwesomeIcon icon={faTiktok} />
            </div>
            <div className="mt-5">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
        </div>
        <div className="col-4 d-flex flex-column text-white p-3">
          <ul className="list-unstyled d-flex flex-column gap-2">
            <li className="fw-bold mb-2">Services</li>

            <li>
              <a href="#" className="text-white text-decoration-none">
                Bonus program
              </a>
            </li>

            <li>
              <a href="#" className="text-white text-decoration-none">
                Gift cards
              </a>
            </li>

            <li>
              <a href="#" className="text-white text-decoration-none">
                Credit and payment
              </a>
            </li>

            <li>
              <a href="#" className="text-white text-decoration-none">
                Service contracts
              </a>
            </li>

            <li>
              <a href="#" className="text-white text-decoration-none">
                Non-cash account
              </a>
            </li>

            <li>
              <a href="#" className="text-white text-decoration-none">
                Payment
              </a>
            </li>
          </ul>
        </div>
        <div className="col-4 d-flex flex-column text-white p-3">
          <ul className="list-unstyled d-flex flex-column gap-2">
            <li className="fw-bold mb-2">Assistance to the buyer</li>

            <li>
              <a href="#" className="text-white text-decoration-none">
                Find an order
              </a>
            </li>

            <li>
              <a href="#" className="text-white text-decoration-none">
                Exchange and return of goods
              </a>
            </li>

            <li>
              <a href="#" className="text-white text-decoration-none">
                Guarantee
              </a>
            </li>

            <li>
              <a href="#" className="text-white text-decoration-none">
                Frequently asked questions
              </a>
            </li>

            <li>
              <a href="#" className="text-white text-decoration-none">
                Terms of delivery
              </a>
            </li>

            <li>
              <a href="#" className="text-white text-decoration-none">
                Terms of use of the site
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
