import { buffetData } from '../data/BuffetData';
import { clothingData } from '../data/ClothingData';
import { electronicsData } from '../data/ElectronicsData';
import { footwearData } from '../data/FootwearData';
import { personalCareData } from '../data/PersonalCareData';

export const allDiscountsData = {
    'Footwear': [...footwearData],
    'Clothing': [...clothingData],
    'Electronics': [...electronicsData],
    'Personal Care': [...personalCareData],
    'Buffet': [...buffetData]
};