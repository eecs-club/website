import React from 'react'
import { Link } from 'gatsby'
import theme from '../theme'
import logo from '../images/logo.png'

const Header = (props) => {
  return (
    <>
      <div>
        <Link to="/">
          <img src={logo} alt="EECS Club Logo" />
        </Link>
        <nav>
          <Link activeClassName="active" to="/">Home</Link>
          <Link activeClassName="active" to="/blog">Blog</Link>
          <Link activeClassName="active" to="/info">Info</Link>
          <Link activeClassName="active" to="/resources">Resources</Link>
        </nav>
      </div>
      <style jsx>{`
        div {
          width: 100%;
          height: 8rem;
          background-color: #20324B;
          display: flex;
          align-items: center;
          box-sizing: border-box;
        }
        div img {
          height: 6rem;
          border-radius: 100%;
          margin-left: 3rem;
        }
        nav {
          display: flex;
          width: 50rem;
          align-items: center;
          justify-content: space-evenly;
          text-transform: uppercase;
          color: white;
          overflow-x: hidden;
        }
        @media only screen and (max-width: 32rem){
          div {
            height: 15vh;
            position: relative;
          }
          div img {
            height: 10vh;
            margin: 0;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
          }
          nav { display: none; }
        }
      `}</style>
      <style jsx global>{`
        nav > a {
          text-decoration: none;
          color: white;
          font-family: ${theme.fonts.primary};
          font-weight: 400;
          letter-spacing: 1px;
        }
        nav > a.active {
          font-weight: 700;
        }
      `}</style>
    </>
  )
}

export default Header;
