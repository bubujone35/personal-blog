import React from "react";
import styled from "styled-components";
import PreviewCard from "./cards/preview-card";
import { StaticQuery, graphql } from 'gatsby';



const Container = styled.div`
  display: flex;
  flex: 1;
  background-color: white;
  padding: 4rem;
  flex-direction: column;
  align-items: center;

  @media all and (max-width: 1250px) {
    padding: 0.5rem;
    padding-top: 6rem;
  }
`
const getMarkdownPosts = graphql `
{
  allMarkdownRemark {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          subtitle
          tag1
          tag2
          tag3
        }
        excerpt
      }
    }
  }
}
`

const Blog = () => (
  <Container>
    <StaticQuery
      query={getMarkdownPosts}
      render={data => (
        <>
          {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <PreviewCard
              title={node.frontmatter.title}
              subtitle={node.frontmatter.subtitle}
              tag1={node.frontmatter.tag1}
              tag2={node.frontmatter.tag2}
              tag3={node.frontmatter.tag3}
              content={node.excerpt}
            />
          </div>
          ))}
        </>
      )}
    />

  </Container>
)

export default Blog
