import { electronicsData } from '@/data/ElectronicsData'
import buffet from '../../../public/images/buffet.png'
import cloth from '../../../public/images/cloth.png'
import electronics from '../../../public/images/electronics.png'
import personalCare from '../../../public/images/personalCare.png'
import shoe from '../../../public/images/shoe.png'
import { buffetData } from '../../data/BuffetData.js'
import { clothingData } from '../../data/ClothingData.js'
import { footwearData } from '../../data/FootwearData.js'
import { personalCareData } from '../../data/PersonalCareData.js'


// Define array of objects for navbar items with sub-brands
export const allNavItems = [
    {
        href: "/footwear",
        category: "Footwear",
        categoryImage: shoe,
        brands: footwearData?.map(eachFootwearData => eachFootwearData?.brand)
    },
    {
        href: "/clothing",
        category: "Clothing",
        categoryImage: cloth,
        brands: clothingData?.map(eachClothingData => eachClothingData?.brand)
    },
    {
        href: "/electronics",
        category: "Electronics",
        categoryImage: electronics,
        brands: electronicsData?.map(eachElectronicsData => eachElectronicsData?.brand)
    },
    {
        href: "/personal-care",
        category: "Personal Care",
        categoryImage: personalCare,
        brands: personalCareData?.map(eachPersonalCareData => eachPersonalCareData?.brand)
    },
    {
        href: "/buffet",
        category: "Buffet",
        categoryImage: buffet,
        brands: buffetData?.map(eachBuffetData => eachBuffetData?.brand)
    },
];