import * as React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import InfoBlock from "../components/Reusable/InfoBlock"
import DualInfoBlock from "../components/Reusable/DualInfoBlock"
import CourseCart from '../components/Cart/CourseCart'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
  <HeroSection
img={data.img.childImageSharp.fluid}
  title="I write code"
  subtitle="LearnToCode"
  heroClass="hero-background"
  />
   <InfoBlock heading="About Us" />
   <CourseCart courses={data.courses} />
   <DualInfoBlock 
   imgLink="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
   heading="Our Team" 
   />
  </Layout>
  
)

export const query=graphql`
{
  img:file(relativePath:{eq:"heromain.png"}) {
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  courses:allContentfulCourses{
    edges{
      node{
        id
        title
        price
        category
        description{
          description
        }
        image{
          fixed(width:200,height:120){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
  
}
`


export default IndexPage
