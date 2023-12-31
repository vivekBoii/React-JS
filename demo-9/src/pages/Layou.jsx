import React from 'react'
import { Outlet ,Link } from 'react-router-dom'

export const Layou = () => {
  return (
    <>
        <nav>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
    </>
  )
}
export default Layou;
