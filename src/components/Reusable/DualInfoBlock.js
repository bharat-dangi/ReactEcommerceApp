import React from "react"

import Heading from "./Heading"


export default function DualInfoBlock({ heading,imgLink }) {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-8 mx-auto">
            <div className="lead text-white mb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
              neque voluptate quaerat? Assumenda exercitationem porro
              asperiores, earum nulla quisquam eveniet nam vitae, enim,
              excepturi dolorem animi quas repudiandae repellendus unde vero
              quod labore explicabo corrupti corporis ipsa consequuntur suscipit
              ab? Vitae in tenetur beatae dicta iure nostrum quos. Ad,
              similique? Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Ad fugiat officia facilis maiores deleniti ducimus molestias
              qui enim magni doloribus expedita, deserunt, nemo in dolor error?
              Iste veritatis omnis dolorem? Similique molestias magnam officia,
              ex atque perspiciatis laboriosam nisi voluptatem adipisci itaque,
              quas repellendus recusandae deserunt aspernatur illum mollitia!
              Nisi incidunt veritatis labore quia facilis ea et iusto ullam
              molestias, voluptatem quod quasi accusamus recusandae, culpa magni
              error, quaerat dolorum quas fugit architecto qui! Doloribus nobis
              quod sapiente maiores vel quis dolor aspernatur quia eligendi
              aliquam. Architecto cupiditate provident quibusdam, dolores
              eveniet, numquam quasi explicabo neque tempora eaque accusamus
              libero!
            </div>
          </div>
          <div className="col-4">
            <div className="card bg-dark">
              <img
                src={imgLink}
                className="card-img-top"
                alt=" loads here"
              />
            
              <div className="card-body">
                <h5 className="card-title text-success">Just Click photos</h5>
                <p className="card-text text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatibus, quos aut? Laudantium, nihil vero temporibus
                  ipsum perspiciatis quaerat rem obcaecati eum eius non libero!
                  Enim dolores minus omnis velit mollitia.
                </p>
                <a href="#" className="btn btn-warning btn-block">
                 {heading }
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
