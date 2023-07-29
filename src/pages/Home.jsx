import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Home({ blogs }) {
  return (
    <>
      <div className="pt_80"></div>
      <section id="home-section1">
        <div className="container">
          <div className="home-section1-content">
            <div className="home-section1-left">
              <img src="/homesection-1.png" alt="" />
              <h3>Transform Your Idea Into Reality with Finsweet</h3>
              <p>The entire Finsweet team knows what's good with Webflow and you can too with 1 week and a good attitude.</p>
              <Link to = "/request"><button className='home-btn'><img src="/homesection-2.png" alt="" /> Request Quote <i className="fa-solid fa-arrow-right"></i></button></Link>
            </div>
            <div className="home-section1-right">
              <img src="/homesection-3.png" alt="" />
              <img src="/homesection1-right.png" alt="" />
              <img className='home-icon' src="/homesection-4.png" alt="" />
            </div>
          </div>
          <div className="home-section1-bottom">
            <div className="home-section1-bottom-first">
              <span>Our Clients</span>
              <p>We've Worked with</p>
            </div>
            <ul>
              <li><img src="/herologo1.png" alt="" /></li>
              <li><img src="/herologo2.png" alt="" /></li>
              <li><img src="/herologo3.png" alt="" /></li>
              <li><img src="/herologo4.png" alt="" /></li>
              <li><img src="/herologo5.png" alt="" /></li>
            </ul>
          </div>
        </div>
      </section>

      <section id='home2'>
        <div className="container">
          <div className="home2-first"><span className='home-title2'>About us</span></div>
          <div className="home2-second">
            <h3 className='home-title'>The company leads entire webdesign process from concept to delivery.</h3>
            <div>
              <h5 className="home-title3">The Era Of Technology.</h5>
              <p className='home-title4'>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. </p>
            </div>
          </div>
          <div className="home2-third">
            <img src="/home-section2-1.png" alt="" />
            <img src="/home-section2-2.png" alt="" />
            <img src="/home-section2-3.png" alt="" />
            <img src="/home2-icon-2.png" alt="" />
          </div>
          <div className="home2-fourth">
            <ul>
              <li>
                <span className='home-title3'>1560+</span>
                <img src="/home2-icon.png" alt="" />
                <p className='home2-fourth-last'>Project Delivered</p>
              </li>
              <li>
                <span className='home-title3'>100+</span>
                <img src="/home2-icon.png" alt="" />
                <p className='home2-fourth-last'>Professional</p>
              </li>
              <li>
                <span className='home-title3'>950+</span>
                <img src="/home2-icon.png" alt="" />
                <p className='home2-fourth-last'>Happy Client</p>
              </li>
              <li>
                <span className='home-title3'>10yrs</span>
                <img src="/home2-icon.png" alt="" />
                <p className='home2-fourth-last'>Experience</p>
              </li>
            </ul>
            <div className="home-readmore">Read about us <i className="fa-solid fa-arrow-right"></i></div>
          </div>
        </div>
      </section>

      <section id="home3">
        <div className="container">
          <div className="home3">
            <div className="home3-left">
              <span className='home-title2'>Our expertise</span>
              <h3 className='home-title'>We want to get local identification in every corner of the world in this era of global citizenship</h3>
              <p className='home-title4'>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. </p>
            </div>
            <div className="home3-right">
              <img src="/home3-icon.png" alt="" />
              <ul>
                <li>
                  <img src="/home3-icon2.png" alt="" />
                  <div>
                    <h6 className="home-title5">On Time Delivery</h6>
                    <p className='home-title4'>Through True Rich Attended does no end it his mother since real had half every him.</p>
                  </div>
                </li>
                <li>
                  <img src="/home3-icon3.png" alt="" />
                  <div>
                    <h6 className="home-title5">Best Quality</h6>
                    <p className='home-title4'>Through True Rich Attended does no end it his mother since real had half every him.</p>
                  </div>
                </li>
                <li>
                  <img src="/home3-icon4.png" alt="" />
                  <div>
                    <h6 className="home-title5">Support Assist</h6>
                    <p className='home-title4'>Through True Rich Attended does no end it his mother since real had half every him.</p>
                  </div>
                </li>
                <img src="/home3-bottom.png" alt="" />
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="home4">
        <div className="container">
          <span className="home-title2">Our Services</span>
          <h3 className="home-title">We build software solutions that solve client's business challenges</h3>
          <button className='home-btn'><img src="/homesection-2.png" alt="" /> Request Quote <i className="fa-solid fa-arrow-right"></i></button>
          <ul>
            <li>
              <img src="/home4-icon1.png" alt="" />
              <h6 className="home-title5">Technical support</h6>
              <p className='home-title4'>We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service</p>
              <div className="home-readmore">Read about us <i className="fa-solid fa-arrow-right"></i></div>
            </li>
            <li>
              <img src="/home4-icon2.png" alt="" />
              <h6 className="home-title5">Technical support</h6>
              <p className='home-title4'>We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service</p>
              <div className="home-readmore">Read about us <i className="fa-solid fa-arrow-right"></i></div>
            </li>
            <li>
              <img src="/home4-icon3.png" alt="" />
              <h6 className="home-title5">Technical support</h6>
              <p className='home-title4'>We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service</p>
              <div className="home-readmore">Read about us <i className="fa-solid fa-arrow-right"></i></div>
            </li>
          </ul>
        </div>
      </section>

      <div className="section2">
        <div className="container">
          <div className="sect2">
            <div className="section2_top section1_left">
              <div className="shapeTop">
                <img src="./images/ShapesTop.png" alt=""></img>
              </div>
              <h6>our process</h6>
              <h1>The process we are working <br />With Our client Worldwide</h1>
              <p>
                Through True Rich Attended does no end it his mother since real
                had half every <br /> him case in packages enquire we up ecstatic
                unsatiable.
              </p>
            </div>
            <div className="section2_bottom">
              <div className="process">
                <div className="box">
                  <div className="number">01</div>
                  <div className="icon_container">
                    <img
                      src="./images/Icon1.png"
                      className="icons"
                      alt="icon"
                    ></img>
                  </div>
                  <div className="content">
                    <h4>Discover</h4>
                    <p>
                      We aim to attain the greatest satisfaction for our clients
                      and be one of the prominent.
                    </p>
                  </div>
                </div>
                <div className="shapeSection2">
                  <img src="./images/ShapesSect2.png" alt="shape"></img>
                </div>
              </div>
              <div className="lines1">
                <img src="./images/lines.png" alt="lines"></img>
              </div>
              <div className="process">
                <div className="box">
                  <div className="number">02</div>
                  <div className="icon_container">
                    <img
                      src="./images/Icon2.png"
                      className="icons"
                      alt="icon"
                    ></img>
                  </div>
                  <div className="content">
                    <h4>Designing</h4>
                    <p>
                      We aim to attain the greatest satisfaction for our clients
                      and be one of the prominent.
                    </p>
                  </div>
                </div>
              </div>
              <div className="process">
                <div className="box">
                  <div className="number">03</div>
                  <div className="icon_container">
                    <img
                      src="./images/Icon3.png"
                      className="icons"
                      alt="icon"
                    ></img>
                  </div>
                  <div className="content">
                    <h4>Development</h4>
                    <p>
                      We aim to attain the greatest satisfaction for our clients
                      and be one of the prominent.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lines2">
                <img src="./images/lines.png" alt="lines"></img>
              </div>
              <div className="process">
                <div className="box">
                  <div className="number">04</div>
                  <div className="icon_container">
                    <img
                      src="./images/Icon4.png"
                      className="icons"
                      alt="icon"
                    ></img>
                  </div>
                  <div className="content">
                    <h4>Testing</h4>
                    <p>
                      We aim to attain the greatest satisfaction for our clients
                      and be one of the prominent.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lines3">
                <img src="./images/lines.png" alt="lines"></img>
              </div>
              <div className="process">
                <div className="box">
                  <div className="number">05</div>
                  <div className="icon_container">
                    <img
                      src="./images/Icon5.png"
                      className="icons"
                      alt="icon"
                    ></img>
                  </div>
                  <div className="content">
                    <h4>Deployment</h4>
                    <p>
                      We aim to attain the greatest satisfaction for our clients
                      and be one of the prominent.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lines4">
                <img src="./images/lines.png" alt="lines"></img>
              </div>
              <div className="process">
                <div className="shape2Section2">
                  <img
                    src="./images/ShapesSect2.png"
                    className="shape2section2"
                    alt="shape"
                  ></img>
                </div>
                <div className="box">
                  <div className="number">06</div>
                  <div className="icon_container">
                    <img
                      src="./images/Icon6.png"
                      className="icons"
                      alt="icon"
                    ></img>
                  </div>
                  <div className="content">
                    <h4>Maintenance</h4>
                    <p>
                      We aim to attain the greatest satisfaction for our clients
                      and be one of the prominent.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id='home6'>
        <div className="container">
          <div className="home6">
            <div className="home6-left">
              <img src="/home3-icon.png" alt="" />
              <h3 className='home-title'>Our customers love what we do</h3>
              <p className='home-title5'>Transform your idea into reality with finsweet</p>
              <p className="home-title4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
              <div>
                <img src="/home6-icon1.png" alt="" />
                <img src="/home6-icon2.png" alt="" />
                <img src="/home6-icon3.png" alt="" />
              </div>
              <p className='home-title5'>30+ Customer Reviews</p>
            </div>
            <div className="home6-right">
              <img src="/home6-icon4.png" alt="" />
              <div className="home6-right-content">
                <h5 className="home-title5">Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!</h5>
                <div className="home6-right-bottom">
                  <div className="home6-right-author">
                    <img src="/home6-icon1.png" alt="" />
                    <div>
                      <h6 className="home-title5">Johnny Andro</h6>
                      <span className='home-title4'>Director, Company</span>
                    </div>
                  </div>
                  <img src="/home6-img.png" alt="" />
                </div>
              </div>
              <img className='home6-icon' src="/home-quote.png" alt="" />
            </div>
          </div>
        </div>
      </section>

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
  )
}
const t = a => a
export default connect(t)(Home)