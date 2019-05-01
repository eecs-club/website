import React from 'react'
import Layout from '../components/layout'
import theme from '../theme'

class Home extends React.Component {
  render () {
    return (
      <Layout>
        <div className="front">
          <h1>
            lowell<br />
            <span>
              <span>EE</span>
              CS
            </span>
          </h1>
          <p className="tagline">
            Electrical engineering <br />
            and computer science, <br />
            unified.
          </p>
          <i className="fas fa-angle-down" />
        </div>
        <div className="content">
          <h2>
            We give you the Arduinos.<br />
            You decide what you'll make.
          </h2>
          <p>
            Join our club, and explore how to assemble and control electronics
            through code. From catapults to glow cubes, the possibilities are
            endless.
          </p>
        </div>
        <a href="https://discord.gg/Nwpx2uf"
           className="discordButton">
          <i className="fab fa-discord" />
          <span>JOIN US</span>
        </a>
        <style jsx>{`
          .fa-angle-down {
            display: none;
          }
          h1 span {
            font-weight: 600;
            letter-spacing: 12px;
            color: ${theme.colors.blue}
          }
          h1 span > span {
            color: ${theme.colors.orange}
          }
          .tagline {
            font-size: 2rem;
            width: 24rem;
            letter-spacing: 1px;
            font-weight: 500;
            max-width: 100%;
            margin: 6rem 0 6rem auto;
          }
          h2 {
            line-height: 2.5rem;
            color: ${theme.colors.orange};
          }
          div.content {
            margin: 6rem auto;
          }
          .discordButton {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            margin: 2rem auto;
            width: 17rem;
            padding: 1rem;
            background-color: #C5E8F6;
            color: #0C203E;
            font-weight: 700;
            font-size: 2.5rem;
            border-radius: 1rem;
            text-decoration: none;
          }
          .discordButton i {
            font-weight: 400;
          }
          .discordButton:visited {
            color: #0C203E;
          }
          @media only screen and (max-width: 32rem){
            .tagline {
              font-size: 6vw;
              width: 100%;
              margin: 1rem auto;
            }
            div.front {
              height: calc(85vh - 2rem);
              position: relative;
            }
            div.front .fa-angle-down {
              display: block;
              position: absolute;
              bottom: 50px;
              width: fit-content;
              left: 50%;
              transform: translate(-50%, -50%);
              font-size: 8vh;
              margin: auto;
            }
            div.content {
              margin: 0 auto;
            }
            div.content h2 {
              line-height: 5vh;
            }
            .discordButton {
              font-size: 7vw;
              width: 50vw;
              margin-bottom: 0;
            }
          }
        `}</style>
      </Layout>
    );
  }
}

export default Home;
