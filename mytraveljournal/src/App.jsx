import { useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import data from './data';

function App() {

  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
       />
    )
  })

  return (
    <>
      <Header />
      {cards}
    </>
  )
}

export default App
