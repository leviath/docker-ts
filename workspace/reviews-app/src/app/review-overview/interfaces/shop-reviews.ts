import {Reviews} from './reviews';

export interface ShopReviews {
    shop: {
        tsId: string;
        url: string;
        name: string;
        languageISO2: string;
        targetMarketISO3: string;
        reviews: Reviews[];
    }
}
