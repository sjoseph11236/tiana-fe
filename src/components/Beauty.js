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

  const fetchBeautyBlogs = async (pageNumber) => {
    try {
      const response = await fetch(`http://localhost:3000/api/blogs/${pageNumber}?limit=4`);
      const data = await response.json();
      setBlogs(data.blogs);
      setMaxPages(data.maxPages);
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
