import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
// import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

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
          </Helmet>
        )
      }}
    />
  )
}

export default SEO
