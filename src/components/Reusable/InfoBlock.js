import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function InfoBlock({ heading }) {
  return (
    <section className="bg-theme my-5 py-4">
      <div className="container">
        <Heading title={heading} />
        <div>
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-white mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
              facere rem repudiandae autem possimus nihil, dolorum nisi iusto
              error ut est distinctio doloribus voluptatem tempore dolore
              explicabo eaque nam eveniet praesentium deleniti reprehenderit
              porro non ipsa? Consequuntur quo dolor ut? Tempore sapiente
              blanditiis ad quaerat explicabo impedit aliquam illo vitae
              obcaecati aliquid. Voluptate iure necessitatibus inventore earum
              optio fuga placeat.
            </p>
            <Link to="/about/">
              <button className="btn btn-warning btn-lg">{heading}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
