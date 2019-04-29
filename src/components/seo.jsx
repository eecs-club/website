import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import logo from '../images/logo.png'

const SEO = (props) => {
  return (
    <StaticQuery query={graphql`
        query SEOQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => {
        var title = props.title ? props.title + " | " + data.site.siteMetadata.title : data.site.siteMetadata.title;
        return (
          <Helmet title={title} defer={false}>
            <meta name="description"
              content={props.description || data.site.siteMetadata.description}
            />
            <meta property="og:title" content={title}/>
            <meta property="og:description"
              content={props.description || data.site.siteMetadata.description}
            />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={props.img | logo} />
          </Helmet>
        )
      }}
    />
  )
}

export default SEO
