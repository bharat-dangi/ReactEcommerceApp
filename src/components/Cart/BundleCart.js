import React, { Component } from "react"
import Heading from "../Reusable/Heading"
import Img from "gatsby-image"



export default class BundleCart extends Component {
  constructor(props) {
    super(props)
    this.state = {
        bundleCourses: props.bundleCourses.edges,
     
    }
  }

 

  render() {
    // console.log(this.state.courses);
    return (
      <section className="py-5">
        <div className="container">
          <Heading title="Bundle Courses" />
          <div className="row">
            {this.state.bundleCourses.map(({ node }) => {
              return (
                <div
                  className="col-11 col-md-6 d-flex mx-auto my-2"
                  key={node.id}
                >
                  <Img fixed={node.images.fixed} />

                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0">{node.title} </h6>
                    </div>
                    <h6 className="mb-0 text-success">$ {node.price} </h6>
                    <button
                      data-item-id={node.id}
                      data-item-price={node.price}
                      data-item-url="https://react-ecommerce-practice-project.netlify.app/"
                      data-item-image={node.images.fixed.src}
                      data-item-image="/assets/images/starry-night.jpg"
                      data-item-name={node.title}
                      className="btn btn-warning snipcart-add-item"
                    >
                      Join Now
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}
