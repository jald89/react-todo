import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <h1>My todo</h1>
            <hr />
            <Outlet />
        </>
    )
}

export default Home
