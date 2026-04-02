import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
export default function Header() {
  // js

  return (
    //html
    <>
      <header className="col-12  p-3">
        <div className="container d-flex justify-content-between align-items-center gap-4 ">
          <h4 className=" cyber fw-bold mb-0">Cyber</h4>
          <input
            className=" search rounded-1 border-0 px-5 py-2 "
            type="search"
            placeholder=" Search "
          />
          <nav className="d-flex justify-content-center align-items-center ">
            <ul className="d-flex list-unstyled gap-3 mb-0 pe-5 text-decoration-none">
              <a className="text-decoration-none text-black" href="#">
                Home
              </a>
              <a className="text-decoration-none text-black-50" href="#">
                About
              </a>
              <a className="text-decoration-none text-black-50" href="#">
                Contact Us
              </a>
              <a className="text-decoration-none text-black-50" href="#">
                Blog
              </a>
            </ul>
            <ul className="d-flex list-unstyled gap-3  mb-0">
              <li>
                <FontAwesomeIcon icon={faHeart} />
              </li>
              <li>
                <FontAwesomeIcon icon={faCartShopping} />
              </li>
              <li>
                <FontAwesomeIcon icon={faUser} />
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <header className="bg-warning  border-bottom border-dark-50"></header>
    </>
  );
}
