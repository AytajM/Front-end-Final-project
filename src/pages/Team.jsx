import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Team({ blogs }) {
  return (
    <>
      <div className="container">
        <div className="team_header">
          <img src="./images/Imageman.png" alt=""></img>
          <h1>Javena Melo</h1>
          <span>CEO</span>
          <p>
          The senior manager of our business company. So he is the one who faces partners and the corporate government.
          </p>
          <div className="sosial">
            <ul className="social_signs">
              <li>
                <i className="fa-brands fa-facebook"></i>
              </li>
              <li>
                <i className="fa-brands fa-twitter"></i>
              </li>
              <li>
                <i className="fa-brands fa-instagram"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section id="blog2" className='bgGreen'>
        <div className="container">
          <h2 className="home-title">Read our latest blogs & news</h2>
          <div className="blog2">
            <ul>
              {blogs.slice(0, 2).map(blog =>
                <li key={blog.id}>
                  <Link to={`/blog/${blog.id}`}>
                    <img src={blog.img} alt="" />
                    <div className="blog2-details">
                      <div>
                        <span >Jan 19, 2021</span>
                      </div>
                      <h4>Today’s best design trends for digital products</h4>
                      <div style={{ marginTop: "20px" }} className="home-readmore">Read about us <i className="fa-solid fa-arrow-right"></i></div>

                    </div>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
const t = a => a
export default connect(t)(Team);
