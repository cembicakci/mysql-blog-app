import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Menu({ cat }) {


    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/posts/?cat=${cat}`)
                setPosts(res.data)
            } catch (err) {
                console.log(err)
            }
        }

        fetchData()
    }, [cat])

    // const posts = [
    //     {
    //         id: 1,
    //         title: "My Gallery 1",
    //         desc: "Lorem discContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage",
    //         img: 'https://images.pexels.com/photos/13632955/pexels-photo-13632955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    //     },
    //     {
    //         id: 2,
    //         title: "My Gallery 2",
    //         desc: "Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.. comes from a line in section 1.10.32",
    //         img: 'https://images.pexels.com/photos/12737062/pexels-photo-12737062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    //     }
    // ]

    return (
        <div className='menu'>
            <h1>Other posts you may like</h1>

            {posts.map(post => (
                <div className='post'>
                    <img src={`../upload/${post?.img}`} />
                    <h2>{post.title}</h2>
                    <button>Read more</button>

                </div>
            ))}
        </div>
    )
}

export default Menu