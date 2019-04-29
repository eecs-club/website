import React from 'react'
import SEO from './seo'
import logo from '../images/logo.png'
import bg from '../images/bg.png'
import theme from '../theme'
import '../fonts/fonts.css'
import { Link } from 'gatsby'
import '@fortawesome/fontawesome-free/css/all.css'

class Layout extends React.Component {
  render () {
    return (
      <>
        <div className="outer">
          <SEO
            title={this.props.title}
            description={this.props.description}
            img={this.props.img}
          />
          <Header />
          <main>
            {this.props.children}
          </main>
          <Footer />
        </div>
        <style jsx global>{`
          body {
            margin: 0;
            background-color: ${theme.colors.background};
            font-family: ${theme.fonts.body};
            color: ${theme.colors.white};
            font-size: 1.5rem;
          }
          h1, h2, h3, h4, h5, h6 {
            font-family: ${theme.fonts.primary};
            font-weight: 500;
            font-size: 2rem;
          }
          h1 { font-size: 4rem; letter-spacing: 4px; margin-top: 0 }

          @media only screen and (max-width: 32rem){
            body {
              font-size: 1.2rem;
            }
            h2, h3, h4, h5, h6 {
              font-size: 4vh;
            }
          }
        `}</style>
        <style jsx>{`
          main {
            max-width: 1000px;
            margin: auto;
            padding: 50px;
            box-sizing: border-box;
            background: #212121 url(${bg}) no-repeat fixed center;
            background-size: cover;
            padding-bottom: calc(9rem + 50px);
            min-height: calc(100vh - 17rem)
          }
          div.outer {
            min-height: 100vh;
            position: relative;
          }
        `}</style>
      </>
    );
  }
}

const Header = (props) => {
  return (
    <>
      <div>
        <Link to="/">
          <img src={logo} alt="EECS Club Logo" />
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/info">Info</Link>
          <Link to="/resources">Resources</Link>
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
          font-weight: 500;
          letter-spacing: 1px;
        }
      `}</style>
    </>
  )
}

const Footer = (props) => {
  return (
    <>
      <footer>
        <div className="socials">
          <IconLink href="https://github.com/eecs-club" icon="fab fa-github" />
          <IconLink href="https://github.com/eecs-club/website"
            icon="fas fa-code" />
          <IconLink href="https://discord.gg/QYd59n" icon="fab fa-discord" />
        </div>
        <small>© {new Date().getFullYear()} Lowell EECS Club.</small>
      </footer>
      <style jsx>{`
        footer {
          width: 100%;
          background-color: #20324B;
          position: absolute;
          bottom: 0;
        }
        .socials {
          height: 6rem;
          max-width: 80vw;
          margin: 1rem auto 0;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
        }
        small {
          width: fit-content;
          display: block;
          margin: 0 1rem 1rem 2rem;
          font-size: 1rem;
        }
      `}</style>
    </>
  )
}

const IconLink = (props) => {
  return (
    <>
      <a href={props.href}>
        <i className={props.icon} />
      </a>
      <style jsx>{`
        font-size: 3rem;
        color: ${theme.colors.white};
        width: fit-content;
        display: block;
        text-decoration: none;
        @media only screen and (max-width: 32rem){
          font-size: 6vh;
        }
      `}</style>
    </>
  )
}


export default Layout;
