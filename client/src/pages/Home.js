import React from 'react'
import { Link } from 'react-router-dom'

function Home() {

  const posts = [
    {
      id: 1,
      title: "My Gallery 1",
      desc: "Lorem discContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage",
      img: 'https://images.pexels.com/photos/13632955/pexels-photo-13632955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      title: "My Gallery 2",
      desc: "Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.. comes from a line in section 1.10.32",
      img: 'https://images.pexels.com/photos/12737062/pexels-photo-12737062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ]

  return (
    <div className='home'>
      <div className='posts'>
        {posts.map(post => (
          <div className='post' key={post.id}>
            <div className='img'>
              <img src={post.img} />
            </div>

            <div className='content'>
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home