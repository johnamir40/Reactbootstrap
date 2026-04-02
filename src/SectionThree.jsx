import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

export default function SectionThree() {
  return (
    <div className="container-fluid bg-dark py-5">
      <div className="row">
        <div className="col-4 text-white d-flex flex-column gap-3 px-4">
          <h2>cyber</h2>

          <p className="mb-0">
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>

          <div>
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
        </div>
      </div>
    </div>
  );
}
