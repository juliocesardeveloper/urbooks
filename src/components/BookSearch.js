import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BookCard } from '../components/BookCard'

const BookSearch = () => {

  const [book, setBook] = useState('')
  const [result, setResult] = useState([])
  const apiKey = 'AIzaSyD0oHx8NTDFwMK0NttMtEbAhC78y3WUSaM'
  const apiURL = `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apiKey}&maxResults=20`

  function handleChange(event) {
    const book = event.target.value;
    setBook(book)
  }

  function handleSubmit(event) {
    event.preventDefault();
    getBooks()
  }
  

  const request = async () => {
    axios.get(apiURL)
      .then(data => {
        const datos = data.data.items
        setResult(datos)
      })
  }
  const getBooks = request



  useEffect(() => {
    console.log(book);
  }, [book])

  return (
    <div className="column" >
      <div>
        <form onSubmit={handleSubmit} className="form-group">
          <label htmlFor="FormControlSearch">Busca tu libro</label>
          <div className="row">
            <input type="text" onChange={handleChange} autoComplete="off" className="col-7 form-control mr-3" />
            <button type="submit" className="btn btn-outline-primary" >Buscar</button>
          </div>
        </form>
      </div>
      <hr/>
      <div className="card-columns">
        {
          result.map( book => (
            <BookCard
              id={book.id}
              key={ book.id }
              imageLinks = {book.volumeInfo.imageLinks}
              title = {book.volumeInfo.title}
              authors = {book.volumeInfo.authors}
            />
          ))
        }
      </div>
    </div>
  )
}

export default BookSearch
