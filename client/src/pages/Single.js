import React from 'react'
import { Link } from 'react-router-dom'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import Menu from '../components/Menu'

function Single() {
  return (
    <div className='single'>
      <div className='content'>
        <img src="https://images.pexels.com/photos/13298639/pexels-photo-13298639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>

        <div className='user'>
          <img src='https://images.pexels.com/photos/12800709/pexels-photo-12800709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></img>

          <div className='info'>
            <span>Cem</span>
            <p>Posted 2 days ago</p>
          </div>

          <div className='edit'>
            <Link to={`/write?edit=1`}>
              <img src={Edit} alt='edit'></img>
            </Link>
            <img src={Delete} alt='delete'></img>
          </div>
        </div>
        <h1>The standard Lorem Ipsum passage, used since the 1500s</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <Menu />
    </div>
  )
}

export default Single