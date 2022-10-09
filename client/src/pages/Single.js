import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import Menu from '../components/Menu'
import axios from 'axios'
import moment from 'moment'
import { AuthContext } from '../context/AuthContext'

function Single() {

  const [post, setPost] = useState({});

  const { currentUser } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate()

  const postId = location.pathname.split('/')[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`)
        setPost(res.data)
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [postId])

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }


  return (
    <div className='single'>
      <div className='content'>
        <img src={`../upload/${post?.img}`}></img>

        <div className='user'>
          {post.userImg && <img src={post.userImg}></img>}

          <div className='info'>
            <span>{post?.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>

          {currentUser?.username === post.username && (
            <div className='edit'>
              <Link to={`/write?edit=1`} state={post}>
                <img src={Edit} alt='edit'></img>
              </Link>
              <img src={Delete} alt='delete' onClick={handleDelete}></img>
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
         <p>{getText(post.desc)}</p>
      </div>

      <Menu cat={post.cat} />
    </div >
  )
}

export default Single