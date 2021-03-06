import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const TagList: React.FC = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query {
        allMdx(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `
  );
  return(
    <nav>
      <h1>タグ一覧</h1>
      <ul>
        {allMdx.group.map((tag: { fieldValue: string | null | undefined; totalCount: React.ReactNode; }) => (
          <li key={tag.fieldValue}>
            <Link to={`/tag/${tag.fieldValue}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}


export default TagList