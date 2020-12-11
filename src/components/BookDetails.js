import '../styles/components/BookDetails.css'

/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const BookDetails = () => {

  const {id} = useParams();

  const [bookDetail1, setBookDetail1] = useState([])
  const [bookDetail2, setBookDetail2] = useState([])

  useEffect(() => {
    getBookDetails()
  }, [])

  function getBookDetails() {
    axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then(data => {
        setBookDetail1(data.data.volumeInfo);
        setBookDetail2(data.data.saleInfo);
      });
  }

  return (
    <div className="jumbotron">
      <h1 className="display-5">{bookDetail1.title}</h1>
      <h4>Autor/es:</h4>
      <p>{bookDetail1.authors}</p>
      <h4>Descripción:</h4>
      {
        bookDetail1.description ? <p>{bookDetail1.description}</p> : <p>No hay descripción</p>
      }

      {
        bookDetail2.listPrice
          ?
            <div>
              <h4>Precio:</h4>
              <h3> {`${Intl.NumberFormat("es-CO", {style: "currency", currency: bookDetail2.listPrice.currencyCode }).format(bookDetail2.listPrice.amount)}`} {bookDetail2.listPrice.currencyCode}</h3>
              <h3><a href={bookDetail2.buyLink} target="_blank" rel="noopener noreferrer">Comprar</a></h3>
            </div>
          :
            <h3>No está en venta</h3>
      }

      <Link className="float-right" to={'/'}>
        <h5>Volver</h5>
      </Link>
    </div>
  )
}

export default BookDetails
