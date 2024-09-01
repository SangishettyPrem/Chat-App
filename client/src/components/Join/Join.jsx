import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Join.css'

const Join = () => {
  const [Name, setName] = useState('');
  const [Room, setRoom] = useState('');
  return (
    <div className='joinOuterContainer'>
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div><input type="text" placeholder='Name' className='joinInput' value={Name} onChange={(e) => setName(e.target.value)} /></div>
        <div><input type="text" placeholder='Room' className='joinInput mt-20' value={Room} onChange={(e) => setRoom(e.target.value)} /></div>
        <Link onClick={e => (!Name && !Room) ? e.preventDefault() : null} to={`/chat?name=${Name}&room=${Room}`}>
          <button className="button mt-20" type='submit'>Sign In</button>
        </Link>
      </div>
    </div >
  )
}

export default Join