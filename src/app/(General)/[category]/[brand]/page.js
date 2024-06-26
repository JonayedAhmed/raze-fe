'use client'

import ProductCard from '@/components/ProductCard';
import { allDiscountsData } from '@/data/AllProductsData';


const BrandPage = ({ params }) => {
    
    const category = params?.category?.split('-')?.map(eachWord => {
        return eachWord?.charAt(0)?.toUpperCase() + eachWord?.slice(1).toLowerCase();
    })?.join(' ');
    const brand = params?.brand?.split('-')?.map(eachWord => {
        return eachWord?.charAt(0)?.toUpperCase() + eachWord?.slice(1).toLowerCase();
    })?.join(' ');
    
    const categoryWiseAllProducts = allDiscountsData?.[category]?.filter(eachProduct => eachProduct?.brand === brand);

    return (
        <div className='flex flex-wrap gap-10'>
            {categoryWiseAllProducts?.map(product => {
                return (
                    <div className='mb-4'>
                        <ProductCard {...product} />
                    </div>
                )
            })}
        </div>
    )
}

export default BrandPage