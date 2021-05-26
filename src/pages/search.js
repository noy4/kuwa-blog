import { graphql, Link } from 'gatsby'
import { useAtom } from 'jotai'
import React from 'react'
import { Helmet } from 'react-helmet'
import 'twin.macro'
import ArticlePreview from '../components/article-preview'
import Layout from '../components/layout'
import { searchAtom } from '../state/state'

const SearchPage = ({ data, location }) => {
  const siteTitle = data.site?.siteMetadata.title
  const posts = data.allContentfulBlogPost.nodes

  const [searchQuery, setSearchQuery] = useAtom(searchAtom)
  const isSearchQueryEmpty = searchQuery === ''
  const searchResults = isSearchQueryEmpty
    ? posts
    : posts.filter((post) => {
        const {
          tags,
          title,
          body: {
            childMarkdownRemark: { excerpt },
          },
        } = post
        const isTagQuery = searchQuery.startsWith('#')

        if (isTagQuery) {
          const tagQuery = searchQuery.slice(1)
          const hasTag = tags?.some((tag) => tag === tagQuery)
          return hasTag
        }

        const hasTitle = title.includes(searchQuery)
        const hasExcerpt = excerpt.includes(searchQuery)
        return hasTitle || hasExcerpt
      })

  return (
    <Layout location={location}>
      <div tw="bg-white">
        <Helmet title={siteTitle} />
        <ul className="article-list" tw="divide-y divide-gray-200">
          <li tw="ml-4 py-2">{searchResults.length}件の検索結果</li>
          {searchResults.map((post) => {
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

export default SearchPage

export const pageQuery = graphql`
  query SearchQuery {
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
