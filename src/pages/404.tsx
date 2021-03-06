import React from "react"

import Layout from "../gatsby-theme-blog/components/layout"
import SEO from "../gatsby-theme-blog/components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <main className='container mx-auto flex-grow'>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </main>
  </Layout>
)

export default NotFoundPage