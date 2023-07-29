import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CareerPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const controller = new AbortController();
    fetch("http://localhost:1314/products", {
      signal: controller.signal,
    })
      .then((a) => a.json())
      .then((a) => {
        setProducts(a);
        setLoading(false);
      });
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <>
      {loading ? (
        <div className="loading">
          <div></div>
        </div>
      ) : (
        <>
          <div className="container">
            <div className="career_header">
              <div className="career_headerTop">
                <div className="shape_header">
                  <img src="./images/ShapesTop.png" alt="shape" />
                </div>
                <div className="header_content">
                  <h6>Career at finsweet</h6>
                  <h2>
                    We hired people who are Always Passionate about what they do
                  </h2>
                  <p>
                    We want all candidates – from entry level to leadership. Our
                    mission is to organize the world’s information and make it
                    universally accessible and useful.
                  </p>
                </div>
              </div>
              <div className="careerhead_img">
                <img src="./images/career.png" alt="career" />
              </div>
              <div className="careerhead_bottom">
                <h5>See Our open positions</h5>
                <h5>
                  <i className="fa-regular fa-hand-point-down"></i>
                </h5>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="career_section">
              <div className="careers">
                {products.map((a) => (
                  <div className="career">
                    <div className="career_sectionContent">
                      <h4>{a.title}</h4>
                      <p>{a.location} </p>
                      <p>{a.money}</p>
                      <div>
                        <Link to={`/single/${a.id}`}>
                          <h3>Apply now </h3>
                          <i className="fa-solid fa-arrow-right-long"></i>
                        </Link>
                      </div>
                    </div>
                  </div>

                  // <Product key={a.id} product={a} />
                ))}
              </div>
            </div>
          </div>

          <div className="career_section2">
            <div className="container">
              <div className="career_sect2">
                <div className="career_section2_top">
                  <h6>OUR WORK & CULTURE</h6>
                  <h1>Come and join a team of highly skilled professionals.</h1>
                  <p>
                    We offer a number of benefits, high-quality tools, and a
                    pleasant working environment, challenging projects and a
                    friendly atmosphere with the colleagues who are always ready
                    to give you help and tell a good joke.
                  </p>
                </div>
                <div className="career_section2_bottom">
                  <div className="career_process">
                    <div className="career_content">
                      <div className="icon_container">
                        <img
                          src="./images/icon11.png"
                          className="icons"
                          alt="icon"
                        ></img>
                      </div>
                      <h4>Covid-19 insurance</h4>
                      <p>
                        This is generally designed to prevent losses that result
                        from direct physical relationships.
                      </p>
                    </div>
                  </div>
                  <div className="career_process">
                    <div className="career_content">
                      <div className="icon_container">
                        <img
                          src="./images/icon22.png"
                          className="icons"
                          alt="icon"
                        ></img>
                      </div>
                      <h4>Flexible working time</h4>
                      <p>
                        Our work arrangement that allows employees to choose the
                        start and end time for their workday.
                      </p>
                    </div>
                  </div>
                  <div className="career_process">
                    <div className="career_content">
                      <div className="icon_container">
                        <img
                          src="./images/icon33.png"
                          className="icons"
                          alt="icon"
                        ></img>
                      </div>
                      <h4>Work from home</h4>
                      <p>
                        Home work takes place in someone’s private home, it has
                        long been invisible.
                      </p>
                    </div>
                  </div>
                  <div className="career_process">
                    <div className="career_content">
                      <div className="icon_container">
                        <img
                          src="./images/icon44.png"
                          className="icons"
                          alt="icon"
                        ></img>
                      </div>
                      <h4>Annual retreats</h4>
                      <p>
                        Our goal is to identify the priorities for the coming
                        year and develop a plan to achieve them.
                      </p>
                    </div>
                  </div>
                  <div className="career_process">
                    <div className="career_content">
                      <div className="icon_container">
                        <img
                          src="./images/icon55.png"
                          className="icons"
                          alt="icon"
                        ></img>
                      </div>
                      <h4>Learning stipend</h4>
                      <p>
                        A learning stipend is a compensation that helps
                        employees learn and grow professionally.
                      </p>
                    </div>
                  </div>
                  <div className="career_process">
                    <div className="career_content">
                      <div className="icon_container">
                        <img
                          src="./images/icon66.png"
                          className="icons"
                          alt="icon"
                        ></img>
                      </div>
                      <h4>Gym memmbership</h4>
                      <p>
                        It gives you access to incredible programs, services
                        that help you achieve your goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default CareerPage;
