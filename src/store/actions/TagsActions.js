export const addTag = (tag) => {
    return {
        type: 'ADD-TAG',
        payload: tag
    }
}

export const deleteTag = (tag) => {
    return {
        type: 'DELETE-TAG',
        payload: tag
    }
}

export const resetTag = () => {
    return {
        type: 'RESET-TAG'
    }
}