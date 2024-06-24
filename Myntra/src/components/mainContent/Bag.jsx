
import { useContext, useEffect } from 'react'
import EmptyBag from './EmptyBag'
import BagItem from './ItemsInBag/BagItem'
import { MyntraContext } from '../../data/myntraStore'

function Bag() {
  
  useEffect(() => {
    document.title = "Myntra-bag"
  }, [])

  const { ItemList } = useContext(MyntraContext)

  return (
    <>
      <div className="container-fluid p-0">
        {ItemList.length === 0 ? <EmptyBag /> : <BagItem />}
      </div>
    </>

  )
}

export default Bag