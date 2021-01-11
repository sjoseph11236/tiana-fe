import React, { useEffect, useState } from 'react';
import home1 from "../images/home1.jpg";
import home2 from "../images/home2.jpg";
import t from "../images/t.jpg";
import t11 from "../images/t11.jpg";
import t3 from "../images/t-3.jpg"
import t7 from "../images/t-7.jpg"
import AlternateVideoCard from './AlternateVideoCard';
import VideoCard from './VideoCard';
import AlternateCard from './AlternateCard';
import Card from "./Card";

const Home = () => {
  const defaultVideos = [{
    id: {
      videoId: "ALXEHi_xpe8"
    },
    snippet: {
      publishedAt: "2019-08-22T03:24:00",
      title: "Red Monochrome-ish Makeup Look",
      thumbnails: {
        high: {
          url: "https:\/\/i.ytimg.com\/vi\/ALXEHi_xpe8\/maxresdefault.jpg",
        }
      },
      description: "Don't forget to subscribe, like and share! 🤗 Follow me on Instagram @tiana.lino ",
    }
  }, {
    id: {
      videoId: "e5D4uPDtlLU"
    },
    snippet: {
      publishedAt: "2020-05-20T03:24:00",
      title: "SOFT GLAM EID LOOK | ABH X AMREZY",
      thumbnails: {
        high: {
          url: "https:\/\/i.ytimg.com\/vi\/e5D4uPDtlLU\/maxresdefault.jpg",
        }
      },
      description: "Today I used the ABH x Amrezy palette to create this soft glam look.",
    }
  }]

  const defaultBlogs = [{
    "id": 1,
    "title": "Makeup, Skin Care & Hair Tips",
    "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source...",
    "image": "https://2.bp.blogspot.com/-_RCm7GFZ_nI/Wn76L3b6v5I/AAAAAAAADPo/WoF3GE3aiW4-tBoRelx0mCOF7otMfgmbgCLcBGAs/s1600/RANDOM1.jpg",
    "userId": 1,
    "createdAt": "2020-12-17T03:24:00",
  }, {
    "id": 2,
    "title": "Naked",
    "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source...",
    "image": "https://www.abeautifulride.co.uk/wp/wp-content/uploads/2017/01/IMG_4394-1024x683.jpg",
    "userId": 2,
    "createdAt": "2020-12-17T03:24:00",
  }]

  const [blogs, setBlogs] = useState([{}]);
  const [videos, setVideos] = useState([{}]);

  const fetchBeautyBlogs = () => {
    setBlogs(defaultBlogs);
  };

  const fetchYoutubeVideos = () => {
    setVideos(defaultVideos);
  };

  useEffect(() => {
    fetchBeautyBlogs();
    fetchYoutubeVideos();
  }, [])

  return (
    <div className="site-main">
      <div className="clearfix container">
        {/* row */}
        <div id="featured-panels" className="row">
          <div className="col-sm-4 featured-panel">
            <a href="https://www.youtube.com/user/professorlino/featured" target="_blank">
              <div className="cover-me" style={{ backgroundImage: `url(${t11})` }}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAHgAQMAAACyyGUjAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAACxJREFUeNrtwTEBAAAAwiD7p7bGDmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkHVZAAAFam5MDAAAAAElFTkSuQmCC" alt="Youtube Channel" class="p3_invisible" />
              </div>
              <div className="feature-panel-overlay">
                <h3>My Youtube </h3>
              </div>
            </a>
          </div>

          <div className="col-sm-4 featured-panel">
            <a href="https://www.instagram.com/tiana.lino/" target="_blank">
              <div className="cover-me" style={{ backgroundImage: `url(${t3})` }}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAHgAQMAAACyyGUjAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAACxJREFUeNrtwTEBAAAAwiD7p7bGDmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkHVZAAAFam5MDAAAAAElFTkSuQmCC" alt="Youtube Channel" class="p3_invisible" />
              </div>
              <div className="feature-panel-overlay">
                <h3>My Instagram</h3>
              </div>
            </a>
          </div>

          <div className="col-sm-4 featured-panel" target="_blank">
            <a href="https://www.facebook.com/Makeup-by-Tiana-499087630574268/">
              <div className="cover-me" style={{ backgroundImage: `url(${t7})` }}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAHgAQMAAACyyGUjAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAACxJREFUeNrtwTEBAAAAwiD7p7bGDmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkHVZAAAFam5MDAAAAAElFTkSuQmCC" alt="Youtube Channel" class="p3_invisible" />
              </div>
              <div className="feature-panel-overlay">
                <h3>My Facebook</h3>
              </div>
            </a>
          </div>
          {/* <ContentArea/> */}
          <div className="clearfix"></div>
        </div>
        <h3 className="widget-title">
          <span>My Blogs</span>
        </h3>
        {blogs && blogs.map(blog => {
          if (blog.id % 2 === 0) {
            return <Card blog={blog} key={blog.id} />
          }
          else {
            return <AlternateCard blog={blog} key={blog.id} />
          }
        })}
        <h3 className="widget-title">
          <span>Subscribe to My Channel</span>
        </h3>
        {videos && videos.map((video, idx) => {
          if (idx % 2 === 0) {
            return <AlternateVideoCard video={video} key={idx} />
          }
          else {
            return <VideoCard video={video} key={idx} />
          }
        })}
      </div>
    </div>
  )
}

export default Home;
