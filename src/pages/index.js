import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import InfoBlock from "../components/Reusable/InfoBlock"
import DualInfoBlock from "../components/Reusable/DualInfoBlock"
import CourseCart from "../components/Cart/CourseCart"
import BundleCart from "../components/Cart/BundleCart"

const IndexPage = ({ data }) => (
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
    <BundleCart bundleCourses={data.bundleCourses} />
    <DualInfoBlock
      imgLink="https://media.istockphoto.com/photos/programmer-working-with-program-code-picture-id1075599562?k=6&m=1075599562&s=612x612&w=0&h=GGYUzdB_T4zA5N9eroCHkW7NgWYj117Tg8zKi1_UE4A="
      heading="Our Team"
    />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    courses: allContentfulCourses {
      edges {
        node {
          id
          title
          price
          category
          description {
            description
          }
          image {
            fixed(width: 200, height: 120) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
    bundleCourses: allContentfulBundles {
      edges {
        node {
          id
          title
          price
          images {
            fixed(width: 200, height: 120) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
