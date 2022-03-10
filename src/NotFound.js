import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className='not-found'>
            <h2>Sorry </h2>
            <p>The page you are looking for is missing , that's all we know</p>
            <Link to="/">Back to the homepage...</Link>
        </div>
    )
}

export default NotFound
