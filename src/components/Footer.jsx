import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer_top">
          <div className="shape_footer">
            <img src="/images/Shape.png" alt="shape" />
          </div>
          <div className="footer_left">
            <h2>Let's make something special</h2>
            <h5>
              Let's talk! <i className="fa-solid fa-thumbs-up"></i>
            </h5>
            <p>020 7993 2905</p>
            <p>hi@finsweet.com</p>
            <img src="/images/Line.png" className="line" alt="line" />
            <span>
              Cybercity, Bhubaneswar, <br />
              India, &52050
            </span>
          </div>
          <div className="footer_right">
            <div className="links">
              <ul className="link">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Service</a>
                </li>
                <li>
                  <a href="">Company</a>
                </li>
                <li>
                  <a href="">Career</a>
                </li>
                <li>
                  <a href="">News</a>
                </li>
              </ul>
            </div>
            <div className="service">
              <ul>
                <li className="bold">
                  <a href="">Service</a>
                </li>
                <li>
                  <a href="">Technical support</a>
                </li>
                <li>
                  <a href="">Testing</a>
                </li>
                <li>
                  <a href="">Development</a>
                </li>
                <li>
                  <a href="">AWS/Azure</a>
                </li>
                <li>
                  <a href="">Consulting</a>
                </li>
                <li>
                  <a href="">Information Technology</a>
                </li>
              </ul>
            </div>
            <div className="resources">
              <ul>
                <li className="bold">
                  <a href="">Resourses</a>
                </li>
                <li>
                  <Link to="/team"> About Us</Link>
                </li>
                <li>
                  <a href="">Testimonial</a>
                </li>
                <li>
                  <Link to="/Privacypolicy">Privacy Policy</Link>
                </li>
                <li>
                  <a href="">Terms of use</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
              </ul>
            </div>
            <div className="contact">
              <img src="/images/Shapesf.png" className="shapeF" alt="shape" />
              <h4>Contact us</h4>
              <i className="fa-solid fa-arrow-right-long"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="bottom container">
          <div className="bottom_left">
            <img src="/images/Logofooter.svg" alt="logo" />
            <h6>©2021 Finsweet</h6>
          </div>
          <div className="bottom_right">
            <ul className="socialSigns">
              <li>
                <a href="https://www.facebook.com/" target="_blank">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/" target="_blank">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/" target="_blank">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
