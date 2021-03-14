import * as React from "react"
import { graphql } from 'gatsby'


import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import InfoBlock from "../components/Reusable/InfoBlock"
import Contact from "../components/Contact/Contact"

const ContactPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
  <HeroSection
img={data.img.childImageSharp.fluid}
  title="Contact Us"
  subtitle=""
  heroClass="about-background"
  />
  
   <InfoBlock heading="How can we help?" />

  <Contact/>
  </Layout>
  
)

export const query=graphql`
{
  img:file(relativePath:{eq:"contact.png"}) {
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  
}
`

export default ContactPage
