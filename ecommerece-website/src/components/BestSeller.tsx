import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContent'
import Title from './Title';
import ProductItem from '../components/ProductItem';

const BestSeller = () => {
    const {products} = useContext(ShopContext)
    const [bestSeller, setBestSeller] = React.useState([]);
    
    useEffect(() =>{
        const bestProduct = products.filter(product => product.bestseller);
        setBestSeller(bestProduct.slice(0,5));
    }, []) 

    console.log(bestSeller);

  return (
    <div className='my-10'>
         <div className='text-center text-3x1 py-8'>
            <Title text1={'BEST'} text2={"SELLERS"}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, facilis animi alias molestias pariatur placeat, molestiae, sequi nemo delectus recusandae cum provident aliquam excepturi. Ex iure consequuntur odio atque natus!
            </p>
         </div>

         <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {bestSeller.map((item,index) => <ProductItem key={index} product={item._id} name={item.name} image={item.image} price={item.price}/>
)}
         </div>
    </div>
  )
}

export default BestSeller
