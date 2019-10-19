// imports 

// actions

export const INCREMENT = "INCREMENT"
export const increment = number => {
    return {
        type: INCREMENT,
        payload: number
    }
}

export const DECREMENT = "DECREMENT"
export const decrement = () => {
    return {
        type: "DECREMENT"
    }
}

