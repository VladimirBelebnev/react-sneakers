export const useTotalPrice = (data) => {
    return data
        .filter((sneakers) => sneakers.isCart)
        .reduce((sum, sneakers) => sneakers.price + sum, 0);
};
