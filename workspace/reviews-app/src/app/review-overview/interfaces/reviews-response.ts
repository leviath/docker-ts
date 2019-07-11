import {ShopReviews} from './shop-reviews';

export interface ReviewsResponse {
    response: {
        code: number;
        data: ShopReviews;
        message: string;
        responseInfo: ResponseInfo;
        status: string;
    }
}

interface ResponseInfo {
    apiVersion: string;
    count: number
    parameters: Parameters[]
}

interface Parameters {
    name: string;
    value: string;
}
