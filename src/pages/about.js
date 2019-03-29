import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
    <SEO title="About" description="the about pager" keywords={[`gatsby`, `application`, `react`]} />
    <h1>About Us</h1>
    <p>Minim proident proident proident sit pariatur cillum nulla esse culpa commodo officia non exercitation.</p>
  </Layout>
  )
}

export default AboutPage;