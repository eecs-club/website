import React from 'react'
import theme from '../theme'
import '@fortawesome/fontawesome-free/css/all.css'

const Footer = (props) => {
  return (
    <>
      <footer>
        <div className="socials">
          <IconLink href="https://github.com/eecs-club" icon="fab fa-github" />
          <IconLink href="https://github.com/eecs-club/website"
            icon="fas fa-code" />
          <IconLink href="https://discord.gg/Nwpx2uf" icon="fab fa-discord" />
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

export default Footer;
