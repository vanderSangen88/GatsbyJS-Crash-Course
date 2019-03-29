import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const BlogPage = ( { data }) => (
  <Layout>
    <SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Latest posts</h1>
    {data.allMarkdownRemark.edges.map(post => {
        return (
            <div key={ post.node.id }>
                <h3>{ post.node.frontmatter.title }</h3>
                <small>Posted by { post.node.frontmatter.author } on { post.node.frontmatter.date }</small><br /><br />
                <Link to={ post.node.frontmatter.path }>Read More</Link>
                <br /><br /><hr />
            </div>
        )
    })}
  </Layout>
)

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                path
                date
                title
                author
              }
              excerpt
              wordCount {
                paragraphs
                sentences
                words
              }
            }
          }
        }
      }
`

export default BlogPage
