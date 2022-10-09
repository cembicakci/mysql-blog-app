import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Home() {

  const [posts, setPosts] = useState([]);

  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${cat}`)
        setPosts(res.data)
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [cat])

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div className='home'>
      <div className='posts'>
        {posts.map((post, idx) => (
          <div className='post' key={idx}>
            <div className='img'>
              <img src={`../upload/${post.img}`} />
            </div>
            <div className='content'>
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getText(post.desc)}</p>
              <a className='btn' href={`/post/${post.id}`}>Read More</a>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home