function Section() {
  return (
    <section id="newsletter">
      <div className="container">
        <div className="newsletter">
          <img className="newsletter-icon" src="/newsletter-icon.png" alt="" />
          <div className="newsletter-text">
            <span className="home-title2">NEWSLETTER</span>
            <h5 className="home-title3">Subscribe our News Letter
              to get Latest Updates.</h5>
          </div>
          <div className="newsletter-form">
            <input type="email" placeholder="Paresh@Pixeto.com" />
          </div>
          <img className="newsletter-icon2" src="/newsletter-icon2.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Section;
