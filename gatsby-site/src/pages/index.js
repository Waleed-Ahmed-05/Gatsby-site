import React from "react"; 
import { Link } from "gatsby"; 
import { graphql } from "gatsby"; 
const HomePage = ({ data }) => ( 
<main> 
<h1>Welcome to Gatsby</h1> 
<Link to="/about">Go to About Page</Link> 

<Link to="/SEO">SEO Optimized page</Link>
<h1>{data.site.siteMetadata.title}</h1> 
<p>{data.site.siteMetadata.description}</p> 
<p>{data.site.siteMetadata.author}</p>
</main> 
); 
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author 
      }
    }
  }
`;

export default HomePage;