import { getProductDataSessionStorage } from "./getProductDataSessionStorage"
import { setProductDataSessionStorage } from "./setProductDataSessionStorage"

export function useSessionStorage() {
    return { getProductDataSessionStorage, setProductDataSessionStorage }
}