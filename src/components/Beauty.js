import React, { useEffect, useState } from 'react';
import Card from './Card';
import AlternateCard from './AlternateCard';
import PageNumbers from './PageNumbers';



const Beauty = () => {
  const [blogs, setBlogs] = useState([{}]);
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(4);
  const [startIdx, setStartIdx] = useState(1);
  const [endIdx, setEndIdx] = useState(5);

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

  const fetchBeautyBlogs = async (pageNumber) => {
    try {
      setBlogs(defaultBlogs);
      // setMaxPages(data.maxPages);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchBeautyBlogs(page);
  }, [])

  const updatePage = (pageNumber) => {
    setPage(pageNumber);
    fetchBeautyBlogs(pageNumber);

    if (pageNumber == endIdx) {
      let temp = endIdx;
      setStartIdx(endIdx);
      setEndIdx(temp + 4);
    }
    else if (pageNumber < startIdx) {
      let temp = startIdx;
      setStartIdx(1)
      setEndIdx(temp);
    }
  }

  return (
    <>
      <div className="site-main">
        <div className="clearfix container">
          {/* row */}
          <div className="row">
            <div id="content" className="content-area">
              {!blogs ? "Loading.." : blogs.map(blog => {
                if (blog.id % 2 === 0) {
                  return <Card blog={blog} key={blog.id} />
                }
                else {
                  return <AlternateCard blog={blog} key={blog.id} />
                }
              })}
              <PageNumbers
                updatePage={updatePage}
                page={page}
                maxPages={maxPages}
                startIdx={startIdx}
                endIdx={endIdx} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Beauty;
