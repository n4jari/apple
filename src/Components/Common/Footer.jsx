import React from "react";
import {
  About,
  AppleStore,
  Business,
  Government,
  Education,
  Healthcare,
  ShopAndLearn,
  Services,
  PrivicyList,
  AppleValues,
  Account,
} from "./FooterItems";

const Footer = () => {
  return (
    <div className="apple">
      <footer>
        <div className="description">
          <p>
            Claim based on iPhone12 Ceramic Shield front compared with
            previous-generation iPhone.
          </p>

          <p>
            High Frame Rate HDR content is currently limited. Additional content
            available soon.
          </p>
        </div>

        <div className="list">
          <nav>
            <ul>
              <li>
                <a>
                  <b>Shop and Learn</b>
                </a>
              </li>
              {ShopAndLearn.map((item, index) => (
                <li key={index}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav>
            <ul>
              <li>
                <a>
                  <b>Services</b>
                </a>
              </li>
              {Services.map((item, index) => (
                <li key={index}>
                  <a href="#">{item}</a>
                </li>
              ))}
              <br></br>

              <li>
                <a>
                  <b>Account</b>
                </a>
              </li>

              {Account.map((item, index) => (
                <li key={index}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav>
            <ul>
              <li>
                <a>
                  <b>Apple Store</b>
                </a>
              </li>
              {AppleStore.map((item, index) => (
                <li key={index}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav>
            <ul>
              <li>
                <a>
                  <b>For Business</b>
                </a>
              </li>

              {Business.map((item, index) => (
                <li key={index}>
                  <a href="#">{item}</a>
                </li>
              ))}

              <br></br>
              <li>
                <a>
                  <b>For Education</b>
                </a>
              </li>

              {Education.map((item, index) => (
                <li key={index}>
                  <a href="#">{item}</a>
                </li>
              ))}

              <br></br>
              <li>
                <a>
                  <b>For Healthcare</b>
                </a>
              </li>

              {Healthcare.map((item, index) => (
                <li key={index}>
                  <a href="#">{item}</a>
                </li>
              ))}

              <br></br>

              <li>
                <a>
                  <b> For Government</b>
                </a>
              </li>

              {Government.map((item, index) => (
                <li key={index}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav>
            <ul>
              <li>
                <a>
                  <b>Apple Values</b>
                </a>
              </li>
              {AppleValues.map((item, index) => (
                <li key={index}>
                  <a href="#">{item}</a>
                </li>
              ))}
              <br></br>

              <li>
                <a>
                  <b>About Apple</b>
                </a>
              </li>

              {About.map((item, index) => (
                <li key={index}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="more">
          <p>
            More ways to shop: <a href="#"> Find an Apple Store</a> or{" "}
            <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
          </p>
        </div>

        <div className="copyright">
          <p>
            Copyright {new Date().getFullYear()} |{" "}
            <a href="http://n4jari.ir" target="_blank">
              {" "}
              &copy;n4jari{" "}
            </a>
          </p>

          <br />
          <div className="privicyList">
            {PrivicyList.map((item, index) => (
              <span key={index}>
                <a href="#"> {item}</a>
              </span>
            ))}
            <a href="#" className="usa">
              Iran
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
