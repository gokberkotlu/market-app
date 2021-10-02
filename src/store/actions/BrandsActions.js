export const addBrand = (brand) => {
    return {
        type: 'ADD-BRAND',
        payload: brand
    }
}

export const deleteBrand = (brand) => {
    return {
        type: 'DELETE-BRAND',
        payload: brand
    }
}

export const resetBrand = () => {
    return {
        type: 'RESET-BRAND'
    }
}