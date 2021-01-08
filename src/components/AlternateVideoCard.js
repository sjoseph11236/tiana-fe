import React from 'react'

const AlternateVideoCard = ({ video }) => {
  const dateTime = video && video.snippet ? new Date(video.snippet.publishedAt).toDateString().slice(4) : "";
  return (
    <article className="clearfix hentry">
      <div className="col-sm-6  col-sm-push-6 post-listing">
        <div>
          <a href="#!" title={video && video.snippet ? video.snippet.title : "" }>
            <div className="post-listing-img nopin" style={{backgroundImage: `url(${video && video.snippet ? video.snippet.thumbnails.high.url : ""})`}}>
              {/* <iframe width="490" height="546" src={`https://www.youtube.com/embed/${video && video.id ? video.id.videoId : "" }`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
              <div className="left-right-date right-date">
                <time dateTime={dateTime}>{dateTime}</time>
              </div>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAHgAQMAAACyyGUjAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAACxJREFUeNrtwTEBAAAAwiD7p7bGDmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkHVZAAAFam5MDAAAAAElFTkSuQmCC" alt="“LUXURY” SKINCARE ROUTINE" class="p3_invisible" />
        </div>
        </a>
      </div>
      </div>
      <div className="col-sm-6 col-sm-pull-6 post-listing lem_listing_content">
        <div className="pipdig_geo_tag pipdig-meta">
          <span>
            <a>Beauty</a>
          </span>
        </div>

        <h2 className="entry-title p_post_titles font">
          <a href="#!">{video && video.snippet ? video.snippet.title : "" }</a>
        </h2>

        <p>{video && video.snippet ? video.snippet.description : "" }</p>

        <a href={`https://www.youtube.com/watch?v=${video && video.id ? video.id.videoId : "" }`}   target="_blank" className="read-more" style={{marginBottom: "12px"}}>View Video</a>
      </div>
    </article>
  )
}

export default AlternateVideoCard;
