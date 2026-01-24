import {useContext} from 'react'
import { ShopContext } from "../context/ShopContent"

const ProductItem = ({id,product,name,price}) => {

const {currency} = useContext(ShopContext)

  return (
    <div>
      
    </div>
  )
}

export default ProductItem
