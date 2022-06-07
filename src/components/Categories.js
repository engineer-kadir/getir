import React,{useState,useEffect} from 'react'
import categoriesData from 'api/categories.json';
import CategoryItem from './ui/CategoryItem';

const Categories = () => {
    const[categories,setCategories]=useState([]);

    useEffect(()=>{
        setCategories(categoriesData);
    },[])
  return (
    <div className='bg-white py-4 '>
        <div className='container mx-auto'>
            <h3 className='text-sm font-semibold mb-3'>Kategoriler</h3>
            <div className='grid grid-cols-4 2xl:grid-cols-12 xl:grid-cols-10 lg:grid-cols-8 md:grid-cols-6'>
                {/* {!categories.length&&'Yükleniyor...'} */}
                {categories && categories.map((category,index)=>
                    <CategoryItem key={index} category={category}/>
                )}
            </div>
        </div>
    </div>
  )
}

export default Categories
