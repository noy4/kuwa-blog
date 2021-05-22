import { graphql, Link } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import 'twin.macro'
import ArticlePreview from '../components/article-preview'
import Layout from '../components/layout'

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site?.siteMetadata.title
  const posts = data.allContentfulBlogPost.nodes

  return (
    <Layout location={location}>
      <div tw="bg-white">
        <Helmet title={siteTitle} />
        <ul className="article-list" tw="divide-y divide-gray-200">
          {posts.map((post) => {
            return (
              <li key={post.slug}>
                <Link to={`/blog/${post.slug}`}>
                  <ArticlePreview article={post} />
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "M月D日")
        tags
        heroImage {
          fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
        description {
          childMarkdownRemark {
            html
          }
        }
        body {
          childMarkdownRemark {
            excerpt(pruneLength: 80, truncate: true)
          }
        }
      }
    }
  }
`
