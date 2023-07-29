import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
function Singlepage() {
  const { id } = useParams();
  const ref = useRef();
  const goToElement = () => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`http://localhost:1314/products/${id}`)
      .then((b) => b.json())
      .then((b) => {
        setData(b)
        setLoading(false)
      });
  }, []);

  const [selectedContent, setSelectedContent] = useState("1");
  return (
    <>
      {loading ? <>loading</> : (<>
        <div className="container">
          <div className="career_inner_header">
            <div className="inner_left">
              <h6>CAREER AT Ether</h6>
              <h1>{data.title}</h1>
              <p>
              We’re always looking for great people!
              If you fit that description, check out our open positions and apply today!
              </p>

              <button onClick={goToElement}>
                <div className="shape_button">
                  <img src="/images/Shapebutton.png" alt="shape" />
                </div>
                Apply now <i className="fa-solid fa-arrow-right-long"></i>
              </button>
            </div>
            <div className="inner_right">
              <div className="shape_inner">
                <img src="/images/Shape inner.png" alt="shape"></img>
              </div>
              <div>
                <h4>Job Description</h4>
                <p>{data.Address}</p>
                <p>{data.department}</p>
                <p>{data.position}</p>
              </div>
            </div>
          </div>
          <div className="inner_details">
            <div className="inner_titles">
              <h4 onClick={() => setSelectedContent("1")} className={selectedContent === "1"?"blue_border":""}>Details <div className={selectedContent === "1"?"border_line":""}></div> </h4>
              <h4 onClick={() => setSelectedContent("2")} className={selectedContent === "2"?"blue_border":""}>Requirements <div className={selectedContent === "2"?"border_line":""}></div></h4>
              <h4 onClick={() => setSelectedContent("3")}  className={selectedContent === "3"?"blue_border":""}>Responsibilities <div className={selectedContent === "3"?"border_line":""}></div></h4>
            </div>
            <ul className="inner_info">
              {(selectedContent === "1") && <>
                <li>
                  Create and edit video content for multi-platform use and
                  distribution for social media channels Facebook, Youtube,
                  Instagram, Snapchat, IGTV, Facebook Stories and Instagram
                  Stories.
                </li>
                <li> Publish Posts on various social media channels</li>
                <li>
                  Design & Create highly engaging industry-related content in both
                  photo, gif & video format
                </li>
                <li>
                  Promote content on social networks and monitor engagement e.g.
                  comments and shares
                </li>
                <li> Research industry-related topics</li>
                <li>Editing audio and sound design on projects</li>
                <li>
                  Engage in opportunities to develop original content and concepts
                  for web and mobile
                </li>
                <li>
                  Create motion graphics and animations using 2D and 3D
                  applications for marketing and promotional usage.
                </li>
                <li>
                  Manage the day-to-day handling of all social media channels such
                  as LinkedIn, Facebook, Twitter, Pinterest, Instagram, Tiktok and
                  YouTube, adapting content to suit different channels
                </li>
              </>}
              {selectedContent === "2" && (<>
                <li>Education and Experience: High school diploma or equivalent to advanced degrees and several years of professional experience.</li>
                <li>Good written and spoken language knowledge</li>
                <li>Technical skills, such as proficiency in a certain programming language, or soft skills, such as communication and teamwork.</li>
                <li>Background Checks:clean criminal record and meet other requirements, such as drug testing.</li>
                <li>Professional licenses, accreditations and certifications</li>
                <li>Personal traits and attributes</li>
                <li>
                  Able to work on weekends and evenings as needed.
                </li>
                <li>Willing to travel at least 3-4 times per year to speak at conferences.</li>
                <li>Ability to analyze and summarize large sets of data</li>
                <li>Time management</li>
              </>)} {(selectedContent === "3") &&
                (<>
                  <li>Oversee all tasks performed in the organization's marketing department</li>
                  <li>Create the company's marketing strategy and ensure it matches with company goals</li>
                  <li>Enhance lead generation activities to drive in new customers</li>
                  <li>Align marketing and sales efforts to improve the promotion of products and services</li>
                  <li>Report the performance of digital and print campaigns</li>
                  <li>Collaborate with agencies to increase brand messaging and work with senior leadership to launch products</li>
                  <li>Build relationships with partners to elevate promotional campaigns</li>
                </>)
              }
            </ul>

          </div>
          <div className="inner_apply" ref={ref}>
            <h2>Apply now</h2>
            <div className="apply_content">
              <input type="text" placeholder="First Name"></input>
              <input type="text" placeholder="Last Name"></input>
              <input type="email" placeholder="Email Id"></input>
              <input type="text" placeholder="Mobile No"></input>
              <textarea
                name=""
                id=""
                cols="160"
                rows="10"
                placeholder="Why do you thing you are good fit for Ether?"
              ></textarea>
            </div>
            <div className="checkmark">
              <input type="checkbox" ></input>
              <p>
                I agree to accept the privacy policy, We will add your contact
                details provided in this form to our system for contacting you
                regarding your request.
              </p>
            </div>
            <button>
              <div className="shape_button">
                <img src="/images/Shapebutton.png" alt="shape" />
              </div>
              Submit Application
              <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
        </div>
      </>)}
    </>

  );
}

export default Singlepage;
