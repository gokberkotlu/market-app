export const nextPage = () => {
    return {
        type: 'NEXT-PAGE'
    }
}

export const previousPage = () => {
    return {
        type: 'PREVIOUS-PAGE'
    }
}

export const selectPage = (selected) => {
    return {
        type: 'SELECTED-PAGE',
        payload: selected
    }
}

export const resetPage = () => {
    return {
        type: 'RESET-PAGE'
    }
}