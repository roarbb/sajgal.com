import React from "react";
import Link from "gatsby-link";

const IndexPage = node => {
  const homepage = node.data.allContentfulHomepage;
  const title = homepage.edges[0].node.title;
  const content = homepage.edges[0].node.content.childMarkdownRemark.html;

  return (
    <div className="bio">
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export const pageQuery = graphql`
  query PageQuery {
    allContentfulHomepage(limit: 1) {
      edges {
        node {
          id
          title
          content {
            id
            childMarkdownRemark {
              id
              html
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
