export const gameInput= (input) => {
    return {
        type: 'INPUT',
        payload: input
    }
};

export const startGame = () => {
  return {
      type: 'START'
  };
};