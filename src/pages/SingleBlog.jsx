import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";

function SingleBlog({ blogs }) {
  console.log(blogs)
  let { id } = useParams();
  const [blog, setBlog] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setBlog(blogs?.find(blog => blog.id === parseInt(id)))
    if (blog) {
      setLoading(false)
    }
  }, [])
  return (
    <>
      {loading ? <><h1>Loading...</h1></> :
        <>
         <div className="pt_80"></div>
          <section id="singleblog1">
            <div className="container">
              <img className='company1_icon1' src="/company1-icon1.png" alt="" />
              <img className='company1_icon2' src="/contact1-icon1.png" alt="" />
              <h3 className="home-title">Breaking the code How did we build our Figma plugin </h3>
              <h6 className="home-title4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. </h6>
              <div className="blog1-author">
                <div>
                  <img src="/blog1-icon1.png" alt="" />
                  <span>Andrew Jonson</span>
                </div>
                <img src="/blog1-line.png" alt="" />
                <p>Posted on 27th January 2021</p>
              </div>
              <img className='singleblog1-img' src={blog?.img} alt="" />
            </div>
          </section>
          <section id="singleblog2">
            <div className="container">
              <div className="singleblog2">
                <h3 className="home-title3">Transform Your Idea Into Reality with Ether a Leading Digital Agency</h3>
                <p className="home-title4">Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice and tone for error messages.</p>
                <p className="home-title4">Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged.</p>
                <p className="home-title4">Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged.</p>
                <p className="home-title4">Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice and tone for error messages.</p>
                <h4 className="home-title5">Transform Your Idea Into Reality with Ether a Leading Digital Agency</h4>
                <p className="home-title4">Step 1: Download the plugin from Figma community, search Ghost UXWriter <br />
                  Step 2: Open the plugin on your artboard <br />
                  Step 3: Search for your copy or look through the different categories of the copies <br />
                  Step 4: Select the type of error you are looking for. You will get three different copies for each error <br />
                  Step 5: Tap on the cards to insert text in your frames <br />
                  And you are all geared up to make your UX copies more fun and exciting 😎</p>
                <h4 className="home-title5">Transform Your Idea Into Reality with Ether a Leading Digital Agency</h4>
                <p className="home-title4">Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice and tone for error messages.</p>
              </div>
            </div>
          </section>
        </>}
    </>
  )
}
const t = a => a
export default connect(t)(SingleBlog)