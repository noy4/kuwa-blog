import React from 'react'
import Img from 'gatsby-image'
import 'twin.macro'
import { StaticImage } from 'gatsby-plugin-image'
import { BadgeCheckIcon } from '@heroicons/react/solid'
import { Link } from 'gatsby'

const ArticlePreview = ({ article }) => (
  <div tw="flex px-4 py-3 hover:bg-gray-100 transition-all">
    <StaticImage
      src="../images/kuwa.png"
      alt="profile"
      width={48}
      height={48}
      layout="fixed"
      tw="flex-shrink-0 mr-3"
    />
    <div>
      <div tw="flex items-center">
        <h3 tw="mt-0 text-base font-bold">{article.title}</h3>
        <BadgeCheckIcon tw="w-5 h-5 text-blue-500 ml-0.5" />
      </div>
      <div tw="mt-1 mb-2 text-xs">{article.publishDate}</div>
      {article.description ? (
        <div
          tw="text-sm"
          dangerouslySetInnerHTML={{
            __html: article.description.childMarkdownRemark.html,
          }}
        />
      ) : (
        <div
          tw="text-sm"
          dangerouslySetInnerHTML={{
            __html: article.body.childMarkdownRemark.excerpt,
          }}
        />
      )}
      <br />
      {article.tags.map((tag) => (
        <Link
          to={`/search?tag=${tag}`}
          tw="text-blue-500 block hover:underline"
          key={tag}
        >
          #{tag}
        </Link>
      ))}
      {article.heroImage && (
        <Img
          alt=""
          fluid={article.heroImage.fluid}
          tw="rounded-2xl mt-2 border border-gray-300"
        />
      )}
    </div>
  </div>
)

export default ArticlePreview
