import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/BookCard.css'

export const BookCard = ({
  id,
  imageLinks,
  authors,
  title
 }) => {

  return (
    <div className="card ms-3 p-2 shadow p-3 mb-5 rounded" style={ { maxWidth: 540 } }>
      <div className="row no-gutters">
        <div className="col-md-5">
          {
            imageLinks ? <img src={imageLinks.thumbnail} alt={title} /> : <h5>Sin imagen</h5>
          }

        </div>
        <div className="col-md-7 d-flex align-items-center">
          <div className="card-body">
            <h5 className="card-title"> { title } </h5>
            <p className="card-subtitle mb-2 text-muted" > { authors } </p>
            <Link to={`/${id}`}>
              Más...
            </Link>

          </div>
        </div>
      </div>
    </div>
  )
}
