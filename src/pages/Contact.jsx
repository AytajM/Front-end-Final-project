import React from 'react'

function Contact() {
  return (
    <>
     <div className="pt_80"></div>
      <section id='contact1'>
        <div className="container">
          <div className="contact1">
            <div className="contact1-left">
              <img src="/contact1-icon1.png" alt="" />
              <span className='home-title2'>CONTACT US</span>
              <h3 className="home-title">Have a Question ?
                Let’s Get in Touch with us 👋</h3>
              <h6 className="home-title4">Fill up the Form  and ou team will get back to within 24 hrs</h6>
              <form>
                <label>
                  Name
                  <input type="text" placeholder='Paresh Srichandan' />
                </label>
                <label>
                  E-mail
                  <input type="email" placeholder='Paresh@pixeto.com' />
                </label>
                <label>
                  Subject
                  <input type="text" placeholder='For web design work Enquire ' />
                </label>
                <label>
                  Message
                  <input type="text" placeholder='Type your Messege' />
                </label>
              </form>
              <button className='home-btn'><img src="/homesection-2.png" alt="" /> Request Quote <i className="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="contact1-right">

              <div>
                <span>Location</span>
                <div className='contact1-line'></div>
                <p>DLF Cybercity, Bhubaneswar,
                  India, &52050</p>
              </div>
              <div>
                <span>Working Hour</span>
                <div className='contact1-line'></div>
                <p>Monday To Friday</p>
                <p>9:00 AM to 8:00 PM </p>
                <span>Our Support Team is available 24Hrs</span>
              </div>
              <div>
                <span>Contact Us</span>
                <div className='contact1-line'></div>
                <p>020 7993 2905</p>
                <span>Hello@ether.com</span>
              </div>
              <ul>
                <li><i class="fa-brands fa-facebook"></i></li>
                <li><i class="fa-brands fa-twitter"></i></li>
                <li><i class="fa-brands fa-instagram"></i></li>
                <li><i class="fa-brands fa-linkedin"></i></li>
              </ul>
            </div>
            <img className='contact1-icon1' src="/contact1-icon2.png" alt="" />
            <img className='contact1-icon2' src="/contact1-icon3.png" alt="" />
          </div>
        </div>
      </section>

      <section id='contact2'>
        <div className="container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24197.39887122433!2d-73.74296816550593!3d40.70315795961368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c26304d5e0e145%3A0xcac130d57f63471!2sElmont%2C%20New%20York%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2saz!4v1680563659663!5m2!1str!2saz" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </>
  )
}

export default Contact