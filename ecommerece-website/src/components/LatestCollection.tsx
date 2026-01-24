import { ShopContext } from "../context/ShopContent"
import { useContext, useEffect, useState } from "react"
import Title from "./Title"

const LatestCollection = () => {

  const {products} = useContext(ShopContext)
  const [latestProducts, setLatestProducts] = useState([]); 

  useEffect( () =>{
    setLatestProducts(products.slice(0,10))
  }, [])

  return (
    <div className="my-10">
        <div className="text-center py-8 text-3xl">
            <Title text1={'LATEST'} text2={'COLLECTION'} />
            <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            *Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident at tempore praesentium, excepturi iste temporibus porro hic eaque necessitatibus, a nisi nemo eius delectus error asperiores! Voluptatum ipsam amet adipisci.</p>
        </div>

    </div>
  )
}

export default LatestCollection
