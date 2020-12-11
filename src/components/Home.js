import React from 'react'


const Home = ({ children }) => {
  return (
    <div>
      <h1>Find your books</h1>
      <section>
        {children}
      </section>
    </div>
  )
}

export default Home
