import React from 'react'
import aboutMeImage from "../images/t2.jpg";

const ContentArea = () => {
  return (
    <>
      <div className="col-sm-4 site-sidebar nopin">
        <aside id="pipdig_widget_profile" className="widget pipdig_widget_profile">
          <h3 className="widget-title">
            <span>About me</span>
          </h3>
          <a href="#!">
            <img src={aboutMeImage} alt="about me" className="nopin" data-pin-nopin="true" style={{ webkitBorderRadius: "50%", mozBorderRadius: "50%", borderRadius: "50%" }} />
          </a>
          <p>Welcome to my blog ! I talk about make-up mostly, a splash of beauty &amp; lifestyle.</p>
          <a href="#!" className="more-link">Read More</a>
        </aside>
      </div>
    </>
  )
}

export default ContentArea;
