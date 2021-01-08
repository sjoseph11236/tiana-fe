import React from 'react';
import ContentArea from "./ContentArea";
import mainImage from "../images/main.jpg";


const AboutMe = () => {
  return (
    <>
      <div className="site-main">
        <div className="clearfix container">
          {/* row */}
          <div className="row">
            <div className="col-sm-8 content-area">
              <article id="post-82" className="clearfix post-82 page type-page status-publish hentry">
                <div className="clearfix entry-content">
                  <div>
                    <figure className="wp-block-image">
                      <div>
                        <img id="main-image" src={mainImage} alt="main-image" />
                      </div>
                    </figure>
                    <p className="has-text-align-center">
                      I’m a 25-year-old Honduran (more specifically Garifuna)- American beauty blogger from Brooklyn, NY, currently living in Philadelphia. I’m a former kindergarten teacher and graduate of Columbia University with a degree in Environmental and Political Sciences. When I’m not filming beauty tutorials, cooking or practicing some sort of self-care, you can find me at Target!
                    </p>
                    <h2 className="has-text-align-center">Why did you start a blog?</h2>
                    <p className="has-text-align-center">After I started my Instagram page for beauty, I realized that I never used all of the pictures I took after filming. I never wanted my Instagram captions to be super long, so I didn’t always get to tell a story with my pictures or explain some of the funny behind the scenes moments that happen. So, I finally mustered up the courage to get into the world of blogging and share more of myself with my you all. I’m excited to share my voice and my passion for makeup with y’all (and yes, I do say y’all in real life)! </p>
                  </div>
                </div>
              </article>
            </div>
            <ContentArea />
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe;
