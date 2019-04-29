import React from 'react'
import SEO from './seo'
import logo from '../images/logo.png'
import bg from '../images/bg.png'
import theme from '../theme'
import '../fonts/fonts.css'
import Header from './header'
import Footer from './footer'

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


export default Layout;
