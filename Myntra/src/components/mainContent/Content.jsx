import React, { useEffect } from 'react'
import Slider from './slider'
import Cards from './Cards'
import Category from './Category'

function Content() {
  useEffect(() => {
    document.title = "Myntra"
  })
  return (
    <div>
      <Slider />
      <Cards />
      <Category />


    </div>
  )
}

export default Content