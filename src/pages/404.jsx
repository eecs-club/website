import React from 'react'
import Layout from '../components/layout'

class NotFoundPage extends React.Component {
  render () {
    return (
      <Layout title="404" description="Looks like that page doesn't exist.">
        <h1>whoops</h1>
        <p>that doesn't exist, silly!</p>
      </Layout>
    );
  }
}

export default NotFoundPage;
