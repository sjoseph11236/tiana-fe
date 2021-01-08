import React from 'react';

const Card = ({ blog }) => {
  const dateTime = blog && blog.createdAt ? new Date(blog.createdAt).toDateString().slice(4) : "";
  return (
    <article className="clearfix hentry">
      <div className="col-sm-6 post-listing">
        <div>
          <a href="#!" title={blog && blog.title ? blog.title : ""}>
            <div className="post-listing-img nopin" style={{ backgroundImage: `url(${blog && blog.image ? blog.image : ""})` }}>
              <div className="left-right-date right-date">
                <time dateTime={dateTime}>{dateTime}</time>
              </div>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAHgAQMAAACyyGUjAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAACxJREFUeNrtwTEBAAAAwiD7p7bGDmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkHVZAAAFam5MDAAAAAElFTkSuQmCC" alt="“LUXURY” SKINCARE ROUTINE" class="p3_invisible" />
            </div>
          </a>
        </div>
      </div>

      <div className="col-sm-6 post-listing lem_listing_content">
        <div className="pipdig_geo_tag pipdig-meta">
          <span>
            <a>Beauty</a>
          </span>
        </div>

        <h2 className="entry-title p_post_titles font">
          <a href="#!">{blog && blog.title ? blog.title : ""}</a>
        </h2>

        <p>{blog && blog.description ? blog.description : ""}</p>

        <a href="#!" className="read-more" style={{ marginBottom: "12px" }}>View Post</a>
      </div>
    </article>
  )
}

export default Card;
