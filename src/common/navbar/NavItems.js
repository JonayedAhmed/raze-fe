import { electronicsData } from '@/data/ElectronicsData'
import { clothingData } from '../../data/ClothingData.js'
import { footwearData } from '../../data/FootwearData.js'
import { personalCareData } from '../../data/PersonalCareData.js'


// Define array of objects for navbar items with sub-brands
export const allNavItems = [
    {
        href: "/men",
        category: "Men",
        categoryImage: '',
        brands: footwearData?.map(eachFootwearData => eachFootwearData?.brand)
    },
    {
        href: "/women",
        category: "Women",
        categoryImage: '',
        brands: clothingData?.map(eachClothingData => eachClothingData?.brand)
    },
    {
        href: "/new-in",
        category: "New In",
        categoryImage: '',
        brands: electronicsData?.map(eachElectronicsData => eachElectronicsData?.brand)
    },
    {
        href: "/stores",
        category: "Stores",
        categoryImage: '',
        brands: personalCareData?.map(eachPersonalCareData => eachPersonalCareData?.brand)
    },
];