import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Blog({ blogs }) {
  return (
    <>
     <div className="pt_80"></div>
      <section id="blog1">
        <div className="container">
          <div className="blog1">
            <div className="blog1-left">
              <img className='blog1-icon1' src="/contact1-icon1.png" alt="" />
              <span className='home-title2'>TREnding</span>
              <h3 className="home-title">Breaking the code How did we build our Figma plugin </h3>
              <h6 className="home-title4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the. </h6>
              <div className="home-readmore">Read more <i className="fa-solid fa-arrow-right"></i></div>
              <div className="blog1-author">
                <div>
                  <img src="/blog1-icon1.png" alt="" />
                  <span>Andrew Jonson</span>
                </div>
                <img src="/blog1-line.png" alt="" />
                <p>Posted on 27th January 2021</p>
              </div>
              <img className='blog1-img' src="/blog1-img.png" alt="" />
              <img className='blog1-icon2' src="/blog1-icon2.png" alt="" />
            </div>
            <div className="blog1-right">
              <img className='blog1-righticon-1' src="/company1-icon1.png" alt="" />
              <ul>
                <li>
                  <h6>Great design expectations prejudice in digital products in Next Year</h6>
                  <div className="blog1-right-author">
                    <img src="/home6-icon1.png" alt="" />
                    <div>
                      <h5>Andrew Jonson</h5>
                      <span >Jan 19, 2021</span>
                    </div>
                  </div>
                </li>
                <li>
                  <h6>Great design expectations prejudice in digital products in Next Year</h6>
                  <div className="blog1-right-author">
                    <img src="/home6-icon2.png" alt="" />
                    <div>
                      <h5>Mathew Jasele</h5>
                      <span >Jan 19, 2021</span>
                    </div>
                  </div>
                </li>
                <li>
                  <h6>Great design expectations prejudice in digital products in Next Year</h6>
                  <div className="blog1-right-author">
                    <img src="/home6-icon3.png" alt="" />
                    <div>
                      <h5>Hussen Abakas</h5>
                      <span >Jan 19, 2021</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="blog2">
        <div className="container">
          <h2 className="home-title">Read Recent Post</h2>
          <div className="blog2">
            <ul>
              {blogs.slice(0, 4).map(blog =>
                <li key={blog.id}>
                  <Link to={`/blog/${blog.id}`}>
                    <img src={blog.img} alt="" />
                    <div className="blog2-details">
                      <h4>Today’s best design trends for digital products</h4>
                      <div className='blog2-details-author'>
                        <img src="/home6-icon3.png" alt="" />
                        <div>
                          <h5>Andrew Jonson</h5>
                          <span >Jan 19, 2021</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>

      <section id="blog3">
        <div className="container">
          <h2 className="home-title">All posts</h2>
          <ul className="blog3">
            {blogs.slice(4, blogs.length).map(blog =>
              <li key={blog.id}>
                <Link to={`/blog/${blog.id}`}>
                  <img src={blog.img} alt="" />
                  <div className="blog3-details">
                    <h6>We aim to attain the greatest satisfaction for our clients </h6>
                    <p className="home-title4">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                    <div className="blog1-right-author">
                      <img src="/home6-icon3.png" alt="" />
                      <div>
                        <h5>Hussen Abakas</h5>
                        <span >Jan 19, 2021</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </section>
    </>
  )
}
const t = a => a
export default connect(t)(Blog)