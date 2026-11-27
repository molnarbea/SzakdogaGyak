import type { productType } from "../types/ProductType";

const API_vegpont = "http://127.0.0.1:8000/api/products";

export function getProducts(){
    return fetch(API_vegpont).then((response) => {
        if(!response.ok){
            throw new Error("Faild to fetch product");
        }
        return response.json() as Promise<productType[]>;
    })
}