import { allDiscountsData } from '../data/AllProductsData';
import HomepageProductCarousel from './HomepageProductCarousel';

const AllProducts = () => {
    return (
        <div>
            {Object.entries(allDiscountsData).map(([category, products], catIndex) => (
                <div key={`${category}-${catIndex}`} className="py-10">
                    <h1 className="text-3xl font-bold text-center mb-8">{category} Discounts</h1>
                    <HomepageProductCarousel productList={products} />
                </div>
            ))}
        </div>
    );
};

export default AllProducts;
