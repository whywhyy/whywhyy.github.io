import React from "react"
import { Link } from "gatsby"

import { useActiveHash } from "../hooks/use-active-hash"

  const getHeadingIds = (
    toc,
    traverseFullDepth = true,
    recursionDepth = 1
  ) => {
    const idList = []
    const hashToId = str => str.slice(1)
  
    if (toc) {
      for (const item of toc) {
        // Sometimes url does not exist on item. See #19851
        if (item.url) {
          idList.push(hashToId(item.url))
        }
  
        // Only traverse sub-items if specified (they are not displayed in ToC)
        // recursion depth should only go up to 6 headings deep and may come in as
        // undefined if not set in the tableOfContentsDepth frontmatter field
        if (item.items && traverseFullDepth && recursionDepth ) {
          idList.push(
            ...getHeadingIds(item.items, true, recursionDepth + 1)
          )
        }
      }
    }
    return idList
  }
  

  // depth and maxDepth are used to figure out how many bullets deep to render in the ToC sidebar, if no
  // max depth is set via the tableOfContentsDepth field in the frontmatter, all headings will be rendered
  function createItems(items,  activeHash,ulStyle) {
    return (
      items &&
      items.map((item, index) => {
        const isActive = item.url === `#${activeHash}`
        return (
          <li
            key={item.url}
          >
            {item.url && (
                <Link
                    to={item.url}
                    style={ isActive ? { fontWeight: 'bold'} : {}}
                >     
                    {item.title}
                </Link>
            )}
            {item.items &&  (
              <ul style={ulStyle}>
                {createItems(
                  item.items,
                  activeHash,
                  ulStyle,
                )}
              </ul>
            )}
          </li>
        )
      })
    )
  }
  
function TableOfContents({ items }) {
    const activeHash = useActiveHash(getHeadingIds(items, true))
    const ulStyle = {
      listStyleType: 'none',
      margin: '0 0 10 0',
      padding: 0,
      fontSize: '1rem',
      paddingInlineStart: '.5rem',
      marginBlockStart: '.3rem',
      marginBlockEnd:'.3rem',
      marginLeft:'.5rem',
      '&:hover': {
        fontWeight: 'bold'
      },
    };
    return items ? (
        <nav>
        <h2>
            Table of Contents
        </h2>
        <ul style={ulStyle}>
            {createItems(items, activeHash,ulStyle)}
        </ul>
        </nav>
    ) : null
}

export default TableOfContents